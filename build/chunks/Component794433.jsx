/** Chunk was on 71099 **/
/** chunk id: 794433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => g,
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var l, a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979322 = require("./979322.js");

function f(e, t, n) {
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
var g = ((a = {}).MEMBER = "MEMBER", a.ROLE = "ROLE", a.CHANNEL = "CHANNEL", a.USER = "USER", a);
class b extends(l = Chunk473749.Component) {
  componentDidMount() {
    let e = this.containerRef.current;
    null != e && (this.previousHeight = e.offsetHeight)
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
    if (null == e) return;
    let t = e.offsetHeight,
      n = t - this.previousHeight;
    if (0 !== n) {
      var l, a;
      this.previousHeight = t, null == (l = (a = this.props).onHeightChange) || l.call(a, n)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: n,
      sections: l,
      query: a,
      tags: r,
      onSelectionChange: o,
      onSelect: s,
      onRemoveTag: i,
      preventEscapePropagation: c
    } = this.props;
    if (0 !== l.length) {
      switch (e.key) {
        case u.vn.BACKSPACE:
          (null == a || 0 === a.length) && null != r && r.length > 0 && (e.preventDefault(), e.stopPropagation(), null == i || i(r.length - 1));
          break;
        case u.vn.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), false === t ? (t = 0, n = 0) : ((t += 1) >= l.length && (t = l.length - 1), n >= l[t] && (n = l[t] - 1));
          break;
        case u.vn.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= l[t] && (n = l[t] - 1);
          break;
        case u.vn.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = l[t] - 1 : t < 0 && (t = 0, n = 0));
          break;
        case u.vn.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (n += 1) >= l[t] && (n = 0, (t += 1) >= l.length && (t = l.length - 1, n = l[t] - 1));
          break;
        case u.vn.ENTER:
          if (e.preventDefault(), e.stopPropagation(), false === t && (t = 0), false === n && (n = 0), t >= l.length || n >= l[t]) return;
          null != s && s(t, n, e);
          return;
        case u.vn.ESCAPE:
          e.preventDefault(), c && e.stopPropagation(), null != s && s(null, null, e);
          return;
        default:
          return
      }
      null != o && o(t, n)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: n,
      selectedRow: l,
      onSelect: a,
      onSelectionChange: r,
      query: o,
      tags: s,
      preventEscapePropagation: i
    } = this.props, {
      current: c
    } = this.ref;
    if (null != c) switch (e.key) {
      case u.vn.BACKSPACE:
        if ((null == o || 0 === o.length) && null != s && s.length > 0) {
          var h, p;
          e.preventDefault(), e.stopPropagation(), null == (h = (p = this.props).onRemoveTag) || h.call(p, s.length - 1)
        }
        break;
      case u.vn.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > n && ++l >= t[n] && (++n >= t.length && (n = 0), l = 0), null == r || r(n, l);
        break;
      case u.vn.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --l < 0 && (--n < 0 && (n = t.length - 1), l = t[n] - 1), null == r || r(n, l);
        break;
      case u.vn.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > l && (null == a || a(n, l, e));
        break;
      case u.vn.ESCAPE:
        e.preventDefault(), i && e.stopPropagation(), null == a || a(null, null, e), c.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: n = h.intl.string(h.t.LzcpeZ),
      themeOverride: l,
      disabled: a,
      size: o,
      maxHeight: s,
      tags: u,
      onActivate: d,
      className: g,
      inputProps: b,
      focusAfterReady: v
    } = this.props, R = false, E = [];
    return null != u && u.length > 0 && ("string" == typeof u[0] ? u.forEach((e, t) => E.push((0, r.jsxs)(c.eee, {
      focusProps: {
        offset: 4
      },
      className: p.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, r.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: p.close,
        "aria-label": h.intl.string(h.t.N86XcP)
      })]
    }, t))) : (R = true, u.forEach((e, t) => E.push((0, r.jsxs)(c.eee, {
      className: i()(p.tag, p.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, r.jsx)(c.qEK, {
        src: e.avatar,
        "aria-hidden": true,
        size: c.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, r.jsx)("span", {
        className: p.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), (0, r.jsx)("span", {
        className: p.tagLabel,
        children: e.label
      }), (0, r.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: p.close,
        "aria-label": h.intl.string(h.t.N86XcP)
      })]
    }, t))))), (0, r.jsx)(c.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, r.jsx)(c.f6W, {
        theme: l,
        children: l => (0, r.jsx)("div", {
          ref: this.containerRef,
          className: i()(g, p.container, o, l, {
            [p.disabled]: a
          }),
          children: (0, r.jsxs)(c.zJl, {
            className: p.inner,
            style: {
              maxHeight: s
            },
            children: [E, (0, r.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                  f(e, t, n[t])
                })
              }
              return e
            }({
              className: i()(p.input, {
                [p.richTagInput]: R
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: n,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: a,
              "aria-disabled": a,
              autoFocus: !v && e,
              onMouseDown: d
            }, this.defaultInputProps, b))]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), f(this, "ref", o.createRef()), f(this, "containerRef", o.createRef()), f(this, "previousHeight", 0), f(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: n,
        onQueryChange: l,
        useKeyboardNavigation: a
      } = this.props;
      null != n && n(e);
      let {
        current: r
      } = this.ref;
      if (null == r || null != t) {
        e.key !== u.vn.TAB && (null == t || t(e));
        return
      }
      if (e.key === u.vn.ESCAPE && null != r.value && "" !== r.value && r.value.length > 0) {
        r.value = "", null != l && l("");
        return
      }
      a && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), f(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), f(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), f(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), f(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
f(b, "Sizes", d), f(b, "defaultProps", {
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
let v = b