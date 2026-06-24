export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <a
        href="/"
        className="text-gray-400 text-sm hover:text-white duration-300"
      >
        ← BACK
      </a>

      <h1 className="text-4xl font-black mb-10 mt-8">
        プライバシーポリシー
      </h1>

      <div className="space-y-8 max-w-3xl">

        <div>
          <h2 className="font-bold mb-2">
            個人情報の利用目的
          </h2>
          <p>
            当ショップでは、ご注文・お問い合わせの際に
            お名前、メールアドレス、住所等の個人情報を
            ご提供いただく場合があります。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">
            個人情報の管理
          </h2>
          <p>
            取得した個人情報は適切に管理し、
            法令に基づく場合を除き第三者へ開示しません。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">
            個人情報の第三者提供
          </h2>
          <p>
            法令に基づく場合を除き、
            ご本人の同意なく第三者へ提供しません。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">
            アクセス解析について
          </h2>
          <p>
            当サイトではサービス向上のため、
            アクセス解析ツールを利用する場合があります。
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">
            お問い合わせ
          </h2>
          <p>
            個人情報に関するお問い合わせは
            当ショップまでご連絡ください。
          </p>
        </div>

      </div>
    </main>
  )
}