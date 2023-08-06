import { Text } from '../Text'
import { CardProjects } from './Card'

export function Projects() {
  return (
    <section className=" flex animate-bg-subindo flex-col items-start justify-center gap-24 bg-black bg-[url('/color-sharp2.png')] bg-cover bg-center bg-no-repeat md:h-screen">
      <div className="mx-10 md:mx-80">
        <Text
          text="Viagens"
          tag="&#10092; h1 &#10093;"
          tag1="&#10092; / h1 &#10093;"
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center ">
        <CardProjects />
      </div>
    </section>
  )
}
