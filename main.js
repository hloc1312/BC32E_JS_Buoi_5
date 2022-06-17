// Bài 1: Quản lý tuyển sinh
document.getElementById("btnKetQua").onclick = function () {
  // input  diemChuan: number, diemMon1, diemMon2, diemMon3, khuVuc:number, doiTuong: number

  var diemChuan = Number(document.getElementById("diemChuan").value);
  //   var diemMon1 = Number(document.getElementById("diemMon1").value);
  //   var diemMon2 = Number(document.getElementById("diemMon2").value);
  //   var diemMon3 = Number(document.getElementById("diemMon3").value);
  //   var khuVuc = Number(document.getElementById("selectKhuVuc").value);
  //   var doiTuong = Number(document.getElementById("selectDoiTuong").value);

  // output  ketQua: string, tongDiem
  var ketQua = "";
  var tongDiem = 0;
  //   progress
  tongDiem = tinhTongDiem(
    "diemMon1",
    "diemMon2",
    "diemMon3",
    "selectKhuVuc",
    "selectDoiTuong"
  );
  if (tongDiem === 0) {
    ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else {
    if (diemChuan <= tongDiem) {
      ketQua = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    } else {
      ketQua = "Bạn đã rớt. Tổng điểm: " + tongDiem;
    }
  }

  //   output in ra màn hình giao diện
  document.getElementById("ketQua_b1").innerHTML = ketQua;
};

function tinhTongDiem(mon1, mon2, mon3, slKhuVuc, slDoiTuong) {
  // input
  var diemMon1 = Number(document.getElementById(mon1).value);
  var diemMon2 = Number(document.getElementById(mon2).value);
  var diemMon3 = Number(document.getElementById(mon3).value);
  var khuVuc = Number(document.getElementById(slKhuVuc).value);
  var doiTuong = Number(document.getElementById(slDoiTuong).value);
  //   output
  var tong = 0;
  // progress
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    tong = 0;
  } else {
    if (khuVuc === 2) {
      tong = diemMon1 + diemMon2 + diemMon3 + 2;
    } else if (khuVuc === 1) {
      tong = diemMon1 + diemMon2 + diemMon3 + 1;
    } else if (khuVuc === 0.5) {
      tong = diemMon1 + diemMon2 + diemMon3 + 0.5;
    } else {
      tong = diemMon1 + diemMon2 + diemMon3;
    }

    if (doiTuong === 2.5) {
      tong += 2.5;
    } else if (doiTuong === 1.5) {
      tong += 1.5;
    } else if (doiTuong === 1) {
      tong += 1;
    } else {
      tong = tong;
    }
  }
  return tong;
}

// Bài 2: Tính tiền điện
document.getElementById("btnTinhTienDien").onclick = function () {
  // input ten: string, kW: number
  var ten = document.getElementById("ten").value;
  // output ketQua: string, tongTienDien: number
  var ketQua = "";
  var tongTienDien = 0;

  //   progress
  tongTienDien = tinhTienDien("kW");
  ketQua = "Họ tên: " + ten + " - Tiền điện: " + tongTienDien;

  //   output in kết quả ra màn hình
  document.getElementById("ketQua_b2").innerHTML = ketQua;
};

function tinhTienDien(id1) {
  // input
  var kW = Number(document.getElementById(id1).value);
  //   output
  var tongTien = 0;
  //   progress
  if (kW > 0 && kW <= 50) {
    tongTien = 50 * 500;
  } else if (kW > 50 && kW <= 100) {
    tongTien = 50 * 500;
    kW = kW - 50;
    tongTien += kW * 650;
  } else if (kW > 100 && kW <= 200) {
    tongTien = 50 * 500 + 50 * 650;
    kW = kW - 100;
    tongTien += kW * 850;
  } else if (kW > 200 && kW <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850;
    kW = kW - 200;
    tongTien += kW * 1100;
  } else {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100;
    kW = kW - 350;
    tongTien += kW * 1300;
  }
  return tongTien.toLocaleString();
}
