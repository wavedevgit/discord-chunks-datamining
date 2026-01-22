/** Chunk was on web.js **/
/** chunk id: 357710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => c,
  e: () => u
});
var Chunk825913 = require("./825913.js"),
  Chunk340287 = require("./340287.js"),
  Chunk64700 = require("./64700.js"),
  Chunk3388 = require("./3388.js"),
  Chunk533715 = require("./533715.js");
let l = (0, Chunk64700.createContext)(null);

function c(e) {
  let t = (0, a.useRef)({});
  return a.createElement(l.Provider, {
    value: t
  }, e.children)
}
let u = (0, Chunk64700.forwardRef)(function(e, t) {
  let {
    name: n,
    isVisible: c = true,
    children: u,
    className: d,
    style: f,
    ...p
  } = e, [_, h] = (0, a.useState)(c ? "visible" : "hidden"), m = (0, a.useContext)(l);
  if (!m) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
  c && "hidden" === _ && h("visible"), t = (0, o.U)(t), (0, s.N)(() => {
    let e = t.current,
      r = m.current,
      a = r[n],
      s = null;
    if (e && c && a) {
      h("visible");
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
      s = requestAnimationFrame(() => {
        for (let [t, n] of(s = null, i)) e.style[t] = n
      }), delete r[n]
    } else e && c && !a ? (queueMicrotask(() => (0, i.flushSync)(() => h("entering"))), s = requestAnimationFrame(() => {
      s = null, h("visible")
    })) : e && !c && queueMicrotask(() => {
      r[n] ? (delete r[n], (0, i.flushSync)(() => h("exiting")), Promise.all(e.getAnimations().map(e => e.finished)).then(() => h("hidden")).catch(() => {})) : h("hidden")
    });
    return () => {
      if (null != s && cancelAnimationFrame(s), e && e.isConnected && !e.hasAttribute("data-exiting")) {
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
  }, [t, m, n, c]);
  let g = (0, r.Sl)({
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