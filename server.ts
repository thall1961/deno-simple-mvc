import { listenAndServe } from './server.bundle.js';
import mainController from './controllers/main.js';

interface Response {
    body: any;
}

interface Route {
    path: string;
    handler: any;
}

const routes: Route[] = [
    { path: '/', handler: mainController.home },
    { path: '/blog', handler: mainController.blog },
    { path: '/favicon.ico', handler: () => '' }
];

function router(route: string): Response {
    const foundRoute = routes.find(r => r.path === route);
    return {
        body: foundRoute?.handler() || null
    };
}

listenAndServe({ port: 8000 }, (req: any) => {
    const body = router(req.url);
    req.respond(body);
});

