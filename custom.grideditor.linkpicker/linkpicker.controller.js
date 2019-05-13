angular.module("umbraco")
    .controller("custom.propertyeditors.grid.linkpickereditorcontroller",
        function ($scope, $rootScope, $timeout, editorService) {

            $scope.setContentId = function () {

                const linkPickerOverlay = {
                    currentTarget: $scope.control.value,
                    submit: function (model) {

                        $scope.control.value = model.target;
                        $scope.setPreview();
                        editorService.close();
                    },
                    close: function () {
                        editorService.close();
                    }
                };

                editorService.linkPicker(linkPickerOverlay);
            };

            $scope.setPreview = function () {

                if (!$scope.control.value.target) return;

                $scope.target = $scope.control.value.target;
            };

            $timeout(function () {
                if ($scope.control.$initializing) {
                    $scope.setContentId();
                } else {
                    $scope.setPreview();
                }
            }, 200);

        });


