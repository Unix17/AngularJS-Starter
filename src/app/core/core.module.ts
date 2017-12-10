import * as angular from 'angular';

import { Root } from './components/root/root.component';

import { configuration } from './core.configuration';
import { routing } from './core.routes';
import { Test } from './components/test/test.component';

export const moduleName =
    angular.module('application.core', [
        'ui.router'
    ])

    .component('test', Test)
    .component('root', Root)

    .config(configuration)
    .config(routing)
    .name;
