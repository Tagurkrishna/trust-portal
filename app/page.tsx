async function getComplianceData() {
  const res = await fetch(
    "https://shuffler.io/api/v1/hooks/webhook_adacd873-5248-42d7-9f97-9454f7de26b2",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch compliance data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getComplianceData();

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Trust & Compliance
        </h1>
        <p className="mt-2 text-gray-600">
          Live, automated compliance transparency
        </p>
      </header>

      {/* Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Overall Compliance</p>
          <p className="text-5xl font-bold text-green-600">
            {data.overall_compliance}%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Framework</p>
          <p className="text-xl font-semibold">
            {data.framework}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Last Updated</p>
          <p className="text-lg">
            {new Date(data.last_updated).toLocaleString()}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Execution ID: {data.live_marker}
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Control Coverage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.controls_summary.map((c: any) => (
            <div key={c.id} className="bg-white p-5 rounded-xl shadow">
              <p className="font-medium">{c.id}</p>
              <p className="mt-2">
                {c.status === "Compliant" && (
                  <span className="text-green-600">✔ Compliant</span>
                )}
                {c.status !== "Compliant" && (
                  <span className="text-yellow-600">
                    ⚠ {c.status}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Evidence & Documents
        </h2>

        <div className="bg-white p-5 rounded-xl shadow">
          <ul className="list-disc pl-5 space-y-2">
            {data.documents.map((d: any, i: number) => (
              <li key={i}>
                <strong>{d.name}</strong> — {d.status}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
