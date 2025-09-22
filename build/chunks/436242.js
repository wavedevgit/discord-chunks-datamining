/** Chunk was on web.js **/
/** chunk id: 436242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => s
});
let r = new Set(["id"]),
  i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
  a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
  o = /^(data-.*)$/;

function s(e, t = {}) {
  let {
    labelable: n,
    isLink: l,
    propNames: c
  } = t, u = {};
  for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && i.has(t) || l && a.has(t) || (null == c ? true : c.has(t)) || o.test(t)) && (u[t] = e[t]);
  return u
}