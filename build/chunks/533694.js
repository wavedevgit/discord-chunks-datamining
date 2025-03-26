/** Chunk was on 52272 **/
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(399606),
  o = n(481060),
  a = n(607070),
  l = n(739566),
  s = n(942951),
  c = n(834129),
  u = n(703656),
  d = n(331372),
  p = n(981631),
  m = n(388032),
  f = n(426540);

function h(e) {
  let {
    guildId: t,
    user: n,
    username: l
  } = e, s = (0, i.e7)([a.Z], () => !a.Z.useReducedMotion), c = n.getAvatarURL(t, 56, s), u = (0, r.jsx)("img", {
    src: c,
    className: f.userAvatar,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: f.thankYouCard,
    role: "img",
    "aria-label": m.NW.formatToPlainString(m.t["utf8+f"], {
      username: l
    }),
    children: [(0, r.jsx)(d.Z, {
      avatar: u
    }), (0, r.jsx)(o.Text, {
      className: f.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.NW.format(m.t["52BAtL"], {
        username: l,
        usernameHook: (e, t) => (0, r.jsx)(o.Text, {
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
  var t, i, o;
  let {
    channel: a,
    message: d,
    compact: f
  } = e, g = (0, l.ZP)(d), _ = (0, s.l)({
    user: d.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: d.id
  })(g), b = m.NW.format(m.t.TQs67u, {
    username: g.nick,
    usernameHook: _,
    productName: null !== (o = null === (i = d.purchaseNotification) || void 0 === i ? void 0 : null === (t = i.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== o ? o : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.uL)(p.Z5c.GUILD_PRODUCT(a.guild_id, null !== (n = null === (t = d.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ""))
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: n(570111),
      timestamp: d.timestamp,
      compact: f,
      children: b
    }), (0, r.jsx)(h, {
      username: g.nick,
      guildId: a.guild_id,
      user: d.author
    })]
  })
}