/** Chunk was on 44669 **/
/** chunk id: 636920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function _(e) {
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

function x(e, t) {
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

function v(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: v,
    isSelf: E = false,
    analyticsSource: C,
    onAction: S,
    className: I,
    iconClassName: N,
    textClassName: T
  } = e, P = (0, i.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), w = (0, i.bG)([c.A], () => c.A.can(y.xBc.CONNECT, n), [n]), R = null == t.emoji || (0, g.n)(t.emoji, n);
  l.useEffect(() => {
    d.default.track(y.HAw.VIEW_HANG_STATUS, _({
      source: C,
      other_user_id: v
    }, (0, f.A)(n.id)))
  }, [C, n.id, v]);
  let D = l.useCallback(() => {
      !P && w && (o.default.selectVoiceChannel(n.id), null == S || S(), d.default.track(y.HAw.HANG_STATUS_CTA_CLICKED, x(_({
        source: C
      }, (0, f.A)(n.id)), {
        other_user_id: v,
        cta_type: "join"
      })))
    }, [P, w, n.id, v, C, S]),
    L = l.useCallback(() => {
      if (!P || !R || null == t.state) return;
      let [e] = (0, m.e)(v, t.state);
      if (null != e) {
        if (e === A.Kk.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, p.hS)(t.details, t.emoji, true)
        } else(0, p.Iq)(e, true);
        null == S || S(), d.default.track(y.HAw.HANG_STATUS_CTA_CLICKED, x(_({
          source: C
        }, (0, f.A)(n.id)), {
          other_user_id: v,
          cta_type: "swipe"
        }))
      }
    }, [P, R, t, n.id, v, C, S]);
  return (0, r.jsxs)("div", {
    className: null != I ? I : j.kL,
    children: [(0, r.jsx)(b.A, {
      userId: v,
      size: 32,
      className: null != N ? N : j.Kk,
      hangStatusActivity: t
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      className: null != T ? T : j.qS,
      children: (0, h.Au)(v, t)
    }), P && !E ? (0, r.jsx)(s.m_, {
      text: R ? true : O.intl.string(O.t["0LMpW+"]),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.Button, {
          size: "sm",
          variant: "secondary",
          text: O.intl.string(O.t["0eHzpm"]),
          onClick: L,
          disabled: !R
        })
      })
    }) : !E && w && (0, r.jsx)(a.Button, {
      size: "sm",
      variant: "secondary",
      text: O.intl.string(O.t["B/dHXL"]),
      onClick: D
    })]
  })
}