/** Chunk was on web.js **/
/** chunk id: 208156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => I
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk308808 = require("./308808.js"),
  Chunk772848 = require("./772848.js"),
  Chunk631467 = require("./631467.js"),
  Chunk210887 = require("./210887.js"),
  Chunk585483 = require("./585483.js"),
  Chunk531826 = require("./531826.js"),
  Chunk53289 = require("./53289.js"),
  Chunk953101 = require("./953101.js"),
  Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js"),
  Chunk962140 = require("./962140.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    url: t,
    className: n,
    style: o,
    onLoad: a,
    shouldRefocus: g,
    queryParams: E,
    allowPopups: y = false,
    referrerPolicy: v = "origin"
  } = e, I = (0, f.sU)({}), T = (0, s.useMemoOne)(() => (0, l.Z)(), [t]), S = i.useRef(null), A = (0, _.Z)(S, g, null == I ? window : I), N = O(b({}, E), {
    frame_id: T,
    platform: h.S4.DESKTOP
  }), [C, R] = i.useState(false), P = u.Z.theme, w = b({}, o);

  function D(e) {
    var n;
    null == a || a(e.target), S.current = e.target, A(true), null == (n = e.target.contentWindow) || n.postMessage([c.Z.HELLO, N], null != t ? t : "")
  }
  return P === m.BRd.LIGHT ? w.colorScheme = "light" : w.colorScheme = "dark", i.useEffect(() => (d.S.dispatch(m.CkL.IFRAME_MOUNT, {
    id: T
  }), () => {
    d.S.dispatch(m.CkL.IFRAME_UNMOUNT, {
      id: T
    })
  }), [T]), i.useEffect(() => {
    let e = e => {
      let {
        resizing: t
      } = e;
      R(t)
    };
    return d.S.subscribe(m.CkL.MANUAL_IFRAME_RESIZING, e), () => {
      d.S.unsubscribe(m.CkL.MANUAL_IFRAME_RESIZING, e)
    }
  }, []), C && (w.pointerEvents = "none"), null != t ? <iframe style={w} allow={"autoplay; encrypted-media"} referrerPolicy={v} onLoad={D} sandbox={(0, p.Z)({
      allowPopups: y
    })} className={n} src={"".concat(t, "?").concat(new URLSearchParams(N))} /> : null
}

function I(e) {
  let {
    onLoad: t
  } = e, [n, o] = i.useState(false), s = i.useCallback(e => {
    o(true), null == t || t(e)
  }, [t]);
  return <div className={g.fillParent}>{!n && <div className={a()(g.fillParent, g.iframePlaceholder)} />}{<div className={a()(g.fillParent, n ? true : g.hiddenIframeContainer)}><v{...O(b({}, e), {
        onLoad: s
      })} /></div>}</div>
}