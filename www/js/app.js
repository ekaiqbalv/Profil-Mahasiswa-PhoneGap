var Application = {
  initApplication: function() {
    $(window).load("pageinit", "#page-one", function() {
      Application.initShowMhs();
    });
    $(document).on("click", "#detail-mhs", function() {
      var nim = $(this).data("nimmhs");
      Application.initShowDetailMhs(nim);
    });
  },

  initShowMhs: function() {
    $.ajax({
      url: "http://ekaiqbalv.000webhostapp.com/web_service.php",
      type: "get",
      beforeSend: function() {
        $.mobile.loading("show", {
          text: "Please wait while retrieving data...",
          textVisible: true
        });
      },
      success: function(dataObject) {
        for (let index = 0; index < dataObject.length; index++) {
          var appendList =
            '<li><a href="#page-two?id=' +
            dataObject[index].NIM +
            '" target="_self" id="detail-mhs" data-nimmhs="' +
            dataObject[index].NIM +
            '"><h2>' +
            dataObject[index].Nama +
            "</h2><p>" +
            dataObject[index].NIM +
            "</p><p><b>" +
            dataObject[index].Fakultas +
            "</b></p></a></li>";
          $("#list-mhs").append(appendList);
          $("#list-mhs").listview("refresh");
        }
      },
      complete: function(dataObject) {
        $.mobile.loading("hide");
      }
    });
  },

  initShowDetailMhs: function(nim) {
    $.ajax({
      url: "http://ekaiqbalv.000webhostapp.com/web_service.php",
      type: "get",
      beforeSend: function() {
        $.mobile.loading("show", {
          text: "Please wait while retrieving data...",
          textVisible: true
        });
      },
      success: function(dataObject) {
        for (let index = 0; index < dataObject.length; index++) {
          if (dataObject[index].NIM == nim) {
            $(
              "#p-nim,#p-nama,#p-jurusan,#p-fakultas,#p-alamat,#p-nohp"
            ).empty();
            $("#p-nim").append("<b>NIM: </b>" + dataObject[index].NIM);
            $("#p-nama").append("<b>Nama: </b>" + dataObject[index].Nama);
            $("#p-jurusan").append("<b>Jurusan: </b>" + dataObject[index].Jurusan);
            $("#p-fakultas").append("<b>Fakultas: </b>" + dataObject[index].Fakultas);
            $("#p-alamat").append("<b>Alamat: </b>" + dataObject[index].Alamat);
            $("#p-nohp").append("<b>NoHp: </b>" + dataObject[index].NoHp);
          }
        }        
      },
      complete: function(dataObject) {
        $.mobile.loading("hide");
      }
    });
  }
};
