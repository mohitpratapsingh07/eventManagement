'use client';

import {
  Award,
  Calendar,
  ShieldCheck,
  Download,
  Eye,
} from "lucide-react";
import CertificateCard from "@/components/certificate/CertificateCard";

export default function CertificatesPage() {

  const certificates = [
  {
    id: 1,
    certificateId: "EH-2026-0001",
    userName: "Piyush Gupta",
    title: "Web Development Bootcamp",
    issuer: "IT Department",
    date: "20 May 2026",
  },
  {
    id: 2,
    certificateId: "EH-2026-0002",
    userName: "Piyush Gupta",
    title: "Advanced Python Programming",
    issuer: "Programming Club",
    date: "10 May 2026",
  },
  {
    id: 3,
    certificateId: "EH-2026-0003",
    userName: "Piyush Gupta",
    title: "UI/UX Design Workshop",
    issuer: "Design Club",
    date: "25 April 2026",
  },
  {
    id: 4,
    certificateId: "EH-2026-0004",
    userName: "Piyush Gupta",
    title: "Digital Marketing Essentials",
    issuer: "Marketing Club",
    date: "15 April 2026",
  },
  {
    id: 5,
    certificateId: "EH-2026-0005",
    userName: "Piyush Gupta",
    title: "Cloud Computing Basics",
    issuer: "Tech Club",
    date: "1 April 2026",
  },
];

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}

        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 mb-10">

          <span className="
            inline-flex
            items-center
            gap-2
            bg-blue-50
            text-blue-700
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Certificates
          </span>

          <h1 className="text-5xl font-bold text-slate-900 mt-6">

            Achievements & Credentials

          </h1>

          <p className="text-slate-500 text-lg mt-5 max-w-3xl">

            View, verify and download certificates earned
            from workshops, events and training programs.

          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

            <Award
              size={28}
              className="text-blue-600 mb-5"
            />

            <h2 className="text-4xl font-bold text-slate-900">
              5
            </h2>

            <p className="text-slate-500 mt-2">
              Total Certificates
            </p>

          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

            <Calendar
              size={28}
              className="text-green-600 mb-5"
            />

            <h2 className="text-4xl font-bold text-slate-900">
              24
            </h2>

            <p className="text-slate-500 mt-2">
              Hours Completed
            </p>

          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

            <ShieldCheck
              size={28}
              className="text-purple-600 mb-5"
            />

            <h2 className="text-4xl font-bold text-slate-900">
              100%
            </h2>

            <p className="text-slate-500 mt-2">
              Verified
            </p>

          </div>

        </div>

        {/* Certificate Cards */}

        <div className="grid lg:grid-cols-2 gap-7">

          {certificates.map((certificate) => (

  <CertificateCard
  key={certificate.id}
  certificateId={certificate.certificateId}
  userName={certificate.userName}
  title={certificate.title}
  issuer={certificate.issuer}
  date={certificate.date}
/>

))}

        </div>

      </div>

    </div>
  );
}