import React from 'react'
import { types, Text, Image, RichText } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return <div className="p-6 text-center">
    <Text
        propName="title"
        renderBlock={({ children }) => <h1 className="text-2xl font-bold mb-2 mt-2">{children}</h1>}
        placeholder="Type a title..."
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
    />
    <RichText
      propName="desc"
      renderBlock={({ children }) => (
        <p className="text-lg text-gray-500">{children}</p>
      )}
      placeholder="Type a description"
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
        types.RichTextFeatures.Code,
        types.RichTextFeatures.Italic,
        types.RichTextFeatures.Link,
      ]}
      renderHighlight={({ children }) => (
        <span style={{backgroundColor:"lightblue"}}>
          {children}
        </span>
      )}
    />

    <Image
        propName="image"
        alt="Fallback alt tag"
        // maxWidth={200}
        imageClassName="myimg"   
        renderWrapper={({children, width, height}) => (
          <div className="wrapper mt-4" >
            {children}
          </div>
        )}
    />

      
  </div>
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  sideEditProps: [],
  getDefaultProps: () => ({
    title: "Thumbnail",
  })
}

export default Thumbnail