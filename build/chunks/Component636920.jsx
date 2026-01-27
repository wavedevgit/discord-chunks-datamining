/** Chunk was on 21425 **/
/** chunk id: 636920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: S,
    isSelf: I = false,
    analyticsSource: x,
    onAction: E,
    className: P,
    iconClassName: T,
    textClassName: N
  } = e, w = (0, l.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), C = (0, l.bG)([c.A], () => c.A.can(A.xBc.CONNECT, n), [n]), D = null == t.emoji || (0, m.n)(t.emoji, n);
  i.useEffect(() => {
    d.default.track(A.HAw.VIEW_HANG_STATUS, O({
      source: x,
      other_user_id: S
    }, (0, g.A)(n.id)))
  }, [x, n.id, S]);
  let L = i.useCallback(() => {
      !w && C && (o.default.selectVoiceChannel(n.id), null == E || E(), d.default.track(A.HAw.HANG_STATUS_CTA_CLICKED, j(O({
        source: x
      }, (0, g.A)(n.id)), {
        other_user_id: S,
        cta_type: "join"
      })))
    }, [w, C, n.id, S, x, E]),
    k = i.useCallback(() => {
      if (!w || !D || null == t.state) return;
      let [e] = (0, y.e)(S, t.state);
      if (null != e) {
        if (e === b.Kk.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, p.hS)(t.details, t.emoji, true)
        } else(0, p.Iq)(e, true);
        null == E || E(), d.default.track(A.HAw.HANG_STATUS_CTA_CLICKED, j(O({
          source: x
        }, (0, g.A)(n.id)), {
          other_user_id: S,
          cta_type: "swipe"
        }))
      }
    }, [w, D, t, n.id, S, x, E]);
  return (0, r.jsxs)("div", {
    className: null != P ? P : v.kL,
    children: [(0, r.jsx)(_.A, {
      userId: S,
      size: 32,
      className: null != T ? T : v.Kk,
      hangStatusActivity: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: null != N ? N : v.qS,
      children: (0, f.Au)(S, t)
    }), w && !I ? (0, r.jsx)(a.m_, {
      text: D ? true : h.intl.string(h.t["0LMpW+"]),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          text: h.intl.string(h.t["0eHzpm"]),
          onClick: k,
          disabled: !D
        })
      })
    }) : !I && C && (0, r.jsx)(s.Button, {
      size: "sm",
      variant: "secondary",
      text: h.intl.string(h.t["B/dHXL"]),
      onClick: L
    })]
  })
}