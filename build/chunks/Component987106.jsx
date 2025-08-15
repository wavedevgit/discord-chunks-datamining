/** Chunk was on 30243 **/
/** chunk id: 987106, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk744969 = require("./744969.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk49012 = require("./49012.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk392061 = require("./392061.js");

function g(e) {
  let {
    url: t,
    onSelect: r
  } = e;
  return f.wS && null != t ? (0, n.jsx)(c.v2r, {
    navId: "component-button",
    onClose: s.Zy,
    "aria-label": y.intl.string(y.t.tvTXy8),
    onSelect: r,
    children: (0, n.jsx)(c.kSQ, {
      children: (0, n.jsx)(c.sNh, {
        id: "copy",
        label: y.intl.string(y.t.uHhnfX),
        action: () => (0, f.JG)(t)
      })
    })
  }) : null
}

function h(e) {
  let t, {
      label: r,
      style: l,
      disabled: f,
      emoji: y,
      url: h,
      skuId: v
    } = e,
    {
      executeStateUpdate: P,
      visualState: x,
      isDisabled: S
    } = (0, m.Ee)(e),
    w = (0, p.s)(v),
    C = null != v && l === d.ZJ.PREMIUM,
    E = C && (null == w ? true : w.disabled),
    N = C ? null == w ? true : w.label : r,
    I = null != y,
    T = null != N && N.length > 0,
    Z = l === d.ZJ.LINK && null != h && h.length > 0,
    k = x === O.gH.LOADING || C && null == w;
  return t = Z ? () => {
    (0, b.q)({
      href: null != h ? h : "",
      shouldConfirm: true
    })
  } : C ? null != w && false === w.disabled ? w.onClick : o.noop : () => P(), (0, n.jsxs)(a.zx, {
    "data-migration-pending": true,
    color: function(e) {
      switch (e) {
        case d.ZJ.PRIMARY:
        case d.ZJ.PREMIUM:
          return a.zx.Colors.BRAND;
        case d.ZJ.SUCCESS:
          return a.zx.Colors.GREEN;
        case d.ZJ.DESTRUCTIVE:
          return a.zx.Colors.RED;
        default:
          return a.zx.Colors.PRIMARY
      }
    }(l),
    size: a.zx.Sizes.SMALL,
    disabled: f || x === O.gH.DISABLED || S || E,
    onClick: t,
    onContextMenu: e => {
      Z && (0, s.vq)(e, e => {
        var t, r;
        return (0, n.jsx)(g, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), r = r = {
          url: h
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      })
    },
    role: Z ? "link" : "button",
    children: [(0, n.jsxs)("div", {
      className: i()(j.content, {
        [j.hidden]: k,
        [j.premium]: C
      }),
      "aria-hidden": k,
      children: [C ? (0, n.jsx)("div", {
        className: j.shopIcon,
        children: (0, n.jsx)(c.EOn, {
          size: "xs",
          color: "white"
        })
      }) : null, I ? (0, n.jsx)(u.Z, {
        className: i()({
          [j.textEmoji]: T
        }),
        src: y.src,
        emojiId: y.id,
        emojiName: y.name,
        animated: y.animated
      }) : null, T ? (0, n.jsx)("div", {
        className: j.label,
        children: N
      }) : null, Z ? (0, n.jsx)(c.rgF, {
        size: "xs",
        color: "currentColor",
        className: j.launchIcon
      }) : null]
    }), k ? (0, n.jsx)("div", {
      className: j.loading,
      children: (0, n.jsx)(c.bbz, {
        dotRadius: 3.5,
        themed: true
      })
    }) : null]
  })
}