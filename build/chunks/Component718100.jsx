/** Chunk was on 68406 **/
/** chunk id: 718100, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk898461 = require("./898461.js"),
  Chunk483968 = require("./483968.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk927578 = require("./927578.js"),
  Chunk507698 = require("./507698.js"),
  Chunk196026 = require("./196026.js"),
  Chunk278539 = require("./278539.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk606586 = require("./606586.js");

function A(e) {
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

function h(e, t) {
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

function f(e, t) {
  if (null == e) return {};
  var r, n, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.getOwnPropertyNames(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let v = () => 80,
  y = e => {
    let {
      children: t,
      className: r,
      onSelect: l,
      isSelected: i = false
    } = e, c = f(e, ["children", "className", "onSelect", "isSelected"]);
    return (0, n.jsx)(s.DUT, h(A({
      className: a()(b.eA, i ? b.wH : true, r)
    }, c), {
      onClick: l,
      children: t
    }))
  },
  j = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: i,
      section: a,
      canUsePremiumCollectibles: s,
      isSelected: c = false
    } = e, d = f(e, ["user", "avatarDecoration", "innerRef", "section", "canUsePremiumCollectibles", "isSelected"]), m = l.useRef(null), {
      isHoveringOrFocusing: g
    } = (0, u.A)(null != i ? i : m), {
      avatarDecorationSrc: v
    } = (0, x.A)({
      user: t,
      avatarDecorationOverride: r,
      size: 80,
      onlyAnimateOnHoverOrFocus: !g
    });
    return (0, n.jsxs)(y, h(A({
      innerRef: null != i ? i : m,
      isSelected: c
    }, d), {
      children: [(0, n.jsx)("img", {
        className: b.Pw,
        src: v,
        alt: r.label
      }), (0, n.jsx)(o.A, {
        skuId: r.skuId,
        canUsePremiumCollectibles: s,
        isPurchaseSection: a === p.wn.PURCHASE,
        isPremiumSection: a === p.wn.PREMIUM_PURCHASE
      })]
    }))
  },
  O = e => {
    let {
      user: t,
      guild: r,
      pendingAvatarDecoration: l,
      selectedAvatarDecorationRef: i,
      onSelect: a,
      onOpenShop: o
    } = e, u = (0, p.Ay)(), x = d.Ay.canUseCollectibles(t);
    return (0, n.jsx)(s.a0_, {
      fade: true,
      className: b.p_,
      columns: 3,
      sections: u.map(e => {
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
      renderItem: (e, d, h, f) => {
        let {
          section: v,
          items: O
        } = u[e], _ = O[d];
        if (_ === p.dP) return (0, n.jsxs)(y, {
          style: A({}, h),
          isSelected: null === l,
          onSelect: () => a(null),
          children: [(0, n.jsx)(s.KTN, {
            size: "md",
            color: "currentColor",
            className: b.Kk
          }), (0, n.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-strong",
            children: (0, m.uZ)(t, r) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.PoWNfe)
          })]
        }, f);
        if (_ === p.ZK) return (0, n.jsxs)(y, {
          style: h,
          onSelect: o,
          children: [(0, n.jsx)(s.U1X, {
            size: "custom",
            width: 23,
            height: 23,
            color: "currentColor",
            className: b.sV
          }), (0, n.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-strong",
            children: g.intl.string(g.t.pWG4ze)
          })]
        }, f);
        if ((0, c.T)(_)) {
          let e = (null == l ? true : l.skuId) === _.skuId;
          return (0, n.jsx)(j, {
            style: A({}, h),
            user: t,
            avatarDecoration: _,
            section: v,
            innerRef: e ? i : true,
            canUsePremiumCollectibles: x,
            isSelected: e,
            onSelect: () => a(_)
          }, f)
        }
        return null
      },
      renderSection: (e, t) => {
        let {
          header: r
        } = u[e];
        return (0, n.jsx)("div", {
          className: b.so,
          style: h(A({}, t), {
            position: "absolute"
          }),
          children: (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            children: r
          })
        })
      },
      getSectionHeight: e => u[e].height,
      getItemKey: (e, t) => u[e].items[t].skuId,
      getItemHeight: v
    })
  }