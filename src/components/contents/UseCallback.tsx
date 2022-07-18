import React, { useState, memo, useCallback } from "react";
import { Button } from "react-bootstrap";

const CounterButtons = memo(({ increment }: any) => {
  console.log("render");
  return (
    <>
      <Button onClick={increment}>Artırmak</Button>
    </>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState<number>(0);

  /** Buradaki fonksiyon count değerimizin artmasını sağlar. */
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className="container welcome">
      <div className="mt-5">
        <div className="d-flex row align-items-center">
          <div className="d-flex col-lg-6">
            <div className="pb-5">
              <div className="d-flex justify-content-center mb-2">
                <text className="h5">useCallback Kullanımı</text>
              </div>
              <div className="mb-4">
                <text className="declaration">
                  Daha önceden hafızaya alınmış bir callback fonksiyon döndürür. Hafızada sadece bağımlı değişkenler
                  dizisine girilen değerlerden birisi değiştiğinde, bu hafızadaki yerin değiştiği bir versiyonunu
                  döndürecektir. Bu işlem, yeniden render işlemlerinin önüne geçmek için reference equality yöntemine
                  göre optimize edilmiş alt bileşenlere callback fonksiyonu girerken işinize yarar. Görmüş olduğunuz
                  örnekte artır fonksiyonumuz hafızaya kaydediliyor. Ve biz her tıkladığımızda tekrardan render'layıp
                  tekrar aynı fonksiyonu oluşturmak yerine bize hafızadan döndürüyor.
                  <br />
                  <br />
                  Projeyi kendinizde başlattığınızda tekrar render'lamadığını console'dan takip edebilirsiniz.
                </text>
              </div>
            </div>
          </div>
          <div className="aa d-flex col-lg-6 justify-content-center">
            <div className="d-flex align-self-center flex-column">
              <text>
                Değer: <h3>{count}</h3>
                <CounterButtons increment={increment} />
              </text>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
