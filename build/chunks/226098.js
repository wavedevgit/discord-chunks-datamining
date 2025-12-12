/** Chunk was on web.js **/
/** chunk id: 226098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => A
});
var Chunk990415 = require("./990415.js"),
  Chunk603450 = require("./603450.js"),
  Chunk902462 = require("./902462.js"),
  Chunk597600 = require("./597600.js"),
  Chunk375339 = require("./375339.js"),
  Chunk750215 = require("./750215.js"),
  Chunk158821 = require("./158821.js"),
  Chunk741433 = require("./741433.js"),
  Chunk920154 = require("./920154.js"),
  Chunk484948 = require("./484948.js"),
  Chunk297808 = require("./297808.js"),
  Chunk477232 = require("./477232.js"),
  Chunk929767 = require("./929767.js"),
  Chunk21814 = require("./21814.js"),
  Chunk601339 = require("./601339.js"),
  Chunk383669 = require("./383669.js"),
  Chunk928276 = require("./928276.js");
require("./24156.js");
var Chunk473749 = require("./473749.js");

function O(e) {
  let t = (0, y.useContext)(o.O);
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
class S {
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
    let o = null != (i = null == r ? true : r.target) ? i : n.currentTarget,
      a = null == o ? true : o.getBoundingClientRect(),
      c, u = 0,
      d, f = null;
    null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), a && (null != d && null != f ? (c = d - a.left, u = f - a.top) : (c = a.width / 2, u = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u
  }
}
let I = Symbol("linkClicked"),
  T = "react-aria-pressable-style",
  C = "data-react-aria-pressable";

function A(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: o,
    onPressEnd: a,
    onPressUp: s,
    onClick: l,
    isDisabled: u,
    isPressed: v,
    preventFocusOnPress: A,
    shouldCancelOnPointerExit: w,
    allowTextSelectionOnPress: x,
    ref: L,
    ...j
  } = O(e), [M, k] = (0, y.useState)(false), U = (0, y.useRef)({
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
    removeAllGlobalListeners: Z
  } = (0, d.x)(), F = (0, f.i)((e, t) => {
    let r = U.current;
    if (u || r.didFirePressStart) returnfalse;
    let i = true;
    if (r.isTriggeringEvent = true, o) {
      let n = new S("pressstart", t, e);
      o(n), i = n.shouldStopPropagation
    }
    return n && n(true), r.isTriggeringEvent = false, r.didFirePressStart = true, k(true), i
  }), B = (0, f.i)((e, r, i = true) => {
    let o = U.current;
    if (!o.didFirePressStart) returnfalse;
    o.didFirePressStart = false, o.isTriggeringEvent = true;
    let s = true;
    if (a) {
      let t = new S("pressend", r, e);
      a(t), s = t.shouldStopPropagation
    }
    if (n && n(false), k(false), t && i && !u) {
      let n = new S("press", r, e);
      t(n), s && (s = n.shouldStopPropagation)
    }
    return o.isTriggeringEvent = false, s
  }), V = (0, f.i)((e, t) => {
    let n = U.current;
    if (u) returnfalse;
    if (s) {
      n.isTriggeringEvent = true;
      let r = new S("pressup", t, e);
      return s(r), n.isTriggeringEvent = false, r.shouldStopPropagation
    }
    returntrue
  }), H = (0, f.i)(e => {
    let t = U.current;
    if (t.isPressed && t.target) {
      for (let n of (t.didFirePressStart && null != t.pointerType && B(R(t.target, e), t.pointerType, false), t.isPressed = false, t.isOverTarget = false, t.activePointerId = null, t.pointerType = null, Z(), x || (0, i.A)(t.target), t.disposables)) n();
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
          if (P(t.nativeEvent, t.currentTarget) && (0, p.bE)(t.currentTarget, (0, p.NI)(t.nativeEvent))) {
            var r;
            D((0, p.NI)(t.nativeEvent), t.key) && t.preventDefault();
            let i = true;
            if (!e.isPressed && !t.repeat) {
              e.target = t.currentTarget, e.isPressed = true, e.pointerType = "keyboard", i = F(t, "keyboard");
              let r = t.currentTarget,
                o = t => {
                  P(t, r) && !t.repeat && (0, p.bE)(r, (0, p.NI)(t)) && e.target && V(R(e.target, t), "keyboard")
                };
              G((0, _.r3)(t.currentTarget), "keyup", (0, m.t)(o, n), true)
            }
            i && t.stopPropagation(), t.metaKey && (0, h.V5)() && (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent))
          } else "Meta" === t.key && (e.metaKeyEvents = new Map)
        },
        onClick(t) {
          if ((!t || (0, p.bE)(t.currentTarget, (0, p.NI)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !g.nG.isOpening) {
            let n = true;
            if (u && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, E.Z)(t.nativeEvent))) {
              let e = F(t, "virtual"),
                r = V(t, "virtual"),
                i = B(t, "virtual");
              W(t), n = e && r && i
            } else if (e.isPressed && "keyboard" !== e.pointerType) {
              let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                i = V(R(t.currentTarget, t), r),
                o = B(R(t.currentTarget, t), r, true);
              n = i && o, e.isOverTarget = false, W(t), H(t)
            }
            e.ignoreEmulatedMouseEvents = false, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        var n, r, i;
        if (e.isPressed && e.target && P(t, e.target)) {
          D((0, p.NI)(t), t.key) && t.preventDefault();
          let n = (0, p.NI)(t),
            i = (0, p.bE)(e.target, (0, p.NI)(t));
          B(R(e.target, t), "keyboard", i), i && K(t, e.target), Z(), "Enter" !== t.key && N(e.target) && (0, p.bE)(e.target, n) && !t[I] && (t[I] = true, (0, g.nG)(e.target, t, false)), e.isPressed = false, null == (r = e.metaKeyEvents) || r.delete(t.key)
        } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? true : n.size)) {
          let t = e.metaKeyEvents;
          for (let n of (e.metaKeyEvents = true, t.values())) null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", n))
        }
      };
    if ("undefined" != typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !(0, p.bE)(t.currentTarget, (0, p.NI)(t.nativeEvent))) return;
        if ((0, E.c)(t.nativeEvent)) {
          e.pointerType = "virtual";
          return
        }
        e.pointerType = t.pointerType;
        let r = true;
        if (!e.isPressed) {
          e.isPressed = true, e.isOverTarget = true, e.activePointerId = t.pointerId, e.target = t.currentTarget, x || (0, i.l)(e.target), r = F(t, e.pointerType);
          let a = (0, p.NI)(t.nativeEvent);
          "releasePointerCapture" in a && a.releasePointerCapture(t.pointerId), G((0, _.r3)(t.currentTarget), "pointerup", n, false), G((0, _.r3)(t.currentTarget), "pointercancel", o, false)
        }
        r && t.stopPropagation()
      }, t.onMouseDown = t => {
        if ((0, p.bE)(t.currentTarget, (0, p.NI)(t.nativeEvent)) && 0 === t.button) {
          if (A) {
            let n = (0, r.WZ)(t.target);
            n && e.disposables.push(n)
          }
          t.stopPropagation()
        }
      }, t.onPointerUp = t => {
        (0, p.bE)(t.currentTarget, (0, p.NI)(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || V(t, e.pointerType || t.pointerType))
      }, t.onPointerEnter = t => {
        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = true, F(R(e.target, t), e.pointerType))
      }, t.onPointerLeave = t => {
        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = false, B(R(e.target, t), e.pointerType, false), Y(t))
      };
      let n = t => {
          if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
            if ((0, p.bE)(e.target, (0, p.NI)(t)) && null != e.pointerType) {
              let n = false,
                r = setTimeout(() => {
                  e.isPressed && e.target instanceof HTMLElement && (n ? H(t) : ((0, b.A)(e.target), e.target.click()))
                }, 80);
              G(t.currentTarget, "click", () => n = true, true), e.disposables.push(() => clearTimeout(r))
            } else H(t);
            e.isOverTarget = false
          }
        },
        o = e => {
          H(e)
        };
      t.onDragStart = e => {
        (0, p.bE)(e.currentTarget, (0, p.NI)(e.nativeEvent)) && H(e)
      }
    }
    return t
  }, [G, u, A, Z, x, H, Y, B, F, V, W, K]);
  return (0, y.useEffect)(() => {
    if (!L) return;
    let e = (0, _.r3)(L.current);
    if (!e || !e.head || e.getElementById(T)) return;
    let t = e.createElement("style");
    t.id = T, t.textContent = `
@layer {
  [${C}] {
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
    isPressed: v || M,
    pressProps: (0, c.d)(j, z, {
      [C]: true
    })
  }
}

function N(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function P(e, t) {
  let {
    key: n,
    code: r
  } = e, i = t, o = i.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(i instanceof(0, _.kR)(i).HTMLInputElement && !L(i, n) || i instanceof(0, _.kR)(i).HTMLTextAreaElement || i.isContentEditable) && !(("link" === o || !o && N(i)) && "Enter" !== n)
}

function R(e, t) {
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