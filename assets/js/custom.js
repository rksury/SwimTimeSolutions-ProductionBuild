// //jquery auto height
//
// jQuery.fn.autoHeight1 = function (options) {
//   var defaults = {
//     textColor: "#000"
//   };
//   var opt = $.extend({}, defaults, options);
//   return this.each(function () {
//     var ele = $(this);
//
//     function setHeight() {
//       var windowHeight1 = $(window).height();
//       ele.css({"height": windowHeight1});
//     }
//
//     setHeight();
//     $(window).resize(function () {
//       setHeight();
//     });
//   });
// };
//
// $(function () {
//   $(".autoHeight").autoHeight1();
// });
//
// jQuery.fn.autoHeight2 = function (options) {
//   var defaults = {
//     textColor: "#000"
//   };
//   var opt = $.extend({}, defaults, options);
//   return this.each(function () {
//     var ele = $(this);
//
//     function setHeight() {
//       var windowHeight2 = $(window).height();
//       ele.css({"height": windowHeight2 - 270});
//     }
//
//     setHeight();
//     $(window).resize(function () {
//       setHeight();
//     });
//   });
// };
//
// $(function () {
//   $(".autoHeight-appo").autoHeight2();
// });
//
// jQuery.fn.autoHeight = function (options) {
//   var defaults = {
//     textColor: "#000"
//   };
//   var opt = $.extend({}, defaults, options);
//   return this.each(function () {
//     var ele = $(this);
//
//     function setHeight() {
//       var windowHeight = $(window).height();
//       ele.css({"max-height": windowHeight - 220});
//     }
//
//     setHeight();
//     $(window).resize(function () {
//       setHeight();
//     });
//   });
// };
//
// $(function () {
//   $(".autoHeight-ins").autoHeight();
// });
//
// $(document).ready(function () {
//   var myDates = [];
//   for (var j = 0; j <= 11; j++) {
//     myDates[j] = [];
//     console.log("121211221", myDates)
//   }
// });
//
//
// $(function () {
//   $('#calendar').datepicker({minDate: 0});
//   initCalendar();
// });
//
// var individualDate = [];
//
// function initCalendar() {
//   $('div.ui-widget-header').append('\
//         <a class="ui-datepicker-clear-month" title="Clear Date" >\X\ </a>\
//     ');
//
//   var thisMonth = $($($('#calendar tbody tr')[2]).find('td')[0]).attr('data-month');
//   var dateDragStart = undefined; // We'll use this variable to identify if the user is mouse button is pressed (if the user is dragging over the calendar)
//   individualDate = [];
//   var calendarTds = $('.ui-datepicker-calendar td:not(.ui-datepicker-unselectable)');
//   $('#calendar td').attr('data-event', '');
//   $('#calendar td').attr('data-handler', '');
//   $('#calendar td a').removeClass('ui-state-active');
//   $('#calendar td a.ui-state-highlight').removeClass('ui-state-active').removeClass('ui-state-highlight').removeClass('ui-state-hover');
//   $('#calendar td').off();
//   for (var i = 0; i < myDates[thisMonth].length; i++) { // Repaint
//     var a = calendarTds.find('a').filter('a:textEquals(' + myDates[thisMonth][i].getDate() + ')').addClass('ui-state-active');
//     individualDate.push(new Date(a.parent().attr('data-year'), thisMonth, a.html()));
//   }
// }
//
// $(document).ready(function () {
//   var dateDragStart = undefined;
//   $('#calendar td').mousedown(function () { // Click or start of dragging
//     dateDragStart = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
//     $(this).find('a').addClass('ui-state-active');
//     return false;
//   });
// });
//
// $(document).ready(function () {
//   var dateDragStart = undefined;
//   var thisMonth = $($($('#calendar tbody tr')[2]).find('td')[0]).attr('data-month');
//   var calendarTds = $('.ui-datepicker-calendar td:not(.ui-datepicker-unselectable)');
//
//   $('#calendar td').mouseup(function () {
//     individualDate = [];
//     $('#calendar td a.ui-state-active').each(function () { //Save selected dates
//       individualDate.push(new Date($(this).parent().attr('data-year'), $(this).parent().attr('data-month'), $(this).html()));
//     });
//   });
//
//   $('#calendar td').mouseenter(function () { // Drag over day on calendar
//     var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
//     if (dateDragStart !== undefined && thisDate > dateDragStart) { // We are dragging forwards
//       for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
//         calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
//       }
//       $(this).find('a').addClass('ui-state-active');
//     } else if (dateDragStart !== undefined && thisDate < dateDragStart) { // We are dragging backwards
//       for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
//         calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
//       }
//       $(this).find('a').addClass('ui-state-active');
//     }
//   });
//
//   $('#calendar td').mouseleave(function () {
//     var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
//     if (dateDragStart !== undefined && thisDate > dateDragStart) {
//       for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
//         if (individualDate.find(item => item.getTime() === d.getTime()) === undefined) {
//           calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
//         }
//       }
//     } else if (dateDragStart !== undefined && thisDate < dateDragStart) {
//       for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
//         if (individualDate.find(item => item.getTime() === d.getTime()) === undefined) {
//           calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
//         }
//       }
//     }
//   });
//
//   $('.ui-datepicker-clear-month').click(function () {
//     individualDate = [];
//     calendarTds.find('a').removeClass('ui-state-active');
//   });
//
//   $('a.ui-datepicker-next, a.ui-datepicker-prev').click(function () {
//     myDates[thisMonth] = individualDate;
//     initCalendar();
//   });
// });
//
//
// $.expr[':'].textEquals = function (el, idx, selector) {
//   var regExp = new RegExp('^' + selector[3] + '$');
//   return regExp.test($(el).text());
// };
//
//
// $(document).ready(function () {
//   $('.registration-form fieldset:first-child').fadeIn('slow');
//
//   $('.registration-form input[type="text"]').on('focus', function () {
//     $(this).removeClass('input-error');
//   });
//
//   // next step
//   $('.registration-form .btn-next').on('click', function () {
//     console.log('date from custom JS', individualDate);
//     var parent_fieldset = $(this).parents('fieldset');
//     var next_step = true;
//
//
//     if (next_step) {
//       parent_fieldset.fadeOut(400, function () {
//         $(this).next().fadeIn();
//
//       });
//     }
//
//   });
//
//   // previous step
//   $('.registration-form .btn-third').on('click', function () {
//     $(this).parents('fieldset').fadeOut(400, function () {
//       $(this).nextAll(".confirm-section").fadeIn();
//       $(".confirm-section").addClass("previous-third");
//       $(".confirm-section").find(".prev-btn").addClass("third-prev");
//
//     });
//   });
//
//   $(document).ready(function () {
//
//     $('.registration-form .btn-previous').on('click', function () {
//
//
//       if ($(".third-prev")[0]) {
//
//         $(this).parents('fieldset').fadeOut(400, function () {
//           $(this).prevAll(".first-fieldset-section").fadeIn();
//         });
//
//       } else {
//
//         $(this).parents('fieldset').fadeOut(400, function () {
//           $(this).prev().fadeIn();
//         })
//
//       }
//
//
//     });
//
//
//   });
//
//
//   /**********************add this js also**************************/
//   $('.registration-form .btn-first').on('click', function () {
//     $(this).parents('fieldset').fadeOut(400, function () {
//       $('.first-step').fadeIn();
//     });
//     $(".confirm-section").find(".prev-btn").removeClass("third-prev");
//   });
//
//   // submit
//
//
// });
//
// $(document).ready(function () {
//   $('#select-time ul>li').on('click', function () {
//     let getValue = $(this).text();
//     $(this).parents('ul').prevAll('button').text(getValue);
//   });
// });
//
//
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//
//   //>=, not <=
//   if (scroll >= 200) {
//     //clearHeader, not clearheader - caps H
//     $(".main-header").addClass("darkHeader");
//   } else {
//     $(".main-header").removeClass("darkHeader");
//   }
// });
//
// $(document).ready(function () {
//   $('.head-menu-tag a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     var target = this.hash;
//     var $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//     }, 900, 'swing', function () {
//       // window.location.hash = target;
//     });
//   });
// });
//
// new WOW().init();
//
// // #####################################################################
//
// var multidate = [];
// var singleDate = $(function () {
//   $('#calendar table>tbody>tr>td>a').click(function () {
//     var i = $(this).text();
//     multidate.push(i)
//     // document.getElementById("onclickDate").innerHTML = "<p>" + individualDate + "</p>";
//     console.log("hululululululu", multidate)
//     var class_instructor = window.localStorage.getItem('class_instructor_id')
//     console.error("class_instructor", class_instructor)
//   });
// });
//
//
// // ----------------------------Select Complete Course---------------------
//
//
// var CompleteDate = [];
// $(document).ready(function () {
//   $('#calendar2').datepicker({
//     minDate: 0,
//     altField: '#Date3',
//     beforeShowDay: function (d) {
//       var disableDay = d.getDay();
//       return [(disableDay !== 0)];
//     },
//     // beforeShowDay: $.datepicker.noWeekends,
//     dateFormat: "yy-mm-dd",
//   });
//
//   $('#calendar2').find(".ui-state-default").removeClass("ui-state-active");
//   CompleteDate = [$(this).val()];
//
//
//   $("#clearDates").click(function () {
//     $('#calendar2').find(".ui-state-default").removeClass("ui-state-active");
//     CompleteDate = [$(this).val()];
//     console.log("calendar2Mydates", CompleteDate)
//   });
//
//
//   $('#appointment-popup').on('hidden.bs.modal', function () {
//     $('#calendar2').find(".ui-state-default").removeClass("ui-state-active");
//     CompleteDate = [$(this).val()];
//     individualDate = [];
//     $("#calendar").find('.ui-state-default').removeClass('ui-state-active');
//     window.location.reload();
//   })
//
//
//   $("#calendar2").on("change", function () {
//     CompleteDate = [$(this).val()];
//     // document.getElementById("singleDate").innerHTML = "<p>" + CompleteDate + "</p>";
//     console.log("calendar2Mydates", CompleteDate)
//     var class_instructor = window.localStorage.getItem('class_instructor_id')
//     console.error("class_instructor", class_instructor)
//   });
//
// });

