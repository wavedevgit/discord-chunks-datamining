/** Chunk was on web.js **/
/** chunk id: 644956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk335615 = require("./335615.jsx"),
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
  Chunk960324 = require("./960324.js"),
  Chunk325842 = require("./325842.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
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

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = (0, Chunk818083.B)({
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

function F(e) {
  let {
    member: t,
    guildId: a,
    channelId: o,
    role: s
  } = e, c = i.useRef(null), u = (0, l.e7)([R.Z], () => {
    var e;
    return null == (e = R.Z.getGuild(a)) ? true : e.ownerId
  }, [a]), p = (0, l.e7)([w.default], () => w.default.getUser(t.userId), [t.userId]), _ = (0, l.e7)([A.Z], () => A.Z.getChannel(o), [o]);
  return null == p || null == _ ? null : (0, r.jsx)(T.Z, {
    targetElementRef: c,
    userId: t.userId,
    guildId: a,
    channelId: o,
    roleId: s.id,
    spacing: 14,
    children: (e, i) => {
      let {
        isShown: o
      } = i;
      return (0, r.jsx)(f.Z, k({
        ref: c,
        selected: o,
        colorString: t.colorString,
        colorStrings: t.colorStrings,
        colorRoleName: s.name,
        user: p,
        isOwner: t.userId === u,
        nick: t.nick,
        premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
        channel: _,
        guildId: a,
        onContextMenu: e => {
          (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("4040"), n.e("6915"), n.e("92524"), n.e("7717"), n.e("75548")]).then(n.bind(n, 757387));
            return t => (0, r.jsx)(e, G(k({}, t), {
              user: p,
              guildId: a,
              channel: _,
              showMediaItems: true
            }))
          })
        }
      }, e), t.userId)
    }
  }, t.userId)
}

function B(e) {
  let {
    popoutProps: t,
    roleId: n,
    guildId: a,
    channelId: s
  } = e, d = i.useRef(null);
  (0, p.ZP)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, d.current)
  }), (0, p.zq)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, null)
  });
  let f = (0, y.Z)(a),
    _ = (0, l.e7)([R.Z], () => {
      let e = R.Z.getGuild(a);
      return null == e ? null : (0, C.lV)(e)
    }, [a]),
    m = (0, l.Wu)([N.ZP, w.default], () => {
      let e = N.ZP.getMembers(a),
        t = null == n || n === _ ? e : e.filter(e => e.roles.includes(n));
      return o()(t).filter(e => null != w.default.getUser(e.userId)).sortBy(e => {
        var t;
        return null != (t = e.nick) ? t : D.ZP.getName(w.default.getUser(e.userId))
      }).value()
    }, [a, n, _]),
    h = (0, l.e7)([P.Z], () => {
      let e = null != n ? n : _;
      return null == e ? null : P.Z.getRole(a, e)
    }, [a, n, _]),
    b = null == n ? null : null == f ? true : f[n],
    O = i.useMemo(() => null != h ? m.map(e => (0, r.jsx)(F, {
      member: e,
      guildId: a,
      channelId: s,
      role: h
    }, e.userId)) : [], [s, a, h, m]);
  return null == h ? null : (0, r.jsx)(c.d.Provider, {
    value: true,
    children: (0, r.jsx)("div", G(k({
      className: L.rolePopout,
      ref: d
    }, t), {
      children: (0, r.jsxs)(u.Ttm, {
        className: L.roleScroller,
        children: [(0, r.jsx)(g.Z, {
          id: n,
          guildId: a,
          title: h.name,
          count: b,
          className: L.roleHeader
        }), O, null == b || b <= O.length ? null : (0, r.jsx)(E.Z, {
          className: L.roleHeader,
          children: x.intl.formatToPlainString(x.t["9oMmZC"], {
            count: b - O.length
          })
        })]
      })
    }))
  })
}

function V(e) {
  let {
    roleId: t,
    channelId: n,
    roleName: a,
    guildId: o,
    children: c,
    inlinePreview: d = false
  } = e, {
    analyticsLocations: f
  } = (0, h.ZP)(m.Z.ROLE_MENTION), p = (0, l.e7)([_.Z], () => _.Z.roleStyle), g = (0, l.e7)([P.Z], () => null == o || null == t ? null : P.Z.getRole(o, t)), E = (0, I.yH)(o, g), b = !d && null != g && !(0, S.Gr)(g), y = b && "dot" === p, T = b && "username" === p, C = E && null != g ? g.colorStrings : null, A = i.useRef(null), N = e => (0, r.jsxs)(v.Z, G(k({
    ref: A,
    className: L.roleMention,
    color: T ? g.color : null,
    roleColors: T ? C : null
  }, e), {
    children: [y && null != g.color && (0, r.jsx)(u.FhE, {
      color: (0, s.Rf)(g.color),
      colors: C,
      className: j.roleDot,
      background: false,
      tooltip: false
    }), c]
  })), {
    enabled: R
  } = Z.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: false
  });
  return !R || d || null == n || null == o || null == t && "@everyone" !== a ? (0, r.jsx)(h.Gt, {
    value: f,
    children: N()
  }) : (0, r.jsx)(h.Gt, {
    value: f,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: A,
      preload: async () => {
        null != t && await (0, O.H)(o, t)
      },
      renderPopout: e => (0, r.jsx)(B, {
        guildId: o,
        channelId: n,
        roleId: t,
        popoutProps: e
      }),
      position: "right",
      children: N
    })
  })
}