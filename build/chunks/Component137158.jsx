/** Chunk was on 384 **/
/** chunk id: 137158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
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
          icon: g.jE$, text: f.intl.string(f.t.ooKh3m)
        };
      case p.QJ.PARAGRAPH:
        return {
          icon: g.OvV, text: f.intl.string(f.t.gG0JBN)
        };
      case p.QJ.TEXT_INPUT:
        return {
          icon: (0, g.GSL)(m.Z), text: f.intl.string(f.t.w6Q9wz)
        };
      case p.QJ.TERMS:
        return {
          icon: g.snC, text: f.intl.string(f.t["3pz9t3"])
        };
      default:
        return null
    }
  }, [t]);
  return null == n ? null : (0, r.jsxs)("div", {
    className: h.typeTag,
    children: [(0, r.jsx)(n.icon, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(d.xvT, {
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
    className: h.backgroundContainer,
    children: i === p.it.REGULAR ? (0, r.jsxs)("div", {
      className: h.containerPadding,
      children: [(0, r.jsx)(d.xvT, {
        variant: "text-md/medium",
        className: h.containerTitle,
        children: t
      }), n]
    }) : (0, r.jsxs)("div", {
      className: h.compactContainer,
      children: [(0, r.jsx)(d.xvT, {
        variant: "text-md/medium",
        className: h.compactTitle,
        children: t
      }), (0, r.jsx)(x, {
        type: l.field_type
      })]
    })
  })
}
let _ = "FORM_FIELD";

function v(e) {
  let {
    index: t,
    field: n,
    isDropHovered: l,
    onDrop: d,
    fieldStyle: m
  } = e, f = (0, s.debounce)(async (e, t, n) => {
    await d(e, t, n)
  }), x = i.useRef(null), [, v] = (0, o.c)({
    type: _,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null == e || t.didDrop() || f(e.field, null, true)
    }
  }), [, O] = (0, c.L)({
    accept: _,
    hover: (e, n) => {
      var r;
      let {
        index: i
      } = e, l = null == (r = x.current) ? true : r.getBoundingClientRect(), a = n.getClientOffset();
      if (null == l || null == a) return;
      let s = (l.bottom - l.top) / 2,
        o = a.y - l.top;
      i < t && o < s || i > t && o < s || i === t || f(e.field, t, false)
    },
    drop: e => {
      f(e.field, t, true)
    }
  });
  return i.useLayoutEffect(() => (v(O(x)), () => {
    O(null), v(null)
  }), [v, O]), (0, r.jsxs)("div", {
    ref: x,
    "data-dnd-name": "field-".concat(t),
    className: a()(h.dragContainer, {
      [h.dropHovered]: l
    }),
    children: [(0, r.jsx)("div", {
      className: a()(h.dragIconContainer, {
        [h.compact]: m === p.it.COMPACT
      }),
      children: (0, r.jsx)(g.Vni, {
        size: "xs",
        className: h.dragIcon,
        color: u.Z.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, r.jsx)(j, b({}, e))]
  })
}

function O(e) {
  return (0, r.jsxs)("div", {
    className: a()(h.formFieldContainer, {
      [h.compact]: e.fieldStyle === p.it.COMPACT
    }),
    children: [(0, r.jsx)("div", {
      className: h.spacingContainer,
      children: e.isDragEnabled ? (0, r.jsx)(v, b({}, e)) : (0, r.jsx)(j, b({}, e))
    }), "side" === e.actionsLocation && (0, r.jsxs)("div", {
      className: a()(h.actionButtonsContainer, {
        [h.compact]: e.fieldStyle === p.it.COMPACT,
        [h.canRemove]: e.canRemove
      }),
      children: [(0, r.jsx)(g.P3F, {
        className: h.actionButton,
        onClick: e.onEdit,
        "aria-label": f.intl.string(f.t.bt75uw),
        children: (0, r.jsx)(g.vdY, {
          size: "xs"
        })
      }), e.canRemove && (0, r.jsx)(g.P3F, {
        className: h.actionButton,
        onClick: e.onRemove,
        "aria-label": f.intl.string(f.t.N86XcP),
        children: (0, r.jsx)(g.XHJ, {
          size: "xs"
        })
      })]
    })]
  })
}