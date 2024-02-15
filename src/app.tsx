// @refresh reload
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start';
import { Suspense } from 'solid-js';


export default function App() {

  return (
    <main>
      <Router root={(props) => (
        <>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <Suspense>
            {props.children}
          </Suspense>
        </>
      )}>
        <FileRoutes />
      </Router>
    </main>
  );
}
