angular.module("umbraco")
    .controller("custom.propertyeditors.grid.contentpickereditorcontroller",
        function ($scope, $rootScope, $timeout, editorService) {

            $scope.setContentId = function () {

                const contentPicker = {
                    id: 1070,
                    submit: function (model) {
                        var selection = model.selection[0];
                        $scope.control.value = {
                            id: selection.id,
                            name: selection.name,
                            udi: selection.udi
                        };
                        $scope.setPreview();
                        editorService.close();
                    },
                    close: function () {
                        editorService.close();
                    }
                };
                editorService.contentPicker(contentPicker);
            };

            $scope.setPreview = function () {

                if (!$scope.control.value.id) return;

                $scope.id = $scope.control.value.id;
                $scope.name = $scope.control.value.name;
                $scope.udi = $scope.control.value.udi;
            };

            $timeout(function () {
                if ($scope.control.$initializing) {
                    $scope.setContentId();
                } else {
                    $scope.setPreview();
                }
            }, 200);

        });


