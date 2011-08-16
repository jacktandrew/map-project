$(function() {




    $('#sup_text p').prepend('<span class="bullet"></span> &nbsp; &nbsp; &nbsp;');

    $('.quote').prepend('<span style="font-size: 44px">“</span> &nbsp;');
    $('.quote').append('<span style="font-size: 44px">”</span> &nbsp;');
    $('.quote_small').prepend('<span style="font-size: 28px" >“</span> &nbsp;');

    // $('.quote').append('&nbsp; <span style="font-size: 44px">”</span>');

    $('.city').prepend('(');
    $('.city').append(')');

    $('.produce').prepend(' &ndash; ');
    $('.produce').append('<br />');

    $('.ingredient').append('&nbsp; &ndash; &nbsp;');

    var items = $('.supplier_list li').get();
    items.sort(function(a,b){ 
      var keyA = $(a).text();
      var keyB = $(b).text();

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    
    var ul = $('.supplier_list');
    $.each(items, function(i, li){
      ul.append(li);
    });
});



