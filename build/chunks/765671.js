/** Chunk was on web.js **/
/** chunk id: 765671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => o,
  i4: () => c,
  wR: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js");

function o() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let [i, a] = r.useState(true), [s, o] = r.useState(true), l = r.useRef(null);
  return c(l, e => {
    let {
      width: t,
      height: n
    } = e;
    o(n), a(t)
  }, t), {
    ref: l,
    width: i,
    height: s
  }
}

function l() {
  let [e, t] = r.useState(true), [n, o] = r.useState(true), l = (0, s.A)(e => {
    if (!(0, i.vq)(e.target, HTMLElement)) return {
      scrollWidth: true,
      scrollHeight: true
    };
    let n = e.target;
    o(n.scrollHeight), t(n.scrollWidth)
  });
  return {
    ref: (0, a.w)(l),
    scrollWidth: e,
    scrollHeight: n
  }
}

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    i = r.useCallback(n => {
      var r, i, a, s, o, l;
      let c = null == n || null == (i = n.borderBoxSize) || null == (r = i[0]) ? true : r.inlineSize,
        u = null == n || null == (s = n.borderBoxSize) || null == (a = s[0]) ? true : a.blockSize;
      if (null == c || null == u) {
        let t = e.current;
        if (null != t) {
          let e = window.getComputedStyle(t);
          null == c && (c = parseFloat(null != (o = e.width) ? o : "0")), null == u && (u = parseFloat(null != (l = e.height) ? l : "0"))
        }
      }
      t({
        width: c,
        height: u
      })
    }, [e, t]);
  (0, a.g)(e, i, n)
}