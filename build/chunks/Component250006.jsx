/** Chunk was on 47841 **/
/** chunk id: 250006, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk587895 = require("./587895.js"),
  Chunk599119 = require("./599119.js"),
  Chunk923121 = require("./923121.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk931136 = require("./931136.js");

function h(e) {
  let {
    connection: t,
    index: l,
    onDragStart: h,
    onDragReset: j,
    onDragComplete: O,
    draggingId: y
  } = e, v = (0, d.Ay)(), {
    drag: A,
    drop: E,
    dragSourcePosition: N,
    setIsDraggable: _
  } = (0, g.A)({
    type: "ONBOARDING_CONNECTION_CARD",
    index: l,
    optionId: t.id,
    onDragStart: () => h(t.id),
    onDragComplete: e => O(e),
    onDragReset: () => j()
  }), S = i.useCallback(() => {
    (0, b.zN)(l)
  }, [l]), T = i.useCallback(() => {
    (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("90194").then(n.bind(n, 566857));
      return n => {
        var i, s;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), s = s = {
          connection: t,
          index: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  }, [t, l]), I = t.connection_type === m.wZ.APPLICATION, C = t.application_id, P = (0, a.bG)([f.A], () => I && null != C ? f.A.getApplication(C) : null, [I, C]), w = i.useMemo(() => (function(e, t, n) {
    var r, i, l;
    if (e.connection_type === m.wZ.APPLICATION && null != e.application_id) {
      if (null != n) return {
        name: n.name,
        icon: null != (r = n.getIconURL(128)) ? r : null
      }
    } else if (null != e.provider_id) {
      let n = u.A.get(e.provider_id);
      return null != n ? {
        name: n.name,
        icon: "light" === t ? null == (i = n.icon) ? true : i.lightPNG : null == (l = n.icon) ? true : l.darkPNG
      } : {
        name: "Unknown Platform",
        icon: null
      }
    }
    return {
      name: p.intl.string(p.t.kFlgsx),
      icon: null
    }
  })(t, v, P), [t, v, P]);
  return (0, r.jsxs)("div", {
    className: s()(x.Nr, {
      [x.A]: null != N && l < N,
      [x.Ze]: null != N && l > N
    }),
    onMouseEnter: () => _(true),
    onMouseLeave: () => _(false),
    ref: e => {
      A(E(e))
    },
    children: [(0, r.jsx)("div", {
      className: x.BU,
      children: (0, r.jsx)(o.WP0, {
        size: "sm",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: x.hu,
      children: [(0, r.jsx)("div", {
        className: x.Kk,
        children: null != w.icon ? (0, r.jsx)("img", {
          src: w.icon,
          alt: "",
          width: 40,
          height: 40
        }) : (0, r.jsx)(o._xR, {
          size: "custom",
          width: 40,
          height: 40,
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: x.P_,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: w.name
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: null != t.description && t.description.length > 0 ? t.description : p.intl.string(p.t["4nNtsP"])
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: x.o1,
      children: [(0, r.jsx)(c.m, {
        text: p.intl.string(p.t.bt75uw),
        children: (0, r.jsx)(o.DUT, {
          className: x.r9,
          onClick: T,
          "aria-label": p.intl.string(p.t.bt75uw),
          children: (0, r.jsx)(o.R2l, {
            size: "xs",
            color: "currentColor"
          })
        })
      }), (0, r.jsx)(c.m, {
        text: p.intl.string(p.t.N86XcP),
        children: (0, r.jsx)(o.DUT, {
          className: x.DT,
          onClick: S,
          "aria-label": p.intl.string(p.t.N86XcP),
          children: (0, r.jsx)(o.ucK, {
            size: "xs",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}