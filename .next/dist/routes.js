'use strict';

var routes = module.exports = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsT0FBTyxBQUFQLFVBQWlCLEFBQWhDOztBQUVBLE9BQ0csQUFESCxJQUNPLEFBRFAsa0JBQ3lCLEFBRHpCLGlCQUVHLEFBRkgsSUFFTyxBQUZQLHVCQUU4QixBQUY5QixtQkFHRyxBQUhILElBR08sQUFIUCxnQ0FHdUMsQUFIdkMsNkJBSUcsQUFKSCxJQUlPLEFBSlAsb0NBSTJDLEFBSjNDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhdmV0b29tZXkvRG9jdW1lbnRzL2V0aC1wcm9qZWN0cy9FdGhlcmV1bUNhc3RzL2tpY2tzdGFydGVyLWV0aGVyZXVtIn0=