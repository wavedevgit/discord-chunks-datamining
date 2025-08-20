/** Chunk was on 26434 **/
/** chunk id: 533694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function g(e) {
  let {
    guildId: t,
    user: n,
    username: a
  } = e, s = (0, i.e7)([o.Z], () => !o.Z.useReducedMotion), c = n.getAvatarURL(t, 56, s), u = (0, r.jsx)("img", {
    src: c,
    className: f.userAvatar,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: f.thankYouCard,
    role: "img",
    "aria-label": m.intl.formatToPlainString(m.t["utf8+f"], {
      username: a
    }),
    children: [(0, r.jsx)(d.Z, {
      avatar: u
    }), (0, r.jsx)(l.Text, {
      className: f.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.intl.format(m.t["52BAtL"], {
        username: a,
        usernameHook: (e, t) => (0, r.jsx)(l.Text, {
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

function _(e) {
  var t, i, l;
  let {
    channel: o,
    message: d,
    compact: f
  } = e, _ = (0, a.ZP)(d), h = (0, s.l)({
    user: d.author,
    channelId: o.id,
    guildId: o.guild_id,
    messageId: d.id
  })(_), b = m.intl.format(m.t.TQs67u, {
    username: _.nick,
    usernameHook: h,
    productName: null != (l = null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase) ? true : t.product_name) ? l : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.uL)(p.Z5c.GUILD_PRODUCT(o.guild_id, null != (n = null == (t = d.purchaseNotification) || null == (e = t.guild_product_purchase) ? true : e.listing_id) ? n : ""))
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: n(570111),
      timestamp: d.timestamp,
      compact: f,
      children: b
    }), (0, r.jsx)(g, {
      username: _.nick,
      guildId: o.guild_id,
      user: d.author
    })]
  })
}