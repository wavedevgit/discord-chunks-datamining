/** Chunk was on web.js **/
/** chunk id: 375316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => I,
  QS: () => O,
  Vp: () => S
});
var Chunk267603 = require("./267603.js"),
  Chunk134387 = require("./134387.js"),
  Chunk477831 = require("./477831.js"),
  Chunk499339 = require("./499339.js"),
  Chunk834349 = require("./834349.js"),
  Chunk286468 = require("./286468.js"),
  Chunk286310 = require("./286310.js"),
  Chunk127096 = require("./127096.js"),
  Chunk714800 = require("./714800.js"),
  Chunk553357 = require("./553357.js"),
  Chunk873954 = require("./873954.js"),
  Chunk753125 = require("./753125.js"),
  Chunk506523 = require("./506523.js"),
  Chunk853400 = require("./853400.js"),
  Chunk171872 = require("./171872.js"),
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
    _ = (0, p.z)(e, {
      global: true
    }),
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
    [o, l] = (0, a.pE)({}, t, y),
    {
      focusProps: c,
      isFocused: d,
      isFocusVisible: f
    } = (0, u.F)(),
    _ = {
      isEmpty: 0 === n.collection.size,
      isFocused: d,
      isFocusVisible: f,
      state: n
    },
    m = (0, a.aX)({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-TagList",
      values: _
    }),
    g = (0, i.pd)(n.selectionManager.focusedKey),
    b = (0, p.z)(e, {
      global: true
    });
  return E.createElement("div", {
    ...(0, h.d)(b, m, o, c),
    ref: l,
    "data-empty": 0 === n.collection.size || true,
    "data-focused": d || true,
    "data-focus-visible": f || true
  }, 0 === n.collection.size && e.renderEmptyState ? e.renderEmptyState(_) : E.createElement(r, {
    collection: n.collection,
    persistedKeys: g
  }))
}
let S = (0, Chunk873954.G5)("item", (e, t, n) => {
  let o = (0, E.useContext)(s.a$),
    l = (0, m.B)(t),
    {
      focusProps: c,
      isFocusVisible: _
    } = (0, u.F)({
      within: false
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
  (0, E.useEffect)(() => {
    n.textValue
  }, [n.textValue]);
  let S = (0, p.z)(e, {
    global: true
  });
  return delete S.id, delete S.onClick, E.createElement("div", {
    ref: l,
    ...(0, h.d)(S, T, g, c, v),
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