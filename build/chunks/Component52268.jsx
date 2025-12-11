/** Chunk was on 55183 **/
/** chunk id: 52268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk578976 = require("./578976.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk731896 = require("./731896.js"),
  Chunk528439 = require("./528439.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk176404 = require("./176404.js"),
  Chunk223223 = require("./223223.js");

function h(e) {
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

function x(e, t) {
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

function j(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let y = () => 80,
  P = e => {
    var {
      children: t,
      className: n,
      isSelected: i = false
    } = e, l = j(e, ["children", "className", "isSelected"]);
    return (0, r.jsx)(c.P3F, x(h({
      className: o()(g.effectGridItem, n, {
        [g.selected]: i
      })
    }, l), {
      onClick: l.onSelect,
      children: t
    }))
  },
  O = e => {
    var t, {
        profileEffect: n,
        innerRef: l,
        section: o,
        isSelected: s,
        canUsePremiumCollectibles: c
      } = e,
      d = j(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]);
    let m = (0, f.V)(n.skuId),
      y = i.useRef(null),
      {
        accessibilityLabel: O,
        thumbnailPreviewSrc: v,
        title: E
      } = null != (t = null == m ? true : m.config) ? t : {},
      C = i.useMemo(() => (0, a.JE)(v), [v]);
    return (0, r.jsxs)(P, x(h({
      innerRef: null != l ? l : y,
      isSelected: s
    }, d), {
      children: [(0, r.jsx)("img", {
        src: b,
        alt: O,
        className: g.presetEffectBackground
      }), (0, r.jsx)("img", {
        className: g.presetEffectImg,
        src: C,
        alt: E
      }), (0, r.jsx)(u.Z, {
        skuId: n.skuId,
        canUsePremiumCollectibles: c,
        isPurchaseSection: o === p.$0.PURCHASE,
        isPremiumSection: o === p.$0.PREMIUM_PURCHASE
      })]
    }))
  },
  v = e => {
    let {
      user: t,
      guild: n,
      pendingProfileEffect: i,
      selectedProfileEffectRef: l,
      onSelect: o,
      onOpenShop: a
    } = e, u = (0, p.ZP)(), f = null != i, b = d.ZP.canUseCollectibles(t);
    return (0, r.jsx)("section", {
      className: g.section,
      children: (0, r.jsx)(c.GMG, {
        fade: true,
        itemGutter: 12,
        sectionGutter: 16,
        paddingVertical: 0,
        paddingHorizontal: 12,
        className: g.list,
        columns: 3,
        sections: u.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        renderItem: (e, t, d, x) => {
          let {
            section: j,
            items: y
          } = u[e];
          return (0, s.EQ)(y[t]).with(p.Tm, () => (0, r.jsxs)(P, {
            style: h({}, d),
            isSelected: !f,
            onSelect: () => o(null),
            children: [(0, r.jsx)(c.t6m, {
              size: "md",
              color: "currentColor",
              className: g.notAllowedIcon
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "header-primary",
              children: null != n ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.PoWNfe)
            })]
          }, x)).with(p.oT, () => (0, r.jsxs)(P, {
            style: d,
            onSelect: a,
            children: [(0, r.jsx)(c.EOn, {
              size: "custom",
              width: 23,
              height: 23,
              color: "currentColor",
              className: g.shopIcon
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "header-primary",
              children: m.intl.string(m.t.pWG4ze)
            })]
          }, x)).otherwise(e => {
            let t = (null == i ? true : i.skuId) === e.skuId;
            return (0, r.jsx)(O, {
              style: h({}, d),
              section: j,
              profileEffect: e,
              innerRef: t ? l : true,
              isSelected: t,
              onSelect: () => o(e),
              canUsePremiumCollectibles: b
            }, x)
          })
        },
        renderSection: (e, t) => {
          let {
            header: n
          } = u[e];
          return (0, r.jsx)("div", {
            style: x(h({}, t), {
              height: "".concat(16, "px"),
              position: "absolute"
            }),
            children: (0, r.jsx)(c.Heading, {
              variant: "heading-md/medium",
              children: n
            })
          })
        },
        getSectionHeight: () => 16,
        getItemKey: (e, t) => u[e].items[t].skuId,
        getItemHeight: y,
        removeEdgeItemGutters: true
      })
    })
  }