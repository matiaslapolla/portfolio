import React, { useCallback } from 'react'
import placeholder from '../content/images/placeholder.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PageCard = (props) => {

  const { link, title, description, image } = props

  const router = useRouter()

  const handleRouting = useCallback(() => {
    router.push(link ?? "/")
  }, [link])

  return (
    <>
      <div className={"max-w-sm border border-red-500 rounded-lg shadow-lg"} onClick={handleRouting}>
        <div>
          <Image src={image ?? placeholder} alt={title ?? "placeholder image"} style={{ objectFit: "cover" }} />
        </div>
        <div className={"p-6"}>
          <h1 className={"text-2xl font-bold"}>{title ?? "Title"}</h1>
          <p className={"text-sm text-black-400"}>{description ?? "Description"}</p>
        </div>
      </div>
    </>
  )
}

export default PageCard