import argos from '../images/argos.jpg'
import belsizeBathrooms from '../images/belsize-bathrooms.png'
import britishAirways from '../images/british-airways.jpg'
import ebuyer from '../images/ebuyer.jpg'
import energyHelpline from '../images/energy-helpline.jpg'
import eurostar from '../images/eurostar.jpg'
import heathrowExpress from '../images/heathrow-express.jpg'
import johnLewis from '../images/john-lewis.gif'
import nationalRailEnquiries from '../images/national-rail-enquiries.jpg'
import thomasCook from '../images/thomas-cook.jpg'
import tint from '../images/tint.png'

const portfolioData = [
  {
    'title': 'Argos',
    'url': '//www.argos.co.uk',
    'logo': argos,
    'role': ['Analytics implementation', 'A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript', 'React'] /* Adobe Analytics, Adobe DTM, Tealium */
  },
  {
    'title': 'John Lewis',
    'url': '//www.johnlewis.com',
    'logo': johnLewis,
    'role': ['A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript']
  },
  {
    'title': 'National Rail Enquiries',
    'url': '//www.nationalrail.co.uk',
    'logo': nationalRailEnquiries,
    'role': ['A/B and multivariate testing', 'Front-end development'],
    'tech': ['HTML', 'CSS', 'JavaScript']
  },
  {
    'title': 'British Airways',
    'url': '//www.britishairways.com/travel/home/public/en_gb', /* Redirects to https://www.britishairways.com/en-gb/home#/ */
    'logo': britishAirways,
    'role': ['A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript']
  },
  {
    'title': 'Ebuyer',
    'url': '//www.ebuyer.com',
    'logo': ebuyer,
    'role': ['A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript']
  },
  {
    'title': 'Eurostar',
    'url': '//www.eurostar.com',
    'logo': eurostar,
    'role': ['Analytics implementation', 'A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript', 'React'], /* Google Analytics, Google Tag Manager, Tealium */
    'isPrimary': true
  },
  {
    'title': 'Thomas Cook',
    'url': '//www.thomascook.com',
    'logo': thomasCook,
    'role': ['A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript', 'Angular']
  },
  {
    'title': 'Heathrow Express',
    'url': '//www.heathrowexpress.com',
    'logo': heathrowExpress,
    'role': ['A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript']
  },
  {
    'title': 'Energy Helpline',
    'url': '//www.energyhelpline.com', /* Redirects to https://www.energyhelpline.com/fri/ */
    'logo': energyHelpline,
    'role': ['A/B and multivariate testing'],
    'tech': ['HTML', 'CSS', 'JavaScript', 'Angular']
  },
  {
    'title': 'Belsize Bathrooms',
    'url': '//www.belsizebathrooms.co.uk',
    'logo': belsizeBathrooms,
    'role': ['Design', 'Front-end development', 'Back-end development'],
    'tech': ['HTML', 'CSS', 'JavaScript', 'PHP']
  },
  {
    'title': 'tint',
    'url': '//play.google.com/store/apps/details?id=com.temelm.tint',
    'logo': tint,
    'role': ['Design', 'Hybrid mobile app development'],
    'tech': ['HTML', 'CSS', 'JavaScript'] /* Adobe PhoneGap */
  }
]

export default portfolioData
