/** Chunk was on web.js **/
/** chunk id: 439626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A0: () => W,
  BF: () => X,
  VP: () => q,
  XI: () => F,
  fI: () => $,
  fh: () => et
});
var Chunk650682 = require("./650682.js"),
  Chunk257537 = require("./257537.js"),
  Chunk241634 = require("./241634.js"),
  Chunk825913 = require("./825913.js"),
  Chunk20280 = require("./20280.js"),
  Chunk123375 = require("./123375.js"),
  Chunk357710 = require("./357710.js"),
  Chunk178375 = require("./178375.js"),
  Chunk59845 = require("./59845.js"),
  Chunk183590 = require("./183590.js"),
  Chunk136193 = require("./136193.js"),
  Chunk36310 = require("./36310.js"),
  Chunk634107 = require("./634107.js"),
  Chunk872219 = require("./872219.js"),
  Chunk138026 = require("./138026.js"),
  Chunk498430 = require("./498430.js"),
  Chunk13163 = require("./13163.js"),
  Chunk803082 = require("./803082.js"),
  Chunk173547 = require("./173547.js"),
  Chunk967158 = require("./967158.js"),
  Chunk134584 = require("./134584.js"),
  Chunk625736 = require("./625736.js"),
  Chunk481638 = require("./481638.js"),
  Chunk298377 = require("./298377.js"),
  Chunk126031 = require("./126031.js"),
  Chunk982439 = require("./982439.js"),
  Chunk533715 = require("./533715.js"),
  Chunk561514 = require("./561514.js"),
  Chunk290424 = require("./290424.js"),
  Chunk6494 = require("./6494.js"),
  Chunk216055 = require("./216055.js"),
  Chunk64700 = require("./64700.js");
require("./340287.js");
class M extends Chunk178375.Wk {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
  }
  commit(e, t, n = false) {
    for (let e of (this.updateColumns(n), this.rows = [], this.getChildren(this.body.key))) {
      let t = e.lastChildKey;
      if (null != t) {
        var r, i;
        let e = this.getItem(t),
          a = (null != (r = e.colIndex) ? r : e.index) + (null != (i = e.colSpan) ? i : 1);
        if (a !== this.columns.length && !n) throw Error(`Cell count must match column count. Found ${a} cells and ${this.columns.length} columns.`)
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
    if (this.headerRows = (0, p.n)(t, this.columns), this.columnsDirty = false, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
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
    return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e
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
    super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set, this.head = new Y(false), this.body = new Q(false), this.columnsDirty = true
  }
}
let j = (0, Chunk64700.createContext)(null),
  k = (0, Chunk64700.createContext)(null),
  U = (0, Chunk64700.createContext)(null),
  G = (0, Chunk64700.createContext)(null),
  F = (0, Chunk64700.forwardRef)(function(e, t) {
    var n;
    [e, t] = (0, o.JT)(e, t, k);
    let r = (0, _.R)(e),
      {
        selectionBehavior: i,
        selectionMode: a,
        disallowEmptySelection: s
      } = r,
      l = !!(null == (n = e.dragAndDropHooks) ? true : n.useDraggableCollectionState),
      c = (0, x.useMemo)(() => ({
        selectionBehavior: "none" === a ? null : i,
        selectionMode: a,
        disallowEmptySelection: s,
        allowsDragging: l
      }), [i, a, s, l]),
      u = x.createElement(H.Provider, {
        value: c
      }, x.createElement(d.pM, e));
    return x.createElement(d.GQ, {
      content: u,
      createCollection: () => new M
    }, n => x.createElement(V, {
      props: e,
      forwardedRef: t,
      selectionState: r,
      collection: n
    }))
  });

function V({
  props: e,
  forwardedRef: t,
  selectionState: n,
  collection: r
}) {
  var l;
  let u, d, f;
  [e, t] = (0, o.JT)(e, t, i.Co);
  let {
    shouldUseVirtualFocus: p,
    disallowTypeAhead: _,
    filter: O,
    ...v
  } = e, A = (0, x.useContext)(j);
  t = (0, w.U)((0, x.useMemo)(() => (0, R.P)(t, null == A ? true : A.tableRef), [t, null == A ? true : A.tableRef]));
  let I = (0, h.j)({
      ...v,
      collection: r,
      children: true,
      UNSAFE_selectionState: n
    }),
    S = (0, h.B)(I, O),
    {
      isVirtualized: T,
      layoutDelegate: C,
      dropTargetDelegate: N,
      CollectionRoot: D
    } = (0, x.useContext)(a.zL),
    {
      dragAndDropHooks: L
    } = e,
    {
      gridProps: M
    } = (0, m.K)({
      ...v,
      layoutDelegate: C,
      isVirtualized: T
    }, S, t),
    k = S.selectionManager,
    F = !!(null == L ? true : L.useDraggableCollectionState),
    V = !!(null == L ? true : L.useDroppableCollectionState);
  (0, x.useRef)(F), (0, x.useRef)(V), (0, x.useEffect)(() => {}, [F, V]);
  let H = false,
    Y = null,
    W = (0, x.useRef)(null);
  if (F && L) {
    u = L.useDraggableCollectionState({
      collection: S.collection,
      selectionManager: k,
      preview: L.renderDragPreview ? W : true
    }), L.useDraggableCollection({}, u, t);
    let e = L.DragPreview;
    Y = L.renderDragPreview ? x.createElement(e, {
      ref: W
    }, L.renderDragPreview) : null
  }
  if (V && L) {
    d = L.useDroppableCollectionState({
      collection: S.collection,
      selectionManager: k
    });
    let e = new(0, g.n)({
        collection: S.collection,
        disabledKeys: k.disabledKeys,
        disabledBehavior: k.disabledBehavior,
        ref: t,
        layoutDelegate: C
      }),
      n = L.dropTargetDelegate || N || new L.ListDropTargetDelegate(r.rows, t);
    f = L.useDroppableCollection({
      keyboardDelegate: e,
      dropTargetDelegate: n
    }, d, t), H = d.isDropTarget({
      type: "root"
    })
  }
  let {
    focusProps: K,
    isFocused: z,
    isFocusVisible: q
  } = (0, E.o)(), Z = (0, o.Sl)({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: H,
      isFocused: z,
      isFocusVisible: q,
      state: S
    }
  }), Q = !!(F && !(null == u ? true : u.isDisabled)), X = Z.style, J = null;
  A && (J = A.useTableColumnResizeState({
    tableWidth: A.tableWidth
  }, S), T || (X = {
    ...X,
    tableLayout: "fixed",
    width: "fit-content"
  }));
  let $ = B("table"),
    ee = (0, P.$)(e, {
      global: true
    });
  return x.createElement(o.Kq, {
    values: [
      [U, S],
      [G, J],
      [s.Ux, {
        dragAndDropHooks: L,
        dragState: u,
        dropState: d
      }],
      [s.U5, {
        render: en
      }],
      [i.Co, null],
      [i.wv, null]
    ]
  }, x.createElement(y.n1, null, x.createElement($, {
    ...(0, b.v)(ee, Z, M, K, null == f ? true : f.collectionProps),
    style: X,
    ref: t,
    slot: e.slot || true,
    onScroll: e.onScroll,
    "data-allows-dragging": Q || true,
    "data-drop-target": H || true,
    "data-focused": z || true,
    "data-focus-visible": q || true
  }, x.createElement(c.D, null, x.createElement(D, {
    collection: S.collection,
    scrollRef: null != (l = null == A ? true : A.scrollRef) ? l : t,
    persistedKeys: (0, s.XW)(k, L, d)
  })))), Y)
}

function B(e) {
  let {
    isVirtualized: t
  } = (0, x.useContext)(a.zL);
  return t ? "div" : e
}
let H = (0, Chunk64700.createContext)(null);
class Y extends Chunk178375.Pt {}
Y.type = "tableheader";
let W = (0, Chunk59845.yq)(Y, (e, t) => {
  let n = (0, x.useContext)(U).collection,
    r = (0, f.p)({
      items: n.headerRows,
      children: (0, x.useCallback)(e => {
        if ("headerrow" === e.type) return x.createElement(K, {
          item: e
        });
        throw Error("Unsupported node type in TableHeader: " + e.type)
      }, [])
    }),
    i = B("thead"),
    {
      rowGroupProps: a
    } = (0, O.rs)(),
    {
      hoverProps: s,
      isHovered: l
    } = (0, v.M)({
      onHoverStart: e.onHoverStart,
      onHoverChange: e.onHoverChange,
      onHoverEnd: e.onHoverEnd
    }),
    c = (0, o.Sl)({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-TableHeader",
      values: {
        isHovered: l
      }
    });
  return x.createElement(i, {
    ...(0, b.v)((0, P.$)(e, {
      global: true
    }), a, s),
    ...c,
    ref: t,
    "data-hovered": l || true
  }, r)
}, e => x.createElement(d.pM, {
  dependencies: e.dependencies,
  items: e.columns
}, e.children));

function K({
  item: e
}) {
  let t = (0, x.useRef)(null),
    n = (0, x.useContext)(U),
    {
      isVirtualized: r,
      CollectionBranch: s
    } = (0, x.useContext)(a.zL),
    {
      rowProps: l
    } = (0, A.x)({
      node: e,
      isVirtualized: r
    }, n, t),
    {
      checkboxProps: c
    } = (0, I.q)(n),
    u = B("tr");
  return x.createElement(u, {
    ...l,
    ref: t
  }, x.createElement(o.Kq, {
    values: [
      [i.BP, {
        slots: {
          selection: c
        }
      }]
    ]
  }, x.createElement(s, {
    collection: n.collection,
    parent: e
  })))
}
class z extends Chunk178375.Pt {}
z.type = "column";
let q = (0, Chunk59845.KU)(z, (e, t, n) => {
    var r, i;
    let s = (0, w.U)(t),
      l = (0, x.useContext)(U),
      {
        isVirtualized: c
      } = (0, x.useContext)(a.zL),
      {
        columnHeaderProps: u
      } = (0, S.f)({
        node: n,
        isVirtualized: c
      }, l, s),
      {
        isFocused: d,
        isFocusVisible: f,
        focusProps: p
      } = (0, E.o)(),
      _ = (0, x.useContext)(G),
      h = false;
    _ && (h = _.resizingColumn === n.key);
    let {
      hoverProps: m,
      isHovered: g
    } = (0, v.M)({
      isDisabled: !e.allowsSorting
    }), y = (0, o.Sl)({
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
        isResizing: h,
        startResize: () => {
          if (_) _.startResize(n.key), l.setKeyboardNavigationDisabled(true);
          else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing")
        },
        sort: e => {
          l.sort(n.key, e)
        }
      }
    }), O = y.style;
    _ && (O = {
      ...O,
      width: _.getColumnWidth(n.key)
    });
    let A = B("th"),
      I = (0, P.$)(e, {
        global: true
      });
    return delete I.id, x.createElement(A, {
      ...(0, b.v)(I, u, p, m),
      ...y,
      style: O,
      ref: s,
      "data-hovered": g || true,
      "data-focused": d || true,
      "data-focus-visible": f || true,
      "data-resizing": h || true,
      "data-allows-sorting": n.props.allowsSorting || true,
      "data-sort-direction": (null == (i = l.sortDescriptor) ? true : i.column) === n.key ? l.sortDescriptor.direction : true
    }, x.createElement(o.Kq, {
      values: [
        [Z, {
          column: n,
          triggerRef: s
        }],
        [a.zL, a.N]
      ]
    }, y.children))
  }),
  Z = (0, Chunk64700.createContext)(null);
class Q extends Chunk178375.ru {}
Q.type = "tablebody";
let X = (0, Chunk59845.yq)(Q, (e, t) => {
  var n;
  let r, i = (0, x.useContext)(U),
    {
      isVirtualized: l
    } = (0, x.useContext)(a.zL),
    c = i.collection,
    {
      CollectionBranch: u
    } = (0, x.useContext)(a.zL),
    {
      dragAndDropHooks: d,
      dropState: f
    } = (0, x.useContext)(s.Ux),
    p = !!(null == d ? true : d.useDroppableCollectionState) && !(null == f ? true : f.isDisabled),
    _ = p && !!f && null != (n = f.isDropTarget({
      type: "root"
    })) && n,
    h = 0 === c.size,
    m = {
      isDropTarget: _,
      isEmpty: h
    },
    g = (0, o.Sl)({
      ...e,
      id: true,
      children: true,
      defaultClassName: "react-aria-TableBody",
      values: m
    }),
    E = B("tr"),
    y = B("td"),
    v = c.columnCount;
  if (h && e.renderEmptyState && i) {
    let t = {},
      n = {},
      i = {};
    l ? (n["aria-colspan"] = v, i = {
      display: "contents"
    }) : n.colSpan = v, r = x.createElement(E, {
      role: "row",
      ...t,
      style: i
    }, x.createElement(y, {
      role: "rowheader",
      ...n,
      style: i
    }, e.renderEmptyState(m)))
  }
  let {
    rowGroupProps: A
  } = (0, O.rs)(), I = B("tbody"), S = (0, P.$)(e, {
    global: true
  });
  return x.createElement(I, {
    ...(0, b.v)(S, g, A),
    ref: t,
    "data-empty": h || true
  }, p && x.createElement(ea, null), x.createElement(u, {
    collection: c,
    parent: c.body,
    renderDropIndicator: (0, s.oC)(d, f)
  }), r)
});
class J extends Chunk178375.Pt {
  filter(e, t, n) {
    for (let r of e.getChildren(this.key))
      if (n(r.textValue, r)) {
        let n = this.clone();
        return t.addDescendants(n, e), n
      } return null
  }
}
J.type = "item";
let $ = (0, Chunk59845.yq)(J, (e, t, n) => {
  let c, u, d = (0, w.U)(t),
    f = (0, x.useContext)(U),
    {
      dragAndDropHooks: p,
      dragState: _,
      dropState: h
    } = (0, x.useContext)(s.Ux),
    {
      isVirtualized: m,
      CollectionBranch: g
    } = (0, x.useContext)(a.zL),
    {
      rowProps: y,
      ...O
    } = (0, T.A)({
      node: n,
      shouldSelectOnPressUp: !!_,
      isVirtualized: m
    }, f, d),
    {
      isFocused: A,
      isFocusVisible: S,
      focusProps: N
    } = (0, E.o)(),
    {
      isFocusVisible: R,
      focusProps: D
    } = (0, E.o)({
      within: true
    }),
    {
      hoverProps: L,
      isHovered: M
    } = (0, v.M)({
      isDisabled: !O.allowsSelection && !O.hasAction,
      onHoverStart: e.onHoverStart,
      onHoverChange: e.onHoverChange,
      onHoverEnd: e.onHoverEnd
    }),
    {
      checkboxProps: j
    } = (0, I.B)({
      key: n.key
    }, f);
  _ && p && (c = p.useDraggableItem({
    key: n.key,
    hasDragButton: true
  }, _));
  let k = (0, x.useRef)(null),
    {
      visuallyHiddenProps: G
    } = (0, C.B)();
  h && p && (u = p.useDropIndicator({
    target: {
      type: "item",
      key: n.key,
      dropPosition: "on"
    }
  }, h, k));
  let F = (0, x.useRef)(null);
  (0, x.useEffect)(() => {
    _ && F.current
  }, []);
  let V = _ && _.isDragging(n.key),
    {
      children: H,
      ...Y
    } = e,
    W = (0, o.Sl)({
      ...Y,
      id: true,
      defaultClassName: "react-aria-Row",
      values: {
        ...O,
        isHovered: M,
        isFocused: A,
        isFocusVisible: S,
        selectionMode: f.selectionManager.selectionMode,
        selectionBehavior: f.selectionManager.selectionBehavior,
        isDragging: V,
        isDropTarget: null == u ? true : u.isDropTarget,
        isFocusVisibleWithin: R,
        id: n.key
      }
    }),
    K = B("tr"),
    z = B("td"),
    q = (0, P.$)(e, {
      global: true
    });
  return delete q.id, delete q.onClick, x.createElement(x.Fragment, null, u && !u.isHidden && x.createElement(K, {
    role: "row",
    style: {
      height: 0
    }
  }, x.createElement(z, {
    role: "gridcell",
    colSpan: f.collection.columnCount,
    style: {
      padding: 0
    }
  }, x.createElement("div", {
    role: "button",
    ...G,
    ...u.dropIndicatorProps,
    ref: k
  }))), x.createElement(K, {
    ...(0, b.v)(q, W, y, N, L, null == c ? true : c.dragProps, D),
    ref: d,
    "data-disabled": O.isDisabled || true,
    "data-selected": O.isSelected || true,
    "data-hovered": M || true,
    "data-focused": O.isFocused || true,
    "data-focus-visible": S || true,
    "data-pressed": O.isPressed || true,
    "data-dragging": V || true,
    "data-drop-target": (null == u ? true : u.isDropTarget) || true,
    "data-selection-mode": "none" === f.selectionManager.selectionMode ? true : f.selectionManager.selectionMode,
    "data-focus-visible-within": R || true
  }, x.createElement(o.Kq, {
    values: [
      [i.BP, {
        slots: {
          [o.P_]: {},
          selection: j
        }
      }],
      [r.k, {
        slots: {
          [o.P_]: {},
          drag: {
            ...null == c ? true : c.dragButtonProps,
            ref: F,
            style: {
              pointerEvents: "none"
            }
          }
        }
      }],
      [l.r, {
        isSelected: O.isSelected
      }]
    ]
  }, x.createElement(g, {
    collection: f.collection,
    parent: n
  }))))
}, e => {
  if (null == e.id && "function" == typeof e.children) throw Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
  let t = [e.value].concat(e.dependencies);
  return x.createElement(d.pM, {
    dependencies: t,
    items: e.columns,
    idScope: e.id
  }, e.children)
});
class ee extends Chunk178375.Pt {}
ee.type = "cell";
let et = (0, Chunk59845.KU)(ee, (e, t, n) => {
  let r = (0, w.U)(t),
    i = (0, x.useContext)(U),
    {
      dragState: l
    } = (0, x.useContext)(s.Ux),
    {
      isVirtualized: c
    } = (0, x.useContext)(a.zL);
  n.column = i.collection.columns[n.index];
  let {
    gridCellProps: u,
    isPressed: d
  } = (0, N.a)({
    node: n,
    shouldSelectOnPressUp: !!l,
    isVirtualized: c
  }, i, r), {
    isFocused: f,
    isFocusVisible: p,
    focusProps: _
  } = (0, E.o)(), {
    hoverProps: h,
    isHovered: m
  } = (0, v.M)({}), g = (0, o.Sl)({
    ...e,
    id: true,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: f,
      isFocusVisible: p,
      isPressed: d,
      isHovered: m,
      id: n.key
    }
  }), y = B("td"), O = (0, P.$)(e, {
    global: true
  });
  return delete O.id, x.createElement(y, {
    ...(0, b.v)(O, g, u, _, h),
    ref: r,
    "data-focused": f || true,
    "data-focus-visible": p || true,
    "data-pressed": d || true
  }, x.createElement(a.zL.Provider, {
    value: a.N
  }, g.children))
});

function en(e, t) {
  t = (0, w.U)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, x.useContext)(s.Ux), i = (0, x.useRef)(null), {
    dropIndicatorProps: a,
    isHidden: o,
    isDropTarget: l
  } = n.useDropIndicator(e, r, i);
  return o ? null : x.createElement(ei, {
    ...e,
    dropIndicatorProps: a,
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
    ...a
  } = e, s = (0, x.useContext)(U), {
    visuallyHiddenProps: l
  } = (0, C.B)(), c = (0, o.Sl)({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  }), u = B("tr"), d = B("td");
  return x.createElement(u, {
    ...(0, P.$)(e, {
      global: true
    }),
    ...c,
    role: "row",
    ref: t,
    "data-drop-target": r || true
  }, x.createElement(d, {
    role: "gridcell",
    colSpan: s.collection.columnCount,
    style: {
      padding: 0
    }
  }, x.createElement("div", {
    ...l,
    role: "button",
    ...n,
    ref: i
  }), c.children))
}
let ei = (0, Chunk64700.forwardRef)(er);

function ea() {
  let e = (0, x.useContext)(U),
    {
      dragAndDropHooks: t,
      dropState: n
    } = (0, x.useContext)(s.Ux),
    r = (0, x.useRef)(null),
    {
      dropIndicatorProps: i
    } = t.useDropIndicator({
      target: {
        type: "root"
      }
    }, n, r),
    a = n.isDropTarget({
      type: "root"
    }),
    {
      visuallyHiddenProps: o
    } = (0, C.B)(),
    l = B("tr"),
    c = B("td");
  return !a && i["aria-hidden"] ? null : x.createElement(l, {
    role: "row",
    "aria-hidden": i["aria-hidden"],
    style: {
      height: 0
    }
  }, x.createElement(c, {
    role: "gridcell",
    colSpan: e.collection.columnCount,
    style: {
      padding: 0
    }
  }, x.createElement("div", {
    role: "button",
    ...o,
    ...i,
    ref: r
  })))
}(0, Chunk59845.KU)(Chunk178375.OJ, function(e, t, n) {
  let r = (0, x.useContext)(U),
    {
      isVirtualized: i
    } = (0, x.useContext)(a.zL),
    {
      isLoading: s,
      onLoadMore: l,
      scrollOffset: c,
      ...u
    } = e,
    d = r.collection.columns.length,
    f = (0, x.useRef)(null),
    p = (0, x.useMemo)(() => ({
      onLoadMore: l,
      collection: null == r ? true : r.collection,
      sentinelRef: f,
      scrollOffset: c
    }), [l, c, null == r ? true : r.collection]);
  (0, D.n)(p, f);
  let _ = (0, o.Sl)({
      ...u,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-TableLoadingIndicator",
      values: null
    }),
    h = B("tr"),
    m = B("td"),
    g = {},
    E = {},
    y = {};
  return i ? (E["aria-colspan"] = d, y = {
    display: "contents"
  }) : E.colSpan = d, x.createElement(x.Fragment, null, x.createElement(h, {
    style: {
      height: 0
    },
    inert: (0, L.Y)(true)
  }, x.createElement(m, {
    style: {
      padding: 0,
      border: 0
    }
  }, x.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: f,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), s && _.children && x.createElement(h, {
    ...(0, b.v)((0, P.$)(e, {
      global: true
    }), g),
    ..._,
    role: "row",
    ref: t
  }, x.createElement(m, {
    role: "rowheader",
    ...E,
    style: y
  }, _.children)))
})