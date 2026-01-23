/** Chunk was on 47841 **/
/** chunk id: 243056, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk131346 = require("./131346.js"),
  Chunk744818 = require("./744818.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk828208 = require("./828208.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk592454 = require("./592454.js");

function h(e) {
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
      case p.rX.MULTIPLE_CHOICE:
        return {
          icon: g.jsc, text: f.intl.string(f.t.ooKh3m)
        };
      case p.rX.PARAGRAPH:
        return {
          icon: g.$tc, text: f.intl.string(f.t.gG0JBN)
        };
      case p.rX.TEXT_INPUT:
        return {
          icon: (0, g.kHD)(m.A), text: f.intl.string(f.t.w6Q9wz)
        };
      case p.rX.TERMS:
        return {
          icon: g.B8Q, text: f.intl.string(f.t["3pz9t3"])
        };
      default:
        return null
    }
  }, [t]);
  return null == n ? null : (0, r.jsxs)("div", {
    className: b.L6,
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

function j(e) {
  let {
    title: t,
    children: n,
    fieldStyle: i,
    field: l
  } = e;
  return (0, r.jsx)("div", {
    className: b._Q,
    children: i === p.Vf.REGULAR ? (0, r.jsxs)("div", {
      className: b.pK,
      children: [(0, r.jsx)(d.EYj, {
        variant: "text-md/medium",
        className: b.Gp,
        children: t
      }), n]
    }) : (0, r.jsxs)("div", {
      className: b.ds,
      children: [(0, r.jsx)(d.EYj, {
        variant: "text-md/medium",
        className: b.ID,
        children: t
      }), (0, r.jsx)(x, {
        type: l.field_type
      })]
    })
  })
}
let _ = "FORM_FIELD";

function O(e) {
  let {
    index: t,
    field: n,
    isDropHovered: l,
    onDrop: d,
    fieldStyle: m
  } = e, f = (0, a.debounce)(async (e, t, n) => {
    await d(e, t, n)
  }), x = i.useRef(null), [, O] = (0, o.i)({
    type: _,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null == e || t.didDrop() || f(e.field, null, true)
    }
  }), [, v] = (0, c.H)({
    accept: _,
    hover: (e, n) => {
      var r;
      let {
        index: i
      } = e, l = null == (r = x.current) ? true : r.getBoundingClientRect(), s = n.getClientOffset();
      if (null == l || null == s) return;
      let a = (l.bottom - l.top) / 2,
        o = s.y - l.top;
      i < t && o < a || i > t && o < a || i === t || f(e.field, t, false)
    },
    drop: e => {
      f(e.field, t, true)
    }
  });
  return i.useLayoutEffect(() => (O(v(x)), () => {
    v(null), O(null)
  }), [O, v]), (0, r.jsxs)("div", {
    ref: x,
    "data-dnd-name": "field-".concat(t),
    className: s()(b.cK, {
      [b.TG]: l
    }),
    children: [(0, r.jsx)("div", {
      className: s()(b.VU, {
        [b.oE]: m === p.Vf.COMPACT
      }),
      children: (0, r.jsx)(g.WP0, {
        size: "xs",
        className: b.co,
        color: u.A.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, r.jsx)(j, h({}, e))]
  })
}

function v(e) {
  return (0, r.jsxs)("div", {
    className: s()(b.e4, {
      [b.oE]: e.fieldStyle === p.Vf.COMPACT
    }),
    children: [(0, r.jsx)("div", {
      className: b.Th,
      children: e.isDragEnabled ? (0, r.jsx)(O, h({}, e)) : (0, r.jsx)(j, h({}, e))
    }), "side" === e.actionsLocation && (0, r.jsxs)("div", {
      className: s()(b.fc, {
        [b.oE]: e.fieldStyle === p.Vf.COMPACT,
        [b.ZM]: e.canRemove
      }),
      children: [(0, r.jsx)(g.DUT, {
        className: b.hP,
        onClick: e.onEdit,
        "aria-label": f.intl.string(f.t.bt75uw),
        children: (0, r.jsx)(g.R2l, {
          size: "xs"
        })
      }), e.canRemove && (0, r.jsx)(g.DUT, {
        className: b.hP,
        onClick: e.onRemove,
        "aria-label": f.intl.string(f.t.N86XcP),
        children: (0, r.jsx)(g.ucK, {
          size: "xs"
        })
      })]
    })]
  })
}