import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/Dear-Nathan.jpg";

class Blog extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="isiBlog">
            <div className="row">
              <div className="col-md-10">
                <h3>Dear Nathan</h3>
              </div>
              <div className="col-md-2 d-md-block d-none">
                <span>10 Maret 2019</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4">
                <img src={foto1} />
              </div>
              <div className="col-md-9 col-8">
                <p>Dear Nathan, kisah masa putih abu-abu yang sweet. Sangat sweet sampai kamu akan merasa kangen menjadi anak SMA lagi. Jadi remaja memang bagian hidup yang tak terlupakan. Masa-masa dimana kita mencari jati diri, begitu ingin bebas lepas, dan baru mengenal tentang cinta.</p>
                <br/>
                <p>Meskipun tema yang diusung memang sering kita jumpai, tapi karakter Nathan-lah yang jadi bagian paling apik di novel ini. Penulis berhasil menciptakan tokoh yang membuai pembaca. Bagaimana dia bersikap, tingkahnya, kejahilannya, dan terutama bagaimana cara Nathan saat bersama Salma – semua sangat menarik.</p>
                <br/>
                <p>Nathan ini memang bad boy, tapi bukan playboy. Rasanya, jadi mulai berpikir, nggak semua bad boy adalah playboy. Dan, anak-anak nakal seperti Nathan harusnya bukan dimusuhi atau malah dilabeli ‘nakal’, karena selalu ada alasan yang membuat mereka tercipta sebagai anak nakal. Banyak yang salah dalam mengatasi anak-anak seperti ini. Makanya, anak nakal dimarahi bukannya membaik, tapi malah menjadi.</p>
                <br/>
                <p>Karakter Salma yang terasa lugu, manis, pintar, dan punya jiwa yang halus, memang tampak kontras dengan Nathan. Namun, karena kontras itulah jadi terasa semakin menarik. Aku suka cara Salma bersikap di depan Nathan. Keluguannya mengatasi cinta yang pertama kali menyambangi hatinya, membuat Salma jadi semakin manis dan pantas jadi sasaran kejaran Nathan.</p>
                <br/>
                <p>Intinya, kalau masalah karakter, penulis berhasil membuat karakter-karakter yang kuat. Tidak hanya pada tokoh utamanya, untuk tokoh pendukung yang jumlahnya bejibun, penulis mampu memberi mereka ciri khas satu persatu khas anak SMA.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
