/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => g
});
var n = r(200651),
  l = r(192379),
  i = r(481060),
  o = r(727637),
  a = r(906732),
  s = r(333867),
  c = r(677232),
  d = r(884697),
  u = r(228624),
  p = r(67409),
  f = r(474936),
  b = r(231338),
  h = r(388032),
  m = r(535156);
let C = {
    dark: [{
      box: "#FFF19E",
      ribbon: "#FF484B"
    }, {
      box: "#17B5E2",
      ribbon: "#FFFFFF"
    }, {
      box: "#FFE1A6",
      ribbon: "#C29CFF"
    }, {
      box: "#60DA81",
      ribbon: "#FFF597"
    }, {
      box: "#E4578A",
      ribbon: "#BEC4FF"
    }, {
      box: "#AFE0FC",
      ribbon: "#FF9356"
    }, {
      box: "#DB6D6D",
      ribbon: "#67DA9C"
    }],
    light: [{
      box: "#FFF19E",
      ribbon: "#FF484B"
    }, {
      box: "#025D90",
      ribbon: "#70FFF8"
    }, {
      box: "#C29CFF",
      ribbon: "#255FA3"
    }, {
      box: "#6AC082",
      ribbon: "#DED052"
    }, {
      box: "#AC448B",
      ribbon: "#4845B8"
    }, {
      box: "#175B82",
      ribbon: "#F9D249"
    }, {
      box: "#B54141",
      ribbon: "#026530"
    }]
  },
  g = e => {
    let {
      product: t,
      selectedVariantIndex: r,
      returnRef: g,
      onSuccess: v,
      tooltipDelay: x,
      isGiftEasterEggEnabled: j,
      disableCustomColor: _ = !1
    } = e, {
      analyticsLocations: y
    } = (0, a.ZP)(), O = l.useRef(null), k = (0, o.Z)(O), P = _ ? b.BR.DARK : b.BR.LIGHT, S = (0, u.hv)("CollectiblesShopGiftButton");
    return (0, d.x6)(t) ? null : (0, n.jsx)(i.ua7, {
      text: h.NW.string(h.t["JCFN//"]),
      delay: x,
      children: e => {
        var l, o;
        return (0, n.jsx)(i.zxk, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = n
            })
          }
          return e
        }({}, e), o = o = {
          buttonRef: O,
          className: m.giftButton,
          color: _ ? i.Ttl.BRAND : i.Ttl.CUSTOM,
          look: i.zxk.Looks.FILLED,
          size: i.PhG.ICON,
          innerClassName: m.giftButtonInner,
          "aria-label": h.NW.string(h.t.PEjaCw),
          onClick: e => {
            e.stopPropagation(), (0, s.Z)({
              skuId: (0, p.S)({
                product: t,
                selectedVariantIndex: r
              }),
              isGift: !0,
              giftingOrigin: f.Wt.SHOP_PAGE,
              analyticsLocations: y,
              returnRef: g,
              variantsReturnStyle: S,
              onClose: null != v ? e => {
                e && v()
              } : void 0
            })
          },
          children: j ? (0, n.jsx)(c.Z, {
            hovered: k,
            isContentDismissed: !0,
            themeOverride: P,
            boxColors: C
          }) : (0, n.jsx)(i.OgN, {
            size: "md",
            color: "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
        }), l))
      }
    })
  }