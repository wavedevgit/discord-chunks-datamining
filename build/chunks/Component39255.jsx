/** Chunk was on 84497 **/
/** chunk id: 39255, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => b,
  _: () => f
}), require("./321073.js"), require("./896048.js");
var n, r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk633175 = require("./633175.js");

function d(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = l, e
}
let g = Object.freeze({
  SMALL: Chunk633175.EX,
  MEDIUM: Chunk633175.Y,
  LARGE: Chunk633175.as
});
var f = ((r = {}).MEMBER = "MEMBER", r.ROLE = "ROLE", r.CHANNEL = "CHANNEL", r.USER = "USER", r);
class _ extends(n = Chunk64700.Component) {
  componentDidMount() {
    let e = this.containerRef.current;
    null != e && (this.previousHeight = e.offsetHeight)
  }
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: l
    } = this.props;
    t && !e.isReady && l && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange()
  }
  handleHeightChange() {
    let e = this.containerRef.current;
    if (null == e) return;
    let t = e.offsetHeight,
      l = t - this.previousHeight;
    if (0 !== l) {
      var n, r;
      this.previousHeight = t, null == (n = (r = this.props).onHeightChange) || n.call(r, l)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: l,
      sections: n,
      query: r,
      tags: a,
      onSelectionChange: s,
      onSelect: o,
      onRemoveTag: i,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== n.length) {
      switch (e.key) {
        case c.dh.BACKSPACE:
          (null == r || 0 === r.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == i || i(a.length - 1));
          break;
        case c.dh.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), false === t ? (t = 0, l = 0) : ((t += 1) >= n.length && (t = n.length - 1), l >= n[t] && (l = n[t] - 1));
          break;
        case c.dh.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, l = 0) : l >= n[t] && (l = n[t] - 1);
          break;
        case c.dh.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? l = n[t] - 1 : t < 0 && (t = 0, l = 0));
          break;
        case c.dh.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (l += 1) >= n[t] && (l = 0, (t += 1) >= n.length && (t = n.length - 1, l = n[t] - 1));
          break;
        case c.dh.ENTER:
          if (e.preventDefault(), e.stopPropagation(), false === t && (t = 0), false === l && (l = 0), t >= n.length || l >= n[t]) return;
          null != o && o(t, l, e);
          return;
        case c.dh.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
          return;
        default:
          return
      }
      null != s && s(t, l)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: l,
      selectedRow: n,
      onSelect: r,
      onSelectionChange: a,
      query: s,
      tags: o,
      preventEscapePropagation: i
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.key) {
      case c.dh.BACKSPACE:
        if ((null == s || 0 === s.length) && null != o && o.length > 0) {
          var h, p;
          e.preventDefault(), e.stopPropagation(), null == (h = (p = this.props).onRemoveTag) || h.call(p, o.length - 1)
        }
        break;
      case c.dh.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > l && ++n >= t[l] && (++l >= t.length && (l = 0), n = 0), null == a || a(l, n);
        break;
      case c.dh.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --n < 0 && (--l < 0 && (l = t.length - 1), n = t[l] - 1), null == a || a(l, n);
        break;
      case c.dh.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > l && t[l] > n && (null == r || r(l, n, e));
        break;
      case c.dh.ESCAPE:
        e.preventDefault(), i && e.stopPropagation(), null == r || r(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: l = h.intl.string(h.t.LzcpeZ),
      themeOverride: n,
      disabled: r,
      size: s,
      maxHeight: o,
      tags: c,
      onActivate: g,
      className: f,
      inputProps: _,
      focusAfterReady: b
    } = this.props, v = false, E = [];
    return null != c && c.length > 0 && ("string" == typeof c[0] ? c.forEach((e, t) => E.push((0, a.jsxs)(u.MzZ, {
      focusProps: {
        offset: 4
      },
      className: p.Tc,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, a.jsx)(u.PGe, {
        size: "md",
        color: "currentColor",
        className: p.VN,
        "aria-label": h.intl.string(h.t.N86XcP)
      })]
    }, t))) : (v = true, c.forEach((e, t) => E.push((0, a.jsxs)(u.MzZ, {
      className: i()(p.Tc, p.J2),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, a.jsx)(u.euF, {
        src: e.avatar,
        "aria-hidden": true,
        size: u._3J.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, a.jsx)("span", {
        className: p.Mk,
        style: {
          backgroundColor: e.color
        }
      }), (0, a.jsx)("span", {
        className: p.v6,
        children: e.label
      }), (0, a.jsx)(u.PGe, {
        size: "md",
        color: "currentColor",
        className: p.VN,
        "aria-label": h.intl.string(h.t.N86XcP)
      })]
    }, t))))), (0, a.jsx)(u.vN3, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, a.jsx)(u.NPJ, {
        theme: n,
        children: n => (0, a.jsx)("div", {
          ref: this.containerRef,
          className: i()(f, p.kL, s, n, {
            [p.r9]: r
          }),
          children: (0, a.jsxs)(u.IpV, {
            className: p.vW,
            style: {
              maxHeight: o
            },
            children: [E, (0, a.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(l);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(l, e).enumerable
                }))), n.forEach(function(t) {
                  d(e, t, l[t])
                })
              }
              return e
            }({
              className: i()(p.hF, {
                [p.He]: v
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: l,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: r,
              "aria-disabled": r,
              autoFocus: !b && e,
              onMouseDown: g
            }, this.defaultInputProps, _))]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), d(this, "ref", s.createRef()), d(this, "containerRef", s.createRef()), d(this, "previousHeight", 0), d(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: l,
        onQueryChange: n,
        useKeyboardNavigation: r
      } = this.props;
      null != l && l(e);
      let {
        current: a
      } = this.ref;
      if (null == a || null != t) {
        e.key !== c.dh.TAB && (null == t || t(e));
        return
      }
      if (e.key === c.dh.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
        a.value = "", null != n && n("");
        return
      }
      r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), d(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), d(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), d(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), d(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
d(_, "Sizes", g), d(_, "defaultProps", {
  size: g.SMALL,
  query: "",
  sections: [],
  selectedSection: 0,
  selectedRow: false,
  selectedColumn: false,
  gridResults: false,
  disabled: false,
  autoFocus: false,
  preventEscapePropagation: true,
  useKeyboardNavigation: true
});
let b = _