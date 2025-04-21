import React, { useState } from "react";

const DocumentViewer = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setFileName(file.name);
  };

  return (
    <div className="mt-10 bg-white/15 backdrop-blur-lg rounded-3xl p-6 text-white shadow-lg border border-white/20">
      <h2 className="text-2xl font-semibold mb-4 font-mono">Study Material Viewer</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />

      {fileUrl && (
        <div className="mt-4">
          <p className="mb-2 text-white/80">Previewing: <span className="font-bold">{fileName}</span></p>
          <iframe
            src={fileUrl}
            title="Document Preview"
            className="w-full h-[500px] rounded-xl border border-white/20"
          />
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
