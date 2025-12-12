/** Chunk was on web.js **/
/** chunk id: 676733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RM: () => X,
  X2: () => $,
  bL: () => et,
  iA: () => Z,
  sg: () => z,
  xD: () => Y
});
var Chunk23893 = require("./23893.js"),
  Chunk900090 = require("./900090.js"),
  Chunk110294 = require("./110294.js"),
  Chunk595707 = require("./595707.js"),
  Chunk941084 = require("./941084.js"),
  Chunk913074 = require("./913074.js"),
  Chunk156748 = require("./156748.js"),
  Chunk557635 = require("./557635.js"),
  Chunk406581 = require("./406581.js"),
  Chunk632765 = require("./632765.js"),
  Chunk172534 = require("./172534.js"),
  Chunk634809 = require("./634809.js"),
  Chunk857344 = require("./857344.js"),
  Chunk504041 = require("./504041.js"),
  Chunk944576 = require("./944576.js"),
  Chunk984940 = require("./984940.js"),
  Chunk605294 = require("./605294.js"),
  Chunk158821 = require("./158821.js"),
  Chunk598716 = require("./598716.js"),
  Chunk69771 = require("./69771.js"),
  Chunk123865 = require("./123865.js"),
  Chunk101023 = require("./101023.js"),
  Chunk216597 = require("./216597.js"),
  Chunk920932 = require("./920932.js"),
  Chunk485853 = require("./485853.js"),
  Chunk287293 = require("./287293.js"),
  Chunk413565 = require("./413565.js"),
  Chunk401522 = require("./401522.js"),
  Chunk880016 = require("./880016.js"),
  Chunk575065 = require("./575065.js"),
  Chunk69663 = require("./69663.js"),
  Chunk473749 = require("./473749.js");
require("./24156.js");
class j extends Chunk557635.Mi {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
  }
  commit(e, t, n = false) {
    for (let e of (this.updateColumns(n), this.rows = [], this.getChildren(this.body.key))) {
      let t = e.lastChildKey;
      if (null != t) {
        var r, i;
        let e = this.getItem(t),
          o = (null != (r = e.colIndex) ? r : e.index) + (null != (i = e.colSpan) ? i : 1);
        if (o !== this.columns.length && !n) throw Error(`Cell count must match column count. Found ${o} cells and ${this.columns.length} columns.`)
      }
      this.rows.push(e)
    }
    super.commit(e, t, n)
  }
  updateColumns(e) {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = new Set, this.columns = [];
    let t = new Map,
      n = e => {
        for (let r of ("column" === e.type && (t.set(e.key, e), !e.hasChildNodes && (e.index = this.columns.length, this.columns.push(e), e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key))), this.getChildren(e.key))) n(r)
      };
    for (let e of this.getChildren(this.head.key)) n(e);
    if (this.headerRows = (0, p.G)(t, this.columns), this.columnsDirty = false, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
  }
  get columnCount() {
    return this.columns.length
  }*[Symbol.iterator]() {
    false !== this.head.key && (yield this.head, yield this.body)
  }
  getFirstKey() {
    return this.body.firstChildKey
  }
  getLastKey() {
    return this.body.lastChildKey
  }
  getKeyAfter(e) {
    var t;
    let n = this.getItem(e);
    return (null == n ? true : n.type) === "column" ? null != (t = n.nextKey) ? t : null : super.getKeyAfter(e)
  }
  getKeyBefore(e) {
    var t, n;
    let r = this.getItem(e);
    if ((null == r ? true : r.type) === "column") return null != (n = r.prevKey) ? n : null;
    let i = super.getKeyBefore(e);
    return null != i && (null == (t = this.getItem(i)) ? true : t.type) === "tablebody" ? null : i
  }
  getChildren(e) {
    if (!this.getItem(e)) {
      for (let t of this.headerRows)
        if (t.key === e) return t.childNodes
    }
    return super.getChildren(e)
  }
  clone() {
    let e = super.clone();
    return module.headerRows = this.headerRows, module.columns = this.columns, module.rowHeaderColumnKeys = this.rowHeaderColumnKeys, module.head = this.head, module.body = this.body, module
  }
  getTextValue(e) {
    let t = this.getItem(e);
    if (!t) return "";
    if (t.textValue) return t.textValue;
    let n = this.rowHeaderColumnKeys,
      r = [];
    for (let t of this.getChildren(e)) {
      let e = this.columns[t.index];
      if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break
    }
    return r.join(" ")
  }
  constructor(...e) {
    super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set, this.head = new H(false), this.body = new Q(false), this.columnsDirty = true
  }
}
let M = (0, Chunk473749.createContext)(null),
  k = (0, Chunk473749.createContext)(null),
  U = (0, Chunk473749.createContext)(null),
  G = (0, Chunk473749.createContext)(null),
  Z = (0, Chunk473749.forwardRef)(function(e, t) {
    var n;
    [e, t] = (0, a.pE)(e, t, k);
    let r = (0, _.q)(e),
      {
        selectionBehavior: i,
        selectionMode: o,
        disallowEmptySelection: s
      } = r,
      l = !!(null == (n = e.dragAndDropHooks) ? true : n.useDraggableCollectionState),
      c = (0, L.useMemo)(() => ({
        selectionBehavior: "none" === o ? null : i,
        selectionMode: o,
        disallowEmptySelection: s,
        allowsDragging: l
      }), [i, o, s, l]),
      u = L.createElement(V.Provider, {
        value: c
      }, L.createElement(d.FE, e));
    return L.createElement(d.yF, {
      content: u,
      createCollection: () => new j
    }, n => L.createElement(F, {
      props: e,
      forwardedRef: t,
      selectionState: r,
      collection: n
    }))
  });

function F({
  props: e,
  forwardedRef: t,
  selectionState: n,
  collection: r
}) {
  var l;
  let u, d, f;
  [e, t] = (0, a.pE)(e, t, i.lU);
  let {
    shouldUseVirtualFocus: p,
    disallowTypeAhead: _,
    filter: O,
    ...v
  } = e, S = (0, L.useContext)(M);
  t = (0, P.B)((0, L.useMemo)(() => (0, R.l)(t, null == S ? true : S.tableRef), [t, null == S ? true : S.tableRef]));
  let I = (0, m.o)({
      ...v,
      collection: r,
      children: true,
      UNSAFE_selectionState: n
    }),
    T = (0, m.w)(I, O),
    {
      isVirtualized: C,
      layoutDelegate: A,
      dropTargetDelegate: N,
      CollectionRoot: D
    } = (0, L.useContext)(o.Qk),
    {
      dragAndDropHooks: x
    } = e,
    {
      gridProps: j
    } = (0, h.x)({
      ...v,
      layoutDelegate: A,
      isVirtualized: C
    }, T, t),
    k = T.selectionManager,
    Z = !!(null == x ? true : x.useDraggableCollectionState),
    F = !!(null == x ? true : x.useDroppableCollectionState);
  (0, L.useRef)(Z), (0, L.useRef)(F), (0, L.useEffect)(() => {}, [Z, F]);
  let V = false,
    H = null,
    Y = (0, L.useRef)(null);
  if (Z && x) {
    u = x.useDraggableCollectionState({
      collection: T.collection,
      selectionManager: k,
      preview: x.renderDragPreview ? Y : true
    }), x.useDraggableCollection({}, u, t);
    let e = x.DragPreview;
    H = x.renderDragPreview ? L.createElement(e, {
      ref: Y
    }, x.renderDragPreview) : null
  }
  if (F && x) {
    d = x.useDroppableCollectionState({
      collection: T.collection,
      selectionManager: k
    });
    let e = new(0, g.d)({
        collection: T.collection,
        disabledKeys: k.disabledKeys,
        disabledBehavior: k.disabledBehavior,
        ref: t,
        layoutDelegate: A
      }),
      n = x.dropTargetDelegate || N || new x.ListDropTargetDelegate(r.rows, t);
    f = x.useDroppableCollection({
      keyboardDelegate: e,
      dropTargetDelegate: n
    }, d, t), V = d.isDropTarget({
      type: "root"
    })
  }
  let {
    focusProps: W,
    isFocused: K,
    isFocusVisible: z
  } = (0, E.F)(), q = (0, a.aX)({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: V,
      isFocused: K,
      isFocusVisible: z,
      state: T
    }
  }), Q = !!(Z && !(null == u ? true : u.isDisabled)), X = q.style, J = null;
  S && (J = S.useTableColumnResizeState({
    tableWidth: S.tableWidth
  }, T), C || (X = {
    ...X,
    tableLayout: "fixed",
    width: "fit-content"
  }));
  let $ = B("table"),
    ee = (0, w.z)(e, {
      global: true
    });
  return L.createElement(a.zt, {
    values: [
      [U, T],
      [G, J],
      [s.Ed, {
        dragAndDropHooks: x,
        dragState: u,
        dropState: d
      }],
      [s.SZ, {
        render: en
      }],
      [i.lU, null],
      [i.LE, null]
    ]
  }, L.createElement(b.MT, null, L.createElement($, {
    ...(0, y.d)(ee, q, j, W, null == f ? true : f.collectionProps),
    style: X,
    ref: t,
    slot: e.slot || true,
    onScroll: e.onScroll,
    "data-allows-dragging": Q || true,
    "data-drop-target": V || true,
    "data-focused": K || true,
    "data-focus-visible": z || true
  }, L.createElement(c.y, null, L.createElement(D, {
    collection: T.collection,
    scrollRef: null != (l = null == S ? true : S.scrollRef) ? l : t,
    persistedKeys: (0, s.y)(k, x, d)
  })))), H)
}

function B(e) {
  let {
    isVirtualized: t
  } = (0, L.useContext)(o.Qk);
  return t ? "div" : e
}
let V = (0, Chunk473749.createContext)(null);
class H extends Chunk557635.S3 {}
H.type = "tableheader";
let Y = (0, Chunk406581.IW)(H, (e, t) => {
  let n = (0, L.useContext)(U).collection,
    r = (0, f.H)({
      items: n.headerRows,
      children: (0, L.useCallback)(e => {
        if ("headerrow" === e.type) return L.createElement(W, {
          item: e
        });
        throw Error("Unsupported node type in TableHeader: " + e.type)
      }, [])
    }),
    i = B("thead"),
    {
      rowGroupProps: o
    } = (0, O.LA)(),
    {
      hoverProps: s,
      isHovered: l
    } = (0, v.X)({
      onHoverStart: e.onHoverStart,
      onHoverChange: e.onHoverChange,
      onHoverEnd: e.onHoverEnd
    }),
    c = (0, a.aX)({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-TableHeader",
      values: {
        isHovered: l
      }
    });
  return L.createElement(i, {
    ...(0, y.d)((0, w.z)(e, {
      global: true
    }), o, s),
    ...c,
    ref: t,
    "data-hovered": l || true
  }, r)
}, e => L.createElement(d.FE, {
  dependencies: e.dependencies,
  items: e.columns
}, e.children));

function W({
  item: e
}) {
  let t = (0, L.useRef)(null),
    n = (0, L.useContext)(U),
    {
      isVirtualized: r,
      CollectionBranch: s
    } = (0, L.useContext)(o.Qk),
    {
      rowProps: l
    } = (0, S.Q)({
      node: e,
      isVirtualized: r
    }, n, t),
    {
      checkboxProps: c
    } = (0, I.j)(n),
    u = B("tr");
  return L.createElement(u, {
    ...l,
    ref: t
  }, L.createElement(a.zt, {
    values: [
      [i.cP, {
        slots: {
          selection: c
        }
      }]
    ]
  }, L.createElement(s, {
    collection: n.collection,
    parent: e
  })))
}
class K extends Chunk557635.S3 {}
K.type = "column";
let z = (0, Chunk406581.G5)(K, (e, t, n) => {
    var r, i;
    let s = (0, P.B)(t),
      l = (0, L.useContext)(U),
      {
        isVirtualized: c
      } = (0, L.useContext)(o.Qk),
      {
        columnHeaderProps: u
      } = (0, T.W)({
        node: n,
        isVirtualized: c
      }, l, s),
      {
        isFocused: d,
        isFocusVisible: f,
        focusProps: p
      } = (0, E.F)(),
      _ = (0, L.useContext)(G),
      m = false;
    _ && (m = _.resizingColumn === n.key);
    let {
      hoverProps: h,
      isHovered: g
    } = (0, v.X)({
      isDisabled: !e.allowsSorting
    }), b = (0, a.aX)({
      ...e,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-Column",
      values: {
        isHovered: g,
        isFocused: d,
        isFocusVisible: f,
        allowsSorting: n.props.allowsSorting,
        sortDirection: (null == (r = l.sortDescriptor) ? true : r.column) === n.key ? l.sortDescriptor.direction : true,
        isResizing: m,
        startResize: () => {
          if (_) _.startResize(n.key), l.setKeyboardNavigationDisabled(true);
          else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing")
        },
        sort: e => {
          l.sort(n.key, e)
        }
      }
    }), O = b.style;
    _ && (O = {
      ...O,
      width: _.getColumnWidth(n.key)
    });
    let S = B("th"),
      I = (0, w.z)(e, {
        global: true
      });
    return delete I.id, L.createElement(S, {
      ...(0, y.d)(I, u, p, h),
      ...b,
      style: O,
      ref: s,
      "data-hovered": g || true,
      "data-focused": d || true,
      "data-focus-visible": f || true,
      "data-resizing": m || true,
      "data-allows-sorting": n.props.allowsSorting || true,
      "data-sort-direction": (null == (i = l.sortDescriptor) ? true : i.column) === n.key ? l.sortDescriptor.direction : true
    }, L.createElement(a.zt, {
      values: [
        [q, {
          column: n,
          triggerRef: s
        }],
        [o.Qk, o.Uu]
      ]
    }, b.children))
  }),
  q = (0, Chunk473749.createContext)(null);
class Q extends Chunk557635.$x {}
Q.type = "tablebody";
let X = (0, Chunk406581.IW)(Q, (e, t) => {
  var n;
  let r, i = (0, L.useContext)(U),
    {
      isVirtualized: l
    } = (0, L.useContext)(o.Qk),
    c = i.collection,
    {
      CollectionBranch: u
    } = (0, L.useContext)(o.Qk),
    {
      dragAndDropHooks: d,
      dropState: f
    } = (0, L.useContext)(s.Ed),
    p = !!(null == d ? true : d.useDroppableCollectionState) && !(null == f ? true : f.isDisabled),
    _ = p && !!f && null != (n = f.isDropTarget({
      type: "root"
    })) && n,
    m = 0 === c.size,
    h = {
      isDropTarget: _,
      isEmpty: m
    },
    g = (0, a.aX)({
      ...e,
      id: true,
      children: true,
      defaultClassName: "react-aria-TableBody",
      values: h
    }),
    E = B("tr"),
    b = B("td"),
    v = c.columnCount;
  if (m && e.renderEmptyState && i) {
    let t = {},
      n = {},
      i = {};
    l ? (n["aria-colspan"] = v, i = {
      display: "contents"
    }) : n.colSpan = v, r = L.createElement(E, {
      role: "row",
      ...t,
      style: i
    }, L.createElement(b, {
      role: "rowheader",
      ...n,
      style: i
    }, e.renderEmptyState(h)))
  }
  let {
    rowGroupProps: S
  } = (0, O.LA)(), I = B("tbody"), T = (0, w.z)(e, {
    global: true
  });
  return L.createElement(I, {
    ...(0, y.d)(T, g, S),
    ref: t,
    "data-empty": m || true
  }, p && L.createElement(eo, null), L.createElement(u, {
    collection: c,
    parent: c.body,
    renderDropIndicator: (0, s._$)(d, f)
  }), r)
});
class J extends Chunk557635.S3 {
  filter(e, t, n) {
    for (let r of e.getChildren(this.key))
      if (n(r.textValue, r)) {
        let n = this.clone();
        return t.addDescendants(n, e), n
      } return null
  }
}
J.type = "item";
let $ = (0, Chunk406581.IW)(J, (e, t, n) => {
  let c, u, d = (0, P.B)(t),
    f = (0, L.useContext)(U),
    {
      dragAndDropHooks: p,
      dragState: _,
      dropState: m
    } = (0, L.useContext)(s.Ed),
    {
      isVirtualized: h,
      CollectionBranch: g
    } = (0, L.useContext)(o.Qk),
    {
      rowProps: b,
      ...O
    } = (0, C.U)({
      node: n,
      shouldSelectOnPressUp: !!_,
      isVirtualized: h
    }, f, d),
    {
      isFocused: S,
      isFocusVisible: T,
      focusProps: N
    } = (0, E.F)(),
    {
      isFocusVisible: R,
      focusProps: D
    } = (0, E.F)({
      within: true
    }),
    {
      hoverProps: x,
      isHovered: j
    } = (0, v.X)({
      isDisabled: !O.allowsSelection && !O.hasAction,
      onHoverStart: e.onHoverStart,
      onHoverChange: e.onHoverChange,
      onHoverEnd: e.onHoverEnd
    }),
    {
      checkboxProps: M
    } = (0, I.M)({
      key: n.key
    }, f);
  _ && p && (c = p.useDraggableItem({
    key: n.key,
    hasDragButton: true
  }, _));
  let k = (0, L.useRef)(null),
    {
      visuallyHiddenProps: G
    } = (0, A.S)();
  m && p && (u = p.useDropIndicator({
    target: {
      type: "item",
      key: n.key,
      dropPosition: "on"
    }
  }, m, k));
  let Z = (0, L.useRef)(null);
  (0, L.useEffect)(() => {
    _ && Z.current
  }, []);
  let F = _ && _.isDragging(n.key),
    {
      children: V,
      ...H
    } = e,
    Y = (0, a.aX)({
      ...H,
      id: true,
      defaultClassName: "react-aria-Row",
      values: {
        ...O,
        isHovered: j,
        isFocused: S,
        isFocusVisible: T,
        selectionMode: f.selectionManager.selectionMode,
        selectionBehavior: f.selectionManager.selectionBehavior,
        isDragging: F,
        isDropTarget: null == u ? true : u.isDropTarget,
        isFocusVisibleWithin: R,
        id: n.key
      }
    }),
    W = B("tr"),
    K = B("td"),
    z = (0, w.z)(e, {
      global: true
    });
  return delete z.id, delete z.onClick, L.createElement(L.Fragment, null, u && !u.isHidden && L.createElement(W, {
    role: "row",
    style: {
      height: 0
    }
  }, L.createElement(K, {
    role: "gridcell",
    colSpan: f.collection.columnCount,
    style: {
      padding: 0
    }
  }, L.createElement("div", {
    role: "button",
    ...G,
    ...u.dropIndicatorProps,
    ref: k
  }))), L.createElement(W, {
    ...(0, y.d)(z, Y, b, N, x, null == c ? true : c.dragProps, D),
    ref: d,
    "data-disabled": O.isDisabled || true,
    "data-selected": O.isSelected || true,
    "data-hovered": j || true,
    "data-focused": O.isFocused || true,
    "data-focus-visible": T || true,
    "data-pressed": O.isPressed || true,
    "data-dragging": F || true,
    "data-drop-target": (null == u ? true : u.isDropTarget) || true,
    "data-selection-mode": "none" === f.selectionManager.selectionMode ? true : f.selectionManager.selectionMode,
    "data-focus-visible-within": R || true
  }, L.createElement(a.zt, {
    values: [
      [i.cP, {
        slots: {
          [a.hO]: {},
          selection: M
        }
      }],
      [r.b, {
        slots: {
          [a.hO]: {},
          drag: {
            ...null == c ? true : c.dragButtonProps,
            ref: Z,
            style: {
              pointerEvents: "none"
            }
          }
        }
      }],
      [l.p, {
        isSelected: O.isSelected
      }]
    ]
  }, L.createElement(g, {
    collection: f.collection,
    parent: n
  }))))
}, e => {
  if (null == e.id && "function" == typeof e.children) throw Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
  let t = [e.value].concat(e.dependencies);
  return L.createElement(d.FE, {
    dependencies: t,
    items: e.columns,
    idScope: e.id
  }, e.children)
});
class ee extends Chunk557635.S3 {}
ee.type = "cell";
let et = (0, Chunk406581.G5)(ee, (e, t, n) => {
  let r = (0, P.B)(t),
    i = (0, L.useContext)(U),
    {
      dragState: l
    } = (0, L.useContext)(s.Ed),
    {
      isVirtualized: c
    } = (0, L.useContext)(o.Qk);
  n.column = i.collection.columns[n.index];
  let {
    gridCellProps: u,
    isPressed: d
  } = (0, N.f)({
    node: n,
    shouldSelectOnPressUp: !!l,
    isVirtualized: c
  }, i, r), {
    isFocused: f,
    isFocusVisible: p,
    focusProps: _
  } = (0, E.F)(), {
    hoverProps: m,
    isHovered: h
  } = (0, v.X)({}), g = (0, a.aX)({
    ...e,
    id: true,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: f,
      isFocusVisible: p,
      isPressed: d,
      isHovered: h,
      id: n.key
    }
  }), b = B("td"), O = (0, w.z)(e, {
    global: true
  });
  return delete O.id, L.createElement(b, {
    ...(0, y.d)(O, g, u, _, m),
    ref: r,
    "data-focused": f || true,
    "data-focus-visible": p || true,
    "data-pressed": d || true
  }, L.createElement(o.Qk.Provider, {
    value: o.Uu
  }, g.children))
});

function en(e, t) {
  t = (0, P.B)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, L.useContext)(s.Ed), i = (0, L.useRef)(null), {
    dropIndicatorProps: o,
    isHidden: a,
    isDropTarget: l
  } = n.useDropIndicator(e, r, i);
  return a ? null : L.createElement(ei, {
    ...e,
    dropIndicatorProps: o,
    isDropTarget: l,
    buttonRef: i,
    ref: t
  })
}

function er(e, t) {
  let {
    dropIndicatorProps: n,
    isDropTarget: r,
    buttonRef: i,
    ...o
  } = e, s = (0, L.useContext)(U), {
    visuallyHiddenProps: l
  } = (0, A.S)(), c = (0, a.aX)({
    ...o,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  }), u = B("tr"), d = B("td");
  return L.createElement(u, {
    ...(0, w.z)(e, {
      global: true
    }),
    ...c,
    role: "row",
    ref: t,
    "data-drop-target": r || true
  }, L.createElement(d, {
    role: "gridcell",
    colSpan: s.collection.columnCount,
    style: {
      padding: 0
    }
  }, L.createElement("div", {
    ...l,
    role: "button",
    ...n,
    ref: i
  }), c.children))
}
let ei = (0, Chunk473749.forwardRef)(er);

function eo() {
  let e = (0, Chunk473749.useContext)(U),
    {
      dragAndDropHooks: t,
      dropState: n
    } = (0, Chunk473749.useContext)(Chunk941084.Ed),
    r = (0, Chunk473749.useRef)(null),
    {
      dropIndicatorProps: i
    } = exports.useDropIndicator({
      target: {
        type: "root"
      }
    }, require, Chunk23893),
    o = require.isDropTarget({
      type: "root"
    }),
    {
      visuallyHiddenProps: a
    } = (0, Chunk485853.S)(),
    l = B("tr"),
    c = B("td");
  return !Chunk110294 && Chunk900090["aria-hidden"] ? null : Chunk473749.createElement(Chunk913074, {
    role: "row",
    "aria-hidden": Chunk900090["aria-hidden"],
    style: {
      height: 0
    }
  }, Chunk473749.createElement(Chunk156748, {
    role: "gridcell",
    colSpan: module.collection.columnCount,
    style: {
      padding: 0
    }
  }, Chunk473749.createElement("div", {
    role: "button",
    ...Chunk595707,
    ...Chunk900090,
    ref: Chunk23893
  })))
}(0, Chunk406581.G5)(Chunk557635.Rb, function(e, t, n) {
  let r = (0, L.useContext)(U),
    {
      isVirtualized: i
    } = (0, L.useContext)(o.Qk),
    {
      isLoading: s,
      onLoadMore: l,
      scrollOffset: c,
      ...u
    } = e,
    d = r.collection.columns.length,
    f = (0, L.useRef)(null),
    p = (0, L.useMemo)(() => ({
      onLoadMore: l,
      collection: null == r ? true : r.collection,
      sentinelRef: f,
      scrollOffset: c
    }), [l, c, null == r ? true : r.collection]);
  (0, D.B)(p, f);
  let _ = (0, a.aX)({
      ...u,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-TableLoadingIndicator",
      values: null
    }),
    m = B("tr"),
    h = B("td"),
    g = {},
    E = {},
    b = {};
  return i ? (E["aria-colspan"] = d, b = {
    display: "contents"
  }) : E.colSpan = d, L.createElement(L.Fragment, null, L.createElement(m, {
    style: {
      height: 0
    },
    inert: (0, x.P)(true)
  }, L.createElement(h, {
    style: {
      padding: 0,
      border: 0
    }
  }, L.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: f,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), s && _.children && L.createElement(m, {
    ...(0, y.d)((0, w.z)(e, {
      global: true
    }), g),
    ..._,
    role: "row",
    ref: t
  }, L.createElement(h, {
    role: "rowheader",
    ...E,
    style: b
  }, _.children)))
})