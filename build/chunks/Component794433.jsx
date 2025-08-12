/** Chunk was on web.js **/
/** chunk id: 794433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => m,
  Z: () => E
}), require("./539854.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk145797 = require("./145797.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = Object.freeze({
  SMALL: Chunk145797.small,
  MEDIUM: Chunk145797.medium,
  LARGE: Chunk145797.large
});
var m = function(e) {
  return e.MEMBER = "MEMBER", e.ROLE = "ROLE", e.CHANNEL = "CHANNEL", e.GUILD = "GUILD", e.USER = "USER", e
}({});
class g extends(r = Chunk73800.Component) {
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
      var r, i;
      this.previousHeight = exports, null == (r = (i = this.props).onHeightChange) || r.call(Chunk255367, require)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: n,
      sections: r,
      query: i,
      tags: o,
      onSelectionChange: a,
      onSelect: s,
      onRemoveTag: l,
      preventEscapePropagation: c
    } = this.props;
    if (0 !== r.length) {
      switch (e.keyCode) {
        case u.yXg.BACKSPACE:
          (null == i || 0 === i.length) && null != o && o.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(o.length - 1));
          break;
        case u.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), false === t ? (t = 0, n = 0) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
          break;
        case u.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), t -= 1, t < 0 ? (t = 0, n = 0) : n >= r[t] && (n = r[t] - 1);
          break;
        case u.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), n -= 1, n < 0 && ((t -= 1) >= 0 ? n = r[t] - 1 : t < 0 && (t = 0, n = 0));
          break;
        case u.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), false === t && (t = 0), n += 1, n >= r[t] && (n = 0, (t += 1) >= r.length && (t = r.length - 1, n = r[t] - 1));
          break;
        case u.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), false === t && (t = 0), false === n && (n = 0), t >= r.length || n >= r[t]) return;
          null != s && s(t, n, e);
          return;
        case u.yXg.ESCAPE:
          e.preventDefault(), c && e.stopPropagation(), null != s && s(null, null, e);
          return;
        default:
          return
      }
      null != a && a(t, n)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: n,
      selectedRow: r,
      onSelect: i,
      onSelectionChange: o,
      query: a,
      tags: s,
      preventEscapePropagation: l
    } = this.props, {
      current: c
    } = this.ref;
    if (null != c) switch (e.keyCode) {
      case u.yXg.BACKSPACE:
        if ((null == a || 0 === a.length) && null != s && s.length > 0) {
          var d, f;
          e.preventDefault(), e.stopPropagation(), null == (d = (f = this.props).onRemoveTag) || d.call(f, s.length - 1)
        }
        break;
      case u.yXg.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), r = 0), null == o || o(n, r);
        break;
      case u.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), r = t[n] - 1), null == o || o(n, r);
        break;
      case u.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == i || i(n, r, e));
        break;
      case u.yXg.ESCAPE:
        e.preventDefault(), l && e.stopPropagation(), null == i || i(null, null, e), c.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: n = Chunk388032.intl.string(Chunk388032.t.LzcpeX),
      themeOverride: r,
      disabled: o,
      size: a,
      maxHeight: u,
      tags: _,
      onActivate: h,
      className: m,
      inputProps: g,
      focusAfterReady: E
    } = this.props, b = false, y = [];
    return null != _ && _.length > 0 && ("string" == typeof _[0] ? _.forEach((e, t) => y.push((0, i.jsxs)(l.eee, {
      focusProps: {
        offset: 4
      },
      className: f.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, i.jsx)(l.Dio, {
        size: "md",
        color: "currentColor",
        className: f.close,
        "aria-label": d.intl.string(d.t.N86XcH)
      })]
    }, t))) : (b = true, _.forEach((e, t) => y.push((0, i.jsxs)(l.eee, {
      className: s()(f.tag, f.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, i.jsx)(l.qEK, {
        src: e.avatar,
        "aria-hidden": true,
        size: l.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, i.jsx)("span", {
        className: f.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, i.jsx)(c.Z, {
        guild: e.guild,
        active: true,
        size: c.Z.Sizes.SMOL
      }), (0, i.jsx)("span", {
        className: f.tagLabel,
        children: e.label
      }), (0, i.jsx)(l.Dio, {
        size: "md",
        color: "currentColor",
        className: f.close,
        "aria-label": d.intl.string(d.t.N86XcH)
      })]
    }, t))))), (0, Chunk255367.jsx)(Chunk481060.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, Chunk255367.jsx)(Chunk481060.f6W, {
        theme: r,
        children: r => (0, i.jsx)("div", {
          ref: this.containerRef,
          className: s()(m, f.container, a, r, {
            [f.disabled]: o
          }),
          children: (0, i.jsxs)(l.zJl, {
            className: f.inner,
            style: {
              maxHeight: u
            },
            children: [y, (0, i.jsx)("input", p({
              className: s()(f.input, {
                [f.richTagInput]: b
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: n,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: o,
              "aria-disabled": o,
              autoFocus: !E && e,
              onMouseDown: h
            }, this.defaultInputProps, g))]
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
        onKeyDown: n,
        onQueryChange: r,
        useKeyboardNavigation: i
      } = this.props;
      null != n && n(e);
      let {
        current: o
      } = this.ref;
      if (null == o || null != t) {
        e.keyCode !== u.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === u.yXg.ESCAPE && null != o.value && "" !== o.value && o.value.length > 0) {
        o.value = "", null != r && r("");
        return
      }
      i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
_(g, "Sizes", h), _(g, "defaultProps", {
  size: h.SMALL,
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
let E = g