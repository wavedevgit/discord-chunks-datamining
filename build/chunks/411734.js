/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  R: () => u
}), n(47120);
var r = n(200651),
  i = n(192379);
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
          t.tabIndex = -1, t.setAttribute(r, String(i)), n = e.nextNode()
        }
        return () => {
          t.querySelectorAll("[".concat(r, "]")).forEach(e => {
            let t = e.getAttribute(r);
            if (null != t) {
              let n = parseInt(t, 10);
              e.tabIndex = n
            }
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
    enabled: o = !0
  } = e, a = i.useRef(null);
  return c(a, o), (0, r.jsx)("div", {
    ref: a,
    className: n,
    children: t
  })
}