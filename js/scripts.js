window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());
gtag('config','G-2CXSD3Z3DS');
const googleAnalyticsScript=document.createElement('script');
googleAnalyticsScript.async=true;
googleAnalyticsScript.src='https://www.googletagmanager.com/gtag/js?id=G-2CXSD3Z3DS';
document.head.appendChild(googleAnalyticsScript);

document.addEventListener('DOMContentLoaded',()=>{
  const guideBack=document.querySelector('.floating-button[href*="compendium"]');
  if(guideBack){
    document.body.classList.add('guide-detail-page');
    document.querySelectorAll('body>.menu-toggle,body>.nav-links').forEach(el=>el.remove());
    const guideTop=document.querySelector('.top-bar');
    if(guideTop)guideTop.innerHTML='<div class="shell top-inner"><span>Hepburn Springs, Victoria</span><span class="social-links"></span></div>';
    const guideHeader=document.querySelector('.site-header');
    if(guideHeader)guideHeader.innerHTML='<div class="shell header-inner"><a href="index.html" class="brand"><img src="images/logo-white.png" alt="Balneo"></a><button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">Menu</button><nav class="nav-links" aria-label="Main navigation"><a href="index.html">Home</a><a href="gallery.html">Explore Balneo</a><a class="active" href="compendium.html">Guest guide</a><a href="contact.html">Contact</a></nav><a class="header-cta" href="https://www.dayget.com.au/accommodation/balneo/#check-availability" target="_blank" rel="noopener">Check availability</a></div>';
    if(!document.querySelector('.site-footer'))document.body.insertAdjacentHTML('beforeend','<footer class="site-footer"><div class="shell footer-grid"><div><img src="images/logo-white.png" alt="Balneo" class="footer-logo"><p>Your private retreat in Hepburn Springs.</p></div><div><h3>Explore</h3><a href="gallery.html">Gallery</a><a href="compendium.html">Guest guide</a><a href="contact.html">Contact</a></div><div><h3>Bookings</h3><a href="tel:+61353484422">03 5348 4422</a><a href="mailto:bookings@dayget.com.au">bookings@dayget.com.au</a></div></div><div class="shell footer-bottom">© Balneo Hepburn Springs</div></footer>');
  }
  document.querySelectorAll('.top-bar a[href^="mailto:bookings@dayget.com.au"]').forEach(a=>a.remove());
  const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('.nav-links');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu'});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}))}
  const top=document.querySelector('.top-inner');
  if(top){let socials=top.querySelector('.social-links');if(!socials){socials=document.createElement('span');socials.className='social-links';top.appendChild(socials)}socials.classList.add('top-socials');socials.innerHTML='<a href="https://instagram.com/balneohepburnsprings/" target="_blank" rel="noopener" aria-label="Instagram"><img src="images/instagram.png" alt=""></a><a href="https://www.facebook.com/profile.php?id=61572259119775" target="_blank" rel="noopener" aria-label="Facebook"><img src="images/facebook.png" alt=""></a>'}
  const directions='https://maps.app.goo.gl/GQ61XfFfQzNEjYQa8';document.querySelectorAll('.directions-link,.directions-button').forEach(a=>a.href=directions);
  document.querySelectorAll('.footer-grid>div').forEach(section=>{const heading=section.querySelector('h3');if(heading&&heading.textContent.trim()==='Bookings'&&!section.querySelector('.airbnb-link')){const link=document.createElement('a');link.className='airbnb-link';link.href='https://www.airbnb.com.au/rooms/1354611935275426102';link.target='_blank';link.rel='noopener';link.textContent='View Balneo on Airbnb';section.appendChild(link)}});
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href*="dayget.com.au/accommodation/balneo/"][href*="check-availability"]');
    if(!link)return;
    const placement=link.closest('.site-header')?'header':link.classList.contains('mobile-book')?'mobile_sticky':link.closest('.hero')?'homepage_hero':link.closest('.booking-banner')?'homepage_booking_banner':link.closest('.contact-page,.mobile-contact-actions')?'contact':'other';
    gtag('event','check_availability_click',{
      link_url:link.href,
      link_text:link.textContent.trim(),
      button_location:placement,
      page_path:window.location.pathname
    });
  });
});
