import { ProjectCard } from '../components/ProjectCard';
import othello from '../imgs/othello.png'
import fruitNinja from '../imgs/fninja.png'
import fsab from '../imgs/fsab.png'
import ecg from '../imgs/ecg.png'

export function WorkPage() {
    return (
        <div className= 'flex flex-col main-body items-center mb-[60px] space-y-10'>
            {/* Large clickable text */}
            <div className='text-2xl font-bold my-10 underline'>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferrer' className='text-red-500 hover:text-blue-700'>
                    Click here for deeper look into portfolio
                </a>
            </div>
        <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '1'
            color= '#FF83C8'
            title= 'Othello AI Player'
            tags={['AI','Game Dev', 'UI/UX Design']}
            company= 'AI Project/Game'
            img= {othello}
            projectPage = '/construction'
            />
          <ProjectCard
            id= '2'
            color= '#2449FE'
            title= 'Fruit Ninjaesque'
            tags={['UI/UX Design', 'Game Dev']}
            company= 'Project'
            img= {fruitNinja}
            projectPage = '/construction'
          />
        </div>
        <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '3'
            color= '#FFEC42'
            title= 'Full Stack At Brown'
            tags={['Web Dev', 'UI/UX Design']}
            company= 'Website Redesigns'
            img= {fsab}
            projectPage = '/construction'
            />
          <ProjectCard
            id= '4'
            color= '#84E7D6'
            title= 'ECG Monitor'
            tags={['Prototyping','Hardware','Research']}
            company= 'Project/Prototype'
            img= {ecg}
            projectPage = '/construction'
          />
        </div>
      </div>
    )
}