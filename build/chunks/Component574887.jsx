/** Chunk was on 72164 **/
/** chunk id: 574887, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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

function v(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), o.forEach(function(n) {
      var o;
      o = t[n], n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = o
    })
  }
  return e
}

function y(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t.push.apply(t, o)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function _(e) {
  var n;
  let {
    account: t,
    locale: l,
    userId: r
  } = e, i = null != (n = t.metadata) ? n : {}, p = (0, u.FI)(i[h.PC.CREATED_AT], l), _ = a.Z.get((0, d.rR)(t.type));
  return (0, o.jsxs)("li", {
    className: j.connection,
    children: [(0, o.jsx)(c.ua7, {
      text: null == _ ? true : _.name,
      children: e => (0, o.jsx)("div", y(v({}, e), {
        className: j.platformIconContainer,
        children: (0, o.jsx)("img", {
          alt: g.intl.formatToPlainString(g.t.rtm15O, {
            name: null == _ ? true : _.name
          }),
          className: j.platformIcon,
          src: null == _ ? true : _.icon.lightPNG
        })
      }))
    }), (0, o.jsxs)("div", {
      className: j.connectionInfo,
      children: [(0, o.jsxs)("div", {
        children: [(() => {
          var e;
          let n = null == _ || null == (e = _.getPlatformUserUrl) ? true : e.call(_, t);
          return null == n ? (0, o.jsx)(c.ua7, {
            overflowOnly: true,
            text: t.name,
            children: e => (0, o.jsx)(c.Text, y(v({}, e), {
              variant: "text-sm/normal",
              className: j.accountNameText,
              children: t.name
            }))
          }) : (0, o.jsx)(c.eee, {
            href: n,
            className: j.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == _ ? true : _.name) != null ? "".concat(_.name, ", ").concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJC)) : "".concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJC)),
            onClick: e => {
              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: t.type,
                other_user_id: r
              }), (0, x.q)({
                href: n,
                trusted: (null == _ ? true : _.type) !== b.ABu.DOMAIN
              }, e)
            },
            children: (0, o.jsxs)("div", {
              className: j.accountName,
              children: [(0, o.jsx)(c.ua7, {
                overflowOnly: true,
                text: t.name,
                children: e => (0, o.jsx)(c.Text, y(v({}, e), {
                  variant: "text-sm/normal",
                  className: j.accountNameText,
                  children: t.name
                }))
              }), (0, o.jsx)(m.Z, {
                className: j.platformUrlIcon,
                direction: m.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != p && (0, o.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: g.intl.format(g.t["9rfonp"], {
            date: p
          })
        })]
      }), (0, o.jsx)("div", {
        className: j.metadata,
        children: t.type === b.ABu.REDDIT ? (0, f.oP)(i) : t.type === b.ABu.STEAM ? (0, f.Dq)(i) : t.type === b.ABu.BLUESKY || t.type === b.ABu.MASTODON || t.type === b.ABu.TWITTER ? (0, f.rJ)(i) : t.type === b.ABu.PAYPAL ? (0, f.li)(i) : t.type === b.ABu.EBAY ? (0, f.ul)(i) : t.type === b.ABu.TIKTOK ? (0, f.hf)(i) : null
      })]
    })]
  })
}

function I(e) {
  let {
    connections: n,
    userId: t,
    className: l
  } = e, c = (0, i.e7)([p.default], () => p.default.locale);
  return 0 === n.length ? null : (0, o.jsx)("ul", {
    className: r()(j.container, l),
    children: n.map(e => (0, o.jsx)(_, {
      account: e,
      userId: t,
      locale: c
    }, "".concat(e.type, ":").concat(e.id)))
  })
}