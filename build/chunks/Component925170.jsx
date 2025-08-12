/** Chunk was on 38576 **/
/** chunk id: 925170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  d = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk594174 = require("./594174.js"),
  Chunk804919 = require("./804919.js"),
  Chunk747101 = require("./747101.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663161 = require("./663161.js");
let w = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    component: Chunk566007.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.xJtdIi)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    component: Chunk985748.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.Ae8tRk)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    component: Chunk173951.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t["pBR+4u"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    component: Chunk455731.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.NtoBi4)
  }
};

function v(e) {
  let {
    widgetType: t,
    user: n,
    widget: a,
    isGameFetching: l,
    onClick: o,
    disabled: s
  } = e, p = r.useRef(null), g = (0, u.Dt)();
  if (null == a) return null;
  let {
    component: b,
    getAriaLabel: j
  } = w[t];
  return (0, i.jsx)("li", {
    children: (0, i.jsxs)("div", {
      ref: p,
      onClick: s ? true : o,
      className: d()(x.addButtonContainer, s && x.disabled),
      children: [(0, i.jsx)("div", {
        className: x.addButton,
        children: (0, i.jsx)(c.zxk, {
          text: h.intl.string(h.t.onajm5),
          variant: "overlay-primary",
          "aria-label": j(),
          "aria-describedby": s ? g : true,
          focusProps: {
            ringTarget: p
          },
          onClick: e => {
            e.stopPropagation(), o(e)
          },
          disabled: s
        })
      }), s && (0, i.jsxs)("div", {
        className: x.widgetAdded,
        children: [(0, i.jsx)(c.kmB, {
          size: "sm",
          color: "currentColor"
        }), (0, i.jsx)(c.Text, {
          variant: "text-sm/medium",
          "aria-hidden": true,
          children: h.intl.string(h.t["UEZy/f"])
        }), (0, i.jsx)(c.nn4, {
          id: g,
          children: h.intl.string(h.t.d8WVXF)
        })]
      }), (0, i.jsx)(c.nn4, {
        children: h.intl.string(h.t.e9eskJ)
      }), (0, i.jsx)(b, {
        widget: a,
        user: n,
        isGameFetching: l,
        containerClassName: s && x.disabledWidget,
        disableInteraction: true
      })]
    })
  })
}

function A(e) {
  var t, n;
  let r = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
    a = (0, g.oD)(),
    {
      widgets: d,
      isGameFetching: l
    } = (0, b.Z)(a),
    c = new Map(d.map(e => [e.type, e]));
  return null == r ? null : (0, i.jsx)(s.Modal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    title: h.intl.string(h.t.grUgR0),
    actions: []
  }, e), n = n = {
    children: (0, i.jsx)("ul", {
      "aria-label": h.intl.string(h.t["+EIBSE"]),
      className: x.options,
      children: Object.keys(w).map(e => (0, i.jsx)(v, {
        widgetType: e,
        user: r,
        widget: c.get(e),
        isGameFetching: l,
        onClick: O.dG
      }, e))
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}