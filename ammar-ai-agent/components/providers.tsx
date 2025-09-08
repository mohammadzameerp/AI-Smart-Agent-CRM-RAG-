'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'team_member'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('ammar_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock authentication - replace with real auth
    const mockUsers = [
      { id: '1', name: 'Zameer', email: 'zameer@finixdigital.com', role: 'admin' as const },
      { id: '2', name: 'Rafeeq', email: 'rafeeq@finixdigital.com', role: 'admin' as const },
      { id: '3', name: 'Kiran', email: 'kiran@finixdigital.com', role: 'team_member' as const },
      { id: '4', name: 'Ravi', email: 'ravi@finixdigital.com', role: 'team_member' as const },
    ]

    const foundUser = mockUsers.find(u => u.email === email)
    if (foundUser && password === 'password') {
      setUser(foundUser)
      localStorage.setItem('ammar_user', JSON.stringify(foundUser))
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ammar_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
