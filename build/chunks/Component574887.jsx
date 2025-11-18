/** Chunk was on 93979 **/
/** chunk id: 574887, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk367907 = require("./367907.js"),
  Chunk122021 = require("./122021.js"),
  Chunk275759 = require("./275759.js"),
  Chunk888496 = require("./888496.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk49012 = require("./49012.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk638999 = require("./638999.js");

function I(e) {
  var n;
  let {
    account: t,
    locale: i,
    userId: o
  } = e, r = null != (n = t.metadata) ? n : {}, x = (0, m.FI)(r[j.PC.CREATED_AT], i), I = c.Z.get((0, u.rR)(t.type));
  return (0, l.jsxs)("li", {
    className: b.connection,
    children: [(0, l.jsx)(s.u, {
      __unsupportedReactNodeAsText: null == I ? true : I.name,
      children: (0, l.jsx)("div", {
        className: b.platformIconContainer,
        children: (0, l.jsx)("img", {
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: null == I ? true : I.name
          }),
          className: b.platformIcon,
          src: null == I ? true : I.icon.lightPNG
        })
      })
    }), (0, l.jsxs)("div", {
      className: b.connectionInfo,
      children: [(0, l.jsxs)("div", {
        children: [(() => {
          var e;
          let n = null == I || null == (e = I.getPlatformUserUrl) ? true : e.call(I, t);
          return null == n ? (0, l.jsx)(s.u, {
            overflowOnly: true,
            text: t.name,
            children: (0, l.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: b.accountNameText,
              children: t.name
            })
          }) : (0, l.jsx)(a.Anchor, {
            href: n,
            className: b.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == I ? true : I.name) != null ? "".concat(I.name, ", ").concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJB)) : "".concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJB)),
            onClick: e => {
              (0, d.yw)(v.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: t.type,
                other_user_id: o
              }), (0, h.q)({
                href: n,
                trusted: (null == I ? true : I.type) !== v.ABu.DOMAIN
              }, e)
            },
            children: (0, l.jsxs)("div", {
              className: b.accountName,
              children: [(0, l.jsx)(s.u, {
                overflowOnly: true,
                text: t.name,
                children: (0, l.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  className: b.accountNameText,
                  children: t.name
                })
              }), (0, l.jsx)(f.Z, {
                className: b.platformUrlIcon,
                direction: f.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != x && (0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: g.intl.format(g.t["9rfonh"], {
            date: x
          })
        })]
      }), (0, l.jsx)("div", {
        className: b.metadata,
        children: t.type === v.ABu.REDDIT ? (0, p.oP)(r) : t.type === v.ABu.STEAM ? (0, p.Dq)(r) : t.type === v.ABu.BLUESKY || t.type === v.ABu.MASTODON || t.type === v.ABu.TWITTER ? (0, p.rJ)(r) : t.type === v.ABu.PAYPAL ? (0, p.li)(r) : t.type === v.ABu.EBAY ? (0, p.ul)(r) : t.type === v.ABu.TIKTOK ? (0, p.hf)(r) : null
      })]
    })]
  })
}

function y(e) {
  let {
    connections: n,
    userId: t,
    className: i
  } = e, s = (0, r.e7)([x.default], () => x.default.locale);
  return 0 === n.length ? null : (0, l.jsx)("ul", {
    className: o()(b.container, i),
    children: n.map(e => (0, l.jsx)(I, {
      account: e,
      userId: t,
      locale: s
    }, "".concat(e.type, ":").concat(e.id)))
  })
}