/** Chunk was on web.js **/
/** chunk id: 431462, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk262068 = require("./262068.js"),
  Chunk961742 = require("./961742.js"),
  Chunk27273 = require("./27273.js"),
  Chunk295415 = require("./295415.js");
async function s(e, t, n) {
  var i;
  let a = null == (i = t.style) ? true : i.getPropertyValue(e);
  if (a) {
    let i = await (0, r.vg)(a, null, n);
    return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), true
  }
  returnfalse
}
async function l(e, t) {
  await s("background", e, t) || await s("background-image", e, t), await s("mask", e, t) || await s("mask-image", e, t)
}
async function c(e, t) {
  let n = (0, i.oY)(e, HTMLImageElement);
  if (!(n && !(0, a.pZ)(e.src)) && !((0, i.oY)(e, SVGImageElement) && !(0, a.pZ)(e.href.baseVal))) return;
  let r = n ? e.src : e.href.baseVal,
    s = await (0, a.sx)(r, (0, o.b)(r), t);
  await new Promise((t, r) => {
    e.onload = t, e.onerror = r;
    let i = e;
    i.decode && (i.decode = t), "lazy" === i.loading && (i.loading = "eager"), n ? (e.srcset = "", e.src = s) : e.href.baseVal = s
  })
}
async function u(e, t) {
  let n = (0, i.qo)(e.childNodes).map(e => d(e, t));
  await Promise.all(n).then(() => e)
}
async function d(e, t) {
  (0, i.oY)(e, Element) && (await l(e, t), await c(e, t), await u(e, t))
}