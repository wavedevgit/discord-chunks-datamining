/** Chunk was on 83789 **/
/** chunk id: 881410, original params: e,t,r (module,exports,require) **/
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

function g(e) {
  let {
    disabled: t,
    widgetType: r,
    widget: g
  } = e, [p] = (0, a.ynZ)(), [b, m] = i.useState(""), O = i.useRef(null), j = i.useMemo(() => new Set(g.games.map(e => e.applicationId)), [g.games]), {
    trackUserProfileAction: y
  } = (0, c.KZ)(), x = i.useCallback(e => {
    (0, s.ES)(r, {
      applicationId: e
    }), y({
      action: "EDIT_ACTION"
    })
  }, [r, y]), {
    options: v,
    matchSorterOptions: h
  } = (0, o.h)(), _ = i.useMemo(() => "" !== b.trim() ? u.intl.formatToPlainString(u.t.ZoearK, {
    searchTerm: b.trim()
  }) : u.intl.string(u.t.QwSXv7), [b]), w = i.useCallback(e => {
    var t, r;
    return "" === e.trim() ? v : (0, l.Lu)(v, e, (t = f({}, h), r = r = {
      threshold: l.Lu.rankings.CONTAINS
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
  }, [v, h]);
  return (0, n.jsx)(a.yRy, {
    targetElementRef: O,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOD"]),
        autoFocus: true,
        value: p,
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
        children: e => w(e).map(e => (0, n.jsx)(a.lo1, {
          disabled: j.has(e.value),
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
      ref: O,
      children: (0, n.jsx)(a.zxk, f({
        variant: "secondary",
        size: "sm",
        icon: a.qJs,
        text: u.intl.string(u.t.SgTOtb),
        disabled: t
      }, e))
    })
  })
}