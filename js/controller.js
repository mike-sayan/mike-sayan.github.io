var app = angular.module('app');

app.controller('appController', ['$scope', function ($scope){
    $scope.projects = [];
    $scope.works = [];

    $scope.bio = {
        "title" : "Hi, I'm Mike",
        "paragraph" : "I'm a student earning my B.S. degree in Computer Science from Stony Brook University. My main interests are systems programming, game programming, and full stack web development. I love animation and music."
    };

    $scope.contact = {
        "email" : "sayan.michael@gmail.com",
        "telephone" : "(631) 913-8223"
    }

    var marshalls = {
        "title" : "Marshalls",
        "occupation" : "Cashier",
        "duration" : "June 2014 - June 2015",
        "description" : "Remaining calm when speaking to entitled customers, handling abnormally large purchases of towels, handling subsequent returns of said towels, and explaining the (few) benefits of a TJX Rewards Credit Card to unsuspecting customers."
    }

    var nickelodeon = {
        "title" : "Nickelodeon",
        "occupation" : "Backend Web Development Intern",
        "duration" : "January 2016 - Current",
        "description" : "Supporting all platforms including Web, iOS, Android, AppleTV, and Roku. Using Spring MVC, and MongoDB to implement RESTful architecture."
    }

    $scope.works.push(nickelodeon);
    $scope.works.push(marshalls);

    var drbill = {
        "title" : "Dr. Bill's Jewel Heist",
        "description" : "In Dr. Bill's Jewel Heist, use your jetpack to traverse levels, collect jewels, and avoid lasers & guards.",
        "tech" : "Developed theme, design, all media assets. Programmed logic, integrated SFML Audio & Box2D into game engine, created custom map importer, debug options, controller support, and all memory management"
    }

    var muse = {
        "title" : "Muse",
        "description" : "Online multiplayer music game, where users can collaborate to create music over the internet in real time using just their mouse",
        "tech" : "Architected and deployed a scalable multitiered solution using Node.JS, Socket IO, nginx, and etcd service discovery."
    }

    var nachos = {
        "title" : "NACHOS Functionality",
        "description" : "Added additional functionality to an Operating System running on a MIPS simulator",
        "tech" : "Implemented virtual memory, demand paging, various syscalls (exec, fork, join, read, write), round robin & multilevel feedback scheduling, console driver, directories, extensible files, and long files."
    }

    var ricochet = {
        "title" : "Ricochet Hell",
        "description" : "Local multiplayer top down shoot 'em up game, where bullets increase speed and power as they ricochet off walls.",
        "tech" : "Prototype game started as an exercise to learn the Unity game engine."
    }

    var jte = {
        "title" : "Journey Through Europe",
        "description" : "Recreation of a board game where players visit various cities in Europe",
        "tech" : "Created using JavaFX, all data stored in XML files, and implemented Dijkstra's algorithm for computer player AI."
    }
    $scope.projects.push(muse);
    $scope.projects.push(nachos);
    $scope.projects.push(ricochet);
    $scope.projects.push(drbill);
    $scope.projects.push(jte);

}]);