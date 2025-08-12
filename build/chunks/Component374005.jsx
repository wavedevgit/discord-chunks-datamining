/** Chunk was on 1272 **/
/** chunk id: 374005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk708816 = require("./708816.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk720734 = require("./720734.jsx"),
  Chunk840780 = require("./840780.jsx"),
  Chunk235555 = require("./235555.jsx"),
  Chunk746508 = require("./746508.jsx"),
  Chunk210724 = require("./210724.jsx"),
  Chunk905423 = require("./905423.js"),
  Chunk316173 = require("./316173.jsx"),
  Chunk410575 = require("./410575.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk479098 = require("./479098.js");

function E(e) {
  var t, n;
  let {
    analyticsLocations: i
  } = (0, s.ZP)(o.Z.ACTIVITY_PANEL), l = (0, f.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, r.jsx)(s.Gt, {
    value: i,
    children: (0, r.jsx)(u.Z, (t = function(e) {
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
let y = Chunk73800.memo(function() {
  let e = Chunk73800.useRef(null);
  return (0, Chunk393238.PM)(module, e => {
    let {
      height: t
    } = e;
    document.body.style.setProperty("--custom-app-panels-height", "".concat(t, "px"))
  }, []), (0, Chunk255367.jsx)("section", {
    ref: module,
    className: Chunk479098.panels,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.StREWF),
    children: (0, Chunk255367.jsxs)(Chunk708816.Jc, {
      containerRef: module,
      children: [(0, Chunk255367.jsx)(Chunk316173.Z, {}), (0, Chunk255367.jsx)(Chunk210724.Z, {}), (0, Chunk255367.jsx)(Chunk235555.Z, {}), (0, Chunk255367.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.ACTIVITY_PANEL,
        children: (0, Chunk255367.jsx)(E, {
          className: Chunk479098.activityPanel
        })
      }), (0, Chunk255367.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.RTC_CONNECTION_PANEL,
        children: (0, Chunk255367.jsx)(Chunk746508.Z, {})
      }), (0, Chunk255367.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.ACCOUNT_PANEL,
        children: (0, Chunk255367.jsx)(Chunk720734.Z, {})
      })]
    })
  })
})