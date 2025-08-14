/** Chunk was on 38576 **/
/** chunk id: 925170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk594174 = require("./594174.js"),
  Chunk804919 = require("./804919.js"),
  Chunk86419 = require("./86419.js"),
  Chunk810473 = require("./810473.js"),
  Chunk747101 = require("./747101.js"),
  Chunk872269 = require("./872269.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32442 = require("./32442.js");
let E = {
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

function _(e) {
  let {
    widgetType: t,
    user: n,
    widget: l,
    isGameFetching: a,
    onAddWidget: s,
    disabled: d
  } = e, p = i.useRef(null), b = (0, u.Dt)(), f = i.useCallback(() => {
    (0, g.qH)(t), s(), (0, O.L$)(x.qb.WIDGET_ADDED)
  }, [t, s]);
  if (null == l) return null;
  let {
    component: j,
    getAriaLabel: m
  } = E[t];
  return (0, r.jsx)("li", {
    children: (0, r.jsxs)("div", {
      ref: p,
      onClick: d ? true : f,
      className: o()(P.addButtonContainer, d && P.disabled),
      children: [(0, r.jsx)("div", {
        className: P.addButton,
        children: (0, r.jsx)(c.zxk, {
          text: A.intl.string(A.t.onajm5),
          variant: "overlay-primary",
          "aria-label": m(),
          "aria-describedby": d ? b : true,
          focusProps: {
            ringTarget: p
          },
          onClick: e => {
            e.stopPropagation(), f()
          },
          disabled: d
        })
      }), d && (0, r.jsxs)("div", {
        className: P.widgetAdded,
        children: [(0, r.jsx)(c.kmB, {
          size: "sm",
          color: "currentColor"
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          "aria-hidden": true,
          children: A.intl.string(A.t["UEZy/f"])
        }), (0, r.jsx)(c.nn4, {
          id: b,
          children: A.intl.string(A.t.d8WVXF)
        })]
      }), (0, r.jsx)(c.nn4, {
        children: A.intl.string(A.t.e9eskJ)
      }), (0, r.jsx)(j, {
        widget: l,
        user: n,
        isGameFetching: a,
        containerClassName: d && P.disabledWidget,
        disableInteraction: true
      })]
    })
  })
}

function k(e) {
  var t, n, {
      onClose: l
    } = e,
    o = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["onClose"]);
  let a = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
    c = (0, f.Z)(),
    u = (0, b.oD)(),
    {
      widgets: g,
      isGameFetching: O
    } = (0, j.Z)(u),
    m = new Map(g.map(e => [e.type, e])),
    y = i.useMemo(() => {
      let e = new Set(c),
        t = [],
        n = [];
      return v.r.forEach(r => {
        e.has(r) ? t.push(r) : n.push(r)
      }), [...t, ...n]
    }, [c]);
  return null == a ? null : (0, r.jsx)(d.Modal, (t = function(e) {
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
  }({
    title: A.intl.string(A.t.grUgR0),
    actions: [],
    onClose: l
  }, o), n = n = {
    children: (0, r.jsx)("ul", {
      "aria-label": A.intl.string(A.t["+EIBSE"]),
      className: P.options,
      children: y.map(e => (0, r.jsx)(_, {
        widgetType: e,
        user: a,
        widget: m.get(e),
        isGameFetching: O,
        disabled: !c.includes(e),
        onAddWidget: l
      }, e))
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}