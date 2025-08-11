/** Chunk was on web.js **/
/** chunk id: 663924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk374470 = require("./374470.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk896449 = require("./896449.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5967 = require("./5967.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk421591 = require("./421591.jsx"),
  Chunk496977 = require("./496977.js"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk760420 = require("./760420.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = {
  height: Chunk314734.lv
};

function C(e) {
  var {
    positionTargetRef: t
  } = e, n = S(e, ["positionTargetRef"]);
  return (0, r.jsx)("span", {
    style: E.u$,
    children: (0, r.jsx)(u.W5, {
      className: v.positionLayer,
      targetRef: t,
      position: "top",
      align: "right",
      spacing: 24,
      autoInvert: true,
      clickTrap: true,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, r.jsx)("section", {
          className: v.positionContainer,
          role: "dialog",
          style: N,
          "aria-label": O.intl.string(O.t["3CNGLC"]),
          children: t && (0, r.jsx)(P, T({}, n))
        })
      }
    })
  })
}

function R() {
  Chunk499254.yT(Chunk827498.ti.DISMISSED)
}

function P(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = false,
    parentModalKey: u
  } = e, p = i.useRef(null), {
    renderWindow: O,
    windowDispatch: v
  } = i.useContext(l.ZP), I = null != u, T = (0, a.Jw)(null != u ? u : ""), S = i.useCallback(e => {
    var t;
    if (!I && (0, a.$s)() || I && !(T && n) || d.Z.isOpen() || e.defaultPrevented) return;
    let {
      target: r
    } = e;
    if ((0, o.k)(r) && null != r.closest("." + E.Jh)) return;
    for (;
      (0, o.k)(r);) {
      if (r === p.current) return;
      if (r.classList.contains(E.t4) || r.classList.contains(E.Id)) return void e.preventDefault();
      if (r.classList.contains(E.NN)) return;
      let t = [y.cZ, c.N];
      if (r.classList.contains(E.I4) || t.includes(r.id)) return;
      r = r.parentNode
    }
    R();
    let i = null == (t = (0, _.uB)(e)) ? true : t.activeElement;
    (null == i || "BODY" === i.tagName) && f.S.dispatchToLastSubscribed(b.CkL.TEXTAREA_FOCUS)
  }, [n, T, I]);
  i.useLayoutEffect(() => (O.addEventListener("mousedown", S), O.addEventListener("contextmenu", S), v.subscribe(b.CkL.POPOUT_CLOSE, R), () => {
    O.removeEventListener("mousedown", S), O.removeEventListener("contextmenu", S), v.unsubscribe(b.CkL.POPOUT_CLOSE, R)
  }), [S, O, v]), (0, s.Tbt)(p), i.useEffect(() => {
    (!I && (0, a.$s)() || I && !T) && R()
  }, [T, I]);
  let A = (0, g.Z)();
  return (0, r.jsx)(m.Z, {
    ref: p,
    context: {
      channel: t,
      type: "channel"
    },
    entrypoint: h._b.TEXT,
    initHistory: A
  })
}
let w = Chunk73800.memo(C)