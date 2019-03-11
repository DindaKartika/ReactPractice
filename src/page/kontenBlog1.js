import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/arkais.jpg";

class Blog extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="isiBlog">
            <div className="row">
              <div className="col-md-10">
                <h3>Arkais, Tuan Teh dan Nona Kopi</h3>
              </div>
              <div className="col-md-2 d-md-block d-none">
                <span>12 Maret 2019</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4">
                <img src={foto1} />
              </div>
              <div className="col-md-9 col-8">
                <p>Akhirnya salah satu buku yang ditunggu di tahun ini rilis juga. Semenjak membaca Parak, aku langsung berniat kala Arkais rilis aku harus beli. Dan alhamdulillah terwujud, aku beli waktu masa PO.</p>
                <br/>
                <p>Arkais merupakan sequel kedua/seri terakhir dari cerita Nona Teh dan Tuan Kopi. Yang pertama adalah Parak. Pasti kalian langsung bertanya, bisa nggak kalau baca Arkais aja tanpa harus baca Parak terlebih dahulu?</p>
                <br/>
                <p>Kalau menurut aku, aku sarankan kalian membaca Parak juga, karena aku menyebutnya Arkais ini adalah jawaban dari semua pertanyaan yang berseliweran di kepala saat membaca Parak. Membicarakan Arkais tidak akan bisa lepas dari cerita Parak. Jika kalian membaca Arkais maka pertanyaan-pertanyaan yang muncul di Arkais tidak akan terpecahkan, karena jawabannya ada di Parak.</p>
                <br/>
                <p>Pembaca ‘PARAK’ pasti tidak akan melewatkan kisah ini, karena memang benar-benar ditunggu.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
