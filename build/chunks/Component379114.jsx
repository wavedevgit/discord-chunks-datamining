/** Chunk was on web.js **/
/** chunk id: 379114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk942075 = require("./942075.js"),
  Chunk292548 = require("./292548.jsx"),
  Chunk817533 = require("./817533.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk424288 = require("./424288.js");

function b(e) {
  let {
    author: t,
    channel: n,
    message: r
  } = e, a = n.guild_id, l = (0, c.P)({
    user: r.author,
    channelId: n.id,
    guildId: a,
    messageId: r.id
  })(t), {
    analyticsLocations: u
  } = (0, o.Ay)(s.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), p = r.roleSubscriptionData, _ = i.useCallback(() => {
    (0, d.pX)(h.BVt.CHANNEL(a, m.VV.ROLE_SUBSCRIPTIONS), {
      sourceLocationStack: u
    }), (null == p ? true : p.role_subscription_listing_id) != null && (0, f.xH)(a, n.id, r.id, p.role_subscription_listing_id)
  }, [a, n, r, p, u]);
  return null == p ? null : (0, f.gw)({
    username: t.nick,
    usernameOnClickHandler: l,
    roleSubscriptionOnClickHandler: _,
    guildId: a,
    roleSubscriptionData: r.roleSubscriptionData
  })
}

function y(e) {
  let {
    username: t
  } = e;
  return (0, r.jsx)("div", {
    className: E._X,
    children: (0, r.jsx)(a.Text, {
      tag: "p",
      className: E._X,
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
    className: E.pG,
    role: "img",
    "aria-label": g.intl.formatToPlainString(g.t["utf8+W"], {
      username: i
    }),
    children: [(0, r.jsx)(_.A, {
      guildId: t,
      user: n,
      className: E.sz
    }), (0, r.jsx)(y, {
      username: i
    })]
  })
}

function A(e) {
  var t, i;
  let {
    channel: a,
    message: s,
    compact: o
  } = e, c = (0, l.Ay)(s), d = b({
    channel: a,
    message: s,
    author: c
  }), f = (null == (t = s.roleSubscriptionData) ? true : t.total_months_subscribed) != null && (null == (i = s.roleSubscriptionData) ? true : i.total_months_subscribed) <= 1;
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.A, {
      icon: n(394803),
      timestamp: s.timestamp,
      compact: o,
      children: d
    }), f && (0, r.jsx)(O, {
      guildId: a.guild_id,
      user: s.author,
      username: c.nick
    }), (0, r.jsx)(p.A, {
      channel: a,
      message: s
    })]
  })
}