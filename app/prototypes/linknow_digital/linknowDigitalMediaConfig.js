define(['./module'], function (directives) {

  directives.directive("linknowDigitalMediaConfig", ["$timeout", 'MediaObjectService', function($timeout, MediaObjectService){
      return {
        restrict: 'E',
        scope: {
        	mediaObject: "=",
        	mediaStages: "="
        },
        controller: function($scope, $element) {

            $scope.onYouTubeChannelLogoChosen = function(v){
                v.state = MediaObjectService.states.UPLOADED;
                $scope.mediaObject.youtube_media = v;
            }

            $scope.onYouTubeVideoRemoved = function(){
                $scope.mediaObject.youtube_media = null;   
            }
        },
        templateUrl: '/prototypes/linknow_digital/media_object.html'
      };
    }]);

});