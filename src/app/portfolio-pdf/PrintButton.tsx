"use client";

import { Download, Printer } from "lucide-react";

export default function PrintButton() {
    return (
        <div className="print:hidden sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
                <div>
                    <p className="text-sm font-semibold text-slate-950">
                        Portfolio PDF Preview
                    </p>
                    <p className="text-xs text-slate-500">
                        Choose Save as PDF in the print dialog.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                    <Printer size={16} />
                    Print / Save PDF
                    <Download size={16} />
                </button>
            </div>
        </div>
    );
}
