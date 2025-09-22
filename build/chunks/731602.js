/** Chunk was on web.js **/
/** chunk id: 731602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => f
});
var Chunk294579 = require("./294579.js"),
  Chunk253231 = require("./253231.js"),
  Chunk571670 = require("./571670.js"),
  Chunk647438 = require("./647438.js");
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
  if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", u) : document.addEventListener("touchend", c), l++, () => {
    --l > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", u) : document.removeEventListener("touchend", c))
  }
}

function f(e) {
  let {
    onHoverStart: t,
    onHoverChange: n,
    onHoverEnd: l,
    isDisabled: c
  } = e, [u, f] = (0, o.useState)(false), _ = (0, o.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, o.useEffect)(d, []);
  let {
    addGlobalListener: p,
    removeAllGlobalListeners: h
  } = (0, r.x)(), {
    hoverProps: m,
    triggerHoverEnd: g
  } = (0, o.useMemo)(() => {
    let e = (e, o) => {
        if (_.pointerType = o, c || "touch" === o || _.isHovered || !e.currentTarget.contains(e.target)) return;
        _.isHovered = true;
        let s = e.currentTarget;
        _.target = s, p((0, i.r3)(e.target), "pointerover", e => {
          _.isHovered && _.target && !(0, a.bE)(_.target, e.target) && r(e, e.pointerType)
        }, {
          capture: true
        }), t && t({
          type: "hoverstart",
          target: s,
          pointerType: o
        }), n && n(true), f(true)
      },
      r = (e, t) => {
        let r = _.target;
        _.pointerType = "", _.target = null, "touch" !== t && _.isHovered && r && (_.isHovered = false, h(), l && l({
          type: "hoverend",
          target: r,
          pointerType: t
        }), n && n(false), f(false))
      },
      o = {};
    return "undefined" != typeof PointerEvent ? (o.onPointerEnter = t => {
      s && "mouse" === t.pointerType || e(t, t.pointerType)
    }, o.onPointerLeave = e => {
      !c && e.currentTarget.contains(e.target) && r(e, e.pointerType)
    }) : (o.onTouchStart = () => {
      _.ignoreEmulatedMouseEvents = true
    }, o.onMouseEnter = t => {
      _.ignoreEmulatedMouseEvents || s || e(t, "mouse"), _.ignoreEmulatedMouseEvents = false
    }, o.onMouseLeave = e => {
      !c && e.currentTarget.contains(e.target) && r(e, "mouse")
    }), {
      hoverProps: o,
      triggerHoverEnd: r
    }
  }, [t, n, l, c, _, p, h]);
  return (0, o.useEffect)(() => {
    c && g({
      currentTarget: _.target
    }, _.pointerType)
  }, [c]), {
    hoverProps: m,
    isHovered: u
  }
}