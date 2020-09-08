import argos from '../images/argos.jpg'
import britishAirways from '../images/british-airways.jpg'
import ebuyer from '../images/ebuyer.jpg'
import energyHelpline from '../images/energy-helpline.jpg'
import eurostar from '../images/eurostar.jpg'
import heathrowExpress from '../images/heathrow-express.jpg'
import johnLewis from '../images/john-lewis.gif'
import nationalRailEnquiries from '../images/national-rail-enquiries.jpg'
import tealman from '../images/tealman.png'
import tint from '../images/tint.png'
import tuClothing from '../images/tu-clothing.jpeg'

const portfolioData = [
  {
    title: 'Tu Clothing',
    subTitle: 'Contract',
    url: '//tuclothing.sainsburys.co.uk',
    logo: tuClothing,
    date: 'May 2020 - September 2020',
    role: ['Digital Analytics Development'],
    tech: ['Adobe Analytics', 'Tealium iQ', 'JavaScript', 'HTML', 'CSS'],
    isPrimary: true
  },
  {
    title: 'Eurostar',
    subTitle: 'Contract',
    url: '//www.eurostar.com',
    logo: eurostar,
    date: 'November 2018 - April 2020',
    role: ['Digital Analytics Development'],
    tech: ['Google Analytics', 'Tealium iQ', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Argos',
    url: '//www.argos.co.uk',
    logo: argos,
    date: 'August 2017 - November 2018',
    role: ['Digital Analytics Development', 'A/B Test Development'],
    tech: ['Adobe Analytics', 'Tealium iQ', 'JavaScript', 'React', 'HTML', 'CSS']
  },
  {
    title: 'John Lewis',
    url: '//www.johnlewis.com',
    logo: johnLewis,
    date: 'August 2013 - July 2017',
    role: ['A/B and Multivariate Test Development'],
    tech: ['OpenText Optimost', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'British Airways',
    url: '//www.britishairways.com/travel/home/public/en_gb',
    logo: britishAirways,
    date: 'August 2013 - July 2017',
    role: ['A/B and Multivariate Test Development'],
    tech: ['OpenText Optimost', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'National Rail Enquiries',
    url: '//www.nationalrail.co.uk',
    logo: nationalRailEnquiries,
    date: 'August 2013 - July 2017',
    role: ['A/B and Multivariate Test Development'],
    tech: ['OpenText Optimost', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Ebuyer',
    url: '//www.ebuyer.com',
    logo: ebuyer,
    date: 'August 2013 - July 2017',
    role: ['A/B and Multivariate Test Development'],
    tech: ['OpenText Optimost', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Energy Helpline',
    url: '//www.energyhelpline.com',
    logo: energyHelpline,
    date: 'August 2013 - July 2017',
    role: ['A/B and Multivariate Test Development'],
    tech: ['OpenText Optimost', 'JavaScript', 'Angular', 'HTML', 'CSS']
  },
  {
    title: 'Heathrow Express',
    url: '//www.heathrowexpress.com',
    logo: heathrowExpress,
    date: 'August 2013 - July 2017',
    role: ['A/B and Multivariate Test Development'],
    tech: ['OpenText Optimost', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Tealman',
    subTitle: 'Personal Project',
    url: '//chrome.google.com/webstore/detail/tealman/kbppiimbnpoalogphgccdikkjhjolmfn',
    logo: tealman,
    date: 'January 2019 - Present',
    role: ['Chrome DevTools Extension Development'],
    tech: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'tint',
    subTitle: 'Personal Project',
    url: '//play.google.com/store/apps/details?id=com.temelm.tint',
    logo: tint,
    date: 'December 2015 - August 2016',
    role: ['Hybrid Mobile App Development'],
    tech: ['Adobe PhoneGap', 'JavaScript', 'HTML', 'CSS']
  }
]

const primaryIndex = portfolioData.findIndex(item => item.isPrimary)
const primary = portfolioData.splice(primaryIndex, 1)[0]
portfolioData.unshift(primary)

const portfolioDataWithKeys = portfolioData.map((item, index) => {
  const currentItem = { ...item, key: index }
  currentItem.role = currentItem.role.map((currentRole, roleIndex) => ({ value: currentRole, key: roleIndex }))
  currentItem.tech = currentItem.tech.map((currentTech, techIndex) => ({ value: currentTech, key: techIndex }))
  return currentItem
})

export default portfolioDataWithKeys
