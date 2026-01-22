/** Chunk was on web.js **/
/** chunk id: 120120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
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

function h(e) {
  let {
    guildId: t,
    user: n,
    username: o
  } = e, l = (0, i.bG)([s.A], () => !s.A.useReducedMotion), c = n.getAvatarURL(t, 56, l), u = (0, r.jsx)("img", {
    src: c,
    className: _.dj,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: _.uE,
    role: "img",
    "aria-label": p.intl.formatToPlainString(p.t["utf8+W"], {
      username: o
    }),
    children: [(0, r.jsx)(d.A, {
      avatar: u
    }), (0, r.jsx)(a.Text, {
      className: _.Bi,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: p.intl.format(p.t["52BAtC"], {
        username: o,
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
    channel: s,
    message: d,
    compact: _
  } = e, m = (0, o.Ay)(d), g = (0, l.P)({
    user: d.author,
    channelId: s.id,
    guildId: s.guild_id,
    messageId: d.id
  })(m), E = p.intl.format(p.t.TQs67g, {
    username: m.nick,
    usernameHook: g,
    productName: null != (t = null == (a = d.purchaseNotification) || null == (i = a.guild_product_purchase) ? true : i.product_name) ? t : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.pX)(f.BVt.GUILD_PRODUCT(s.guild_id, null != (e = null == (n = d.purchaseNotification) || null == (t = n.guild_product_purchase) ? true : t.listing_id) ? e : ""))
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      icon: n(394803),
      timestamp: d.timestamp,
      compact: _,
      children: E
    }), (0, r.jsx)(h, {
      username: m.nick,
      guildId: s.guild_id,
      user: d.author
    })]
  })
}