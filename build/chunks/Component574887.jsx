/** Chunk was on 31553 **/
/** chunk id: 574887, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk20163 = require("./20163.js");

function y(e) {
  var n;
  let {
    account: t,
    locale: i,
    userId: r
  } = e, o = null != (n = t.metadata) ? n : {}, h = (0, m.FI)(o[v.PC.CREATED_AT], i), y = c.Z.get((0, u.rR)(t.type));
  return (0, l.jsxs)("li", {
    className: b.connection,
    children: [(0, l.jsx)(s.u, {
      __unsupportedReactNodeAsText: null == y ? true : y.name,
      children: (0, l.jsx)("div", {
        className: b.platformIconContainer,
        children: (0, l.jsx)("img", {
          alt: g.intl.formatToPlainString(g.t.rtm15O, {
            name: null == y ? true : y.name
          }),
          className: b.platformIcon,
          src: null == y ? true : y.icon.lightPNG
        })
      })
    }), (0, l.jsxs)("div", {
      className: b.connectionInfo,
      children: [(0, l.jsxs)("div", {
        children: [(() => {
          var e;
          let n = null == y || null == (e = y.getPlatformUserUrl) ? true : e.call(y, t);
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
            "aria-label": (null == y ? true : y.name) != null ? "".concat(y.name, ", ").concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJC)) : "".concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJC)),
            onClick: e => {
              (0, d.yw)(j.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: t.type,
                other_user_id: r
              }), (0, x.q)({
                href: n,
                trusted: (null == y ? true : y.type) !== j.ABu.DOMAIN
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
        })(), null != h && (0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: g.intl.format(g.t["9rfonp"], {
            date: h
          })
        })]
      }), (0, l.jsx)("div", {
        className: b.metadata,
        children: t.type === j.ABu.REDDIT ? (0, p.oP)(o) : t.type === j.ABu.STEAM ? (0, p.Dq)(o) : t.type === j.ABu.BLUESKY || t.type === j.ABu.MASTODON || t.type === j.ABu.TWITTER ? (0, p.rJ)(o) : t.type === j.ABu.PAYPAL ? (0, p.li)(o) : t.type === j.ABu.EBAY ? (0, p.ul)(o) : t.type === j.ABu.TIKTOK ? (0, p.hf)(o) : null
      })]
    })]
  })
}

function I(e) {
  let {
    connections: n,
    userId: t,
    className: i
  } = e, s = (0, o.e7)([h.default], () => h.default.locale);
  return 0 === n.length ? null : (0, l.jsx)("ul", {
    className: r()(b.container, i),
    children: n.map(e => (0, l.jsx)(y, {
      account: e,
      userId: t,
      locale: s
    }, "".concat(e.type, ":").concat(e.id)))
  })
}