//jquery auto height



jQuery.fn.autoHeight1 = function (options) {
  var defaults = {
    textColor: "#000"
  };
  var opt = $.extend({}, defaults, options);
  return this.each(function () {
    var ele = $(this);

    function setHeight() {
      var windowHeight1 = $(window).height();
      ele.css({"height": windowHeight1});
    }

    setHeight();
    $(window).resize(function () {
      setHeight();
    });
  });
};

$(function () {
  $(".autoHeight").autoHeight1();
});

jQuery.fn.autoHeight2 = function (options) {
  var defaults = {
    textColor: "#000"
  };
  var opt = $.extend({}, defaults, options);
  return this.each(function () {
    var ele = $(this);

    function setHeight() {
      var windowHeight2 = $(window).height();
      ele.css({"height": windowHeight2 - 270});
    }

    setHeight();
    $(window).resize(function () {
      setHeight();
    });
  });
};

$(function () {
  $(".autoHeight-appo").autoHeight2();
});

jQuery.fn.autoHeight = function (options) {
  var defaults = {
    textColor: "#000"
  };
  var opt = $.extend({}, defaults, options);
  return this.each(function () {
    var ele = $(this);

    function setHeight() {
      var windowHeight = $(window).height();
      ele.css({"max-height": windowHeight - 220});
    }

    setHeight();
    $(window).resize(function () {
      setHeight();
    });
  });
};

