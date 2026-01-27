/** Chunk was on 20941 **/
/** chunk id: 292366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function y(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return f.p5 && null != t ? (0, r.jsx)(o.W1t, {
    "data-menu-migrated-auto": true,
    navId: "component-button",
    onClose: c.Z_,
    "aria-label": g.intl.string(g.t.tvTXy8),
    onSelect: n,
    children: (0, r.jsx)(o.rXV, {
      children: (0, r.jsx)(o.Drp, {
        id: "copy",
        label: g.intl.string(g.t.uHhnfa),
        action: () => (0, f.C)(t)
      })
    })
  }) : null
}

function v(e) {
  let t, {
      label: n,
      style: l,
      disabled: f,
      emoji: g,
      url: v,
      skuId: j
    } = e,
    {
      executeStateUpdate: C,
      visualState: _,
      isDisabled: A
    } = (0, h.At)(e),
    O = (0, m.Q)(j),
    E = null != j && l === d.in.PREMIUM,
    S = E && (null == O ? true : O.disabled),
    N = E ? null == O ? true : O.label : n,
    I = null != g,
    P = null != N && N.length > 0,
    w = l === d.in.LINK && null != v && v.length > 0,
    T = _ === b.BB.LOADING || E && null == O;
  return t = w ? () => {
    (0, p.h)({
      href: null != v ? v : "",
      shouldConfirm: true
    })
  } : E ? null != O && false === O.disabled ? O.onClick : i.noop : () => C(), (0, r.jsxs)(s.$n, {
    "data-migration-pending": true,
    color: function(e) {
      switch (e) {
        case d.in.PRIMARY:
        case d.in.PREMIUM:
          return s.$n.Colors.BRAND;
        case d.in.SUCCESS:
          return s.$n.Colors.GREEN;
        case d.in.DESTRUCTIVE:
          return s.$n.Colors.RED;
        default:
          return s.$n.Colors.PRIMARY
      }
    }(l),
    size: s.$n.Sizes.SMALL,
    disabled: f || _ === b.BB.DISABLED || A || S,
    onClick: t,
    onContextMenu: e => {
      w && (0, c.jA)(e, e => {
        var t, n;
        return (0, r.jsx)(y, (t = function(e) {
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
          url: v
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
    role: w ? "link" : "button",
    children: [(0, r.jsxs)("div", {
      className: a()(x.Qs, {
        [x.R]: T,
        [x.M2]: E
      }),
      "aria-hidden": T,
      children: [E ? (0, r.jsx)("div", {
        className: x.sV,
        children: (0, r.jsx)(o.U1X, {
          size: "xs",
          color: "white"
        })
      }) : null, I ? (0, r.jsx)(u.A, {
        className: a()({
          [x.MR]: P
        }),
        src: g.src,
        emojiId: g.id,
        emojiName: g.name,
        animated: g.animated
      }) : null, P ? (0, r.jsx)("div", {
        className: x.Pf,
        children: N
      }) : null, w ? (0, r.jsx)(o.tfB, {
        size: "xs",
        color: "currentColor",
        className: x.LE
      }) : null]
    }), T ? (0, r.jsx)("div", {
      className: x.Lq,
      children: (0, r.jsx)(o.nvX, {
        dotRadius: 3.5,
        themed: true
      })
    }) : null]
  })
}