/** Chunk was on 82124 **/
/** chunk id: 83896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => I
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

function _(e, t) {
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

function I(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: l,
    setPopoutRef: I
  } = e, P = i.useRef(null), Z = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id), N = (0, o.e7)([d.Z], () => d.Z.can(j.Plq.CONNECT, n)), T = (null == t ? true : t.emoji) == null || (0, m.K)(t.emoji, n);
  i.useEffect(() => {
    null == I || I(null == P ? true : P.current)
  }, [P, I]), i.useEffect(() => {
    f.default.track(j.rMx.VIEW_HANG_STATUS, S({
      source: "HangStatusPopout",
      other_user_id: l
    }, (0, b.Z)(n.id)))
  }, [n.guild_id, n.id, l]);
  let A = i.useCallback(() => {
      !Z && N && (u.default.selectVoiceChannel(n.id), f.default.track(j.rMx.HANG_STATUS_CTA_CLICKED, _(S({
        source: "HangStatusPopout"
      }, (0, b.Z)(n.id)), {
        other_user_id: l,
        cta_type: "join"
      })))
    }, [Z, N, n.id, l]),
    w = i.useCallback(() => {
      if (!Z || !T || null == t.state) return;
      let [e] = (0, y.F)(l, t.state);
      if (null != e) {
        if (e === O.tN.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, h._s)(t.details, t.emoji, true)
        } else(0, h.Zx)(e, true);
        f.default.track(j.rMx.HANG_STATUS_CTA_CLICKED, _(S({
          source: "HangStatusPopout"
        }, (0, b.Z)(n.id)), {
          other_user_id: l,
          cta_type: "swipe"
        }))
      }
    }, [Z, T, t, n.id, l]);
  return (0, r.jsxs)("div", {
    ref: P,
    className: a()(E.popover, C.container),
    children: [(0, r.jsx)(v.Z, {
      userId: l,
      size: 32,
      className: C.icon,
      hangStatusActivity: t
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      className: C.statusText,
      children: (0, g.O8)(l, t)
    }), Z ? (0, r.jsx)(s.u, {
      text: T ? true : x.intl.string(x.t["0LMpW+"]),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          text: x.intl.string(x.t["0eHzpm"]),
          onClick: w,
          disabled: !T
        })
      })
    }) : N && (0, r.jsx)(c.Button, {
      size: "sm",
      variant: "secondary",
      text: x.intl.string(x.t["B/dHXL"]),
      onClick: A
    })]
  })
}