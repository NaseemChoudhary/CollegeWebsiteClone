import './style.css'
import './refinements.css'
import { footer } from './components/footer'
import { header } from './components/header'
import { about } from './components/about'
import { events, news, videos } from './components/content'
import { identity } from './components/identity'
import { hero } from './components/hero'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  ${header()}
  <main id="content">
    ${identity()}
    ${hero()}
    ${news()}
    ${about()}
    ${events()}
    ${videos()}
    <section class="admissions-cta" id="admissions"><div class="container admissions-inner"><div><p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Build your future<br /><em>at AIKTC.</em></h2></div><div><p>Applications are open for our Engineering, Pharmacy and Architecture programmes.</p><button class="hero-primary" data-admissions>Begin your application <span>↗</span></button></div></div></section>
  </main>
  ${footer()}
  <div class="quick-actions"><a href="#admissions">Admissions Enquiry</a><a href="#">Virtual Tour</a><a href="https://cdn.aiktc.ac.in/wp-content/uploads/2025/10/AIKTC-Prospectus-2025.pdf" target="_blank">Prospectus</a></div>
  <dialog class="admission-dialog" id="admission-dialog">
    <form method="dialog" class="admission-form">
      <button class="dialog-close" aria-label="Close admissions form">&times;</button>
      <p class="eyebrow">START YOUR JOURNEY</p>
      <h2>Admissions enquiry</h2>
      <p class="form-intro">Leave your details and our admissions team will get in touch with you.</p>
      <div class="form-grid"><label>Full name<input required type="text" placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="+91" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Programme<select required><option value="">Select programme</option><option>B.Tech Engineering</option><option>B.Arch Architecture</option><option>B.Pharm Pharmacy</option><option>Diploma programmes</option></select></label></div>
      <button class="button button-primary submit-button" value="submitted">Submit enquiry <span>↗</span></button>
    </form>
  </dialog>
  <dialog class="search-dialog" id="search-dialog">
    <form method="dialog" class="search-form">
      <button class="dialog-close" aria-label="Close search">&times;</button>
      <label for="site-search">Search AIKTC</label>
      <div class="search-input-wrap">
        <input id="site-search" type="search" placeholder="What are you looking for?" autofocus />
        <button class="button button-primary" value="search">Search</button>
      </div>
    </form>
  </dialog>
`

const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]')
const nav = document.querySelector<HTMLElement>('[data-mobile-nav]')
menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open') ?? false
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})

const searchDialog = document.querySelector<HTMLDialogElement>('#search-dialog')
document.querySelectorAll('[data-search]').forEach((button) => {
  button.addEventListener('click', () => searchDialog?.showModal())
})

const admissionDialog = document.querySelector<HTMLDialogElement>('#admission-dialog')
document.querySelectorAll('[data-admissions]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    admissionDialog?.showModal()
  })
})
document.querySelector('.quick-actions a')?.addEventListener('click', (event) => {
  event.preventDefault()
  admissionDialog?.showModal()
})

document.querySelectorAll<HTMLElement>('[data-counter]').forEach((counter) => {
  const target = Number(counter.dataset.counter ?? 0)
  let current = 0
  const step = Math.max(1, Math.ceil(target / 36))
  const tick = () => {
    current = Math.min(target, current + step)
    counter.textContent = current.toLocaleString()
    if (current < target) requestAnimationFrame(tick)
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { tick(); observer.disconnect() }
  }, { threshold: 0.4 })
  observer.observe(counter)
})
