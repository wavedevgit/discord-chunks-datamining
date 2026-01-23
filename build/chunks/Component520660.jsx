/** Chunk was on 52981 **/
/** chunk id: 520660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk522437 = require("./522437.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk44234 = require("./44234.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk242273 = require("./242273.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk285553 = require("./285553.js");
let y = "MULTIPLE_CHOICE",
  x = e => {
    let {
      choice: t,
      index: n,
      onChange: i,
      onClear: s,
      onReorder: d,
      isDropHovered: b
    } = e, h = r.useRef(null), g = r.useRef(null), [, x, j] = (0, c.i)({
      type: y,
      item: {
        choice: t,
        index: n
      },
      end: (e, t) => {
        null == e || t.didDrop() || d(e.choice, null, true)
      }
    }), [, v] = (0, o.H)({
      accept: y,
      hover: (e, t) => {
        var l;
        let {
          index: r
        } = e, i = null == (l = h.current) ? true : l.getBoundingClientRect(), a = t.getClientOffset();
        if (null == i || null == a) return;
        let c = (i.bottom - i.top) / 2,
          o = a.y - i.top;
        r < n && o < c || r > n && o > c || d(e.choice, n, false)
      },
      drop: e => {
        d(e.choice, n, true)
      }
    });
    return r.useLayoutEffect(() => (x(g), j(v(h)), () => {
      x(null), v(null)
    }), [x, v, j]), (0, l.jsxs)("div", {
      ref: h,
      className: a()(m.XQ, {
        [m.cB]: b
      }),
      "data-dnd-name": t,
      children: [(0, l.jsx)("div", {
        className: m.R6,
        children: (0, l.jsx)(p.A, {
          height: 20,
          width: 20,
          className: m.IC
        })
      }), (0, l.jsxs)("div", {
        className: m.I6,
        children: [(0, l.jsx)(u.ksK, {
          autoFocus: true,
          onChange: e => i(e),
          placeholder: f.intl.formatToPlainString(f.t["Ep/pbH"], {
            index: n + 1
          }),
          value: t
        }), (0, l.jsx)("div", {
          className: m.mt,
          children: (0, l.jsx)(u.K0, {
            icon: u.aXh,
            size: "sm",
            "aria-label": f.intl.string(f.t.VkKicb),
            variant: "icon-only",
            onClick: s
          })
        })]
      }), (0, l.jsx)("div", {
        ref: g,
        className: m.cK,
        "data-dnd-name": t,
        children: (0, l.jsx)(u.WP0, {
          size: "xs",
          color: "currentColor",
          className: m.co
        })
      })]
    })
  },
  j = function(e) {
    var t, n, i, a;
    let {
      field: c,
      onSave: o,
      onClose: p
    } = e, [y, j] = r.useState(null != (t = null == c ? true : c.label) ? t : ""), [v, _] = r.useState(null != (n = null == c ? true : c.choices) ? n : [""]), [C, O] = r.useState(null), [w, k] = r.useState(null), I = (e, t, n) => {
      if (null == v) return;
      null != C && O(null);
      let l = v.indexOf(e),
        r = [...v];
      null != t && t !== l && (r.splice(l, 1), r.splice(t, 0, e), _(r)), n ? null !== t && k(null) : t !== w && k(t)
    }, E = async () => {
      null != C && O(null);
      let e = y.trim();
      if ("" === e) return void O(f.intl.string(f.t["G+TI44"]));
      if (0 === v.map(e => e.trim()).filter(e => "" !== e).length) return void O(f.intl.string(f.t.jZoHgI));
      let t = {
        field_type: b.rX.MULTIPLE_CHOICE,
        label: e,
        choices: v,
        required: true
      };
      try {
        await o(t), p()
      } catch (e) {
        O(new d.LG(e).getAnyErrorMessage())
      }
    };
    return (0, l.jsxs)(h.A, (i = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, e), a = a = {
      errorText: C,
      title: f.intl.string(f.t.ooKh3m),
      onConfirm: E,
      onCancel: p,
      children: [(0, l.jsx)("div", {
        className: m.Ef,
        children: (0, l.jsx)(u.ksK, {
          autoFocus: true,
          onChange: e => {
            null != C && O(null);
            let t = e.replace(/(\r\n|\n|\r)/g, " ");
            t.length > g.Ty && (t = e.slice(0, g.Ty)), j(t)
          },
          placeholder: f.intl.string(f.t.fqVmbL),
          value: y
        })
      }), (0, l.jsx)("div", {
        className: m.yF
      }), v.map((e, t) => (0, l.jsx)(x, {
        choice: e,
        index: t,
        onChange: e => {
          let n, l;
          return null != C && O(null), (n = e.replace(/(\r\n|\n|\r)/g, " ")).length > g.yR && (n = n.slice(0, g.yR)), void((l = [...v])[t] = n, _(l))
        },
        onClear: () => {
          let e;
          return null != C && O(null), void _(0 === (e = [...v.slice(0, t), ...v.slice(t + 1)]).length ? [""] : e)
        },
        onReorder: I,
        isDropHovered: t === w
      }, "choice-".concat(t))), v.length !== g.Hz && (0, l.jsx)("div", {
        className: m.C5,
        children: (0, l.jsxs)(u.DUT, {
          className: m.bK,
          onClick: () => {
            null != C && O(null), v.length !== g.Hz && _([...v, ""])
          },
          children: [(0, l.jsx)(u.U1e, {
            size: "custom",
            height: 17,
            width: 17,
            color: s.A.unsafe_rawColors.BLUE_345.css
          }), (0, l.jsx)(u.Text, {
            color: "text-link",
            variant: "text-md/normal",
            children: f.intl.string(f.t.sVfx9r)
          })]
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
    }), i))
  }