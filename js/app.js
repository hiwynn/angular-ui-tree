var myAppModule = angular.module('MyApp', ['ui.tree']);
myAppModule.controller('ListCtrl', ['$scope', '$http', '$q', function ($scope) {
  $scope.remove = function (scope) {
    scope.remove();
  };

  $scope.toggle = function (scope) {
    scope.toggle();
  };

  $scope.moveLastToTheBeginning = function () {
    var a = $scope.data.pop();
    $scope.data.splice(0, 0, a);
  };

  $scope.newSubItem = function (scope) {
    var nodeData = scope.$modelValue;
    nodeData.nodes.push({
      id: nodeData.id * 10 + nodeData.nodes.length,
      title: nodeData.title + '.' + (nodeData.nodes.length + 1),
      nodes: []
    });
  };

  $scope.collapseAll = function () {
    $scope.$broadcast('angular-ui-tree:collapse-all');
  };

  $scope.expandAll = function () {
    $scope.$broadcast('angular-ui-tree:expand-all');
  };

  $scope.sorceData = [
    {
      "AttributeOptionId": 4258,
      "Value": "100-art",
      "DisplayText": null,
      "SortOrder": 0,
      "defaultDisplayText": null
    },
    {
      "AttributeOptionId": 4302,
      "Value": "111",
      "DisplayText": null,
      "SortOrder": 2,
      "defaultDisplayText": null
    },
    {
      "AttributeOptionId": 4259,
      "Value": "200-film",
      "DisplayText": null,
      "SortOrder": 7,
      "defaultDisplayText": null
    },
    {
      "AttributeOptionId": 4260,
      "Value": "300-water",
      "DisplayText": null,
      "SortOrder": 12,
      "defaultDisplayText": null
    }
  ];

  for (var i = 0; i < $scope.sorceData.length; i++) {
    $scope.sorceData[i]["nodes"] = [];
  }
  $scope.ourData = $scope.sorceData;
  console.log($scope.ourData);

  $scope.data = [{
    'id': 1,
    'title': 'node1',
    'nodes': [
      {
        'id': 11,
        'title': 'node1.1',
        'nodes': [
          {
            'id': 111,
            'title': 'node1.1.1',
            'nodes': []
          }
        ]
      },
      {
        'id': 12,
        'title': 'node1.2',
        'nodes': []
      }
    ]
  }, {
    'id': 2,
    'title': 'node2',
    'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
    'nodes': [
      {
        'id': 21,
        'title': 'node2.1',
        'nodes': []
      },
      {
        'id': 22,
        'title': 'node2.2',
        'nodes': []
      }
    ]
  }, {
    'id': 3,
    'title': 'node3',
    'nodes': [
      {
        'id': 31,
        'title': 'node3.1',
        'nodes': []
      }
    ]
  }];

  $scope.tree2 = [{
    'id': 1,
    'title': 'tree2-item1',
    'nodes': []
  }, {
    'id': 2,
    'title': 'tree2-item2',
    'nodes': []
  }, {
    'id': 3,
    'title': 'tree2-item3',
    'nodes': []
  }, {
    'id': 4,
    'title': 'tree2-item4',
    'nodes': []
  }];


}]);