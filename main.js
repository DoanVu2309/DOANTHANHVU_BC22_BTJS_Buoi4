document.getElementById("btn_KQ1").onclick = function () {
  /**
   * INPUT
   * - Nhập vào ngày tháng năm
   * PROCESSING STEPS
   * - Xử lý ban đầu bằng các giá trị khởi tạo cho các biến của hôm trước và hôm sau
   * - Chia các trường hợp ngày, các trường hợp tháng, các trường hợp năm
   * Xử lý theo ngày
   * + Nếu tháng có 31 ngày thì các tháng đó bắt đầu từ ngày 1 và kết thúc ngày 31
   * + Nếu tháng có 30 ngày thì các tháng đó bắt đầu từ ngày 1 và kết thúc ngày 30
   * + Ngoại trừ tháng 2 thì có 28 ngày (năm thường) có 29 ngày (năm nhuận)
   * Xử lý theo tháng
   * + Tháng 1, 5, 7, 8, 10, 12 là những tháng có 31 ngày
   * => Riêng tháng 1 và tháng 12 sẽ có xử lý riêng:
   * 1. Vì tháng 1 thì ngày hôm trước là 31/12 thì sẽ phải lùi lại 1 năm
   * 2. Còn tháng 12 thì ngày hôm sau là ngày 1/1 thì sẽ phải tăng lên 1 năm
   * + Tháng 4, 6, 9, 11 là những tháng có 30 ngày
   * + Tháng 3 là tháng có 31 ngày nhưng trước tháng 3 là tháng 2 nên phải tách ra xử lý riêng
   * Xử lý theo năm
   * + Các tháng trong năm đều có đủ 30 ngày hoặc 31 ngày
   * + Ngoại trừ tháng 2 phải xử lý xem năm đó là năm thường hay năm nhuận
   * 1> Năm thường sẽ chỉ có 28 ngày
   * 2> Năm nhuận sẽ chỉ có 29 ngày
   * OUTPUT
   * - Tìm ngày tháng năm của hôm trước
   * - Tìm ngày tháng năm của hôm sau
   */
  // Ngày tháng năm nhập vào
  var nhapNgay = document.getElementById("txt_nhapNgay").value * 1;
  var nhapThang = document.getElementById("txt_nhapThang").value * 1;
  var nhapNam = document.getElementById("txt_nhapNam").value * 1;
  // Ngày tháng năm của hôm trước - Giá trị ban đầu được khởi tạo bằng với giá trị nhập vào
  var ngayHomTruoc = nhapNgay;
  var thangHomTruoc = nhapThang;
  var namHomTruoc = nhapNam;
  // Ngày tháng năm của hôm sau - Giá trị ban đầu được khởi tạo bằng với giá trị nhập vào
  var ngayHomSau = nhapNgay;
  var thangHomSau = nhapThang;
  var namHomSau = nhapNam;

  var hienThongBao = "";

  switch (nhapThang) {
    case 1:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (nhapNgay < 1 || nhapNgay > 31) {
        alert("Vui lòng nhập lại ngày tháng năm");
        break;
      }
      //Hôm trước
      if (nhapNgay == 1) {
        ngayHomSau = nhapNgay + 1;
        if (nhapThang == 1) {
          // Tại 1/1 thì khi lùi sẽ dính ngay tháng 12 và lùi 1 năm
          ngayHomTruoc = 31;
          thangHomTruoc = 12;
          namHomTruoc = nhapNam - 1;
        } else {
          // Còn không sẽ dính các tháng như 4,6,9,11 và các tháng này có 30 ngày
          ngayHomTruoc = 30;
          thangHomTruoc = nhapThang - 1;
        }
      }
      //Hôm sau
      else if (nhapNgay == 31) {
        ngayHomTruoc = nhapNgay - 1;
        if (nhapThang == 12) {
          // Tại 31/12 khi tăng 1 ngày sẽ dính tháng 1 và tăng 1 năm
          ngayHomSau = 1;
          thangHomSau = 1;
          namHomSau = nhapNam + 1;
        } else {
          // Còn không sẽ tới ngày 1 tháng tiếp theo
          ngayHomSau = 1;
          thangHomSau = nhapThang + 1;
        }
      }
      // Nếu là ngày trong tháng thì xử lý bth
      else {
        ngayHomSau = nhapNgay + 1;
        ngayHomTruoc = nhapNgay - 1;
      }
      hienThongBao =
        "Hôm trước là: " +
        ngayHomTruoc +
        " - " +
        thangHomTruoc +
        " - " +
        namHomTruoc;
      hienThongBao +=
        "<br>Hôm nay là: " + nhapNgay + " - " + nhapThang + " - " + nhapNam;
      hienThongBao +=
        "<br>Hôm sau là: " +
        ngayHomSau +
        " - " +
        thangHomSau +
        " - " +
        namHomSau;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (nhapNgay < 1 || nhapNgay > 30) {
        alert("Vui lòng nhập lại ngày tháng năm");
        break;
      }
      // Hôm trước
      if (nhapNgay == 1) {
        ngayHomSau = nhapNgay + 1;
        ngayHomTruoc = 31;
        thangHomTruoc = nhapThang - 1;
      }
      // Hôm sau
      else if (nhapNgay == 30) {
        ngayHomTruoc = nhapNgay - 1;
        ngayHomSau = 1;
        thangHomSau = nhapThang + 1;
      } else {
        ngayHomSau = nhapNgay + 1;
        ngayHomTruoc = nhapNgay - 1;
      }
      hienThongBao =
        "Hôm trước là: " +
        ngayHomTruoc +
        " - " +
        thangHomTruoc +
        " - " +
        namHomTruoc;
      hienThongBao +=
        "<br>Hôm nay là: " + nhapNgay + " - " + nhapThang + " - " + nhapNam;
      hienThongBao +=
        "<br>Hôm sau là: " +
        ngayHomSau +
        " - " +
        thangHomSau +
        " - " +
        namHomSau;
      break;
    case 3:
      if (nhapNgay < 1 || nhapNgay > 31) {
        alert("Vui lòng nhập lại ngày tháng năm");
        break;
      }
      // Hôm trước
      if (nhapNgay == 1) {
        ngayHomSau = nhapNgay + 1;
        // Xử lý tháng 3
        if ((nhapNam % 4 == 0 && nhapNam % 100 !== 0) || nhapNam % 400 == 0) {
          ngayHomTruoc = 29;
        } else {
          ngayHomTruoc = 28;
        }
        thangHomTruoc = 2;
      }
      // Hôm sau
      else if (nhapNgay == 31) {
        ngayHomTruoc = nhapNgay - 1;
        // Tháng sau là tháng 4
        ngayHomSau = 1;
        thangHomSau = 4;
      }
      // Nếu là ngày trong tháng thì xử lý bth
      else {
        ngayHomSau = nhapNgay + 1;
        ngayHomTruoc = nhapNgay - 1;
      }
      hienThongBao =
        "Hôm trước là: " +
        ngayHomTruoc +
        " - " +
        thangHomTruoc +
        " - " +
        namHomTruoc;
      hienThongBao +=
        "<br>Hôm nay là: " + nhapNgay + " - " + nhapThang + " - " + nhapNam;
      hienThongBao +=
        "<br>Hôm sau là: " +
        ngayHomSau +
        " - " +
        thangHomSau +
        " - " +
        namHomSau;
      break;
    case 2:
      // đoan này phải tìm ngày cuối của tháng 2 => xử lý năm nhuận
      var ngayCuoiCuaThang2 = 28;
      if ((nhapNam % 4 == 0 && nhapNam % 100 !== 0) || nhapNam % 400 == 0) {
        if (nhapNgay < 1 || nhapNgay > 29) {
          alert("Vui lòng nhập lại ngày tháng năm");
          break;
        } else {
          ngayCuoiCuaThang2 = 29;
        }
      } else {
        if (nhapNgay < 1 || nhapNgay > 28) {
          alert("Vui lòng nhập lại ngày tháng năm");
          break;
        } else {
          ngayCuoiCuaThang2 = 28;
        }
      }
      //Hôm trước
      if (nhapNgay == 1) {
        ngayHomSau = nhapNgay + 1;
        // Tháng trước là tháng 1
        ngayHomTruoc = 31;
        thangHomTruoc = 1;
      }
      //Hôm sau
      else if (nhapNgay == ngayCuoiCuaThang2) {
        ngayHomTruoc = nhapNgay - 1;
        // Tháng sau là tháng 3
        ngayHomSau = 1;
        thangHomSau = 3;
      }
      // Nếu là ngày trong tháng thì xử lý bth
      else {
        ngayHomSau = nhapNgay + 1;
        ngayHomTruoc = nhapNgay - 1;
      }
      hienThongBao =
        "Hôm trước là: " +
        ngayHomTruoc +
        " - " +
        thangHomTruoc +
        " - " +
        namHomTruoc;
      hienThongBao +=
        "<br>Hôm nay là: " + nhapNgay + " - " + nhapThang + " - " + nhapNam;
      hienThongBao +=
        "<br>Hôm sau là: " +
        ngayHomSau +
        " - " +
        thangHomSau +
        " - " +
        namHomSau;
      break;
    default:
      alert("Vui lòng nhập lại ngày tháng năm");
      break;
  }
  document.getElementById("txtThongBao_1").innerHTML = hienThongBao;
};

