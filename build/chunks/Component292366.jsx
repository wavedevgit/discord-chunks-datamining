/** Chunk was on 49559 **/
/** chunk id: 292366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk30008 = require("./30008.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk307600 = require("./307600.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk489414 = require("./489414.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk592392 = require("./592392.js");

function j(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return m.p5 && null != t ? (0, r.jsx)(s.W1t, {
    "data-menu-migrated-auto": true,
    navId: "component-button",
    onClose: c.Z_,
    "aria-label": y.intl.string(y.t.tvTXy8),
    onSelect: n,
    children: (0, r.jsx)(s.rXV, {
      children: (0, r.jsx)(s.Drp, {
        id: "copy",
        label: y.intl.string(y.t.uHhnfa),
        action: () => (0, m.C)(t)
      })
    })
  }) : null
}

function g(e) {
  let t, {
      label: n,
      style: l,
      disabled: m,
      emoji: y,
      url: g,
      skuId: A
    } = e,
    {
      executeStateUpdate: v,
      visualState: E,
      isDisabled: C
    } = (0, O.At)(e),
    x = (0, p.Q)(A),
    N = null != A && l === d.in.PREMIUM,
    I = N && (null == x ? true : x.disabled),
    P = N ? null == x ? true : x.label : n,
    S = null != y,
    _ = null != P && P.length > 0,
    T = l === d.in.LINK && null != g && g.length > 0,
    R = E === b.BB.LOADING || N && null == x;
  return t = T ? () => {
    (0, f.h)({
      href: null != g ? g : "",
      shouldConfirm: true
    })
  } : N ? null != x && false === x.disabled ? x.onClick : i.noop : () => v(), (0, r.jsxs)(o.$n, {
    "data-migration-pending": true,
    color: function(e) {
      switch (e) {
        case d.in.PRIMARY:
        case d.in.PREMIUM:
          return o.$n.Colors.BRAND;
        case d.in.SUCCESS:
          return o.$n.Colors.GREEN;
        case d.in.DESTRUCTIVE:
          return o.$n.Colors.RED;
        default:
          return o.$n.Colors.PRIMARY
      }
    }(l),
    size: o.$n.Sizes.SMALL,
    disabled: m || E === b.BB.DISABLED || C || I,
    onClick: t,
    onContextMenu: e => {
      T && (0, c.jA)(e, e => {
        var t, n;
        return (0, r.jsx)(j, (t = function(e) {
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
        }({}, e), n = n = {
          url: g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    },
    role: T ? "link" : "button",
    children: [(0, r.jsxs)("div", {
      className: a()(h.Qs, {
        [h.R]: R,
        [h.M2]: N
      }),
      "aria-hidden": R,
      children: [N ? (0, r.jsx)("div", {
        className: h.sV,
        children: (0, r.jsx)(s.U1X, {
          size: "xs",
          color: "white"
        })
      }) : null, S ? (0, r.jsx)(u.A, {
        className: a()({
          [h.MR]: _
        }),
        src: y.src,
        emojiId: y.id,
        emojiName: y.name,
        animated: y.animated
      }) : null, _ ? (0, r.jsx)("div", {
        className: h.Pf,
        children: P
      }) : null, T ? (0, r.jsx)(s.tfB, {
        size: "xs",
        color: "currentColor",
        className: h.LE
      }) : null]
    }), R ? (0, r.jsx)("div", {
      className: h.Lq,
      children: (0, r.jsx)(s.nvX, {
        dotRadius: 3.5,
        themed: true
      })
    }) : null]
  })
}