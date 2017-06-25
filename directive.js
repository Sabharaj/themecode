/**
 * @class Quiz.directives.horizontalBar
 * @description This is the horizontalBar directive.
 * @memberOf Quiz.directives
 */
export default angular
    .module('Quiz.directives.horizontalBar', [])
    .directive('horizontalBar', function () {
        return {
            scope: {
                'percent': '@',
                'index': '@'
            },
            transclude:true,
            template: require('./templates/main.html'),
            link: function (scope, attr, elem) {
                scope.primacy = ['primary', 'secondary', 'tertiary', 'quaternary'];
                scope.height = scope.percent ? 2 * scope.percent + 'px' : 0;
                scope.txtTop= scope.percent ? (!(parseInt(scope.height)/4) ? '5' : (parseInt(scope.height)/4)-5) + 'px' : 0; 

                console.log(scope.txtTop + " values");

                
            }
        }
    })
    .name;
