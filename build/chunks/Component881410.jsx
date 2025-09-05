/** Chunk was on 74449 **/
/** chunk id: 881410, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk423802 = require("./423802.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk720641 = require("./720641.js");

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

function b(e) {
  let {
    disabled: t,
    widgetType: r,
    widget: b
  } = e, [p] = (0, o.ynZ)(), [g, O] = i.useState(""), y = i.useRef(null), j = i.useRef(""), m = i.useMemo(() => new Set(b.games.map(e => e.applicationId)), [b.games]), {
    trackUserProfileEditAction: v
  } = (0, c.KZ)(), h = i.useCallback(e => {
    (0, s.ES)(r, {
      applicationId: e
    }), o.uvj.announce(u.intl.string(u.t.q0U3DA)), v({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: r
    })
  }, [r, v]), {
    options: x,
    matchSorterOptions: w
  } = (0, a.h)(), P = i.useCallback(e => {
    var t, r;
    return "" === e.trim() ? x : (0, l.Lu)(x, e, (t = f({}, w), r = r = {
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
  }, [x, w]), S = i.useCallback(e => {
    "" === g.trim() && "" !== e.trim() && v({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: r,
      numCharacters: e.trim().length,
      numResults: P(e).length
    }), O(e), j.current = e
  }, [g, v, r, P]), E = i.useMemo(() => "" !== g.trim() ? u.intl.formatToPlainString(u.t.ZoearK, {
    searchTerm: g.trim()
  }) : u.intl.string(u.t.QwSXv7), [g]);
  return (0, n.jsx)(o.yRy, {
    targetElementRef: y,
    position: "bottom",
    align: "center",
    onRequestOpen: () => {
      v({
        action: "PRESS_ADD_GAME",
        widgetEdited: r
      }), O(""), j.current = ""
    },
    onRequestClose: () => {
      v({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: r,
        numCharacters: j.current.trim().length,
        numResults: P(j.current).length
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(o.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOD"]),
        autoFocus: true,
        value: p,
        onChange: e => {
          h(e), t()
        },
        multiSelect: false,
        showScrollbar: true,
        maxVisibleItems: 7,
        emptyStateText: E,
        emptyStateHeader: "",
        onQueryChange: S,
        children: e => P(e).map(e => (0, n.jsx)(o.lo1, {
          disabled: m.has(e.value),
          value: String(e.value),
          children: (0, n.jsx)(o.lo1.Label, {
            children: (0, n.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              children: e.label
            })
          })
        }, String(e.value)))
      })
    },
    children: e => (0, n.jsx)("div", {
      ref: y,
      children: (0, n.jsx)(o.zxk, f({
        variant: "secondary",
        size: "sm",
        icon: o.qJs,
        text: u.intl.string(u.t.SgTOtb),
        disabled: t
      }, e))
    })
  })
}