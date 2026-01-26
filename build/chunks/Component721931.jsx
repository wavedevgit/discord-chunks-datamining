/** Chunk was on 97887 **/
/** chunk id: 721931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
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
  Chunk889599 = require("./889599.js"),
  Chunk248789 = require("./248789.js");

function E(e) {
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

function C(e, t) {
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
    userId: i,
    setPopoutRef: S
  } = e, I = l.useRef(null), N = (0, a.bG)([p.A], () => p.A.getVoiceChannelId() === n.id), T = (0, a.bG)([d.A], () => d.A.can(O.xBc.CONNECT, n)), P = (null == t ? true : t.emoji) == null || (0, m.n)(t.emoji, n);
  l.useEffect(() => {
    null == S || S(null == I ? true : I.current)
  }, [I, S]), l.useEffect(() => {
    h.default.track(O.HAw.VIEW_HANG_STATUS, E({
      source: "HangStatusPopout",
      other_user_id: i
    }, (0, b.A)(n.id)))
  }, [n.guild_id, n.id, i]);
  let w = l.useCallback(() => {
      !N && T && (u.default.selectVoiceChannel(n.id), h.default.track(O.HAw.HANG_STATUS_CTA_CLICKED, C(E({
        source: "HangStatusPopout"
      }, (0, b.A)(n.id)), {
        other_user_id: i,
        cta_type: "join"
      })))
    }, [N, T, n.id, i]),
    R = l.useCallback(() => {
      if (!N || !P || null == t.state) return;
      let [e] = (0, A.e)(i, t.state);
      if (null != e) {
        if (e === _.Kk.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, f.hS)(t.details, t.emoji, true)
        } else(0, f.Iq)(e, true);
        h.default.track(O.HAw.HANG_STATUS_CTA_CLICKED, C(E({
          source: "HangStatusPopout"
        }, (0, b.A)(n.id)), {
          other_user_id: i,
          cta_type: "swipe"
        }))
      }
    }, [N, P, t, n.id, i]);
  return (0, r.jsxs)("div", {
    ref: I,
    className: s()(x.popover, v.kL),
    children: [(0, r.jsx)(y.A, {
      userId: i,
      size: 32,
      className: v.Kk,
      hangStatusActivity: t
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      className: v.qS,
      children: (0, g.Au)(i, t)
    }), N ? (0, r.jsx)(o.m_, {
      text: P ? true : j.intl.string(j.t["0LMpW+"]),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          text: j.intl.string(j.t["0eHzpm"]),
          onClick: R,
          disabled: !P
        })
      })
    }) : T && (0, r.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      text: j.intl.string(j.t["B/dHXL"]),
      onClick: w
    })]
  })
}