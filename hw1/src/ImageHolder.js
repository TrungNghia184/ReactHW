import React, { Component } from 'react'

export default class ImageHolder extends Component {
  getImage(imageNumber) {
    const imageHolder = [<p className='image-description'>A new coder<img className='get-image' src="https://www.adriasolutions.co.uk/wp-content/uploads/2020/12/learning_to_code-1104x526.png"></img></p>,
    <p className='image-description'>A hardworking personel<img className='get-image' src="https://ichef.bbci.co.uk/news/624/mcs/media/images/77368000/jpg/_77368195_getty_coding.jpg"></img></p>,
    <p className='image-description'>A group-working friendly person<img className='get-image' src="https://media.istockphoto.com/photos/adding-modifications-to-their-latest-code-picture-id935964092?b=1&k=20&m=935964092&s=170667a&w=0&h=e3huxZrvUKqYSNy7DP5x-Bpzvyz3OOMcSm76AlETLaI="></img></p>,
    <p className='image-description'>A grinder at work<img className='get-image' src="https://www.bowditch.com/wp-content/uploads/2019/03/Overtime-bw-445x242.jpg"></img></p>]
    return imageHolder[imageNumber]
  }
  render() {
    return (
      <div>
        {this.getImage(this.props.imageNumber)}
      </div>
    )
  }
}