/** Chunk was on 79589 **/
/** chunk id: 818611, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk74538 = require("./74538.js"),
  Chunk864106 = require("./864106.js"),
  Chunk439959 = require("./439959.js"),
  Chunk125988 = require("./125988.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk928479 = require("./928479.js");

function v(e) {
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

function j(e, t) {
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

function y(e, t) {
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
let O = () => 80,
  f = e => {
    var {
      children: t,
      className: r,
      onSelect: i,
      isSelected: l = false
    } = e, a = y(e, ["children", "className", "onSelect", "isSelected"]);
    return (0, n.jsx)(o.P3F, j(v({
      className: s()(g.decorationGridItem, l ? g.selected : true, r)
    }, a), {
      onClick: i,
      children: t
    }))
  },
  P = e => {
    var {
      user: t,
      avatarDecoration: r,
      innerRef: l,
      section: s,
      canUsePremiumCollectibles: a,
      isTryItOut: o = false,
      isSelected: d = false
    } = e, m = y(e, ["user", "avatarDecoration", "innerRef", "section", "canUsePremiumCollectibles", "isTryItOut", "isSelected"]);
    let x = i.useRef(null),
      {
        isHoveringOrFocusing: O
      } = (0, u.Z)(null != l ? l : x),
      {
        avatarDecorationSrc: P
      } = (0, h.Z)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        onlyAnimateOnHoverOrFocus: !O
      });
    return (0, n.jsxs)(f, j(v({
      innerRef: null != l ? l : x,
      isSelected: d
    }, m), {
      children: [(0, n.jsx)("img", {
        className: g.presetDecorationImg,
        src: P,
        alt: r.label
      }), (0, n.jsx)(c.Z, {
        skuId: r.skuId,
        canUsePremiumCollectibles: a,
        isTryItOut: o,
        isPurchaseSection: s === p.$0.PURCHASE,
        isPremiumSection: s === p.$0.PREMIUM_PURCHASE
      })]
    }))
  },
  S = e => {
    let {
      user: t,
      guild: r,
      pendingAvatarDecoration: i,
      selectedAvatarDecorationRef: l,
      isTryItOut: s,
      onSelect: c,
      onOpenShop: u
    } = e, h = (0, p.ZP)(), y = d.ZP.canUseCollectibles(t);
    return (0, n.jsx)(o.GMG, {
      fade: true,
      className: g.list,
      columns: 3,
      sections: h.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      sectionGutter: 16,
      itemGutter: 12,
      paddingHorizontal: 12,
      paddingVertical: 0,
      removeEdgeItemGutters: true,
      renderItem: (e, d, j, O) => {
        let {
          section: S,
          items: b
        } = h[e];
        return (0, a.EQ)(b[d]).with(p.Tm, () => (0, n.jsxs)(f, {
          style: v({}, j),
          isSelected: null === i,
          onSelect: () => c(null),
          children: [(0, n.jsx)(o.t6m, {
            size: "md",
            color: "currentColor",
            className: g.icon
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: (0, m.ad)(t, r) ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.PoWNfe)
          })]
        }, O)).with(p.oT, () => (0, n.jsxs)(f, {
          style: j,
          onSelect: u,
          children: [(0, n.jsx)(o.EOn, {
            size: "custom",
            width: 23,
            height: 23,
            color: "currentColor",
            className: g.shopIcon
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: x.intl.string(x.t.pWG4ze)
          })]
        }, O)).otherwise(e => {
          let r = (null == i ? true : i.skuId) === e.skuId;
          return (0, n.jsx)(P, {
            style: v({}, j),
            user: t,
            avatarDecoration: e,
            section: S,
            innerRef: r ? l : true,
            canUsePremiumCollectibles: y,
            isTryItOut: s,
            isSelected: r,
            onSelect: () => c(e)
          }, O)
        })
      },
      renderSection: (e, t) => {
        let {
          header: r
        } = h[e];
        return (0, n.jsx)("div", {
          className: g.headings,
          style: j(v({}, t), {
            position: "absolute"
          }),
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/medium",
            children: r
          })
        })
      },
      getSectionHeight: e => h[e].height,
      getItemKey: (e, t) => h[e].items[t].skuId,
      getItemHeight: O
    })
  }