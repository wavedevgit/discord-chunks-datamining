/** Chunk was on web.js **/
/** chunk id: 585627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JJ: () => a,
  KG: () => i,
  jo: () => o
}), require("./388685.js");
var Chunk260866 = require("./260866.js");

function i(e, t) {
  return new Promise(n => {
    let i = new IntersectionObserver(e => {
      let t = 0,
        o = null;
      for (let {
          isIntersecting: a,
          intersectionRatio: s,
          target: l
        }
        of e) {
        if (a && 1 === s) {
          i.disconnect();
          let e = l.getAttribute(r.ie);
          if (null != e) return n(e)
        }
        s > t && (t = s, o = l.getAttribute(r.ie))
      }
      i.disconnect(), n(o)
    }, {
      root: e
    });
    for (let e of t) i.observe(e)
  })
}

function o(e, t) {
  return new Promise(n => {
    let i = new IntersectionObserver(e => {
      let t = 0,
        o = null;
      for (let a = e.length - 1; a >= 0; a--) {
        let {
          isIntersecting: s,
          intersectionRatio: l,
          target: c
        } = e[a];
        if (s && 1 === l) {
          i.disconnect();
          let e = c.getAttribute(r.ie);
          if (null != e) return n(e)
        }
        l > t && (t = l, o = c.getAttribute(r.ie))
      }
      i.disconnect(), n(o)
    }, {
      root: e
    });
    for (let e of t) i.observe(e)
  })
}

function a(e, t) {
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