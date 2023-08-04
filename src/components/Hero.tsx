import Image from 'next/image'
import spaceImg from '../../public/header-img.png'
import { Text } from './Text'
import { Button } from './Button'
import { Header } from './Header'

export default function Hero() {
  return (
    <main className="h-screen w-full animate-bg-subindo  bg-[url('/banner-bg.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <section className="flex h-screen w-full flex-col items-center justify-center gap-32 px-8 md:flex-row md:px-80">
        <div className="flex flex-col items-center justify-center gap-6">
          <Text text="Transformando ideias em realidade com código e criatividade." />
          <a href="https://api.whatsapp.com/send?phone=+5521970335270&text=Cheguei+pelo+seu+portfolio+%F0%9F%98%81">
            <Button variant="PRIMARY"> Me encontre </Button>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={spaceImg}
            width={1000}
            height={1000}
            alt=""
            className="animate-skew-boat"
          />
        </div>
      </section>
    </main>
  )
}
