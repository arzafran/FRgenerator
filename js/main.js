$(function() {
  var RF_number = 1;
  $("#data").validate({
    rules: {
      reqName: "required",
      reqDescription: "required",
      reqUsers: "required",
    },
    messages: {
      reqName: "Agregue un nombre",
      reqDescription: "Agregue la descripcion",
      reqUsers: "Agregue al menos un actor"
    }
  });
  $('#addRow').on('click', function() {
    if ($('#data').valid()) {
      var $reqName = $('#reqName').val(),
        $reqDescription = $('#reqDescription').val(),
        $reqUsers = $('#reqUsers').val(),
        $mainTable = $('#mainTable > tbody:last-child'),
        row = '<tr><td>RF_' + RF_number + '</td>' +
        '<td>' + $reqName + '</td>' +
        '<td>' + $reqDescription + '</td>' +
        '<td>' + $reqUsers + '</td></tr>';
      $mainTable.append(row);
      RF_number++;
      $('#form-error').addClass('hide');
      $('form').trigger('reset');
    } else {
      $('#form-error').removeClass('hide');
    }
  });
  $('#exportXls').on('click', function(){
    $("#mainTable").table2excel({
      // exclude: ".excludeThisClass",
      name: "Worksheet Name",
      filename: "Report" //do not include extension
    });
  });
});
