import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseState = () => {
  const [example, setExample] = useState<string>("Elma");
  const [changedEx, setChangedEx] = useState<string>();

  /**
   * Buradaki fonksiyonumuz state'i direkt değiştirmemek için kullanmış olduğumuz state'i bekletme işlemidir.
   * @param {string} text - Input'ta girmiş olduğumuz yeni değer.
   */
  function handleChange(text: string) {
    setChangedEx(text);
  }

  /** Buradaki fonksiyon girmiş olduğumuz yeni değeri ana state'imize atamamızı sağlar. */
  function changeState() {
    setExample(changedEx!);
  }

  return (
    <div className="container welcome">
      <div className="mt-5">
        <div className="d-flex row align-items-center">
          <div className="d-flex col-lg-6">
            <div className="pb-5">
              <div className="d-flex justify-content-center mb-2">
                <text className="h5">useState Kullanımı</text>
              </div>
              <div className="mb-4">
                <text className="declaration">
                  Öncelikle bir state (değişken) oluşturulur. Bu değişkeni boş da bırakabilirsiniz veya içine başlangıç
                  değerinizi de verebilirsiniz. Örnekte gördüğünüz üzere bir state'imiz var ve içinde "Elma" stringi
                  var. Bu değeri değiştirmek için input'umuza istediğiniz yazıyı yazınız ve buton'a tıklayınız. Sayfa
                  yenilendiğinde default değer "Elma" olduğu için state'imiz de "Elma" yazacaktır.
                </text>
              </div>
              <div className="d-flex row justify-content-center mb-4 text-center">
                <text style={{ fontSize: 12, marginBottom: 5 }}>maksimum 30 karakter</text>
                <input
                  onChange={(e) => handleChange(e.target.value)}
                  className="input"
                  placeholder="Yeni değeri giriniz"
                  type="text"
                  maxLength={30}
                />
              </div>

              <div className="d-flex justify-content-center">
                <Button onClick={changeState}>State'i değiştir</Button>
              </div>
            </div>
          </div>
          <div className="d-flex col-lg-6 justify-content-center">
            <div>
              <text className="fs-5">Güncel state:</text> <text className="fs-5">{example}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;
