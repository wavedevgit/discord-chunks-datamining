/** Chunk was on 27069 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk958461 = require("./958461.js"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function v(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: o
  } = e, c = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["applicationId", "userId", "gameName"]);
  let s = (0, a.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: i.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == s ? (0, n.jsx)(l.X6q, y(j({}, c), {
    children: o
  })) : (0, n.jsx)(l.X6q, y(j({}, c), {
    children: (0, n.jsx)(l.P3F, {
      onClick: s,
      className: m.clickableText,
      children: o
    })
  }))
}

function x(e) {
  let {
    text: t,
    user: r,
    guildId: i,
    channelId: a
  } = e;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.PEf, {
      size: "xxs",
      color: l.TVs.colors.ICON_TERTIARY,
      className: m.icon
    }), (0, n.jsx)(l.nn4, {
      children: b.intl.format(b.t.TM0XDQ, {
        name: c.ZP.getName(i, a, r)
      })
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-tertiary",
      children: t
    })]
  })
}

function h(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: l,
    className: i
  } = e, a = (0, g.Z)(t);
  return a.length > 0 ? (0, n.jsx)(s.Z, {
    label: b.intl.formatToPlainString(b.t.ujhJdH, {
      numFriends: a.length
    }),
    className: i,
    users: a,
    guildId: r,
    channelId: l
  }) : null
}

function P(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    game: a,
    widgetType: c,
    loading: s = false,
    disableInteraction: g = false
  } = e, {
    gameName: P = b.intl.string(b.t.GIWFlJ),
    imageSrc: E,
    applicationId: w,
    comment: I,
    tags: S
  } = a, _ = {
    variant: "heading-sm/semibold",
    color: "text-default"
  }, T = o.default.getCurrentUser(), N = (null == T ? true : T.id) === t.id;
  return s ? (0, n.jsxs)("div", {
    className: m.card,
    children: [(0, n.jsx)("div", {
      className: O.loadingCover
    }), (0, n.jsx)("div", {
      className: m.details,
      children: (0, n.jsxs)("div", {
        className: p.placeholderText,
        children: [(0, n.jsx)("div", {
          className: p.placeholderBar
        }), (0, n.jsx)("div", {
          className: p.placeholderBar
        })]
      })
    })]
  }) : (0, n.jsxs)("div", {
    className: m.card,
    children: [(0, n.jsx)(u.Z, {
      imageSrc: E,
      gameName: P,
      applicationId: w,
      userId: t.id,
      disableInteraction: g,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: m.details,
      children: [g ? (0, n.jsx)(l.X6q, y(j({}, _), {
        children: P
      })) : (0, n.jsx)(v, j({
        applicationId: w,
        userId: t.id,
        gameName: P
      }, _)), null != I && (0, n.jsx)(x, {
        text: I,
        user: t,
        guildId: r,
        channelId: i
      }), (0, n.jsx)(d.Z, {
        tags: S,
        isCurrentUser: N,
        widgetType: c,
        applicationId: w,
        disableInteraction: g
      }), !g && (0, n.jsx)(h, {
        className: m.socialProof,
        applicationId: w,
        guildId: r,
        channelId: i
      })]
    }), !g && N && (0, n.jsx)(f.Z, {
      game: a,
      widgetType: c,
      className: m.removeGameButton
    })]
  })
}