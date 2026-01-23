/** Chunk was on web.js **/
/** chunk id: 8321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => C
});
var Chunk89494 = require("./89494.js"),
  Chunk907596 = require("./907596.js"),
  Chunk726796 = require("./726796.js"),
  Chunk139280 = require("./139280.js"),
  Chunk170372 = require("./170372.js"),
  Chunk499028 = require("./499028.js"),
  Chunk803082 = require("./803082.js"),
  Chunk434067 = require("./434067.js"),
  Chunk114099 = require("./114099.js"),
  Chunk959462 = require("./959462.js"),
  Chunk241827 = require("./241827.js"),
  Chunk297987 = require("./297987.js"),
  Chunk260431 = require("./260431.js"),
  Chunk408713 = require("./408713.js"),
  Chunk132716 = require("./132716.js"),
  Chunk23975 = require("./23975.js"),
  Chunk401705 = require("./401705.js");
require("./340287.js");
var Chunk64700 = require("./64700.js");

function O(e) {
  let t = (0, b.useContext)(a.F);
  if (t) {
    let {
      register: n,
      ...r
    } = t;
    e = (0, c.v)(r, e), n()
  }
  return (0, u.w)(t, e.ref), e
}
var v = new WeakMap;
class A {
  continuePropagation() {
    (0, l._)(this, v, false)
  }
  get shouldStopPropagation() {
    return (0, s._)(this, v)
  }
  constructor(e, t, n, r) {
    var i;
    (0, o._)(this, v, {
      writable: true,
      value: true
    }), (0, l._)(this, v, true);
    let a = null != (i = null == r ? true : r.target) ? i : n.currentTarget;
    const s = null == a ? true : a.getBoundingClientRect();
    let c, u = 0,
      d, f = null;
    null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), s && (null != d && null != f ? (c = d - s.left, u = f - s.top) : (c = s.width / 2, u = s.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u
  }
}
let I = Symbol("linkClicked"),
  S = "react-aria-pressable-style",
  T = "data-react-aria-pressable";

function C(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: o,
    onClick: l,
    isDisabled: u,
    isPressed: v,
    preventFocusOnPress: C,
    shouldCancelOnPointerExit: P,
    allowTextSelectionOnPress: x,
    ref: L,
    ...j
  } = O(e), [M, k] = (0, b.useState)(false), U = (0, b.useRef)({
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
    removeAllGlobalListeners: V
  } = (0, d.A)(), F = (0, f.J)((e, t) => {
    let r = U.current;
    if (u || r.didFirePressStart) returnfalse;
    let i = true;
    if (r.isTriggeringEvent = true, a) {
      let n = new A("pressstart", t, e);
      a(n), i = n.shouldStopPropagation
    }
    return n && n(true), r.isTriggeringEvent = false, r.didFirePressStart = true, k(true), i
  }), B = (0, f.J)((e, r, i = true) => {
    let a = U.current;
    if (!a.didFirePressStart) returnfalse;
    a.didFirePressStart = false, a.isTriggeringEvent = true;
    let o = true;
    if (s) {
      let t = new A("pressend", r, e);
      s(t), o = t.shouldStopPropagation
    }
    if (n && n(false), k(false), t && i && !u) {
      let n = new A("press", r, e);
      t(n), o && (o = n.shouldStopPropagation)
    }
    return a.isTriggeringEvent = false, o
  }), H = (0, f.J)((e, t) => {
    let n = U.current;
    if (u) returnfalse;
    if (o) {
      n.isTriggeringEvent = true;
      let r = new A("pressup", t, e);
      return o(r), n.isTriggeringEvent = false, r.shouldStopPropagation
    }
    returntrue
  }), Y = (0, f.J)(e => {
    let t = U.current;
    if (t.isPressed && t.target) {
      for (let n of (t.didFirePressStart && null != t.pointerType && B(R(t.target, e), t.pointerType, false), t.isPressed = false, t.isOverTarget = false, t.activePointerId = null, t.pointerType = null, V(), x || (0, i.E)(t.target), t.disposables)) n();
      t.disposables = []
    }
  }), W = (0, f.J)(e => {
    P && Y(e)
  }), K = (0, f.J)(e => {
    u || null == l || l(e)
  }), z = (0, f.J)((e, t) => {
    if (!u && l) {
      let n = new MouseEvent("click", e);
      (0, r.o1)(n, t), l((0, r.eg)(n))
    }
  }), q = (0, b.useMemo)(() => {
    let e = U.current,
      t = {
        onKeyDown(t) {
          if (w(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent))) {
            var r;
            D((0, p.wt)(t.nativeEvent), t.key) && t.preventDefault();
            let i = true;
            if (!e.isPressed && !t.repeat) {
              e.target = t.currentTarget, e.isPressed = true, e.pointerType = "keyboard", i = F(t, "keyboard");
              let r = t.currentTarget,
                a = t => {
                  w(t, r) && !t.repeat && (0, p.sD)(r, (0, p.wt)(t)) && e.target && H(R(e.target, t), "keyboard")
                };
              G((0, _.TW)(t.currentTarget), "keyup", (0, h.c)(a, n), true)
            }
            i && t.stopPropagation(), t.metaKey && (0, m.cX)() && (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent))
          } else "Meta" === t.key && (e.metaKeyEvents = new Map)
        },
        onClick(t) {
          if ((!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !g.Fe.isOpening) {
            let n = true;
            if (u && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, E.Y)(t.nativeEvent))) {
              let e = F(t, "virtual"),
                r = H(t, "virtual"),
                i = B(t, "virtual");
              K(t), n = e && r && i
            } else if (e.isPressed && "keyboard" !== e.pointerType) {
              let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                i = H(R(t.currentTarget, t), r),
                a = B(R(t.currentTarget, t), r, true);
              n = i && a, e.isOverTarget = false, K(t), Y(t)
            }
            e.ignoreEmulatedMouseEvents = false, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        var n, r, i;
        if (e.isPressed && e.target && w(t, e.target)) {
          D((0, p.wt)(t), t.key) && t.preventDefault();
          let n = (0, p.wt)(t),
            i = (0, p.sD)(e.target, (0, p.wt)(t));
          B(R(e.target, t), "keyboard", i), i && z(t, e.target), V(), "Enter" !== t.key && N(e.target) && (0, p.sD)(e.target, n) && !t[I] && (t[I] = true, (0, g.Fe)(e.target, t, false)), e.isPressed = false, null == (r = e.metaKeyEvents) || r.delete(t.key)
        } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? true : n.size)) {
          let t = e.metaKeyEvents;
          for (let n of (e.metaKeyEvents = true, t.values())) null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", n))
        }
      };
    if ("u" > typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !(0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent))) return;
        if ((0, E.P)(t.nativeEvent)) {
          e.pointerType = "virtual";
          return
        }
        e.pointerType = t.pointerType;
        let r = true;
        if (!e.isPressed) {
          e.isPressed = true, e.isOverTarget = true, e.activePointerId = t.pointerId, e.target = t.currentTarget, x || (0, i.M)(e.target), r = F(t, e.pointerType);
          let s = (0, p.wt)(t.nativeEvent);
          "releasePointerCapture" in s && s.releasePointerCapture(t.pointerId), G((0, _.TW)(t.currentTarget), "pointerup", n, false), G((0, _.TW)(t.currentTarget), "pointercancel", a, false)
        }
        r && t.stopPropagation()
      }, t.onMouseDown = t => {
        if ((0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent)) && 0 === t.button) {
          if (C) {
            let n = (0, r.LE)(t.target);
            n && e.disposables.push(n)
          }
          t.stopPropagation()
        }
      }, t.onPointerUp = t => {
        (0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || H(t, e.pointerType || t.pointerType))
      }, t.onPointerEnter = t => {
        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = true, F(R(e.target, t), e.pointerType))
      }, t.onPointerLeave = t => {
        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = false, B(R(e.target, t), e.pointerType, false), W(t))
      };
      let n = t => {
          if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
            if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
              let n = false,
                r = setTimeout(() => {
                  e.isPressed && e.target instanceof HTMLElement && (n ? Y(t) : ((0, y.e)(e.target), e.target.click()))
                }, 80);
              G(t.currentTarget, "click", () => n = true, true), e.disposables.push(() => clearTimeout(r))
            } else Y(t);
            e.isOverTarget = false
          }
        },
        a = e => {
          Y(e)
        };
      t.onDragStart = e => {
        (0, p.sD)(e.currentTarget, (0, p.wt)(e.nativeEvent)) && Y(e)
      }
    }
    return t
  }, [G, u, C, V, x, Y, W, B, F, H, K, z]);
  return (0, b.useEffect)(() => {
    if (!L) return;
    let e = (0, _.TW)(L.current);
    if (!e || !e.head || e.getElementById(S)) return;
    let t = e.createElement("style");
    t.id = S, t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t)
  }, [L]), (0, b.useEffect)(() => {
    let e = U.current;
    return () => {
      var t;
      for (let n of (x || (0, i.E)(null != (t = e.target) ? t : true), e.disposables)) n();
      e.disposables = []
    }
  }, [x]), {
    isPressed: v || M,
    pressProps: (0, c.v)(j, q, {
      [T]: true
    })
  }
}

function N(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function w(e, t) {
  let {
    key: n,
    code: r
  } = e, i = t, a = i.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(i instanceof(0, _.mD)(i).HTMLInputElement && !L(i, n) || i instanceof(0, _.mD)(i).HTMLTextAreaElement || i.isContentEditable) && !(("link" === a || !a && N(i)) && "Enter" !== n)
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

function P(e) {
  return !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !N(e))
}

function D(e, t) {
  return e instanceof HTMLInputElement ? !L(e, t) : P(e)
}
let x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function L(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type)
}