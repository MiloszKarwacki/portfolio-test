import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
    Hello! My name is Miłosz, and I am a passionate programmer from Dąbrowa Górnicza, Poland. I have been captivated by the world of programming for the past two years, and I have been seriously dedicated to honing my skills for the last eight months.
</p>

<br />

<p className='text-xl mt-6'>
    Before diving into the world of coding, I spent ten years training and playing volleyball, which remains a significant passion of mine. This sport has taught me the values of teamwork, discipline, and perseverance—traits that I now bring to my programming journey.
</p>

<br />

<p className='text-xl mt-6'>
    In addition to my love for technology, I am deeply interested in personal development and psychology. I believe that understanding the human mind and continuously striving to better oneself are key components of success in any field.
</p>

<br />

<p className='text-xl mt-6'>
    Thank you for visiting my portfolio. I look forward to connecting and exploring the endless possibilities of technology together!
</p>

      </div>
    </div>
  )
}

export default About
