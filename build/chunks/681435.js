/** Chunk was on 1272 **/
/** chunk id: 681435, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk115434 = require("./115434.js"),
  Chunk264181 = require("./264181.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk874703 = require("./874703.js"),
  Chunk794324 = require("./794324.js"),
  Chunk302800 = require("./302800.js"),
  Chunk921944 = require("./921944.js");
let g = () => {
  var e;
  let t = (0, a.e7)([u.Z], () => u.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)),
    n = !(0, s.$sL)(),
    [g, h] = (0, c.XR)(n ? o.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null != (e = null == t ? true : t.version) ? e : 0, true, true),
    m = (0, d.mB)(t),
    b = null != g ? ((e, t) => {
      var n, r, i, a, o, s, c, u;
      if ((null == t ? true : t.type) === l.Z.COACHTIP || e.hasPreviewAssets) {
        let i = null != t ? {
          title: () => t.title,
          body: () => t.body,
          assetIds: t.decorations,
          entrypointBackgroundStyle: null == (n = t.refTargetBackground) ? true : n.style
        } : {
          title: () => "",
          assetIds: []
        };
        return c = function(e) {
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
        }({
          type: p.k2.COACHTIP
        }, i), u = u = {
          imageSrc: null != (r = e.coachtipAvatar) ? r : "",
          badgeIcon: null == t ? true : t.badgeIcon,
          badgeText: null == t ? true : t.badgeText,
          entryPointBackgroundAssets: {
            srcDark: e.buttonBGRestingDark,
            srcLight: e.buttonBGRestingLight,
            srcDarkHovered: e.buttonBGHoverDark,
            srcLightHovered: e.buttonBGHoverLight
          }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(u, e))
        }), c
      }
      if ((null == t ? true : t.type) === l.Z.COACHMARK) {
        let e = t.refTargetBackground;
        return {
          type: p.k2.COACHMARK,
          title: () => t.title,
          body: () => t.body,
          assetDark: t.assetDark,
          assetLight: t.assetLight,
          badgeIcon: t.badgeIcon,
          badgeText: t.badgeText,
          entrypointBackgroundStyle: null == e ? true : e.style,
          entryPointBackgroundAssets: {
            srcDarkHovered: null == e || null == (a = e.asset) || null == (i = a.hovered) ? true : i.dark,
            srcLightHovered: null == e || null == (s = e.asset) || null == (o = s.hovered) ? true : o.light
          }
        }
      }
      return null
    })(m, t) : null,
    _ = r.useCallback(() => {
      null != b && h(f.L.AUTO)
    }, [b, h]);
  return {
    shopButtonDisplayOptions: b,
    dismissShopButtonDC: _
  }
}