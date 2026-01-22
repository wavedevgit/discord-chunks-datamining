/** Chunk was on 94503 **/
/** chunk id: 586387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => U
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk316031 = require("./316031.js"),
  Chunk991982 = require("./991982.jsx"),
  Chunk838111 = require("./838111.js"),
  Chunk351001 = require("./351001.js"),
  Chunk504049 = require("./504049.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk743981 = require("./743981.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk186891 = require("./186891.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    user: t,
    guildId: n,
    onClose: r
  } = e, a = t.id, s = (0, i.bG)([m.A, N.A, f.default], () => a === f.default.getId() ? m.A.getStatus() : N.A.getStatus(a, n), [a, n]);
  return (0, l.jsxs)("div", {
    className: L.mY,
    children: [(0, l.jsxs)("div", {
      className: L.FD,
      children: [(0, l.jsx)("div", {
        className: L.Wn,
        children: (0, l.jsx)(o.euF, {
          src: t.getAvatarURL(n, 48),
          "aria-label": t.username,
          size: o._3J.SIZE_48,
          status: s
        })
      }), (0, l.jsxs)("div", {
        className: L.oS,
        children: [(0, l.jsxs)("div", {
          className: L.K$,
          children: [(0, l.jsx)(o.Text, {
            variant: "text-lg/medium",
            children: (0, l.jsx)(o.gyj, {
              name: b.Ay.getName(n, null, t),
              colorString: o.LU0.colors.TEXT_STRONG.css,
              colorStrings: null
            })
          }), (0, l.jsx)(T.Ay, {
            primaryGuild: null == t ? true : t.primaryGuild,
            userId: null == t ? true : t.id,
            contextGuildId: n,
            badgeSize: R.Sl.SIZE_16,
            textVariant: "heading-md/semibold",
            className: L.Dz,
            containerClassName: L.UL
          })]
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: G.Ay.getUserTag(t)
        })]
      })]
    }), (0, l.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: (0, l.jsx)(o.DUT, {
        className: L.d4,
        onClick: r,
        children: (0, l.jsx)(o.PGe, {
          size: "md",
          color: "currentColor"
        })
      })
    })]
  })
}

function v(e) {
  let {
    tag: t = "div",
    text: n,
    disabled: r,
    children: i,
    onClick: c
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, l, r, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          a = Object.getOwnPropertyNames(e);
        for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
    return a
  }(e, ["tag", "text", "disabled", "children", "onClick"]);
  return (0, l.jsx)(s.m, {
    text: n,
    children: (0, l.jsx)(o.DUT, C(x({}, u), {
      tag: t,
      "aria-label": n,
      className: a()(L.YB, {
        [L.aA]: r
      }),
      onClick: r ? true : c,
      children: (0, l.jsx)("div", {
        className: L.MU,
        children: i
      })
    }))
  })
}

function j(e) {
  let {
    user: t,
    member: r,
    guildId: a,
    moderatorReportId: s
  } = e, T = (0, i.bG)([I.A], () => I.A.getGuild(a)), {
    canKickUser: h,
    canBanUser: N,
    canModerateMembers: m
  } = (0, i.cf)([O.A, S.default, I.A], () => ({
    canKickUser: (0, g.L7)(t, T),
    canBanUser: (0, g.EZ)(t, T),
    canModerateMembers: null != T && (0, _.b)(T.id, t.id, [S.default, I.A, O.A])
  }), [t, T]), b = (0, E.Z)(r), {
    analyticsLocations: G,
    newestAnalyticsLocation: R
  } = (0, u.Ay)(), M = (0, A.$9)(a, {
    targetUserId: t.id,
    location: R,
    locations: G
  }), j = (0, i.bG)([f.default], () => f.default.getId() === (null == t ? true : t.id));
  return (0, l.jsxs)("div", {
    className: L.E_,
    children: [(0, l.jsx)(v, {
      disabled: j,
      text: D.intl.string(D.t["g33r/P"]),
      onClick: () => {
        c.A.openPrivateChannel({
          recipientIds: t.id
        })
      },
      children: (0, l.jsx)(o.oyn, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
      })
    }), (0, l.jsx)(v, {
      disabled: !h,
      text: D.intl.string(D.t["3glT6Z"]),
      onClick: () => {
        (0, o.mMO)(async () => {
          let {
            default: e
          } = await n.e("40243").then(n.bind(n, 324785));
          return n => (0, l.jsx)(e, C(x({}, n), {
            location: R,
            guildId: a,
            user: t,
            modReportId: s
          }))
        })
      },
      children: (0, l.jsx)(o.Nxw, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.LU0.colors.TEXT_DEFAULT.css
      })
    }), (0, l.jsx)(v, {
      disabled: !N,
      text: D.intl.string(D.t["5MBJ5M"]),
      onClick: () => {
        (0, o.mMO)(async () => {
          let {
            default: e
          } = await n.e("2504").then(n.bind(n, 333179));
          return n => (0, l.jsx)(e, C(x({}, n), {
            location: R,
            guildId: a,
            user: t,
            modReportId: s
          }))
        })
      },
      children: (0, l.jsx)(o.wI0, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.LU0.colors.TEXT_DEFAULT.css
      })
    }), (0, l.jsx)(v, {
      disabled: !m,
      text: b ? D.intl.string(D.t.N86XcP) : D.intl.string(D.t.kTlLrz),
      onClick: () => {
        b ? (0, d.Y)({
          guildId: r.guildId,
          userId: r.userId,
          anaylticsLocations: G
        }) : (0, d.R)({
          guildId: r.guildId,
          userId: r.userId,
          anaylticsLocations: G,
          modReportId: s
        })
      },
      children: (0, l.jsx)(o.gQi, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.LU0.colors.TEXT_DEFAULT.css
      })
    }), (0, l.jsx)(v, {
      text: D.intl.string(D.t.IHTjzA),
      onClick: () => {
        M(A.Nj.COPY_ID), (0, p.C)(t.id)
      },
      disabled: !p.p5,
      children: (0, l.jsx)(o.L9S, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.LU0.colors.TEXT_DEFAULT.css
      })
    })]
  })
}

function U(e) {
  let {
    userId: t,
    guildId: n,
    onClose: r,
    moderatorReportId: a
  } = e, s = (0, i.bG)([S.default], () => S.default.getUser(t), [t]), o = (0, i.bG)([h.Ay], () => h.Ay.getMember(n, t), [n, t]);
  return null == s || null == o ? null : (0, l.jsxs)("div", {
    className: L.kL,
    children: [(0, l.jsx)(M, {
      user: s,
      guildId: n,
      onClose: r
    }), (0, l.jsx)(j, {
      user: s,
      member: o,
      guildId: n,
      moderatorReportId: a
    })]
  })
}