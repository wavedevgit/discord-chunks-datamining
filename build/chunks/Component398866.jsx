/** Chunk was on web.js **/
/** chunk id: 398866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => A
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk337126 = require("./337126.js"),
  Chunk835245 = require("./835245.js"),
  Chunk440454 = require("./440454.js"),
  Chunk544028 = require("./544028.js"),
  Chunk203982 = require("./203982.js"),
  Chunk851907 = require("./851907.js"),
  Chunk948607 = require("./948607.js"),
  Chunk928588 = require("./928588.js"),
  Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js"),
  Chunk272412 = require("./272412.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    url: t,
    className: n,
    style: a,
    onLoad: s,
    shouldRefocus: g,
    queryParams: E,
    allowPopups: b = false,
    referrerPolicy: v = "origin"
  } = e, A = (0, f.xi)({}), I = (0, o.useMemoOne)(() => (0, l.A)(), [t]), S = i.useRef(null), T = (0, p.A)(S, g, null == A ? window : A), C = O(y({}, E), {
    frame_id: I,
    platform: h.vu.DESKTOP
  }), [N, w] = i.useState(false), R = u.A.theme, P = y({}, a);

  function D(e) {
    var n;
    null == s || s(e.target), S.current = e.target, T(true), null == (n = e.target.contentWindow) || n.postMessage([c.A.HELLO, C], null != t ? t : "")
  }
  return R === m.NJ8.LIGHT ? P.colorScheme = "light" : P.colorScheme = "dark", i.useEffect(() => (d._.dispatch(m.jej.IFRAME_MOUNT, {
    id: I
  }), () => {
    d._.dispatch(m.jej.IFRAME_UNMOUNT, {
      id: I
    })
  }), [I]), i.useEffect(() => {
    let e = e => {
      let {
        resizing: t
      } = e;
      w(t)
    };
    return d._.subscribe(m.jej.MANUAL_IFRAME_RESIZING, e), () => {
      d._.unsubscribe(m.jej.MANUAL_IFRAME_RESIZING, e)
    }
  }, []), N && (P.pointerEvents = "none"), null != t ? (0, r.jsx)("iframe", {
    style: P,
    allow: "autoplay; encrypted-media",
    referrerPolicy: v,
    onLoad: D,
    sandbox: (0, _.A)({
      allowPopups: b
    }),
    className: n,
    src: "".concat(t, "?").concat(new URLSearchParams(C))
  }) : null
}

function A(e) {
  let {
    onLoad: t
  } = e, [n, a] = i.useState(false), o = i.useCallback(e => {
    a(true), null == t || t(e)
  }, [t]);
  return (0, r.jsxs)("div", {
    className: g.Qf,
    children: [!n && (0, r.jsx)("div", {
      className: s()(g.Qf, g.SL)
    }), (0, r.jsx)("div", {
      className: s()(g.Qf, n ? true : g.Ar),
      children: (0, r.jsx)(v, O(y({}, e), {
        onLoad: o
      }))
    })]
  })
}