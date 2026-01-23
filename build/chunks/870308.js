/** Chunk was on 21738 **/
/** chunk id: 870308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk379197 = require("./379197.js"),
  Chunk488430 = require("./488430.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk457421 = require("./457421.js"),
  Chunk212407 = require("./212407.js"),
  Chunk158216 = require("./158216.js"),
  Chunk49999 = require("./49999.js");
let g = () => {
  var e;
  let t = (0, a.bG)([u.A], () => u.A.getMarketingBySurface(i.R.DESKTOP_SHOP_BUTTON)),
    n = !(0, o.ueM)(),
    [g, f] = (0, c.RF)(n ? s.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null != (e = null == t ? true : t.version) ? e : 0, true, true),
    m = (0, d.bv)(t),
    A = null != g ? ((e, t) => {
      var n, r, i, a, s, o, c, u;
      if ((null == t ? true : t.type) === l.G.COACHTIP || e.hasPreviewAssets) {
        let i = null != t ? {
          title: () => t.title,
          body: () => t.body,
          assetIds: t.decorations,
          entrypointBackgroundStyle: null == (r = t.refTargetBackground) ? true : r.style
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
          type: p.FF.COACHTIP
        }, i), u = u = {
          imageSrc: null != (n = e.coachtipAvatar) ? n : "",
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
      if ((null == t ? true : t.type) === l.G.COACHMARK) {
        let e = t.refTargetBackground;
        return {
          type: p.FF.COACHMARK,
          title: () => t.title,
          body: () => t.body,
          assetDark: t.assetDark,
          assetLight: t.assetLight,
          badgeIcon: t.badgeIcon,
          badgeText: t.badgeText,
          entrypointBackgroundStyle: null == e ? true : e.style,
          entryPointBackgroundAssets: {
            srcDarkHovered: null == e || null == (a = e.asset) || null == (i = a.hovered) ? true : i.dark,
            srcLightHovered: null == e || null == (o = e.asset) || null == (s = o.hovered) ? true : s.light
          }
        }
      }
      return null
    })(m, t) : null,
    _ = r.useCallback(() => {
      null != A && f(h.i.AUTO)
    }, [A, f]);
  return {
    shopButtonDisplayOptions: A,
    dismissShopButtonDC: _
  }
}