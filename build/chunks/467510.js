/** Chunk was on web.js **/
/** chunk id: 467510, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rt: () => a
});
var Chunk573736 = require("./573736.js");
let i = require("./899517.js").n,
  o = 80;

function a(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n, r = e,
      i = 5,
      a = [],
      l = 0,
      c = 0,
      u = " > ",
      d = u.length,
      f = Array.isArray(t) ? t : t.keyAttrs,
      p = !Array.isArray(t) && t.maxStringLength || o;
    for (; r && l++ < i && (n = s(r, f), "html" !== n && (!(l > 1) || !(c + a.length * d + n.length >= p)));) a.push(n), c += n.length, r = r.parentNode;
    return a.reverse().join(u)
  } catch (e) {
    return "<unknown>"
  }
}

function s(e, t) {
  let n = e,
    o = [];
  if (!n || !n.tagName) return "";
  if (i.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement
  }
  o.push(n.tagName.toLowerCase());
  let a = t && t.length ? t.filter(e => n.getAttribute(e)).map(e => [e, n.getAttribute(e)]) : null;
  if (a && a.length) a.forEach(e => {
    o.push(`[${e[0]}="${e[1]}"]`)
  });
  else {
    n.id && o.push(`#${n.id}`);
    let e = n.className;
    if (e && (0, r.HD)(e))
      for (let t of e.split(/\s+/)) o.push(`.${t}`)
  }
  for (let e of ["aria-label", "type", "name", "title", "alt"]) {
    let t = n.getAttribute(e);
    t && o.push(`[${e}="${t}"]`)
  }
  return o.join("")
}