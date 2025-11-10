/** Chunk was on 15582 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  wl: () => v,
  yX: () => y
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk423802 = require("./423802.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk706454 = require("./706454.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk720641 = require("./720641.js");

function p(e) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e) {
  var {
    widgetType: t,
    widget: n,
    children: h
  } = e, y = b(e, ["widgetType", "widget", "children"]);
  let [v] = (0, o.ynZ)(), [O, j] = i.useState(""), x = i.useRef(""), _ = i.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
    trackUserProfileEditAction: P
  } = (0, u.KZ)(), I = (0, l.e7)([s.default], () => ["en-US", "en-GB"].includes(s.default.locale)), w = i.useCallback(e => {
    (0, d.ES)(t, {
      applicationId: e
    }), o.uvj.announce(f.intl.string(f.t.q0U3DE)), P({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    })
  }, [t, P]), {
    options: S,
    matchSorterOptions: E
  } = (0, c.h)(), T = i.useCallback(e => "" === e.trim() ? S : (0, a.Lu)(S, e, m(p({}, E), {
    threshold: a.Lu.rankings.CONTAINS
  })), [S, E]), C = i.useCallback(e => {
    "" === O.trim() && "" !== e.trim() && P({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: t,
      numCharacters: e.trim().length,
      numResults: T(e).length
    }), j(e), x.current = e
  }, [O, P, t, T]), D = i.useMemo(() => "" !== O.trim() && I ? f.intl.format(f.t.jhiTsN, {
    searchTerm: O.trim()
  }) : f.intl.string(f.t.QwSXv8), [O, I]);
  return (0, r.jsx)(o.yRy, m(p({}, y), {
    onRequestOpen: () => {
      P({
        action: "PRESS_ADD_GAME",
        widgetEdited: t
      }), j(""), x.current = ""
    },
    onRequestClose: () => {
      P({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: t,
        numCharacters: x.current.trim().length,
        numResults: T(x.current).length
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.DBG, {
        className: g.gameSearchCombobox,
        placeholder: f.intl.string(f.t["5h0QOP"]),
        autoFocus: true,
        value: v,
        onChange: e => {
          w(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: D,
        emptyStateHeader: "",
        onQueryChange: C,
        children: e => T(e).map(e => (0, r.jsx)(o.lo1, {
          disabled: _.has(e.value),
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
    children: e => h(e)
  }))
}

function y(e) {
  var {
    disabled: t
  } = e, n = b(e, ["disabled"]);
  let a = i.useRef(null);
  return (0, r.jsx)(h, m(p({
    targetElementRef: a,
    position: "bottom",
    align: "center"
  }, n), {
    children: e => (0, r.jsx)(o.Button, p({
      buttonRef: a,
      variant: "secondary",
      size: "sm",
      icon: o.qJs,
      text: f.intl.string(f.t.SgTOtX),
      disabled: t
    }, e))
  }))
}

function v(e) {
  let t = i.useRef(null);
  return (0, r.jsx)(h, m(p({
    targetElementRef: t,
    position: "right",
    align: "top"
  }, e), {
    children: e => (0, r.jsx)(o.P3F, m(p({
      innerRef: t,
      className: g.coverButton,
      "aria-label": f.intl.string(f.t.SgTOtX)
    }, e), {
      children: (0, r.jsx)(o.svS, {
        color: "currentColor"
      })
    }))
  }))
}