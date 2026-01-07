export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Trust & Compliance
        </h1>
        <p className="mt-2 text-gray-600">
          Security, compliance, and automation transparency
        </p>
      </header>

      {/* Overall Status */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Overall Compliance</p>
          <p className="text-5xl font-bold text-green-600 mt-2">87%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Framework</p>
          <p className="text-xl font-semibold mt-2">ISO/IEC 27001</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Last Assessment</p>
          <p className="text-lg mt-2">8 Jan 2026</p>
        </div>
      </section>

      {/* Control Domains */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Control Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="font-medium">A.12 – Operations Security</p>
            <p className="text-green-600 mt-2">✔ Compliant</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="font-medium">A.16 – Incident Management</p>
            <p className="text-yellow-600 mt-2">⚠ Partially Compliant</p>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Evidence & Documents</h2>

        <div className="bg-white p-5 rounded-xl shadow">
          <ul className="list-disc pl-5 space-y-2 text-blue-600">
            <li>ISO 27001 Statement of Applicability (SoA)</li>
            <li>Incident Response Automation Evidence</li>
            <li>GitHub Audit Logs (Last 30 days)</li>
            <li>Datadog Security Events</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

