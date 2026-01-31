/** Chunk was on 86142 **/
/** chunk id: 614986, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk900662 = require("./900662.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk299091 = require("./299091.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk21599 = require("./21599.js"),
  Chunk949155 = require("./949155.jsx"),
  Chunk663572 = require("./663572.jsx"),
  Chunk131929 = require("./131929.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk446160 = require("./446160.js");

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

function I(e, t) {
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

function S() {
  return (0, r.jsx)("div", {
    className: j.$k,
    children: (0, r.jsx)(a.y$y, {})
  })
}
let N = e => {
  let t = (null == e ? true : e.state) == null && (null == e ? true : e.channel) == null;
  if (null == e || null == e.state || t) return 0;
  let n = e.state;
  switch (n) {
    case y.elq.RESOLVED:
    case y.elq.ACCEPTED:
    case y.elq.APP_NOT_OPENED:
    case y.elq.APP_OPENED:
    case y.elq.ACCEPTING:
    case y.elq.APP_OPENING:
      return 1;
    case y.elq.EXPIRED:
    case y.elq.BANNED:
    case y.elq.ERROR:
      return 2;
    case y.elq.RESOLVING:
      return 0;
    default:
      (0, m.xb)(n)
  }
};

function C(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  return (null == t ? true : t.state) === y.elq.BANNED ? (0, r.jsx)(c.N, {
    text: b.intl.string(b.t["5AkWAd"]),
    buttonCta: b.intl.string(b.t["8osdkn"]),
    onClick: n
  }) : (0, r.jsx)(c.N, {
    text: b.intl.string(b.t["usP+Mb"]),
    buttonCta: b.intl.string(b.t["8osdkn"]),
    onClick: n
  })
}

function T(e) {
  let {
    children: t,
    cardChildren: n,
    startAnimHeightPx: l,
    innerStyle: o
  } = e, {
    invite: c
  } = function(e, t) {
    if (null == e) return {};
    var n, r, i, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.getOwnPropertyNames(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    return s
  }(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]), [d, h] = i.useState(N(c)), {
    ref: p,
    height: g
  } = (0, u.Ay)(), f = (0, a.zhh)({
    height: null != g && 0 !== g ? "".concat(g, "px") : "".concat(l, "px"),
    config: s.config.stiff
  });
  return i.useEffect(() => {
    let e = N(c);
    e !== d && h(e)
  }, [c, d]), (0, r.jsxs)(s.animated.div, {
    className: j.qF,
    style: f,
    children: [(0, r.jsx)(s.animated.div, {
      className: j.NS,
      style: f,
      children: (0, r.jsx)("section", {
        ref: p,
        className: null == o ? true : o(d),
        children: t(d)
      })
    }), n]
  })
}

function R(e) {
  let {
    invite: t
  } = e;
  return null != t && (0, x.Fk)(t) ? (0, r.jsx)(T, I(O({
    startAnimHeightPx: 0,
    innerStyle: () => j.ui
  }, e), {
    children: e => null == t ? null : 1 === e ? (0, r.jsx)(v.s, {
      invite: t
    }) : null
  })) : null
}

function w(e) {
  let {
    invite: t
  } = e, n = {
    1: j._r,
    2: j.Gm,
    0: j.Kt
  };
  return (0, r.jsx)(T, I(O({
    startAnimHeightPx: 200,
    innerStyle: e => n[e]
  }, e), {
    children: n => (n => {
      if (null == t) return (0, r.jsx)(S, {});
      switch (n) {
        case 1:
          return (0, r.jsx)(E.A, I(O({}, e), {
            invite: t
          }));
        case 2:
          return (0, r.jsx)(C, I(O({}, e), {
            invite: t
          }));
        default:
          return (0, r.jsx)(S, {})
      }
    })(n)
  }))
}

function P(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: i
  } = null != t ? t : {}, s = {};
  if ((null == i ? true : i.splash) != null) {
    let e = _.Ay.getGuildSplashURL({
      id: i.id,
      splash: i.splash
    });
    null != e && (s.backgroundImage = "url(".concat(e, ")"), s.backgroundSize = "cover")
  }
  return (0, r.jsxs)(d.Ay, {
    theme: y.NJ8.DARK,
    className: j.G3,
    style: s,
    contentClassName: j.__,
    children: [(0, r.jsx)(w, I(O({}, e), {
      onAcceptInvite: n
    })), (0, r.jsx)(R, O({}, e))]
  })
}

function k(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, s = (0, l.bG)([g.A], () => g.A.getInvite(t));
  return i.useEffect(() => {
    (0, h.d)("invite_mobile"), f.default.track(y.HAw.INVITE_VIEWED, {
      invite_code: t
    }, {
      flush: true
    })
  }, []), (0, r.jsx)(P, {
    invite: s,
    onAcceptInvite: e => {
      var n, r, i;
      let l, a, c, u;
      null == e || e.preventDefault(), f.default.track(y.HAw.INVITE_APP_OPENED, {
        invite_code: (0, A.m0)(t),
        guild_id: null == s || null == (n = s.guild) ? true : n.id,
        channel_id: null == s || null == (r = s.channel) ? true : r.id,
        inviter_id: null == s || null == (i = s.inviter) ? true : i.id
      }), l = null != s && s.state !== y.elq.EXPIRED && s.state !== y.elq.BANNED ? t : true, c = null != (a = p.default.getFingerprint()) ? a : p.default.getId(), u = null != s && (null == s ? true : s.type) != null ? Number(null == s ? true : s.type) : true, o.Ay.openApp(l, true, c, true, u)
    },
    transitionTo: n
  })
}