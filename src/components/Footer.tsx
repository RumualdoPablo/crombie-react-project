import React from 'react'

const Footer = () => {

    type FooterSections = {
        [section: string]: string[]
    }

    const footerSections: FooterSections = {
        "Product": ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
        "Engage": ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About us', 'Privacy policy', 'Terms of service'],
        "Earn money": ['Affiliate', 'Become partner']
    };

    return (
        <section className=' bg-gray-200'>

            <div className='relative mb-20 flex justify-between w-3/4 mx-auto py-12 bg-white rounded-xl shadow-xl'>
                <div className=' w-1/4 ml-28'>
                    <h3 className='text-4xl font-semibold leading-snug mb-4'>Subscribe Now to get Special features</h3>
                    <p>Let's subscribe with us and find the fun</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <button className="py-4 px-16 mr-12 text-slate-50 bg-red-500 shadow-2xl shadow-red-300 rounded-lg  font-bold">Subscribe now!</button>
                </div>
            </div>

            <div className='flex justify-between  pt-28'>
                <div className='space-y-8'>
                    <div className="flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 17 18" fill="none">
                            <path d="M15.1635 6.77544L15.1533 6.76521C15.1524 6.76464 15.1518 6.76388 15.1514 6.76299L8.75192 0.363388L2.35254 6.76283C2.3518 6.76357 2.35065 6.76505 2.35065 6.76505L2.34008 6.77528C1.36153 7.75933 0.739981 9.04224 0.574241 10.4201C0.408502 11.798 0.708085 13.1917 1.42536 14.3798C2.14265 15.5678 3.23646 16.482 4.53293 16.977C5.8294 17.472 7.25412 17.5194 8.58061 17.1116C8.69223 17.0775 8.81153 17.0775 8.92317 17.1116C10.2496 17.5192 11.6742 17.4718 12.9706 16.9768C14.267 16.4817 15.3607 15.5676 16.0779 14.3796C16.7951 13.1916 17.0948 11.798 16.9291 10.4202C16.7634 9.04241 16.1419 7.7595 15.1635 6.77544ZM4.62808 10.9955C4.59692 11.0266 4.57222 11.0636 4.55537 11.1043C4.53851 11.1449 4.52984 11.1886 4.52984 11.2326C4.54123 12.3621 4.86043 13.467 5.45309 14.4286C5.46655 14.4504 5.47277 14.4759 5.47087 14.5015C5.46896 14.527 5.45902 14.5513 5.44246 14.5709C5.42591 14.5905 5.40359 14.6043 5.3787 14.6104C5.35381 14.6165 5.32763 14.6146 5.30389 14.6049C4.85835 14.4175 4.45359 14.1451 4.11226 13.8029C3.41276 13.1033 3.01951 12.1546 3.01888 11.1653C3.01824 10.1759 3.41027 9.22675 4.10888 8.52627L8.75192 3.88366L13.3947 8.52627C14.0934 9.22667 14.4856 10.1758 14.4849 11.1653C14.4844 12.1546 14.091 13.1033 13.3915 13.8029C13.0502 14.1451 12.6454 14.4175 12.2 14.6049C12.1762 14.6146 12.15 14.6165 12.1251 14.6104C12.1002 14.6043 12.0779 14.5904 12.0613 14.5709C12.0448 14.5513 12.0348 14.527 12.0329 14.5014C12.031 14.4759 12.0372 14.4503 12.0507 14.4285C12.6434 13.467 12.9628 12.3621 12.9744 11.2326C12.9744 11.1886 12.9656 11.1449 12.9487 11.1042C12.9317 11.0635 12.907 11.0265 12.8757 10.9954L10.6796 8.66602C10.6577 8.64776 10.6302 8.63776 10.6017 8.63776C10.5733 8.63776 10.5457 8.64776 10.5239 8.66602C10.502 8.6842 10.4873 8.70957 10.4822 8.73758C10.477 8.76559 10.4819 8.79443 10.496 8.81922C11.3489 10.3627 10.6154 12.5797 9.39235 13.8029L9.3859 13.8094C9.21709 13.9764 8.98919 14.07 8.75175 14.0699C8.51428 14.0698 8.28644 13.976 8.11775 13.8089L8.11181 13.8029C6.88827 12.5797 6.15522 10.3629 7.00827 8.81955C7.0223 8.79476 7.02719 8.76592 7.02208 8.73791C7.01698 8.7099 7.00222 8.68453 6.98036 8.66635C6.9585 8.64809 6.93095 8.63809 6.90248 8.63809C6.87401 8.63809 6.84645 8.64809 6.82459 8.66635L4.62808 10.9955Z" fill="#F53838" />
                        </svg>
                        <h1 className="text-slate-900 text-lg font-bold">Lasles<b>VPN</b></h1>
                    </div>
                    <p className='w-3/4'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                    <ul className='flex space-x-3'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                    <p className='mt-10'>©2020LaslesVPN</p>
                </div>

                <div className="grid grid-cols-3 gap-36 mr-64">
                    {Object.keys(footerSections).map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold">{section}</h3>
                            <ul className="list-none">
                                {footerSections[section].map((item: string, itemIndex: number) => (
                                    <li className=" mt-2" key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer