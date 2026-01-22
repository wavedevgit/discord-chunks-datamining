/** Chunk was on web.js **/
/** chunk id: 142809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hd: () => s
});
var Chunk550505 = require("./550505.js");
let i = require("./627354.js").O,
  a = 80;

function s(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n, r = e,
      i = 5,
      s = [],
      l = 0,
      c = 0,
      u = " > ",
      d = u.length,
      f = Array.isArray(t) ? t : t.keyAttrs,
      p = !Array.isArray(t) && t.maxStringLength || a;
    for (; r && l++ < i && (n = o(r, f), "html" !== n && (!(l > 1) || !(c + s.length * d + n.length >= p)));) s.push(n), c += n.length, r = r.parentNode;
    return s.reverse().join(u)
  } catch (e) {
    return "<unknown>"
  }
}

function o(e, t) {
  let n = e,
    a = [];
  if (!n || !n.tagName) return "";
  if (i.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement
  }
  a.push(n.tagName.toLowerCase());
  let s = t && t.length ? t.filter(e => n.getAttribute(e)).map(e => [e, n.getAttribute(e)]) : null;
  if (s && s.length) s.forEach(e => {
    a.push(`[${e[0]}="${e[1]}"]`)
  });
  else {
    n.id && a.push(`#${n.id}`);
    let e = n.className;
    if (e && (0, r.Kg)(e))
      for (let t of e.split(/\s+/)) a.push(`.${t}`)
  }
  for (let e of ["aria-label", "type", "name", "title", "alt"]) {
    let t = n.getAttribute(e);
    t && a.push(`[${e}="${t}"]`)
  }
  return a.join("")
}