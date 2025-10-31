/** Chunk was on web.js **/
/** chunk id: 647199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => C
});
var Chunk398583 = require("./398583.js"),
  Chunk347094 = require("./347094.js"),
  Chunk20502 = require("./20502.js"),
  Chunk597600 = require("./597600.js"),
  Chunk375339 = require("./375339.js"),
  Chunk750215 = require("./750215.js"),
  Chunk43341 = require("./43341.js"),
  Chunk823766 = require("./823766.js"),
  Chunk803872 = require("./803872.js"),
  Chunk794760 = require("./794760.js"),
  Chunk641948 = require("./641948.js"),
  Chunk743581 = require("./743581.js"),
  Chunk690936 = require("./690936.js"),
  Chunk927917 = require("./927917.js"),
  Chunk900197 = require("./900197.js"),
  Chunk863427 = require("./863427.js"),
  Chunk328106 = require("./328106.js");
require("./603113.js");
var Chunk647438 = require("./647438.js");

function O(e) {
  let t = (0, y.useContext)(a.O);
  if (t) {
    let {
      register: n,
      ...r
    } = t;
    e = (0, c.d)(r, e), n()
  }
  return (0, u.l)(t, e.ref), e
}
var v = new WeakMap;
class I {
  continuePropagation() {
    (0, Chunk750215._)(this, v, false)
  }
  get shouldStopPropagation() {
    return (0, Chunk597600._)(this, v)
  }
  constructor(e, t, n, r) {
    var i;
    (0, s._)(this, v, {
      writable: true,
      value: true
    }), (0, l._)(this, v, true);
    let a = null != (i = null == r ? true : r.target) ? i : n.currentTarget,
      o = null == a ? true : a.getBoundingClientRect(),
      c, u = 0,
      d, f = null;
    null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), o && (null != d && null != f ? (c = d - o.left, u = f - o.top) : (c = o.width / 2, u = o.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u
  }
}
let T = Symbol("linkClicked"),
  S = "react-aria-pressable-style",
  A = "data-react-aria-pressable";

function C(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: a,
    onPressEnd: o,
    onPressUp: s,
    onClick: l,
    isDisabled: u,
    isPressed: v,
    preventFocusOnPress: C,
    shouldCancelOnPointerExit: w,
    allowTextSelectionOnPress: x,
    ref: L,
    ...M
  } = O(e), [j, k] = (0, y.useState)(false), U = (0, y.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null,
    disposables: []
  }), {
    addGlobalListener: G,
    removeAllGlobalListeners: B
  } = (0, d.x)(), Z = (0, f.i)((e, t) => {
    let r = U.current;
    if (u || r.didFirePressStart) returnfalse;
    let i = true;
    if (r.isTriggeringEvent = true, a) {
      let n = new I("pressstart", t, e);
      a(n), i = n.shouldStopPropagation
    }
    return n && n(true), r.isTriggeringEvent = false, r.didFirePressStart = true, k(true), i
  }), F = (0, f.i)((e, r, i = true) => {
    let a = U.current;
    if (!a.didFirePressStart) returnfalse;
    a.didFirePressStart = false, a.isTriggeringEvent = true;
    let s = true;
    if (o) {
      let t = new I("pressend", r, e);
      o(t), s = t.shouldStopPropagation
    }
    if (n && n(false), k(false), t && i && !u) {
      let n = new I("press", r, e);
      t(n), s && (s = n.shouldStopPropagation)
    }
    return a.isTriggeringEvent = false, s
  }), V = (0, f.i)((e, t) => {
    let n = U.current;
    if (u) returnfalse;
    if (s) {
      n.isTriggeringEvent = true;
      let r = new I("pressup", t, e);
      return s(r), n.isTriggeringEvent = false, r.shouldStopPropagation
    }
    returntrue
  }), H = (0, f.i)(e => {
    let t = U.current;
    if (t.isPressed && t.target) {
      for (let n of (t.didFirePressStart && null != t.pointerType && F(P(t.target, e), t.pointerType, false), t.isPressed = false, t.isOverTarget = false, t.activePointerId = null, t.pointerType = null, B(), x || (0, i.A)(t.target), t.disposables)) n();
      t.disposables = []
    }
  }), Y = (0, f.i)(e => {
    w && H(e)
  }), W = (0, f.i)(e => {
    u || null == l || l(e)
  }), K = (0, f.i)((e, t) => {
    if (!u && l) {
      let n = new MouseEvent("click", e);
      (0, r.nh)(n, t), l((0, r.yA)(n))
    }
  }), z = (0, y.useMemo)(() => {
    let e = U.current,
      t = {
        onKeyDown(t) {
          if (R(t.nativeEvent, t.currentTarget) && (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) {
            var r;
            D((0, _.NI)(t.nativeEvent), t.key) && t.preventDefault();
            let i = true;
            if (!e.isPressed && !t.repeat) {
              e.target = t.currentTarget, e.isPressed = true, e.pointerType = "keyboard", i = Z(t, "keyboard");
              let r = t.currentTarget,
                a = t => {
                  R(t, r) && !t.repeat && (0, _.bE)(r, (0, _.NI)(t)) && e.target && V(P(e.target, t), "keyboard")
                };
              G((0, p.r3)(t.currentTarget), "keyup", (0, h.t)(a, n), true)
            }
            i && t.stopPropagation(), t.metaKey && (0, m.V5)() && (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent))
          } else "Meta" === t.key && (e.metaKeyEvents = new Map)
        },
        onClick(t) {
          if ((!t || (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !g.nG.isOpening) {
            let n = true;
            if (u && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, E.Z)(t.nativeEvent))) {
              let e = Z(t, "virtual"),
                r = V(t, "virtual"),
                i = F(t, "virtual");
              W(t), n = e && r && i
            } else if (e.isPressed && "keyboard" !== e.pointerType) {
              let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                i = V(P(t.currentTarget, t), r),
                a = F(P(t.currentTarget, t), r, true);
              n = i && a, e.isOverTarget = false, W(t), H(t)
            }
            e.ignoreEmulatedMouseEvents = false, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        var n, r, i;
        if (e.isPressed && e.target && R(t, e.target)) {
          D((0, _.NI)(t), t.key) && t.preventDefault();
          let n = (0, _.NI)(t),
            i = (0, _.bE)(e.target, (0, _.NI)(t));
          F(P(e.target, t), "keyboard", i), i && K(t, e.target), B(), "Enter" !== t.key && N(e.target) && (0, _.bE)(e.target, n) && !t[T] && (t[T] = true, (0, g.nG)(e.target, t, false)), e.isPressed = false, null == (r = e.metaKeyEvents) || r.delete(t.key)
        } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? true : n.size)) {
          let t = e.metaKeyEvents;
          for (let n of (e.metaKeyEvents = true, t.values())) null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", n))
        }
      };
    if ("undefined" != typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
        if ((0, E.c)(t.nativeEvent)) {
          e.pointerType = "virtual";
          return
        }
        e.pointerType = t.pointerType;
        let r = true;
        if (!e.isPressed) {
          e.isPressed = true, e.isOverTarget = true, e.activePointerId = t.pointerId, e.target = t.currentTarget, x || (0, i.l)(e.target), r = Z(t, e.pointerType);
          let o = (0, _.NI)(t.nativeEvent);
          "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), G((0, p.r3)(t.currentTarget), "pointerup", n, false), G((0, p.r3)(t.currentTarget), "pointercancel", a, false)
        }
        r && t.stopPropagation()
      }, t.onMouseDown = t => {
        if ((0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && 0 === t.button) {
          if (C) {
            let n = (0, r.WZ)(t.target);
            n && e.disposables.push(n)
          }
          t.stopPropagation()
        }
      }, t.onPointerUp = t => {
        (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || V(t, e.pointerType || t.pointerType))
      }, t.onPointerEnter = t => {
        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = true, Z(P(e.target, t), e.pointerType))
      }, t.onPointerLeave = t => {
        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = false, F(P(e.target, t), e.pointerType, false), Y(t))
      };
      let n = t => {
          if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
            if ((0, _.bE)(e.target, (0, _.NI)(t)) && null != e.pointerType) {
              let n = false,
                r = setTimeout(() => {
                  e.isPressed && e.target instanceof HTMLElement && (n ? H(t) : ((0, b.A)(e.target), e.target.click()))
                }, 80);
              G(t.currentTarget, "click", () => n = true, true), e.disposables.push(() => clearTimeout(r))
            } else H(t);
            e.isOverTarget = false
          }
        },
        a = e => {
          H(e)
        };
      t.onDragStart = e => {
        (0, _.bE)(e.currentTarget, (0, _.NI)(e.nativeEvent)) && H(e)
      }
    }
    return t
  }, [G, u, C, B, x, H, Y, F, Z, V, W, K]);
  return (0, y.useEffect)(() => {
    if (!L) return;
    let e = (0, p.r3)(L.current);
    if (!e || !e.head || e.getElementById(S)) return;
    let t = e.createElement("style");
    t.id = S, t.textContent = `
@layer {
  [${A}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t)
  }, [L]), (0, y.useEffect)(() => {
    let e = U.current;
    return () => {
      var t;
      for (let n of (x || (0, i.A)(null != (t = e.target) ? t : true), e.disposables)) n();
      e.disposables = []
    }
  }, [x]), {
    isPressed: v || j,
    pressProps: (0, c.d)(M, z, {
      [A]: true
    })
  }
}

function N(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function R(e, t) {
  let {
    key: n,
    code: r
  } = e, i = t, a = i.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(i instanceof(0, p.kR)(i).HTMLInputElement && !L(i, n) || i instanceof(0, p.kR)(i).HTMLTextAreaElement || i.isContentEditable) && !(("link" === a || !a && N(i)) && "Enter" !== n)
}

function P(e, t) {
  let n = t.clientX,
    r = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  }
}

function w(e) {
  return !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !N(e))
}

function D(e, t) {
  return e instanceof HTMLInputElement ? !L(e, t) : w(e)
}
let x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function L(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type)
}