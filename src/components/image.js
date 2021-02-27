import { useStaticQuery } from "gatsby"
import React from "react"
// url((transformation: { image: { resize: { width: 800 } } }))

const Image = ({ id, mimeType }) => {
  const label ='label';
  const isImage = mimeType.indexOf("image") !== -1
  // , $isImage: Boolean!
  // const { asset } = useStaticQuery(
  //   graphql`
  //   query AssetQuery {
  //       gcms {
  //         asset(where: {id: "ckkmtbdfk1ceg09588x9wr5u6"}) {

  //           url
  //         }
  //       }
  //     }
  //   `
  // )

  const { site } = useStaticQuery(
    graphql`
    query anaQueyr {
      gcms {
        asset(where: {id: "ckkmtbdfk1ceg09588x9wr5u6"}) {
          url
        }
      }
    }
    
    `
  )


  console.log(site, id)

  return (
    <li className="list__item--images ">
      {isImage && <img loading="lazy" src={'src'} className="media--fit" />}
      {!isImage && (
        <video loading="lazy" className="media--fit">
          <source src={'src'} type={mimeType} />
        </video>
      )}

      <label className="list__item__label">
        <a href={'src'} target="_blank">
          {label}
        </a>
      </label>
    </li>
  )
}

export default Image
