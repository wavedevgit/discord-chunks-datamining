/** Chunk was on 9753 **/
/** chunk id: 379114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function y(e) {
  let {
    username: t
  } = e;
  return (0, r.jsx)("div", {
    className: b._X,
    children: (0, r.jsx)(l.Text, {
      tag: "p",
      className: b._X,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: h.intl.format(h.t.MLKSln, {
        username: t,
        usernameHook: (e, t) => (0, r.jsx)(l.Text, {
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

function A(e) {
  let {
    guildId: t,
    user: n,
    username: i
  } = e;
  return (0, r.jsxs)("div", {
    className: b.pG,
    role: "img",
    "aria-label": h.intl.formatToPlainString(h.t["utf8+W"], {
      username: i
    }),
    children: [(0, r.jsx)(f.A, {
      guildId: t,
      user: n,
      className: b.sz
    }), (0, r.jsx)(y, {
      username: i
    })]
  })
}

function v(e) {
  var t, l;
  let {
    channel: f,
    message: h,
    compact: b
  } = e, y = (0, o.Ay)(h), v = function(e) {
    let {
      author: t,
      channel: n,
      message: r
    } = e, l = n.guild_id, o = (0, c.P)({
      user: r.author,
      channelId: n.id,
      guildId: l,
      messageId: r.id
    })(t), {
      analyticsLocations: u
    } = (0, s.Ay)(a.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), m = r.roleSubscriptionData, f = i.useCallback(() => {
      (0, d.pX)(g.BVt.CHANNEL(l, _.VV.ROLE_SUBSCRIPTIONS), {
        sourceLocationStack: u
      }), (null == m ? true : m.role_subscription_listing_id) != null && (0, p.xH)(l, n.id, r.id, m.role_subscription_listing_id)
    }, [l, n, r, m, u]);
    return null == m ? null : (0, p.gw)({
      username: t.nick,
      usernameOnClickHandler: o,
      roleSubscriptionOnClickHandler: f,
      guildId: l,
      roleSubscriptionData: r.roleSubscriptionData
    })
  }({
    channel: f,
    message: h,
    author: y
  }), O = (null == (t = h.roleSubscriptionData) ? true : t.total_months_subscribed) != null && (null == (l = h.roleSubscriptionData) ? true : l.total_months_subscribed) <= 1;
  return null == v ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.A, {
      icon: n(394803),
      timestamp: h.timestamp,
      compact: b,
      children: v
    }), O && (0, r.jsx)(A, {
      guildId: f.guild_id,
      user: h.author,
      username: y.nick
    }), (0, r.jsx)(m.A, {
      channel: f,
      message: h
    })]
  })
}