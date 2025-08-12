/** Chunk was on 11776 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk423802 = require("./423802.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk591334 = require("./591334.js");

function u(e) {
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
}

function f(e) {
  let {
    disabled: t,
    widgetType: n
  } = e, [f] = (0, o.ynZ)(), p = l.useRef(null), m = l.useCallback(e => {
    (0, c.ES)(n, e)
  }, [n]), {
    options: g,
    matchSorterOptions: b
  } = (0, a.h)(), j = l.useCallback(e => {
    var t, n;
    return "" === e.trim() ? g : (0, i.Lu)(g, e, (t = u({}, b), n = n = {
      threshold: i.Lu.rankings.CONTAINS
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
  }, [g, b]);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: p,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.DBG, {
        className: d.gameSearchCombobox,
        placeholder: s.intl.string(s.t["5h0QOD"]),
        autoFocus: true,
        value: f,
        onChange: e => {
          m(e), t()
        },
        onClose: t,
        multiSelect: false,
        showScrollbar: true,
        maxVisibleItems: 7,
        children: e => j(e).map(e => (0, r.jsx)(o.lo1, {
          value: String(e.value),
          children: (0, r.jsx)(o.lo1.Label, {
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              children: e.label
            })
          })
        }, String(e.value)))
      })
    },
    children: e => (0, r.jsx)("div", {
      ref: p,
      children: (0, r.jsx)(o.zxk, u({
        variant: "secondary",
        size: "sm",
        text: s.intl.string(s.t.uqw8wM),
        disabled: t
      }, e))
    })
  })
}