/** Chunk was on 75708 **/
/** chunk id: 611116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G_: () => f,
  g: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk572995 = require("./572995.js"),
  Chunk42373 = require("./42373.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888723 = require("./888723.js"),
  Chunk790895 = require("./790895.js");

function p(e) {
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
}

function g(e) {
  let {
    className: t,
    boxLayout: n,
    title: r,
    shouldLoadVideo: s,
    isReducedMotion: d,
    includeSideGradient: g = false,
    startLeftAligned: h = false,
    enablePremiumBrandRefreshDesign: f
  } = e, b = f ? m : u;
  return (0, i.jsxs)("div", {
    className: a()(b.boxBackdrop, t),
    children: [(0, i.jsx)(l.X6q, {
      className: b.bentoSectionHeader,
      variant: "display-md",
      color: "header-primary",
      children: r
    }), (0, i.jsx)("div", {
      className: b.bentoBoxesGrid,
      children: n.map((e, t) => {
        let n;
        switch (e.length) {
          case 3:
            n = o.y$.SMALL;
            break;
          case 2:
            n = o.y$.MEDIUM;
            break;
          default:
            n = o.y$.LARGE
        }
        return (0, i.jsx)(i.Fragment, {
          children: e.map(e => {
            var r, a;
            return (0, i.jsx)(c.Z, (r = p({
              index: t + +!!h
            }, e), a = a = {
              size: n,
              shouldLoadVideo: s,
              isReducedMotion: d,
              enablePremiumBrandRefreshDesign: f
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
            }), r), e.name)
          })
        })
      })
    }), g && (0, i.jsx)("div", {
      className: u.bentoSideGradient
    })]
  })
}
let h = Chunk73800.memo(function(e) {
    let {
      whatsNewBoxes: t
    } = (0, o.ZP)();
    return (0, i.jsx)(g, p({
      boxLayout: t,
      title: d.intl.string(d.t.LRmNAg),
      startLeftAligned: e.enablePremiumBrandRefreshDesign
    }, e))
  }),
  f = Chunk73800.memo(function(e) {
    let {
      bestOfBoxes: t
    } = (0, o.ZP)();
    return (0, i.jsx)(g, p({
      boxLayout: t,
      title: d.intl.string(d.t.EnzW2N),
      includeSideGradient: !e.enablePremiumBrandRefreshDesign,
      startLeftAligned: true
    }, e))
  })