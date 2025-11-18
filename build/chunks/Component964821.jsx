/** Chunk was on 32923 **/
/** chunk id: 964821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk812206 = require("./812206.js"),
  Chunk603211 = require("./603211.js"),
  Chunk190007 = require("./190007.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk671940 = require("./671940.js");

function x(e) {
  let {
    connection: t,
    index: l,
    onDragStart: x,
    onDragReset: j,
    onDragComplete: _,
    draggingId: v
  } = e, O = (0, d.ZP)(), {
    drag: C,
    drop: y,
    dragSourcePosition: N,
    setIsDraggable: E
  } = (0, m.Z)({
    type: "ONBOARDING_CONNECTION_CARD",
    index: l,
    optionId: t.id,
    onDragStart: () => x(t.id),
    onDragComplete: e => _(e),
    onDragReset: () => j()
  }), I = i.useCallback(() => {
    (0, p.xI)(l)
  }, [l]), S = i.useCallback(() => {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("11798").then(n.bind(n, 8656));
      return n => {
        var i, a;
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
        }({}, n), a = a = {
          connection: t,
          index: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    })
  }, [t, l]), T = t.connection_type === f.zz.APPLICATION, P = t.application_id, w = (0, s.e7)([g.Z], () => T && null != P ? g.Z.getApplication(P) : null, [T, P]), Z = i.useMemo(() => (function(e, t, n) {
    var r, i, l;
    if (e.connection_type === f.zz.APPLICATION && null != e.application_id) {
      if (null != n) return {
        name: n.name,
        icon: null != (r = n.getIconURL(128)) ? r : null
      }
    } else if (null != e.provider_id) {
      let n = u.Z.get(e.provider_id);
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
  })(t, O, w), [t, O, w]);
  return (0, r.jsxs)("div", {
    className: a()(b.card, {
      [b.dropIndicatorBefore]: null != N && l < N,
      [b.dropIndicatorAfter]: null != N && l > N
    }),
    onMouseEnter: () => E(true),
    onMouseLeave: () => E(false),
    ref: e => {
      C(y(e))
    },
    children: [(0, r.jsx)("div", {
      className: b.dragHandle,
      children: (0, r.jsx)(c.Vni, {
        size: "sm",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: b.leftContent,
      children: [(0, r.jsx)("div", {
        className: b.icon,
        children: null != Z.icon ? (0, r.jsx)("img", {
          src: Z.icon,
          alt: "",
          width: 40,
          height: 40
        }) : (0, r.jsx)(c.iWm, {
          size: "custom",
          width: 40,
          height: 40,
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: b.textContent,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: Z.name
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: null != t.description && t.description.length > 0 ? t.description : h.intl.string(h.t["4nNtsP"])
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: b.actions,
      children: [(0, r.jsx)(o.u, {
        text: h.intl.string(h.t.bt75uw),
        children: (0, r.jsx)(c.P3F, {
          className: b.editButton,
          onClick: S,
          "aria-label": h.intl.string(h.t.bt75uw),
          children: (0, r.jsx)(c.vdY, {
            size: "xs",
            color: "currentColor"
          })
        })
      }), (0, r.jsx)(o.u, {
        text: h.intl.string(h.t.N86XcP),
        children: (0, r.jsx)(c.P3F, {
          className: b.removeButton,
          onClick: I,
          "aria-label": h.intl.string(h.t.N86XcP),
          children: (0, r.jsx)(c.XHJ, {
            size: "xs",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}