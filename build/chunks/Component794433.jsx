/** Chunk was on 96812 **/
/** chunk id: 794433, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  F: () => g,
  Z: () => h
}), require("./539854.js"), require("./388685.js");
var r, n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk599684 = require("./599684.js");

function S(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = l, e
}
let _ = Object.freeze({
  SMALL: Chunk599684.small,
  MEDIUM: Chunk599684.medium,
  LARGE: Chunk599684.large
});
var g = ((n = {}).MEMBER = "MEMBER", n.ROLE = "ROLE", n.CHANNEL = "CHANNEL", n.GUILD = "GUILD", n.USER = "USER", n);
class p extends(r = Chunk73800.Component) {
  componentDidMount() {
    let e = this.containerRef.current;
    null != module && (this.previousHeight = module.offsetHeight)
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
    if (null == module) return;
    let t = module.offsetHeight,
      l = exports - this.previousHeight;
    if (0 !== require) {
      var r, n;
      this.previousHeight = exports, null == (r = (n = this.props).onHeightChange) || r.call(n, require)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: l,
      sections: r,
      query: n,
      tags: o,
      onSelectionChange: i,
      onSelect: a,
      onRemoveTag: s,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== r.length) {
      switch (e.keyCode) {
        case d.yXg.BACKSPACE:
          (null == n || 0 === n.length) && null != o && o.length > 0 && (e.preventDefault(), e.stopPropagation(), null == s || s(o.length - 1));
          break;
        case d.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), false === t ? (t = 0, l = 0) : ((t += 1) >= r.length && (t = r.length - 1), l >= r[t] && (l = r[t] - 1));
          break;
        case d.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, l = 0) : l >= r[t] && (l = r[t] - 1);
          break;
        case d.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? l = r[t] - 1 : t < 0 && (t = 0, l = 0));
          break;
        case d.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (l += 1) >= r[t] && (l = 0, (t += 1) >= r.length && (t = r.length - 1, l = r[t] - 1));
          break;
        case d.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), false === t && (t = 0), false === l && (l = 0), t >= r.length || l >= r[t]) return;
          null != a && a(t, l, e);
          return;
        case d.yXg.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != a && a(null, null, e);
          return;
        default:
          return
      }
      null != i && i(t, l)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: l,
      selectedRow: r,
      onSelect: n,
      onSelectionChange: o,
      query: i,
      tags: a,
      preventEscapePropagation: s
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.keyCode) {
      case d.yXg.BACKSPACE:
        if ((null == i || 0 === i.length) && null != a && a.length > 0) {
          var c, E;
          e.preventDefault(), e.stopPropagation(), null == (c = (E = this.props).onRemoveTag) || c.call(E, a.length - 1)
        }
        break;
      case d.yXg.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > l && ++r >= t[l] && (++l >= t.length && (l = 0), r = 0), null == o || o(l, r);
        break;
      case d.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --r < 0 && (--l < 0 && (l = t.length - 1), r = t[l] - 1), null == o || o(l, r);
        break;
      case d.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > l && t[l] > r && (null == n || n(l, r, e));
        break;
      case d.yXg.ESCAPE:
        e.preventDefault(), s && e.stopPropagation(), null == n || n(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: l = Chunk388032.intl.string(Chunk388032.t.LzcpeX),
      themeOverride: r,
      disabled: n,
      size: i,
      maxHeight: a,
      tags: d,
      onActivate: _,
      className: g,
      inputProps: p,
      focusAfterReady: h
    } = this.props, I = false, R = [];
    return null != Chunk981631 && Chunk981631.length > 0 && ("string" == typeof Chunk981631[0] ? Chunk981631.forEach((e, t) => R.push((0, o.jsxs)(u.eee, {
      focusProps: {
        offset: 4
      },
      className: f.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, o.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: f.close,
        "aria-label": E.intl.string(E.t.N86XcH)
      })]
    }, t))) : (I = true, Chunk981631.forEach((e, t) => R.push((0, o.jsxs)(u.eee, {
      className: s()(f.tag, f.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, o.jsx)(u.qEK, {
        src: e.avatar,
        "aria-hidden": true,
        size: u.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, o.jsx)("span", {
        className: f.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, o.jsx)(c.Z, {
        guild: e.guild,
        active: true,
        size: c.Z.Sizes.SMOL
      }), (0, o.jsx)("span", {
        className: f.tagLabel,
        children: e.label
      }), (0, o.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: f.close,
        "aria-label": E.intl.string(E.t.N86XcH)
      })]
    }, t))))), (0, Chunk255367.jsx)(Chunk481060.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, Chunk255367.jsx)(Chunk481060.f6W, {
        theme: r,
        children: r => (0, o.jsx)("div", {
          ref: this.containerRef,
          className: s()(g, f.container, i, r, {
            [f.disabled]: n
          }),
          children: (0, o.jsxs)(u.zJl, {
            className: f.inner,
            style: {
              maxHeight: a
            },
            children: [R, (0, o.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(l);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(l, e).enumerable
                }))), r.forEach(function(t) {
                  S(e, t, l[t])
                })
              }
              return e
            }({
              className: s()(f.input, {
                [f.richTagInput]: I
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: l,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: n,
              "aria-disabled": n,
              autoFocus: !h && e,
              onMouseDown: _
            }, this.defaultInputProps, p))]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), S(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), S(this, "ref", i.createRef()), S(this, "containerRef", i.createRef()), S(this, "previousHeight", 0), S(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: l,
        onQueryChange: r,
        useKeyboardNavigation: n
      } = this.props;
      null != l && l(e);
      let {
        current: o
      } = this.ref;
      if (null == o || null != t) {
        e.keyCode !== d.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === d.yXg.ESCAPE && null != o.value && "" !== o.value && o.value.length > 0) {
        o.value = "", null != r && r("");
        return
      }
      n && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), S(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), S(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), S(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), S(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
S(p, "Sizes", _), S(p, "defaultProps", {
  size: _.SMALL,
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
let h = p