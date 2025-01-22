import {TelegramLogo} from "../atoms/TelegramLogo.tsx";
import {GitHubLogo} from "../atoms/GitHubLogo.tsx";

const navigation = [
    { name: 'About', href: '#', current: false },
    { name: 'GitHub', href: 'https://github.com/zhibeky/reading-tracker', current: false },
    { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}

export function Footer() {
    return (
        <div className="bg-footerBg font-sans py-4 flex justify-center items-center space-x-6">
            <p className="font-sans font-medium text-sm text-gray-300">© 2025 Reading Tracker. All rights reserved.</p>
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current
                            ? 'bg-[#D79A8F] text-white'
                            : 'text-gray-300 hover:bg-[#D79A8F] hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                >
                    {item.name}
                </a>
            ))}
            <div className="flex flex-row justify-center">
                <GitHubLogo />
                <TelegramLogo />
            </div>
        </div>
    )
}
