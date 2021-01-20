import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
    Google,
    Medications,
    Appointments,
    Symptoms,
    Dashboard,
    Documents,
    Shots,
    Legal,
    Account,
    FAQ,
    PlusCircle, 
    Goals,
    Services,
    Allergies,
    Diagnostic,
    Hospital,
    Pathology,
    Referrals,
    Add,
    Activity,
    Stars,
    Lock,
    Tick,
    Export,
    HealthForecast,
    Timeline,
    Blokey,
    Github,
    WordPress,
} from './jsx/'
import IconDefault from '@material-ui/icons/Settings'
import IconTime from '@material-ui/icons/CalendarToday'
import IconAPI from '@material-ui/icons/Code'
import IconCart from '@material-ui/icons/AddShoppingCart'
import IconMenu from '@material-ui/icons/Menu'
import IconClose from '@material-ui/icons/Close'
import IconRight from '@material-ui/icons/KeyboardArrowRight'
import IconLeft from '@material-ui/icons/KeyboardArrowLeft'
import IconDown from '@material-ui/icons/KeyboardArrowDown'
import IconHome from '@material-ui/icons/Home'
import IconShare from '@material-ui/icons/Share'
import IconList from '@material-ui/icons/List'
import IconLogout from '@material-ui/icons/ExitToApp'
import IconLogin from '@material-ui/icons/ExitToApp'
import IconVideo from '@material-ui/icons/Movie'
import IconLight from '@material-ui/icons/Brightness5'
import IconDark from '@material-ui/icons/Brightness4'
import IconCreate from '@material-ui/icons/Add'
import IconRead from '@material-ui/icons/List'
import IconUpdate from '@material-ui/icons/Edit'
import IconDelete from '@material-ui/icons/Delete'
import IconProfile from '@material-ui/icons/Group'
import IconSave from '@material-ui/icons/Save'
import IconContact from '@material-ui/icons/Message'
import IconDate from '@material-ui/icons/CalendarToday'
import Apple from '@material-ui/icons/Apple'
import Facebook from '@material-ui/icons/Facebook'
import IconSquished from '@material-ui/icons/KeyboardArrowDown'
import IconPlus from '@material-ui/icons/Add'
import IconFilter from '@material-ui/icons/Sort'
import IconSortUp from '@material-ui/icons/ArrowUpward'
import IconSortDown from '@material-ui/icons/ArrowDownward'
import IconView from '@material-ui/icons/RemoveRedEye'
import IconHelp from '@material-ui/icons/HelpOutline'
import IconSupport from '@material-ui/icons/Chat'
import IconPushtotalk from '@material-ui/icons/TouchApp'
import IconSend from '@material-ui/icons/Send'
import IconMessages from '@material-ui/icons/Chat'
import IconPrivacy from '@material-ui/icons/Security'
import IconGeo from '@material-ui/icons/PersonPin'

const styles = theme => ({
    white: {
        color: 'white',
    }
})

class Icon extends Component {

