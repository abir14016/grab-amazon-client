import React from 'react';
import { Link } from 'react-router-dom';
import './Certificate.css';
import certificate from '../../../../assets/temporaryIncome/vipmember/vipMember4.jpg';

const Certificate = () => {
    return (
        <div className='background-color'>
            {/* NavBar Start */}
            <div className="navbar bg-white">
                <div>
                    <Link className='ml-6' to='/'>return</Link>
                </div>
                <div className='mx-auto'>
                    <h6 className='uppercase'>CERTIFICATE</h6>
                </div>
            </div>
            {/* NavBar End */}
            <div className='bg-white my-4 rounded-md m-3'>
                <div className='flex justify-center py-12 px-3'>
                    <img src={certificate} alt="certificateImg" />
                </div>
                <div className='text-left px-3 font-bold text-sm pb-6'>
                    {/* section1 start */}
                    <div>
                        <p>Thank you for showing interest in our service. In order for us to provide you with our service, we are required to collect and process certain personal data about you and your activity.</p>
                        <p>By entrusting us with your personal data, we would like to assure you of our commitment to keep such information private and to operate in accordance with all regulatory laws and all EU data protection laws, including General Data Protection Regulation (GDPR) 679/2016 (EU).</p>
                        <p>We have taken measurable steps to protect the confidentiality, security and integrity of this data. We encourage you to review the following information carefully.</p>
                    </div>
                    {/* section1 end */}

                    {/* section2 start */}
                    <div className='my-4'>
                        <h6>Grounds for data collection:</h6>
                        <p>Processing of your personal information (meaning, any data which may potentially allow your identification with reasonable means; hereinafter “Personal Data”) is necessary for the performance of our contractual obligations towards you and providing you with our services, to protect our legitimate interests and for compliance with legal and financial regulatory obligations to which we are subject.</p>
                    </div>
                    {/* section2 end */}

                    {/* section3 start */}
                    <div>
                        <p>When you use our services, you consent to the collection, storage, use, disclosure and other uses of your Personal Data as described in this Privacy Policy.</p>
                        <p>How do we receive data about you?</p>
                        <h6>We receive your Personal Data from various sources:</h6>
                        <p>When you voluntarily provide us with your personal details in order to create an account (for example, your name and email address)</p>
                        <p>When you use or access our site and services, in connection with your use of our services (for example, your financial transactions)</p>
                    </div>
                    {/* section3 end */}

                    {/* section4 start */}
                    <div className='mt-6'>
                        <p>What type of data we collect?</p>
                        <p>In order to open an account, and in order to provide you with our services we will need you to collect the following data:</p>
                        <p>Personal Data</p>
                        <p>We collect the following Personal Data about you:</p>
                        <p><em>Registration data</em> – your name, email address, phone number, occupation, country of residence, and your age (in order to verify you are over 18 years of age and eligible to participate in our service).</p>
                        <p><em>Voluntary data </em>– when you communicate with us (for example when you send us an email or use a “contact us” form on our site) we collect the personal data you provided us with.</p>
                        <p><em>Financial data</em>– by its nature, your use of our services includes financial transactions, thus requiring us to obtain your financial details, which includes, but not limited to your payment details (such as bank account details and financial transactions performed through our services).</p>
                        <p><em>Technical data</em>– we collect certain technical data that is automatically recorded when you use our services, such as your IP address, MAC address, device approximate location Non Personal Data</p>
                    </div>
                    {/* section4 end */}

                    {/* section5 start */}
                    <div className='mt-6'>
                        <p>We record and collect data from or about your device (for example your computer or your mobile device) when you access our services and visit our site. This includes, but not limited to: your login credentials, UDID, Google advertising ID, IDFA, cookie identifiers, and may include other identifiers such your operating system version, browser type, language preferences, time zone, referring domains and the duration of your visits. This will facilitate our ability to improve our service and personalize your experience with us.</p>
                        <p>If we combine Personal Data with non-Personal Data about you, the combined data will be treated as Personal Data for as long as it remains combined.</p>
                    </div>
                    {/* section5 end */}

                    {/* section6 start */}
                    <div className='mt-6'>
                        <h6>Tracking Technologies</h6>
                        <p>When you visit or access our services we use (and authorize 3rd parties to use) pixels, cookies, events and other technologies (“Tracking Technologies“). Those allow us to automatically collect data about you, your device and your online behavior, in order to enhance your navigation in our services, improve our site’s performance, perform analytics and customize your experience on it. In addition, we may merge data we have with data collected through said tracking technologies with data we may obtain from other sources and, as a result, such data may become Personal Data.</p>
                        <p>Cookie Policy page.</p>
                    </div>
                    {/* section6 end */}

                    {/* section7 start */}
                    <div className='mt-6'>
                        <h6>How do we use the data We collect?</h6>
                        <p>Provision of service – we will use your Personal Data you provide us for the provision and improvement of our services to you.</p>
                        <p>Marketing purposes – we will use your Personal Data (such as your email address or phone number). For example, by subscribing to our newsletter you will receive tips and announcements straight to your email account. We may also send you promotional material concerning our services or our partners’ services (which we believe may interest you), including but not limited to, by building an automated profile based on your Personal Data, for marketing purposes. You may choose not to receive our promotional or marketing emails (all or any part thereof) by clicking on the <span className='ml-2'>“unsubscribe” link in the emails that you receive from us. Please note that even if you unsubscribe from our newsletter, we may continue to send you service-related updates and notifications or reply to your queries and feedback you provide us.</span></p>
                        <p>Opt-out of receiving marketing materials – If you do not want us to use or share your personal data for marketing purposes, you may opt-out in accordance with this “Opt-out” section. Please note that even if you opt-out, we may still use and share your personal information with third parties for non-marketing purposes (for example to fulfill your requests, communicate with you and respond to your inquiries, etc.). In such cases, the companies with whom we share your personal data are authorized to use your Personal Data only as necessary to provide these non-marketing services.Analytics, surveys and research – we are always trying to improve our services and think of new and exciting features for our users. From time to time, we may conduct surveys or test features, and analyze the information we have to develop, evaluate and improve these features.</p>
                        <p>Protecting our interests – we use your Personal Data when we believe it’s necessary in order to take precautions against liabilities, investigate and defend ourselves against any third-party claims or allegations, investigate and protect ourselves from fraud, protect the security or integrity of our services and protect the rights and property of the company, its users and/or partners.Enforcing of policies – we use your Personal Data in order to enforce our policies, including but limited to our Terms & Conditions.</p>
                        <p>Compliance with legal and regulatory requirements – we also use your Personal Data to investigate violations and prevent money laundering and perform due-diligence checks, and as required by law, regulation or other governmental authority, or to comply with a subpoena or similar legal process.</p>
                    </div>
                    {/* section7 end */}

                    {/* section8 start */}
                    <div>
                        <h6>With whom do we share your Personal Data</h6>
                        <p>Internal concerned parties – we share your data with companies in our group, as well as our employees limited to those employees or partners who need to know the information in order to provide you with our services.</p>
                        <p>Financial providers and payment processors – we share your financial data about you for purposes of accepting deposits or performing risk analysis.</p>
                        <p>Business partners – we share your data with business partners, such as storage providers and analytics providers who help us provide you with our service.</p>
                        <p>Legal and regulatory entities – we may disclose any data in case we believe, in good faith, that such disclosure is necessary in order to enforce our Terms & Conditions take precautions against liabilities, investigate and defend ourselves against any third party claims or allegations, protect the security or integrity of the site and our servers and protect the rights and property, our users and/or partners. We may also disclose your personal data where requested any other regulatory authority having control or jurisdiction over us, you or our associates or in the territories we have clients or providers, as a broker.</p>
                        <p>Merger and acquisitions – we may share your data if we enter into a business transaction such as a merger, acquisition, reorganization, bankruptcy, or sale of some or all of our assets. Any party that acquires our assets as part of such a transaction may continue to use your data in accordance with the terms of this Privacy Policy.</p>
                    </div>
                    {/* section8 end */}

                    {/* section9 start */}
                    <div className='mt-6'>
                        <h6>Transfer of data outside the EEA</h6>
                        <p>Please note that some data recipients may be located outside the EEA. In such cases, we will transfer your data only to such countries as approved by the European Commission as providing an adequate level of data protection or enter into legal agreements ensuring an adequate level of data protection.</p>
                    </div>
                    {/* section9 end */}

                    {/* section10 start */}
                    <div className='mt-4'>
                        <h6>How we protect your data</h6>
                        <p>We have implemented administrative, technical, and physical safeguards to help prevent unauthorized access, use, or disclosure of your personal data. Your data is stored on secure servers and isn’t publicly available. We limit access of your data only to those employees or partners that need to know the information in order to enable the carrying out of the agreement between us.</p>
                        <p className='mt-4'>You need to help us prevent unauthorized access to your account by protecting your password appropriately and limiting access to your account (for example, by signing off after you have finished accessing your account). You will be solely responsible for keeping your password confidential and for all use of your password and your account, including any unauthorized use.</p>
                        <p className='mt-4'>While we seek to protect your data to ensure that it is kept confidential, we cannot absolutely guarantee its security. You should be aware that there is always some risk involved in transmitting data over the internet. While we strive to protect your Personal Data, we cannot ensure or warrant the security and privacy of your personal Data or other content you transmit using the service, and you do so at your own risk.</p>
                    </div>
                    {/* section10 end */}

                    {/* section11 start */}
                    <div className='mt-4'>
                        <h6>Retention</h6>
                        <p>We will retain your personal data for as long as necessary to provide our services, and as necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Retention periods will be determined taking into account the type of data that is collected and the purpose for which it is collected, bearing in mind the requirements applicable to the situation and the need to destroy outdated, unused data at the earliest reasonable time. Under applicable regulations, we will keep records containing client personal data, trading information, account opening documents, communications and anything else as required by applicable laws and regulations.</p>
                        <h6>User Rights</h6>
                        <p>Receive confirmation as to whether or not personal data concerning you is being processed, and access your stored personal data, together with supplementary data.Receive a copy of personal data you directly volunteer to us in a structured, commonly used and machine-readable format.</p>
                        <p>Request rectification of your personal data that is in our control.</p>
                        <p>Request erasure of your personal data.</p>
                        <p>Object to the processing of personal data by us.</p>
                        <p>Request to restrict processing of your personal data by us.</p>
                    </div>
                    {/* section11 end */}

                    {/* section12 start */}
                    <div className='my-6'>
                        <p>However, please note that these rights are not absolute, and may be subject to our own legitimate interests and regulatory requirements.</p>
                        <p>How to Contact us?</p>
                        <p>If you wish to exercise any of the aforementioned rights, or receive more information, please contact our General Data Protection Officer (“GDPO”) using the details provided below:</p>
                        <p>Email: admin@money-order.asia</p>
                        <p>Attn. GDPO Compliance Officer</p>
                    </div>
                    {/* section12 end */}

                    {/* section13 start */}
                    <div>
                        <p>If you decide to terminate your account, you may do so by emailing us at admin@money-order.asia. If you terminate your account, please be aware that personal information that you have provided us may still be maintained for legal and regulatory reasons (as described above), but it will no longer be accessible via your account.</p>
                        <p>Updates to this Policy</p>
                        <p>This Privacy Policy is subject to changes from time to time, at our sole discretion. The most current version will always be posted on our website (as reflected in the “Last Updated” heading). You are advised to check for updates regularly. In the event of material changes, we will provide you with a notice. By continuing to access or use our services after any revisions become effective, you agree to be bound by the updated Privacy Policy.</p>
                    </div>
                    {/* section13 end */}
                </div>
            </div>
            <div className='py-4'></div>
        </div>
    );
};

export default Certificate;