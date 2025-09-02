/** Chunk was on 8188 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk423802 = require("./423802.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302627 = require("./302627.js");

function f(e) {
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

function g(e) {
  let {
    disabled: t,
    widgetType: n,
    widget: g
  } = e, [b] = (0, a.ynZ)(), [p, m] = i.useState(""), O = i.useRef(null), j = i.useMemo(() => new Set(g.games.map(e => e.applicationId)), [g.games]), {
    trackUserProfileAction: y
  } = (0, c.KZ)(), x = i.useCallback(e => {
    (0, s.ES)(n, {
      applicationId: e
    }), y({
      action: "EDIT_ACTION"
    })
  }, [n, y]), {
    options: v,
    matchSorterOptions: h
  } = (0, o.h)(), _ = i.useMemo(() => "" !== p.trim() ? u.intl.formatToPlainString(u.t.ZoearK, {
    searchTerm: p.trim()
  }) : u.intl.string(u.t.QwSXv7), [p]), P = i.useCallback(e => {
    var t, n;
    return "" === e.trim() ? v : (0, l.Lu)(v, e, (t = f({}, h), n = n = {
      threshold: l.Lu.rankings.CONTAINS
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
  }, [v, h]);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: O,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOD"]),
        autoFocus: true,
        value: b,
        onChange: e => {
          x(e), t()
        },
        onClose: t,
        multiSelect: false,
        showScrollbar: true,
        maxVisibleItems: 7,
        emptyStateText: _,
        emptyStateHeader: "",
        onQueryChange: m,
        children: e => P(e).map(e => (0, r.jsx)(a.lo1, {
          disabled: j.has(e.value),
          value: String(e.value),
          children: (0, r.jsx)(a.lo1.Label, {
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              children: e.label
            })
          })
        }, String(e.value)))
      })
    },
    children: e => (0, r.jsx)("div", {
      ref: O,
      children: (0, r.jsx)(a.zxk, f({
        variant: "secondary",
        size: "sm",
        icon: a.qJs,
        text: u.intl.string(u.t.SgTOtb),
        disabled: t
      }, e))
    })
  })
}