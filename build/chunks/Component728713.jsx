/** Chunk was on 39048 **/
/** chunk id: 728713, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk522437 = require("./522437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk63104 = require("./63104.jsx"),
  Chunk861197 = require("./861197.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk34457 = require("./34457.js"),
  Chunk576705 = require("./576705.js"),
  Chunk792831 = require("./792831.jsx"),
  Chunk396816 = require("./396816.js"),
  Chunk359837 = require("./359837.jsx"),
  Chunk533448 = require("./533448.js"),
  Chunk316506 = require("./316506.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk971525 = require("./971525.js");
let C = "DRAGGABLE_ROLE";

function P(e) {
  var t, i;
  let l, {
      guild: c,
      role: d,
      highestRole: m,
      selectedItem: p,
      onClick: f,
      currentPosition: b,
      onDragStart: _,
      onDragReset: O,
      onDragComplete: v,
      roleStyle: A
    } = e,
    E = (0, y.c)(c, m, d),
    N = (0, j.Oy)(d),
    I = null == E && !N,
    P = (null == (i = d.tags) ? true : i.guild_connections) !== true,
    w = (0, x.X_)(c.id, d, d.colorStrings),
    [, R] = (0, a.i)({
      type: C,
      item: () => (_(d.id), {
        id: d.id,
        position: b
      }),
      canDrag: () => I,
      end: (e, t) => {
        let n = t.getDropResult();
        null == n ? O() : v(n.roleId)
      }
    }),
    [{
      dragSourcePosition: D
    }, G] = (0, o.H)({
      accept: C,
      canDrop: () => I,
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
    L = null != (t = d.colorString) ? t : S.TpD;
  return l = P ? (0, r.jsx)(h.A, {
    size: 12,
    color: d.colorString,
    className: T.Ev
  }) : "dot" === A ? (0, r.jsx)(u.WYI, {
    color: L,
    colors: w,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(u.RYH, {
    color: L,
    colors: w
  }), (0, r.jsxs)(u.VQ0.Item, {
    className: s()(T.nM, {
      [T.qo]: null !== D && b < D,
      [T.BP]: null !== D && b > D
    }),
    id: d.id,
    selectedItem: p,
    itemType: "side",
    onClick: f,
    onContextMenu: function(e) {
      (0, g.L3)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 665013));
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
      R(G(null != (t = null == e ? true : e.ref) ? t : null))
    },
    children: [l, null != E ? (0, r.jsx)(y.A, {
      className: T.s2,
      tooltipText: E
    }) : null, (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: N ? "text-strong" : "interactive-text-active",
      lineClamp: 1,
      children: d.name
    })]
  })
}

function w(e) {
  let {
    guild: t,
    currentRoleId: n,
    setCurrentRoleId: l,
    setSelectedSection: a
  } = e, o = (0, c.bG)([v.A], () => v.A.roles), g = (0, c.bG)([_.A], () => _.A.getHighestRole(t)), h = (0, c.bG)([f.A], () => f.A.roleStyle), [x, j] = i.useState(o.length), {
    scrolledToTop: y,
    handleScroll: S
  } = (0, E.u)(), {
    handleDragStart: C,
    handleDragReset: w,
    handleDragComplete: R
  } = (0, A.A)(o), D = i.useRef(null), G = i.useCallback(e => {
    var t, n;
    let r = o.findIndex(t => t.id === e);
    null == (n = D.current) || null == (t = n.getScrollerNode()) || t.scrollTo({
      top: Math.max((r - 2) * 34, 0)
    })
  }, [o]);
  return (0, p.Ay)(() => {
    G(n)
  }), i.useEffect(() => {
    o.length > x && G(n), o.length !== x && j(o.length)
  }, [o.length, x, j, G, n]), (0, r.jsx)(b.Ay.Sidebar, {
    className: T.pz,
    children: (0, r.jsxs)("div", {
      className: T.kL,
      children: [(0, r.jsxs)("div", {
        className: s()(T.gn, {
          [T.P6]: !y
        }),
        children: [(0, r.jsxs)(u.DUT, {
          className: T.DD,
          onClick: () => l(null),
          children: [(0, r.jsx)(O.A, {
            direction: O.A.Directions.LEFT
          }), (0, r.jsx)(u.Text, {
            className: T.Qw,
            variant: "text-md/semibold",
            color: "none",
            children: I.intl.string(I.t["13/7kX"])
          })]
        }), (0, r.jsx)(d.m, {
          position: "top",
          "aria-label": I.intl.string(I.t.AbxKtv),
          __unsupportedReactNodeAsText: (0, r.jsx)(u.Text, {
            className: T.YL,
            variant: "text-sm/normal",
            children: I.intl.string(I.t.AbxKtv)
          }),
          children: (0, r.jsx)(u.DUT, {
            className: T.Cm,
            onClick: () => {
              m.A.createRole(t.id), a(N.T$.DISPLAY)
            },
            children: (0, r.jsx)(u.j96, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, r.jsx)(u.T7Y, {
        className: T.p_,
        ref: D,
        onScroll: S,
        children: (0, r.jsx)(u.VQ0, {
          selectedItem: n,
          onItemSelect: e => l(e),
          orientation: "vertical",
          children: o.map((e, i) => (0, r.jsx)(P, {
            guild: t,
            role: e,
            highestRole: g,
            selectedItem: n,
            onClick: () => l(e.id),
            currentPosition: i,
            onDragStart: C,
            onDragReset: w,
            onDragComplete: R,
            roleStyle: h
          }, e.id))
        })
      })]
    })
  })
}