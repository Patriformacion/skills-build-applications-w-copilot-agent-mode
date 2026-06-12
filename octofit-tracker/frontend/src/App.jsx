import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="p-4 rounded-4 shadow-sm bg-light border">
        <p className="text-uppercase text-primary fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold mb-3">Modern multi-tier fitness tracking</h1>
        <p className="lead text-secondary mb-4">
          React 19 and Vite power the presentation tier, while the backend will expose the
          logic and MongoDB data services for the OctoFit application.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <a className="btn btn-primary btn-lg" href="http://localhost:8000/health">
            View API health
          </a>
          <a className="btn btn-outline-secondary btn-lg" href="http://localhost:5173/">
            Frontend dev server
          </a>
        </div>
      </section>

      <section className="row g-4 mt-2">
        <article className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="h5">Activities</h2>
              <p className="text-secondary mb-0">Track workouts, routines, and progress.</p>
            </div>
          </div>
        </article>
        <article className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="h5">Teams</h2>
              <p className="text-secondary mb-0">Create teams and compare leaderboard results.</p>
            </div>
          </div>
        </article>
        <article className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="h5">Profiles</h2>
              <p className="text-secondary mb-0">Support personalized suggestions and fitness goals.</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
