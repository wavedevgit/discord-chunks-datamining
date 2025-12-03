/** Chunk was on 384 **/
/** chunk id: 266665, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk692992 = require("./692992.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk325476 = require("./325476.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk345162 = require("./345162.js"),
  Chunk496675 = require("./496675.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk103576 = require("./103576.js"),
  Chunk970129 = require("./970129.jsx"),
  Chunk712181 = require("./712181.js"),
  Chunk420966 = require("./420966.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk612894 = require("./612894.js");
let P = "DRAGGABLE_ROLE";

function w(e) {
  var t, i;
  let l, {
      guild: c,
      role: u,
      highestRole: m,
      selectedItem: p,
      onClick: f,
      currentPosition: b,
      onDragStart: _,
      onDragReset: v,
      onDragComplete: O,
      roleStyle: y
    } = e,
    N = (0, C.T)(c, m, u),
    E = (0, j.fI)(u),
    S = null == N && !E,
    w = (null == (t = u.tags) ? true : t.guild_connections) !== true,
    Z = (0, x._f)(c.id, u, u.colorStrings),
    [, R] = (0, s.c)({
      type: P,
      item: () => (_(u.id), {
        id: u.id,
        position: b
      }),
      canDrag: () => S,
      end: (e, t) => {
        let n = t.getDropResult();
        if (null == n) return void v();
        O(n.roleId)
      }
    }),
    [{
      dragSourcePosition: D
    }, A] = (0, o.L)({
      accept: P,
      canDrop: () => S,
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver() && e.canDrop() ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: u.id
      })
    }),
    L = null != (i = u.colorString) ? i : I.Pbq;
  return l = w ? (0, r.jsx)(h.Z, {
    size: 12,
    color: u.colorString,
    className: T.verifiedRoleIcon
  }) : "dot" === y ? (0, r.jsx)(d.FhE, {
    color: L,
    colors: Z,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(d.xko, {
    color: L,
    colors: Z
  }), (0, r.jsxs)(d.njP.Item, {
    className: a()(T.row, {
      [T.dragBefore]: null !== D && b < D,
      [T.dragAfter]: null !== D && b > D
    }),
    id: u.id,
    selectedItem: p,
    itemType: "side",
    onClick: f,
    onContextMenu: function(e) {
      (0, g.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 741247));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t), i = i = {
            role: u,
            guild: c
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    },
    "aria-label": u.name,
    clickableRef: e => {
      var t;
      R(A(null != (t = null == e ? true : e.ref) ? t : null))
    },
    children: [l, null != N ? (0, r.jsx)(C.Z, {
      className: T.lock,
      tooltipText: N
    }) : null, (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: E ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: u.name
    })]
  })
}

function Z(e) {
  let {
    guild: t,
    currentRoleId: n,
    setCurrentRoleId: l,
    setSelectedSection: s
  } = e, o = (0, c.e7)([O.Z], () => O.Z.roles), g = (0, c.e7)([_.Z], () => _.Z.getHighestRole(t)), h = (0, c.e7)([f.Z], () => f.Z.roleStyle), [x, j] = i.useState(o.length), {
    scrolledToTop: C,
    handleScroll: I
  } = (0, N.V)(), {
    handleDragStart: P,
    handleDragReset: Z,
    handleDragComplete: R
  } = (0, y.Z)(o), D = i.useRef(null), A = i.useCallback(e => {
    var t, n;
    let r = o.findIndex(t => t.id === e);
    null == (n = D.current) || null == (t = n.getScrollerNode()) || t.scrollTo({
      top: Math.max((r - 2) * 34, 0)
    })
  }, [o]);
  return (0, p.ZP)(() => {
    A(n)
  }), i.useEffect(() => {
    o.length > x && A(n), o.length !== x && j(o.length)
  }, [o.length, x, j, A, n]), (0, r.jsx)(b.ZP.Sidebar, {
    className: T.sidebar,
    children: (0, r.jsxs)("div", {
      className: T.container,
      children: [(0, r.jsxs)("div", {
        className: a()(T.titleContainer, {
          [T.titleElevated]: !C
        }),
        children: [(0, r.jsxs)(d.P3F, {
          className: T.title,
          onClick: () => l(null),
          children: [(0, r.jsx)(v.Z, {
            direction: v.Z.Directions.LEFT
          }), (0, r.jsx)(d.Text, {
            className: T.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: S.intl.string(S.t["13/7kX"])
          })]
        }), (0, r.jsx)(u.u, {
          position: "top",
          "aria-label": S.intl.string(S.t.AbxKtv),
          __unsupportedReactNodeAsText: (0, r.jsx)(d.Text, {
            className: T.tooltip,
            variant: "text-sm/normal",
            children: S.intl.string(S.t.AbxKtv)
          }),
          children: (0, r.jsx)(d.P3F, {
            className: T.addRole,
            onClick: () => {
              m.Z.createRole(t.id), s(E.ZI.DISPLAY)
            },
            children: (0, r.jsx)(d.qJs, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, r.jsx)(d.Den, {
        className: T.list,
        ref: D,
        onScroll: I,
        children: (0, r.jsx)(d.njP, {
          selectedItem: n,
          onItemSelect: e => l(e),
          orientation: "vertical",
          children: o.map((e, i) => (0, r.jsx)(w, {
            guild: t,
            role: e,
            highestRole: g,
            selectedItem: n,
            onClick: () => l(e.id),
            currentPosition: i,
            onDragStart: P,
            onDragReset: Z,
            onDragComplete: R,
            roleStyle: h
          }, e.id))
        })
      })]
    })
  })
}