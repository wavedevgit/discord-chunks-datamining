/** Chunk was on web.js **/
/** chunk id: 667889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk315246 = require("./315246.jsx"),
  Chunk750506 = require("./750506.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk712687 = require("./712687.js"),
  Chunk203982 = require("./203982.js"),
  Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk7691 = require("./7691.jsx"),
  Chunk699803 = require("./699803.js"),
  Chunk60809 = require("./60809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk732139 = require("./732139.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk775269 = require("./775269.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let T = {
  height: Chunk60809.$V
};

function C(e) {
  let {
    positionTargetRef: t,
    align: n
  } = e, i = I(e, ["positionTargetRef", "align"]);
  return (0, r.jsx)("span", {
    style: g.sK,
    children: (0, r.jsx)(c.nE, {
      className: O.T,
      targetRef: t,
      position: "top",
      align: null != n ? n : "right",
      spacing: 24,
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      clickTrap: true,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, r.jsx)("section", {
          className: O.V,
          role: "dialog",
          style: T,
          "aria-label": b.intl.string(b.t["3CNGLK"]),
          children: t && (0, r.jsx)(w, A({}, i))
        })
      }
    })
  })
}

function N() {
  p.k(_.Se.DISMISSED)
}

function w(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = false,
    parentModalKey: c
  } = e, p = i.useRef(null), {
    renderWindow: b,
    windowDispatch: O
  } = i.useContext(u.Ay), v = null != c, A = (0, s.useIsModalAtTop)(null != c ? c : ""), I = i.useCallback(e => {
    var t;
    if (!v && (0, s.hasAnyModalOpen)() || v && !(A && n) || d.A.isOpen() || e.defaultPrevented) return;
    let {
      target: r
    } = e;
    if ((0, a.vq)(r) && null != r.closest("." + g.Wx)) return;
    for (;
      (0, a.vq)(r);) {
      if (r === p.current) return;
      if (r.classList.contains(g.KG) || r.classList.contains(g.Gu)) return void e.preventDefault();
      if (r.classList.contains(g.qp)) return;
      let t = [y.Do, l.n];
      if (r.classList.contains(g.TY) || t.includes(r.id)) return;
      r = r.parentNode
    }
    N();
    let i = null == (t = (0, a.BF)(e)) ? true : t.activeElement;
    (null == i || "BODY" === i.tagName) && f._.dispatchToLastSubscribed(E.jej.TEXTAREA_FOCUS)
  }, [n, A, v]);
  i.useLayoutEffect(() => (b.addEventListener("mousedown", I), b.addEventListener("contextmenu", I), O.subscribe(E.jej.POPOUT_CLOSE, N), () => {
    b.removeEventListener("mousedown", I), b.removeEventListener("contextmenu", I), O.unsubscribe(E.jej.POPOUT_CLOSE, N)
  }), [I, b, O]), (0, o.tjt)(p), i.useEffect(() => {
    (!v && (0, s.hasAnyModalOpen)() || v && !A) && N()
  }, [A, v]);
  let S = (0, m.A)();
  return (0, r.jsx)(h.A, {
    ref: p,
    context: {
      channel: t,
      type: "channel"
    },
    entrypoint: _.s4.TEXT,
    initHistory: S
  })
}
let R = Chunk64700.memo(C)