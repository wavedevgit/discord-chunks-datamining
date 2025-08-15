/** Chunk was on web.js **/
/** chunk id: 585627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JJ: () => o,
  KG: () => i,
  jo: () => a
}), require("./388685.js");
var Chunk260866 = require("./260866.js");

function i(e, t) {
  return new Promise(n => {
    let i = new IntersectionObserver(e => {
      let t = 0,
        a = null;
      for (let {
          isIntersecting: o,
          intersectionRatio: s,
          target: l
        }
        of e) {
        if (o && 1 === s) {
          i.disconnect();
          let e = l.getAttribute(r.ie);
          if (null != e) return n(e)
        }
        s > t && (t = s, a = l.getAttribute(r.ie))
      }
      i.disconnect(), n(a)
    }, {
      root: e
    });
    for (let e of t) i.observe(e)
  })
}

function a(e, t) {
  return new Promise(n => {
    let i = new IntersectionObserver(e => {
      let t = 0,
        a = null;
      for (let o = e.length - 1; o >= 0; o--) {
        let {
          isIntersecting: s,
          intersectionRatio: l,
          target: c
        } = e[o];
        if (s && 1 === l) {
          i.disconnect();
          let e = c.getAttribute(r.ie);
          if (null != e) return n(e)
        }
        l > t && (t = l, a = c.getAttribute(r.ie))
      }
      i.disconnect(), n(a)
    }, {
      root: e
    });
    for (let e of t) i.observe(e)
  })
}

function o(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : .5;
  return new Promise(r => {
    let i = new IntersectionObserver(e => {
      let t = e[0];
      i.disconnect(), r(t.intersectionRatio >= n)
    }, {
      root: e
    });
    i.observe(t)
  })
}