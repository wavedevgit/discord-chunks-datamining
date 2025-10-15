/** Chunk was on 36073 **/
/** chunk id: 881410, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  wl: () => O,
  yX: () => m
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

function g(e) {
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

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var r, n, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
  }
  return i
}

function b(e) {
  var {
    widgetType: t,
    widget: r,
    children: b
  } = e, m = p(e, ["widgetType", "widget", "children"]);
  let [O] = (0, o.ynZ)(), [y, j] = i.useState(""), x = i.useRef(""), v = i.useMemo(() => new Set(r.games.map(e => e.applicationId)), [r.games]), {
    trackUserProfileEditAction: h
  } = (0, c.KZ)(), _ = i.useCallback(e => {
    (0, s.ES)(t, {
      applicationId: e
    }), o.uvj.announce(u.intl.string(u.t.q0U3DA)), h({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    })
  }, [t, h]), {
    options: w,
    matchSorterOptions: P
  } = (0, l.h)(), I = i.useCallback(e => "" === e.trim() ? w : (0, a.Lu)(w, e, f(g({}, P), {
    threshold: a.Lu.rankings.CONTAINS
  })), [w, P]), S = i.useCallback(e => {
    "" === y.trim() && "" !== e.trim() && h({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: t,
      numCharacters: e.trim().length,
      numResults: I(e).length
    }), j(e), x.current = e
  }, [y, h, t, I]), E = i.useMemo(() => "" !== y.trim() ? u.intl.format(u.t.ZoearK, {
    searchTerm: y.trim(),
    surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C"
  }) : u.intl.string(u.t.QwSXv7), [y]);
  return (0, n.jsx)(o.yRy, f(g({}, m), {
    onRequestOpen: () => {
      h({
        action: "PRESS_ADD_GAME",
        widgetEdited: t
      }), j(""), x.current = ""
    },
    onRequestClose: () => {
      h({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: t,
        numCharacters: x.current.trim().length,
        numResults: I(x.current).length
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
        value: O,
        onChange: e => {
          _(e), t()
        },
        multiSelect: false,
        maxVisibleItems: 7,
        emptyStateText: E,
        emptyStateHeader: "",
        onQueryChange: S,
        children: e => I(e).map(e => (0, n.jsx)(o.lo1, {
          disabled: v.has(e.value),
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
    children: e => b(e)
  }))
}

function m(e) {
  var {
    disabled: t
  } = e, r = p(e, ["disabled"]);
  let a = i.useRef(null);
  return (0, n.jsx)(b, f(g({
    targetElementRef: a,
    position: "bottom",
    align: "center"
  }, r), {
    children: e => (0, n.jsx)(o.Button, g({
      buttonRef: a,
      variant: "secondary",
      size: "sm",
      icon: o.qJs,
      text: u.intl.string(u.t.SgTOtb),
      disabled: t
    }, e))
  }))
}

function O(e) {
  let t = i.useRef(null);
  return (0, n.jsx)(b, f(g({
    targetElementRef: t,
    position: "right",
    align: "top"
  }, e), {
    children: e => (0, n.jsx)(o.P3F, f(g({
      innerRef: t,
      className: d.coverButton,
      "aria-label": u.intl.string(u.t.SgTOtb)
    }, e), {
      children: (0, n.jsx)(o.svS, {
        color: "currentColor"
      })
    }))
  }))
}