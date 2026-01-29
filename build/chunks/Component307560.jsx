/** Chunk was on 92818 **/
/** chunk id: 307560, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk203632 = require("./203632.js"),
  Chunk181774 = require("./181774.js"),
  Chunk483968 = require("./483968.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk262737 = require("./262737.js"),
  Chunk176448 = require("./176448.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk55886 = require("./55886.js"),
  Chunk191761 = require("./191761.js");

function b(e) {
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

function O(e, t) {
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

function h(e, t) {
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
let x = () => 80,
  j = e => {
    let {
      children: t,
      className: r,
      isSelected: l = false
    } = e, i = h(e, ["children", "className", "isSelected"]);
    return (0, n.jsx)(o.DUT, O(b({
      className: s()(g.BP, r, {
        [g.wH]: l
      })
    }, i), {
      onClick: i.onSelect,
      children: t
    }))
  },
  A = e => {
    var t;
    let {
      profileEffect: r,
      innerRef: i,
      section: s,
      isSelected: o,
      canUsePremiumCollectibles: c
    } = e, d = h(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]), m = (0, p.V)(r.skuId), x = l.useRef(null), {
      accessibilityLabel: A,
      thumbnailPreviewSrc: v,
      title: P
    } = null != (t = null == m ? true : m.config) ? t : {}, _ = l.useMemo(() => (0, a.Rc)(v), [v]);
    return (0, n.jsxs)(j, O(b({
      innerRef: null != i ? i : x,
      isSelected: o
    }, d), {
      children: [(0, n.jsx)("img", {
        src: y,
        alt: A,
        className: g.rQ
      }), (0, n.jsx)("img", {
        className: g.Wv,
        src: _,
        alt: P
      }), (0, n.jsx)(u.A, {
        skuId: r.skuId,
        canUsePremiumCollectibles: c,
        isPurchaseSection: s === f.wn.PURCHASE,
        isPremiumSection: s === f.wn.PREMIUM_PURCHASE
      })]
    }))
  },
  v = e => {
    let {
      user: t,
      guild: r,
      pendingProfileEffect: l,
      selectedProfileEffectRef: i,
      onSelect: s,
      onOpenShop: a
    } = e, u = (0, f.Ay)(), p = null != l, y = d.Ay.canUseCollectibles(t);
    return (0, n.jsx)("section", {
      className: g.uW,
      children: (0, n.jsx)(o.a0_, {
        fade: true,
        itemGutter: 12,
        sectionGutter: 16,
        paddingVertical: 0,
        paddingHorizontal: 12,
        className: g.p_,
        columns: 3,
        sections: u.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        renderItem: (e, t, d, O) => {
          let {
            section: h,
            items: x
          } = u[e], v = x[t];
          if (v === f.dP) return (0, n.jsxs)(j, {
            style: b({}, d),
            isSelected: !p,
            onSelect: () => s(null),
            children: [(0, n.jsx)(o.KTN, {
              size: "md",
              color: "currentColor",
              className: g.vo
            }), (0, n.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-strong",
              children: null != r ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.PoWNfe)
            })]
          }, O);
          if (v === f.ZK) return (0, n.jsxs)(j, {
            style: d,
            onSelect: a,
            children: [(0, n.jsx)(o.U1X, {
              size: "custom",
              width: 23,
              height: 23,
              color: "currentColor",
              className: g.sV
            }), (0, n.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-strong",
              children: m.intl.string(m.t.pWG4ze)
            })]
          }, O);
          if ((0, c.C)(v)) {
            let e = (null == l ? true : l.skuId) === v.skuId;
            return (0, n.jsx)(A, {
              style: b({}, d),
              section: h,
              profileEffect: v,
              innerRef: e ? i : true,
              isSelected: e,
              onSelect: () => s(v),
              canUsePremiumCollectibles: y
            }, O)
          }
          return null
        },
        renderSection: (e, t) => {
          let {
            header: r
          } = u[e];
          return (0, n.jsx)("div", {
            style: O(b({}, t), {
              height: "".concat(16, "px"),
              position: "absolute"
            }),
            children: (0, n.jsx)(o.Heading, {
              variant: "heading-md/medium",
              children: r
            })
          })
        },
        getSectionHeight: () => 16,
        getItemKey: (e, t) => u[e].items[t].skuId,
        getItemHeight: x,
        removeEdgeItemGutters: true
      })
    })
  }