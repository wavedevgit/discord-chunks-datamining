/** Chunk was on 31553 **/
/** chunk id: 574887, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk638999 = require("./638999.js");

function b(e) {
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
    locale: i,
    userId: r
  } = e, o = null != (n = t.metadata) ? n : {}, p = (0, u.FI)(o[x.PC.CREATED_AT], i), O = a.Z.get((0, d.rR)(t.type));
  return (0, l.jsxs)("li", {
    className: g.connection,
    children: [(0, l.jsx)(s.ua7, {
      text: null == O ? true : O.name,
      children: e => (0, l.jsx)("div", y(b({}, e), {
        className: g.platformIconContainer,
        children: (0, l.jsx)("img", {
          alt: v.intl.formatToPlainString(v.t.rtm15O, {
            name: null == O ? true : O.name
          }),
          className: g.platformIcon,
          src: null == O ? true : O.icon.lightPNG
        })
      }))
    }), (0, l.jsxs)("div", {
      className: g.connectionInfo,
      children: [(0, l.jsxs)("div", {
        children: [(() => {
          var e;
          let n = null == O || null == (e = O.getPlatformUserUrl) ? true : e.call(O, t);
          return null == n ? (0, l.jsx)(s.ua7, {
            overflowOnly: true,
            text: t.name,
            children: e => (0, l.jsx)(s.Text, y(b({}, e), {
              variant: "text-sm/normal",
              className: g.accountNameText,
              children: t.name
            }))
          }) : (0, l.jsx)(s.eee, {
            href: n,
            className: g.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == O ? true : O.name) != null ? "".concat(O.name, ", ").concat(t.name, ", ").concat(v.intl.string(v.t.q5jLJC)) : "".concat(t.name, ", ").concat(v.intl.string(v.t.q5jLJC)),
            onClick: e => {
              (0, c.yw)(j.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: t.type,
                other_user_id: r
              }), (0, h.q)({
                href: n,
                trusted: (null == O ? true : O.type) !== j.ABu.DOMAIN
              }, e)
            },
            children: (0, l.jsxs)("div", {
              className: g.accountName,
              children: [(0, l.jsx)(s.ua7, {
                overflowOnly: true,
                text: t.name,
                children: e => (0, l.jsx)(s.Text, y(b({}, e), {
                  variant: "text-sm/normal",
                  className: g.accountNameText,
                  children: t.name
                }))
              }), (0, l.jsx)(m.Z, {
                className: g.platformUrlIcon,
                direction: m.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != p && (0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          children: v.intl.format(v.t["9rfonp"], {
            date: p
          })
        })]
      }), (0, l.jsx)("div", {
        className: g.metadata,
        children: t.type === j.ABu.REDDIT ? (0, f.oP)(o) : t.type === j.ABu.STEAM ? (0, f.Dq)(o) : t.type === j.ABu.BLUESKY || t.type === j.ABu.MASTODON || t.type === j.ABu.TWITTER ? (0, f.rJ)(o) : t.type === j.ABu.PAYPAL ? (0, f.li)(o) : t.type === j.ABu.EBAY ? (0, f.ul)(o) : t.type === j.ABu.TIKTOK ? (0, f.hf)(o) : null
      })]
    })]
  })
}

function Z(e) {
  let {
    connections: n,
    userId: t,
    className: i
  } = e, s = (0, o.e7)([p.default], () => p.default.locale);
  return 0 === n.length ? null : (0, l.jsx)("ul", {
    className: r()(g.container, i),
    children: n.map(e => (0, l.jsx)(O, {
      account: e,
      userId: t,
      locale: s
    }, "".concat(e.type, ":").concat(e.id)))
  })
}