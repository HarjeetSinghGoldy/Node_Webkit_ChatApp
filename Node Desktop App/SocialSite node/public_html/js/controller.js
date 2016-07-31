app.controller('PostCtrl',
        function ($scope) {
            var id;
            $scope.posts = [
                {   
                    id : 0,
                    username: 'Hajreet',
                    body: 'I am learnign angularjs'
                }
               , {
                    id : 1,
                    username: 'Goldy',
                    body: 'i am leaning node js'

                }
            ];
            // the function runs when the "Add Post" button is clicked
            $scope.addPost = function () {
                // Only add a post if there is a body
                
                
              
                    
                   
                if ($scope.postBody) {
                    id = $scope.posts.length;
                    console.log(id);
                    // unshift a new post into $scope.posts
                    $scope.posts.push({
                        id : id,
                        username: $scope.postUser,
                        body: $scope.postBody // use the text entered
                        
                    });
                    // clear out the input field
                  
                    $scope.postBody = null;
                
                
            }
        };
            $scope.reomvePost = function(post){
              /*  console.log(post);
                console.log($scope.posts[post.id]);*/
                console.log("length:"+$scope.posts.length);
                console.log("pos:"+$scope.posts[post.id].id);
                var pos = $scope.posts[post.id].id;
                var len =$scope.posts.length;
              
              if(pos > len+1)
                {
                console.log("not possible");
                }
              else{
                  $scope.posts.splice(pos,1);
              }
            };

        }
);


