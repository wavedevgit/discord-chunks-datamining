/** Chunk was on 20501 **/
/** chunk id: 649157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk111554 = require("./111554.js"),
  Chunk444675 = require("./444675.js");

function m() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    [t, m] = Chunk73800.useState(module),
    [p] = Chunk73800.useState(() => (0, Chunk388032.getAvailableLocales)().map(e => {
      var t, r;
      let s;
      try {
        s = n(621287)("./".concat(e.value, ".png"))
      } catch (e) {
        s = n(1474)
      }
      return t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), r = r = {
        name: (0, i.jsxs)("div", {
          className: d.option,
          children: [(0, i.jsx)("span", {
            className: d.localeName,
            children: e.name
          }), (0, i.jsx)("span", {
            className: d.localizedName,
            children: c.intl.string(e.localizedName)
          }), (0, i.jsx)("div", {
            className: d.flag,
            "aria-hidden": true,
            children: (0, i.jsx)("img", {
              alt: "",
              src: s,
              className: d.flagImage
            })
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t
    })),
    g = Chunk73800.useCallback(e => {
      let {
        value: t
      } = e;
      m(t), u.nextTick(() => l.ZP.updateLocale(t))
    }, []);
  return (0, Chunk255367.jsx)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t.IHMsPj),
    children: (0, Chunk255367.jsx)(Chunk481060.hjN, {
      children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t["mx+sp6"]),
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: g,
          options: p,
          value: exports
        })
      })
    })
  })
}