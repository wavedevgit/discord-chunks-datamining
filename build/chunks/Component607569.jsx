/** Chunk was on 94064 **/
/** chunk id: 607569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk692992 = require("./692992.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk915509 = require("./915509.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk386305 = require("./386305.js");
let x = "MULTIPLE_CHOICE",
  y = e => {
    let {
      choice: t,
      index: n,
      onChange: a,
      onClear: s,
      onReorder: u,
      isDropHovered: b
    } = e, g = l.useRef(null), m = l.useRef(null), [, y, j] = (0, o.c)({
      type: x,
      item: {
        choice: t,
        index: n
      },
      end: (e, t) => {
        null == e || t.didDrop() || u(e.choice, null, true)
      }
    }), [, v] = (0, c.L)({
      accept: x,
      hover: (e, t) => {
        var r;
        let {
          index: l
        } = e, a = null == (r = g.current) ? true : r.getBoundingClientRect(), i = t.getClientOffset();
        if (null == a || null == i) return;
        let o = (a.bottom - a.top) / 2,
          c = i.y - a.top;
        l < n && c < o || l > n && c > o || u(e.choice, n, false)
      },
      drop: e => {
        u(e.choice, n, true)
      }
    });
    return l.useLayoutEffect(() => (y(m), j(v(g)), () => {
      y(null), v(null)
    }), [y, v, j]), (0, r.jsxs)("div", {
      ref: g,
      className: i()(f.draggableInputContainer, {
        [f.dragging]: b
      }),
      "data-dnd-name": t,
      children: [(0, r.jsx)("div", {
        className: f.radioIconEmptyContainer,
        children: (0, r.jsx)(p.Z, {
          height: 20,
          width: 20,
          className: f.radioIconEmpty
        })
      }), (0, r.jsxs)("div", {
        className: f.inputWrapper,
        children: [(0, r.jsx)(d.oil, {
          autoFocus: true,
          onChange: e => a(e),
          placeholder: h.intl.formatToPlainString(h.t["Ep/pbH"], {
            index: n + 1
          }),
          value: t
        }), (0, r.jsx)("div", {
          className: f.clearButton,
          children: (0, r.jsx)(d.hU, {
            icon: d.k$p,
            size: "sm",
            "aria-label": h.intl.string(h.t.VkKicb),
            variant: "icon-only",
            onClick: s
          })
        })]
      }), (0, r.jsx)("div", {
        ref: m,
        className: f.dragContainer,
        "data-dnd-name": t,
        children: (0, r.jsx)(d.Vni, {
          size: "xs",
          color: "currentColor",
          className: f.dragIcon
        })
      })]
    })
  },
  j = function(e) {
    var t, n, a, i;
    let {
      field: o,
      onSave: c,
      onClose: p
    } = e, [x, j] = l.useState(null != (t = null == o ? true : o.label) ? t : ""), [v, C] = l.useState(null != (n = null == o ? true : o.choices) ? n : [""]), [I, O] = l.useState(null), [_, w] = l.useState(null), E = (e, t, n) => {
      if (null == v) return;
      null != I && O(null);
      let r = v.indexOf(e),
        l = [...v];
      null != t && t !== r && (l.splice(r, 1), l.splice(t, 0, e), C(l)), n ? null !== t && w(null) : t !== _ && w(t)
    }, P = async () => {
      null != I && O(null);
      let e = x.trim();
      if ("" === e) return void O(h.intl.string(h.t["G+TI44"]));
      if (0 === v.map(e => e.trim()).filter(e => "" !== e).length) return void O(h.intl.string(h.t.jZoHgI));
      let t = {
        field_type: b.QJ.MULTIPLE_CHOICE,
        label: e,
        choices: v,
        required: true
      };
      try {
        await c(t), p()
      } catch (e) {
        O(new u.Hx(e).getAnyErrorMessage())
      }
    };
    return (0, r.jsxs)(g.Z, (a = function(e) {
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
    }({}, e), i = i = {
      errorText: I,
      title: h.intl.string(h.t.ooKh3m),
      onConfirm: P,
      onCancel: p,
      children: [(0, r.jsx)("div", {
        className: f.spacedItem,
        children: (0, r.jsx)(d.oil, {
          autoFocus: true,
          onChange: e => {
            null != I && O(null);
            let t = e.replace(/(\r\n|\n|\r)/g, " ");
            t.length > m.XN && (t = e.slice(0, m.XN)), j(t)
          },
          placeholder: h.intl.string(h.t.fqVmbL),
          value: x
        })
      }), (0, r.jsx)("div", {
        className: f.divider
      }), v.map((e, t) => (0, r.jsx)(y, {
        choice: e,
        index: t,
        onChange: e => ((e, t) => {
          null != I && O(null);
          let n = e.replace(/(\r\n|\n|\r)/g, " ");
          n.length > m.au && (n = n.slice(0, m.au));
          let r = [...v];
          r[t] = n, C(r)
        })(e, t),
        onClear: () => (e => {
          null != I && O(null);
          let t = [...v.slice(0, e), ...v.slice(e + 1)];
          C(0 === t.length ? [""] : t)
        })(t),
        onReorder: E,
        isDropHovered: t === _
      }, "choice-".concat(t))), v.length !== m.mb && (0, r.jsx)("div", {
        className: f.addItemContainer,
        children: (0, r.jsxs)(d.P3F, {
          className: f.addItemButton,
          onClick: () => {
            null != I && O(null), v.length !== m.mb && C([...v, ""])
          },
          children: [(0, r.jsx)(d.oFk, {
            size: "custom",
            height: 17,
            width: 17,
            color: s.Z.unsafe_rawColors.BLUE_345.css
          }), (0, r.jsx)(d.Text, {
            color: "text-link",
            variant: "text-md/normal",
            children: h.intl.string(h.t.sVfx9r)
          })]
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
    }), a))
  }