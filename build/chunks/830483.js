/** Chunk was on web.js **/
/** chunk id: 830483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o,
  n: () => i
}), require("./539854.js");
var Chunk473749 = require("./473749.js");

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

function o() {
  let e, t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};

  function r(e) {
    return n.hasOwnProperty(e) ? n[e] : t[e]
  }
  let i = {},
    o = [];
  for (let e in exports) require.hasOwnProperty(module) ? o.length > 0 && (i[module] = o, o = []) : o.push(module);
  let a = {};
  for (let t in require) {
    if (i.hasOwnProperty(exports))
      for (e = 0; module < i[exports].length; module++) {
        let n = i[exports][module];
        a[i[exports][module]] = Chunk473749(require)
      }
    a[exports] = Chunk473749(exports)
  }
  for (e = 0; module < o.length; module++) a[o[module]] = Chunk473749(o[module]);
  return a
}