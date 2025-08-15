/** Chunk was on web.js **/
/** chunk id: 818611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk864106 = require("./864106.js"),
  Chunk439959 = require("./439959.js"),
  Chunk125988 = require("./125988.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk706053 = require("./706053.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = 3,
  T = 80,
  S = 12,
  A = 16,
  N = () => T,
  C = e => {
    var {
      children: t,
      className: n,
      onSelect: i,
      isSelected: a = false
    } = e, s = O(e, ["children", "className", "onSelect", "isSelected"]);
    return (0, r.jsx)(l.P3F, y(E({
      className: o()(m.decorationGridItem, a ? m.selected : true, n)
    }, s), {
      onClick: i,
      children: t
    }))
  },
  R = e => {
    var {
      user: t,
      avatarDecoration: n,
      innerRef: a,
      section: o,
      isSelected: s = false,
      canUsePremiumCollectibles: l
    } = e, d = O(e, ["user", "avatarDecoration", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]);
    let f = i.useRef(null),
      h = (0, c.Z)(null != a ? a : f),
      {
        avatarDecorationSrc: g
      } = (0, p.Z)({
        user: t,
        avatarDecorationOverride: n,
        size: T,
        onlyAnimateOnHover: !h
      });
    return (0, r.jsxs)(C, y(E({
      innerRef: null != a ? a : f,
      isSelected: s
    }, d), {
      children: [(0, r.jsx)("img", {
        className: m.presetDecorationImg,
        src: g,
        alt: n.label
      }), (0, r.jsx)(u.Z, {
        isPurchaseSection: o === _.$0.PURCHASE,
        isPremiumSection: o === _.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: l,
        skuId: n.skuId
      })]
    }))
  },
  P = e => {
    let {
      user: t,
      guild: n,
      pendingAvatarDecoration: i,
      selectedAvatarDecorationRef: a,
      onSelect: o,
      onOpenShop: c
    } = e, u = (0, _.ZP)(), p = d.ZP.canUseCollectibles(t), g = (e, d, g, b) => {
      let {
        section: y,
        items: O
      } = u[e];
      return (0, s.EQ)(O[d]).with(_.Tm, () => (0, r.jsxs)(C, {
        style: E({}, g),
        isSelected: null === i,
        onSelect: () => o(null),
        children: [(0, r.jsx)(l.t6m, {
          size: "md",
          color: "currentColor",
          className: m.icon
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, f.ad)(t, n) ? h.intl.string(h.t.CHf9iI) : h.intl.string(h.t.PoWNfX)
        })]
      }, b)).with(_.oT, () => (0, r.jsxs)(C, {
        style: g,
        onSelect: c,
        children: [(0, r.jsx)(l.EOn, {
          size: "custom",
          width: 23,
          height: 23,
          color: "currentColor",
          className: m.shopIcon
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: h.intl.string(h.t.pWG4zc)
        })]
      }, b)).otherwise(e => {
        let n = (null == i ? true : i.id) === e.id;
        return (0, r.jsx)(R, {
          style: E({}, g),
          user: t,
          avatarDecoration: e,
          section: y,
          innerRef: n ? a : true,
          isSelected: n,
          onSelect: () => o(e),
          canUsePremiumCollectibles: p
        }, b)
      })
    }, b = (e, t) => {
      let {
        header: n
      } = u[e];
      return (0, r.jsx)("div", {
        className: m.headings,
        style: y(E({}, t), {
          position: "absolute"
        }),
        children: (0, r.jsx)(l.vwX, {
          children: n
        })
      })
    };
    return (0, r.jsx)(l.GMG, {
      fade: true,
      className: m.list,
      columns: I,
      sections: u.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      sectionGutter: A,
      itemGutter: S,
      paddingHorizontal: S,
      paddingVertical: 0,
      removeEdgeItemGutters: true,
      renderItem: g,
      renderSection: b,
      getSectionHeight: e => u[e].height,
      getItemKey: (e, t) => u[e].items[t].id,
      getItemHeight: N
    })
  }