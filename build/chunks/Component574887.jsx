/** Chunk was on 98360 **/
/** chunk id: 574887, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function v(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function _(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function y(e) {
  var n;
  let {
    account: t,
    locale: o,
    userId: l
  } = e, i = null != (n = t.metadata) ? n : {}, p = (0, u.FI)(i[g.PC.CREATED_AT], o), y = a.Z.get((0, d.rR)(t.type));
  return (0, r.jsxs)("li", {
    className: j.connection,
    children: [(0, r.jsx)(c.ua7, {
      text: null == y ? true : y.name,
      children: e => (0, r.jsx)("div", _(v({}, e), {
        className: j.platformIconContainer,
        children: (0, r.jsx)("img", {
          alt: h.intl.formatToPlainString(h.t.rtm15O, {
            name: null == y ? true : y.name
          }),
          className: j.platformIcon,
          src: null == y ? true : y.icon.lightPNG
        })
      }))
    }), (0, r.jsxs)("div", {
      className: j.connectionInfo,
      children: [(0, r.jsxs)("div", {
        children: [(() => {
          var e;
          let n = null == y || null == (e = y.getPlatformUserUrl) ? true : e.call(y, t);
          return null == n ? (0, r.jsx)(c.ua7, {
            overflowOnly: true,
            text: t.name,
            children: e => (0, r.jsx)(c.Text, _(v({}, e), {
              variant: "text-sm/normal",
              className: j.accountNameText,
              children: t.name
            }))
          }) : (0, r.jsx)(c.eee, {
            href: n,
            className: j.platformUrlAnchor,
            useDefaultUnderlineStyles: false,
            "aria-label": (null == y ? true : y.name) != null ? "".concat(y.name, ", ").concat(t.name, ", ").concat(h.intl.string(h.t.q5jLJC)) : "".concat(t.name, ", ").concat(h.intl.string(h.t.q5jLJC)),
            onClick: e => {
              (0, s.yw)(x.rMx.CONNECTED_ACCOUNT_VIEWED, {
                platform_type: t.type,
                other_user_id: l
              }), (0, b.q)({
                href: n,
                trusted: (null == y ? true : y.type) !== x.ABu.DOMAIN
              }, e)
            },
            children: (0, r.jsxs)("div", {
              className: j.accountName,
              children: [(0, r.jsx)(c.ua7, {
                overflowOnly: true,
                text: t.name,
                children: e => (0, r.jsx)(c.Text, _(v({}, e), {
                  variant: "text-sm/normal",
                  className: j.accountNameText,
                  children: t.name
                }))
              }), (0, r.jsx)(m.Z, {
                className: j.platformUrlIcon,
                direction: m.Z.Directions.RIGHT
              })]
            })
          })
        })(), null != p && (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: h.intl.format(h.t["9rfonp"], {
            date: p
          })
        })]
      }), (0, r.jsx)("div", {
        className: j.metadata,
        children: t.type === x.ABu.REDDIT ? (0, f.oP)(i) : t.type === x.ABu.STEAM ? (0, f.Dq)(i) : t.type === x.ABu.BLUESKY || t.type === x.ABu.MASTODON || t.type === x.ABu.TWITTER ? (0, f.rJ)(i) : t.type === x.ABu.PAYPAL ? (0, f.li)(i) : t.type === x.ABu.EBAY ? (0, f.ul)(i) : t.type === x.ABu.TIKTOK ? (0, f.hf)(i) : null
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
  return 0 === n.length ? null : (0, r.jsx)("ul", {
    className: l()(j.container, o),
    children: n.map(e => (0, r.jsx)(y, {
      account: e,
      userId: t,
      locale: c
    }, "".concat(e.type, ":").concat(e.id)))
  })
}