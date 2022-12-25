import React from 'react'

export default function Map() {
  return (
    <div className='w-full mt-12 flex justify-center items-center'>
      <div className='w-2/3'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6323.627815370969!2d36.88637715979002!3d37.58299950245457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddc5d8906c1db%3A0x549af73e77d9f8cd!2zQWxpeWEgxLB6emV0YmVnb3Zpw6cgUGFya8Sx!5e0!3m2!1str!2str!4v1671981547236!5m2!1str!2str"
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
   
    </div >
  )
}
