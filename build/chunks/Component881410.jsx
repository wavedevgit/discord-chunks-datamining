/** Chunk was on 1267 **/
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
  } = e, [b] = (0, o.ynZ)(), [p, O] = i.useState(""), y = i.useRef(null), j = i.useRef(""), m = i.useMemo(() => new Set(g.games.map(e => e.applicationId)), [g.games]), {
    trackUserProfileEditAction: v
  } = (0, c.KZ)(), x = i.useCallback(e => {
    (0, s.ES)(r, {
      applicationId: e
    }), o.uvj.announce(u.intl.string(u.t.q0U3DA)), v({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: r
    })
  }, [r, v]), {
    options: h,
    matchSorterOptions: w
  } = (0, a.h)(), P = i.useCallback(e => {
    var t, r;
    return "" === e.trim() ? h : (0, l.Lu)(h, e, (t = f({}, w), r = r = {
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
  }, [h, w]), E = i.useCallback(e => {
    "" === p.trim() && "" !== e.trim() && v({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: r,
      numCharacters: e.trim().length,
      numResults: P(e).length
    }), O(e), j.current = e
  }, [p, v, r, P]), S = i.useMemo(() => "" !== p.trim() ? u.intl.format(u.t.ZoearK, {
    searchTerm: p.trim(),
    surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C"
  }) : u.intl.string(u.t.QwSXv7), [p]);
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
        value: b,
        onChange: e => {
          x(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: S,
        emptyStateHeader: "",
        onQueryChange: E,
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