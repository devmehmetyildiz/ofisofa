import React from 'react'
import img from '../../Assets/img'
import productimages from '../../Assets/productimages'

export default function About() {
  return (
    <div className='mt-12 px-[10%] flex flex-col justify-center items-center text-center'>
      <h1 className='text-4xl text-[#1c2520] font-bold mt-12'>BİZ KİMİZ?</h1>
      <p className='text-lg text-[#3D3D3D] mt-12 px-[10%]'>
        Ofisofa ofis mobilyaları 2018 yılında çalışma ortamlarına yenilikçi bir bakış açısı getirme hedefi ile kurulmuştur.
        Hizmet politikasında rahatlık ve kalite, sağlamlık ve şıklık, ulaşılabilirlik ve tasarım kriterlerinin tamamını karşılayan OFİSOFA Ofis Mobilyaları
        müşterilerine en iyi hizmeti vermeye çalışmaktadır. Çalışmalarında güncel kalmak, bir adım önde olmak için mücadele etmektedir.
        Rekabetin yoğun olarak yaşandığı günümüz dünyasında yeniliklerin öncüsü olarak çalışmalarını yürütmektedir. Evrensel kalite ve
        standartlarda ürün ve hizmetler sunarak müşterilerinin memnuniyetini sağlamaktadır.
      </p>
      <img src={productimages.artemismasatakim1} alt="aboutfoto1" className='mt-12 w-2/3 rounded-lg' />
      <h1 className='text-4xl text-[#1c2520] font-bold mt-12'>VİZYON - MİSYON</h1>
      <p className='text-lg text-[#3D3D3D] mt-12 px-[10%]'>
        Birbirinden farklı tasarım, nicelik, boyut, renk ve fiyat çeşitliliğine sahip ürünlerle her türlü tüketiciye hitap eden firmamızın
        bu esnek ortamı oluşturmasının temel amacı; değişen şartlar ve zaman içerisinde farklılaşabilen ve gelişebilen talep yapısına cevap vermektir.
        Değişimi, gelişimi ve yeniliği hedefleyerek çağdaş ve özgün tasarımları müşterileriyle buluşturmayı hedeflemektedir. Ofisofa Ofis Mobilyaları
        yenilikçi ve özgün tasarımlarıyla müşterilerimize en kaliteli mobilyaları en uygun fiyatlara tasarlamaktadır.
      </p>
      <img src={productimages.classmasatakim1} alt="aboutfoto1" className='mt-12 w-2/3 rounded-lg' />
      <h1 className='text-4xl text-[#1c2520] font-bold mt-12'>2023</h1>
      <p className='text-lg text-[#3D3D3D] mt-12 px-[10%]'>
        Müşterilerin talep ve isteklerine
        uygun ürünlerle çalışma ortamlarına fark katmaktadır. Tasarım stratejisine insan odaklı, yaşam kalitesini arttıran ve ekosistemi koruyan
        ürün alternatifleri çerçevesinde kurgulayarak yola çıkmıştır. Ofisofa yönetim sisteminin sürekliliği ve başarısında ekip çalışmasının
        yanı sıra çalışanlarının duyarlılığının büyük önem taşıdığı bilinciyle çalışmalarımızı sürdürmekteyiz.
      </p>
    </div >
  )
}
