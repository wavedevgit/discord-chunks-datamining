/** Chunk was on 11776 **/
/** chunk id: 574887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk738873 = require("./738873.js");

function y(e) {
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

function v(e, t) {
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

function O(e) {
  var t;
  let {
    account: n,
    locale: l,
    userId: i
  } = e, o = null != (t = n.metadata) ? t : {}, p = (0, u.FI)(o[j.PC.CREATED_AT], l), O = c.Z.get((0, d.rR)(n.type));
  return (0, r.jsxs)("li", {
    className: x.connection,
    children: [(0, r.jsx)(a.ua7, {
      text: null == O ? true : O.name,
      children: e => (0, r.jsx)("div", v(y({}, e), {
        className: x.platformIconContainer,
        children: (0, r.jsx)("img", {
          alt: h.intl.formatToPlainString(h.t.rtm15O, {
            name: null == O ? true : O.name
          }),
          className: x.platformIcon,
          src: null == O ? true : O.icon.lightPNG
        })
      }))
    }), (0, r.jsxs)("div", {
      className: x.connectionInfo,
      children: [(0, r.jsxs)("div", {
        children: [(() => {
          var e;
          let t = null == O || null == (e = O.getPlatformUserUrl) ? true : e.call(O, n);
          return null == t ? (0, r.jsx)(a.ua7, {
            overflowOnly: true,
            text: n.name,
            children: e => (0, r.jsx)(a.Text, v(y({}, e), {
              variant: "text-sm/normal",
              className: x.accountNameText,
              children: n.name
            }))
          }) : (0, r.jsx)(a.eee, {
            href: t,
            className: x.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == O ? true : O.name) != null ? "".concat(O.name, ", ").concat(n.name, ", ").concat(h.intl.string(h.t.q5jLJC)) : "".concat(n.name, ", ").concat(h.intl.string(h.t.q5jLJC)),
            onClick: e => {
              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: n.type,
                other_user_id: i
              }), (0, g.q)({
                href: t,
                trusted: (null == O ? true : O.type) !== b.ABu.DOMAIN
              }, e)
            },
            children: (0, r.jsxs)("div", {
              className: x.accountName,
              children: [(0, r.jsx)(a.ua7, {
                overflowOnly: true,
                text: n.name,
                children: e => (0, r.jsx)(a.Text, v(y({}, e), {
                  variant: "text-sm/normal",
                  className: x.accountNameText,
                  children: n.name
                }))
              }), (0, r.jsx)(m.Z, {
                className: x.platformUrlIcon,
                direction: m.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != p && (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: h.intl.format(h.t["9rfonp"], {
            date: p
          })
        })]
      }), (0, r.jsx)("div", {
        className: x.metadata,
        children: n.type === b.ABu.REDDIT ? (0, f.oP)(o) : n.type === b.ABu.STEAM ? (0, f.Dq)(o) : n.type === b.ABu.BLUESKY || n.type === b.ABu.MASTODON || n.type === b.ABu.TWITTER ? (0, f.rJ)(o) : n.type === b.ABu.PAYPAL ? (0, f.li)(o) : n.type === b.ABu.EBAY ? (0, f.ul)(o) : n.type === b.ABu.TIKTOK ? (0, f.hf)(o) : null
      })]
    })]
  })
}

function _(e) {
  let {
    connections: t,
    userId: n,
    className: l
  } = e, a = (0, o.e7)([p.default], () => p.default.locale);
  return 0 === t.length ? null : (0, r.jsx)("ul", {
    className: i()(x.container, l),
    children: t.map(e => (0, r.jsx)(O, {
      account: e,
      userId: n,
      locale: a
    }, "".concat(e.type, ":").concat(e.id)))
  })
}