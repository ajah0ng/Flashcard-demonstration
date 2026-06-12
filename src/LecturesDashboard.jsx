import { useState } from "react";

// Landing page of each unique deck's list of lectures. 
function LecturesDashboard() {
  return (
    <div id="lectures-dashboard-container">

      <h1>26T1 Final BABS3121 - Molecular Biology of Nucleic Acids</h1>

      <div id="lectures-individual-container">
        <ul>
          <li className="lecture-card">Lecture 10: RNA Translation</li>
          <li className="lecture-card">Lecture 11: Non Coding RNA</li>
          <li className="lecture-card">Lecture 12: Long Non-Coding RNAs</li>
          <li className="lecture-card">Lecture 13: Circular RNAs</li>
          <li className="lecture-card">Lecture 14: Transcriptomics I</li>
          <li className="lecture-card">Lecture 15: Long Non-Coding RNAs</li>
          <li className="lecture-card">Lecture 17: RNA Theraputics</li>
          <li className="lecture-card">Lecture 18: Viral Vectors & Gene Therapy</li>
          <li className="lecture-card">Lecture 19: Viral Vectors & Gene Therapy II</li>
          <li className="lecture-card">Lecture 20: DNA Replication and Repair</li>

        </ul>

      </div>

    </div>
  );
}

export default LecturesDashboard;