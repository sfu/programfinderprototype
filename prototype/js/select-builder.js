/*jshint laxcomma:true*/

$('#selectLevel1').change(function(ev) {
    var programs = JSON.parse(document.getElementById('programsJson').innerHTML)
    ,   val = programs[$(this).val()]
    ,   html = ['<option value="">Select a program</option>'];
    if (val) {
        $('#selectLevel3').hide();
        $.each(val, function(i, item) {
            if (Object.prototype.toString.call(item) !== '[object Object]') {
                html.push('<option value="' + item + '">' + item + '</option>');
            } else {
                html[0] = '<option value="">Select a topic</option>';
                for (var ii in item) {
                    html.push('<option data-i="' + i + '" value="' + ii + '">' + ii + '</option>');                }
            }
        });
        $('#selectLevel2').html(html.join('')).show();
    } else {
        $('#selectLevel2, #selectLevel3').hide();
    }

});

$('#selectLevel2').change(function(ev) {
    var programs = JSON.parse(document.getElementById('programsJson').innerHTML)
    ,   el = $(this)
    ,   topLevel = $('#selectLevel1').val()
    ,   idx = el.find(':selected').data('i')
    ,   val = el.val()
    ,   html = ['<option value="">Select a program</option>'];
    if (idx >= 0) {
        var data = programs[topLevel][idx][val];
        for (var x = 0; x < data.length; x++) {
            html.push('<option value="' + data[x] + '">' + data[x] + '</option>');
        }
        $('#selectLevel3').html(html.join('')).show();
    } else {
        $('#selectLevel3').hide();
    }
});