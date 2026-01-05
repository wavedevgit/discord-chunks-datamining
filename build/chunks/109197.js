/** Chunk was on 29709 **/
/** chunk id: 109197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HQ: () => u,
  Ii: () => c,
  OL: () => g,
  Yf: () => p,
  wO: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk17163 = require("./17163.js"),
  Chunk642007 = require("./642007.js"),
  Chunk313426 = require("./313426.js");
let o = "FRIEND_USER",
  a = "FRIEND_GROUP";

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = r.useMemo(() => ({
      userId: e,
      sourceGroupId: t
    }), [e, t]),
    [{
      isDragging: s
    }, a] = (0, i.c)({
      type: o,
      item: l,
      canDrag: () => !n,
      collect: e => ({
        isDragging: e.isDragging()
      }),
      options: {
        dropEffect: "move"
      }
    });
  return {
    isDragging: s,
    drag: a
  }
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [{
      isOver: n,
      canDrop: r
    }, i] = (0, l.L)({
      accept: o,
      canDrop: () => !t,
      drop: t => {
        let {
          userId: n,
          sourceGroupId: r
        } = t;
        r !== e && (null != r && s.Z.removeUsersFromGroup(r, n), s.Z.addUsersToGroup(e, n))
      },
      collect: e => ({
        isOver: e.isOver(),
        canDrop: e.canDrop()
      })
    });
  return {
    isOver: n && r,
    drop: i
  }
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [{
      isOver: t,
      canDrop: n
    }, r] = (0, Chunk642007.L)({
      accept: o,
      canDrop: () => !module,
      drop: e => {
        let {
          userId: t,
          sourceGroupId: n
        } = e;
        null != n && s.Z.removeUsersFromGroup(n, t)
      },
      collect: e => ({
        isOver: e.isOver(),
        canDrop: e.canDrop()
      })
    });
  return {
    isOver: exports && require,
    drop: Chunk473749
  }
}

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = r.useRef(null),
    [{
      isOver: a,
      canDrop: u
    }, c] = (0, l.L)({
      accept: o,
      canDrop: () => !n,
      hover: (n, r) => {
        if (r.isOver({
            shallow: true
          }) && null != i.current && n.userId !== t && n.sourceGroupId === e) return
      },
      drop: n => {
        let {
          userId: r,
          sourceGroupId: i
        } = n;
        r !== t && i !== e && (null != i && s.Z.removeUsersFromGroup(i, r), s.Z.addUsersToGroup(e, r))
      },
      collect: n => {
        let r = n.getItem(),
          i = n.isOver({
            shallow: true
          }),
          l = n.canDrop();
        return {
          isOver: i && l && null != r && r.userId !== t && r.sourceGroupId !== e,
          canDrop: l
        }
      }
    });
  return {
    isOver: a && u,
    drop: e => (i.current = e, c(e))
  }
}

function g(e, t, n) {
  let s = arguments.length > 3 && true !== arguments[3] && arguments[3],
    o = r.useMemo(() => ({
      groupId: e,
      position: t
    }), [e, t]),
    [{
      isDragging: u
    }, c] = (0, i.c)({
      type: a,
      item: o,
      canDrag: () => !s,
      collect: e => ({
        isDragging: e.isDragging()
      })
    }),
    [{
      dragSourcePosition: d
    }, p] = (0, l.L)({
      accept: a,
      canDrop: () => !s,
      hover: (e, n) => {
        if (n.isOver({
            shallow: true
          })) e.position !== t && (e.position = t)
      },
      drop: t => {
        n([t.groupId, e])
      },
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver({
          shallow: true
        }) ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      }
    });
  return {
    isDragging: u,
    dragSourcePosition: d,
    drag: c,
    drop: p
  }
}