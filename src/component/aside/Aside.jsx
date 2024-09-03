import React from 'react'
import FeaturesCard from '../featuresCard/FeaturesCard'
import AdsCard from '../adsCard/AdsCard'
import MostViewPost from '../mostViewPost/MostViewPost'
import CategoryTag from '../categoryTag/CategoryTag'
import TagContainer from '../tagContainer/TagContainer'

const Aside = () => {
  return (
    <aside className='aside'>
      <FeaturesCard/>
      <AdsCard/>
      <MostViewPost/>
      <CategoryTag/>
      <TagContainer/>
      <AdsCard/>
    </aside>
  )
}

export default Aside