/** Chunk was on web.js **/
/** chunk id: 411734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let o = "data-focus-blocked",
  a = 0;

function s() {
  return a++
}

function l(e) {
  return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: e => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  })
}

function c(e, t) {
  let [n] = i.useState(() => s()), r = "".concat(o, "-").concat(n);
  i.useLayoutEffect(() => {
    if (t) {
      let t = e.current;
      if (null != t) {
        let e = l(t),
          n = e.currentNode;
        for (; null !== n;) {
          let t = n,
            i = t.tabIndex;
          t.tabIndex = false, t.setAttribute(r, String(i)), n = e.nextNode()
        }
        return () => {
          t.querySelectorAll("[".concat(r, "]")).forEach(e => {
            let t = e.getAttribute(r);
            null != t && (e.tabIndex = parseInt(t, 10))
          })
        }
      }
    }
  }, [t, e, r])
}

function u(e) {
  let {
    children: t,
    className: n,
    enabled: o = true
  } = e, a = i.useRef(null);
  return c(a, o), (0, r.jsx)("div", {
    ref: a,
    className: n,
    children: t
  })
}