document.getElementById("btn_KQ2").onclick = function () {
  /**
   * INPUT
   * - Nhập vào tháng năm
   * PROCESSING STEPS
   * - Xử lý ban đầu bằng các giá trị khởi tạo cho các biến của hôm trước và hôm sau
   * - Chia các trường hợp ngày, các trường hợp tháng, các trường hợp năm
   * Xử lý theo ngày
   * + Nếu tháng có 31 ngày thì các tháng đó bắt đầu từ ngày 1 và kết thúc ngày 31
   * => Tháng 1, 3, 5, 7, 8, 10, 12
   * + Nếu tháng có 30 ngày thì các tháng đó bắt đầu từ ngày 1 và kết thúc ngày 30
   * => Tháng 4, 6, 9, 11
   * + Ngoại trừ tháng 2 thì có 28 ngày (năm thường) có 29 ngày (năm nhuận)
   * OUTPUT
   * - Tìm tháng đó có bao nhiêu ngày
   */
  // Tháng năm nhập vào
  var nhapThang = document.getElementById("txtNhapThang").value * 1;
  var nhapNam = document.getElementById("txtNhapNam").value * 1;

  var hienThongBao = "";

  switch (nhapThang) {
    case 2:
      if ((nhapNam % 4 == 0 && nhapNam % 100 !== 0) || nhapNam % 400 == 0) {
        hienThongBao =
          "Tháng " + nhapThang + " - " + nhapNam + " là tháng có 29 ngày";
      } else {
        hienThongBao =
          "Tháng " + nhapThang + " - " + nhapNam + " là tháng có 28 ngày";
      }
      break;
    case 1:
    case 5:
    case 3:
    case 7:
    case 8:
    case 10:
    case 12:
      hienThongBao =
        "Tháng " + +nhapThang + " - " + nhapNam + " là tháng có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      hienThongBao =
        "Tháng " + +nhapThang + " - " + nhapNam + " là tháng có 30 ngày";
      break;
    default:
      alert("Vui lòng nhập lại tháng năm");
      break;
  }
  document.getElementById("txtThongBao_2").innerHTML = hienThongBao;
};

