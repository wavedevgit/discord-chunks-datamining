/** Chunk was on web.js **/
/** chunk id: 784021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => I,
  QS: () => O,
  Vp: () => S
});
var Chunk484437 = require("./484437.js"),
  Chunk778629 = require("./778629.js"),
  Chunk681897 = require("./681897.js"),
  Chunk301713 = require("./301713.js"),
  Chunk778555 = require("./778555.js"),
  Chunk496215 = require("./496215.js"),
  Chunk836515 = require("./836515.js"),
  Chunk264195 = require("./264195.js"),
  Chunk391722 = require("./391722.js"),
  Chunk731602 = require("./731602.js"),
  Chunk411988 = require("./411988.js"),
  Chunk436242 = require("./436242.js"),
  Chunk506364 = require("./506364.js"),
  Chunk422305 = require("./422305.js"),
  Chunk138798 = require("./138798.js"),
  Chunk647438 = require("./647438.js");
let b = (0, Chunk647438.createContext)(null),
  y = (0, Chunk647438.createContext)(null),
  O = (0, Chunk647438.forwardRef)(function(e, t) {
    return [e, t] = (0, a.pE)(e, t, b), E.createElement(_.yF, {
      content: e.children
    }, n => E.createElement(v, {
      props: e,
      forwardedRef: t,
      collection: n
    }))
  });

function v({
  props: e,
  forwardedRef: t,
  collection: n
}) {
  var r;
  let i = (0, E.useRef)(null),
    [u, d] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]),
    f = (0, g.n)({
      ...e,
      children: true,
      collection: n
    }),
    _ = (0, p.z)(e),
    h = Object.fromEntries(Object.entries(_).map(([e]) => [e, true])),
    {
      gridProps: m,
      labelProps: b,
      descriptionProps: O,
      errorMessageProps: v
    } = (0, c.H)({
      ...e,
      ...h,
      label: d
    }, f, i);
  return E.createElement("div", {
    ..._,
    ref: t,
    slot: e.slot || true,
    className: null != (r = e.className) ? r : "react-aria-TagGroup",
    style: e.style
  }, E.createElement(a.zt, {
    values: [
      [o.n, {
        ...b,
        elementType: "span",
        ref: u
      }],
      [y, {
        ...m,
        ref: i
      }],
      [s.a$, f],
      [l.j, {
        slots: {
          description: O,
          errorMessage: v
        }
      }]
    ]
  }, e.children))
}
let I = (0, Chunk647438.forwardRef)(function(e, t) {
  return (0, E.useContext)(s.a$) ? E.createElement(T, {
    props: e,
    forwardedRef: t
  }) : E.createElement(_.FE, e)
});

function T({
  props: e,
  forwardedRef: t
}) {
  let n = (0, E.useContext)(s.a$),
    {
      CollectionRoot: r
    } = (0, E.useContext)(i.Qk),
    [o, l] = (0, a.pE)(e, t, y);
  delete o.items, delete o.renderEmptyState;
  let {
    focusProps: c,
    isFocused: d,
    isFocusVisible: f
  } = (0, u.F)(), _ = {
    isEmpty: 0 === n.collection.size,
    isFocused: d,
    isFocusVisible: f,
    state: n
  }, p = (0, a.aX)({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-TagList",
    values: _
  }), m = (0, i.pd)(n.selectionManager.focusedKey);
  return E.createElement("div", {
    ...(0, h.d)(o, c),
    ...p,
    ref: l,
    "data-empty": 0 === n.collection.size || true,
    "data-focused": d || true,
    "data-focus-visible": f || true
  }, 0 === n.collection.size && e.renderEmptyState ? e.renderEmptyState(_) : E.createElement(r, {
    collection: n.collection,
    persistedKeys: m
  }))
}
let S = (0, Chunk411988.G5)("item", (e, t, n) => {
  let o = (0, E.useContext)(s.a$),
    l = (0, m.B)(t),
    {
      focusProps: c,
      isFocusVisible: _
    } = (0, u.F)({
      within: true
    }),
    {
      rowProps: g,
      gridCellProps: b,
      removeButtonProps: y,
      ...O
    } = (0, d.E)({
      item: n
    }, o, l),
    {
      hoverProps: v,
      isHovered: I
    } = (0, f.X)({
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
        isFocusVisible: _,
        isHovered: I,
        selectionMode: o.selectionManager.selectionMode,
        selectionBehavior: o.selectionManager.selectionBehavior
      }
    });
  return (0, E.useEffect)(() => {
    n.textValue || console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.")
  }, [n.textValue]), E.createElement("div", {
    ref: l,
    ...T,
    ...(0, h.d)((0, p.z)(e), g, c, v),
    "data-selected": O.isSelected || true,
    "data-disabled": O.isDisabled || true,
    "data-hovered": I || true,
    "data-focused": O.isFocused || true,
    "data-focus-visible": _ || true,
    "data-pressed": O.isPressed || true,
    "data-allows-removing": O.allowsRemoving || true,
    "data-selection-mode": "none" === o.selectionManager.selectionMode ? true : o.selectionManager.selectionMode
  }, E.createElement("div", {
    ...b,
    style: {
      display: "contents"
    }
  }, E.createElement(a.zt, {
    values: [
      [r.b, {
        slots: {
          remove: y
        }
      }],
      [i.Qk, i.Uu]
    ]
  }, T.children)))
})