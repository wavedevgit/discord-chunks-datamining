/** Chunk was on web.js **/
/** chunk id: 459613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => A
});
var Chunk26256 = require("./26256.js"),
  Chunk786781 = require("./786781.js"),
  Chunk784534 = require("./784534.js"),
  Chunk597600 = require("./597600.js"),
  Chunk375339 = require("./375339.js"),
  Chunk750215 = require("./750215.js"),
  Chunk506364 = require("./506364.js"),
  Chunk125547 = require("./125547.js"),
  Chunk294579 = require("./294579.js"),
  Chunk101741 = require("./101741.js"),
  Chunk571670 = require("./571670.js"),
  Chunk253231 = require("./253231.js"),
  Chunk284298 = require("./284298.js"),
  Chunk623261 = require("./623261.js"),
  Chunk87624 = require("./87624.js"),
  Chunk133999 = require("./133999.js"),
  Chunk945353 = require("./945353.js"),
  Chunk603113 = require("./603113.js"),
  Chunk647438 = require("./647438.js");

function v(e) {
  let t = (0, O.useContext)(i.O);
  if (t) {
    let {
      register: n,
      ...r
    } = t;
    e = (0, c.d)(r, e), n()
  }
  return (0, u.l)(t, e.ref), e
}
var I = new WeakMap;
class T {
  continuePropagation() {
    (0, Chunk750215._)(this, I, false)
  }
  get shouldStopPropagation() {
    return (0, Chunk597600._)(this, I)
  }
  constructor(e, t, n, r) {
    var i;
    (0, s._)(this, I, {
      writable: true,
      value: true
    }), (0, l._)(this, I, true);
    let a = null != (i = null == r ? true : r.target) ? i : n.currentTarget,
      o = null == a ? true : a.getBoundingClientRect(),
      c, u = 0,
      d, f = null;
    null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), o && (null != d && null != f ? (c = d - o.left, u = f - o.top) : (c = o.width / 2, u = o.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u
  }
}
let S = Symbol("linkClicked");

function A(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: i,
    onPressEnd: o,
    onPressUp: s,
    isDisabled: l,
    isPressed: u,
    preventFocusOnPress: I,
    shouldCancelOnPointerExit: A,
    allowTextSelectionOnPress: x,
    ref: L,
    ...M
  } = v(e), [U, G] = (0, O.useState)(false), B = (0, O.useRef)({
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
    addGlobalListener: Z,
    removeAllGlobalListeners: F
  } = (0, d.x)(), V = (0, f.i)((e, t) => {
    let r = B.current;
    if (l || r.didFirePressStart) returnfalse;
    let a = true;
    if (r.isTriggeringEvent = true, i) {
      let n = new T("pressstart", t, e);
      i(n), a = n.shouldStopPropagation
    }
    return n && n(true), r.isTriggeringEvent = false, r.didFirePressStart = true, G(true), a
  }), H = (0, f.i)((e, r, i = true) => {
    let a = B.current;
    if (!a.didFirePressStart) returnfalse;
    a.didFirePressStart = false, a.isTriggeringEvent = true;
    let s = true;
    if (o) {
      let t = new T("pressend", r, e);
      o(t), s = t.shouldStopPropagation
    }
    if (n && n(false), G(false), t && i && !l) {
      let n = new T("press", r, e);
      t(n), s && (s = n.shouldStopPropagation)
    }
    return a.isTriggeringEvent = false, s
  }), Y = (0, f.i)((e, t) => {
    let n = B.current;
    if (l) returnfalse;
    if (s) {
      n.isTriggeringEvent = true;
      let r = new T("pressup", t, e);
      return s(r), n.isTriggeringEvent = false, r.shouldStopPropagation
    }
    returntrue
  }), W = (0, f.i)(e => {
    let t = B.current;
    if (t.isPressed && t.target) {
      for (let n of (t.didFirePressStart && null != t.pointerType && H(D(t.target, e), t.pointerType, false), t.isPressed = false, t.isOverTarget = false, t.activePointerId = null, t.pointerType = null, F(), x || (0, r.A)(t.target), t.disposables)) n();
      t.disposables = []
    }
  }), K = (0, f.i)(e => {
    A && W(e)
  }), z = (0, O.useMemo)(() => {
    let e = B.current,
      t = {
        onKeyDown(t) {
          if (N(t.nativeEvent, t.currentTarget) && (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) {
            var r;
            k((0, _.NI)(t.nativeEvent), t.key) && t.preventDefault();
            let i = true;
            if (!e.isPressed && !t.repeat) {
              e.target = t.currentTarget, e.isPressed = true, e.pointerType = "keyboard", i = V(t, "keyboard");
              let r = t.currentTarget,
                a = t => {
                  N(t, r) && !t.repeat && (0, _.bE)(r, (0, _.NI)(t)) && e.target && Y(D(e.target, t), "keyboard")
                };
              Z((0, p.r3)(t.currentTarget), "keyup", (0, h.t)(a, n), true)
            }
            i && t.stopPropagation(), t.metaKey && (0, m.V5)() && (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent))
          } else "Meta" === t.key && (e.metaKeyEvents = new Map)
        },
        onClick(t) {
          if ((!t || (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !g.nG.isOpening) {
            let n = true;
            if (l && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, E.Z)(t.nativeEvent))) {
              let e = V(t, "virtual"),
                r = Y(t, "virtual"),
                i = H(t, "virtual");
              n = e && r && i
            } else if (e.isPressed && "keyboard" !== e.pointerType) {
              let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
              n = H(D(t.currentTarget, t), r, true), e.isOverTarget = false, W(t)
            }
            e.ignoreEmulatedMouseEvents = false, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        var n, r, i;
        if (e.isPressed && e.target && N(t, e.target)) {
          k((0, _.NI)(t), t.key) && t.preventDefault();
          let n = (0, _.NI)(t);
          H(D(e.target, t), "keyboard", (0, _.bE)(e.target, (0, _.NI)(t))), F(), "Enter" !== t.key && C(e.target) && (0, _.bE)(e.target, n) && !t[S] && (t[S] = true, (0, g.nG)(e.target, t, false)), e.isPressed = false, null == (r = e.metaKeyEvents) || r.delete(t.key)
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
        let a = true;
        if (!e.isPressed) {
          e.isPressed = true, e.isOverTarget = true, e.activePointerId = t.pointerId, e.target = t.currentTarget, x || (0, r.l)(e.target), a = V(t, e.pointerType);
          let o = (0, _.NI)(t.nativeEvent);
          "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), Z((0, p.r3)(t.currentTarget), "pointerup", n, false), Z((0, p.r3)(t.currentTarget), "pointercancel", i, false)
        }
        a && t.stopPropagation()
      }, t.onMouseDown = t => {
        if ((0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && 0 === t.button) {
          if (I) {
            let n = (0, a.WZ)(t.target);
            n && e.disposables.push(n)
          }
          t.stopPropagation()
        }
      }, t.onPointerUp = t => {
        (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && Y(t, e.pointerType || t.pointerType)
      }, t.onPointerEnter = t => {
        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = true, V(D(e.target, t), e.pointerType))
      }, t.onPointerLeave = t => {
        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = false, H(D(e.target, t), e.pointerType, false), K(t))
      };
      let n = t => {
          if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
            if ((0, _.bE)(e.target, (0, _.NI)(t)) && null != e.pointerType) {
              let n = false,
                r = setTimeout(() => {
                  e.isPressed && e.target instanceof HTMLElement && (n ? W(t) : ((0, b.A)(e.target), e.target.click()))
                }, 80);
              Z(t.currentTarget, "click", () => n = true, true), e.disposables.push(() => clearTimeout(r))
            } else W(t);
            e.isOverTarget = false
          }
        },
        i = e => {
          W(e)
        };
      t.onDragStart = e => {
        (0, _.bE)(e.currentTarget, (0, _.NI)(e.nativeEvent)) && W(e)
      }
    } else {
      t.onMouseDown = t => {
        if (0 === t.button && (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) {
          if (e.ignoreEmulatedMouseEvents) return void t.stopPropagation();
          if (e.isPressed = true, e.isOverTarget = true, e.target = t.currentTarget, e.pointerType = (0, E.Z)(t.nativeEvent) ? "virtual" : "mouse", (0, y.flushSync)(() => V(t, e.pointerType)) && t.stopPropagation(), I) {
            let n = (0, a.WZ)(t.target);
            n && e.disposables.push(n)
          }
          Z((0, p.r3)(t.currentTarget), "mouseup", n, false)
        }
      }, t.onMouseEnter = t => {
        if (!(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
        let n = true;
        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = true, n = V(t, e.pointerType)), n && t.stopPropagation()
      }, t.onMouseLeave = t => {
        if (!(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
        let n = true;
        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = false, n = H(t, e.pointerType, false), K(t)), n && t.stopPropagation()
      }, t.onMouseUp = t => {
        (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || Y(t, e.pointerType || "mouse"))
      };
      let n = t => {
        if (0 === t.button) {
          if (e.ignoreEmulatedMouseEvents) {
            e.ignoreEmulatedMouseEvents = false;
            return
          }
          e.target && e.target.contains(t.target) && null != e.pointerType || W(t), e.isOverTarget = false
        }
      };
      t.onTouchStart = t => {
        if (!(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
        let n = R(t.nativeEvent);
        n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = true, e.isOverTarget = true, e.isPressed = true, e.target = t.currentTarget, e.pointerType = "touch", x || (0, r.l)(e.target), V(w(e.target, t), e.pointerType) && t.stopPropagation(), Z((0, p.kR)(t.currentTarget), "scroll", i, true))
      }, t.onTouchMove = t => {
        if (!(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
        if (!e.isPressed) return void t.stopPropagation();
        let n = P(t.nativeEvent, e.activePointerId),
          r = true;
        n && j(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = true, r = V(w(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = false, r = H(w(e.target, t), e.pointerType, false), K(w(e.target, t))), r && t.stopPropagation()
      }, t.onTouchEnd = t => {
        if (!(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
        if (!e.isPressed) return void t.stopPropagation();
        let n = P(t.nativeEvent, e.activePointerId),
          i = true;
        n && j(n, t.currentTarget) && null != e.pointerType ? (Y(w(e.target, t), e.pointerType), i = H(w(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (i = H(w(e.target, t), e.pointerType, false)), i && t.stopPropagation(), e.isPressed = false, e.activePointerId = null, e.isOverTarget = false, e.ignoreEmulatedMouseEvents = true, e.target && !x && (0, r.A)(e.target), F()
      }, t.onTouchCancel = t => {
        (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && (t.stopPropagation(), e.isPressed && W(w(e.target, t)))
      };
      let i = t => {
        e.isPressed && (0, _.bE)((0, _.NI)(t), e.target) && W({
          currentTarget: e.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        })
      };
      t.onDragStart = e => {
        (0, _.bE)(e.currentTarget, (0, _.NI)(e.nativeEvent)) && W(e)
      }
    }
    return t
  }, [Z, l, I, F, x, W, K, H, V, Y]);
  return (0, O.useEffect)(() => {
    let e = B.current;
    return () => {
      var t;
      for (let n of (x || (0, r.A)(null != (t = e.target) ? t : true), e.disposables)) n();
      e.disposables = []
    }
  }, [x]), {
    isPressed: u || U,
    pressProps: (0, c.d)(M, z)
  }
}

function C(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function N(e, t) {
  let {
    key: n,
    code: r
  } = e, i = t, a = i.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(i instanceof(0, p.kR)(i).HTMLInputElement && !G(i, n) || i instanceof(0, p.kR)(i).HTMLTextAreaElement || i.isContentEditable) && !(("link" === a || !a && C(i)) && "Enter" !== n)
}

function R(e) {
  let {
    targetTouches: t
  } = e;
  return t.length > 0 ? t[0] : null
}

function P(e, t) {
  let n = e.changedTouches;
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    if (r.identifier === t) return r
  }
  return null
}

function w(e, t) {
  let n = 0,
    r = 0;
  return t.targetTouches && 1 === t.targetTouches.length && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  }
}

function D(e, t) {
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

function x(e) {
  let t = 0,
    n = 0;
  return true !== e.width ? t = e.width / 2 : true !== e.radiusX && (t = e.radiusX), true !== e.height ? n = e.height / 2 : true !== e.radiusY && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  }
}

function L(e, t) {
  return !(e.left > t.right) && !(t.left > e.right) && !(e.top > t.bottom) && !(t.top > e.bottom)
}

function j(e, t) {
  return L(t.getBoundingClientRect(), x(e))
}

function M(e) {
  return !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !C(e))
}

function k(e, t) {
  return e instanceof HTMLInputElement ? !G(e, t) : M(e)
}
let U = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function G(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : U.has(e.type)
}