/** Chunk was on 27978 **/
/** chunk id: 677760, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk148884 = require("./148884.js"),
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
  Chunk271922 = require("./271922.js");

function y(e) {
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

function C() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk271922.centerFlex,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  })
}
let O = e => {
  let t = (null == e ? true : e.state) == null && (null == e ? true : e.channel) == null;
  if (null == e || null == e.state || t) return 0;
  let n = e.state;
  switch (n) {
    case b.r2o.RESOLVED:
    case b.r2o.ACCEPTED:
    case b.r2o.APP_NOT_OPENED:
    case b.r2o.APP_OPENED:
    case b.r2o.ACCEPTING:
    case b.r2o.APP_OPENING:
      return 1;
    case b.r2o.EXPIRED:
    case b.r2o.BANNED:
    case b.r2o.ERROR:
      return 2;
    case b.r2o.RESOLVING:
      return 0;
    default:
      (0, _.vE)(n)
  }
};

function T(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  return (null == t ? true : t.state) === b.r2o.BANNED ? (0, r.jsx)(c.u, {
    text: I.intl.string(I.t["5AkWAd"]),
    buttonCta: I.intl.string(I.t["8osdkn"]),
    onClick: n
  }) : (0, r.jsx)(c.u, {
    text: I.intl.string(I.t["usP+Mb"]),
    buttonCta: I.intl.string(I.t["8osdkn"]),
    onClick: n
  })
}

function A(e) {
  var {
    children: t,
    cardChildren: n,
    startAnimHeightPx: l,
    innerStyle: o
  } = e;
  let {
    invite: c
  } = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        s = Object.keys(e);
      for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]), [d, h] = i.useState(O(c)), {
    ref: g,
    height: m
  } = (0, u.ZP)(), p = (0, a.q_F)({
    height: null != m && 0 !== m ? "".concat(m, "px") : "".concat(l, "px"),
    config: s.config.stiff
  });
  return i.useEffect(() => {
    let e = O(c);
    e !== d && h(e)
  }, [c, d]), (0, r.jsxs)(s.animated.div, {
    className: N.inviteCard,
    style: p,
    children: [(0, r.jsx)(s.animated.div, {
      className: N.inviteChildContainer,
      style: p,
      children: (0, r.jsx)("section", {
        ref: g,
        className: null == o ? true : o(d),
        children: t(d)
      })
    }), n]
  })
}

function Z(e) {
  let {
    invite: t
  } = e;
  return null != t && (0, E.JI)(t) ? (0, r.jsx)(A, S(y({
    startAnimHeightPx: 0,
    innerStyle: () => N.guildInfoInner
  }, e), {
    children: e => null == t ? null : 1 === e ? (0, r.jsx)(j.X, {
      invite: t
    }) : null
  })) : null
}

function P(e) {
  let {
    invite: t
  } = e, n = {
    1: N.inviteCardInner,
    2: N.inviteCardInnerError,
    0: N.inviteCardInnerLoading
  };
  return (0, r.jsx)(A, S(y({
    startAnimHeightPx: 200,
    innerStyle: e => n[e]
  }, e), {
    children: n => (n => {
      if (null == t) return (0, r.jsx)(C, {});
      switch (n) {
        case 1:
          return (0, r.jsx)(v.Z, S(y({}, e), {
            invite: t
          }));
        case 2:
          return (0, r.jsx)(T, S(y({}, e), {
            invite: t
          }));
        default:
          return (0, r.jsx)(C, {})
      }
    })(n)
  }))
}

function R(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: i
  } = null != t ? t : {}, s = {};
  if ((null == i ? true : i.splash) != null) {
    let e = f.ZP.getGuildSplashURL({
      id: i.id,
      splash: i.splash
    });
    null != e && (s.backgroundImage = "url(".concat(e, ")"), s.backgroundSize = "cover")
  }
  return (0, r.jsxs)(d.ZP, {
    theme: b.BRd.DARK,
    className: N.splashBackground,
    style: s,
    contentClassName: N.centerAuthBoxContent,
    children: [(0, r.jsx)(P, S(y({}, e), {
      onAcceptInvite: n
    })), (0, r.jsx)(Z, y({}, e))]
  })
}

function L(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, s = (0, l.e7)([m.Z], () => m.Z.getInvite(t));
  return i.useEffect(() => {
    (0, h.e)("invite_mobile")
  }, []), i.useEffect(() => {
    null != s && s.state === b.r2o.RESOLVED && p.default.track(b.rMx.INVITE_VIEWED, {
      invite_code: t,
      friends_count: null == s ? true : s.friends_count
    }, {
      flush: true
    })
  }, [s, t]), (0, r.jsx)(R, {
    invite: s,
    onAcceptInvite: e => {
      ! function(e, t, n) {
        var r, i, s;
        null == e || e.preventDefault(), p.default.track(b.rMx.INVITE_APP_OPENED, {
          invite_code: (0, x.jX)(t),
          guild_id: null == n || null == (r = n.guild) ? true : r.id,
          channel_id: null == n || null == (i = n.channel) ? true : i.id,
          inviter_id: null == n || null == (s = n.inviter) ? true : s.id
        });
        let l = null != n && n.state !== b.r2o.EXPIRED && n.state !== b.r2o.BANNED ? t : true,
          a = g.default.getFingerprint(),
          c = null != a ? a : g.default.getId(),
          u = null != n && (null == n ? true : n.type) != null ? Number(null == n ? true : n.type) : true;
        o.ZP.openApp(l, true, c, true, u)
      }(e, t, s)
    },
    transitionTo: n
  })
}