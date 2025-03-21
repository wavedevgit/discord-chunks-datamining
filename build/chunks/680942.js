/** Chunk was on 18475 **/
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  l = n(727637),
  a = n(906732),
  s = n(333867),
  c = n(677232),
  u = n(884697),
  d = n(228624),
  p = n(67409),
  f = n(474936),
  h = n(231338),
  _ = n(388032),
  m = n(535156);
let b = {
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
      selectedVariantIndex: n,
      returnRef: g,
      onSuccess: E,
      tooltipDelay: v,
      isGiftEasterEggEnabled: O,
      color: y = o.Ttl.BRAND
    } = e, {
      analyticsLocations: C
    } = (0, a.ZP)(), x = i.useRef(null), N = (0, l.Z)(x), S = (0, d.hv)("CollectiblesShopGiftButton");
    return (0, u.x6)(t) ? null : (0, r.jsx)(o.ua7, {
      text: _.NW.string(_.t["JCFN//"]),
      delay: v,
      children: e => {
        var i, l;
        return (0, r.jsx)(o.zxk, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, e), l = l = {
          buttonRef: x,
          className: m.giftButton,
          color: y,
          look: o.zxk.Looks.FILLED,
          size: o.PhG.ICON,
          innerClassName: m.giftButtonInner,
          "aria-label": _.NW.string(_.t.PEjaCw),
          onClick: e => {
            e.stopPropagation(), (0, s.Z)({
              skuId: (0, p.S)({
                product: t,
                selectedVariantIndex: n
              }),
              isGift: !0,
              giftingOrigin: f.Wt.SHOP_PAGE,
              analyticsLocations: C,
              returnRef: g,
              variantsReturnStyle: S,
              onClose: null != E ? e => {
                e && E()
              } : void 0
            })
          },
          children: O ? (0, r.jsx)(c.Z, {
            hovered: N,
            isContentDismissed: !0,
            themeOverride: h.BR.DARK,
            boxColors: b
          }) : (0, r.jsx)(o.OgN, {
            size: "md",
            color: "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }