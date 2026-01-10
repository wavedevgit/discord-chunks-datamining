/** Chunk was on 69937 **/
/** chunk id: 327250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk69882 = require("./69882.js"),
  Chunk251794 = require("./251794.jsx"),
  Chunk386696 = require("./386696.js"),
  Chunk946273 = require("./946273.js"),
  Chunk910693 = require("./910693.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk433110 = require("./433110.js");

function U(e) {
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

function M(e, t) {
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

function v(e) {
  let {
    user: t,
    guildId: n,
    onClose: l
  } = e, i = t.id, s = (0, a.e7)([O.Z, N.Z, g.default], () => i === g.default.getId() ? O.Z.getStatus() : N.Z.getStatus(i, n), [i, n]);
  return (0, r.jsxs)("div", {
    className: L.topRow,
    children: [(0, r.jsxs)("div", {
      className: L.memberNameContainer,
      children: [(0, r.jsx)("div", {
        className: L.memberAvatar,
        children: (0, r.jsx)(o.qEK, {
          src: t.getAvatarURL(n, 48),
          "aria-label": t.username,
          size: o.EFr.SIZE_48,
          status: s
        })
      }), (0, r.jsxs)("div", {
        className: L.memberNameAndTagContainer,
        children: [(0, r.jsxs)("div", {
          className: L.memberNameTextContainer,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-lg/medium",
            children: (0, r.jsx)(o.PUh, {
              name: S.ZP.getName(n, null, t),
              colorString: o.TVs.colors.TEXT_STRONG.css,
              colorStrings: null
            })
          }), (0, r.jsx)(T.ZP, {
            primaryGuild: null == t ? true : t.primaryGuild,
            userId: null == t ? true : t.id,
            contextGuildId: n,
            badgeSize: b.Gg.SIZE_16,
            textVariant: "heading-md/semibold",
            className: L.memberClanTag,
            containerClassName: L.memberClanTagContainer
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: C.ZP.getUserTag(t)
        })]
      })]
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: (0, r.jsx)(o.P3F, {
        className: L.closeAction,
        onClick: l,
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor"
        })
      })
    })]
  })
}

function x(e) {
  var {
    tag: t = "div",
    text: n,
    disabled: l,
    children: a,
    onClick: c
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["tag", "text", "disabled", "children", "onClick"]);
  return (0, r.jsx)(s.u, {
    text: n,
    children: (0, r.jsx)(o.P3F, M(U({}, u), {
      tag: t,
      "aria-label": n,
      className: i()(L.bottomRowAction, {
        [L.bottomRowActionDisabled]: l
      }),
      onClick: l ? true : c,
      children: (0, r.jsx)("div", {
        className: L.innerBottomRowAction,
        children: a
      })
    }))
  })
}

function P(e) {
  let {
    user: t,
    member: l,
    guildId: i,
    moderatorReportId: s
  } = e, T = (0, a.e7)([m.Z], () => m.Z.getGuild(i)), {
    canKickUser: I,
    canBanUser: N,
    canModerateMembers: O
  } = (0, a.cj)([h.Z, p.default, m.Z], () => ({
    canKickUser: (0, A.BK)(t, T),
    canBanUser: (0, A.mm)(t, T),
    canModerateMembers: null != T && (0, _.F)(T.id, t.id, [p.default, m.Z, h.Z])
  }), [t, T]), S = (0, d.b)(l), {
    analyticsLocations: C,
    newestAnalyticsLocation: b
  } = (0, u.ZP)(), v = (0, f.sE)(i, {
    targetUserId: t.id,
    location: b,
    locations: C
  }), P = (0, a.e7)([g.default], () => g.default.getId() === (null == t ? true : t.id));
  return (0, r.jsxs)("div", {
    className: L.bottomRow,
    children: [(0, r.jsx)(x, {
      disabled: P,
      text: D.intl.string(D.t["g33r/P"]),
      onClick: () => {
        c.Z.openPrivateChannel({
          recipientIds: t.id
        })
      },
      children: (0, r.jsx)(o.kBi, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
      })
    }), (0, r.jsx)(x, {
      disabled: !I,
      text: D.intl.string(D.t["3glT6Z"]),
      onClick: () => {
        (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("79939").then(n.bind(n, 495494));
          return n => (0, r.jsx)(e, M(U({}, n), {
            location: b,
            guildId: i,
            user: t,
            modReportId: s
          }))
        })
      },
      children: (0, r.jsx)(o.I9k, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, r.jsx)(x, {
      disabled: !N,
      text: D.intl.string(D.t["5MBJ5M"]),
      onClick: () => {
        (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("18910").then(n.bind(n, 497880));
          return n => (0, r.jsx)(e, M(U({}, n), {
            location: b,
            guildId: i,
            user: t,
            modReportId: s
          }))
        })
      },
      children: (0, r.jsx)(o.pgN, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, r.jsx)(x, {
      disabled: !O,
      text: S ? D.intl.string(D.t.N86XcP) : D.intl.string(D.t.kTlLrz),
      onClick: () => {
        S ? (0, E.q)({
          guildId: l.guildId,
          userId: l.userId,
          anaylticsLocations: C
        }) : (0, E.z)({
          guildId: l.guildId,
          userId: l.userId,
          anaylticsLocations: C,
          modReportId: s
        })
      },
      children: (0, r.jsx)(o.YlB, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, r.jsx)(x, {
      text: D.intl.string(D.t.IHTjzA),
      onClick: () => {
        v(f.jQ.COPY_ID), (0, R.JG)(t.id)
      },
      disabled: !R.wS,
      children: (0, r.jsx)(o.VuL, {
        size: "custom",
        width: 24,
        height: 24,
        color: o.TVs.colors.TEXT_DEFAULT.css
      })
    })]
  })
}

function j(e) {
  let {
    userId: t,
    guildId: n,
    onClose: l,
    moderatorReportId: i
  } = e, s = (0, a.e7)([p.default], () => p.default.getUser(t), [t]), o = (0, a.e7)([I.ZP], () => I.ZP.getMember(n, t), [n, t]);
  return null == s || null == o ? null : (0, r.jsxs)("div", {
    className: L.container,
    children: [(0, r.jsx)(v, {
      user: s,
      guildId: n,
      onClose: l
    }), (0, r.jsx)(P, {
      user: s,
      member: o,
      guildId: n,
      moderatorReportId: i
    })]
  })
}