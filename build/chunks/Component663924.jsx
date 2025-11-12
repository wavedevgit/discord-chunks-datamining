/** Chunk was on web.js **/
/** chunk id: 663924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function I(e) {
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

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
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
  } = e, i = T(e, ["positionTargetRef", "align"]);
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
          children: t && (0, r.jsx)(R, I({}, i))
        })
      }
    })
  })
}

function N() {
  Chunk499254.y(Chunk827498.ti.DISMISSED)
}

function R(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = false,
    parentModalKey: c
  } = e, _ = i.useRef(null), {
    renderWindow: y,
    windowDispatch: O
  } = i.useContext(u.ZP), v = null != c, I = (0, o.Jw)(null != c ? c : ""), T = i.useCallback(e => {
    var t;
    if (!v && (0, o.$s)() || v && !(I && n) || d.Z.isOpen() || e.defaultPrevented) return;
    let {
      target: r
    } = e;
    if ((0, a.kK)(r) && null != r.closest("." + g.Jh)) return;
    for (;
      (0, a.kK)(r);) {
      if (r === _.current) return;
      if (r.classList.contains(g.t4) || r.classList.contains(g.Id)) return void e.preventDefault();
      if (r.classList.contains(g.NN)) return;
      let t = [b.cZ, l.N];
      if (r.classList.contains(g.I4) || t.includes(r.id)) return;
      r = r.parentNode
    }
    N();
    let i = null == (t = (0, a.uB)(e)) ? true : t.activeElement;
    (null == i || "BODY" === i.tagName) && f.S.dispatchToLastSubscribed(E.CkL.TEXTAREA_FOCUS)
  }, [n, I, v]);
  i.useLayoutEffect(() => (y.addEventListener("mousedown", T), y.addEventListener("contextmenu", T), O.subscribe(E.CkL.POPOUT_CLOSE, N), () => {
    y.removeEventListener("mousedown", T), y.removeEventListener("contextmenu", T), O.unsubscribe(E.CkL.POPOUT_CLOSE, N)
  }), [T, y, O]), (0, s.Tbt)(_), i.useEffect(() => {
    (!v && (0, o.$s)() || v && !I) && N()
  }, [I, v]);
  let S = (0, m.Z)();
  return (0, r.jsx)(h.Z, {
    ref: _,
    context: {
      channel: t,
      type: "channel"
    },
    entrypoint: p._b.TEXT,
    initHistory: S
  })
}
let P = Chunk647438.memo(C)