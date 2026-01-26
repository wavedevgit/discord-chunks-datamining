/** Chunk was on web.js **/
/** chunk id: 636920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk69555 = require("./69555.js"),
  Chunk886019 = require("./886019.js"),
  Chunk846218 = require("./846218.js"),
  Chunk806246 = require("./806246.js"),
  Chunk358957 = require("./358957.js"),
  Chunk559405 = require("./559405.jsx"),
  Chunk708455 = require("./708455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk334994 = require("./334994.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = 32;

function C(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: v,
    isSelf: I = false,
    analyticsSource: C,
    onAction: N,
    className: w,
    iconClassName: R,
    textClassName: P
  } = e, D = (0, a.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), x = (0, a.bG)([c.A], () => c.A.can(y.xBc.CONNECT, n), [n]), L = null == t.emoji || (0, _.n)(t.emoji, n);
  i.useEffect(() => {
    d.default.track(y.HAw.VIEW_HANG_STATUS, A({
      source: C,
      other_user_id: v
    }, (0, h.A)(n.id)))
  }, [C, n.id, v]);
  let j = i.useCallback(() => {
      !D && x && (l.default.selectVoiceChannel(n.id), null == N || N(), d.default.track(y.HAw.HANG_STATUS_CTA_CLICKED, S(A({
        source: C
      }, (0, h.A)(n.id)), {
        other_user_id: v,
        cta_type: "join"
      })))
    }, [D, x, n.id, v, C, N]),
    M = i.useCallback(() => {
      if (!D || !L || null == t.state) return;
      let [e] = (0, m.e)(v, t.state);
      if (null != e) {
        if (e === E.Kk.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, f.hS)(t.details, t.emoji, true)
        } else(0, f.Iq)(e, true);
        null == N || N(), d.default.track(y.HAw.HANG_STATUS_CTA_CLICKED, S(A({
          source: C
        }, (0, h.A)(n.id)), {
          other_user_id: v,
          cta_type: "swipe"
        }))
      }
    }, [D, L, t, n.id, v, C, N]);
  return (0, r.jsxs)("div", {
    className: null != w ? w : O.kL,
    children: [(0, r.jsx)(g.A, {
      userId: v,
      size: T,
      className: null != R ? R : O.Kk,
      hangStatusActivity: t
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      className: null != P ? P : O.qS,
      children: (0, p.Au)(v, t)
    }), D && !I ? (0, r.jsx)(s.m_, {
      text: L ? true : b.intl.string(b.t["0LMpW+"]),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.Button, {
          size: "sm",
          variant: "secondary",
          text: b.intl.string(b.t["0eHzpm"]),
          onClick: M,
          disabled: !L
        })
      })
    }) : !I && x && (0, r.jsx)(o.Button, {
      size: "sm",
      variant: "secondary",
      text: b.intl.string(b.t["B/dHXL"]),
      onClick: j
    })]
  })
}