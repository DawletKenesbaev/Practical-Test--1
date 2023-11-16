import React , {useContext,useState} from 'react'

  
const AuthContent :any = React.createContext({})

export function useAuth() {
    return useContext(AuthContent)
}
export function AuthProvider({children}:any){
    const [currentUser,setCurrentUser] = useState()
    const value = {
        currentUser
    }
    return (
        <AuthContent value={value}>
            {children}
        </AuthContent>
    )
}