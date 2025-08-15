/** Chunk was on 66866 **/
/** chunk id: 533694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function _(e) {
  let {
    guildId: t,
    user: n,
    username: o
  } = e, s = (0, i.e7)([a.Z], () => !a.Z.useReducedMotion), c = n.getAvatarURL(t, 56, s), u = (0, r.jsx)("img", {
    src: c,
    className: f.userAvatar,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: f.thankYouCard,
    role: "img",
    "aria-label": m.intl.formatToPlainString(m.t["utf8+f"], {
      username: o
    }),
    children: [(0, r.jsx)(d.Z, {
      avatar: u
    }), (0, r.jsx)(l.Text, {
      className: f.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.intl.format(m.t["52BAtL"], {
        username: o,
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

function g(e) {
  var t, i, l;
  let {
    channel: a,
    message: d,
    compact: f
  } = e, g = (0, o.ZP)(d), h = (0, s.l)({
    user: d.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: d.id
  })(g), b = m.intl.format(m.t.TQs67u, {
    username: g.nick,
    usernameHook: h,
    productName: null != (l = null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase) ? true : t.product_name) ? l : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.uL)(p.Z5c.GUILD_PRODUCT(a.guild_id, null != (n = null == (t = d.purchaseNotification) || null == (e = t.guild_product_purchase) ? true : e.listing_id) ? n : ""))
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: n(570111),
      timestamp: d.timestamp,
      compact: f,
      children: b
    }), (0, r.jsx)(_, {
      username: g.nick,
      guildId: a.guild_id,
      user: d.author
    })]
  })
}