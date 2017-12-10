export const routing = ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
  'ngInject';
  $stateProvider
    .state('test', {
      url: '/test',
      component: 'test'
    });
    $urlRouterProvider.otherwise('/test');
};
