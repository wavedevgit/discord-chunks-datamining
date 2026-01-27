/** Chunk was on 94682 **/
/** chunk id: 34442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IU: () => O,
  dE: () => j
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk896170 = require("./896170.js"),
  Chunk389723 = require("./389723.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk383329 = require("./383329.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk958338 = require("./958338.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk810824 = require("./810824.js");

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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function y(e) {
  let {
    widgetType: t,
    widget: n,
    onAddGame: y,
    children: O
  } = e, j = b(e, ["widgetType", "widget", "onAddGame", "children"]), x = l.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
    trackUserProfileEditAction: h
  } = (0, c.NJ)(), [v, _] = l.useState(""), A = l.useRef(""), {
    options: I,
    matchSorterOptions: w
  } = (0, s.R)(), {
    applicationIds: P,
    onAddGame: E
  } = (0, d.S)(t), S = l.useCallback(e => {
    (0, u.ew)({
      widgetType: t,
      game: {
        applicationId: e
      }
    }), o.ORC.announce(f.intl.string(f.t.q0U3DE)), h({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    }), P.includes(e) && E(e), null == y || y()
  }, [t, h, y, P, E]), T = l.useMemo(() => {
    let e = new Map(I.map(e => [String(e.value), {
        id: String(e.value),
        value: String(e.value),
        label: e.label,
        disabled: x.has(e.value)
      }])),
      t = P.map(t => e.get(t)).filter(e => null != e && !e.disabled),
      n = [...e.values()].filter(e => !t.includes(e));
    return [...t, ...n]
  }, [I, x, P]), N = l.useMemo(() => m(g({}, w), {
    threshold: i.Ht.rankings.CONTAINS,
    keys: ["label"]
  }), [w]), C = l.useCallback(e => "" === e.trim() ? T.length : (0, i.Ht)(T, e, N).length, [T, N]), D = l.useCallback(e => {
    let n = e.target.value;
    "" === v.trim() && "" !== n.trim() && h({
      action: "GAME_SEARCH_SESSION_STARTED",
      widgetEdited: t,
      numCharacters: n.trim().length,
      numResults: C(n)
    }), _(n), A.current = n
  }, [v, h, t, C]);
  return (0, r.jsx)(o.YNO, m(g({}, j), {
    onRequestOpen: () => {
      h({
        action: "PRESS_ADD_GAME",
        widgetEdited: t
      }), _(""), A.current = ""
    },
    onRequestClose: () => {
      h({
        action: "GAME_SEARCH_SESSION_ENDED",
        widgetEdited: t,
        numCharacters: A.current.trim().length,
        numResults: C(A.current)
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.lGe, {
        className: p.C,
        "aria-label": f.intl.string(f.t.uqw8wK),
        children: (0, r.jsxs)(a.iS, {
          selectionMode: "single",
          value: null,
          onSelectionChange: e => {
            null != e && (S(e), t())
          },
          options: T,
          matchSorterOptions: N,
          children: [(0, r.jsx)(a.a3, {
            label: f.intl.string(f.t["5h0QOP"]),
            hideLabel: true,
            placeholder: f.intl.string(f.t["5h0QOP"]),
            autoFocus: true,
            onQueryChange: D
          }), (0, r.jsx)(a.X2, {
            maxVisibleItems: 7
          })]
        })
      })
    },
    children: e => O(e)
  }))
}

function O(e) {
  let {
    disabled: t
  } = e, n = b(e, ["disabled"]), i = l.useRef(null);
  return (0, r.jsx)(y, m(g({
    targetElementRef: i,
    position: "bottom",
    align: "center"
  }, n), {
    children: e => (0, r.jsx)(o.Button, g({
      buttonRef: i,
      variant: "secondary",
      size: "sm",
      icon: o.j96,
      text: f.intl.string(f.t.SgTOtX),
      disabled: t
    }, e))
  }))
}

function j(e) {
  let t = l.useRef(null);
  return (0, r.jsx)(y, m(g({
    targetElementRef: t,
    position: "right",
    align: "top"
  }, e), {
    children: e => (0, r.jsx)(o.DUT, m(g({
      innerRef: t,
      className: p.c,
      "aria-label": f.intl.string(f.t.SgTOtX)
    }, e), {
      children: (0, r.jsx)(o.pa$, {
        color: "currentColor"
      })
    }))
  }))
}