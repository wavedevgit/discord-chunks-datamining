/** Chunk was on 86948 **/
/** chunk id: 794433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => g,
  Z: () => m
}), require("./539854.js"), require("./388685.js");
var r, l, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979322 = require("./979322.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = Object.freeze({
  SMALL: Chunk979322.small,
  MEDIUM: Chunk979322.medium,
  LARGE: Chunk979322.large
});
var g = ((l = {}).MEMBER = "MEMBER", l.ROLE = "ROLE", l.CHANNEL = "CHANNEL", l.USER = "USER", l);
class b extends(r = Chunk473749.Component) {
  componentDidMount() {
    let e = this.containerRef.current;
    null != module && (this.previousHeight = module.offsetHeight)
  }
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: n
    } = this.props;
    t && !e.isReady && n && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange()
  }
  handleHeightChange() {
    let e = this.containerRef.current;
    if (null == module) return;
    let t = module.offsetHeight,
      n = exports - this.previousHeight;
    if (0 !== require) {
      var r, l;
      this.previousHeight = exports, null == (r = (l = this.props).onHeightChange) || r.call(l, require)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: n,
      sections: r,
      query: l,
      tags: a,
      onSelectionChange: s,
      onSelect: i,
      onRemoveTag: o,
      preventEscapePropagation: c
    } = this.props;
    if (0 !== r.length) {
      switch (e.key) {
        case u.vn.BACKSPACE:
          (null == l || 0 === l.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(a.length - 1));
          break;
        case u.vn.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), false === t ? (t = 0, n = 0) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
          break;
        case u.vn.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= r[t] && (n = r[t] - 1);
          break;
        case u.vn.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = r[t] - 1 : t < 0 && (t = 0, n = 0));
          break;
        case u.vn.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (n += 1) >= r[t] && (n = 0, (t += 1) >= r.length && (t = r.length - 1, n = r[t] - 1));
          break;
        case u.vn.ENTER:
          if (e.preventDefault(), e.stopPropagation(), false === t && (t = 0), false === n && (n = 0), t >= r.length || n >= r[t]) return;
          null != i && i(t, n, e);
          return;
        case u.vn.ESCAPE:
          e.preventDefault(), c && e.stopPropagation(), null != i && i(null, null, e);
          return;
        default:
          return
      }
      null != s && s(t, n)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: n,
      selectedRow: r,
      onSelect: l,
      onSelectionChange: a,
      query: s,
      tags: i,
      preventEscapePropagation: o
    } = this.props, {
      current: c
    } = this.ref;
    if (null != c) switch (e.key) {
      case u.vn.BACKSPACE:
        if ((null == s || 0 === s.length) && null != i && i.length > 0) {
          var p, f;
          e.preventDefault(), e.stopPropagation(), null == (p = (f = this.props).onRemoveTag) || p.call(f, i.length - 1)
        }
        break;
      case u.vn.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), r = 0), null == a || a(n, r);
        break;
      case u.vn.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), r = t[n] - 1), null == a || a(n, r);
        break;
      case u.vn.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == l || l(n, r, e));
        break;
      case u.vn.ESCAPE:
        e.preventDefault(), o && e.stopPropagation(), null == l || l(null, null, e), c.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: n = Chunk388032.intl.string(Chunk388032.t.LzcpeZ),
      themeOverride: r,
      disabled: l,
      size: s,
      maxHeight: i,
      tags: u,
      onActivate: d,
      className: g,
      inputProps: b,
      focusAfterReady: m
    } = this.props, v = false, y = [];
    return null != Chunk295907 && Chunk295907.length > 0 && ("string" == typeof Chunk295907[0] ? Chunk295907.forEach((e, t) => y.push((0, a.jsxs)(c.Anchor, {
      focusProps: {
        offset: 4
      },
      className: f.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, a.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: f.close,
        "aria-label": p.intl.string(p.t.N86XcP)
      })]
    }, t))) : (v = true, Chunk295907.forEach((e, t) => y.push((0, a.jsxs)(c.Anchor, {
      className: o()(f.tag, f.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, a.jsx)(c.qEK, {
        src: e.avatar,
        "aria-hidden": true,
        size: c.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, a.jsx)("span", {
        className: f.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), (0, a.jsx)("span", {
        className: f.tagLabel,
        children: e.label
      }), (0, a.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: f.close,
        "aria-label": p.intl.string(p.t.N86XcP)
      })]
    }, t))))), (0, Chunk54381.jsx)(Chunk481060.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, Chunk54381.jsx)(Chunk481060.f6W, {
        theme: r,
        children: r => (0, a.jsx)("div", {
          ref: this.containerRef,
          className: o()(g, f.container, s, r, {
            [f.disabled]: l
          }),
          children: (0, a.jsxs)(c.zJl, {
            className: f.inner,
            style: {
              maxHeight: i
            },
            children: [y, (0, a.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  h(e, t, n[t])
                })
              }
              return e
            }({
              className: o()(f.input, {
                [f.richTagInput]: v
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: n,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: l,
              "aria-disabled": l,
              autoFocus: !m && e,
              onMouseDown: d
            }, this.defaultInputProps, b))]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), h(this, "ref", s.createRef()), h(this, "containerRef", s.createRef()), h(this, "previousHeight", 0), h(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: n,
        onQueryChange: r,
        useKeyboardNavigation: l
      } = this.props;
      null != n && n(e);
      let {
        current: a
      } = this.ref;
      if (null == a || null != t) {
        e.key !== u.vn.TAB && (null == t || t(e));
        return
      }
      if (e.key === u.vn.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
        a.value = "", null != r && r("");
        return
      }
      l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), h(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), h(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), h(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), h(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
h(b, "Sizes", d), h(b, "defaultProps", {
  size: d.SMALL,
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
let m = b