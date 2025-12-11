/** Chunk was on 85032 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  wl: () => h,
  yX: () => m
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk423802 = require("./423802.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk935587 = require("./935587.js");

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

function b(e) {
  var {
    widgetType: t,
    widget: n,
    onAddGame: b,
    children: m
  } = e, h = p(e, ["widgetType", "widget", "onAddGame", "children"]);
  let [y] = (0, l.ynZ)(), [O, v] = i.useState(""), j = i.useRef(""), x = i.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
    trackUserProfileEditAction: P
  } = (0, c.KZ)(), I = i.useCallback(e => {
    (0, s.ES)(t, {
      applicationId: e
    }), l.uvj.announce(u.intl.string(u.t.q0U3DE)), P({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    }), null == b || b()
  }, [t, P, b]), {
    options: w,
    matchSorterOptions: S
  } = (0, o.h)(), E = i.useCallback(e => "" === e.trim() ? w : (0, a.Lu)(w, e, g(f({}, S), {
    threshold: a.Lu.rankings.CONTAINS
  })), [w, S]), _ = i.useCallback(e => {
    "" === O.trim() && "" !== e.trim() && P({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: t,
      numCharacters: e.trim().length,
      numResults: E(e).length
    }), v(e), j.current = e
  }, [O, P, t, E]), T = i.useMemo(() => "" !== O.trim() ? u.intl.format(u.t.jhiTsN, {
    searchTerm: O.trim()
  }) : u.intl.string(u.t.QwSXv8), [O]);
  return (0, r.jsx)(l.yRy, g(f({}, h), {
    onRequestOpen: () => {
      P({
        action: "PRESS_ADD_GAME",
        widgetEdited: t
      }), v(""), j.current = ""
    },
    onRequestClose: () => {
      P({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: t,
        numCharacters: j.current.trim().length,
        numResults: E(j.current).length
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.DBG, {
        className: d.gameSearchCombobox,
        placeholder: u.intl.string(u.t["5h0QOP"]),
        autoFocus: true,
        value: y,
        onChange: e => {
          I(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: T,
        emptyStateHeader: "",
        onQueryChange: _,
        children: e => E(e).map(e => (0, r.jsx)(l.lo1, {
          disabled: x.has(e.value),
          value: String(e.value),
          children: (0, r.jsx)(l.lo1.Label, {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/medium",
              color: "text-default",
              children: e.label
            })
          })
        }, String(e.value)))
      })
    },
    children: e => m(e)
  }))
}

function m(e) {
  var {
    disabled: t
  } = e, n = p(e, ["disabled"]);
  let a = i.useRef(null);
  return (0, r.jsx)(b, g(f({
    targetElementRef: a,
    position: "bottom",
    align: "center"
  }, n), {
    children: e => (0, r.jsx)(l.Button, f({
      buttonRef: a,
      variant: "secondary",
      size: "sm",
      icon: l.qJs,
      text: u.intl.string(u.t.SgTOtX),
      disabled: t
    }, e))
  }))
}

function h(e) {
  let t = i.useRef(null);
  return (0, r.jsx)(b, g(f({
    targetElementRef: t,
    position: "right",
    align: "top"
  }, e), {
    children: e => (0, r.jsx)(l.P3F, g(f({
      innerRef: t,
      className: d.coverButton,
      "aria-label": u.intl.string(u.t.SgTOtX)
    }, e), {
      children: (0, r.jsx)(l.svS, {
        color: "currentColor"
      })
    }))
  }))
}