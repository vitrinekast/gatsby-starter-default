import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import fullWidthBlock from "../components/blocks/fullWidth";
import splitBlock from "../components/blocks/split";
import gridBlock from "../components/blocks/grid";



export default function Project({ data }) {

    const blocks = {
        fullwidth: fullWidthBlock,
        split: splitBlock,
        grid: gridBlock
    }

    const post = data.gcms.allProjects[0];
    console.log(post)
    return (
        <Layout>
            <header>
                <h2>{post.title}</h2>
            </header>
            <p>
                {post.description}
            </p>

            <div className='list--sections'>
                {post.allBlocks.map((block, index) => {
                    const CurrentBlock = blocks[block.blockType.toLowerCase() || 'fullWidth'];
                    return (
                        <div className='section' key={index}>
                            <CurrentBlock title={block.title} media={block.media}/>
                        </div>
                    )
                })}
            </div>
            <div>
                <h1>{post.title}</h1>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
        gcms {
            allProjects(where: {slug:$slug}) {
                id
                title
                allBlocks {
                    multiline
                    title
                    blockType
                    media {
                    url(transformation: {image: {resize: {fit: clip, width: 800}}})
                    }
                }
                slug
                description
            }
        }
  }
`