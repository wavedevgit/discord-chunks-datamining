/** Chunk was on 80654 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function g(e) {
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
    widgetType: n,
    widget: f
  } = e, [p] = (0, o.ynZ)(), [b, m] = i.useState(""), O = i.useRef(null), y = i.useRef(""), j = i.useMemo(() => new Set(f.games.map(e => e.applicationId)), [f.games]), {
    trackUserProfileEditAction: h
  } = (0, c.KZ)(), v = i.useCallback(e => {
    (0, s.ES)(n, {
      applicationId: e
    }), o.uvj.announce(u.intl.string(u.t.q0U3DA)), h({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: n
    })
  }, [n, h]), {
    options: x,
    matchSorterOptions: _
  } = (0, l.h)(), P = i.useCallback(e => {
    var t, n;
    return "" === e.trim() ? x : (0, a.Lu)(x, e, (t = g({}, _), n = n = {
      threshold: a.Lu.rankings.CONTAINS
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
  }, [x, _]), w = i.useCallback(e => {
    "" === b.trim() && "" !== e.trim() && h({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: n,
      numCharacters: e.trim().length,
      numResults: P(e).length
    }), m(e), y.current = e
  }, [b, h, n, P]), I = i.useMemo(() => "" !== b.trim() ? u.intl.format(u.t.ZoearK, {
    searchTerm: b.trim(),
    surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C"
  }) : u.intl.string(u.t.QwSXv7), [b]);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: O,
    position: "bottom",
    align: "center",
    onRequestOpen: () => {
      h({
        action: "PRESS_ADD_GAME",
        widgetEdited: n
      }), m(""), y.current = ""
    },
    onRequestClose: () => {
      h({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: n,
        numCharacters: y.current.trim().length,
        numResults: P(y.current).length
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOD"]),
        autoFocus: true,
        value: p,
        onChange: e => {
          v(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: I,
        emptyStateHeader: "",
        onQueryChange: w,
        children: e => P(e).map(e => (0, r.jsx)(o.lo1, {
          disabled: j.has(e.value),
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
      ref: O,
      children: (0, r.jsx)(o.zxk, g({
        variant: "secondary",
        size: "sm",
        icon: o.qJs,
        text: u.intl.string(u.t.SgTOtb),
        disabled: t
      }, e))
    })
  })
}