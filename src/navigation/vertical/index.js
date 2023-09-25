import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://explorer.vinjan.xyz/logox.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Vinjan Explorer',
      href: 'https://explorer.vinjan.xyz/',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Vinjan Explorer',
      href: 'https://explorer.vinjan.xyz/',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/vjanwil',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'FAQ',
    href: 'https://github.com/vinjan23',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/vinjan23',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
