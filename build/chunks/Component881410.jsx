/** Chunk was on 37690 **/
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
  Chunk720641 = require("./720641.js");

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
  } = e, [p] = (0, a.ynZ)(), [b, m] = i.useState(""), O = i.useRef(null), y = i.useRef(""), j = i.useMemo(() => new Set(g.games.map(e => e.applicationId)), [g.games]), {
    trackUserProfileEditAction: v
  } = (0, c.KZ)(), h = i.useCallback(e => {
    (0, s.ES)(n, {
      applicationId: e
    }), a.uvj.announce(u.intl.string(u.t.q0U3DA)), v({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: n
    })
  }, [n, v]), {
    options: x,
    matchSorterOptions: P
  } = (0, l.h)(), _ = i.useCallback(e => {
    var t, n;
    return "" === e.trim() ? x : (0, o.Lu)(x, e, (t = f({}, P), n = n = {
      threshold: o.Lu.rankings.CONTAINS
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
  }, [x, P]), w = i.useCallback(e => {
    "" === b.trim() && "" !== e.trim() && v({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: n,
      numCharacters: e.trim().length,
      numResults: _(e).length
    }), m(e), y.current = e
  }, [b, v, n, _]), E = i.useMemo(() => "" !== b.trim() ? u.intl.format(u.t.ZoearK, {
    searchTerm: b.trim(),
    surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C"
  }) : u.intl.string(u.t.QwSXv7), [b]);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: O,
    position: "bottom",
    align: "center",
    onRequestOpen: () => {
      v({
        action: "PRESS_ADD_GAME",
        widgetEdited: n
      }), m(""), y.current = ""
    },
    onRequestClose: () => {
      v({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: n,
        numCharacters: y.current.trim().length,
        numResults: _(y.current).length
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOD"]),
        autoFocus: true,
        value: p,
        onChange: e => {
          h(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: E,
        emptyStateHeader: "",
        onQueryChange: w,
        children: e => _(e).map(e => (0, r.jsx)(a.lo1, {
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