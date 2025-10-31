/** Chunk was on web.js **/
/** chunk id: 644956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
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

function B(e) {
  let {
    member: t,
    guildId: a,
    channelId: o,
    role: s
  } = e, c = i.useRef(null), u = (0, l.e7)([R.Z], () => {
    var e;
    return null == (e = R.Z.getGuild(a)) ? true : e.ownerId
  }, [a]), _ = (0, l.e7)([P.default], () => P.default.getUser(t.userId), [t.userId]), p = (0, l.e7)([A.Z], () => A.Z.getChannel(o), [o]);
  return null == _ || null == p ? null : (0, r.jsx)(T.Z, {
    targetElementRef: c,
    userId: t.userId,
    guildId: a,
    channelId: o,
    roleId: s.id,
    spacing: 14,
    clickTrap: true,
    children: (e, i) => {
      let {
        isShown: o
      } = i;
      return (0, r.jsx)(f.Z, j({
        ref: c,
        selected: o,
        colorString: t.colorString,
        colorStrings: t.colorStrings,
        colorRoleName: s.name,
        user: _,
        isOwner: t.userId === u,
        nick: t.nick,
        premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
        channel: p,
        guildId: a,
        onContextMenu: e => {
          (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("98783"), n.e("6915"), n.e("8982"), n.e("7717"), n.e("20037")]).then(n.bind(n, 757387));
            return t => (0, r.jsx)(e, U(j({}, t), {
              user: _,
              guildId: a,
              channel: p,
              showMediaItems: true
            }))
          })
        }
      }, e), t.userId)
    }
  }, t.userId)
}

function Z(e) {
  let {
    popoutProps: t,
    roleId: n,
    guildId: a,
    channelId: s
  } = e, d = i.useRef(null);
  (0, _.ZP)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, d.current)
  }), (0, _.zq)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, null)
  });
  let f = (0, b.Z)(a),
    p = (0, l.e7)([R.Z], () => {
      let e = R.Z.getGuild(a);
      return null == e ? null : (0, S.lV)(e)
    }, [a]),
    h = (0, l.Wu)([C.ZP, P.default], () => {
      let e = C.ZP.getMembers(a),
        t = null == n || n === p ? e : e.filter(e => e.roles.includes(n));
      return o()(t).filter(e => null != P.default.getUser(e.userId)).sortBy(e => {
        var t;
        return null != (t = e.nick) ? t : w.ZP.getName(P.default.getUser(e.userId))
      }).value()
    }, [a, n, p]),
    m = (0, l.e7)([N.Z], () => {
      let e = null != n ? n : p;
      return null == e ? null : N.Z.getRole(a, e)
    }, [a, n, p]),
    E = null == n ? null : null == f ? true : f[n],
    y = i.useMemo(() => null != m ? h.map(e => (0, r.jsx)(B, {
      member: e,
      guildId: a,
      channelId: s,
      role: m
    }, e.userId)) : [], [s, a, m, h]);
  if (null == m) return null;
  let O = null == E ? m.name : D.intl.formatToPlainString(D.t.CuAQkJ, {
    title: m.name,
    count: E
  });
  return (0, r.jsx)(c.d.Provider, {
    value: true,
    children: (0, r.jsx)("div", U(j({
      className: x.rolePopout,
      ref: d
    }, t), {
      children: (0, r.jsxs)(u.Ttm, {
        className: x.roleScroller,
        children: [(0, r.jsx)(g.Z, {
          className: x.roleHeader,
          "aria-label": D.intl.formatToPlainString(D.t.Uaqbke, {
            title: m.name,
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

function F(e) {
  let {
    roleId: t,
    channelId: n,
    roleName: a,
    guildId: o,
    children: c,
    inlinePreview: d = false
  } = e, {
    analyticsLocations: f
  } = (0, m.ZP)(h.Z.ROLE_MENTION), _ = (0, l.e7)([p.Z], () => p.Z.roleStyle), g = (0, l.e7)([N.Z], () => null == o || null == t ? null : N.Z.getRole(o, t)), E = (0, I.yH)(o, g), b = !d && null != g && !(0, v.Gr)(g), T = b && "dot" === _, S = b && "username" === _, A = E && null != g ? g.colorStrings : null, C = i.useRef(null), R = e => (0, r.jsxs)(O.Z, U(j({
    ref: C,
    className: x.roleMention,
    color: S ? g.color : null,
    roleColors: S ? A : null
  }, e), {
    children: [T && null != g.color && (0, r.jsx)(u.FhE, {
      color: (0, s.Rf)(g.color),
      colors: A,
      className: L.roleDot,
      background: false,
      tooltip: false
    }), c]
  })), {
    enabled: P
  } = G.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: false
  });
  return !P || d || null == n || null == o || null == t && "@everyone" !== a ? (0, r.jsx)(m.Gt, {
    value: f,
    children: R()
  }) : (0, r.jsx)(m.Gt, {
    value: f,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: C,
      preload: async () => {
        null != t && await (0, y.H)(o, t)
      },
      renderPopout: e => (0, r.jsx)(Z, {
        guildId: o,
        channelId: n,
        roleId: t,
        popoutProps: e
      }),
      position: "right",
      children: R
    })
  })
}