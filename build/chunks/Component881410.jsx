/** Chunk was on 46592 **/
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

function g(e) {
  let {
    disabled: t,
    widgetType: r,
    widget: g
  } = e, [p] = (0, a.ynZ)(), [b, O] = i.useState(""), m = i.useRef(null), y = i.useRef(""), j = i.useMemo(() => new Set(g.games.map(e => e.applicationId)), [g.games]), {
    trackUserProfileEditAction: v
  } = (0, c.KZ)(), h = i.useCallback(e => {
    (0, s.ES)(r, {
      applicationId: e
    }), a.uvj.announce(u.intl.string(u.t.q0U3DA)), v({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: r
    })
  }, [r, v]), {
    options: x,
    matchSorterOptions: _
  } = (0, l.h)(), w = i.useCallback(e => {
    var t, r;
    return "" === e.trim() ? x : (0, o.Lu)(x, e, (t = f({}, _), r = r = {
      threshold: o.Lu.rankings.CONTAINS
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
  }, [x, _]), P = i.useCallback(e => {
    "" === b.trim() && "" !== e.trim() && v({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: r,
      numCharacters: e.trim().length,
      numResults: w(e).length
    }), O(e), y.current = e
  }, [b, v, r, w]), E = i.useMemo(() => "" !== b.trim() ? u.intl.format(u.t.ZoearK, {
    searchTerm: b.trim(),
    surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C"
  }) : u.intl.string(u.t.QwSXv7), [b]);
  return (0, n.jsx)(a.yRy, {
    targetElementRef: m,
    position: "bottom",
    align: "center",
    onRequestOpen: () => {
      v({
        action: "PRESS_ADD_GAME",
        widgetEdited: r
      }), O(""), y.current = ""
    },
    onRequestClose: () => {
      v({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: r,
        numCharacters: y.current.trim().length,
        numResults: w(y.current).length
      })
    },
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
          h(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: E,
        emptyStateHeader: "",
        onQueryChange: P,
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
      ref: m,
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