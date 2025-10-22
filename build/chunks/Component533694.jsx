/** Chunk was on web.js **/
/** chunk id: 533694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk331372 = require("./331372.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418783 = require("./418783.js");

function h(e) {
  let {
    guildId: t,
    user: n,
    username: s
  } = e, l = (0, i.e7)([o.Z], () => !o.Z.useReducedMotion), c = n.getAvatarURL(t, 56, l), u = (0, r.jsx)("img", {
    src: c,
    className: p.userAvatar,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: p.thankYouCard,
    role: "img",
    "aria-label": _.intl.formatToPlainString(_.t["utf8+W"], {
      username: s
    }),
    children: [(0, r.jsx)(d.Z, {
      avatar: u
    }), (0, r.jsx)(a.Text, {
      className: p.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: _.intl.format(_.t["52BAtC"], {
        username: s,
        usernameHook: (e, t) => (0, r.jsx)(a.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })]
  })
}

function m(e) {
  var t, i, a;
  let {
    channel: o,
    message: d,
    compact: p
  } = e, m = (0, s.ZP)(d), g = (0, l.l)({
    user: d.author,
    channelId: o.id,
    guildId: o.guild_id,
    messageId: d.id
  })(m), E = _.intl.format(_.t.TQs67g, {
    username: m.nick,
    usernameHook: g,
    productName: null != (a = null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase) ? true : t.product_name) ? a : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.uL)(f.Z5c.GUILD_PRODUCT(o.guild_id, null != (n = null == (t = d.purchaseNotification) || null == (e = t.guild_product_purchase) ? true : e.listing_id) ? n : ""))
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: n(570111),
      timestamp: d.timestamp,
      compact: p,
      children: E
    }), (0, r.jsx)(h, {
      username: m.nick,
      guildId: o.guild_id,
      user: d.author
    })]
  })
}