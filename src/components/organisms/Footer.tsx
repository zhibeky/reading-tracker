const navigation = [
    { name: 'About', href: '#', current: false },
    { name: 'GitHub', href: 'https://github.com/zhibeky/reading-tracker', current: false },
    { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Footer() {
    return (
        <div as="nav" className="bg-footerBg font-sans flex flex-1 h-16 justify-center items-center space-x-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                >
                    {item.name}
                </a>
            ))}
        </div>
    )
}
