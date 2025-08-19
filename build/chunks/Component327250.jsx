/** Chunk was on 12630 **/
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

function V(A) {
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
  } = A, l = e.id, s = (0, i.e7)([p.Z, D.Z, d.default], () => l === d.default.getId() ? p.Z.getStatus() : D.Z.getStatus(l, t), [l, t]);
  return (0, n.jsxs)("div", {
    className: j.topRow,
    children: [(0, n.jsxs)("div", {
      className: j.memberNameContainer,
      children: [(0, n.jsx)("div", {
        className: j.memberAvatar,
        children: (0, n.jsx)(a.qEK, {
          src: e.getAvatarURL(t, 48),
          "aria-label": e.username,
          size: a.EFr.SIZE_48,
          status: s
        })
      }), (0, n.jsxs)("div", {
        className: j.memberNameAndTagContainer,
        children: [(0, n.jsxs)("div", {
          className: j.memberNameTextContainer,
          children: [(0, n.jsx)(a.Text, {
            variant: "text-lg/medium",
            children: (0, n.jsx)(a.PUh, {
              name: b.ZP.getName(t, null, e),
              colorString: a.TVs.colors.HEADER_PRIMARY.css,
              colorStrings: null
            })
          }), (0, n.jsx)(h.ZP, {
            primaryGuild: null == e ? true : e.primaryGuild,
            userId: null == e ? true : e.id,
            contextGuildId: t,
            badgeSize: Q.Gg.SIZE_16,
            textVariant: "heading-md/semibold",
            className: j.memberClanTag,
            containerClassName: j.memberClanTagContainer
          })]
        }), (0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: O.ZP.getUserTag(e)
        })]
      })]
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: (0, n.jsx)(a.P3F, {
        className: j.closeAction,
        onClick: r,
        children: (0, n.jsx)(a.Dio, {
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
    onClick: s
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
  return (0, n.jsx)(a.ua7, {
    text: t,
    children: A => (0, n.jsx)(a.P3F, m(V({}, o, A), {
      tag: e,
      "aria-label": t,
      className: l()(j.bottomRowAction, {
        [j.bottomRowActionDisabled]: r
      }),
      onClick: r ? true : s,
      children: (0, n.jsx)("div", {
        className: j.innerBottomRowAction,
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
  } = A, h = (0, i.e7)([B.Z], () => B.Z.getGuild(l)), {
    canKickUser: C,
    canBanUser: D,
    canModerateMembers: p
  } = (0, i.cj)([w.Z, I.default, B.Z], () => ({
    canKickUser: (0, v.BK)(e, h),
    canBanUser: (0, v.mm)(e, h),
    canModerateMembers: null != h && (0, f.F)(h.id, e.id, [I.default, B.Z, w.Z])
  }), [e, h]), b = (0, g.b)(r), {
    analyticsLocations: O,
    newestAnalyticsLocation: Q
  } = (0, o.ZP)(), T = (0, u.sE)(l, {
    targetUserId: e.id,
    location: Q,
    locations: O
  }), L = (0, i.e7)([d.default], () => d.default.getId() === (null == e ? true : e.id)), x = (0, i.e7)([M.Z, E.Z], () => {
    let A = M.Z.getChannelId(l),
      e = null != A ? E.Z.getChannel(A) : null,
      t = null != e && e.isModeratorReportChannel() ? A : true;
    return null != t ? t : true
  }, [l]);
  return (0, n.jsxs)("div", {
    className: j.bottomRow,
    children: [(0, n.jsx)(y, {
      disabled: L,
      text: P.intl.string(P.t["g33r/P"]),
      onClick: () => {
        s.Z.openPrivateChannel({
          recipientIds: e.id
        })
      },
      children: (0, n.jsx)(a.kBi, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
      })
    }), (0, n.jsx)(y, {
      disabled: !C,
      text: P.intl.string(P.t["3glT6e"]),
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: A
          } = await t.e("5454").then(t.bind(t, 854360));
          return t => (0, n.jsx)(A, m(V({}, t), {
            location: Q,
            guildId: l,
            user: e,
            modReportId: x
          }))
        })
      },
      children: (0, n.jsx)(a.I9k, {
        size: "custom",
        width: 24,
        height: 24,
        color: a.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, n.jsx)(y, {
      disabled: !D,
      text: P.intl.string(P.t["5MBJ5O"]),
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: A
          } = await t.e("43350").then(t.bind(t, 98746));
          return t => (0, n.jsx)(A, m(V({}, t), {
            location: Q,
            guildId: l,
            user: e,
            modReportId: x
          }))
        })
      },
      children: (0, n.jsx)(a.pgN, {
        size: "custom",
        width: 24,
        height: 24,
        color: a.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, n.jsx)(y, {
      disabled: !p,
      text: b ? P.intl.string(P.t.N86XcH) : P.intl.string(P.t.kTlLr6),
      onClick: () => {
        b ? (0, c.q)({
          guildId: r.guildId,
          userId: r.userId,
          anaylticsLocations: O
        }) : (0, c.z)({
          guildId: r.guildId,
          userId: r.userId,
          anaylticsLocations: O,
          modReportId: x
        })
      },
      children: (0, n.jsx)(a.YlB, {
        size: "custom",
        width: 24,
        height: 24,
        color: a.TVs.colors.TEXT_DEFAULT.css
      })
    }), (0, n.jsx)(y, {
      text: P.intl.string(P.t.IHTjzM),
      onClick: () => {
        T(u.jQ.COPY_ID), (0, H.JG)(e.id)
      },
      disabled: !H.wS,
      children: (0, n.jsx)(a.VuL, {
        size: "custom",
        width: 24,
        height: 24,
        color: a.TVs.colors.TEXT_DEFAULT.css
      })
    })]
  })
}

function x(A) {
  let {
    userId: e,
    guildId: t,
    onClose: r
  } = A, l = (0, i.e7)([I.default], () => I.default.getUser(e), [e]), a = (0, i.e7)([C.ZP], () => C.ZP.getMember(t, e), [t, e]);
  return null == l || null == a ? null : (0, n.jsxs)("div", {
    className: j.container,
    children: [(0, n.jsx)(T, {
      user: l,
      guildId: t,
      onClose: r
    }), (0, n.jsx)(L, {
      user: l,
      member: a,
      guildId: t
    })]
  })
}