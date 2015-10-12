describe('Directives ::', function() {
  var compile, scope, directiveElem, timeout;

    beforeEach(function(){
      module('playGame');

      inject(function($compile, $rootScope, $timeout){
        compile = $compile;
        scope = $rootScope.$new();
        timeout = $timeout;
      });

      directiveElem = getCompiledElement();
    });

    //after each
    afterEach(function(){
      directiveElem = undefined;
    })

    function getCompiledElement(){
      var element = angular.element('<card></card>');
      scope.name = "2clubs.png";
      var compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement;
    }

    it('should have an image element', function () {
        var imgElement = directiveElem.find('img');
        expect(imgElement).toBeDefined();
    });

    it('should emit card_flip on click', function (done) {
        spyOn(scope, "$emit").and.callThrough();
        scope.$on('card_flip', function(event, data) {
          expect(data).toEqual("2clubs.png");
          done();
          scope.$off('card_flip');
        });
        directiveElem.triggerHandler('click');
        expect(scope.$emit).toHaveBeenCalledWith("card_flip", "2clubs.png");
    });

    it('should prevent click on no_click ', function () {
        spyOn(scope, "$emit").and.callThrough();
        scope.$broadcast("no_click");
        directiveElem.triggerHandler('click');
        //config.noclick set to true
        expect(scope.$emit).not.toHaveBeenCalled();
    });

    it('should flip the card back on no_match', function(){
      directiveElem.triggerHandler('click');
      scope.$broadcast("no_match");
      timeout.flush()
      expect(scope.name).toEqual("panda.gif");
      //the card should be clickable
    });

    it('should show match when match event is emitted', function(){
      directiveElem.triggerHandler('click');
      scope.$broadcast("match");
      timeout.flush()
      expect(scope.name).toEqual("match.png");
      //the card should not be clickable

    });


});