$(function () {
  $(".autoHeight-ins").autoHeight();
});




// $(document).ready(function(){
//   $('.dropdown-menu li').on('click', function() {
//     var getValue = $(this).text();
//     console.log("get valueeeeeeeeeeeeeeeee",getValue)
//     $(this).parents('ul').prevAll('button').text(getValue);
//   });
// })


var myDates = [];
for (var j = 0; j <= 11; j++) {
  myDates[j] = [];
}




$(function () {
  $('#calendar').datepicker({
    // beforeShowDay: $.datepicker.noWeekends,
    // minDate: 0,
  });
  initCalendar();
});

var individualDate = [];
function initCalendar() {
  $('div.ui-widget-header').append('\
        <a class="ui-datepicker-clear-month" title="Clear Date" >\X\ </a>\
    ');

  var thisMonth = $($($('#calendar tbody tr')[2]).find('td')[0]).attr('data-month');
  var dateDragStart = undefined; // We'll use this variable to identify if the user is mouse button is pressed (if the user is dragging over the calendar)
  individualDate = [];
  var calendarTds = $('.ui-datepicker-calendar td:not(.ui-datepicker-unselectable)');
  $('#calendar td').attr('data-event', '');
  $('#calendar td').attr('data-handler', '');
  $('#calendar td a').removeClass('ui-state-active');
  $('#calendar td a.ui-state-highlight').removeClass('ui-state-active').removeClass('ui-state-highlight').removeClass('ui-state-hover');
  $('#calendar td').off();
  for (var i = 0; i < myDates[thisMonth].length; i++) { // Repaint
    var a = calendarTds.find('a').filter('a:textEquals(' + myDates[thisMonth][i].getDate() + ')').addClass('ui-state-active');
    individualDate.push(new Date(a.parent().attr('data-year'), thisMonth, a.html()));
  }

  $('#calendar td').mousedown(function () { // Click or start of dragging
    dateDragStart = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
    $(this).find('a').addClass('ui-state-active');
    return false;
  });

  $('#calendar td').mouseup(function () {
    individualDate = [];
    $('#calendar td a.ui-state-active').each(function () { //Save selected dates
      individualDate.push(new Date($(this).parent().attr('data-year'), $(this).parent().attr('data-month'), $(this).html()));
    });
    dateDragStart = undefined;
    return false;
  });
  $(document).mouseup(function () {
    dateDragStart = undefined;
  });

  $('#calendar td').mouseenter(function () { // Drag over day on calendar
    var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
    if (dateDragStart !== undefined && thisDate > dateDragStart) { // We are dragging forwards
      for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
        calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
      }
      $(this).find('a').addClass('ui-state-active');
    } else if (dateDragStart !== undefined && thisDate < dateDragStart) { // We are dragging backwards
      for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
        calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
      }
      $(this).find('a').addClass('ui-state-active');
    }
  });

  $('#calendar td').mouseleave(function () {
    var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
    if (dateDragStart !== undefined && thisDate > dateDragStart) {
      for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
        if (individualDate.find(item => item.getTime() === d.getTime()) === undefined) {
          calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
        }
      }
    } else if (dateDragStart !== undefined && thisDate < dateDragStart) {
      for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
        if (individualDate.find(item => item.getTime() === d.getTime()) === undefined) {
          calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
        }
      }
    }
  });

  $('.ui-datepicker-clear-month').click(function () {
    individualDate = [];
    calendarTds.find('a').removeClass('ui-state-active');
    console.log(individualDate);
  });

  $('a.ui-datepicker-next, a.ui-datepicker-prev').click(function () {
    myDates[thisMonth] = individualDate;
    console.log("111111111111111")
    initCalendar();
  });
}




