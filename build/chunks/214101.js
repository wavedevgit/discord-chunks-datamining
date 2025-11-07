/** Chunk was on 70018 **/
/** chunk id: 214101, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => d
});
var Chunk603113 = require("./603113.js"),
  Chunk647438 = require("./647438.js"),
  Chunk677061 = require("./677061.js"),
  Chunk944625 = require("./944625.js"),
  Chunk782013 = require("./782013.js"),
  Chunk179506 = require("./179506.js");

function d(e, t, n) {
  let {
    isDisabled: d
  } = e, f = (0, i.Me)(), l = (0, i.Me)(), c = (0, s.Av)(), p = (0, r.useRef)(null), x = (0, r.useCallback)(() => {
    p.current = requestAnimationFrame(() => {
      n.current && n.current.setAttribute("hidden", "until-found")
    }), (0, u.flushSync)(() => {
      t.toggle()
    })
  }, [n, t]);
  (0, o.z)(n, "beforematch", x);
  let h = (0, r.useRef)(null);
  return (0, a.b)(() => {
    if (p.current && cancelAnimationFrame(p.current), n.current && !d && !c) {
      let e = n.current;
      null == h.current || "function" != typeof e.getAnimations ? t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")) : (e.setAttribute("hidden", "until-found"), e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px")) : t.isExpanded !== h.current && (t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
        e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")
      }).catch(() => {})) : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), window.getComputedStyle(e).height, e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px"), Promise.all(e.getAnimations().map(e => e.finished)).then(() => e.setAttribute("hidden", "until-found")).catch(() => {}))), h.current = t.isExpanded
    }
  }, [d, n, t.isExpanded, c]), (0, r.useEffect)(() => () => {
    p.current && cancelAnimationFrame(p.current)
  }, []), {
    buttonProps: {
      id: f,
      "aria-expanded": t.isExpanded,
      "aria-controls": l,
      onPress: e => {
        d || "keyboard" === e.pointerType || t.toggle()
      },
      isDisabled: d,
      onPressStart(e) {
        "keyboard" !== e.pointerType || d || t.toggle()
      }
    },
    panelProps: {
      id: l,
      role: "group",
      "aria-labelledby": f,
      "aria-hidden": !t.isExpanded,
      hidden: c || d ? d || !t.isExpanded : true
    }
  }
}