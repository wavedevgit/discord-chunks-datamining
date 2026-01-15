/** Chunk was on web.js **/
/** chunk id: 156748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u,
  y: () => c
});
var Chunk595707 = require("./595707.js"),
  Chunk24156 = require("./24156.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159447 = require("./159447.js"),
  Chunk413565 = require("./413565.js");
let l = (0, Chunk473749.createContext)(null);

function c(e) {
  let t = (0, a.useRef)({});
  return a.createElement(l.Provider, {
    value: t
  }, e.children)
}
let u = (0, Chunk473749.forwardRef)(function(e, t) {
  let {
    name: n,
    isVisible: c = true,
    children: u,
    className: d,
    style: f,
    ...p
  } = e, [_, m] = (0, a.useState)(c ? "visible" : "hidden"), h = (0, a.useContext)(l);
  if (!h) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
  c && "hidden" === _ && m("visible"), t = (0, s.B)(t), (0, o.b)(() => {
    let e = t.current,
      r = h.current,
      a = r[n],
      o = null;
    if (e && c && a) {
      m("visible");
      let t = e.getAnimations(),
        i = a.style.map(([t, n]) => {
          let r = e.style[t];
          if ("translate" === t) {
            let t = a.rect,
              n = e.getBoundingClientRect(),
              r = t.left - (null == n ? true : n.left),
              i = t.top - (null == n ? true : n.top);
            e.style.translate = `${r}px ${i}px`
          } else e.style[t] = n;
          return [t, r]
        });
      for (let n of e.getAnimations()) t.includes(n) || n.cancel();
      o = requestAnimationFrame(() => {
        for (let [t, n] of(o = null, i)) e.style[t] = n
      }), delete r[n]
    } else e && c && !a ? (queueMicrotask(() => (0, i.flushSync)(() => m("entering"))), o = requestAnimationFrame(() => {
      o = null, m("visible")
    })) : e && !c && queueMicrotask(() => {
      r[n] ? (delete r[n], (0, i.flushSync)(() => m("exiting")), Promise.all(e.getAnimations().map(e => e.finished)).then(() => m("hidden")).catch(() => {})) : m("hidden")
    });
    return () => {
      if (null != o && cancelAnimationFrame(o), e && e.isConnected && !e.hasAttribute("data-exiting")) {
        let t = window.getComputedStyle(e);
        if ("none" !== t.transitionProperty) {
          let i = t.transitionProperty.split(/\s*,\s*/);
          r[n] = {
            rect: e.getBoundingClientRect(),
            style: i.map(e => [e, t[e]])
          }
        }
      }
    }
  }, [t, h, n, c]);
  let g = (0, r.aX)({
    children: u,
    className: d,
    style: f,
    values: {
      isEntering: "entering" === _,
      isExiting: "exiting" === _
    }
  });
  return "hidden" === _ ? null : a.createElement("div", {
    ...p,
    ...g,
    ref: t,
    "data-entering": "entering" === _ || true,
    "data-exiting": "exiting" === _ || true
  })
})