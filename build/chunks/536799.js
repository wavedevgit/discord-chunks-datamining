/** Chunk was on web.js **/
/** chunk id: 536799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => C,
  QS: () => S,
  Vp: () => R
});
var Chunk23893 = require("./23893.js"),
  Chunk110294 = require("./110294.js"),
  Chunk595707 = require("./595707.js"),
  Chunk937397 = require("./937397.js"),
  Chunk644528 = require("./644528.js"),
  Chunk900090 = require("./900090.js"),
  Chunk913074 = require("./913074.js"),
  Chunk156748 = require("./156748.js"),
  Chunk819851 = require("./819851.js"),
  Chunk523902 = require("./523902.js"),
  Chunk984940 = require("./984940.js"),
  Chunk106325 = require("./106325.js"),
  Chunk69771 = require("./69771.js"),
  Chunk406581 = require("./406581.js"),
  Chunk557635 = require("./557635.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk413565 = require("./413565.js"),
  Chunk596218 = require("./596218.js"),
  Chunk473749 = require("./473749.js");
let I = (0, Chunk473749.createContext)(null),
  T = (0, Chunk473749.createContext)(null),
  S = (0, Chunk473749.forwardRef)(function(e, t) {
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
  }), S = Object.fromEntries(Object.entries(I).map(([e, t]) => [e, "id" === e ? t : true])), {
    gridProps: A,
    labelProps: C,
    descriptionProps: N,
    errorMessageProps: R
  } = (0, f.H)({
    ...h,
    ...S,
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
      [T, {
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
let C = (0, Chunk473749.forwardRef)(function(e, t) {
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
    [o, l] = (0, a.pE)({}, t, T),
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
let R = (0, Chunk406581.G5)(Chunk557635.s$, (e, t, n) => {
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
      isHovered: T
    } = (0, h.X)({
      isDisabled: !O.allowsSelection,
      onHoverStart: n.props.onHoverStart,
      onHoverChange: n.props.onHoverChange,
      onHoverEnd: n.props.onHoverEnd
    }),
    S = (0, a.aX)({
      ...e,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-Tag",
      values: {
        ...O,
        isFocusVisible: d,
        isHovered: T,
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
    ...(0, b.d)(A, S, f, u, I),
    "data-selected": O.isSelected || true,
    "data-disabled": O.isDisabled || true,
    "data-hovered": T || true,
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
  }, S.children)))
})