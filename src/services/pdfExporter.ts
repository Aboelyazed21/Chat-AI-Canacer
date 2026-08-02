import jsPDF from 'jspdf';
import { ChatMessage } from '../types';

export function exportChatToPDF(messages: ChatMessage[], title = 'OncoCare AI - Medical Consultation Report') {
  const doc = new jsPDF();
  let y = 20;

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, 210, 30, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 14, 18);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated on: ${new Date().toLocaleString()} | Verified Medical Source Summary`, 14, 25);

  y = 40;

  messages.forEach((msg, index) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    const isUser = msg.role === 'user';

    // Role Indicator
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    if (isUser) {
      doc.setTextColor(13, 148, 136); // teal-600
      doc.text(`Patient Question (${msg.timestamp}):`, 14, y);
    } else {
      doc.setTextColor(30, 58, 138); // blue-900
      doc.text(`OncoCare AI Response (${msg.timestamp}):`, 14, y);
    }
    y += 7;

    // Content text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59); // slate-800

    if (msg.structuredResponse) {
      const resp = msg.structuredResponse;
      const textLines = doc.splitTextToSize(`SUMMARY: ${resp.summary}\n\nEXPLANATION:\n${resp.detailedExplanation}`, 180);

      textLines.forEach((line: string) => {
        if (y > 275) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 14, y);
        y += 5;
      });

      if (resp.treatmentOptions && resp.treatmentOptions.length > 0) {
        y += 3;
        doc.setFont('helvetica', 'bold');
        doc.text('Treatment Options:', 14, y);
        y += 5;
        doc.setFont('helvetica', 'normal');
        resp.treatmentOptions.forEach((opt) => {
          if (y > 275) { doc.addPage(); y = 20; }
          doc.text(`• ${opt}`, 18, y);
          y += 5;
        });
      }

      if (resp.references && resp.references.length > 0) {
        y += 3;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(71, 85, 105);
        doc.text('Medical References & Citations:', 14, y);
        y += 5;
        doc.setFont('helvetica', 'normal');
        resp.references.forEach((ref) => {
          if (y > 275) { doc.addPage(); y = 20; }
          doc.text(`[${ref.source}] ${ref.title} (${ref.url})`, 18, y);
          y += 4;
        });
      }
    } else {
      const cleanContent = msg.content.replace(/[\#\*\_]/g, '');
      const textLines = doc.splitTextToSize(cleanContent, 180);
      textLines.forEach((line: string) => {
        if (y > 275) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 14, y);
        y += 5;
      });
    }

    y += 8;
  });

  // Footer Disclaimer
  if (y > 260) {
    doc.addPage();
    y = 20;
  }
  doc.setLineWidth(0.5);
  doc.setDrawColor(203, 213, 225);
  doc.line(14, y, 196, y);
  y += 6;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  const disclaimerText = doc.splitTextToSize(
    'Medical Disclaimer: This report provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult an oncologist or qualified physician.',
    180
  );
  doc.text(disclaimerText, 14, y);

  doc.save(`OncoCare_AI_Report_${Date.now()}.pdf`);
}
