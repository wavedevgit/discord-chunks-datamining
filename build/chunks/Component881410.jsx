/** Chunk was on 60646 **/
/** chunk id: 881410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  wl: () => v,
  yX: () => y
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk423802 = require("./423802.js"),
  Chunk496600 = require("./496600.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk206599 = require("./206599.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk935587 = require("./935587.js");

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

function b(e, t) {
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

function m(e, t) {
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
    onAddGame: h,
    children: y
  } = e, v = m(e, ["widgetType", "widget", "onAddGame", "children"]);
  let O = i.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]),
    {
      trackUserProfileEditAction: j
    } = (0, s.KZ)(),
    [x, P] = i.useState(""),
    I = i.useRef(""),
    {
      options: w,
      matchSorterOptions: S
    } = (0, c.h)(),
    {
      applicationIds: E,
      onAddGame: T
    } = (0, d.K)(t),
    _ = i.useCallback(e => {
      (0, u.ES)({
        widgetType: t,
        game: {
          applicationId: e
        }
      }), o.uvj.announce(f.intl.string(f.t.q0U3DE)), j({
        action: "GAME_ADDED",
        gameId: e,
        widgetEdited: t
      }), E.includes(e) && T(e), null == h || h()
    }, [t, j, h, E, T]),
    C = i.useMemo(() => {
      let e = new Map(w.map(e => [String(e.value), {
          id: String(e.value),
          value: String(e.value),
          label: e.label,
          disabled: O.has(e.value)
        }])),
        t = E.map(t => e.get(t)).filter(e => null != e && !e.disabled),
        n = [...e.values()].filter(e => !t.includes(e));
      return [...t, ...n]
    }, [w, O, E]),
    D = i.useMemo(() => b(p({}, S), {
      threshold: a.Lu.rankings.CONTAINS,
      keys: ["label"]
    }), [S]),
    k = i.useCallback(e => "" === e.trim() ? C.length : (0, a.Lu)(C, e, D).length, [C, D]),
    N = i.useCallback(e => {
      let n = e.target.value;
      "" === x.trim() && "" !== n.trim() && j({
        action: "GAME_SEARCH_SESSION_STARTED",
        widgetEdited: t,
        numCharacters: n.trim().length,
        numResults: k(n)
      }), P(n), I.current = n
    }, [x, j, t, k]);
  return (0, r.jsx)(o.yRy, b(p({}, v), {
    onRequestOpen: () => {
      j({
        action: "PRESS_ADD_GAME",
        widgetEdited: t
      }), P(""), I.current = ""
    },
    onRequestClose: () => {
      j({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: t,
        numCharacters: I.current.trim().length,
        numResults: k(I.current)
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.VqE, {
        className: g.gameSearchCombobox,
        "aria-label": f.intl.string(f.t.uqw8wK),
        children: (0, r.jsxs)(l.uz, {
          selectionMode: "single",
          value: null,
          onSelectionChange: e => {
            null != e && (_(e), t())
          },
          options: C,
          matchSorterOptions: D,
          children: [(0, r.jsx)(l.Ct, {
            label: f.intl.string(f.t["5h0QOP"]),
            hideLabel: true,
            placeholder: f.intl.string(f.t["5h0QOP"]),
            autoFocus: true,
            onQueryChange: N
          }), (0, r.jsx)(l.px, {
            maxVisibleItems: 7
          })]
        })
      })
    },
    children: e => y(e)
  }))
}

function y(e) {
  var {
    disabled: t
  } = e, n = m(e, ["disabled"]);
  let a = i.useRef(null);
  return (0, r.jsx)(h, b(p({
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
  return (0, r.jsx)(h, b(p({
    targetElementRef: t,
    position: "right",
    align: "top"
  }, e), {
    children: e => (0, r.jsx)(o.P3F, b(p({
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