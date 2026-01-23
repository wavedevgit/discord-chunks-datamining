/** Chunk was on 21738 **/
/** chunk id: 349320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk51264 = require("./51264.jsx"),
  Chunk820284 = require("./820284.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk757780 = require("./757780.js"),
  Chunk748319 = require("./748319.jsx"),
  Chunk355205 = require("./355205.jsx"),
  Chunk652234 = require("./652234.jsx"),
  Chunk489683 = require("./489683.jsx"),
  Chunk947926 = require("./947926.jsx"),
  Chunk366811 = require("./366811.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933460 = require("./933460.js");

function I(e) {
  var t, n;
  let {
    analyticsLocations: i
  } = (0, p.Ay)(d.A.ACTIVITY_PANEL), l = (0, b.A)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, r.jsx)(p.f5, {
    value: i,
    children: (0, r.jsx)(f.A, (t = function(e) {
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
    }({}, e), n = n = {
      guildId: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}
let v = Chunk64700.memo(function() {
  let e = i.useRef(null);
  (0, u.i4)(e, e => {
    let {
      height: t
    } = e;
    document.body.style.setProperty("--custom-app-panels-height", "".concat(t, "px"))
  }, []);
  let {
    isSorting: t
  } = (0, h.A)();
  return (0, r.jsx)("section", {
    ref: e,
    className: a()(y.C3, {
      [y.aB]: t
    }),
    "aria-label": O.intl.string(O.t.StREWK),
    children: (0, r.jsxs)(s.xpW, {
      containerRef: e,
      children: [(0, r.jsx)(o.A, {}), (0, r.jsx)(_.A, {}), (0, r.jsx)(m.A, {}), (0, r.jsx)(c.A, {
        section: E.JJy.ACTIVITY_PANEL,
        children: (0, r.jsx)(I, {
          className: y.iz
        })
      }), (0, r.jsx)(c.A, {
        section: E.JJy.RTC_CONNECTION_PANEL,
        children: (0, r.jsx)(A.A, {})
      }), (0, r.jsx)(c.A, {
        section: E.JJy.ACCOUNT_PANEL,
        children: (0, r.jsx)(g.A, {})
      })]
    })
  })
})