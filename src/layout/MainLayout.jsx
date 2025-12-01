const MainLayout = (props) => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1 className="app-title">Todo App</h1>
          <p className="app-subtitle">Stay on top of your daily tasks</p>
        </div>
      </header>

      <main className="main">
        <section className="card todo-card">
          {props.children}
          {/** Anything wrapped by MainLayout component will be rendered here */}
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
