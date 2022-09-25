import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import MainContent from './MainContent'
import Header from '../Header'

const Layout = ({ children }) => {
  return(
    <div>
      <Header />
      <LeftSideBar />
      <MainContent child={children} />
      <RightSideBar />
    </div>
  )
}

export default Layout
