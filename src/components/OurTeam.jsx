import TopText from '../ui/TopText'
import { Users } from '../assets/data'


function OurTeam() {
    return (
        <section id='team' className='container team'>
            <TopText title={'Met Our Team'} info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />

            <div className="grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] py-10">
                {Users.map((user , index) => {
                    return (
                        <div key={index} data-aos="flip-right" className="w-full text-center rounded-card-border bg-card-bg text-white py-9 shadow-user-card user_card">
                            <img className='mx-auto rounded-full' src={user.img} alt="user" />
                            <h3 className='text-[28px] font-medium'>{user.name}</h3>
                            <h4 className='text-base font-normal'>{user.job}</h4>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default OurTeam