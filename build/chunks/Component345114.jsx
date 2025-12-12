/** Chunk was on web.js **/
/** chunk id: 345114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, o = n.guild_id, l = (0, c.l)({
    user: r.author,
    channelId: n.id,
    guildId: o,
    messageId: r.id
  })(t), {
    analyticsLocations: u
  } = (0, s.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), p = r.roleSubscriptionData, _ = i.useCallback(() => {
    (0, d.uL)(m.Z5c.CHANNEL(o, h.oC.ROLE_SUBSCRIPTIONS), {
      sourceLocationStack: u
    }), (null == p ? true : p.role_subscription_listing_id) != null && (0, f.y8)(o, n.id, r.id, p.role_subscription_listing_id)
  }, [o, n, r, p, u]);
  return null == p ? null : (0, f.Tn)({
    username: t.nick,
    usernameOnClickHandler: l,
    roleSubscriptionOnClickHandler: _,
    guildId: o,
    roleSubscriptionData: r.roleSubscriptionData
  })
}

function y(e) {
  let {
    username: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.welcomeCardText,
    children: (0, r.jsx)(o.Text, {
      tag: "p",
      className: E.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: g.intl.format(g.t.MLKSln, {
        username: t,
        usernameHook: (e, t) => (0, r.jsx)(o.Text, {
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
    children: [(0, r.jsx)(_.Z, {
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
    channel: o,
    message: a,
    compact: s
  } = e, c = (0, l.ZP)(a), d = b({
    channel: o,
    message: a,
    author: c
  }), f = (null == (t = a.roleSubscriptionData) ? true : t.total_months_subscribed) != null && (null == (i = a.roleSubscriptionData) ? true : i.total_months_subscribed) <= 1;
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      icon: n(570111),
      timestamp: a.timestamp,
      compact: s,
      children: d
    }), f && (0, r.jsx)(O, {
      guildId: o.guild_id,
      user: a.author,
      username: c.nick
    }), (0, r.jsx)(p.Z, {
      channel: o,
      message: a
    })]
  })
}