$.expr[':'].textEquals = function (el, idx, selector) {
  var regExp = new RegExp('^' + selector[3] + '$');
  return regExp.test($(el).text());
};


$(document).ready(function () {
  $('.registration-form fieldset:first-child').fadeIn('slow');

  $('.registration-form input[type="text"]').on('focus', function () {
    $(this).removeClass('input-error');
  });

  // next step
  $('.registration-form .btn-next').on('click', function () {
    console.log('date from custom JS', individualDate);
    var parent_fieldset = $(this).parents('fieldset');
    var next_step = true;


    if (next_step) {
      parent_fieldset.fadeOut(400, function () {
        $(this).next().fadeIn();
      });
    }

  });

  // previous step
  $('.registration-form .btn-previous').on('click', function () {
    $(this).parents('fieldset').fadeOut(400, function () {
      $(this).prev().fadeIn();
    });
  });


  /**********************add this js also**************************/
  $('.registration-form .btn-first').on('click', function () {
    $(this).parents('fieldset').fadeOut(400, function () {
      $('.first-step').fadeIn();
    });
  });

  // submit


});




$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >=200) {
    //clearHeader, not clearheader - caps H
    $(".main-header").addClass("darkHeader");
  }
  else
  {
    $(".main-header").removeClass("darkHeader");
  }
});

