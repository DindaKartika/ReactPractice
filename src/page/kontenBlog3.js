import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/perahu_kertas.jpg";

class Blog extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="isiBlog">
            <div className="row">
              <div className="col-md-10">
                <h3>Perahu Kertas</h3>
              </div>
              <div className="col-md-2 d-md-block d-none">
                <span>8 Maret 2019</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4">
                <img src={foto1} />
              </div>
              <div className="col-md-9 col-8">
                <p>Dalam beberapa minggu terakhir, perfilman kita diramaikan oleh film yang diadaptasi dari salah satu novel karya Dee Dewi Lestari, Perahu Kertas.  Film besutan Hanung Bramantyo tersebut  dibuat 2 bagian. Mungkin dirasa kurang jika hanya dirangkum hanya dalam 1 film saja.</p>
                <br/>
                <p>Perahu Kertas, kisah remaja yang menuju proses kedewasaan merupakan karya Dee yang cukup ringan dibandingkan karya-karya  lainnya, seperti  seri Supernova, Filosofi Kopi, maupun kumpulan cerita  pendek Madre.</p>
                <br/>
                <p>Mengisahkan tentang dua orang remaja, Keenan dan Kugy.  Keenan baru pulang dari Amsterdam, digambarkan sebagai seorang cowok yang tinggi, ganteng, cerdas dan memiliki bakat melukis. Namun kecintaannya pada melukis tidak serta merta mendapat restu dari orang tuanya, terutama papanya karena papanya berharap Keenan akan menjadi penerus perusahaan trading miliknya, selain ada kisah masa lalu yang ingin dikubur dalam-dalam. Sedangkan Kugy adalah seorang remaja putri yang tidak terlalu peduli pada penampilan, bertubuh mungil, memiliki obsesi sebagai penulis dongeng dan menganggap dirinya sebagai agen Neptunus. Kugy punya kegemaran menuliskan pesan-pesan khusus di atas kertas, lalu kertas dilipat seperti perahu kemudian dihanyutkan di laut, atau aliran air. Kugy berharap pesannya akan sampai pada Neptunus.</p>
                <br/>
                <p>Keenan dan Kugy bertemu saat keduanya berada di statiun kereta api di Bandung. Saat Kugy dan sahabat-sahabatnya Noni dan Eko menjemputnya. Keenan adalah sepupu Eko. Keenan menuruti permintaan papanya yang ingin dia kuliah di jurusan Ekonomi. Sedangkan Kugy kuliah di jurusan Sastra sebagai bagian dari obsesinya sebagai penulis dongeng. Pertemuan demi pertemuan selama kuliah di Bandung kemudian saling menautkan hati keduanya, namun pada saat yang sama, Kugy masih memiliki Ojos, yang telah bersamanya selama hampir tiga tahun. Sedangkan Keenan akhirnya dekat dengan Wanda, salah satu anak pemilik gallery lukis Warsita yang cukup ternama, dan akan membantu Keenan dalam proses karya lukisnya hasil pencomblangan Noni yang merupakan teman Wanda.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
