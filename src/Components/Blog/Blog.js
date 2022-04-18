import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 mt-16'>
                <div className='border-2 p-5'>
                    <h1 className='text-4xl'>  <u>Question :</u> difference between authorization and authentication ?</h1>
                    <p className='text-2xl mt-10'><u>Answer :</u> Authentication হল কেউ কে যাচাই করার প্রক্রিয়া, যেখানে Authorization হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে Authentication কাজ করে এবং Authorization সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।</p>
                </div>
                <div className='border-2 p-5'>
                    <h1 className='text-4xl'>  <u>Question :</u> Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-2xl mt-10'><u>Answer :</u> Firebase  এ অনেক সুযোগ-সুবিধা রয়েছে । Firebase ডায়নামিক অ্যাপের জন্য পূর্ণাঙ্গ ব্যাকএন্ড কোড লেখার একটি কম প্রযুক্তিগত এবং সময় সাশ্রয়ী বিকল্প। Firebase কে অনেক ভাবে ব্যবহার করা যায় Firebase এ হোইস্টিং করা যায় এবং ডাটাবেস হিসেবেও ব্যবহার করা যায় । Authentication সম্পূর্ণ করার অনেক মাধ্যম রয়েছে, তা হলো ঃ <a href="https://auth0.com/" className='text-blue-500 underline'>auth0.com</a> <a href="https://www.moesif.com/" className='text-blue-500 underline'>moesif.com</a> ইত্যাদি ।</p>
                </div>
                <div className='border-2 p-5'>
                    <h1 className='text-4xl'>  <u>Question :</u> What other services does firebase provide other than authentication?</h1>
                    <p className='text-2xl mt-10'><u>Answer :</u> Firebase এর অনেক ব্যবহার রয়েছে তার মধ্যে সবচেয়ে প্রচলিত ব্যবহার হলো Authentication. তাছাড়াও Firebase ডাটাবেসে ডাটা সংরক্ষণ এর ব্যবস্থা রয়েছে । Firebase এ কোনো এপ হোইস্টিং করা যায় । Firebase একসাথে পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে Authentication এর জন্য ।</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;