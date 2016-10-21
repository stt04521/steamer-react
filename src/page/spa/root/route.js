// import IndexWrapper from '../container/index';
// import CommentWrapper from '../container/comment';
import App from '../container/app';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}
function loadRoute(cb) {
    console.log("dynamic loading success");
    return (module) => cb(null, module.default);
}

export const routeConfig = {
    component: App,
    childRoutes: [
    {
        path: '/',
        getComponent(location, cb) {
            System.import('../container/index')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
        }
    },
    {
        path: 'detail/:id/:commentid',
        getComponent(location, cb) {
            System.import('../container/detail')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
        }
    },
    {
        path: 'comment/:id',
        getComponent(location, cb) {
            System.import('../container/comment')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
        }
    },
  ]
};

// export const routeConfig = [
//     {   path: '/spa.html',
//         component: App,
//         indexRoute: {
//             component: IndexWrapper,
//         },
//         childRoutes:[
//         	{
//         		path: '',
//         		component: IndexWrapper
//         	},
//         	{
//         		path: '/comment',
//         		component: CommentWrapper,
//         	}
//         ]
//     }
// ];
