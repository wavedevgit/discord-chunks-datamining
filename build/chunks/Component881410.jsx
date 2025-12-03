/** Chunk was on 44097 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  wl: () => h,
  yX: () => b
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function g(e, t) {
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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e) {
  var {
    widgetType: t,
    widget: n,
    onAddGame: m,
    children: b
  } = e, h = p(e, ["widgetType", "widget", "onAddGame", "children"]);
  let [y] = (0, a.ynZ)(), [v, O] = i.useState(""), j = i.useRef(""), x = i.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
    trackUserProfileEditAction: _
  } = (0, c.KZ)(), P = i.useCallback(e => {
    (0, s.ES)(t, {
      applicationId: e
    }), a.uvj.announce(u.intl.string(u.t.q0U3DE)), _({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    }), null == m || m()
  }, [t, _, m]), {
    options: I,
    matchSorterOptions: w
  } = (0, o.h)(), S = i.useCallback(e => "" === e.trim() ? I : (0, l.Lu)(I, e, g(f({}, w), {
    threshold: l.Lu.rankings.CONTAINS
  })), [I, w]), E = i.useCallback(e => {
    "" === v.trim() && "" !== e.trim() && _({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: t,
      numCharacters: e.trim().length,
      numResults: S(e).length
    }), O(e), j.current = e
  }, [v, _, t, S]), T = i.useMemo(() => "" !== v.trim() ? u.intl.format(u.t.jhiTsN, {
    searchTerm: v.trim()
  }) : u.intl.string(u.t.QwSXv8), [v]);
  return (0, r.jsx)(a.yRy, g(f({}, h), {
    onRequestOpen: () => {
      _({
        action: "PRESS_ADD_GAME",
        widgetEdited: t
      }), O(""), j.current = ""
    },
    onRequestClose: () => {
      _({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: t,
        numCharacters: j.current.trim().length,
        numResults: S(j.current).length
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOP"]),
        autoFocus: true,
        value: y,
        onChange: e => {
          P(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: T,
        emptyStateHeader: "",
        onQueryChange: E,
        children: e => S(e).map(e => (0, r.jsx)(a.lo1, {
          disabled: x.has(e.value),
          value: String(e.value),
          children: (0, r.jsx)(a.lo1.Label, {
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/medium",
              color: "text-default",
              children: e.label
            })
          })
        }, String(e.value)))
      })
    },
    children: e => b(e)
  }))
}

function b(e) {
  var {
    disabled: t
  } = e, n = p(e, ["disabled"]);
  let l = i.useRef(null);
  return (0, r.jsx)(m, g(f({
    targetElementRef: l,
    position: "bottom",
    align: "center"
  }, n), {
    children: e => (0, r.jsx)(a.Button, f({
      buttonRef: l,
      variant: "secondary",
      size: "sm",
      icon: a.qJs,
      text: u.intl.string(u.t.SgTOtX),
      disabled: t
    }, e))
  }))
}

function h(e) {
  let t = i.useRef(null);
  return (0, r.jsx)(m, g(f({
    targetElementRef: t,
    position: "right",
    align: "top"
  }, e), {
    children: e => (0, r.jsx)(a.P3F, g(f({
      innerRef: t,
      className: d.coverButton,
      "aria-label": u.intl.string(u.t.SgTOtX)
    }, e), {
      children: (0, r.jsx)(a.svS, {
        color: "currentColor"
      })
    }))
  }))
}