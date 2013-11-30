$(function () {
  $.getJSON('https://api.github.com/users/wedata/repos', {
    type : 'all',
    sort : 'full_name' // 'updated'
  }, function (json) {
    var $table = $('#databases');
    $.each(json, function (i, database) {
      if (database.name === 'wedata.github.io') {
        return;
      }

      var $tr = $('<tr/>').appendTo($table);

      var $td = $('<td/>').appendTo($tr);
      $('<a/>', {
        href : database.homepage
      }).append(database.name).appendTo($td);

      $('<td/>').append(database.description).appendTo($tr);

      $td = $('<td/>').appendTo($tr);
      $('<a/>', {
        href : database.html_url
      }).append(database.html_url).appendTo($td);

//      $('<td/>').append(new Date(database.updated_at)).appendTo($tr);
      $.getJSON('https://api.github.com/repos/wedata/' + database.name + '/branches/gh-pages', {
      }, function (branch) {
        $('<td/>').append(new Date(branch.commit.commit.committer.date)).appendTo($tr);
      });
    });
  });
});