import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer px-12 bg-base-200 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:items-center">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer class="footer px-12 py-4 border-t bg-base-200">
                <div className='flex justify-center items-center'>
                    <h2 className='text-center'>{(new Date().getFullYear())}</h2>
                </div>
            </footer>
        </div>
    );
};

export default Footer;