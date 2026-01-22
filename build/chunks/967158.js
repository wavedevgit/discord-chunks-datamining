/** Chunk was on web.js **/
/** chunk id: 967158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => f
});
var Chunk114099 = require("./114099.js"),
  Chunk297987 = require("./297987.js"),
  Chunk241827 = require("./241827.js"),
  Chunk64700 = require("./64700.js");
let o = false,
  l = 0;

function c() {
  o = true, setTimeout(() => {
    o = false
  }, 50)
}

function u(e) {
  "touch" === e.pointerType && c()
}

function d() {
  if ("u" > typeof document) return 0 === l && "u" > typeof PointerEvent && document.addEventListener("pointerup", u), l++, () => {
    !(--l > 0) && "u" > typeof PointerEvent && document.removeEventListener("pointerup", u)
  }
}

function f(e) {
  let {
    onHoverStart: t,
    onHoverChange: n,
    onHoverEnd: l,
    isDisabled: c
  } = e, [u, f] = (0, s.useState)(false), p = (0, s.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, s.useEffect)(d, []);
  let {
    addGlobalListener: _,
    removeAllGlobalListeners: h
  } = (0, r.A)(), {
    hoverProps: m,
    triggerHoverEnd: g
  } = (0, s.useMemo)(() => {
    let e = (e, s) => {
        if (p.pointerType = s, c || "touch" === s || p.isHovered || !e.currentTarget.contains(e.target)) return;
        p.isHovered = true;
        let o = e.currentTarget;
        p.target = o, _((0, i.TW)(e.target), "pointerover", e => {
          p.isHovered && p.target && !(0, a.sD)(p.target, e.target) && r(e, e.pointerType)
        }, {
          capture: true
        }), t && t({
          type: "hoverstart",
          target: o,
          pointerType: s
        }), n && n(true), f(true)
      },
      r = (e, t) => {
        let r = p.target;
        p.pointerType = "", p.target = null, "touch" !== t && p.isHovered && r && (p.isHovered = false, h(), l && l({
          type: "hoverend",
          target: r,
          pointerType: t
        }), n && n(false), f(false))
      },
      s = {};
    return "u" > typeof PointerEvent && (s.onPointerEnter = t => {
      o && "mouse" === t.pointerType || e(t, t.pointerType)
    }, s.onPointerLeave = e => {
      !c && e.currentTarget.contains(e.target) && r(e, e.pointerType)
    }), {
      hoverProps: s,
      triggerHoverEnd: r
    }
  }, [t, n, l, c, p, _, h]);
  return (0, s.useEffect)(() => {
    c && g({
      currentTarget: p.target
    }, p.pointerType)
  }, [c]), {
    hoverProps: m,
    isHovered: u
  }
}