/** Chunk was on 76708 **/
/** chunk id: 574887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  var t;
  let {
    account: n,
    locale: i,
    userId: l
  } = e, o = null != (t = n.metadata) ? t : {}, m = (0, u.FI)(o[j.PC.CREATED_AT], i), v = c.Z.get((0, d.rR)(n.type));
  return (0, r.jsxs)("li", {
    className: O.connection,
    children: [(0, r.jsx)(a.ua7, {
      text: null == v ? true : v.name,
      children: e => (0, r.jsx)("div", h(x({}, e), {
        className: O.platformIconContainer,
        children: (0, r.jsx)("img", {
          alt: y.intl.formatToPlainString(y.t.rtm15O, {
            name: null == v ? true : v.name
          }),
          className: O.platformIcon,
          src: null == v ? true : v.icon.lightPNG
        })
      }))
    }), (0, r.jsxs)("div", {
      className: O.connectionInfo,
      children: [(0, r.jsxs)("div", {
        children: [(() => {
          var e;
          let t = null == v || null == (e = v.getPlatformUserUrl) ? true : e.call(v, n);
          return null == t ? (0, r.jsx)(a.ua7, {
            overflowOnly: true,
            text: n.name,
            children: e => (0, r.jsx)(a.Text, h(x({}, e), {
              variant: "text-sm/normal",
              className: O.accountNameText,
              children: n.name
            }))
          }) : (0, r.jsx)(a.eee, {
            href: t,
            className: O.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == v ? true : v.name) != null ? "".concat(v.name, ", ").concat(n.name, ", ").concat(y.intl.string(y.t.q5jLJC)) : "".concat(n.name, ", ").concat(y.intl.string(y.t.q5jLJC)),
            onClick: e => {
              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: n.type,
                other_user_id: l
              }), (0, g.q)({
                href: t,
                trusted: (null == v ? true : v.type) !== b.ABu.DOMAIN
              }, e)
            },
            children: (0, r.jsxs)("div", {
              className: O.accountName,
              children: [(0, r.jsx)(a.ua7, {
                overflowOnly: true,
                text: n.name,
                children: e => (0, r.jsx)(a.Text, h(x({}, e), {
                  variant: "text-sm/normal",
                  className: O.accountNameText,
                  children: n.name
                }))
              }), (0, r.jsx)(p.Z, {
                className: O.platformUrlIcon,
                direction: p.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != m && (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: y.intl.format(y.t["9rfonp"], {
            date: m
          })
        })]
      }), (0, r.jsx)("div", {
        className: O.metadata,
        children: n.type === b.ABu.REDDIT ? (0, f.oP)(o) : n.type === b.ABu.STEAM ? (0, f.Dq)(o) : n.type === b.ABu.BLUESKY || n.type === b.ABu.MASTODON || n.type === b.ABu.TWITTER ? (0, f.rJ)(o) : n.type === b.ABu.PAYPAL ? (0, f.li)(o) : n.type === b.ABu.EBAY ? (0, f.ul)(o) : n.type === b.ABu.TIKTOK ? (0, f.hf)(o) : null
      })]
    })]
  })
}

function _(e) {
  let {
    connections: t,
    userId: n,
    className: i
  } = e, a = (0, o.e7)([m.default], () => m.default.locale);
  return 0 === t.length ? null : (0, r.jsx)("ul", {
    className: l()(O.container, i),
    children: t.map(e => (0, r.jsx)(v, {
      account: e,
      userId: n,
      locale: a
    }, "".concat(e.type, ":").concat(e.id)))
  })
}