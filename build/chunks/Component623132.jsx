/** Chunk was on 11776 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk5192 = require("./5192.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436860 = require("./436860.js"),
  Chunk467514 = require("./467514.js"),
  Chunk418718 = require("./418718.js");

function j(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: o
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.PEf, {
      size: "xxs",
      color: i.TVs.colors.ICON_TERTIARY,
      className: b.icon
    }), (0, r.jsx)(i.nn4, {
      children: p.intl.format(p.t.TM0XDQ, {
        name: c.ZP.getName(l, o, n)
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-tertiary",
      children: t
    })]
  })
}

function x(e) {
  let {
    applicationId: t,
    userId: n,
    gameName: c,
    className: s,
    children: d
  } = e, u = (0, a.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: o.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  }), f = l.useCallback(e => {
    e.target === e.currentTarget && (null == u || u(e))
  }, [u]), m = null != c ? c : p.intl.string(p.t.GIWFlJ), g = null != u;
  return (0, r.jsxs)("div", {
    className: s,
    children: [g && (0, r.jsx)(i.P3F, {
      className: b.clickableCard,
      "aria-label": p.intl.formatToPlainString(p.t["8QLQBw"], {
        gameName: m
      }),
      onClick: f
    }), d]
  })
}

function h(e) {
  let {
    applicationId: t,
    guildId: n,
    channelId: l,
    className: i
  } = e, o = (0, f.Z)(t);
  return o.length > 0 ? (0, r.jsx)(s.Z, {
    label: p.intl.formatToPlainString(p.t.ujhJdH, {
      numFriends: o.length
    }),
    className: i,
    users: o,
    guildId: n,
    channelId: l
  }) : null
}

function y(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    game: o,
    loading: a = false,
    disableInteraction: c = false
  } = e, {
    gameName: s,
    imageSrc: f,
    applicationId: p,
    comment: y,
    tags: v
  } = o, O = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      imageSrc: f,
      gameName: s,
      applicationId: p,
      userId: t.id,
      disableInteraction: true
    }), (0, r.jsxs)("div", {
      className: b.details,
      children: [(0, r.jsx)(i.X6q, {
        variant: "text-md/normal",
        color: "text-default",
        children: s
      }), null != y && (0, r.jsx)(j, {
        text: y,
        user: t,
        guildId: n,
        channelId: l
      }), (0, r.jsx)(u.Z, {
        tags: v
      }), !c && (0, r.jsx)(h, {
        className: b.socialProof,
        applicationId: p,
        guildId: n,
        channelId: l
      })]
    })]
  });
  return a ? (0, r.jsxs)("div", {
    className: b.card,
    children: [(0, r.jsx)("div", {
      className: g.loadingCover
    }), (0, r.jsx)("div", {
      className: b.details,
      children: (0, r.jsxs)("div", {
        className: m.placeholderText,
        children: [(0, r.jsx)("div", {
          className: m.placeholderBar
        }), (0, r.jsx)("div", {
          className: m.placeholderBar
        })]
      })
    })]
  }) : c ? (0, r.jsx)("div", {
    className: b.card,
    children: O()
  }) : (0, r.jsx)(x, {
    applicationId: p,
    userId: t.id,
    gameName: s,
    className: b.card,
    children: O()
  })
}