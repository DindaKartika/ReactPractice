import React, { Component } from "react";
import ReactDOM from 'react-dom'
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/autumn-in-paris.jpg";

class Blog extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="isiBlog">
            <div className="row">
              <div className="col-md-10">
                <h3>Autumn in Paris</h3>
              </div>
              <div className="col-md-2 d-md-block d-none">
                <span>5 Maret 2019</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4">
                <img src={foto1} />
              </div>
              <div className="col-md-9 col-8">
                <p>Tara Dupont, yang merupakan tokoh utama di buku ini, merupakan gadis yang cerewet dan ceria, ia juga tidak bisa diam. Setidaknya itulah yang dipikirkan oleh sahabatnya sejak ia tinggal di Paris, Sebastien Giraudeau. Tara menyukainya, oleh sebab itu Tara kesal dengan Sebastien yang tidak menjemputnya di bandara.</p>
                <br/>
                <p>Sebastien Giraudeau, sudah menganggap Tara sebagai adik sendiri. Ia pun selalu berkata bahwa Tara adalah perempuan nomor satunya. Sebastien memperkenalkan Tara pada teman kerjanya, Tatsuya Fujisawa. Di kali pertama, Tara tidak menyukai hal itu. Terlebih di saat Tara ingin berdua dengan Sebastien, mengapa ia malah mengajak orang lain ke dalam pertemuan nya?</p>
                <br/>
                <p>Suatu hari, Tara sedang kesal dengan Sebastien yang tidak mau menemaninya makan demi orang-orangan sawah, eh maksudnya gadis yang sedang didekatinya, Juliette atau itulah namanya. Ayahnya pun berhalangan untuk menemaninya makan. Jadilah ia ke restoran seorang diri, namun ia malah menemukan Tatsuya. Ternyata, Tatsuya menyenangkan, tidak seperti yang dipikirkan Tara sebelumnya.</p>
                <br/>
                <p>Tatsuya Fujisawa, membenci Paris karena kota tersebut telah mengembalikan luka lama yang berada jauh di lubuk hatinya. Pekerjaan terpaksa membawanya kembali ke Paris, juga untuk mencari seseorang.</p>
                <br/>
                <p>Perlahan, rahasia demi rahasia mulai terkuak. Tatsuya juga sudah menemukan seseorang yang dicarinya. Ditambah, rahasia tersebut ternyata malah mempengaruhi rasa saling suka antara Tara Dupont dan Tatsuya Fujisawa. Mau tahu apa itu rahasianya? Yuk, temukan di buku ini</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
