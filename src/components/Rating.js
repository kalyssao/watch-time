import React from "react"
import styled from 'styled-components'
import Stars from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RatingWrapper = styled(Stars)`
    line-height: 1;
`

const FontAwesome = styled(FontAwesomeIcon)`
    color: inherit;
    transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-right: 10px;
`

function Rating({ number }) {
    return (
        <RatingWrapper
          emptySymbol={<FontAwesome icon={['far', 'star']} size="lg" />}
          fullSymbol={<FontAwesome icon={['fas', 'star']} size="lg" />}
          initialRating={ number }
          readOnly
        />
    )
}


export default Rating 