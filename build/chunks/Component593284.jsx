/** Chunk was on web.js **/
/** chunk id: 593284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk473193 = require("./473193.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk110574 = require("./110574.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk991275 = require("./991275.jsx"),
  Chunk485947 = require("./485947.jsx"),
  Chunk600975 = require("./600975.js"),
  Chunk386784 = require("./386784.js"),
  Chunk545868 = require("./545868.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk176201 = require("./176201.js"),
  Chunk676608 = require("./676608.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk206314 = require("./206314.js"),
  Chunk377086 = require("./377086.js");

function j(e, t, n) {
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
      j(e, t, n[t])
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
let F = (0, Chunk600975.C)({
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

function V(e) {
  let {
    member: t,
    guildId: a,
    channelId: o,
    role: s
  } = e, c = i.useRef(null), u = (0, l.bG)([R.A], () => {
    var e;
    return null == (e = R.A.getGuild(a)) ? true : e.ownerId
  }, [a]), p = (0, l.bG)([P.default], () => P.default.getUser(t.userId), [t.userId]), _ = (0, l.bG)([C.A], () => C.A.getChannel(o), [o]);
  return null == p || null == _ ? null : (0, r.jsx)(S.A, {
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
      return (0, r.jsx)(f.A, k({
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
          (0, d.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("54809"), n.e("97262"), n.e("3795"), n.e("29534"), n.e("97283"), n.e("33818"), n.e("55296"), n.e("84841"), n.e("2016")]).then(n.bind(n, 107632));
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
  (0, p.Ay)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, d.current)
  }), (0, p.l0)(() => {
    var e;
    null == (e = t.setPopoutRef) || e.call(t, null)
  });
  let f = (0, b.A)(a),
    _ = (0, l.bG)([R.A], () => {
      let e = R.A.getGuild(a);
      return null == e ? null : (0, T.af)(e)
    }, [a]),
    h = (0, l.yK)([N.Ay, P.default], () => {
      let e = N.Ay.getMembers(a),
        t = null == n || n === _ ? e : e.filter(e => e.roles.includes(n));
      return o()(t).filter(e => null != P.default.getUser(e.userId)).sortBy(e => {
        var t;
        return null != (t = e.nick) ? t : D.Ay.getName(P.default.getUser(e.userId))
      }).value()
    }, [a, n, _]),
    m = (0, l.bG)([w.A], () => {
      let e = null != n ? n : _;
      return null == e ? null : w.A.getRole(a, e)
    }, [a, n, _]),
    y = null == n ? null : null == f ? true : f[n],
    O = i.useMemo(() => null != m ? h.map(e => (0, r.jsx)(V, {
      member: e,
      guildId: a,
      channelId: s,
      role: m
    }, e.userId)) : [], [s, a, m, h]);
  return null == m ? null : (0, r.jsx)(c.C.Provider, {
    value: true,
    children: (0, r.jsx)("div", G(k({
      className: x.qm,
      ref: d
    }, t), {
      children: (0, r.jsxs)(u.HOs, {
        className: x.bY,
        children: [(0, r.jsx)(g.Y, {
          id: n,
          guildId: a,
          title: m.name,
          count: y,
          className: x.sd
        }), O, null == y || y <= O.length ? null : (0, r.jsx)(E.A, {
          className: x.sd,
          children: L.intl.formatToPlainString(L.t["9oMmZC"], {
            count: y - O.length
          })
        })]
      })
    }))
  })
}

function H(e) {
  let {
    roleId: t,
    channelId: n,
    roleName: a,
    guildId: o,
    children: c,
    inlinePreview: d = false
  } = e, {
    analyticsLocations: f
  } = (0, m.Ay)(h.A.ROLE_MENTION), p = (0, l.bG)([_.A], () => _.A.roleStyle), g = (0, l.bG)([w.A], () => null == o || null == t ? null : w.A.getRole(o, t)), E = (0, I.jV)(o, g), y = !d && null != g && !(0, A.Qv)(g), b = y && "dot" === p, S = y && "username" === p, T = E && null != g ? g.colorStrings : null, C = i.useRef(null), N = e => (0, r.jsxs)(v.A, G(k({
    ref: C,
    className: x.Dz,
    color: S ? g.color : null,
    roleColors: S ? T : null
  }, e), {
    children: [b && null != g.color && (0, r.jsx)(u.WYI, {
      color: (0, s.Hl)(g.color),
      colors: T,
      className: M.m,
      background: false,
      tooltip: false
    }), c]
  })), {
    enabled: R
  } = F.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: false
  });
  return !R || d || null == n || null == o || null == t && "@everyone" !== a ? (0, r.jsx)(m.f5, {
    value: f,
    children: N()
  }) : (0, r.jsx)(m.f5, {
    value: f,
    children: (0, r.jsx)(u.YNO, {
      targetElementRef: C,
      preload: async () => {
        null != t && await (0, O.a)(o, t)
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