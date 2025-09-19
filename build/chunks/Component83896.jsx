/** Chunk was on 62987 **/
/** chunk id: 83896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk906605 = require("./906605.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk699263 = require("./699263.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10359 = require("./10359.js"),
  Chunk254477 = require("./254477.js");

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

function E(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: l,
    setPopoutRef: E
  } = e, S = i.useRef(null), I = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId() === n.id), P = (0, o.e7)([u.Z], () => u.Z.can(_.Plq.CONNECT, n)), Z = (null == t ? true : t.emoji) == null || (0, m.K)(t.emoji, n);
  i.useEffect(() => {
    null == E || E(null == S ? true : S.current)
  }, [S, E]), i.useEffect(() => {
    p.default.track(_.rMx.VIEW_HANG_STATUS, O({
      source: "HangStatusPopout",
      other_user_id: l
    }, (0, g.Z)(n.id)))
  }, [n.guild_id, n.id, l]);
  let T = i.useCallback(() => {
      !I && P && (c.default.selectVoiceChannel(n.id), p.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, j(O({
        source: "HangStatusPopout"
      }, (0, g.Z)(n.id)), {
        other_user_id: l,
        cta_type: "join"
      })))
    }, [I, P, n.id, l]),
    N = i.useCallback(() => {
      if (!I || !Z || null == t.state) return;
      let [e] = (0, f.Fe)(t.state);
      if (null != e) {
        if (e === y.tN.CUSTOM) {
          if (null == t.details || null == t.emoji) return;
          (0, h._s)(t.details, t.emoji, true)
        } else(0, h.Zx)(e, true);
        p.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, j(O({
          source: "HangStatusPopout"
        }, (0, g.Z)(n.id)), {
          other_user_id: l,
          cta_type: "swipe"
        }))
      }
    }, [I, Z, t, n.id, l]);
  return (0, r.jsxs)("div", {
    ref: S,
    className: a()(x.popover, v.container),
    children: [(0, r.jsx)(b.Z, {
      size: 32,
      className: v.icon,
      hangStatusActivity: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: v.statusText,
      children: (0, f.O8)(t)
    }), I ? (0, r.jsx)(s.ua7, {
      text: Z ? true : C.intl.string(C.t["0LMpW1"]),
      children: e => (0, r.jsx)("div", j(O({}, e), {
        children: (0, r.jsx)(s.zxk, {
          size: "sm",
          variant: "secondary",
          text: C.intl.string(C.t["0eHzpq"]),
          onClick: N,
          disabled: !Z
        })
      }))
    }) : P && (0, r.jsx)(s.zxk, {
      size: "sm",
      variant: "secondary",
      text: C.intl.string(C.t["B/dHXF"]),
      onClick: T
    })]
  })
}