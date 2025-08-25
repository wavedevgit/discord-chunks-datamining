/** Chunk was on web.js **/
/** chunk id: 1334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => f
});
var Chunk5679 = require("./5679.js"),
  Chunk278769 = require("./278769.js"),
  Chunk2685 = require("./2685.js"),
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
  } = e, [u, f] = (0, a.useState)(false), _ = (0, a.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, a.useEffect)(d, []);
  let {
    addGlobalListener: p,
    removeAllGlobalListeners: h
  } = (0, r.x)(), {
    hoverProps: m,
    triggerHoverEnd: g
  } = (0, a.useMemo)(() => {
    let e = (e, a) => {
        if (_.pointerType = a, c || "touch" === a || _.isHovered || !e.currentTarget.contains(e.target)) return;
        _.isHovered = true;
        let s = e.currentTarget;
        _.target = s, p((0, i.r3)(e.target), "pointerover", e => {
          _.isHovered && _.target && !(0, o.bE)(_.target, e.target) && r(e, e.pointerType)
        }, {
          capture: true
        }), t && t({
          type: "hoverstart",
          target: s,
          pointerType: a
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
      a = {};
    return "undefined" != typeof PointerEvent && (a.onPointerEnter = t => {
      s && "mouse" === t.pointerType || e(t, t.pointerType)
    }, a.onPointerLeave = e => {
      !c && e.currentTarget.contains(e.target) && r(e, e.pointerType)
    }), {
      hoverProps: a,
      triggerHoverEnd: r
    }
  }, [t, n, l, c, _, p, h]);
  return (0, a.useEffect)(() => {
    c && g({
      currentTarget: _.target
    }, _.pointerType)
  }, [c]), {
    hoverProps: m,
    isHovered: u
  }
}