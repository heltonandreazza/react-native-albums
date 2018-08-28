import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import ListItem from './AlbumListItem'

class AlbumList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        this.setState({
          albums: data
        })
      })
  }

  renderAlbums(albums) {
    return albums.map((album, index) => <ListItem key={index} item={album} />)
  }

  render() {
    const { albums } = this.state

    return (
      <ScrollView>
        {this.renderAlbums(albums)}
      </ScrollView>
    )
  }
}

export default AlbumList
