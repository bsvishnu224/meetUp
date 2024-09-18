import React from 'react'

const User = React.createContext({
  topic: '',
  isRegisterd: false,
  status:()=>{},
  name: '',
  errorMsg: false,
  onChangeName: () => {},
  onChangeTopic: () => {},
  onSubmitButton: () => {},
})

export default User
