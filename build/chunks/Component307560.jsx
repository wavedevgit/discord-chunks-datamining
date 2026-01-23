/** Chunk was on 92818 **/
/** chunk id: 307560, original params: e,t,n (module,exports,require) **/
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

function y(e) {
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

function b(e, t) {
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

function h(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}
let j = () => 80,
  A = e => {
    let {
      children: t,
      className: n,
      isSelected: l = false
    } = e, i = h(e, ["children", "className", "isSelected"]);
    return (0, r.jsx)(o.DUT, b(y({
      className: s()(g.BP, n, {
        [g.wH]: l
      })
    }, i), {
      onClick: i.onSelect,
      children: t
    }))
  },
  O = e => {
    var t;
    let {
      profileEffect: n,
      innerRef: i,
      section: s,
      isSelected: o,
      canUsePremiumCollectibles: c
    } = e, d = h(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]), f = (0, p.V)(n.skuId), j = l.useRef(null), {
      accessibilityLabel: O,
      thumbnailPreviewSrc: v,
      title: _
    } = null != (t = null == f ? true : f.config) ? t : {}, P = l.useMemo(() => (0, a.Rc)(v), [v]);
    return (0, r.jsxs)(A, b(y({
      innerRef: null != i ? i : j,
      isSelected: o
    }, d), {
      children: [(0, r.jsx)("img", {
        src: x,
        alt: O,
        className: g.rQ
      }), (0, r.jsx)("img", {
        className: g.Wv,
        src: P,
        alt: _
      }), (0, r.jsx)(u.A, {
        skuId: n.skuId,
        canUsePremiumCollectibles: c,
        isPurchaseSection: s === m.wn.PURCHASE,
        isPremiumSection: s === m.wn.PREMIUM_PURCHASE
      })]
    }))
  },
  v = e => {
    let {
      user: t,
      guild: n,
      pendingProfileEffect: l,
      selectedProfileEffectRef: i,
      onSelect: s,
      onOpenShop: a
    } = e, u = (0, m.Ay)(), p = null != l, x = d.Ay.canUseCollectibles(t);
    return (0, r.jsx)("section", {
      className: g.uW,
      children: (0, r.jsx)(o.a0_, {
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
        renderItem: (e, t, d, b) => {
          let {
            section: h,
            items: j
          } = u[e], v = j[t];
          if (v === m.dP) return (0, r.jsxs)(A, {
            style: y({}, d),
            isSelected: !p,
            onSelect: () => s(null),
            children: [(0, r.jsx)(o.KTN, {
              size: "md",
              color: "currentColor",
              className: g.vo
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-strong",
              children: null != n ? f.intl.string(f.t.CHf9iJ) : f.intl.string(f.t.PoWNfe)
            })]
          }, b);
          if (v === m.ZK) return (0, r.jsxs)(A, {
            style: d,
            onSelect: a,
            children: [(0, r.jsx)(o.U1X, {
              size: "custom",
              width: 23,
              height: 23,
              color: "currentColor",
              className: g.sV
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-strong",
              children: f.intl.string(f.t.pWG4ze)
            })]
          }, b);
          if ((0, c.C)(v)) {
            let e = (null == l ? true : l.skuId) === v.skuId;
            return (0, r.jsx)(O, {
              style: y({}, d),
              section: h,
              profileEffect: v,
              innerRef: e ? i : true,
              isSelected: e,
              onSelect: () => s(v),
              canUsePremiumCollectibles: x
            }, b)
          }
          return null
        },
        renderSection: (e, t) => {
          let {
            header: n
          } = u[e];
          return (0, r.jsx)("div", {
            style: b(y({}, t), {
              height: "".concat(16, "px"),
              position: "absolute"
            }),
            children: (0, r.jsx)(o.Heading, {
              variant: "heading-md/medium",
              children: n
            })
          })
        },
        getSectionHeight: () => 16,
        getItemKey: (e, t) => u[e].items[t].skuId,
        getItemHeight: j,
        removeEdgeItemGutters: true
      })
    })
  }