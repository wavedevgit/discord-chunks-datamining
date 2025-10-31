/** Chunk was on web.js **/
/** chunk id: 345114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk35125 = require("./35125.js"),
  Chunk626751 = require("./626751.jsx"),
  Chunk891614 = require("./891614.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545716 = require("./545716.js");

function b(e) {
  let {
    author: t,
    channel: n,
    message: r
  } = e, a = n.guild_id, l = (0, c.l)({
    user: r.author,
    channelId: n.id,
    guildId: a,
    messageId: r.id
  })(t), {
    analyticsLocations: u
  } = (0, s.ZP)(o.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), _ = r.roleSubscriptionData, p = i.useCallback(() => {
    (0, d.uL)(h.Z5c.CHANNEL(a, m.oC.ROLE_SUBSCRIPTIONS), {
      sourceLocationStack: u
    }), (null == _ ? true : _.role_subscription_listing_id) != null && (0, f.y8)(a, n.id, r.id, _.role_subscription_listing_id)
  }, [a, n, r, _, u]);
  return null == _ ? null : (0, f.Tn)({
    username: t.nick,
    usernameOnClickHandler: l,
    roleSubscriptionOnClickHandler: p,
    guildId: a,
    roleSubscriptionData: r.roleSubscriptionData
  })
}

function y(e) {
  let {
    username: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.welcomeCardText,
    children: (0, r.jsx)(a.Text, {
      tag: "p",
      className: E.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: g.intl.format(g.t.MLKSln, {
        username: t,
        usernameHook: (e, t) => (0, r.jsx)(a.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })
  })
}

function O(e) {
  let {
    guildId: t,
    user: n,
    username: i
  } = e;
  return (0, r.jsxs)("div", {
    className: E.welcomeCard,
    role: "img",
    "aria-label": g.intl.formatToPlainString(g.t["utf8+W"], {
      username: i
    }),
    children: [(0, r.jsx)(p.Z, {
      guildId: t,
      user: n,
      className: E.welcomeCardBadge
    }), (0, r.jsx)(y, {
      username: i
    })]
  })
}

function v(e) {
  var t, i;
  let {
    channel: a,
    message: o,
    compact: s
  } = e, c = (0, l.ZP)(o), d = b({
    channel: a,
    message: o,
    author: c
  }), f = (null == (t = o.roleSubscriptionData) ? true : t.total_months_subscribed) != null && (null == (i = o.roleSubscriptionData) ? true : i.total_months_subscribed) <= 1;
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      icon: n(570111),
      timestamp: o.timestamp,
      compact: s,
      children: d
    }), f && (0, r.jsx)(O, {
      guildId: a.guild_id,
      user: o.author,
      username: c.nick
    }), (0, r.jsx)(_.Z, {
      channel: a,
      message: o
    })]
  })
}