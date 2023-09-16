import { Text } from '../Text'
import SkillCard from './Card'
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoGithub,
  BiLogoSass,
} from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'
import {
  SiExpress,
  SiMongodb,
  SiStyledcomponents,
  SiVite,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export default function Technologies() {
  return (
    <section className="flex animate-bg-subindo flex-col items-start justify-center gap-24 bg-black bg-[url('/color-sharp.png')] bg-cover bg-center bg-no-repeat md:h-screen">
      <div className="mx-10 md:mx-80">
        <Text
          text="Tecnologias"
          tag="&#10092; h1 &#10093;"
          tag1="&#10092; / h1 &#10093;"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:px-10 lg:px-40 xl:px-80">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <SkillCard  icon={<BiLogoHtml5 />} />
          <SkillCard icon={<BiLogoCss3 />} />
          <SkillCard  icon={<RiJavascriptFill />} />
          <SkillCard  icon={<BiLogoTypescript />} />
          <SkillCard icon={<BiLogoGit />} />
          <SkillCard  icon={<BiLogoGithub />} />
          <SkillCard  icon={<BiLogoReact />} />
          <SkillCard  icon={<TbBrandNextjs />} />
          <SkillCard  icon={<SiVite />} />
          <SkillCard  icon={<BiLogoTailwindCss />} />
          <SkillCard  icon={<BiLogoSass />} />
          <SkillCard  icon={<SiStyledcomponents />} />
          <SkillCard  icon={<BiLogoNodejs />} />
          <SkillCard icon={<SiExpress />} />
          <SkillCard  icon={<SiMongodb />} />
        </div>
      </div>
    </section>
  )
}
