/** Chunk was on 39048 **/
/** chunk id: 250006, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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

function x(e) {
  let {
    connection: t,
    index: l,
    onDragStart: x,
    onDragReset: j,
    onDragComplete: _,
    draggingId: O
  } = e, v = (0, d.Ay)(), {
    drag: y,
    drop: A,
    dragSourcePosition: E,
    setIsDraggable: N
  } = (0, m.A)({
    type: "ONBOARDING_CONNECTION_CARD",
    index: l,
    optionId: t.id,
    onDragStart: () => x(t.id),
    onDragComplete: e => _(e),
    onDragReset: () => j()
  }), S = i.useCallback(() => {
    (0, p.zN)(l)
  }, [l]), I = i.useCallback(() => {
    (0, c.mMO)(async () => {
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
  }, [t, l]), C = t.connection_type === f.wZ.APPLICATION, T = t.application_id, P = (0, a.bG)([g.A], () => C && null != T ? g.A.getApplication(T) : null, [C, T]), w = i.useMemo(() => (function(e, t, n) {
    var r, i, l;
    if (e.connection_type === f.wZ.APPLICATION && null != e.application_id) {
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
      name: h.intl.string(h.t.kFlgsx),
      icon: null
    }
  })(t, v, P), [t, v, P]);
  return (0, r.jsxs)("div", {
    className: s()(b.Nr, {
      [b.A]: null != E && l < E,
      [b.Ze]: null != E && l > E
    }),
    onMouseEnter: () => N(true),
    onMouseLeave: () => N(false),
    ref: e => {
      y(A(e))
    },
    children: [(0, r.jsx)("div", {
      className: b.BU,
      children: (0, r.jsx)(c.WP0, {
        size: "sm",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: b.hu,
      children: [(0, r.jsx)("div", {
        className: b.Kk,
        children: null != w.icon ? (0, r.jsx)("img", {
          src: w.icon,
          alt: "",
          width: 40,
          height: 40
        }) : (0, r.jsx)(c._xR, {
          size: "custom",
          width: 40,
          height: 40,
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: b.P_,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: w.name
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: null != t.description && t.description.length > 0 ? t.description : h.intl.string(h.t["4nNtsP"])
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: b.o1,
      children: [(0, r.jsx)(o.m, {
        text: h.intl.string(h.t.bt75uw),
        children: (0, r.jsx)(c.DUT, {
          className: b.r9,
          onClick: I,
          "aria-label": h.intl.string(h.t.bt75uw),
          children: (0, r.jsx)(c.R2l, {
            size: "xs",
            color: "currentColor"
          })
        })
      }), (0, r.jsx)(o.m, {
        text: h.intl.string(h.t.N86XcP),
        children: (0, r.jsx)(c.DUT, {
          className: b.DT,
          onClick: S,
          "aria-label": h.intl.string(h.t.N86XcP),
          children: (0, r.jsx)(c.ucK, {
            size: "xs",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}