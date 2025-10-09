/** Chunk was on web.js **/
/** chunk id: 973801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RM: () => W,
  X2: () => K,
  bL: () => z,
  iA: () => U,
  sg: () => H,
  xD: () => F
});
var Chunk267603 = require("./267603.js"),
  Chunk532033 = require("./532033.js"),
  Chunk134387 = require("./134387.js"),
  Chunk477831 = require("./477831.js"),
  Chunk173813 = require("./173813.js"),
  Chunk665012 = require("./665012.js"),
  Chunk873954 = require("./873954.js"),
  Chunk451035 = require("./451035.js"),
  Chunk955047 = require("./955047.js"),
  Chunk952976 = require("./952976.js"),
  Chunk637445 = require("./637445.js"),
  Chunk831039 = require("./831039.js"),
  Chunk897846 = require("./897846.js"),
  Chunk769175 = require("./769175.js"),
  Chunk306024 = require("./306024.js"),
  Chunk586235 = require("./586235.js"),
  Chunk235537 = require("./235537.js"),
  Chunk1334 = require("./1334.js"),
  Chunk121766 = require("./121766.js"),
  Chunk725990 = require("./725990.js"),
  Chunk130553 = require("./130553.js"),
  Chunk159972 = require("./159972.js"),
  Chunk500282 = require("./500282.js"),
  Chunk497327 = require("./497327.js"),
  Chunk158573 = require("./158573.js"),
  Chunk981902 = require("./981902.js"),
  Chunk436773 = require("./436773.js"),
  Chunk217060 = require("./217060.js"),
  Chunk328289 = require("./328289.js"),
  Chunk647438 = require("./647438.js");
require("./603113.js");
class L extends Chunk665012.M {
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
    if (this.headerRows = (0, d.G)(t, this.columns), this.columnsDirty = false, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
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
    super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set, this.head = new(0, l.S)("tableheader", false), this.body = new(0, l.S)("tablebody", false), this.columnsDirty = true
  }
}
let x = (0, Chunk647438.createContext)(null),
  M = (0, Chunk647438.createContext)(null),
  k = (0, Chunk647438.createContext)(null),
  j = (0, Chunk647438.createContext)(null),
  U = (0, Chunk647438.forwardRef)(function(e, t) {
    var n;
    [e, t] = (0, o.pE)(e, t, M);
    let r = (0, f.q)(e),
      {
        selectionBehavior: i,
        selectionMode: a,
        disallowEmptySelection: s
      } = r,
      l = !!(null == (n = e.dragAndDropHooks) ? true : n.useDraggableCollectionState),
      u = (0, D.useMemo)(() => ({
        selectionBehavior: "none" === a ? null : i,
        selectionMode: a,
        disallowEmptySelection: s,
        allowsDragging: l
      }), [i, a, s, l]),
      d = D.createElement(Z.Provider, {
        value: u
      }, D.createElement(c.FE, e));
    return D.createElement(c.yF, {
      content: d,
      createCollection: () => new L
    }, n => D.createElement(G, {
      props: e,
      forwardedRef: t,
      selectionState: r,
      collection: n
    }))
  });

function G({
  props: e,
  forwardedRef: t,
  selectionState: n,
  collection: r
}) {
  var i;
  let l, c, u, d = (0, D.useContext)(x);
  t = (0, C.B)((0, D.useMemo)(() => (0, N.l)(t, null == d ? true : d.tableRef), [t, null == d ? true : d.tableRef]));
  let f = (0, _.o)({
      ...e,
      collection: r,
      children: true,
      UNSAFE_selectionState: n
    }),
    {
      isVirtualized: b,
      layoutDelegate: y,
      dropTargetDelegate: O,
      CollectionRoot: v
    } = (0, D.useContext)(a.Qk),
    {
      dragAndDropHooks: I
    } = e,
    {
      gridProps: T
    } = (0, p.x)({
      ...e,
      layoutDelegate: y,
      isVirtualized: b
    }, f, t),
    S = f.selectionManager,
    A = !!(null == I ? true : I.useDraggableCollectionState),
    P = !!(null == I ? true : I.useDroppableCollectionState);
  (0, D.useRef)(A), (0, D.useRef)(P), (0, D.useEffect)(() => {}, [A, P]);
  let w = false,
    L = null,
    M = (0, D.useRef)(null);
  if (A && I) {
    l = I.useDraggableCollectionState({
      collection: r,
      selectionManager: S,
      preview: I.renderDragPreview ? M : true
    }), I.useDraggableCollection({}, l, t);
    let e = I.DragPreview;
    L = I.renderDragPreview ? D.createElement(e, {
      ref: M
    }, I.renderDragPreview) : null
  }
  if (P && I) {
    c = I.useDroppableCollectionState({
      collection: r,
      selectionManager: S
    });
    let e = new(0, h.d)({
        collection: r,
        disabledKeys: S.disabledKeys,
        disabledBehavior: S.disabledBehavior,
        ref: t,
        layoutDelegate: y
      }),
      n = I.dropTargetDelegate || O || new I.ListDropTargetDelegate(r.rows, t);
    u = I.useDroppableCollection({
      keyboardDelegate: e,
      dropTargetDelegate: n
    }, c, t), w = c.isDropTarget({
      type: "root"
    })
  }
  let {
    focusProps: U,
    isFocused: G,
    isFocusVisible: Z
  } = (0, m.F)(), F = (0, o.aX)({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: w,
      isFocused: G,
      isFocusVisible: Z,
      state: f
    }
  }), V = !!(A && !(null == l ? true : l.isDisabled)), H = F.style, Y = null;
  d && (Y = d.useTableColumnResizeState({
    tableWidth: d.tableWidth
  }, f), b || (H = {
    ...H,
    tableLayout: "fixed",
    width: "fit-content"
  }));
  let W = B("table"),
    K = (0, R.z)(e, {
      global: true
    });
  return D.createElement(o.zt, {
    values: [
      [k, f],
      [j, Y],
      [s.Ed, {
        dragAndDropHooks: I,
        dragState: l,
        dropState: c
      }],
      [s.SZ, {
        render: q
      }]
    ]
  }, D.createElement(g.MT, null, D.createElement(W, {
    ...(0, E.d)(K, F, T, U, null == u ? true : u.collectionProps),
    style: H,
    ref: t,
    slot: e.slot || true,
    onScroll: e.onScroll,
    "data-allows-dragging": V || true,
    "data-drop-target": w || true,
    "data-focused": G || true,
    "data-focus-visible": Z || true
  }, D.createElement(v, {
    collection: r,
    scrollRef: null != (i = null == d ? true : d.scrollRef) ? i : t,
    persistedKeys: (0, s.y)(S, I, c)
  }))), L)
}

function B(e) {
  let {
    isVirtualized: t
  } = (0, D.useContext)(a.Qk);
  return t ? "div" : e
}
let Z = (0, Chunk647438.createContext)(null),
  F = (0, Chunk873954.IW)("tableheader", (e, t) => {
    let n = (0, D.useContext)(k).collection,
      r = (0, u.H)({
        items: n.headerRows,
        children: (0, D.useCallback)(e => {
          if ("headerrow" === e.type) return D.createElement(V, {
            item: e
          });
          throw Error("Unsupported node type in TableHeader: " + e.type)
        }, [])
      }),
      i = B("thead"),
      {
        rowGroupProps: a
      } = (0, b.LA)(),
      {
        hoverProps: s,
        isHovered: l
      } = (0, y.X)({
        onHoverStart: e.onHoverStart,
        onHoverChange: e.onHoverChange,
        onHoverEnd: e.onHoverEnd
      }),
      c = (0, o.aX)({
        className: e.className,
        style: e.style,
        defaultClassName: "react-aria-TableHeader",
        values: {
          isHovered: l
        }
      });
    return D.createElement(i, {
      ...(0, E.d)((0, R.z)(e, {
        global: true
      }), a, s),
      ...c,
      ref: t,
      "data-hovered": l || true
    }, r)
  }, e => D.createElement(c.FE, {
    dependencies: e.dependencies,
    items: e.columns
  }, e.children));

function V({
  item: e
}) {
  let t = (0, D.useRef)(null),
    n = (0, D.useContext)(k),
    {
      isVirtualized: r,
      CollectionBranch: s
    } = (0, D.useContext)(a.Qk),
    {
      rowProps: l
    } = (0, O.Q)({
      node: e,
      isVirtualized: r
    }, n, t),
    {
      checkboxProps: c
    } = (0, v.j)(n),
    u = B("tr");
  return D.createElement(u, {
    ...l,
    ref: t
  }, D.createElement(o.zt, {
    values: [
      [i.cP, {
        slots: {
          selection: c
        }
      }]
    ]
  }, D.createElement(s, {
    collection: n.collection,
    parent: e
  })))
}
let H = (0, Chunk873954.G5)("column", (e, t, n) => {
    var r, i;
    let s = (0, C.B)(t),
      l = (0, D.useContext)(k),
      {
        isVirtualized: c
      } = (0, D.useContext)(a.Qk),
      {
        columnHeaderProps: u
      } = (0, I.W)({
        node: n,
        isVirtualized: c
      }, l, s),
      {
        isFocused: d,
        isFocusVisible: f,
        focusProps: _
      } = (0, m.F)(),
      p = (0, D.useContext)(j),
      h = false;
    p && (h = p.resizingColumn === n.key);
    let {
      hoverProps: g,
      isHovered: b
    } = (0, y.X)({
      isDisabled: !e.allowsSorting
    }), O = (0, o.aX)({
      ...e,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-Column",
      values: {
        isHovered: b,
        isFocused: d,
        isFocusVisible: f,
        allowsSorting: n.props.allowsSorting,
        sortDirection: (null == (r = l.sortDescriptor) ? true : r.column) === n.key ? l.sortDescriptor.direction : true,
        isResizing: h,
        startResize: () => {
          if (p) p.startResize(n.key), l.setKeyboardNavigationDisabled(true);
          else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing")
        },
        sort: e => {
          l.sort(n.key, e)
        }
      }
    }), v = O.style;
    p && (v = {
      ...v,
      width: p.getColumnWidth(n.key)
    });
    let T = B("th"),
      S = (0, R.z)(e, {
        global: true
      });
    return delete S.id, D.createElement(T, {
      ...(0, E.d)(S, u, _, g),
      ...O,
      style: v,
      ref: s,
      "data-hovered": b || true,
      "data-focused": d || true,
      "data-focus-visible": f || true,
      "data-resizing": h || true,
      "data-allows-sorting": n.props.allowsSorting || true,
      "data-sort-direction": (null == (i = l.sortDescriptor) ? true : i.column) === n.key ? l.sortDescriptor.direction : true
    }, D.createElement(o.zt, {
      values: [
        [Y, {
          column: n,
          triggerRef: s
        }],
        [a.Qk, a.Uu]
      ]
    }, O.children))
  }),
  Y = (0, Chunk647438.createContext)(null),
  W = (0, Chunk873954.IW)("tablebody", (e, t) => {
    var n;
    let r, i = (0, D.useContext)(k),
      {
        isVirtualized: l
      } = (0, D.useContext)(a.Qk),
      c = i.collection,
      {
        CollectionBranch: u
      } = (0, D.useContext)(a.Qk),
      {
        dragAndDropHooks: d,
        dropState: f
      } = (0, D.useContext)(s.Ed),
      _ = !!(null == d ? true : d.useDroppableCollectionState) && !(null == f ? true : f.isDisabled),
      p = _ && !!f && null != (n = f.isDropTarget({
        type: "root"
      })) && n,
      h = 0 === c.size,
      m = {
        isDropTarget: p,
        isEmpty: h
      },
      g = (0, o.aX)({
        ...e,
        id: true,
        children: true,
        defaultClassName: "react-aria-TableBody",
        values: m
      }),
      y = B("tr"),
      O = B("td"),
      v = c.columnCount;
    if (h && e.renderEmptyState && i) {
      let t = {},
        n = {},
        i = {};
      l ? (n["aria-colspan"] = v, i = {
        display: "contents"
      }) : n.colSpan = v, r = D.createElement(y, {
        role: "row",
        ...t,
        style: i
      }, D.createElement(O, {
        role: "rowheader",
        ...n,
        style: i
      }, e.renderEmptyState(m)))
    }
    let {
      rowGroupProps: I
    } = (0, b.LA)(), T = B("tbody"), S = (0, R.z)(e, {
      global: true
    });
    return D.createElement(T, {
      ...(0, E.d)(S, g, I),
      ref: t,
      "data-empty": h || true
    }, _ && D.createElement(J, null), D.createElement(u, {
      collection: c,
      parent: c.body,
      renderDropIndicator: (0, s._$)(d, f)
    }), r)
  }),
  K = (0, Chunk873954.IW)("item", (e, t, n) => {
    let l, c, u = (0, C.B)(t),
      d = (0, D.useContext)(k),
      {
        dragAndDropHooks: f,
        dragState: _,
        dropState: p
      } = (0, D.useContext)(s.Ed),
      {
        isVirtualized: h,
        CollectionBranch: g
      } = (0, D.useContext)(a.Qk),
      {
        rowProps: b,
        ...O
      } = (0, T.U)({
        node: n,
        shouldSelectOnPressUp: !!_,
        isVirtualized: h
      }, d, u),
      {
        isFocused: I,
        isFocusVisible: A,
        focusProps: N
      } = (0, m.F)(),
      {
        isFocusVisible: P,
        focusProps: w
      } = (0, m.F)({
        within: true
      }),
      {
        hoverProps: L,
        isHovered: x
      } = (0, y.X)({
        isDisabled: !O.allowsSelection && !O.hasAction,
        onHoverStart: e.onHoverStart,
        onHoverChange: e.onHoverChange,
        onHoverEnd: e.onHoverEnd
      }),
      {
        checkboxProps: M
      } = (0, v.M)({
        key: n.key
      }, d);
    _ && f && (l = f.useDraggableItem({
      key: n.key,
      hasDragButton: true
    }, _));
    let j = (0, D.useRef)(null),
      {
        visuallyHiddenProps: U
      } = (0, S.S)();
    p && f && (c = f.useDropIndicator({
      target: {
        type: "item",
        key: n.key,
        dropPosition: "on"
      }
    }, p, j));
    let G = (0, D.useRef)(null);
    (0, D.useEffect)(() => {
      _ && G.current
    }, []);
    let Z = _ && _.isDragging(n.key),
      {
        children: F,
        ...V
      } = e,
      H = (0, o.aX)({
        ...V,
        id: true,
        defaultClassName: "react-aria-Row",
        values: {
          ...O,
          isHovered: x,
          isFocused: I,
          isFocusVisible: A,
          selectionMode: d.selectionManager.selectionMode,
          selectionBehavior: d.selectionManager.selectionBehavior,
          isDragging: Z,
          isDropTarget: null == c ? true : c.isDropTarget,
          isFocusVisibleWithin: P,
          id: n.key
        }
      }),
      Y = B("tr"),
      W = B("td"),
      K = (0, R.z)(e, {
        global: true
      });
    return delete K.id, delete K.onClick, D.createElement(D.Fragment, null, c && !c.isHidden && D.createElement(Y, {
      role: "row",
      style: {
        height: 0
      }
    }, D.createElement(W, {
      role: "gridcell",
      colSpan: d.collection.columnCount,
      style: {
        padding: 0
      }
    }, D.createElement("div", {
      role: "button",
      ...U,
      ...c.dropIndicatorProps,
      ref: j
    }))), D.createElement(Y, {
      ...(0, E.d)(K, H, b, N, L, null == l ? true : l.dragProps, w),
      ref: u,
      "data-disabled": O.isDisabled || true,
      "data-selected": O.isSelected || true,
      "data-hovered": x || true,
      "data-focused": O.isFocused || true,
      "data-focus-visible": A || true,
      "data-pressed": O.isPressed || true,
      "data-dragging": Z || true,
      "data-drop-target": (null == c ? true : c.isDropTarget) || true,
      "data-selection-mode": "none" === d.selectionManager.selectionMode ? true : d.selectionManager.selectionMode,
      "data-focus-visible-within": P || true
    }, D.createElement(o.zt, {
      values: [
        [i.cP, {
          slots: {
            [o.hO]: {},
            selection: M
          }
        }],
        [r.b, {
          slots: {
            [o.hO]: {},
            drag: {
              ...null == l ? true : l.dragButtonProps,
              ref: G,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }]
      ]
    }, D.createElement(g, {
      collection: d.collection,
      parent: n
    }))))
  }, e => {
    if (null == e.id && "function" == typeof e.children) throw Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
    let t = [e.value].concat(e.dependencies);
    return D.createElement(c.FE, {
      dependencies: t,
      items: e.columns,
      idScope: e.id
    }, e.children)
  }),
  z = (0, Chunk873954.G5)("cell", (e, t, n) => {
    let r = (0, C.B)(t),
      i = (0, D.useContext)(k),
      {
        dragState: l
      } = (0, D.useContext)(s.Ed),
      {
        isVirtualized: c
      } = (0, D.useContext)(a.Qk);
    n.column = i.collection.columns[n.index];
    let {
      gridCellProps: u,
      isPressed: d
    } = (0, A.f)({
      node: n,
      shouldSelectOnPressUp: !!l,
      isVirtualized: c
    }, i, r), {
      isFocused: f,
      isFocusVisible: _,
      focusProps: p
    } = (0, m.F)(), {
      hoverProps: h,
      isHovered: g
    } = (0, y.X)({}), b = (0, o.aX)({
      ...e,
      id: true,
      defaultClassName: "react-aria-Cell",
      values: {
        isFocused: f,
        isFocusVisible: _,
        isPressed: d,
        isHovered: g,
        id: n.key
      }
    }), O = B("td"), v = (0, R.z)(e, {
      global: true
    });
    return delete v.id, D.createElement(O, {
      ...(0, E.d)(v, b, u, p, h),
      ref: r,
      "data-focused": f || true,
      "data-focus-visible": _ || true,
      "data-pressed": d || true
    }, D.createElement(a.Qk.Provider, {
      value: a.Uu
    }, b.children))
  });

function q(e, t) {
  t = (0, C.B)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, D.useContext)(s.Ed), i = (0, D.useRef)(null), {
    dropIndicatorProps: a,
    isHidden: o,
    isDropTarget: l
  } = n.useDropIndicator(e, r, i);
  return o ? null : D.createElement(Q, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: l,
    buttonRef: i,
    ref: t
  })
}

function X(e, t) {
  let {
    dropIndicatorProps: n,
    isDropTarget: r,
    buttonRef: i,
    ...a
  } = e, s = (0, D.useContext)(k), {
    visuallyHiddenProps: l
  } = (0, S.S)(), c = (0, o.aX)({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  }), u = B("tr"), d = B("td");
  return D.createElement(u, {
    ...(0, R.z)(e, {
      global: true
    }),
    ...c,
    role: "row",
    ref: t,
    "data-drop-target": r || true
  }, D.createElement(d, {
    role: "gridcell",
    colSpan: s.collection.columnCount,
    style: {
      padding: 0
    }
  }, D.createElement("div", {
    ...l,
    role: "button",
    ...n,
    ref: i
  }), c.children))
}
let Q = (0, Chunk647438.forwardRef)(X);

function J() {
  let e = (0, Chunk647438.useContext)(k),
    {
      dragAndDropHooks: t,
      dropState: n
    } = (0, Chunk647438.useContext)(Chunk173813.Ed),
    r = (0, Chunk647438.useRef)(null),
    {
      dropIndicatorProps: i
    } = exports.useDropIndicator({
      target: {
        type: "root"
      }
    }, require, Chunk267603),
    a = require.isDropTarget({
      type: "root"
    }),
    {
      visuallyHiddenProps: o
    } = (0, Chunk500282.S)(),
    l = B("tr"),
    c = B("td");
  return !Chunk134387 && Chunk532033["aria-hidden"] ? null : Chunk647438.createElement(Chunk665012, {
    role: "row",
    "aria-hidden": Chunk532033["aria-hidden"],
    style: {
      height: 0
    }
  }, Chunk647438.createElement(Chunk873954, {
    role: "gridcell",
    colSpan: module.collection.columnCount,
    style: {
      padding: 0
    }
  }, Chunk647438.createElement("div", {
    role: "button",
    ...Chunk477831,
    ...Chunk532033,
    ref: Chunk267603
  })))
}(0, Chunk873954.G5)("loader", function(e, t, n) {
  let r = (0, D.useContext)(k),
    {
      isVirtualized: i
    } = (0, D.useContext)(a.Qk),
    {
      isLoading: s,
      onLoadMore: l,
      scrollOffset: c,
      ...u
    } = e,
    d = r.collection.columns.length,
    f = (0, D.useRef)(null),
    _ = (0, D.useMemo)(() => ({
      onLoadMore: l,
      collection: null == r ? true : r.collection,
      sentinelRef: f,
      scrollOffset: c
    }), [l, c, null == r ? true : r.collection]);
  (0, P.B)(_, f);
  let p = (0, o.aX)({
      ...u,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-TableLoadingIndicator",
      values: null
    }),
    h = B("tr"),
    m = B("td"),
    g = {},
    b = {},
    y = {};
  return i ? (b["aria-colspan"] = d, y = {
    display: "contents"
  }) : b.colSpan = d, D.createElement(D.Fragment, null, D.createElement(h, {
    style: {
      height: 0
    },
    inert: (0, w.P)(true)
  }, D.createElement(m, {
    style: {
      padding: 0,
      border: 0
    }
  }, D.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: f,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), s && p.children && D.createElement(h, {
    ...(0, E.d)((0, R.z)(e, {
      global: true
    }), g),
    ...p,
    role: "row",
    ref: t
  }, D.createElement(m, {
    role: "rowheader",
    ...b,
    style: y
  }, p.children)))
})