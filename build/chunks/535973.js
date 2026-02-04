/** Chunk was on 7685 **/
/** chunk id: 535973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s,
  s: () => a
}), require("./896048.js");
var l, Chunk64700 = require("./64700.js");

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
var s = ((l = {}).BEFORE = "before", l.AFTER = "after", l);

function a(e) {
  let {
    groupIds: t,
    isDisabled: n,
    onCommitNewOrder: l
  } = e, s = r.useRef(t);
  r.useEffect(() => {
    s.current = t
  }, [t]);
  let [a, o] = r.useState({
    draggedGroupId: null,
    dropTargetGroupId: null,
    dropTargetPosition: null,
    didCommitDrop: false
  }), u = r.useRef(a), c = r.useCallback(e => {
    o(t => {
      let n = i({}, t, e);
      return u.current = n, n
    })
  }, []), d = r.useCallback((e, t) => {
    let {
      draggedGroupId: r,
      didCommitDrop: a
    } = u.current;
    if (a || n || null == r) return;
    let d = function(e) {
      let {
        groupIds: t,
        draggedGroupId: n,
        targetGroupId: l,
        position: r
      } = e, i = t.indexOf(n), s = t.indexOf(l);
      if (false === i || false === s || n === l) return null;
      let a = [...t];
      a.splice(i, 1);
      let o = i < s ? s - 1 : s;
      return a.splice("before" === r ? o : o + 1, 0, n), a
    }({
      groupIds: s.current,
      draggedGroupId: r,
      targetGroupId: e,
      position: t
    });
    if (null != d) {
      var h, g;
      h = i({}, u.current), g = g = {
        didCommitDrop: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(g)).forEach(function(e) {
        Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(g, e))
      }), u.current = h, o(u.current), l(d), c({
        draggedGroupId: null,
        dropTargetGroupId: null,
        dropTargetPosition: null
      })
    }
  }, [n, l, c]), h = r.useCallback((e, t) => ({
    draggable: t && !n,
    "data-dnd-drag-handle": "true",
    onDragStart: l => {
      n || t && (l.dataTransfer.setData("text/plain", e), l.dataTransfer.effectAllowed = "move", c({
        draggedGroupId: e,
        dropTargetGroupId: null,
        dropTargetPosition: null,
        didCommitDrop: false
      }))
    },
    onDragOver: t => {
      let {
        draggedGroupId: l
      } = u.current;
      if (n || null == l || l === e) return;
      t.preventDefault(), t.dataTransfer.dropEffect = "move";
      let r = t.currentTarget.getBoundingClientRect();
      c({
        dropTargetGroupId: e,
        dropTargetPosition: t.clientY < r.top + r.height / 2 ? "before" : "after"
      })
    },
    onDrop: t => {
      let {
        draggedGroupId: l
      } = u.current;
      if (n || null == l || l === e) return;
      t.preventDefault();
      let r = t.currentTarget.getBoundingClientRect();
      d(e, t.clientY < r.top + r.height / 2 ? "before" : "after")
    },
    onDragEnd: () => {
      let {
        didCommitDrop: e,
        dropTargetGroupId: t,
        dropTargetPosition: n
      } = u.current;
      e || null == t || null == n || d(t, n), c({
        draggedGroupId: null,
        dropTargetGroupId: null,
        dropTargetPosition: null,
        didCommitDrop: false
      })
    }
  }), [d, n, c]);
  return {
    draggedGroupId: a.draggedGroupId,
    dropTargetGroupId: a.dropTargetGroupId,
    dropTargetPosition: a.dropTargetPosition,
    getDragHandleProps: h
  }
}