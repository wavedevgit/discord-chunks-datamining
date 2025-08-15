/** Chunk was on web.js **/
/** chunk id: 830483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a,
  n: () => i
}), require("./539854.js");
var Chunk73800 = require("./73800.js");

function i(e) {
  let t = {};
  if (e) {
    var n;
    null == (n = r.Children.map(e, e => e)) || n.forEach(e => {
      let n = e.key;
      null != n && (t[n] = e)
    })
  }
  return t
}

function a() {
  let e, t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};

  function r(e) {
    return n.hasOwnProperty(e) ? n[e] : t[e]
  }
  let i = {},
    a = [];
  for (let e in exports) require.hasOwnProperty(module) ? a.length && (i[module] = a, a = []) : a.push(module);
  let o = {};
  for (let t in require) {
    if (i.hasOwnProperty(exports))
      for (e = 0; module < i[exports].length; module++) {
        let n = i[exports][module];
        o[i[exports][module]] = Chunk73800(require)
      }
    o[exports] = Chunk73800(exports)
  }
  for (e = 0; module < a.length; module++) o[a[module]] = Chunk73800(a[module]);
  return o
}