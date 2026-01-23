/** Chunk was on web.js **/
/** chunk id: 868903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => S,
  LY: () => C,
  vw: () => w
});
var Chunk650682 = require("./650682.js"),
  Chunk241634 = require("./241634.js"),
  Chunk825913 = require("./825913.js"),
  Chunk129844 = require("./129844.js"),
  Chunk447509 = require("./447509.js"),
  Chunk257537 = require("./257537.js"),
  Chunk123375 = require("./123375.js"),
  Chunk357710 = require("./357710.js"),
  Chunk193523 = require("./193523.js"),
  Chunk567359 = require("./567359.js"),
  Chunk498430 = require("./498430.js"),
  Chunk27270 = require("./27270.js"),
  Chunk967158 = require("./967158.js"),
  Chunk59845 = require("./59845.js"),
  Chunk178375 = require("./178375.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk533715 = require("./533715.js"),
  Chunk565801 = require("./565801.js"),
  Chunk64700 = require("./64700.js");
let A = (0, Chunk64700.createContext)(null),
  I = (0, Chunk64700.createContext)(null),
  S = (0, Chunk64700.forwardRef)(function(e, t) {
    return [e, t] = (0, a.JT)(e, t, A), v.createElement(o.DN.Provider, {
      value: null
    }, v.createElement(m.GQ, {
      content: e.children
    }, n => v.createElement(T, {
      props: e,
      forwardedRef: t,
      collection: n
    })))
  });

function T({
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
  [u, i] = (0, a.JT)(u, i, l.Co);
  let {
    filter: p,
    shouldUseVirtualFocus: _,
    ...h
  } = u, [m, g] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]), y = (0, O.p)({
    ...h,
    children: true,
    collection: n
  }), b = (0, O.Z)(y, p), A = (0, E.$)(u, {
    global: true
  }), S = Object.fromEntries(Object.entries(A).map(([e, t]) => [e, "id" === e ? t : true])), {
    gridProps: T,
    labelProps: C,
    descriptionProps: N,
    errorMessageProps: w
  } = (0, f.n)({
    ...h,
    ...S,
    label: g
  }, b, i);
  return v.createElement("div", {
    ...A,
    id: c,
    ref: t,
    slot: e.slot || true,
    className: null != (r = e.className) ? r : "react-aria-TagGroup",
    style: e.style
  }, v.createElement(a.Kq, {
    values: [
      [s.I, {
        ...C,
        elementType: "span",
        ref: m
      }],
      [I, {
        ...T,
        ref: i
      }],
      [o.DN, b],
      [d.h, {
        slots: {
          description: N,
          errorMessage: w
        }
      }]
    ]
  }, e.children))
}
let C = (0, Chunk64700.forwardRef)(function(e, t) {
  return (0, v.useContext)(o.DN) ? v.createElement(N, {
    props: e,
    forwardedRef: t
  }) : v.createElement(m.pM, e)
});

function N({
  props: e,
  forwardedRef: t
}) {
  let n = (0, v.useContext)(o.DN),
    {
      CollectionRoot: r
    } = (0, v.useContext)(i.zL),
    [s, l] = (0, a.JT)({}, t, I),
    {
      focusProps: c,
      isFocused: d,
      isFocusVisible: f
    } = (0, p.o)(),
    _ = {
      isEmpty: 0 === n.collection.size,
      isFocused: d,
      isFocusVisible: f,
      state: n
    },
    h = (0, a.Sl)({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-TagList",
      values: _
    }),
    m = (0, i.l2)(n.selectionManager.focusedKey),
    g = (0, E.$)(e, {
      global: true
    });
  return v.createElement("div", {
    ...(0, y.v)(g, h, s, c),
    ref: l,
    "data-empty": 0 === n.collection.size || true,
    "data-focused": d || true,
    "data-focus-visible": f || true
  }, v.createElement(u.D, null, 0 === n.collection.size && e.renderEmptyState ? e.renderEmptyState(_) : v.createElement(r, {
    collection: n.collection,
    persistedKeys: m
  })))
}
let w = (0, Chunk59845.KU)(Chunk178375._B, (e, t, n) => {
  let s = (0, v.useContext)(o.DN),
    l = (0, b.U)(t),
    {
      focusProps: u,
      isFocusVisible: d
    } = (0, p.o)({
      within: false
    }),
    {
      rowProps: f,
      gridCellProps: m,
      removeButtonProps: g,
      ...O
    } = (0, _.O)({
      item: n
    }, s, l),
    {
      hoverProps: A,
      isHovered: I
    } = (0, h.M)({
      isDisabled: !O.allowsSelection,
      onHoverStart: n.props.onHoverStart,
      onHoverChange: n.props.onHoverChange,
      onHoverEnd: n.props.onHoverEnd
    }),
    S = (0, a.Sl)({
      ...e,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-Tag",
      values: {
        ...O,
        isFocusVisible: d,
        isHovered: I,
        selectionMode: s.selectionManager.selectionMode,
        selectionBehavior: s.selectionManager.selectionBehavior
      }
    });
  (0, v.useEffect)(() => {
    n.textValue
  }, [n.textValue]);
  let T = (0, E.$)(e, {
    global: true
  });
  return delete T.id, delete T.onClick, v.createElement("div", {
    ref: l,
    ...(0, y.v)(T, S, f, u, A),
    "data-selected": O.isSelected || true,
    "data-disabled": O.isDisabled || true,
    "data-hovered": I || true,
    "data-focused": O.isFocused || true,
    "data-focus-visible": d || true,
    "data-pressed": O.isPressed || true,
    "data-allows-removing": O.allowsRemoving || true,
    "data-selection-mode": "none" === s.selectionManager.selectionMode ? true : s.selectionManager.selectionMode
  }, v.createElement("div", {
    ...m,
    style: {
      display: "contents"
    }
  }, v.createElement(a.Kq, {
    values: [
      [r.k, {
        slots: {
          remove: g
        }
      }],
      [i.zL, i.N],
      [c.r, {
        isSelected: O.isSelected
      }]
    ]
  }, S.children)))
})