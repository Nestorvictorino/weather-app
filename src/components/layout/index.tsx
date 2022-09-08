import { LayoutPropsI } from '../../interfaces/layout.interface'
import Header from './header'

const Layout = ({ children }: LayoutPropsI) => {
    return (
        <div className='site-content'>
            <Header />
            {children}
        </div>
    )
}

export default Layout