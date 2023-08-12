$(document).ready(function () {
  $.getJSON("place_name.json", function (data) {
      $(".placecard-name span").each(function (index) {
          if (index < data.length) {
              $(this).text(data[index]);
          }
      });
  });

  $.getJSON("categories.json", function (data) {
      $(".placecard-category .placecard-text2 span").each(function (index) {
          if (index < data.length) {
              $(this).text(data[index]);
          }
      });
  });
});
