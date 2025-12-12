/** Chunk was on web.js **/
/** chunk id: 69771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => f
});
var Chunk920154 = require("./920154.js"),
  Chunk477232 = require("./477232.js"),
  Chunk297808 = require("./297808.js"),
  Chunk473749 = require("./473749.js");
let s = false,
  l = 0;

function c() {
  s = true, setTimeout(() => {
    s = false
  }, 50)
}

function u(e) {
  "touch" === e.pointerType && c()
}

function d() {
  if ("undefined" != typeof document) return 0 === l && "undefined" != typeof PointerEvent && document.addEventListener("pointerup", u), l++, () => {
    --l > 0 || "undefined" != typeof PointerEvent && document.removeEventListener("pointerup", u)
  }
}

function f(e) {
  let {
    onHoverStart: t,
    onHoverChange: n,
    onHoverEnd: l,
    isDisabled: c
  } = e, [u, f] = (0, o.useState)(false), p = (0, o.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, o.useEffect)(d, []);
  let {
    addGlobalListener: _,
    removeAllGlobalListeners: m
  } = (0, r.x)(), {
    hoverProps: h,
    triggerHoverEnd: g
  } = (0, o.useMemo)(() => {
    let e = (e, o) => {
        if (p.pointerType = o, c || "touch" === o || p.isHovered || !e.currentTarget.contains(e.target)) return;
        p.isHovered = true;
        let s = e.currentTarget;
        p.target = s, _((0, i.r3)(e.target), "pointerover", e => {
          p.isHovered && p.target && !(0, a.bE)(p.target, e.target) && r(e, e.pointerType)
        }, {
          capture: true
        }), t && t({
          type: "hoverstart",
          target: s,
          pointerType: o
        }), n && n(true), f(true)
      },
      r = (e, t) => {
        let r = p.target;
        p.pointerType = "", p.target = null, "touch" !== t && p.isHovered && r && (p.isHovered = false, m(), l && l({
          type: "hoverend",
          target: r,
          pointerType: t
        }), n && n(false), f(false))
      },
      o = {};
    return "undefined" != typeof PointerEvent && (o.onPointerEnter = t => {
      s && "mouse" === t.pointerType || e(t, t.pointerType)
    }, o.onPointerLeave = e => {
      !c && e.currentTarget.contains(e.target) && r(e, e.pointerType)
    }), {
      hoverProps: o,
      triggerHoverEnd: r
    }
  }, [t, n, l, c, p, _, m]);
  return (0, o.useEffect)(() => {
    c && g({
      currentTarget: p.target
    }, p.pointerType)
  }, [c]), {
    hoverProps: h,
    isHovered: u
  }
}