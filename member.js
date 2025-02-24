function skillsMember()
{
    return {
        restrict: 'E',
        templateUrl: 'app/member/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}