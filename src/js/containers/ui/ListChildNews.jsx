import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize } from 'js/style/font.js'
import { squareBase } from 'js/style/utils.js'
import TextTruncate from 'react-text-truncate'

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.black};
  padding: ${squareBase}px ${squareBase * 2}px;
  cursor: pointer;
  background: ${props => props.isSelected === true ? colors.ci : 'transparent'};
`

const TitleSection = styled.div`
display: ${props => props.showing === true ? 'flex' : 'none'};
align-items: flex-end;
margin: ${props => props.marginType === 'large' ? `${squareBase * 4}px` : `${squareBase * 2}px`} 0;
justify-content: ${props => props.type === 'title' ? 'space-between' : 'flex-start'};

h4 {
  font-weight: bold;
  font-size: ${props => props.smallTitle ? fontSize.h5 : fontSize.h5};
  line-height: ${fontSize.h5 * 1.5};
  margin: 0 10px 0 0;
  flex: 1;
}

.brief {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  p {
    font-size: ${fontSize.h5};
    line-height: calc(${fontSize.h5} * 1.5);
    font-weight: bold;
    margin: 0;
  }
}
`
const ContentSection = styled.div`
  display: ${props => props.showing === true ? 'flex' : 'none'};
  align-items: flex-end;
  margin: ${props => props.marginType === 'large' ? `${squareBase * 4}px` : `${squareBase * 2}px`} 0;
  justify-content: ${props => props.type === 'title' ? 'space-between' : 'flex-start'};
`

const StyledTextTruncate = styled(TextTruncate)`
  font-size: ${fontSize.p2};
`
export default class ListChildNews extends Component {
  // componentWillReceiveProps (nextProps) {
  //   this.refs.truncatedActivityTitle.update()
  // }
  render () {
    return (
      <NewsWrapper
        onClick={this.props.onClick}
        isSelected={this.props.isSelected}>
        <TitleSection
          smallTitle={this.props.smallTitle}
          marginType={this.props.marginType}
          showing={this.props.havingTitle}
          type={'title'}>
          <h4>{this.props.newsTitle}</h4>
          <div className="brief">
            <p>{this.props.newsType}</p>
            <p>{this.props.newsDate}</p>
          </div>
        </TitleSection>
        <ContentSection showing={this.props.havingContent}>
          <StyledTextTruncate
            line={2}
            truncateText='...'
            text={this.props.content}
          />
        </ContentSection>
      </NewsWrapper>
    )
  }
}