document.getElementById("btn_KQ3").onclick = function () {
  /**
   * INPUT
   * - Nhập số nguyên có 3 chữ số
   * PROCESSING STEPS
   * - Xét điều kiện số 3 chữ số không được nhỏ 0 và lớn 999
   * => Nếu nhỏ hơn 0 sẽ ra số âm
   * => Nếu lớn hơn 999 sẽ ra số 4 chữ số
   * - Xử lý các hàng:
   * + Hàng trăm => số chia 100
   * + Hàng chục => số chia phần dư cho 100 và chia thêm 10
   * + Hàng đơn vị => số chia phần dư cho 10
   * - Xử lý cách đọc hàng trăm, hàng chục, hàng đơn vị
   * OUTPUT
   * - In ra cách đọc
   */
  var nhapSo = document.getElementById("txt_soNguyen").value * 1;
  var hienThongBao = "";

  if (nhapSo < 0 || nhapSo > 999) {
    hienThongBao = "Nhập lại số cần nhập";
  } else {
    var hangTram = Math.floor(nhapSo / 100);
    var hangChuc = Math.floor((nhapSo % 100) / 10);
    var hangDV = nhapSo % 10;
    switch (hangTram) {
      case 1:
        hangTram = "Một Trăm";
        break;
      case 2:
        hangTram = "Hai Trăm";
        break;
      case 3:
        hangTram = "Ba Trăm";
        break;
      case 4:
        hangTram = "Bốn Trăm";
        break;
      case 5:
        hangTram = "Năm Trăm";
        break;
      case 6:
        hangTram = "Sáu Trăm";
        break;
      case 7:
        hangTram = "Bảy Trăm";
        break;
      case 8:
        hangTram = "Tám Trăm";
        break;
      case 9:
        hangTram = "Chín Trăm";
        break;
      case 0:
        hangTram = "Không Trăm";
        break;
    }
    switch (hangChuc) {
      case 1:
        hangChuc = "Mười";
        break;
      case 2:
        hangChuc = "Hai Mươi";
        break;
      case 3:
        hangChuc = "Ba Mươi";
        break;
      case 4:
        hangChuc = "Bốn Mươi";
        break;
      case 5:
        hangChuc = "Năm Mươi";
        break;
      case 6:
        hangChuc = "Sáu Mươi";
        break;
      case 7:
        hangChuc = "Bảy Mươi";
        break;
      case 8:
        hangChuc = "Tám Mươi";
        break;
      case 9:
        hangChuc = "Chín Mươi";
        break;
      case 0:
        hangChuc = "Linh";
        break;
    }
    switch (hangDV) {
      case 1:
        hangDV = "Một";
        break;
      case 2:
        hangDV = "Hai";
        break;
      case 3:
        hangDV = "Ba";
        break;
      case 4:
        hangDV = "Bốn";
        break;
      case 5:
        hangDV = "Năm";
        break;
      case 6:
        hangDV = "Sáu";
        break;
      case 7:
        hangDV = "Bảy";
        break;
      case 8:
        hangDV = "Tám";
        break;
      case 9:
        hangDV = "Chín";
        break;
      case 0:
        hangDV = "Không";
        break;
    }
    hienThongBao = "Đọc là: " + hangTram + " " + hangChuc + " " + hangDV;
  }

  document.getElementById("txtThongBao_3").innerHTML = hienThongBao;
};

