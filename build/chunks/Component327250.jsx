/** Chunk was on 10576 **/
/** chunk id: 327250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
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
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk428331 = require("./428331.js");

function v(e) {
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

function x(e) {
  let {
    user: t,
    guildId: n,
    onClose: l
  } = e, i = t.id, o = (0, a.e7)([p.Z, N.Z, T.default], () => i === T.default.getId() ? p.Z.getStatus() : N.Z.getStatus(i, n), [i, n]);
  return (0, r.jsxs)("div", {
    className: U.topRow,
    children: [(0, r.jsxs)("div", {
      className: U.memberNameContainer,
      children: [(0, r.jsx)("div", {
        className: U.memberAvatar,
        children: (0, r.jsx)(s.qEK, {
          src: t.getAvatarURL(n, 48),
          "aria-label": t.username,
          size: s.EFr.SIZE_48,
          status: o
        })
      }), (0, r.jsxs)("div", {
        className: U.memberNameAndTagContainer,
        children: [(0, r.jsxs)("div", {
          className: U.memberNameTextContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-lg/medium",
            children: (0, r.jsx)(s.PUh, {
              name: C.ZP.getName(n, null, t),
              colorString: s.TVs.colors.HEADER_PRIMARY.css,
              colorStrings: null
            })
          }), (0, r.jsx)(m.ZP, {
            primaryGuild: null == t ? true : t.primaryGuild,
            userId: null == t ? true : t.id,
            contextGuildId: n,
            badgeSize: L.Gg.SIZE_16,
            textVariant: "heading-md/semibold",
            className: U.memberClanTag,
            containerClassName: U.memberClanTagContainer
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: D.ZP.getUserTag(t)
        })]
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: (0, r.jsx)(s.P3F, {
        className: U.closeAction,
        onClick: l,
        children: (0, r.jsx)(s.Dio, {
          size: "md",
          color: "currentColor"
        })
      })
    })]
  })
}

function P(e) {
  var {
    tag: t = "div",
    text: n,
    disabled: l,
    children: a,
    onClick: o
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
  return (0, r.jsx)(s.ua7, {
    text: n,
    children: e => (0, r.jsx)(s.P3F, M(v({}, u, e), {
      tag: t,
      "aria-label": n,
      className: i()(U.bottomRowAction, {
        [U.bottomRowActionDisabled]: l
      }),
      onClick: l ? true : o,
      children: (0, r.jsx)("div", {
        className: U.innerBottomRowAction,
        children: a
      })
    }))
  })
}

function j(e) {
  let {
    user: t,
    member: l,
    guildId: i
  } = e, m = (0, a.e7)([f.Z], () => f.Z.getGuild(i)), {
    canKickUser: g,
    canBanUser: N,
    canModerateMembers: p
  } = (0, a.cj)([h.Z, R.default, f.Z], () => ({
    canKickUser: (0, _.BK)(t, m),
    canBanUser: (0, _.mm)(t, m),
    canModerateMembers: null != m && (0, E.F)(m.id, t.id, [R.default, f.Z, h.Z])
  }), [t, m]), C = (0, c.b)(l), {
    analyticsLocations: D,
    newestAnalyticsLocation: L
  } = (0, u.ZP)(), x = (0, A.sE)(i, {
    targetUserId: t.id,
    location: L,
    locations: D
  }), j = (0, a.e7)([T.default], () => T.default.getId() === (null == t ? true : t.id)), y = (0, a.e7)([O.Z, I.Z], () => {
    let e = O.Z.getChannelId(i),
      t = null != e ? I.Z.getChannel(e) : null,
      n = null != t && t.isModeratorReportChannel() ? e : true;
    return null != n ? n : true
  }, [i]);
  return (0, r.jsxs)("div", {
    className: U.bottomRow,
    children: [(0, r.jsx)(P, {
      disabled: j,
      text: b.intl.string(b.t["g33r/P"]),
      onClick: () => {
        o.Z.openPrivateChannel({
          recipientIds: t.id
        })
      },
      children: (0, r.jsx)(s.kBi, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
      })
    }), (0, r.jsx)(P, {
      disabled: !g,
      text: b.intl.string(b.t["3glT6e"]),
      onClick: () => {
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("5454").then(n.bind(n, 854360));
          return n => (0, r.jsx)(e, M(v({}, n), {
            location: L,
            guildId: i,
            user: t,
            modReportId: y
          }))
        })
      },
      children: (0, r.jsx)(s.I9k, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, r.jsx)(P, {
      disabled: !N,
      text: b.intl.string(b.t["5MBJ5O"]),
      onClick: () => {
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("43350").then(n.bind(n, 98746));
          return n => (0, r.jsx)(e, M(v({}, n), {
            location: L,
            guildId: i,
            user: t,
            modReportId: y
          }))
        })
      },
      children: (0, r.jsx)(s.pgN, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, r.jsx)(P, {
      disabled: !p,
      text: C ? b.intl.string(b.t.N86XcH) : b.intl.string(b.t.kTlLr6),
      onClick: () => {
        C ? (0, d.q)({
          guildId: l.guildId,
          userId: l.userId,
          anaylticsLocations: D
        }) : (0, d.z)({
          guildId: l.guildId,
          userId: l.userId,
          anaylticsLocations: D,
          modReportId: y
        })
      },
      children: (0, r.jsx)(s.YlB, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, r.jsx)(P, {
      text: b.intl.string(b.t.IHTjzM),
      onClick: () => {
        x(A.jQ.COPY_ID), (0, S.JG)(t.id)
      },
      disabled: !S.wS,
      children: (0, r.jsx)(s.VuL, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    })]
  })
}

function y(e) {
  let {
    userId: t,
    guildId: n,
    onClose: l
  } = e, i = (0, a.e7)([R.default], () => R.default.getUser(t), [t]), s = (0, a.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]);
  return null == i || null == s ? null : (0, r.jsxs)("div", {
    className: U.container,
    children: [(0, r.jsx)(x, {
      user: i,
      guildId: n,
      onClose: l
    }), (0, r.jsx)(j, {
      user: i,
      member: s,
      guildId: n
    })]
  })
}