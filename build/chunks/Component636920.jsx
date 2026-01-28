/** Chunk was on 78572 **/
/** chunk id: 636920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function S(e, t) {
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

function j(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: j,
    isSelf: x = false,
    analyticsSource: I,
    onAction: T,
    className: P,
    iconClassName: E,
    textClassName: w
  } = e, N = (0, l.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), C = (0, l.bG)([c.A], () => c.A.can(h.xBc.CONNECT, n), [n]), D = null == t.emoji || (0, m.n)(t.emoji, n);
  i.useEffect(() => {
    d.default.track(h.HAw.VIEW_HANG_STATUS, O({
      source: I,
      other_user_id: j
    }, (0, g.A)(n.id)))
  }, [I, n.id, j]);
  let L = i.useCallback(() => {
      !N && C && (o.default.selectVoiceChannel(n.id), null == T || T(), d.default.track(h.HAw.HANG_STATUS_CTA_CLICKED, S(O({
        source: I
      }, (0, g.A)(n.id)), {
        other_user_id: j,
        cta_type: "join"
      })))
    }, [N, C, n.id, j, I, T]),
    k = i.useCallback(() => {
      if (!N || !D || null == t.state) return;
      let [e] = (0, y.e)(j, t.state);
      if (null != e) {
        if (e === _.Kk.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, p.hS)(t.details, t.emoji, true)
        } else(0, p.Iq)(e, true);
        null == T || T(), d.default.track(h.HAw.HANG_STATUS_CTA_CLICKED, S(O({
          source: I
        }, (0, g.A)(n.id)), {
          other_user_id: j,
          cta_type: "swipe"
        }))
      }
    }, [N, D, t, n.id, j, I, T]);
  return (0, r.jsxs)("div", {
    className: null != P ? P : v.kL,
    children: [(0, r.jsx)(b.A, {
      userId: j,
      size: 32,
      className: null != E ? E : v.Kk,
      hangStatusActivity: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: null != w ? w : v.qS,
      children: (0, f.Au)(j, t)
    }), N && !x ? (0, r.jsx)(a.m_, {
      text: D ? true : A.intl.string(A.t["0LMpW+"]),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          text: A.intl.string(A.t["0eHzpm"]),
          onClick: k,
          disabled: !D
        })
      })
    }) : !x && C && (0, r.jsx)(s.Button, {
      size: "sm",
      variant: "secondary",
      text: A.intl.string(A.t["B/dHXL"]),
      onClick: L
    })]
  })
}