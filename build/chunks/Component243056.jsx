/** Chunk was on 11810 **/
/** chunk id: 243056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk131346 = require("./131346.js"),
  Chunk522437 = require("./522437.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk828208 = require("./828208.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk592454 = require("./592454.js");

function m(e) {
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

function O(e) {
  let {
    type: t
  } = e, n = i.useMemo(() => {
    switch (t) {
      case p.rX.MULTIPLE_CHOICE:
        return {
          icon: f.jsc, text: b.intl.string(b.t.ooKh3m)
        };
      case p.rX.PARAGRAPH:
        return {
          icon: f.$tc, text: b.intl.string(b.t.gG0JBN)
        };
      case p.rX.TEXT_INPUT:
        return {
          icon: (0, f.kHD)(j.A), text: b.intl.string(b.t.w6Q9wz)
        };
      case p.rX.TERMS:
        return {
          icon: f.B8Q, text: b.intl.string(b.t["3pz9t3"])
        };
      default:
        return null
    }
  }, [t]);
  return null == n ? null : (0, r.jsxs)("div", {
    className: y.L6,
    children: [(0, r.jsx)(n.icon, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(d.EYj, {
      variant: "text-sm/medium",
      tag: "span",
      children: n.text
    })]
  })
}

function v(e) {
  let {
    title: t,
    children: n,
    fieldStyle: i,
    field: l
  } = e;
  return (0, r.jsx)("div", {
    className: y._Q,
    children: i === p.Vf.REGULAR ? (0, r.jsxs)("div", {
      className: y.pK,
      children: [(0, r.jsx)(d.EYj, {
        variant: "text-md/medium",
        className: y.Gp,
        children: t
      }), n]
    }) : (0, r.jsxs)("div", {
      className: y.ds,
      children: [(0, r.jsx)(d.EYj, {
        variant: "text-md/medium",
        className: y.ID,
        children: t
      }), (0, r.jsx)(O, {
        type: l.field_type
      })]
    })
  })
}
let x = "FORM_FIELD";

function h(e) {
  let {
    index: t,
    field: n,
    isDropHovered: l,
    onDrop: d,
    fieldStyle: j
  } = e, b = (0, c.debounce)(async (e, t, n) => {
    await d(e, t, n)
  }), O = i.useRef(null), [, h] = (0, s.i)({
    type: x,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null == e || t.didDrop() || b(e.field, null, true)
    }
  }), [, g] = (0, a.H)({
    accept: x,
    hover: (e, n) => {
      var r;
      let {
        index: i
      } = e, l = null == (r = O.current) ? true : r.getBoundingClientRect(), o = n.getClientOffset();
      if (null == l || null == o) return;
      let c = (l.bottom - l.top) / 2,
        s = o.y - l.top;
      i < t && s < c || i > t && s < c || i === t || b(e.field, t, false)
    },
    drop: e => {
      b(e.field, t, true)
    }
  });
  return i.useLayoutEffect(() => (h(g(O)), () => {
    g(null), h(null)
  }), [h, g]), (0, r.jsxs)("div", {
    ref: O,
    "data-dnd-name": "field-".concat(t),
    className: o()(y.cK, {
      [y.TG]: l
    }),
    children: [(0, r.jsx)("div", {
      className: o()(y.VU, {
        [y.oE]: j === p.Vf.COMPACT
      }),
      children: (0, r.jsx)(f.WP0, {
        size: "xs",
        className: y.co,
        color: u.A.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, r.jsx)(v, m({}, e))]
  })
}

function g(e) {
  return (0, r.jsxs)("div", {
    className: o()(y.e4, {
      [y.oE]: e.fieldStyle === p.Vf.COMPACT
    }),
    children: [(0, r.jsx)("div", {
      className: y.Th,
      children: e.isDragEnabled ? (0, r.jsx)(h, m({}, e)) : (0, r.jsx)(v, m({}, e))
    }), "side" === e.actionsLocation && (0, r.jsxs)("div", {
      className: o()(y.fc, {
        [y.oE]: e.fieldStyle === p.Vf.COMPACT,
        [y.ZM]: e.canRemove
      }),
      children: [(0, r.jsx)(f.DUT, {
        className: y.hP,
        onClick: e.onEdit,
        "aria-label": b.intl.string(b.t.bt75uw),
        children: (0, r.jsx)(f.R2l, {
          size: "xs"
        })
      }), e.canRemove && (0, r.jsx)(f.DUT, {
        className: y.hP,
        onClick: e.onRemove,
        "aria-label": b.intl.string(b.t.N86XcP),
        children: (0, r.jsx)(f.ucK, {
          size: "xs"
        })
      })]
    })]
  })
}