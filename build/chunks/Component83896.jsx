/** Chunk was on 40184 **/
/** chunk id: 83896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk906605 = require("./906605.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk699263 = require("./699263.js"),
  Chunk797156 = require("./797156.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527019 = require("./527019.js"),
  Chunk770966 = require("./770966.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: l,
    setPopoutRef: P
  } = e, I = r.useRef(null), Z = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id), T = (0, o.e7)([d.Z], () => d.Z.can(x.Plq.CONNECT, n)), N = (null == t ? true : t.emoji) == null || (0, g.K)(t.emoji, n);
  r.useEffect(() => {
    null == P || P(null == I ? true : I.current)
  }, [I, P]), r.useEffect(() => {
    f.default.track(x.rMx.VIEW_HANG_STATUS, S({
      source: "HangStatusPopout",
      other_user_id: l
    }, (0, b.Z)(n.id)))
  }, [n.guild_id, n.id, l]);
  let A = r.useCallback(() => {
      !Z && T && (u.default.selectVoiceChannel(n.id), f.default.track(x.rMx.HANG_STATUS_CTA_CLICKED, _(S({
        source: "HangStatusPopout"
      }, (0, b.Z)(n.id)), {
        other_user_id: l,
        cta_type: "join"
      })))
    }, [Z, T, n.id, l]),
    w = r.useCallback(() => {
      if (!Z || !N || null == t.state) return;
      let [e] = (0, y.F)(l, t.state);
      if (null != e) {
        if (e === v.tN.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, h._s)(t.details, t.emoji, true)
        } else(0, h.Zx)(e, true);
        f.default.track(x.rMx.HANG_STATUS_CTA_CLICKED, _(S({
          source: "HangStatusPopout"
        }, (0, b.Z)(n.id)), {
          other_user_id: l,
          cta_type: "swipe"
        }))
      }
    }, [Z, N, t, n.id, l]);
  return (0, i.jsxs)("div", {
    ref: I,
    className: a()(j.popover, E.container),
    children: [(0, i.jsx)(C.Z, {
      userId: l,
      size: 32,
      className: E.icon,
      hangStatusActivity: t
    }), (0, i.jsx)(c.Text, {
      variant: "text-md/medium",
      className: E.statusText,
      children: (0, m.O8)(l, t)
    }), Z ? (0, i.jsx)(s.u, {
      text: N ? true : O.intl.string(O.t["0LMpW+"]),
      children: (0, i.jsx)("div", {
        children: (0, i.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          text: O.intl.string(O.t["0eHzpm"]),
          onClick: w,
          disabled: !N
        })
      })
    }) : T && (0, i.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      text: O.intl.string(O.t["B/dHXL"]),
      onClick: A
    })]
  })
}