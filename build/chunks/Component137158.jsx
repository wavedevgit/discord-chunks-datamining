/** Chunk was on 52721 **/
/** chunk id: 137158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk574981 = require("./574981.js"),
  Chunk194630 = require("./194630.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838221 = require("./838221.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31829 = require("./31829.js");

function b(e) {
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
}

function x(e) {
  let {
    type: t
  } = e, n = i.useMemo(() => {
    switch (t) {
      case p.QJ.MULTIPLE_CHOICE:
        return {
          icon: m.jE$, text: h.intl.string(h.t.ooKh3t)
        };
      case p.QJ.PARAGRAPH:
        return {
          icon: m.OvV, text: h.intl.string(h.t.gG0JBA)
        };
      case p.QJ.TEXT_INPUT:
        return {
          icon: (0, m.GSL)(g.Z), text: h.intl.string(h.t.w6Q9w8)
        };
      case p.QJ.TERMS:
        return {
          icon: m.snC, text: h.intl.string(h.t["3pz9t7"])
        };
      default:
        return null
    }
  }, [t]);
  return null == n ? null : (0, r.jsxs)("div", {
    className: f.typeTag,
    children: [(0, r.jsx)(n.icon, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(d.xv, {
      variant: "text-sm/medium",
      tag: "span",
      children: n.text
    })]
  })
}

function j(e) {
  let {
    title: t,
    children: n,
    fieldStyle: i,
    field: l
  } = e;
  return (0, r.jsx)("div", {
    className: f.backgroundContainer,
    children: i === p.it.REGULAR ? (0, r.jsxs)("div", {
      className: f.containerPadding,
      children: [(0, r.jsx)(m.vwX, {
        tag: "h3",
        className: f.containerTitle,
        children: t
      }), n]
    }) : (0, r.jsxs)("div", {
      className: f.compactContainer,
      children: [(0, r.jsx)(m.vwX, {
        tag: "h3",
        className: f.compactTitle,
        children: t
      }), (0, r.jsx)(x, {
        type: l.field_type
      })]
    })
  })
}
let v = "FORM_FIELD";

function _(e) {
  let {
    index: t,
    field: n,
    isDropHovered: l,
    onDrop: d,
    fieldStyle: g
  } = e, h = (0, s.debounce)(async (e, t, n) => {
    await d(e, t, n)
  }), x = i.useRef(null), [, _] = (0, o.c)({
    type: v,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null == e || t.didDrop() || h(e.field, null, true)
    }
  }), [, O] = (0, c.L)({
    accept: v,
    hover: (e, n) => {
      var r;
      let {
        index: i
      } = e, l = null == (r = x.current) ? true : r.getBoundingClientRect(), a = n.getClientOffset();
      if (null == l || null == a) return;
      let s = (l.bottom - l.top) / 2,
        o = a.y - l.top;
      i < t && o < s || i > t && o < s || i === t || h(e.field, t, false)
    },
    drop: e => {
      h(e.field, t, true)
    }
  });
  return i.useLayoutEffect(() => (_(O(x)), () => {
    O(null), _(null)
  }), [_, O]), (0, r.jsxs)("div", {
    ref: x,
    "data-dnd-name": "field-".concat(t),
    className: a()(f.dragContainer, {
      [f.dropHovered]: l
    }),
    children: [(0, r.jsx)("div", {
      className: a()(f.dragIconContainer, {
        [f.compact]: g === p.it.COMPACT
      }),
      children: (0, r.jsx)(m.Vni, {
        size: "xs",
        className: f.dragIcon,
        color: u.Z.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, r.jsx)(j, b({}, e))]
  })
}

function O(e) {
  return (0, r.jsxs)("div", {
    className: a()(f.formFieldContainer, {
      [f.compact]: e.fieldStyle === p.it.COMPACT
    }),
    children: [(0, r.jsx)("div", {
      className: f.spacingContainer,
      children: e.isDragEnabled ? (0, r.jsx)(_, b({}, e)) : (0, r.jsx)(j, b({}, e))
    }), "side" === e.actionsLocation && (0, r.jsxs)("div", {
      className: a()(f.actionButtonsContainer, {
        [f.compact]: e.fieldStyle === p.it.COMPACT,
        [f.canRemove]: e.canRemove
      }),
      children: [(0, r.jsx)(m.P3F, {
        className: f.actionButton,
        onClick: e.onEdit,
        "aria-label": h.intl.string(h.t.bt75u7),
        children: (0, r.jsx)(m.vdY, {
          size: "xs"
        })
      }), e.canRemove && (0, r.jsx)(m.P3F, {
        className: f.actionButton,
        onClick: e.onRemove,
        "aria-label": h.intl.string(h.t.N86XcH),
        children: (0, r.jsx)(m.XHJ, {
          size: "xs"
        })
      })]
    })]
  })
}