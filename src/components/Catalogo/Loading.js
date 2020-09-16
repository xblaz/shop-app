
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = (props) => {

  if (props.showSpinner === false) {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
  } else {
    return <></>
  }

}
export default Loading;