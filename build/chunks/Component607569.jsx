/** Chunk was on 94064 **/
/** chunk id: 607569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk562075 = require("./562075.js"),
  Chunk539202 = require("./539202.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk915509 = require("./915509.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1904 = require("./1904.js");
let y = "MULTIPLE_CHOICE",
  v = e => {
    let {
      choice: t,
      index: n,
      onChange: a,
      onClear: s,
      onReorder: p,
      isDropHovered: m
    } = e, b = l.useRef(null), h = l.useRef(null), [, v, j] = (0, o.c)({
      type: y,
      item: {
        choice: t,
        index: n
      },
      end: (e, t) => {
        null == e || t.didDrop() || p(e.choice, null, true)
      }
    }), [, C] = (0, c.L)({
      accept: y,
      hover: (e, t) => {
        var r;
        let {
          index: l
        } = e, a = null == (r = b.current) ? true : r.getBoundingClientRect(), i = t.getClientOffset();
        if (null == a || null == i) return;
        let o = (a.bottom - a.top) / 2,
          c = i.y - a.top;
        l < n && c < o || l > n && c > o || p(e.choice, n, false)
      },
      drop: e => {
        p(e.choice, n, true)
      }
    });
    return l.useLayoutEffect(() => (v(h), j(C(b)), () => {
      v(null), C(null)
    }), [v, C, j]), (0, r.jsxs)("div", {
      ref: b,
      className: i()(x.draggableInputContainer, {
        [x.dragging]: m
      }),
      "data-dnd-name": t,
      children: [(0, r.jsx)("div", {
        className: x.radioIconEmptyContainer,
        children: (0, r.jsx)(g.Z, {
          height: 20,
          width: 20,
          className: x.radioIconEmpty
        })
      }), (0, r.jsxs)("div", {
        className: x.inputWrapper,
        children: [(0, r.jsx)(u.Is, {
          autoFocus: true,
          onChange: e => a(e),
          placeholder: f.intl.formatToPlainString(f.t["Ep/pbG"], {
            index: n + 1
          }),
          value: t
        }), (0, r.jsx)("div", {
          className: x.clearButton,
          children: (0, r.jsx)(d.hU, {
            icon: d.k$p,
            size: "sm",
            "aria-label": f.intl.string(f.t.VkKicX),
            variant: "icon-only",
            onClick: s
          })
        })]
      }), (0, r.jsx)("div", {
        ref: h,
        className: x.dragContainer,
        "data-dnd-name": t,
        children: (0, r.jsx)(d.Vni, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      })]
    })
  },
  j = function(e) {
    var t, n, a, i;
    let {
      field: o,
      onSave: c,
      onClose: g
    } = e, [y, j] = l.useState(null != (t = null == o ? true : o.label) ? t : ""), [C, _] = l.useState(null != (n = null == o ? true : o.choices) ? n : [""]), [I, O] = l.useState(null), [w, E] = l.useState(null), P = (e, t, n) => {
      if (null == C) return;
      null != I && O(null);
      let r = C.indexOf(e),
        l = [...C];
      null != t && t !== r && (l.splice(r, 1), l.splice(t, 0, e), _(l)), n ? null !== t && E(null) : t !== w && E(t)
    }, k = async () => {
      null != I && O(null);
      let e = y.trim();
      if ("" === e) return void O(f.intl.string(f.t["G+TI4+"]));
      if (0 === C.map(e => e.trim()).filter(e => "" !== e).length) return void O(f.intl.string(f.t.jZoHgI));
      let t = {
        field_type: m.QJ.MULTIPLE_CHOICE,
        label: e,
        choices: C,
        required: true
      };
      try {
        await c(t), g()
      } catch (e) {
        O(new p.Hx(e).getAnyErrorMessage())
      }
    };
    return (0, r.jsxs)(b.Z, (a = function(e) {
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
      title: f.intl.string(f.t.ooKh3t),
      onConfirm: k,
      onCancel: g,
      children: [(0, r.jsx)(u.Is, {
        autoFocus: true,
        className: x.spacedItem,
        onChange: e => {
          null != I && O(null);
          let t = e.replace(/(\r\n|\n|\r)/g, " ");
          t.length > h.XN && (t = e.slice(0, h.XN)), j(t)
        },
        placeholder: f.intl.string(f.t.fqVmbG),
        value: y
      }), (0, r.jsx)("div", {
        className: x.divider
      }), C.map((e, t) => (0, r.jsx)(v, {
        choice: e,
        index: t,
        onChange: e => ((e, t) => {
          null != I && O(null);
          let n = e.replace(/(\r\n|\n|\r)/g, " ");
          n.length > h.au && (n = n.slice(0, h.au));
          let r = [...C];
          r[t] = n, _(r)
        })(e, t),
        onClear: () => (e => {
          null != I && O(null);
          let t = [...C.slice(0, e), ...C.slice(e + 1)];
          _(0 === t.length ? [""] : t)
        })(t),
        onReorder: P,
        isDropHovered: t === w
      }, "choice-".concat(t))), C.length !== h.mb && (0, r.jsx)("div", {
        className: x.addItemContainer,
        children: (0, r.jsxs)(d.P3F, {
          className: x.addItemButton,
          onClick: () => {
            null != I && O(null), C.length !== h.mb && _([...C, ""])
          },
          children: [(0, r.jsx)(d.oFk, {
            size: "custom",
            height: 17,
            width: 17,
            color: s.Z.unsafe_rawColors.BLUE_345.css
          }), (0, r.jsx)(d.Text, {
            color: "text-link",
            variant: "text-md/normal",
            children: f.intl.string(f.t.sVfx9v)
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