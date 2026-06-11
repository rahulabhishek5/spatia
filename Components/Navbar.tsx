import { HouseHeart } from "lucide-react"
import { Button } from "./ui/Button"
import { useOutletContext } from "react-router"

const Navbar = () => {

const {isSignedIn, userName, signIn, signOut} = useOutletContext<AuthContext>()
  const handleAuthClick = async () => {
    if(isSignedIn){
      try{
        await signOut()
      }catch(e){
        console.error(`Puter sign out failed: ${e}`)
      }
      return 
    }

    try{
      await signIn()
    }catch(e){
      console.error(`Puter sign in failed : ${e}`)
    }
  }

  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <HouseHeart className="logo" />
            <span className="name">
              Spacia
            </span>
          </div>
          <ul className="links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </div>

        <div className="actions">
          {
            isSignedIn ? (
              <>
                <span className="greeting">
                  {userName ? `Hi, ${userName}` : `Signed In`}
                </span>
                <Button size='sm' onClick={handleAuthClick} className="btn">Logout</Button>
              </>

            ) : (
              <>
                <Button size='sm' onClick={handleAuthClick} variant="ghost">Login</Button>

                <a href="#upload" className="cta">Get Started</a>
              </>
            )
          }
        </div>
      </nav >
    </header >
  )
}

export default Navbar