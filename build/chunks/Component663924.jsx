/** Chunk was on web.js **/
/** chunk id: 663924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk896449 = require("./896449.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk421591 = require("./421591.jsx"),
  Chunk496977 = require("./496977.js"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk681524 = require("./681524.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = {
  height: Chunk314734.lv
};

function C(e) {
  var {
    positionTargetRef: t,
    align: n
  } = e, i = I(e, ["positionTargetRef", "align"]);
  return (0, r.jsx)("span", {
    style: g.u$,
    children: (0, r.jsx)(c.W5, {
      className: O.positionLayer,
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
          className: O.positionContainer,
          role: "dialog",
          style: A,
          "aria-label": y.intl.string(y.t["3CNGLK"]),
          children: t && (0, r.jsx)(P, S({}, i))
        })
      }
    })
  })
}

function N() {
  Chunk499254.y(Chunk827498.ti.DISMISSED)
}

function P(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = false,
    parentModalKey: c
  } = e, p = i.useRef(null), {
    renderWindow: y,
    windowDispatch: O
  } = i.useContext(u.ZP), v = null != c, S = (0, o.Jw)(null != c ? c : ""), I = i.useCallback(e => {
    var t;
    if (!v && (0, o.$s)() || v && !(S && n) || d.Z.isOpen() || e.defaultPrevented) return;
    let {
      target: r
    } = e;
    if ((0, a.kK)(r) && null != r.closest("." + g.Jh)) return;
    for (;
      (0, a.kK)(r);) {
      if (r === p.current) return;
      if (r.classList.contains(g.t4) || r.classList.contains(g.Id)) return void e.preventDefault();
      if (r.classList.contains(g.NN)) return;
      let t = [b.cZ, l.N];
      if (r.classList.contains(g.I4) || t.includes(r.id)) return;
      r = r.parentNode
    }
    N();
    let i = null == (t = (0, a.uB)(e)) ? true : t.activeElement;
    (null == i || "BODY" === i.tagName) && f.S.dispatchToLastSubscribed(E.CkL.TEXTAREA_FOCUS)
  }, [n, S, v]);
  i.useLayoutEffect(() => (y.addEventListener("mousedown", I), y.addEventListener("contextmenu", I), O.subscribe(E.CkL.POPOUT_CLOSE, N), () => {
    y.removeEventListener("mousedown", I), y.removeEventListener("contextmenu", I), O.unsubscribe(E.CkL.POPOUT_CLOSE, N)
  }), [I, y, O]), (0, s.Tbt)(p), i.useEffect(() => {
    (!v && (0, o.$s)() || v && !S) && N()
  }, [S, v]);
  let T = (0, h.Z)();
  return (0, r.jsx)(m.Z, {
    ref: p,
    context: {
      channel: t,
      type: "channel"
    },
    entrypoint: _._b.TEXT,
    initHistory: T
  })
}
let R = Chunk473749.memo(C)