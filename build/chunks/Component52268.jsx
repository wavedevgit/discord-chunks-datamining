/** Chunk was on 55183 **/
/** chunk id: 52268, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk731896 = require("./731896.js"),
  Chunk528439 = require("./528439.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk994055 = require("./994055.js"),
  Chunk223223 = require("./223223.js");

function h(e) {
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var r, n, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = {},
      l = Object.keys(e);
    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
  }
  return i
}
let y = () => 80,
  x = e => {
    var {
      children: t,
      className: r,
      isSelected: i = false
    } = e, l = j(e, ["children", "className", "isSelected"]);
    return (0, n.jsx)(c.P3F, b(h({
      className: o()(m.effectGridItem, r, {
        [m.selected]: i
      })
    }, l), {
      onClick: l.onSelect,
      children: t
    }))
  },
  O = e => {
    var t, {
        profileEffect: r,
        innerRef: l,
        section: o,
        isSelected: s,
        canUsePremiumCollectibles: c
      } = e,
      u = j(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]);
    let p = (0, d.V)(r.id),
      y = i.useRef(null),
      {
        accessibilityLabel: O,
        thumbnailPreviewSrc: v,
        title: P
      } = null != (t = null == p ? true : p.config) ? t : {};
    return (0, n.jsxs)(x, b(h({
      innerRef: null != l ? l : y,
      isSelected: s
    }, u), {
      children: [(0, n.jsx)("img", {
        src: g,
        alt: O,
        className: m.presetEffectBackground
      }), (0, n.jsx)("img", {
        className: m.presetEffectImg,
        src: v,
        alt: P
      }), (0, n.jsx)(a.Z, {
        isPurchaseSection: o === f.$0.PURCHASE,
        isPremiumSection: o === f.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: c,
        skuId: r.skuId
      })]
    }))
  },
  v = e => {
    let {
      user: t,
      guild: r,
      pendingProfileEffect: i,
      selectedProfileEffectRef: l,
      onSelect: o,
      onOpenShop: a
    } = e, d = (0, f.ZP)(), g = null != i, j = u.ZP.canUseCollectibles(t);
    return (0, n.jsx)("section", {
      className: m.section,
      children: (0, n.jsx)(c.GMG, {
        fade: true,
        itemGutter: 12,
        sectionGutter: 16,
        paddingVertical: 0,
        paddingHorizontal: 12,
        className: m.list,
        columns: 3,
        sections: d.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        renderItem: (e, t, u, b) => {
          let {
            section: y,
            items: v
          } = d[e];
          return (0, s.EQ)(v[t]).with(f.Tm, () => (0, n.jsxs)(x, {
            style: h({}, u),
            isSelected: !g,
            onSelect: () => o(null),
            children: [(0, n.jsx)(c.t6m, {
              size: "md",
              color: "currentColor",
              className: m.notAllowedIcon
            }), (0, n.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "header-primary",
              children: null != r ? p.intl.string(p.t.CHf9iI) : p.intl.string(p.t.PoWNfX)
            })]
          }, b)).with(f.oT, () => (0, n.jsxs)(x, {
            style: u,
            onSelect: a,
            children: [(0, n.jsx)(c.EOn, {
              size: "custom",
              width: 23,
              height: 23,
              color: "currentColor",
              className: m.shopIcon
            }), (0, n.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "header-primary",
              children: p.intl.string(p.t.pWG4zc)
            })]
          }, b)).otherwise(e => {
            let t = i === e.id;
            return (0, n.jsx)(O, {
              style: h({}, u),
              section: y,
              profileEffect: e,
              innerRef: t ? l : true,
              isSelected: t,
              onSelect: () => o(e.id),
              canUsePremiumCollectibles: j
            }, b)
          })
        },
        renderSection: (e, t) => {
          let {
            header: r
          } = d[e];
          return (0, n.jsx)("div", {
            style: b(h({}, t), {
              height: "".concat(16, "px"),
              position: "absolute"
            }),
            children: (0, n.jsx)(c.vwX, {
              children: r
            })
          })
        },
        getSectionHeight: () => 16,
        getItemKey: (e, t) => {
          var r, n;
          return null != (n = null == (r = d[e].items[t]) ? true : r.id) ? n : null
        },
        getItemHeight: y,
        removeEdgeItemGutters: true
      })
    })
  }