const add_no_translate_class = (element: Element) => {
  element.classList.add('notranslate')
}

/**
 * prism
 */
for (const element of Array.from(document.querySelectorAll('.prism-code'))) {
  add_no_translate_class(element)
}
