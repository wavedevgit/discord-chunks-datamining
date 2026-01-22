/** Chunk was on web.js **/
/** chunk id: 480960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => a,
  p: () => i
}), require("./321073.js");
var Chunk64700 = require("./64700.js");

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
  for (let e in t) n.hasOwnProperty(e) ? a.length > 0 && (i[e] = a, a = []) : a.push(e);
  let s = {};
  for (let t in n) {
    if (i.hasOwnProperty(t))
      for (e = 0; e < i[t].length; e++) {
        let n = i[t][e];
        s[i[t][e]] = r(n)
      }
    s[t] = r(t)
  }
  for (e = 0; e < a.length; e++) s[a[e]] = r(a[e]);
  return s
}