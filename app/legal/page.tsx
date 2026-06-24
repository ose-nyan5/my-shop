export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-black mb-10">
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
          <p>請求があった場合遅滞なく開示します</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">電話番号</h2>
          <p>請求があった場合遅滞なく開示します</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">fuorimaidentroofficial@gmail.com</h2>
          <p>後で入力</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">販売価格</h2>
          <p>各商品ページに記載</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">商品代金以外の必要料金</h2>
          <p>送料・各種決済手数料</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">支払方法</h2>
          <p>
            クレジットカード決済、
            コンビニ決済、
            その他Stripe対応決済
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">商品の引渡時期</h2>
          <p>ご注文後7日以内に発送</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">返品・交換について</h2>
          <p>
            商品に欠陥がある場合を除き、
            返品・交換には応じません。
          </p>
        </div>

      </div>
    </main>
  )
}