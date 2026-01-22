/** Chunk was on 52981 **/
/** chunk id: 520660, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk744818 = require("./744818.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk44234 = require("./44234.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk242273 = require("./242273.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk285553 = require("./285553.js");
let x = "MULTIPLE_CHOICE",
  y = e => {
    let {
      choice: t,
      index: l,
      onChange: i,
      onClear: o,
      onReorder: d,
      isDropHovered: b
    } = e, h = r.useRef(null), p = r.useRef(null), [, y, j] = (0, a.i)({
      type: x,
      item: {
        choice: t,
        index: l
      },
      end: (e, t) => {
        null == e || t.didDrop() || d(e.choice, null, true)
      }
    }), [, v] = (0, s.H)({
      accept: x,
      hover: (e, t) => {
        var n;
        let {
          index: r
        } = e, i = null == (n = h.current) ? true : n.getBoundingClientRect(), c = t.getClientOffset();
        if (null == i || null == c) return;
        let a = (i.bottom - i.top) / 2,
          s = c.y - i.top;
        r < l && s < a || r > l && s > a || d(e.choice, l, false)
      },
      drop: e => {
        d(e.choice, l, true)
      }
    });
    return r.useLayoutEffect(() => (y(p), j(v(h)), () => {
      y(null), v(null)
    }), [y, v, j]), (0, n.jsxs)("div", {
      ref: h,
      className: c()(m.XQ, {
        [m.cB]: b
      }),
      "data-dnd-name": t,
      children: [(0, n.jsx)("div", {
        className: m.R6,
        children: (0, n.jsx)(f.A, {
          height: 20,
          width: 20,
          className: m.IC
        })
      }), (0, n.jsxs)("div", {
        className: m.I6,
        children: [(0, n.jsx)(u.ksK, {
          autoFocus: true,
          onChange: e => i(e),
          placeholder: g.intl.formatToPlainString(g.t["Ep/pbH"], {
            index: l + 1
          }),
          value: t
        }), (0, n.jsx)("div", {
          className: m.mt,
          children: (0, n.jsx)(u.K0, {
            icon: u.aXh,
            size: "sm",
            "aria-label": g.intl.string(g.t.VkKicb),
            variant: "icon-only",
            onClick: o
          })
        })]
      }), (0, n.jsx)("div", {
        ref: p,
        className: m.cK,
        "data-dnd-name": t,
        children: (0, n.jsx)(u.WP0, {
          size: "xs",
          color: "currentColor",
          className: m.co
        })
      })]
    })
  },
  j = function(e) {
    var t, l, i, c;
    let {
      field: a,
      onSave: s,
      onClose: f
    } = e, [x, j] = r.useState(null != (t = null == a ? true : a.label) ? t : ""), [v, C] = r.useState(null != (l = null == a ? true : a.choices) ? l : [""]), [O, w] = r.useState(null), [k, P] = r.useState(null), _ = (e, t, l) => {
      if (null == v) return;
      null != O && w(null);
      let n = v.indexOf(e),
        r = [...v];
      null != t && t !== n && (r.splice(n, 1), r.splice(t, 0, e), C(r)), l ? null !== t && P(null) : t !== k && P(t)
    }, E = async () => {
      null != O && w(null);
      let e = x.trim();
      if ("" === e) return void w(g.intl.string(g.t["G+TI44"]));
      if (0 === v.map(e => e.trim()).filter(e => "" !== e).length) return void w(g.intl.string(g.t.jZoHgI));
      let t = {
        field_type: b.rX.MULTIPLE_CHOICE,
        label: e,
        choices: v,
        required: true
      };
      try {
        await s(t), f()
      } catch (e) {
        w(new d.LG(e).getAnyErrorMessage())
      }
    };
    return (0, n.jsxs)(h.A, (i = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = l[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e), c = c = {
      errorText: O,
      title: g.intl.string(g.t.ooKh3m),
      onConfirm: E,
      onCancel: f,
      children: [(0, n.jsx)("div", {
        className: m.Ef,
        children: (0, n.jsx)(u.ksK, {
          autoFocus: true,
          onChange: e => {
            null != O && w(null);
            let t = e.replace(/(\r\n|\n|\r)/g, " ");
            t.length > p.Ty && (t = e.slice(0, p.Ty)), j(t)
          },
          placeholder: g.intl.string(g.t.fqVmbL),
          value: x
        })
      }), (0, n.jsx)("div", {
        className: m.yF
      }), v.map((e, t) => (0, n.jsx)(y, {
        choice: e,
        index: t,
        onChange: e => {
          let l, n;
          return null != O && w(null), (l = e.replace(/(\r\n|\n|\r)/g, " ")).length > p.yR && (l = l.slice(0, p.yR)), void((n = [...v])[t] = l, C(n))
        },
        onClear: () => {
          let e;
          return null != O && w(null), void C(0 === (e = [...v.slice(0, t), ...v.slice(t + 1)]).length ? [""] : e)
        },
        onReorder: _,
        isDropHovered: t === k
      }, "choice-".concat(t))), v.length !== p.Hz && (0, n.jsx)("div", {
        className: m.C5,
        children: (0, n.jsxs)(u.DUT, {
          className: m.bK,
          onClick: () => {
            null != O && w(null), v.length !== p.Hz && C([...v, ""])
          },
          children: [(0, n.jsx)(u.U1e, {
            size: "custom",
            height: 17,
            width: 17,
            color: o.A.unsafe_rawColors.BLUE_345.css
          }), (0, n.jsx)(u.Text, {
            color: "text-link",
            variant: "text-md/normal",
            children: g.intl.string(g.t.sVfx9r)
          })]
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        l.push.apply(l, n)
      }
      return l
    })(Object(c)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
    }), i))
  }