$(document).ready(function(){
  $('.head-menu-tag a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      // window.location.hash = target;
    });
  });
});

new WOW().init();

// #####################################################################

var selectedDates = [];
var singleDate = $(function () {
  $('#calendar table>tbody>tr>td>a').click(function () {

    var i = $(this).text();
    selectedDates.push(i)
    // document.getElementById("onclickDate").innerHTML = "<p>" + individualDate + "</p>";
    console.log(selectedDates)
    var class_instructor = window.localStorage.getItem('class_instructor_id')
    console.error("class_instructor",class_instructor)
  });
});


// ----------------------------Select Complete Course---------------------


var CompleteDate = [];
$(function () {
  $('#calendar2').datepicker({
    altField: '#Date3',
    minDate: 0,
    beforeShowDay: $.datepicker.noWeekends,
    dateFormat: "yy-mm-dd",
  })
  $('#calendar2').find(".ui-state-default").removeClass("ui-state-active");
  CompleteDate = [$(this).val()];


  $("#clearDates").click(function(){
    $('#calendar2').find(".ui-state-default").removeClass("ui-state-active");
    CompleteDate = [$(this).val()];
    console.log("calendar2Mydates", CompleteDate)
  });

  $("#calendar2").on("change", function () {
    CompleteDate = [$(this).val()];
    // document.getElementById("singleDate").innerHTML = "<p>" + CompleteDate + "</p>";
    console.log("calendar2Mydates", CompleteDate)
    var class_instructor = window.localStorage.getItem('class_instructor_id')
    console.error("class_instructor",class_instructor)
  });

});

//############################################################


 function openModalSelectTime () {
   document.getElementById("calendar_popup").style.display = "none";
   document.getElementById("individual_date_time").style.display = "block";
 }

function openModalConfirmBooking () {
  document.getElementById("individual_date_time").style.display = "none";
  document.getElementById("booking_confirm").style.display = "block";
}

function openModalPaymentScreen () {
  document.getElementById("booking_confirm").style.display = "none";
  document.getElementById("payment_screen").style.display = "block";
}


function openModalPaymentConfirmData () {
  document.getElementById("payment_screen").style.display = "none";
  document.getElementById("paymentConfirm_data").style.display = "block";
}



function openCompleteModalConfirmBooking  () {
  document.getElementById("calendar_popup").style.display = "none";
  document.getElementById("booking_confirm").style.display = "block";
}

function openPrevious  () {
  document.getElementById("booking_confirm").style.display = "none";
  document.getElementById("individual_date_time").style.display = "block";
}

function openPreviousCalender  () {
  document.getElementById("booking_confirm").style.display = "none";
  document.getElementById("individual_date_time").style.display = "block";
}

function signupPopup () {
   $("#signup").modal({
     show:true
   })
}
