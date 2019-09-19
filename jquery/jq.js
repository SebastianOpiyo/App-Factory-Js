// 1 st ver
// $(document).ready(function(){
//     console.log("Yey we are in jQuery!");
// });

// // 2nd version
// console.log('Before the html loads');
// $(function(){
//     $('#para1').css('color', 'blue');
//     $('#showhide').css('color', 'yellow');
// })

// $(function(){
//     $('p').on({
//         mouseenter:function(){$(this).css('color', 'red').slideDown(2000);},
//         mouseleave:function(){$(this).css('color', 'yellow').slideUp(2000);},
//         click:function(){$(this).hide(1000);},
//     });
// })

//set
// $(function(){
//     $('.set').text('This text was put here');
//     console.log($('.get').html());
//     //$('.get').val(); // forms
// })

$(function(){
    $("#btn1").click(function(){
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random"
        }).then(function(data) {
           // console.log(data.value);
           $('.greeting-id').append(data.id).css('color', 'red');
           $('.greeting-content').append(data.value).css('color', 'blue');
        });
    });
  });