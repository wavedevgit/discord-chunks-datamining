/** Chunk was on 27978 **/
/** chunk id: 677760, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk587444 = require("./587444.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk701190 = require("./701190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk264229 = require("./264229.js"),
  Chunk230224 = require("./230224.jsx"),
  Chunk617730 = require("./617730.jsx"),
  Chunk258356 = require("./258356.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk522976 = require("./522976.js");

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

function N(e, t) {
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

function y() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk522976.centerFlex,
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
  })
}
let C = e => {
  let t = (null == e ? true : e.state) == null && (null == e ? true : e.channel) == null;
  if (null == e || null == e.state || t) return 0;
  let n = e.state;
  switch (n) {
    case j.r2o.RESOLVED:
    case j.r2o.ACCEPTED:
    case j.r2o.APP_NOT_OPENED:
    case j.r2o.APP_OPENED:
    case j.r2o.ACCEPTING:
    case j.r2o.APP_OPENING:
      return 1;
    case j.r2o.EXPIRED:
    case j.r2o.BANNED:
    case j.r2o.ERROR:
      return 2;
    case j.r2o.RESOLVING:
      return 0;
    default:
      (0, _.vE)(n)
  }
};

function A(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  return (null == t ? true : t.state) === j.r2o.BANNED ? (0, r.jsx)(c.u, {
    text: I.intl.string(I.t["5AkWAQ"]),
    buttonCta: I.intl.string(I.t["8osdkp"]),
    onClick: n
  }) : (0, r.jsx)(c.u, {
    text: I.intl.string(I.t["usP+MT"]),
    buttonCta: I.intl.string(I.t["8osdkp"]),
    onClick: n
  })
}

function T(e) {
  var {
    children: t,
    cardChildren: n,
    startAnimHeightPx: o,
    innerStyle: a
  } = e;
  let {
    invite: c
  } = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]), [d, h] = i.useState(C(c)), {
    ref: p,
    height: f
  } = (0, u.ZP)(), m = (0, s.q_F)({
    height: null != f && 0 !== f ? "".concat(f, "px") : "".concat(o, "px"),
    config: l.config.stiff
  });
  return i.useEffect(() => {
    let e = C(c);
    e !== d && h(e)
  }, [c, d]), (0, r.jsxs)(l.animated.div, {
    className: O.inviteCard,
    style: m,
    children: [(0, r.jsx)(l.animated.div, {
      className: O.inviteChildContainer,
      style: m,
      children: (0, r.jsx)("section", {
        ref: p,
        className: null == a ? true : a(d),
        children: t(d)
      })
    }), n]
  })
}

function Z(e) {
  let {
    invite: t
  } = e;
  if (null == t || !(0, b.JI)(t)) return null;
  let n = e => null == t ? null : 1 === e ? (0, r.jsx)(v.X, {
    invite: t
  }) : null;
  return (0, r.jsx)(T, N(S({
    startAnimHeightPx: 0,
    innerStyle: () => O.guildInfoInner
  }, e), {
    children: e => n(e)
  }))
}

function P(e) {
  let {
    invite: t
  } = e, n = n => {
    if (null == t) return (0, r.jsx)(y, {});
    switch (n) {
      case 1:
        return (0, r.jsx)(E.Z, N(S({}, e), {
          invite: t
        }));
      case 2:
        return (0, r.jsx)(A, N(S({}, e), {
          invite: t
        }));
      default:
        return (0, r.jsx)(y, {})
    }
  }, i = {
    1: O.inviteCardInner,
    2: O.inviteCardInnerError,
    0: O.inviteCardInnerLoading
  };
  return (0, r.jsx)(T, N(S({
    startAnimHeightPx: 200,
    innerStyle: e => i[e]
  }, e), {
    children: e => n(e)
  }))
}

function R(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: i
  } = null != t ? t : {}, l = {};
  if ((null == i ? true : i.splash) != null) {
    let e = g.ZP.getGuildSplashURL({
      id: i.id,
      splash: i.splash
    });
    null != e && (l.backgroundImage = "url(".concat(e, ")"), l.backgroundSize = "cover")
  }
  return (0, r.jsxs)(d.ZP, {
    theme: j.BRd.DARK,
    className: O.splashBackground,
    style: l,
    contentClassName: O.centerAuthBoxContent,
    children: [(0, r.jsx)(P, N(S({}, e), {
      onAcceptInvite: n
    })), (0, r.jsx)(Z, S({}, e))]
  })
}

function w(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, l = (0, o.e7)([f.Z], () => f.Z.getInvite(t));
  return i.useEffect(() => {
    (0, h.e)("invite_mobile")
  }, []), i.useEffect(() => {
    null != l && l.state === j.r2o.RESOLVED && m.default.track(j.rMx.INVITE_VIEWED, {
      invite_code: t,
      friends_count: null == l ? true : l.friends_count
    }, {
      flush: true
    })
  }, [l, t]), (0, r.jsx)(R, {
    invite: l,
    onAcceptInvite: e => {
      ! function(e, t, n) {
        var r, i, l;
        null == e || e.preventDefault(), m.default.track(j.rMx.INVITE_APP_OPENED, {
          invite_code: (0, x.jX)(t),
          guild_id: null == n || null == (r = n.guild) ? true : r.id,
          channel_id: null == n || null == (i = n.channel) ? true : i.id,
          inviter_id: null == n || null == (l = n.inviter) ? true : l.id
        });
        let o = null != n && n.state !== j.r2o.EXPIRED && n.state !== j.r2o.BANNED ? t : true,
          s = p.default.getFingerprint(),
          c = null != s ? s : p.default.getId(),
          u = null != n && (null == n ? true : n.type) != null ? Number(null == n ? true : n.type) : true;
        a.ZP.openApp(o, true, c, true, u)
      }(e, t, l)
    },
    transitionTo: n
  })
}