//  @param el:dom对象   name:待设置的属性名   value:待设置的属性值，可以为空   获取和设置data-name
export function getData(el, name, value) {
  let prefix = 'data-'
  name = prefix + name
  if (value) {
    return el.setAttribute(name, value)
  } else {
    return el.getAttribute(name)
  }
}
