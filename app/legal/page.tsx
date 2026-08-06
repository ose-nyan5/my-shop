export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <a
        href="/"
        className="text-gray-400 text-sm hover:text-white duration-300"
      >
        ← BACK
      </a>

      <h1 className="text-4xl font-black mb-10 mt-8">
        特定商取引法に基づく表記
      </h1>

      <div className="space-y-8 max-w-3xl">

        <div>
          <h2 className="font-bold mb-2">販売業者</h2>
          <p>FUORI MAI DENTRO</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">運営責任者</h2>
          <p>大沼 珀琥</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">所在地</h2>
          <p>
            〒251-0032<br />
            神奈川県藤沢市片瀬2丁目5‐5
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">電話番号</h2>
          <p>
            080-4735-1675<br />
            受付時間：10:00〜17:00
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">メールアドレス</h2>
          <p>fuorimaidentroofficial@gmail.com</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">販売価格</h2>
          <p>各商品ページに税込価格を表示しています。</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">商品代金以外の必要料金</h2>
          <p>
            送料：各商品ページまたは購入手続き画面に表示します。<br />
            その他、お客様が選択した決済方法により所定の手数料が発生する場合があります。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">支払方法</h2>
          <p>
            クレジットカード決済、Apple Pay、コンビニ決済、
            PayPayその他Stripe Checkout上で利用可能な決済方法。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">お支払いの時期</h2>
          <p>
            クレジットカード・Apple Pay・PayPay等：ご注文時にお支払いが確定します。<br />
            コンビニ決済：ご注文後、Stripeの決済画面に表示される支払期限までにお支払いください。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">商品の引渡時期</h2>
          <p>
            受注生産のため、ご注文およびお支払い確認後に製作を開始します。
            発送時期は各商品ページに記載します。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">返品・交換について</h2>
          <p>
            商品に不良・破損・誤配送がある場合は、商品到着後7日以内に
            メールにてご連絡ください。確認後、返品または交換にて対応します。
            <br /><br />
            お客様都合による返品・交換はお受けしておりません。
          </p>
        </div>

      </div>
    </main>
  )
}