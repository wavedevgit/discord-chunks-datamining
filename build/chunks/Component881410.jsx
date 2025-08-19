/** Chunk was on 27069 **/
/** chunk id: 881410, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk423802 = require("./423802.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302627 = require("./302627.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function f(e) {
  let {
    disabled: t,
    widgetType: r
  } = e, [f] = (0, a.ynZ)(), g = l.useRef(null), p = l.useCallback(e => {
    (0, c.ES)(r, {
      applicationId: e
    })
  }, [r]), {
    options: b,
    matchSorterOptions: O
  } = (0, o.h)(), m = l.useCallback(e => {
    var t, r;
    return "" === e.trim() ? b : (0, i.Lu)(b, e, (t = d({}, O), r = r = {
      threshold: i.Lu.rankings.CONTAINS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  }, [b, O]);
  return (0, n.jsx)(a.yRy, {
    targetElementRef: g,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.DBG, {
        className: u.gameSearchCombobox,
        placeholder: s.intl.string(s.t["5h0QOD"]),
        autoFocus: true,
        value: f,
        onChange: e => {
          p(e), t()
        },
        onClose: t,
        multiSelect: false,
        showScrollbar: true,
        maxVisibleItems: 7,
        children: e => m(e).map(e => (0, n.jsx)(a.lo1, {
          value: String(e.value),
          children: (0, n.jsx)(a.lo1.Label, {
            children: (0, n.jsx)(a.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              children: e.label
            })
          })
        }, String(e.value)))
      })
    },
    children: e => (0, n.jsx)("div", {
      ref: g,
      children: (0, n.jsx)(a.zxk, d({
        variant: "secondary",
        size: "sm",
        text: s.intl.string(s.t.uqw8wM),
        disabled: t
      }, e))
    })
  })
}