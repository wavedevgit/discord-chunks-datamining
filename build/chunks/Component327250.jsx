/** Chunk was on 7318 **/
/** chunk id: 327250, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  ZP: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function j(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function m(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}

function T(A) {
  let {
    user: e,
    guildId: t,
    onClose: r
  } = A, l = e.id, a = (0, i.e7)([p.Z, D.Z, d.default], () => l === d.default.getId() ? p.Z.getStatus() : D.Z.getStatus(l, t), [l, t]);
  return (0, n.jsxs)("div", {
    className: V.topRow,
    children: [(0, n.jsxs)("div", {
      className: V.memberNameContainer,
      children: [(0, n.jsx)("div", {
        className: V.memberAvatar,
        children: (0, n.jsx)(s.qEK, {
          src: e.getAvatarURL(t, 48),
          "aria-label": e.username,
          size: s.EFr.SIZE_48,
          status: a
        })
      }), (0, n.jsxs)("div", {
        className: V.memberNameAndTagContainer,
        children: [(0, n.jsxs)("div", {
          className: V.memberNameTextContainer,
          children: [(0, n.jsx)(s.Text, {
            variant: "text-lg/medium",
            children: (0, n.jsx)(s.PUh, {
              name: b.ZP.getName(t, null, e),
              colorString: s.TVs.colors.HEADER_PRIMARY.css,
              colorStrings: null
            })
          }), (0, n.jsx)(u.ZP, {
            primaryGuild: null == e ? true : e.primaryGuild,
            userId: null == e ? true : e.id,
            contextGuildId: t,
            badgeSize: O.Gg.SIZE_16,
            textVariant: "heading-md/semibold",
            className: V.memberClanTag,
            containerClassName: V.memberClanTagContainer
          })]
        }), (0, n.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: Q.ZP.getUserTag(e)
        })]
      })]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: (0, n.jsx)(s.P3F, {
        className: V.closeAction,
        onClick: r,
        children: (0, n.jsx)(s.Dio, {
          size: "md",
          color: "currentColor"
        })
      })
    })]
  })
}

function y(A) {
  var {
    tag: e = "div",
    text: t,
    disabled: r,
    children: i,
    onClick: a
  } = A, o = function(A, e) {
    if (null == A) return {};
    var t, n, r = function(A, e) {
      if (null == A) return {};
      var t, n, r = {},
        l = Object.keys(A);
      for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
      return r
    }(A, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(A);
      for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
    }
    return r
  }(A, ["tag", "text", "disabled", "children", "onClick"]);
  return (0, n.jsx)(s.ua7, {
    text: t,
    children: A => (0, n.jsx)(s.P3F, m(j({}, o, A), {
      tag: e,
      "aria-label": t,
      className: l()(V.bottomRowAction, {
        [V.bottomRowActionDisabled]: r
      }),
      onClick: r ? true : a,
      children: (0, n.jsx)("div", {
        className: V.innerBottomRowAction,
        children: i
      })
    }))
  })
}

function L(A) {
  let {
    user: e,
    member: r,
    guildId: l
  } = A, u = (0, i.e7)([B.Z], () => B.Z.getGuild(l)), {
    canKickUser: C,
    canBanUser: D,
    canModerateMembers: p
  } = (0, i.cj)([w.Z, I.default, B.Z], () => ({
    canKickUser: (0, v.BK)(e, u),
    canBanUser: (0, v.mm)(e, u),
    canModerateMembers: null != u && (0, f.F)(u.id, e.id, [I.default, B.Z, w.Z])
  }), [e, u]), b = (0, g.b)(r), {
    analyticsLocations: Q,
    newestAnalyticsLocation: O
  } = (0, o.ZP)(), T = (0, h.sE)(l, {
    targetUserId: e.id,
    location: O,
    locations: Q
  }), L = (0, i.e7)([d.default], () => d.default.getId() === (null == e ? true : e.id)), x = (0, i.e7)([M.Z, E.Z], () => {
    let A = M.Z.getChannelId(l),
      e = null != A ? E.Z.getChannel(A) : null,
      t = null != e && e.isModeratorReportChannel() ? A : true;
    return null != t ? t : true
  }, [l]);
  return (0, n.jsxs)("div", {
    className: V.bottomRow,
    children: [(0, n.jsx)(y, {
      disabled: L,
      text: P.intl.string(P.t["g33r/P"]),
      onClick: () => {
        a.Z.openPrivateChannel({
          recipientIds: e.id
        })
      },
      children: (0, n.jsx)(s.kBi, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
      })
    }), (0, n.jsx)(y, {
      disabled: !C,
      text: P.intl.string(P.t["3glT6e"]),
      onClick: () => {
        (0, s.ZDy)(async () => {
          let {
            default: A
          } = await t.e("5454").then(t.bind(t, 854360));
          return t => (0, n.jsx)(A, m(j({}, t), {
            location: O,
            guildId: l,
            user: e,
            modReportId: x
          }))
        })
      },
      children: (0, n.jsx)(s.I9k, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, n.jsx)(y, {
      disabled: !D,
      text: P.intl.string(P.t["5MBJ5O"]),
      onClick: () => {
        (0, s.ZDy)(async () => {
          let {
            default: A
          } = await t.e("43350").then(t.bind(t, 98746));
          return t => (0, n.jsx)(A, m(j({}, t), {
            location: O,
            guildId: l,
            user: e,
            modReportId: x
          }))
        })
      },
      children: (0, n.jsx)(s.pgN, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, n.jsx)(y, {
      disabled: !p,
      text: b ? P.intl.string(P.t.N86XcH) : P.intl.string(P.t.kTlLr6),
      onClick: () => {
        b ? (0, c.q)({
          guildId: r.guildId,
          userId: r.userId,
          anaylticsLocations: Q
        }) : (0, c.z)({
          guildId: r.guildId,
          userId: r.userId,
          anaylticsLocations: Q,
          modReportId: x
        })
      },
      children: (0, n.jsx)(s.YlB, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, n.jsx)(y, {
      text: P.intl.string(P.t.IHTjzM),
      onClick: () => {
        T(h.jQ.COPY_ID), (0, H.JG)(e.id)
      },
      disabled: !H.wS,
      children: (0, n.jsx)(s.VuL, {
        size: "custom",
        width: 24,
        height: 24,
        color: s.TVs.colors.TEXT_DEFAULT.css
      })
    })]
  })
}

function x(A) {
  let {
    userId: e,
    guildId: t,
    onClose: r
  } = A, l = (0, i.e7)([I.default], () => I.default.getUser(e), [e]), s = (0, i.e7)([C.ZP], () => C.ZP.getMember(t, e), [t, e]);
  return null == l || null == s ? null : (0, n.jsxs)("div", {
    className: V.container,
    children: [(0, n.jsx)(T, {
      user: l,
      guildId: t,
      onClose: r
    }), (0, n.jsx)(L, {
      user: l,
      member: s,
      guildId: t
    })]
  })
}