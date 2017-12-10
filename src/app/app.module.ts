import * as angular from 'angular';

import { moduleName as coreModule } from './core/core.module';

export const moduleName =
    angular.module('application', [
        coreModule
    ])
    .name;
