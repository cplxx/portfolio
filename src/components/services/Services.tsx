import { Text } from '../Text'
import { Card } from './Card'
import { SiInteractiondesignfoundation, SiStardock } from 'react-icons/si'
import { GiPlanetConquest } from 'react-icons/gi'
import { RiSpaceShipLine } from 'react-icons/ri'

export function Services() {
  return (
    <section className="flex h-full animate-bg-subindo flex-col items-start justify-center gap-24 bg-black md:h-screen">
      <div className="mx-10 md:mx-80">
        <Text
          text="Meus serviços"
          tag="&#10092; h1 &#10093;"
          tag1="&#10092; / h1 &#10093;"
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        <Card
          icon={<SiStardock />}
          text="Motion"
          description="Crio designs visualmente impressionantes que se conectam com seu público."
        />
        <Card
          icon={<RiSpaceShipLine />}
          text="Desenvolvimento"
          description="Dando vida à sua visão com as últimas tendências em tecnologia e design."
        />
        <Card
          icon={<GiPlanetConquest />}
          text="SEO"
          description="Otimizo a visibilidade do seu site nos mecanismos de busca! Com técnicas de SEO, aumentaremos a presença online do seu negócio."
        />
        <Card
          icon={<SiInteractiondesignfoundation />}
          text="Designer e criatividade"
          description="Transformo ideias em experiências excepcionais de aplicativos móveis e da Web."
        />
      </div>
    </section>
  )
}
