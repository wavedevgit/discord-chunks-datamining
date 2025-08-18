/** Chunk was on 91173 **/
/** chunk id: 345114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function E(e) {
  let {
    username: t
  } = e;
  return (0, r.jsx)("div", {
    className: b.welcomeCardText,
    children: (0, r.jsx)(l.Text, {
      tag: "p",
      className: b.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: h.intl.format(h.t.MLKSlp, {
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

function C(e) {
  let {
    guildId: t,
    user: n,
    username: i
  } = e;
  return (0, r.jsxs)("div", {
    className: b.welcomeCard,
    role: "img",
    "aria-label": h.intl.formatToPlainString(h.t["utf8+f"], {
      username: i
    }),
    children: [(0, r.jsx)(f.Z, {
      guildId: t,
      user: n,
      className: b.welcomeCardBadge
    }), (0, r.jsx)(E, {
      username: i
    })]
  })
}

function O(e) {
  var t, l;
  let {
    channel: f,
    message: h,
    compact: b
  } = e, E = (0, s.ZP)(h), O = function(e) {
    let {
      author: t,
      channel: n,
      message: r
    } = e, l = n.guild_id, s = (0, c.l)({
      user: r.author,
      channelId: n.id,
      guildId: l,
      messageId: r.id
    })(t), {
      analyticsLocations: u
    } = (0, a.ZP)(o.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), m = r.roleSubscriptionData, f = i.useCallback(() => {
      (0, d.uL)(g.Z5c.CHANNEL(l, _.oC.ROLE_SUBSCRIPTIONS), {
        sourceLocationStack: u
      }), (null == m ? true : m.role_subscription_listing_id) != null && (0, p.y8)(l, n.id, r.id, m.role_subscription_listing_id)
    }, [l, n, r, m, u]);
    return null == m ? null : (0, p.Tn)({
      username: t.nick,
      usernameOnClickHandler: s,
      roleSubscriptionOnClickHandler: f,
      guildId: l,
      roleSubscriptionData: r.roleSubscriptionData
    })
  }({
    channel: f,
    message: h,
    author: E
  }), v = (null == (t = h.roleSubscriptionData) ? true : t.total_months_subscribed) != null && (null == (l = h.roleSubscriptionData) ? true : l.total_months_subscribed) <= 1;
  return null == O ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      icon: n(570111),
      timestamp: h.timestamp,
      compact: b,
      children: O
    }), v && (0, r.jsx)(C, {
      guildId: f.guild_id,
      user: h.author,
      username: E.nick
    }), (0, r.jsx)(m.Z, {
      channel: f,
      message: h
    })]
  })
}