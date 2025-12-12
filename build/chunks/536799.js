/** Chunk was on web.js **/
/** chunk id: 536799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => A,
  QS: () => T,
  Vp: () => P
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
let S = (0, Chunk473749.createContext)(null),
  I = (0, Chunk473749.createContext)(null),
  T = (0, Chunk473749.forwardRef)(function(e, t) {
    return [e, t] = (0, o.pE)(e, t, S), v.createElement(s.a$.Provider, {
      value: null
    }, v.createElement(h.yF, {
      content: e.children
    }, n => v.createElement(C, {
      props: e,
      forwardedRef: t,
      collection: n
    })))
  });

function C({
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
  [u, i] = (0, o.pE)(u, i, l.lU);
  let {
    filter: p,
    shouldUseVirtualFocus: _,
    ...m
  } = u, [h, g] = (0, o.xc)(!e["aria-label"] && !e["aria-labelledby"]), b = (0, O.n)({
    ...m,
    children: true,
    collection: n
  }), y = (0, O.d)(b, p), S = (0, E.z)(u, {
    global: true
  }), T = Object.fromEntries(Object.entries(S).map(([e, t]) => [e, "id" === e ? t : true])), {
    gridProps: C,
    labelProps: A,
    descriptionProps: N,
    errorMessageProps: P
  } = (0, f.H)({
    ...m,
    ...T,
    label: g
  }, y, i);
  return v.createElement("div", {
    ...S,
    id: c,
    ref: t,
    slot: e.slot || true,
    className: null != (r = e.className) ? r : "react-aria-TagGroup",
    style: e.style
  }, v.createElement(o.zt, {
    values: [
      [a.n, {
        ...A,
        elementType: "span",
        ref: h
      }],
      [I, {
        ...C,
        ref: i
      }],
      [s.a$, y],
      [d.j, {
        slots: {
          description: N,
          errorMessage: P
        }
      }]
    ]
  }, e.children))
}
let A = (0, Chunk473749.forwardRef)(function(e, t) {
  return (0, v.useContext)(s.a$) ? v.createElement(N, {
    props: e,
    forwardedRef: t
  }) : v.createElement(h.FE, e)
});

function N({
  props: e,
  forwardedRef: t
}) {
  let n = (0, v.useContext)(s.a$),
    {
      CollectionRoot: r
    } = (0, v.useContext)(i.Qk),
    [a, l] = (0, o.pE)({}, t, I),
    {
      focusProps: c,
      isFocused: d,
      isFocusVisible: f
    } = (0, p.F)(),
    _ = {
      isEmpty: 0 === n.collection.size,
      isFocused: d,
      isFocusVisible: f,
      state: n
    },
    m = (0, o.aX)({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-TagList",
      values: _
    }),
    h = (0, i.pd)(n.selectionManager.focusedKey),
    g = (0, E.z)(e, {
      global: true
    });
  return v.createElement("div", {
    ...(0, b.d)(g, m, a, c),
    ref: l,
    "data-empty": 0 === n.collection.size || true,
    "data-focused": d || true,
    "data-focus-visible": f || true
  }, v.createElement(u.y, null, 0 === n.collection.size && e.renderEmptyState ? e.renderEmptyState(_) : v.createElement(r, {
    collection: n.collection,
    persistedKeys: h
  })))
}
let P = (0, Chunk406581.G5)(Chunk557635.s$, (e, t, n) => {
  let a = (0, v.useContext)(s.a$),
    l = (0, y.B)(t),
    {
      focusProps: u,
      isFocusVisible: d
    } = (0, p.F)({
      within: false
    }),
    {
      rowProps: f,
      gridCellProps: h,
      removeButtonProps: g,
      ...O
    } = (0, _.E)({
      item: n
    }, a, l),
    {
      hoverProps: S,
      isHovered: I
    } = (0, m.X)({
      isDisabled: !O.allowsSelection,
      onHoverStart: n.props.onHoverStart,
      onHoverChange: n.props.onHoverChange,
      onHoverEnd: n.props.onHoverEnd
    }),
    T = (0, o.aX)({
      ...e,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-Tag",
      values: {
        ...O,
        isFocusVisible: d,
        isHovered: I,
        selectionMode: a.selectionManager.selectionMode,
        selectionBehavior: a.selectionManager.selectionBehavior
      }
    });
  (0, v.useEffect)(() => {
    n.textValue
  }, [n.textValue]);
  let C = (0, E.z)(e, {
    global: true
  });
  return delete C.id, delete C.onClick, v.createElement("div", {
    ref: l,
    ...(0, b.d)(C, T, f, u, S),
    "data-selected": O.isSelected || true,
    "data-disabled": O.isDisabled || true,
    "data-hovered": I || true,
    "data-focused": O.isFocused || true,
    "data-focus-visible": d || true,
    "data-pressed": O.isPressed || true,
    "data-allows-removing": O.allowsRemoving || true,
    "data-selection-mode": "none" === a.selectionManager.selectionMode ? true : a.selectionManager.selectionMode
  }, v.createElement("div", {
    ...h,
    style: {
      display: "contents"
    }
  }, v.createElement(o.zt, {
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