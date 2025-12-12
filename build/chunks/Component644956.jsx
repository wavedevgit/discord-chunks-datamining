/** Chunk was on web.js **/
/** chunk id: 644956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk573385 = require("./573385.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk82295 = require("./82295.jsx"),
  Chunk818083 = require("./818083.js"),
  Chunk14263 = require("./14263.js"),
  Chunk480608 = require("./480608.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430864 = require("./430864.js"),
  Chunk329072 = require("./329072.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = (0, Chunk818083.B)({
  kind: "user",
  id: "2021-07_role_popout",
  label: "Role Popout",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Popout",
    config: {
      enabled: true
    }
  }]
});

function Z(e) {
  let {
    member: t,
    guildId: o,
    channelId: a,
    role: s
  } = e, c = i.useRef(null), u = (0, l.e7)([P.Z], () => {
    var e;
    return null == (e = P.Z.getGuild(o)) ? true : e.ownerId
  }, [o]), p = (0, l.e7)([R.default], () => R.default.getUser(t.userId), [t.userId]), _ = (0, l.e7)([C.Z], () => C.Z.getChannel(a), [a]);
  return null == p || null == _ ? null : (0, r.jsx)(I.Z, {
    targetElementRef: c,
    userId: t.userId,
    guildId: o,
    channelId: a,
    roleId: s.id,
    spacing: 14,
    clickTrap: true,
    children: (e, i) => {
      let {
        isShown: a
      } = i;
      return (0, r.jsx)(f.Z, M({
        ref: c,
        selected: a,
        colorString: t.colorString,
        colorStrings: t.colorStrings,
        colorRoleName: s.name,
        user: p,
        isOwner: t.userId === u,
        nick: t.nick,
        premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
        channel: _,
        guildId: o,
        onContextMenu: e => {
          (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("66165"), n.e("6915"), n.e("8982"), n.e("7717"), n.e("20037")]).then(n.bind(n, 757387));
            return t => (0, r.jsx)(e, U(M({}, t), {
              user: p,
              guildId: o,
              channel: _,
              showMediaItems: true
            }))
          })
        }
      }, e), t.userId)
    }
  }, t.userId)
}

function F(e) {
  let {
    popoutProps: t,
    roleId: n,
    guildId: o,
    channelId: s
  } = e, d = i.useRef(null);
  (0, p.ZP)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, d.current)
  }), (0, p.zq)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, null)
  });
  let f = (0, b.Z)(o),
    _ = (0, l.e7)([P.Z], () => {
      let e = P.Z.getGuild(o);
      return null == e ? null : (0, T.lV)(e)
    }, [o]),
    m = (0, l.Wu)([A.ZP, R.default], () => {
      let e = A.ZP.getMembers(o),
        t = null == n || n === _ ? e : e.filter(e => e.roles.includes(n));
      return a()(t).filter(e => null != R.default.getUser(e.userId)).sortBy(e => {
        var t;
        return null != (t = e.nick) ? t : w.ZP.getName(R.default.getUser(e.userId))
      }).value()
    }, [o, n, _]),
    h = (0, l.e7)([N.Z], () => {
      let e = null != n ? n : _;
      return null == e ? null : N.Z.getRole(o, e)
    }, [o, n, _]),
    E = null == n ? null : null == f ? true : f[n],
    y = i.useMemo(() => null != h ? m.map(e => (0, r.jsx)(Z, {
      member: e,
      guildId: o,
      channelId: s,
      role: h
    }, e.userId)) : [], [s, o, h, m]);
  if (null == h) return null;
  let O = null == E ? h.name : D.intl.formatToPlainString(D.t.CuAQkJ, {
    title: h.name,
    count: E
  });
  return (0, r.jsx)(c.d.Provider, {
    value: true,
    children: (0, r.jsx)("div", U(M({
      className: x.rolePopout,
      ref: d
    }, t), {
      children: (0, r.jsxs)(u.Ttm, {
        className: x.roleScroller,
        children: [(0, r.jsx)(g.Z, {
          className: x.roleHeader,
          "aria-label": D.intl.formatToPlainString(D.t.Uaqbke, {
            title: h.name,
            count: y.length
          }),
          children: (0, r.jsx)("span", {
            "aria-hidden": true,
            children: O
          })
        }), y, null == E || E <= y.length ? null : (0, r.jsx)(g.Z, {
          className: x.roleHeader,
          children: D.intl.formatToPlainString(D.t["9oMmZC"], {
            count: E - y.length
          })
        })]
      })
    }))
  })
}

function B(e) {
  let {
    roleId: t,
    channelId: n,
    roleName: o,
    guildId: a,
    children: c,
    inlinePreview: d = false
  } = e, {
    analyticsLocations: f
  } = (0, h.ZP)(m.Z.ROLE_MENTION), p = (0, l.e7)([_.Z], () => _.Z.roleStyle), g = (0, l.e7)([N.Z], () => null == a || null == t ? null : N.Z.getRole(a, t)), E = (0, S.yH)(a, g), b = !d && null != g && !(0, v.Gr)(g), I = b && "dot" === p, T = b && "username" === p, C = E && null != g ? g.colorStrings : null, A = i.useRef(null), P = e => (0, r.jsxs)(O.Z, U(M({
    ref: A,
    className: x.roleMention,
    color: T ? g.color : null,
    roleColors: T ? C : null
  }, e), {
    children: [I && null != g.color && (0, r.jsx)(u.FhE, {
      color: (0, s.Rf)(g.color),
      colors: C,
      className: L.roleDot,
      background: false,
      tooltip: false
    }), c]
  })), {
    enabled: R
  } = G.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: false
  });
  return !R || d || null == n || null == a || null == t && "@everyone" !== o ? (0, r.jsx)(h.Gt, {
    value: f,
    children: P()
  }) : (0, r.jsx)(h.Gt, {
    value: f,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: A,
      preload: async () => {
        null != t && await (0, y.H)(a, t)
      },
      renderPopout: e => (0, r.jsx)(F, {
        guildId: a,
        channelId: n,
        roleId: t,
        popoutProps: e
      }),
      position: "right",
      children: P
    })
  })
}