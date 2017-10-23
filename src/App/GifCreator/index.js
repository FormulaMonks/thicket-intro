import React from 'react'
import styled from 'styled-components'

import TurnOffWifi from './TurnOffWifi'
import WifiOffExplanation from './WifiOffExplanation'

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Explanation = styled.div`
  margin: 0 auto;
  padding 1em;
  max-width: 30em;
`

export default class GifCreator extends React.Component {

  state = { online: true }

  componentDidMount() {
    window.addEventListener('online', this.goOnline, false)
    window.addEventListener('offline', this.goOffline, false)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.goOnline, false)
    window.removeEventListener('offline', this.goOffline, false)
  }

  goOnline = () => this.setState({ online: true })
  goOffline = () => this.setState({ online: false })

  render() {
    const { id } = this.props
    const { online } = this.state

    return (
      <Wrapper id={id}>
        <Explanation>
          {online
            ? <TurnOffWifi />
            : <WifiOffExplanation />
          }
        </Explanation>
      </Wrapper>
    )
  }
}