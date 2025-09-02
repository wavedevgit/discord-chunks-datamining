/** Chunk was on 93979 **/
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

function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function y(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function O(e) {
  var n;
  let {
    account: t,
    locale: o,
    userId: r
  } = e, i = null != (n = t.metadata) ? n : {}, p = (0, u.FI)(i[b.PC.CREATED_AT], o), O = s.Z.get((0, d.rR)(t.type));
  return (0, l.jsxs)("li", {
    className: v.connection,
    children: [(0, l.jsx)(c.ua7, {
      text: null == O ? true : O.name,
      children: e => (0, l.jsx)("div", y(g({}, e), {
        className: v.platformIconContainer,
        children: (0, l.jsx)("img", {
          alt: j.intl.formatToPlainString(j.t.rtm15O, {
            name: null == O ? true : O.name
          }),
          className: v.platformIcon,
          src: null == O ? true : O.icon.lightPNG
        })
      }))
    }), (0, l.jsxs)("div", {
      className: v.connectionInfo,
      children: [(0, l.jsxs)("div", {
        children: [(() => {
          var e;
          let n = null == O || null == (e = O.getPlatformUserUrl) ? true : e.call(O, t);
          return null == n ? (0, l.jsx)(c.ua7, {
            overflowOnly: true,
            text: t.name,
            children: e => (0, l.jsx)(c.Text, y(g({}, e), {
              variant: "text-sm/normal",
              className: v.accountNameText,
              children: t.name
            }))
          }) : (0, l.jsx)(c.eee, {
            href: n,
            className: v.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == O ? true : O.name) != null ? "".concat(O.name, ", ").concat(t.name, ", ").concat(j.intl.string(j.t.q5jLJC)) : "".concat(t.name, ", ").concat(j.intl.string(j.t.q5jLJC)),
            onClick: e => {
              (0, a.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: t.type,
                other_user_id: r
              }), (0, x.q)({
                href: n,
                trusted: (null == O ? true : O.type) !== h.ABu.DOMAIN
              }, e)
            },
            children: (0, l.jsxs)("div", {
              className: v.accountName,
              children: [(0, l.jsx)(c.ua7, {
                overflowOnly: true,
                text: t.name,
                children: e => (0, l.jsx)(c.Text, y(g({}, e), {
                  variant: "text-sm/normal",
                  className: v.accountNameText,
                  children: t.name
                }))
              }), (0, l.jsx)(f.Z, {
                className: v.platformUrlIcon,
                direction: f.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != p && (0, l.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: j.intl.format(j.t["9rfonp"], {
            date: p
          })
        })]
      }), (0, l.jsx)("div", {
        className: v.metadata,
        children: t.type === h.ABu.REDDIT ? (0, m.oP)(i) : t.type === h.ABu.STEAM ? (0, m.Dq)(i) : t.type === h.ABu.BLUESKY || t.type === h.ABu.MASTODON || t.type === h.ABu.TWITTER ? (0, m.rJ)(i) : t.type === h.ABu.PAYPAL ? (0, m.li)(i) : t.type === h.ABu.EBAY ? (0, m.ul)(i) : t.type === h.ABu.TIKTOK ? (0, m.hf)(i) : null
      })]
    })]
  })
}

function I(e) {
  let {
    connections: n,
    userId: t,
    className: o
  } = e, c = (0, i.e7)([p.default], () => p.default.locale);
  return 0 === n.length ? null : (0, l.jsx)("ul", {
    className: r()(v.container, o),
    children: n.map(e => (0, l.jsx)(O, {
      account: e,
      userId: t,
      locale: c
    }, "".concat(e.type, ":").concat(e.id)))
  })
}