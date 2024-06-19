
import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import image from '../assets/con_bg.gif';



export default function TalktoMe() {

  const sectionRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className='dark-blue-bg'>
      <header>
        <Navbar />
      </header>




      <main>

        <div className="h-29"></div>

        <section ref={(el) => (sectionRefs.current[0] = el)}>
          <div class="relative w-full h-96"><img class="absolute h-full w-full object-cover object-center" src={image} alt="nature image" />
            <div class="absolute inset-0 h-full w-full bg-black/50"></div>
            <div class="relative pt-28 text-center ">
              <h2 class="p-5 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold font-mono eading-none tracking-tight text-gray-900  dark:text-white   ...">Contact Information</h2>
              <p class="p-10 pt-0 mb-3 text-center text-gray-500 dark:text-gray-400  text-gray-500 dark:text-gray-400">
              Contact me via social media below and I will get back to you as soon as possible. Let's start a conversation and see how we can work together to create something amazing!
              </p>
            </div>
          </div>
          <div  ref={(el) => (sectionRefs.current[1] = el)} class=" -mt-16 mb-8 px-8  ">
            <div class="container mx-auto ">
              <div class="py-12 flex justify-center rounded-xl border border-white low-white-bg shadow-md shadow-black/5 saturate-200 ">
                <div class=" my-8 grid gap-6 px-4">
                  <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                  </svg>
                    <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">Matara,Sri  Lanka</p>
                  </div>
                  <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path>
                  </svg>
                    <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">+94 76 94 86 926</p>
                  </div>
                  <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                  </svg>
                    <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">nethinduhansaka6113@gmail.com</p>
                  </div>

                  {/* Socail Media icons */}
                  <div class="flex items-center justify-center  py-8 flex gap-2 flex-wrap">
                    <a href="https://web.facebook.com/profile.php?id=100090717030773"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                        fill="none">
                        <path
                          d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                          fill="#111827" />
                      </svg>
                    </a>
                    <a href=""
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                        fill="none">
                        <path
                          d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="https://x.com/nethinduhansaka"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                        fill="none">
                        <path
                          d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="https://www.tiktok.com/@nethinduhansaka55"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                        fill="none">
                        <path
                          d="M50.0783 22.6244C49.7746 22.4674 49.4789 22.2953 49.1924 22.1088C48.3592 21.5579 47.5952 20.9089 46.9171 20.1756C45.2202 18.2341 44.5864 16.2644 44.353 14.8853H44.3624C44.1674 13.7406 44.248 13 44.2602 13H36.5314V42.8856C36.5314 43.2869 36.5314 43.6834 36.5146 44.0753C36.5146 44.1241 36.5099 44.1691 36.5071 44.2216C36.5071 44.2431 36.5071 44.2656 36.5024 44.2881C36.5024 44.2938 36.5024 44.2994 36.5024 44.305C36.4209 45.3773 36.0772 46.4131 35.5014 47.3214C34.9257 48.2297 34.1355 48.9825 33.2005 49.5138C32.226 50.0681 31.1238 50.359 30.0027 50.3575C26.4017 50.3575 23.4833 47.4213 23.4833 43.795C23.4833 40.1688 26.4017 37.2325 30.0027 37.2325C30.6843 37.2319 31.3618 37.3391 32.0099 37.5503L32.0192 29.6809C30.0518 29.4268 28.053 29.5832 26.149 30.1402C24.245 30.6972 22.477 31.6427 20.9567 32.9172C19.6246 34.0746 18.5047 35.4557 17.6474 36.9981C17.3211 37.5606 16.0902 39.8209 15.9411 43.4894C15.8474 45.5716 16.4727 47.7288 16.7708 48.6203V48.6391C16.9583 49.1641 17.6849 50.9556 18.8689 52.4659C19.8237 53.6774 20.9518 54.7417 22.2167 55.6244V55.6056L22.2355 55.6244C25.9771 58.1669 30.1255 58 30.1255 58C30.8436 57.9709 33.2492 58 35.9811 56.7053C39.0111 55.27 40.7361 53.1316 40.7361 53.1316C41.8381 51.8538 42.7144 50.3977 43.3274 48.8256C44.0267 46.9872 44.2602 44.7822 44.2602 43.9009V28.0459C44.3539 28.1022 45.6027 28.9281 45.6027 28.9281C45.6027 28.9281 47.4017 30.0813 50.2086 30.8322C52.2224 31.3666 54.9355 31.4791 54.9355 31.4791V23.8066C53.9849 23.9097 52.0546 23.6097 50.0783 22.6244Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="https://wa.me/qr/X7VE6MZTQCTRB1"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                        fill="none">
                        <path
                          d="M12.5068 56.8405L15.7915 44.6381C13.1425 39.8847 12.3009 34.3378 13.4211 29.0154C14.5413 23.693 17.5482 18.952 21.89 15.6624C26.2319 12.3729 31.6173 10.7554 37.0583 11.1068C42.4992 11.4582 47.6306 13.755 51.5108 17.5756C55.3911 21.3962 57.7599 26.4844 58.1826 31.9065C58.6053 37.3286 57.0535 42.7208 53.812 47.0938C50.5705 51.4668 45.8568 54.5271 40.5357 55.7133C35.2146 56.8994 29.6432 56.1318 24.8438 53.5513L12.5068 56.8405ZM25.4386 48.985L26.2016 49.4365C29.6779 51.4918 33.7382 52.3423 37.7498 51.8555C41.7613 51.3687 45.4987 49.5719 48.3796 46.7452C51.2605 43.9185 53.123 40.2206 53.6769 36.2279C54.2308 32.2351 53.445 28.1717 51.4419 24.6709C49.4388 21.1701 46.331 18.4285 42.6027 16.8734C38.8745 15.3184 34.7352 15.0372 30.8299 16.0736C26.9247 17.11 23.4729 19.4059 21.0124 22.6035C18.5519 25.801 17.2209 29.7206 17.2269 33.7514C17.2237 37.0937 18.1503 40.3712 19.9038 43.2192L20.3823 44.0061L18.546 50.8167L25.4386 48.985Z"
                          fill="#111827" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M43.9566 36.8847C43.5093 36.5249 42.9856 36.2716 42.4254 36.1442C41.8651 36.0168 41.2831 36.0186 40.7236 36.1495C39.8831 36.4977 39.3399 37.8134 38.7968 38.4713C38.6823 38.629 38.514 38.7396 38.3235 38.7823C38.133 38.8251 37.9335 38.797 37.7623 38.7034C34.6849 37.5012 32.1055 35.2965 30.4429 32.4475C30.3011 32.2697 30.2339 32.044 30.2557 31.8178C30.2774 31.5916 30.3862 31.3827 30.5593 31.235C31.165 30.6368 31.6098 29.8959 31.8524 29.0809C31.9063 28.1818 31.6998 27.2863 31.2576 26.5011C30.9157 25.4002 30.265 24.42 29.3825 23.6762C28.9273 23.472 28.4225 23.4036 27.9292 23.4791C27.4359 23.5546 26.975 23.7709 26.6021 24.1019C25.9548 24.6589 25.4411 25.3537 25.0987 26.135C24.7562 26.9163 24.5939 27.7643 24.6236 28.6165C24.6256 29.0951 24.6864 29.5716 24.8046 30.0354C25.1049 31.1497 25.5667 32.2144 26.1754 33.1956C26.6145 33.9473 27.0937 34.6749 27.6108 35.3755C29.2914 37.6767 31.4038 39.6305 33.831 41.1284C35.049 41.8897 36.3507 42.5086 37.7105 42.973C39.1231 43.6117 40.6827 43.8568 42.2237 43.6824C43.1018 43.5499 43.9337 43.2041 44.6462 42.6755C45.3588 42.1469 45.9302 41.4518 46.3102 40.6512C46.5334 40.1675 46.6012 39.6269 46.5042 39.1033C46.2714 38.0327 44.836 37.4007 43.9566 36.8847Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="https://pin.it/2epBeml75"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                        fill="none">
                        <path
                          d="M33.2808 13.0437C25.8492 13.893 18.4439 20.0479 18.1382 28.84C17.9461 34.2083 19.435 38.2356 24.4258 39.3664C26.5915 35.4553 23.7272 34.5927 23.2818 31.7633C21.4523 20.1686 36.346 12.2615 44.14 20.3563C49.5324 25.9615 45.9826 43.206 37.2848 41.4136C28.9537 39.7017 41.3629 25.9749 34.713 23.2796C29.3074 21.0894 26.4343 29.9798 28.9974 34.396C27.4953 41.9902 24.2599 49.1464 25.5698 58.6715C29.8183 55.5158 31.2504 49.4727 32.425 43.1702C34.5601 44.4978 35.6998 45.8789 38.4244 46.0935C48.4714 46.8891 54.0822 35.8263 52.7112 25.6218C51.4929 16.5749 42.6729 11.971 33.2808 13.0437Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="https://www.linkedin.com/in/nethinduhansaka-a752072b4"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                        fill="none">
                        <path
                          d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="javascript:;"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                        fill="none">
                        <path
                          d="M17.5822 33.5652C17.5822 33.5652 36.2102 25.7194 42.6707 22.9567C45.1473 21.8518 53.546 18.3155 53.546 18.3155C53.546 18.3155 57.4224 16.7685 57.0993 20.5256C56.9916 22.0728 56.1302 27.4874 55.2688 33.3442C53.9767 41.6322 52.5769 50.6935 52.5769 50.6935C52.5769 50.6935 52.3615 53.2352 50.5311 53.6772C48.7006 54.1192 45.6856 52.1302 45.1473 51.6881C44.7165 51.3566 37.0715 46.3838 34.272 43.9527C33.5182 43.2897 32.6569 41.9637 34.3796 40.4166C38.256 36.7699 42.886 32.2392 45.6856 29.3661C46.9778 28.04 48.2698 24.9459 42.886 28.703C35.2411 34.1178 27.7038 39.201 27.7038 39.201C27.7038 39.201 25.9809 40.306 22.7507 39.3115C19.5203 38.317 15.7516 36.9909 15.7516 36.9909C15.7516 36.9909 13.1675 35.3334 17.5822 33.5652Z"
                          fill="#111827" />
                      </svg>
                    </a>
                    <a href="javascript:;"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                        fill="none">
                        <path
                          d="M25.3725 54.3647C25.3725 53.5978 25.3725 52.831 25.3725 52.0642C25.378 52.0328 25.3769 52.0007 25.3693 51.9698C25.3617 51.9389 25.3478 51.9099 25.3284 51.8845C25.309 51.8591 25.2846 51.838 25.2566 51.8223C25.2286 51.8067 25.1977 51.7969 25.1657 51.7935C23.2458 51.2536 21.4738 50.2917 19.9817 48.9795C18.8945 48.0005 17.9894 46.8402 17.3073 45.5514C16.3461 43.6897 15.7063 41.6818 15.4146 39.6111C15.0532 37.0135 14.9277 34.3891 15.0396 31.7693C15.0641 30.5479 15.1272 29.3404 15.2674 28.1191C15.491 25.7981 16.0824 23.5265 17.0199 21.3876C18.1776 18.7579 20.2777 16.6455 22.9155 15.4577C24.7123 14.6438 26.6026 14.0495 28.5446 13.6881C30.4491 13.331 32.3773 13.1119 34.3139 13.0324C36.0597 12.9712 37.8074 12.9967 39.5505 13.1087C42.0454 13.2129 44.5177 13.622 46.9112 14.3266C48.6858 14.833 50.374 15.599 51.9199 16.5993C53.4262 17.6229 54.6445 19.0093 55.46 20.6278C56.4188 22.5181 57.0706 24.5462 57.3913 26.6375C57.5997 27.879 57.7366 29.1314 57.8014 30.3883C57.8926 31.9463 57.882 33.5111 57.8225 35.0621C57.7629 36.6131 57.6297 38.119 57.4369 39.6388C57.1932 41.9199 56.4849 44.1283 55.3549 46.1308C53.884 48.664 51.5277 50.577 48.7303 51.509C46.8175 52.1721 44.8425 52.6441 42.8348 52.9178C41.3662 53.119 39.894 53.2647 38.4149 53.3237C37.2827 53.3758 36.1506 53.3619 35.0185 53.3446C34.377 53.3446 33.7391 53.2821 33.1012 53.2266C33.0386 53.2149 32.9738 53.2218 32.9152 53.2465C32.8566 53.2712 32.8066 53.3126 32.7717 53.3654C31.4819 54.899 30.1429 56.391 28.7935 57.8761C28.5477 58.1471 28.2631 58.3809 27.9487 58.5701C27.7424 58.7041 27.5072 58.7882 27.2619 58.8156C27.0167 58.843 26.7685 58.8129 26.5372 58.7278C26.3059 58.6427 26.098 58.5049 25.9304 58.3256C25.7628 58.1463 25.6401 57.9306 25.5723 57.6957C25.4387 57.2783 25.3725 56.8427 25.376 56.4049C25.3725 55.7179 25.3725 55.0413 25.3725 54.3647ZM26.9323 57.2758L27.097 57.1232L30.0237 53.9067C31.15 52.6691 32.2752 51.4304 33.3991 50.1905C33.4544 50.1149 33.5289 50.0551 33.6151 50.0173C33.7013 49.9795 33.7961 49.965 33.8898 49.9754C34.2719 50.0135 34.6539 50.0274 35.0395 50.0309C36.3714 50.0309 37.7034 50.0309 39.0353 49.9372C40.2445 49.8435 41.4503 49.6978 42.649 49.5104C43.9396 49.288 45.2173 48.9973 46.4765 48.6395C49.2806 47.8935 51.4502 46.2974 52.8137 43.7124C53.6187 42.1231 54.1235 40.4015 54.3034 38.6326C54.5164 36.9653 54.6439 35.2884 54.6854 33.6083C54.7476 31.4978 54.602 29.3863 54.2508 27.3037C54.0073 25.7948 53.5691 24.3231 52.9469 22.9248C52.1548 21.1899 51.0331 19.7534 49.3051 18.8304C46.6553 17.4147 43.7882 16.7832 40.8334 16.4605C39.9957 16.3703 39.158 16.3217 38.3167 16.2905C36.5943 16.2026 34.8682 16.2119 33.1468 16.3183C31.9088 16.4092 30.6775 16.5737 29.4594 16.811C27.6682 17.1342 25.9353 17.7189 24.3175 18.5459C23.3796 19.015 22.5287 19.638 21.8008 20.3883C20.6213 21.6935 19.756 23.2464 19.2702 24.9303C18.6938 26.8915 18.3792 28.9189 18.3343 30.9608C18.2216 33.0028 18.2473 35.05 18.4114 37.0885C18.5136 38.3017 18.7187 39.5042 19.0248 40.6832C19.4802 42.5206 20.3637 44.227 21.6046 45.6659C22.9442 47.1338 24.6757 48.1971 26.5993 48.7332C26.8411 48.806 26.9498 48.8893 26.9498 49.16C26.9288 50.1593 26.9498 51.1586 26.9498 52.1579L26.9323 57.2758Z"
                          fill="#111827" />
                        <path
                          d="M24.4795 26.2839C24.4549 25.524 24.872 24.9723 25.3768 24.4761C26.0424 23.8449 26.7758 23.2876 27.5639 22.8141C27.9233 22.5947 28.3506 22.5111 28.7672 22.5787C29.1838 22.6463 29.5618 22.8605 29.8317 23.1819C30.7852 24.1741 31.6386 25.256 32.3799 26.4123C32.7469 26.9324 33.0241 27.5093 33.2001 28.1194C33.2704 28.3575 33.275 28.6099 33.2133 28.8504C33.1517 29.0908 33.0261 29.3105 32.8496 29.4865C32.4452 29.8795 32.0142 30.2447 31.5597 30.5795C31.3307 30.7602 31.1604 31.0036 31.07 31.2794C30.9796 31.5552 30.9732 31.8512 31.0515 32.1305C31.3322 33.4424 31.9683 34.6539 32.8916 35.635C34.0136 36.9909 35.4592 38.0487 37.0977 38.7128C37.5003 38.9177 37.9617 38.9801 38.4051 38.8897C38.648 38.8241 38.8638 38.6845 39.022 38.4907C39.2673 38.1819 39.5337 37.8835 39.7546 37.5538C40.041 37.1427 40.4783 36.8585 40.9733 36.7619C41.4683 36.6653 41.9818 36.764 42.4044 37.0368C43.5925 37.7193 44.7142 38.5091 45.7552 39.3963C46.0006 39.6045 46.2565 39.8057 46.5018 40.0174C46.7921 40.2366 47.0018 40.544 47.0987 40.8925C47.1955 41.2409 47.1742 41.6113 47.0381 41.9466C46.8215 42.5106 46.5059 43.0321 46.1057 43.4872C45.6085 44.1714 44.9751 44.7476 44.2445 45.1805C43.8953 45.3835 43.5029 45.5027 43.0988 45.5286C42.6946 45.5545 42.2899 45.4864 41.9172 45.3297C39.0813 44.1994 36.4316 42.6569 34.0553 40.753C31.7311 38.8589 29.6999 36.6378 28.0266 34.1604C26.6186 32.1095 25.4984 29.8789 24.6968 27.5296C24.6114 27.2454 24.5412 26.957 24.4865 26.6656C24.4709 26.5389 24.4685 26.411 24.4795 26.2839Z"
                          fill="#111827" />
                        <path
                          d="M36.5807 22.5919C38.9533 22.6354 41.2353 23.5017 43.0288 25.0401C44.8224 26.5784 46.0136 28.691 46.3949 31.0097C46.5484 31.8527 46.6305 32.7069 46.6402 33.5635C46.6402 33.7647 46.5877 33.9104 46.3703 33.9313C46.153 33.9521 46.0969 33.7682 46.0969 33.5843C46.1295 31.8517 45.7702 30.1339 45.0454 28.5565C44.435 27.2604 43.5308 26.1212 42.4031 25.2275C41.2754 24.3339 39.9546 23.7098 38.5435 23.4039C37.7975 23.2329 37.0345 23.1444 36.2687 23.1402C36.1942 23.1414 36.1198 23.1321 36.0479 23.1124C35.9867 23.0953 35.9346 23.0554 35.9026 23.001C35.8705 22.9466 35.8611 22.8821 35.8762 22.8209C35.8766 22.7919 35.8829 22.7633 35.8946 22.7367C35.9064 22.7101 35.9233 22.6861 35.9445 22.6661C35.9657 22.6461 35.9908 22.6305 36.0181 22.6201C36.0455 22.6097 36.0747 22.6049 36.104 22.6058C36.2617 22.585 36.423 22.5919 36.5807 22.5919Z"
                          fill="#111827" />
                        <path
                          d="M43.3468 32.0019C43.3351 31.038 43.0953 30.0902 42.6467 29.2345C42.198 28.3788 41.5531 27.6392 40.7636 27.0748C39.8422 26.4341 38.7709 26.0364 37.6511 25.9194C37.4618 25.8951 37.2726 25.8847 37.0798 25.8639C36.887 25.843 36.7713 25.7632 36.7889 25.5689C36.8064 25.3746 36.9291 25.3052 37.1394 25.3191C40.2449 25.5065 42.8877 27.2448 43.7009 30.4822C43.8496 31.1064 43.9237 31.7457 43.9217 32.3871C43.9217 32.4461 43.9217 32.5051 43.9217 32.5606C43.9217 32.7341 43.8095 32.8486 43.6378 32.8451C43.5997 32.8438 43.5622 32.8349 43.5278 32.8188C43.4933 32.8028 43.4625 32.7799 43.4372 32.7516C43.412 32.7234 43.3928 32.6903 43.3809 32.6545C43.3689 32.6187 43.3645 32.5808 43.3679 32.5432C43.3398 32.3801 43.3468 32.2136 43.3468 32.0019Z"
                          fill="#111827" />
                        <path
                          d="M37.9059 28.1364C39.6093 28.2509 40.7976 29.0767 41.1235 30.8706C41.1631 31.1004 41.1912 31.332 41.2077 31.5646C41.2077 31.752 41.1656 31.9116 40.9588 31.9116C40.752 31.9116 40.6819 31.7728 40.6749 31.5646C40.6729 30.877 40.4589 30.2063 40.0615 29.6423C39.6438 29.1315 39.0442 28.7987 38.3861 28.7124C38.2389 28.6852 38.0903 28.6666 37.9409 28.6569C37.6956 28.6569 37.5589 28.5355 37.5904 28.3481C37.622 28.1607 37.7692 28.126 37.9059 28.1364Z"
                          fill="#111827" />
                      </svg></a>
                    <a href="https://www.youtube.com/@nethinduhansaka7209"
                      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 71"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
                          fill="#111827" />
                      </svg></a>
                  </div>
                  {/*--------------------------------------------------------------*/}


                </div>



              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>


  )
}


