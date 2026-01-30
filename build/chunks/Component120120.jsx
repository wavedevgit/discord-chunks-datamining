/** Chunk was on 64935 **/
/** chunk id: 120120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk141593 = require("./141593.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk221110 = require("./221110.js");

function g(e) {
  let {
    guildId: t,
    user: n,
    username: s
  } = e, o = (0, i.bG)([a.A], () => !a.A.useReducedMotion), c = n.getAvatarURL(t, 56, o), u = (0, r.jsx)("img", {
    src: c,
    className: f.dj,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: f.uE,
    role: "img",
    "aria-label": m.intl.formatToPlainString(m.t["utf8+W"], {
      username: s
    }),
    children: [(0, r.jsx)(d.A, {
      avatar: u
    }), (0, r.jsx)(l.Text, {
      className: f.Bi,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.intl.format(m.t["52BAtC"], {
        username: s,
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
    channel: a,
    message: d,
    compact: f
  } = e, _ = (0, s.Ay)(d), h = (0, o.P)({
    user: d.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: d.id
  })(_), b = m.intl.format(m.t.TQs67g, {
    username: _.nick,
    usernameHook: h,
    productName: null != (t = null == (l = d.purchaseNotification) || null == (i = l.guild_product_purchase) ? true : i.product_name) ? t : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.pX)(p.BVt.GUILD_PRODUCT(a.guild_id, null != (e = null == (n = d.purchaseNotification) || null == (t = n.guild_product_purchase) ? true : t.listing_id) ? e : ""))
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      icon: n(394803),
      timestamp: d.timestamp,
      compact: f,
      children: b
    }), (0, r.jsx)(g, {
      username: _.nick,
      guildId: a.guild_id,
      user: d.author
    })]
  })
}