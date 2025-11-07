/** Chunk was on web.js **/
/** chunk id: 586684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => C,
  QS: () => T,
  Vp: () => R
});
var Chunk188366 = require("./188366.js"),
  Chunk78218 = require("./78218.js"),
  Chunk922387 = require("./922387.js"),
  Chunk682199 = require("./682199.js"),
  Chunk390237 = require("./390237.js"),
  Chunk386843 = require("./386843.js"),
  Chunk501884 = require("./501884.js"),
  Chunk169460 = require("./169460.js"),
  Chunk594350 = require("./594350.js"),
  Chunk387509 = require("./387509.js"),
  Chunk580470 = require("./580470.js"),
  Chunk987960 = require("./987960.js"),
  Chunk437525 = require("./437525.js"),
  Chunk785894 = require("./785894.js"),
  Chunk975288 = require("./975288.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk593277 = require("./593277.js"),
  Chunk940050 = require("./940050.js"),
  Chunk647438 = require("./647438.js");
let I = (0, Chunk647438.createContext)(null),
  S = (0, Chunk647438.createContext)(null),
  T = (0, Chunk647438.forwardRef)(function(e, t) {
    return [e, t] = (0, a.pE)(e, t, I), v.createElement(s.a$.Provider, {
      value: null
    }, v.createElement(m.yF, {
      content: e.children
    }, n => v.createElement(A, {
      props: e,
      forwardedRef: t,
      collection: n
    })))
  });

function A({
  props: e,
  forwardedRef: t,
  collection: n
}) {
  var r;
  let i = (0, v.useRef)(null),
    {
      id: c,
      ...u
    } = e;
  [u, i] = (0, a.pE)(u, i, l.lU);
  let {
    filter: _,
    shouldUseVirtualFocus: p,
    ...h
  } = u, [m, g] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]), b = (0, O.n)({
    ...h,
    children: true,
    collection: n
  }), y = (0, O.d)(b, _), I = (0, E.z)(u, {
    global: true
  }), T = Object.fromEntries(Object.entries(I).map(([e, t]) => [e, "id" === e ? t : true])), {
    gridProps: A,
    labelProps: C,
    descriptionProps: N,
    errorMessageProps: R
  } = (0, f.H)({
    ...h,
    ...T,
    label: g
  }, y, i);
  return v.createElement("div", {
    ...I,
    id: c,
    ref: t,
    slot: e.slot || true,
    className: null != (r = e.className) ? r : "react-aria-TagGroup",
    style: e.style
  }, v.createElement(a.zt, {
    values: [
      [o.n, {
        ...C,
        elementType: "span",
        ref: m
      }],
      [S, {
        ...A,
        ref: i
      }],
      [s.a$, y],
      [d.j, {
        slots: {
          description: N,
          errorMessage: R
        }
      }]
    ]
  }, e.children))
}
let C = (0, Chunk647438.forwardRef)(function(e, t) {
  return (0, v.useContext)(s.a$) ? v.createElement(N, {
    props: e,
    forwardedRef: t
  }) : v.createElement(m.FE, e)
});

function N({
  props: e,
  forwardedRef: t
}) {
  let n = (0, v.useContext)(s.a$),
    {
      CollectionRoot: r
    } = (0, v.useContext)(i.Qk),
    [o, l] = (0, a.pE)({}, t, S),
    {
      focusProps: c,
      isFocused: d,
      isFocusVisible: f
    } = (0, _.F)(),
    p = {
      isEmpty: 0 === n.collection.size,
      isFocused: d,
      isFocusVisible: f,
      state: n
    },
    h = (0, a.aX)({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-TagList",
      values: p
    }),
    m = (0, i.pd)(n.selectionManager.focusedKey),
    g = (0, E.z)(e, {
      global: true
    });
  return v.createElement("div", {
    ...(0, b.d)(g, h, o, c),
    ref: l,
    "data-empty": 0 === n.collection.size || true,
    "data-focused": d || true,
    "data-focus-visible": f || true
  }, v.createElement(u.y, null, 0 === n.collection.size && e.renderEmptyState ? e.renderEmptyState(p) : v.createElement(r, {
    collection: n.collection,
    persistedKeys: m
  })))
}
let R = (0, Chunk785894.G5)(Chunk975288.s$, (e, t, n) => {
  let o = (0, v.useContext)(s.a$),
    l = (0, y.B)(t),
    {
      focusProps: u,
      isFocusVisible: d
    } = (0, _.F)({
      within: false
    }),
    {
      rowProps: f,
      gridCellProps: m,
      removeButtonProps: g,
      ...O
    } = (0, p.E)({
      item: n
    }, o, l),
    {
      hoverProps: I,
      isHovered: S
    } = (0, h.X)({
      isDisabled: !O.allowsSelection,
      onHoverStart: n.props.onHoverStart,
      onHoverChange: n.props.onHoverChange,
      onHoverEnd: n.props.onHoverEnd
    }),
    T = (0, a.aX)({
      ...e,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-Tag",
      values: {
        ...O,
        isFocusVisible: d,
        isHovered: S,
        selectionMode: o.selectionManager.selectionMode,
        selectionBehavior: o.selectionManager.selectionBehavior
      }
    });
  (0, v.useEffect)(() => {
    n.textValue
  }, [n.textValue]);
  let A = (0, E.z)(e, {
    global: true
  });
  return delete A.id, delete A.onClick, v.createElement("div", {
    ref: l,
    ...(0, b.d)(A, T, f, u, I),
    "data-selected": O.isSelected || true,
    "data-disabled": O.isDisabled || true,
    "data-hovered": S || true,
    "data-focused": O.isFocused || true,
    "data-focus-visible": d || true,
    "data-pressed": O.isPressed || true,
    "data-allows-removing": O.allowsRemoving || true,
    "data-selection-mode": "none" === o.selectionManager.selectionMode ? true : o.selectionManager.selectionMode
  }, v.createElement("div", {
    ...m,
    style: {
      display: "contents"
    }
  }, v.createElement(a.zt, {
    values: [
      [r.b, {
        slots: {
          remove: g
        }
      }],
      [i.Qk, i.Uu],
      [c.p, {
        isSelected: O.isSelected
      }]
    ]
  }, T.children)))
})