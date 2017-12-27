import { css } from 'styled-components'

const setMedia = size => (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `

export const breakpoint = {
  tablet: '768px'
}

export const media = {
  giant: setMedia(1024),
  desktop: setMedia(768),
  tablet: setMedia(480),
  phone: setMedia(320)
}

export function truncate (width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}
export const squareBase = 4
export const imgMapping = {
  'normal': 'https://i.imgur.com/Qi99Txl.png',
  'notsure': 'https://i.imgur.com/nMMTgFt.png',
  'danger': 'https://i.imgur.com/mwPpmQ7.png'
}
export const colorMapping = {
  'normal': 'blue',
  'notsure': 'yellow',
  'danger': 'pink'
}
export const lightColorMapping = {
  'normal': 'blueLight',
  'notsure': 'yellowLight',
  'danger': 'pinkLight'
}
export const textMapping = {
  'normal': `Awesome! the link is safe <br/> you can continue your trip.`,
  'notsure': `Hmmm! we are not sure <br/> about this strange link.`,
  'danger': `Dammmn! <br/> IT'S DANGER!`
}
