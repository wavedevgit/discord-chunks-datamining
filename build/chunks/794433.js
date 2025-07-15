/** Chunk was on 91398 **/
l.d(t, {
  F: () => f,
  Z: () => P
}), l(539854), l(388685);
var n, s, a = l(255367),
  r = l(73800),
  o = l(120356),
  i = l.n(o),
  u = l(481060),
  h = l(565138),
  c = l(981631),
  p = l(388032),
  g = l(910788);

function E(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let d = Object.freeze({
  SMALL: g.small,
  MEDIUM: g.medium,
  LARGE: g.large
});
var f = ((s = {}).MEMBER = "MEMBER", s.ROLE = "ROLE", s.CHANNEL = "CHANNEL", s.GUILD = "GUILD", s.USER = "USER", s);
class R extends(n = r.Component) {
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
      var n, s;
      this.previousHeight = t, null == (n = (s = this.props).onHeightChange) || n.call(s, l)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: l,
      sections: n,
      query: s,
      tags: a,
      onSelectionChange: r,
      onSelect: o,
      onRemoveTag: i,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== n.length) {
      switch (e.keyCode) {
        case c.yXg.BACKSPACE:
          (null == s || 0 === s.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == i || i(a.length - 1));
          break;
        case c.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, l = 0) : ((t += 1) >= n.length && (t = n.length - 1), l >= n[t] && (l = n[t] - 1));
          break;
        case c.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, l = 0) : l >= n[t] && (l = n[t] - 1);
          break;
        case c.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? l = n[t] - 1 : t < 0 && (t = 0, l = 0));
          break;
        case c.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l += 1) >= n[t] && (l = 0, (t += 1) >= n.length && (t = n.length - 1, l = n[t] - 1));
          break;
        case c.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === l && (l = 0), t >= n.length || l >= n[t]) return;
          null != o && o(t, l, e);
          return;
        case c.yXg.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
          return;
        default:
          return
      }
      null != r && r(t, l)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: l,
      selectedRow: n,
      onSelect: s,
      onSelectionChange: a,
      query: r,
      tags: o,
      preventEscapePropagation: i
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.keyCode) {
      case c.yXg.BACKSPACE:
        if ((null == r || 0 === r.length) && null != o && o.length > 0) {
          var h, p;
          e.preventDefault(), e.stopPropagation(), null == (h = (p = this.props).onRemoveTag) || h.call(p, o.length - 1)
        }
        break;
      case c.yXg.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > l && ++n >= t[l] && (++l >= t.length && (l = 0), n = 0), null == a || a(l, n);
        break;
      case c.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --n < 0 && (--l < 0 && (l = t.length - 1), n = t[l] - 1), null == a || a(l, n);
        break;
      case c.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > l && t[l] > n && (null == s || s(l, n, e));
        break;
      case c.yXg.ESCAPE:
        e.preventDefault(), i && e.stopPropagation(), null == s || s(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: l = p.intl.string(p.t.LzcpeX),
      themeOverride: n,
      disabled: s,
      size: r,
      maxHeight: o,
      tags: c,
      onActivate: d,
      className: f,
      inputProps: R,
      focusAfterReady: P
    } = this.props, A = !1, y = [];
    return null != c && c.length > 0 && ("string" == typeof c[0] ? c.forEach((e, t) => y.push((0, a.jsxs)(u.eee, {
      focusProps: {
        offset: 4
      },
      className: g.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, a.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: g.close,
        "aria-label": p.intl.string(p.t.N86XcH)
      })]
    }, t))) : (A = !0, c.forEach((e, t) => y.push((0, a.jsxs)(u.eee, {
      className: i()(g.tag, g.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, a.jsx)(u.qEK, {
        src: e.avatar,
        "aria-hidden": !0,
        size: u.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, a.jsx)("span", {
        className: g.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, a.jsx)(h.Z, {
        guild: e.guild,
        active: !0,
        size: h.Z.Sizes.SMOL
      }), (0, a.jsx)("span", {
        className: g.tagLabel,
        children: e.label
      }), (0, a.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: g.close,
        "aria-label": p.intl.string(p.t.N86XcH)
      })]
    }, t))))), (0, a.jsx)(u.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, a.jsx)(u.f6W, {
        theme: n,
        children: n => (0, a.jsx)("div", {
          ref: this.containerRef,
          className: i()(f, g.container, r, n, {
            [g.disabled]: s
          }),
          children: (0, a.jsxs)(u.zJl, {
            className: g.inner,
            style: {
              maxHeight: o
            },
            children: [y, (0, a.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(l);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(l, e).enumerable
                }))), n.forEach(function(t) {
                  E(e, t, l[t])
                })
              }
              return e
            }({
              className: i()(g.input, {
                [g.richTagInput]: A
              }),
              type: "text",
              ref: this.ref,
              spellCheck: "false",
              placeholder: l,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: s,
              "aria-disabled": s,
              autoFocus: !P && e,
              onMouseDown: d
            }, this.defaultInputProps, R))]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), E(this, "ref", r.createRef()), E(this, "containerRef", r.createRef()), E(this, "previousHeight", 0), E(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: l,
        onQueryChange: n,
        useKeyboardNavigation: s
      } = this.props;
      null != l && l(e);
      let {
        current: a
      } = this.ref;
      if (null == a || null != t) {
        e.keyCode !== c.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === c.yXg.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
        a.value = "", null != n && n("");
        return
      }
      s && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), E(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), E(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), E(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), E(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
E(R, "Sizes", d), E(R, "defaultProps", {
  size: d.SMALL,
  query: "",
  sections: [],
  selectedSection: 0,
  selectedRow: -1,
  selectedColumn: -1,
  gridResults: !1,
  disabled: !1,
  autoFocus: !1,
  preventEscapePropagation: !0,
  useKeyboardNavigation: !0
});
let P = R