document.getElementById("btn_KQ4").onclick = function () {
  /**
   * INPUT
   * - Nhập vào tọa độ X và tọa độ Y của trường
   * - Nhập vào tọa độ X và tọa độ Y của sinh viên thứ nhất
   * - Nhập vào tọa độ X và tọa độ Y của sinh viên thứ hai
   * - Nhập vào tọa độ X và tọa độ Y của sinh viên thứ ba
   * PROCESSING STEPS
   * - Tính khoảng cách giữa nhà trường và các sinh viên
   * - So sánh khoảng cách giữa nhà trường và các sinh viên xem ai xa trường nhất
   * - Nếu không có sinh viên nhà xa nhất thì xuất ra màn hình
   * OUTPUT
   * - Tìm xem sinh viên nào xa trường nhất
   */
  var trucX_NT = document.getElementById("NT_TrucX").value * 1;
  var trucY_NT = document.getElementById("NT_TrucY").value * 1;

  var trucX_SV1 = document.getElementById("SV1_TrucX").value * 1;
  var trucY_SV1 = document.getElementById("SV1_TrucY").value * 1;

  var trucX_SV2 = document.getElementById("SV2_TrucX").value * 1;
  var trucY_SV2 = document.getElementById("SV2_TrucY").value * 1;

  var trucX_SV3 = document.getElementById("SV3_TrucX").value * 1;
  var trucY_SV3 = document.getElementById("SV3_TrucY").value * 1;

  // Kiểm tra tọa độ
  var khoangCanhXSV1 = Math.floor(trucX_SV1 - trucX_NT);
  var khoangCanhYSV1 = Math.floor(trucY_SV1 - trucY_NT);
  var toaDoSV1 = Math.sqrt(
    Math.pow(khoangCanhXSV1, 2) + Math.pow(khoangCanhYSV1, 2)
  );

  var khoangCanhXSV2 = Math.floor(trucX_SV2 - trucX_NT);
  var khoangCanhYSV2 = Math.floor(trucY_SV2 - trucY_NT);
  var toaDoSV2 = Math.sqrt(
    Math.pow(khoangCanhXSV2, 2) + Math.pow(khoangCanhYSV2, 2)
  );

  var khoangCanhXSV3 = Math.floor(trucX_SV3 - trucX_NT);
  var khoangCanhYSV3 = Math.floor(trucY_SV3 - trucY_NT);
  var toaDoSV3 = Math.sqrt(
    Math.pow(khoangCanhXSV3, 2) + Math.pow(khoangCanhYSV3, 2)
  );

  var hienThongBao = "";
  if (
    khoangCanhXSV1 < 0 &&
    khoangCanhYSV1 < 0 &&
    khoangCanhXSV2 < 0 &&
    khoangCanhYSV2 < 0 &&
    khoangCanhXSV3 < 0 &&
    khoangCanhYSV3 < 0
  ) {
    hienThongBao = "Tọa độ không hợp lệ";
  } else {
    var SV1 = document.getElementById("TenSV1").value;
    var SV2 = document.getElementById("TenSV2").value;
    var SV3 = document.getElementById("TenSV3").value;

    if (toaDoSV1 > toaDoSV2 && toaDoSV1 > toaDoSV3) {
      hienThongBao = "Nhà sinh viên " + SV1 + " xa trường nhất";
    } else if (toaDoSV2 > toaDoSV1 && toaDoSV2 > toaDoSV3) {
      hienThongBao = "Nhà sinh viên " + SV2 + " xa trường nhất";
    } else if (toaDoSV3 > toaDoSV1 && toaDoSV3 > toaDoSV2) {
      hienThongBao = "Nhà sinh viên " + SV3 + " xa trường nhất";
    } else {
      hienThongBao = "Không có ai xa nhất";
    }
  }
  // ĐẦU RA - (OUTPUT)
  document.getElementById("txtThongBao_4").innerHTML = hienThongBao;
};
