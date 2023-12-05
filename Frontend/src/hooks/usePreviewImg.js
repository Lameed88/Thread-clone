import {useState} from 'react'


const usePreviewImg = () => {
  const [imgUrl, setImgUrl] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    
  }
  return {handleImageChange, imgUrl}
}

export default usePreviewImg