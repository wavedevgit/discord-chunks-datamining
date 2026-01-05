/** Chunk was on 9536 **/
/** chunk id: 266665, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk17163 = require("./17163.js"),
  Chunk642007 = require("./642007.js"),
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
  Chunk911115 = require("./911115.js");
let P = "DRAGGABLE_ROLE";

function w(e) {
  var t, i;
  let l, {
      guild: c,
      role: d,
      highestRole: f,
      selectedItem: m,
      onClick: b,
      currentPosition: h,
      onDragStart: v,
      onDragReset: O,
      onDragComplete: C,
      roleStyle: N
    } = e,
    E = (0, y.T)(c, f, d),
    I = (0, j.fI)(d),
    _ = null == E && !I,
    w = (null == (t = d.tags) ? true : t.guild_connections) !== true,
    Z = (0, x._f)(c.id, d, d.colorStrings),
    [, R] = (0, s.c)({
      type: P,
      item: () => (v(d.id), {
        id: d.id,
        position: h
      }),
      canDrag: () => _,
      end: (e, t) => {
        let n = t.getDropResult();
        if (null == n) return void O();
        C(n.roleId)
      }
    }),
    [{
      dragSourcePosition: D
    }, A] = (0, o.L)({
      accept: P,
      canDrop: () => _,
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver() && e.canDrop() ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: d.id
      })
    }),
    L = null != (i = d.colorString) ? i : S.Pbq;
  return l = w ? (0, r.jsx)(p.Z, {
    size: 12,
    color: d.colorString,
    className: T.verifiedRoleIcon
  }) : "dot" === N ? (0, r.jsx)(u.FhE, {
    color: L,
    colors: Z,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(u.xko, {
    color: L,
    colors: Z
  }), (0, r.jsxs)(u.njP.Item, {
    className: a()(T.row, {
      [T.dragBefore]: null !== D && h < D,
      [T.dragAfter]: null !== D && h > D
    }),
    id: d.id,
    selectedItem: m,
    itemType: "side",
    onClick: b,
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
            role: d,
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
    "aria-label": d.name,
    clickableRef: e => {
      var t;
      R(A(null != (t = null == e ? true : e.ref) ? t : null))
    },
    children: [l, null != E ? (0, r.jsx)(y.Z, {
      className: T.lock,
      tooltipText: E
    }) : null, (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: I ? "text-strong" : "interactive-text-active",
      lineClamp: 1,
      children: d.name
    })]
  })
}

function Z(e) {
  let {
    guild: t,
    currentRoleId: n,
    setCurrentRoleId: l,
    setSelectedSection: s
  } = e, o = (0, c.e7)([C.Z], () => C.Z.roles), g = (0, c.e7)([v.Z], () => v.Z.getHighestRole(t)), p = (0, c.e7)([b.Z], () => b.Z.roleStyle), [x, j] = i.useState(o.length), {
    scrolledToTop: y,
    handleScroll: S
  } = (0, E.V)(), {
    handleDragStart: P,
    handleDragReset: Z,
    handleDragComplete: R
  } = (0, N.Z)(o), D = i.useRef(null), A = i.useCallback(e => {
    var t, n;
    let r = o.findIndex(t => t.id === e);
    null == (n = D.current) || null == (t = n.getScrollerNode()) || t.scrollTo({
      top: Math.max((r - 2) * 34, 0)
    })
  }, [o]);
  return (0, m.ZP)(() => {
    A(n)
  }), i.useEffect(() => {
    o.length > x && A(n), o.length !== x && j(o.length)
  }, [o.length, x, j, A, n]), (0, r.jsx)(h.ZP.Sidebar, {
    className: T.sidebar,
    children: (0, r.jsxs)("div", {
      className: T.container,
      children: [(0, r.jsxs)("div", {
        className: a()(T.titleContainer, {
          [T.titleElevated]: !y
        }),
        children: [(0, r.jsxs)(u.P3F, {
          className: T.title,
          onClick: () => l(null),
          children: [(0, r.jsx)(O.Z, {
            direction: O.Z.Directions.LEFT
          }), (0, r.jsx)(u.Text, {
            className: T.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: _.intl.string(_.t["13/7kX"])
          })]
        }), (0, r.jsx)(d.u, {
          position: "top",
          "aria-label": _.intl.string(_.t.AbxKtv),
          __unsupportedReactNodeAsText: (0, r.jsx)(u.Text, {
            className: T.tooltip,
            variant: "text-sm/normal",
            children: _.intl.string(_.t.AbxKtv)
          }),
          children: (0, r.jsx)(u.P3F, {
            className: T.addRole,
            onClick: () => {
              f.Z.createRole(t.id), s(I.ZI.DISPLAY)
            },
            children: (0, r.jsx)(u.qJs, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, r.jsx)(u.Den, {
        className: T.list,
        ref: D,
        onScroll: S,
        children: (0, r.jsx)(u.njP, {
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
            roleStyle: p
          }, e.id))
        })
      })]
    })
  })
}