    render() {
        let size = {
            width: 24,
            height: 24,
        }
        if (this.props.autoSize){
            size = {
                width: '100%',
                height: '100%',
            }
        }

        if (this.props.size){
            size = {
                width: this.props.size,
                height: this.props.size,
            }
        }
        const {
            icon,
            color,
        } = this.props
        let iconColor = `inherit`
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `home`:
                return (<IconHome color={iconColor} />)
          
            case `messages`:
                return (<IconMessages color={iconColor} />)

            case `support`:
                return (<IconSupport color={iconColor} />)

            case `location`:
                return (<IconGeo color={iconColor} />)

            case `geo`:
                return (<IconGeo color={iconColor} />)
                
            case `send`:
                return (<IconSend color={iconColor} />)

            case `contact`:
                return (<IconContact color={iconColor} />)

           case `newMessage`:
                return (<IconContact color={iconColor} />)

            case `help`:
                return (<IconHelp color={iconColor} />)

            case `p2t`:
                return (<IconPushtotalk color={iconColor} />)

            case `view`:
                return (<IconView color={iconColor} />)           

            case `time`:
                return (<IconTime color={iconColor} />)

            case `filter`:
                return (<IconFilter color={iconColor} />)

            case `sortup`:
                return (<IconSortUp color={iconColor} />)

            case `sortdown`:
                return (<IconSortDown color={iconColor} />)

            case `plus`:
                return (<IconPlus color={iconColor} />)

            case `squished`:
                return (<IconSquished color={iconColor} />)

            case `api`:
                return (<IconAPI color={iconColor} />)
            
            case `down`:
                return (<IconDown color={iconColor} />)
 
             case `date`:
                return (<IconDate color={iconColor} />)                       

            case `save`:
                return (<IconSave color={iconColor} />)
            case `profile`:
                return (<IconProfile color={iconColor} />)

            case `admin`:
                return (<IconPrivacy color={iconColor} />)

            case `privacy`:
                return (<IconPrivacy color={iconColor} />)

            case `create`:
                return (<IconCreate color={iconColor} />)
            case `read`:
                return (<IconRead color={iconColor} />)               
            case `update`:
                return (<IconUpdate color={iconColor} />)
            case `edit`:
                return (<IconUpdate color={iconColor} />)
            case `delete`:
                return (<IconDelete color={iconColor} />)
       

            case `light`:
                return (<IconLight color={iconColor} />)

            case `dark`:
                return (<IconDark color={iconColor} />)

            case `video`:
                return (<IconVideo color={iconColor} />)

            case `list`:
                return (<IconList color={iconColor} />)

            case `logout`:
                return (<IconLogout color={iconColor} />)

            case `share`:
                return (<IconShare color={iconColor} />)

            case `left`:
                return (<IconLeft color={iconColor} />)

            case `right`:
                return (<IconRight color={iconColor} />)
            
            case `login`:
                return (<IconLogin color={iconColor} />)
            

            case `close`:
                return (<IconClose color={iconColor} />)

           case `payments`:
                return (<IconCart color={iconColor} />)   

            case `cart`:
                return (<IconCart color={iconColor} />)   

            case `menu`:
                return (<IconMenu color={iconColor} />)

            case 'medication': 
                return <Medications style={size} color={iconColor} />

            case 'medications': 
                return <Medications style={size} color={iconColor} />

            case 'appointments': 
                return <Appointments style={size} color={iconColor} />

            case 'appointment': 
                return <Appointments style={size} color={iconColor} />

            case 'symptoms': 
                return <Symptoms style={size} color={iconColor} />

            
            case 'dashboard': 
                return <Dashboard style={size} color={iconColor} />

            case 'p2t': 
                return <IconPushtotalk style={size} color={iconColor} />

            case 'documents': 
                return <Documents style={size} color={iconColor} />
            case 'healthforecast': 
                return <HealthForecast style={size} color={iconColor} />

            case 'immunisations': 
                return <Shots style={size} color={iconColor} />

            case 'wordpress': 
                return <WordPress style={size} color={iconColor} />
               

            case 'legal': 
                return <Legal style={size} color={iconColor} />  

            case 'account': 
                return <Account style={size} color={iconColor} />  

            case 'user': 
                return <Account style={size} color={iconColor} />   

            case 'services': 
                return <Services style={size} color={iconColor} />  

            case 'faq': 
                return <FAQ style={size} color={iconColor} />
            
            case 'plus-circle': 
                return <PlusCircle style={size} color={iconColor} />

            case 'goal': 
                return <Goals style={size} color={iconColor} />

            case 'goals': 
                return <Goals style={size} color={iconColor} />

            case 'allergy': 
                return <Allergies style={size} color={iconColor} />
            case 'allergies': 
                return <Allergies style={size} color={iconColor} />

            case 'diagnostic': 
                return <Diagnostic style={size} color={iconColor} />

            case 'hospital': 
                return <Hospital style={size} color={iconColor} />

            case 'pathology': 
                return <Pathology style={size} color={iconColor} />

            case 'referrals': 
                return <Referrals style={size} color={iconColor} />

            case 'apple':
                return <Apple style={{ size, fill: `white` }} />

            case 'google': 
                return <Google style={size} />

            case 'facebook': 
                return <Facebook style={{ size, fill: `white` }} />

            case `add`:
                return (<Add color={iconColor} style={size} />)

            case `activities`:
                return (<Activity color={iconColor} style={size} />)

            case `activity`:
                return (<Activity color={iconColor} style={size} />)

            case `stars`:
                return (<Stars color={iconColor} style={size} />)

            case `lock`:
                return (<Lock color={iconColor} style={size} />)

            case `tick`:
                return (<Tick color={iconColor} style={size} />)

            case `export`:
                return (<Export color={iconColor} style={size} />)

            case `health-forecast`:
                return (<HealthForecast color={iconColor} style={size} />)

            case `forecast`:
                return (<HealthForecast color={iconColor} style={size} />)
            
            case `blokey`:
                return (<Blokey color={iconColor} style={size} />)

            case `listingslab`:
                return (<Blokey color={iconColor} style={size} />)

            case `timeline`:
                return (<Timeline color={iconColor} style={size} />)
                
            case `github`:
                return (<Github color={iconColor} style={size} />)

                


            case `none`:
                return null

            default: {
                return (<IconDefault color={`inherit`} />)
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)
