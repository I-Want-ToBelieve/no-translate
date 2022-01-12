import VM from '@violentmonkey/dom'

const add_no_translate_class = (element: Element) => {
  element.classList.add('notranslate')
}

const run = () => {
  /**
   * prism
   */
  for (const element of Array.from(document.querySelectorAll('.prism-code'))) {
    add_no_translate_class(element)
  }
}

VM.observe(document.body, () => {
  run()

  return false
})
