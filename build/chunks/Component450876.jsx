/** Chunk was on 1272 **/
/** chunk id: 450876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk822338 = require("./822338.js");

function v(e) {
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
let C = Chunk647438.memo(function() {
  let e = Chunk647438.useRef(null);
  (0, Chunk393238.PM)(module, e => {
    let {
      height: t
    } = e;
    document.body.style.setProperty("--custom-app-panels-height", "".concat(t, "px"))
  }, []);
  let {
    isSorting: t
  } = (0, Chunk316243.Z)();
  return (0, Chunk951288.jsx)("section", {
    ref: module,
    className: a()(Chunk822338.panels, {
      [Chunk822338.disablePointersWhileSorting]: exports
    }),
    "aria-label": Chunk388032.intl.string(Chunk388032.t.StREWK),
    children: (0, Chunk951288.jsxs)(Chunk793030.JcV, {
      containerRef: module,
      children: [(0, Chunk951288.jsx)(Chunk316173.Z, {}), (0, Chunk951288.jsx)(Chunk210724.Z, {}), (0, Chunk951288.jsx)(Chunk235555.Z, {}), (0, Chunk951288.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.ACTIVITY_PANEL,
        children: (0, Chunk951288.jsx)(v, {
          className: Chunk822338.activityPanel
        })
      }), (0, Chunk951288.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.RTC_CONNECTION_PANEL,
        children: (0, Chunk951288.jsx)(Chunk746508.Z, {})
      }), (0, Chunk951288.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.ACCOUNT_PANEL,
        children: (0, Chunk951288.jsx)(Chunk720734.Z, {})
      })]
    })
  })
})