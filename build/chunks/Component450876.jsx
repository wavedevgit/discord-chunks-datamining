/** Chunk was on 1272 **/
/** chunk id: 450876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk316173 = require("./316173.jsx"),
  Chunk410575 = require("./410575.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk316243 = require("./316243.js"),
  Chunk720734 = require("./720734.jsx"),
  Chunk840780 = require("./840780.jsx"),
  Chunk235555 = require("./235555.jsx"),
  Chunk746508 = require("./746508.jsx"),
  Chunk210724 = require("./210724.jsx"),
  Chunk905423 = require("./905423.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk566888 = require("./566888.js");

function y(e) {
  var t, n;
  let {
    analyticsLocations: i
  } = (0, p.ZP)(d.Z.ACTIVITY_PANEL), l = (0, E.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, r.jsx)(p.Gt, {
    value: i,
    children: (0, r.jsx)(h.Z, (t = function(e) {
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
let C = Chunk473749.memo(function() {
  let e = i.useRef(null);
  (0, u.PM)(e, e => {
    let {
      height: t
    } = e;
    document.body.style.setProperty("--custom-app-panels-height", "".concat(t, "px"))
  }, []);
  let {
    isSorting: t
  } = (0, f.Z)();
  return (0, r.jsx)("section", {
    ref: e,
    className: a()(I.panels, {
      [I.disablePointersWhileSorting]: t
    }),
    "aria-label": v.intl.string(v.t.StREWK),
    children: (0, r.jsxs)(o.JcV, {
      containerRef: e,
      children: [(0, r.jsx)(s.Z, {}), (0, r.jsx)(_.Z, {}), (0, r.jsx)(m.Z, {}), (0, r.jsx)(c.Z, {
        section: O.jXE.ACTIVITY_PANEL,
        children: (0, r.jsx)(y, {
          className: I.activityPanel
        })
      }), (0, r.jsx)(c.Z, {
        section: O.jXE.RTC_CONNECTION_PANEL,
        children: (0, r.jsx)(b.Z, {})
      }), (0, r.jsx)(c.Z, {
        section: O.jXE.ACCOUNT_PANEL,
        children: (0, r.jsx)(g.Z, {})
      })]
    })
  })
})