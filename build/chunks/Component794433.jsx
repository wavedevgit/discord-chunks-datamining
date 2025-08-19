/** Chunk was on 88360 **/
/** chunk id: 794433, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  F: () => b,
  Z: () => m
}), require("./539854.js"), require("./388685.js");
var r, l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk599684 = require("./599684.js");

function _(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let g = Object.freeze({
  SMALL: Chunk599684.small,
  MEDIUM: Chunk599684.medium,
  LARGE: Chunk599684.large
});
var b = ((l = {}).MEMBER = "MEMBER", l.ROLE = "ROLE", l.CHANNEL = "CHANNEL", l.GUILD = "GUILD", l.USER = "USER", l);
class f extends(r = Chunk647438.Component) {
  componentDidMount() {
    let e = this.containerRef.current;
    null != module && (this.previousHeight = module.offsetHeight)
  }
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: a
    } = this.props;
    t && !e.isReady && a && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange()
  }
  handleHeightChange() {
    let e = this.containerRef.current;
    if (null == module) return;
    let t = module.offsetHeight,
      a = exports - this.previousHeight;
    if (0 !== require) {
      var r, l;
      this.previousHeight = exports, null == (r = (l = this.props).onHeightChange) || r.call(l, require)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: a,
      sections: r,
      query: l,
      tags: n,
      onSelectionChange: o,
      onSelect: i,
      onRemoveTag: s,
      preventEscapePropagation: c
    } = this.props;
    if (0 !== r.length) {
      switch (e.keyCode) {
        case u.yXg.BACKSPACE:
          (null == l || 0 === l.length) && null != n && n.length > 0 && (e.preventDefault(), e.stopPropagation(), null == s || s(n.length - 1));
          break;
        case u.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), false === t ? (t = 0, a = 0) : ((t += 1) >= r.length && (t = r.length - 1), a >= r[t] && (a = r[t] - 1));
          break;
        case u.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, a = 0) : a >= r[t] && (a = r[t] - 1);
          break;
        case u.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (a -= 1) < 0 && ((t -= 1) >= 0 ? a = r[t] - 1 : t < 0 && (t = 0, a = 0));
          break;
        case u.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), (a += 1) >= r[t] && (a = 0, (t += 1) >= r.length && (t = r.length - 1, a = r[t] - 1));
          break;
        case u.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), false === t && (t = 0), false === a && (a = 0), t >= r.length || a >= r[t]) return;
          null != i && i(t, a, e);
          return;
        case u.yXg.ESCAPE:
          e.preventDefault(), c && e.stopPropagation(), null != i && i(null, null, e);
          return;
        default:
          return
      }
      null != o && o(t, a)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: a,
      selectedRow: r,
      onSelect: l,
      onSelectionChange: n,
      query: o,
      tags: i,
      preventEscapePropagation: s
    } = this.props, {
      current: c
    } = this.ref;
    if (null != c) switch (e.keyCode) {
      case u.yXg.BACKSPACE:
        if ((null == o || 0 === o.length) && null != i && i.length > 0) {
          var d, h;
          e.preventDefault(), e.stopPropagation(), null == (d = (h = this.props).onRemoveTag) || d.call(h, i.length - 1)
        }
        break;
      case u.yXg.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > a && ++r >= t[a] && (++a >= t.length && (a = 0), r = 0), null == n || n(a, r);
        break;
      case u.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --r < 0 && (--a < 0 && (a = t.length - 1), r = t[a] - 1), null == n || n(a, r);
        break;
      case u.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > a && t[a] > r && (null == l || l(a, r, e));
        break;
      case u.yXg.ESCAPE:
        e.preventDefault(), s && e.stopPropagation(), null == l || l(null, null, e), c.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: a = Chunk388032.intl.string(Chunk388032.t.LzcpeX),
      themeOverride: r,
      disabled: l,
      size: o,
      maxHeight: i,
      tags: u,
      onActivate: g,
      className: b,
      inputProps: f,
      focusAfterReady: m
    } = this.props, E = false, y = [];
    return null != Chunk981631 && Chunk981631.length > 0 && ("string" == typeof Chunk981631[0] ? Chunk981631.forEach((e, t) => y.push((0, n.jsxs)(c.eee, {
      focusProps: {
        offset: 4
      },
      className: p.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, n.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: p.close,
        "aria-label": h.intl.string(h.t.N86XcH)
      })]
    }, t))) : (E = true, Chunk981631.forEach((e, t) => y.push((0, n.jsxs)(c.eee, {
      className: s()(p.tag, p.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, n.jsx)(c.qEK, {
        src: e.avatar,
        "aria-hidden": true,
        size: c.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, n.jsx)("span", {
        className: p.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, n.jsx)(d.Z, {
        guild: e.guild,
        active: true,
        size: d.Z.Sizes.SMOL
      }), (0, n.jsx)("span", {
        className: p.tagLabel,
        children: e.label
      }), (0, n.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: p.close,
        "aria-label": h.intl.string(h.t.N86XcH)
      })]
    }, t))))), (0, Chunk951288.jsx)(Chunk481060.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, Chunk951288.jsx)(Chunk481060.f6W, {
        theme: r,
        children: r => (0, n.jsx)("div", {
          ref: this.containerRef,
          className: s()(b, p.container, o, r, {
            [p.disabled]: l
          }),
          children: (0, n.jsxs)(c.zJl, {
            className: p.inner,
            style: {
              maxHeight: i
            },
            children: [y, (0, n.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(a, e).enumerable
                }))), r.forEach(function(t) {
                  _(e, t, a[t])
                })
              }
              return e
            }({
              className: s()(p.input, {
                [p.richTagInput]: E
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: a,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: l,
              "aria-disabled": l,
              autoFocus: !m && e,
              onMouseDown: g
            }, this.defaultInputProps, f))]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), _(this, "ref", o.createRef()), _(this, "containerRef", o.createRef()), _(this, "previousHeight", 0), _(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: a,
        onQueryChange: r,
        useKeyboardNavigation: l
      } = this.props;
      null != a && a(e);
      let {
        current: n
      } = this.ref;
      if (null == n || null != t) {
        e.keyCode !== u.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === u.yXg.ESCAPE && null != n.value && "" !== n.value && n.value.length > 0) {
        n.value = "", null != r && r("");
        return
      }
      l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), _(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), _(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), _(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), _(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
_(f, "Sizes", g), _(f, "defaultProps", {
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
let m = f