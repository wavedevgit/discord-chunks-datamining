/** Chunk was on 96812 **/
r.d(t, {
  F: () => S,
  Z: () => h
}), r(539854), r(388685);
var l, n, o = r(255367),
  i = r(73800),
  a = r(120356),
  s = r.n(a),
  u = r(481060),
  c = r(565138),
  d = r(981631),
  E = r(388032),
  f = r(910788);

function _(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let g = Object.freeze({
  SMALL: f.small,
  MEDIUM: f.medium,
  LARGE: f.large
});
var S = ((n = {}).MEMBER = "MEMBER", n.ROLE = "ROLE", n.CHANNEL = "CHANNEL", n.GUILD = "GUILD", n.USER = "USER", n);
class p extends(l = i.Component) {
  componentDidMount() {
    let e = this.containerRef.current;
    null != e && (this.previousHeight = e.offsetHeight)
  }
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: r
    } = this.props;
    t && !e.isReady && r && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange()
  }
  handleHeightChange() {
    let e = this.containerRef.current;
    if (null == e) return;
    let t = e.offsetHeight,
      r = t - this.previousHeight;
    if (0 !== r) {
      var l, n;
      this.previousHeight = t, null == (l = (n = this.props).onHeightChange) || l.call(n, r)
    }
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: r,
      sections: l,
      query: n,
      tags: o,
      onSelectionChange: i,
      onSelect: a,
      onRemoveTag: s,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== l.length) {
      switch (e.keyCode) {
        case d.yXg.BACKSPACE:
          (null == n || 0 === n.length) && null != o && o.length > 0 && (e.preventDefault(), e.stopPropagation(), null == s || s(o.length - 1));
          break;
        case d.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, r = 0) : ((t += 1) >= l.length && (t = l.length - 1), r >= l[t] && (r = l[t] - 1));
          break;
        case d.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, r = 0) : r >= l[t] && (r = l[t] - 1);
          break;
        case d.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (r -= 1) < 0 && ((t -= 1) >= 0 ? r = l[t] - 1 : t < 0 && (t = 0, r = 0));
          break;
        case d.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (r += 1) >= l[t] && (r = 0, (t += 1) >= l.length && (t = l.length - 1, r = l[t] - 1));
          break;
        case d.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === r && (r = 0), t >= l.length || r >= l[t]) return;
          null != a && a(t, r, e);
          return;
        case d.yXg.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != a && a(null, null, e);
          return;
        default:
          return
      }
      null != i && i(t, r)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: r,
      selectedRow: l,
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
        e.preventDefault(), e.stopPropagation(), t.length > r && ++l >= t[r] && (++r >= t.length && (r = 0), l = 0), null == o || o(r, l);
        break;
      case d.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --l < 0 && (--r < 0 && (r = t.length - 1), l = t[r] - 1), null == o || o(r, l);
        break;
      case d.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > r && t[r] > l && (null == n || n(r, l, e));
        break;
      case d.yXg.ESCAPE:
        e.preventDefault(), s && e.stopPropagation(), null == n || n(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: r = E.intl.string(E.t.LzcpeX),
      themeOverride: l,
      disabled: n,
      size: i,
      maxHeight: a,
      tags: d,
      onActivate: g,
      className: S,
      inputProps: p,
      focusAfterReady: h
    } = this.props, I = !1, R = [];
    return null != d && d.length > 0 && ("string" == typeof d[0] ? d.forEach((e, t) => R.push((0, o.jsxs)(u.eee, {
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
    }, t))) : (I = !0, d.forEach((e, t) => R.push((0, o.jsxs)(u.eee, {
      className: s()(f.tag, f.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, o.jsx)(u.qEK, {
        src: e.avatar,
        "aria-hidden": !0,
        size: u.EFr.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, o.jsx)("span", {
        className: f.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, o.jsx)(c.Z, {
        guild: e.guild,
        active: !0,
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
    }, t))))), (0, o.jsx)(u.tEY, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, o.jsx)(u.f6W, {
        theme: l,
        children: l => (0, o.jsx)("div", {
          ref: this.containerRef,
          className: s()(S, f.container, i, l, {
            [f.disabled]: n
          }),
          children: (0, o.jsxs)(u.zJl, {
            className: f.inner,
            style: {
              maxHeight: a
            },
            children: [R, (0, o.jsx)("input", function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), l.forEach(function(t) {
                  _(e, t, r[t])
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
              placeholder: r,
              value: t,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              onFocus: this.handleFocus,
              disabled: n,
              "aria-disabled": n,
              autoFocus: !h && e,
              onMouseDown: g
            }, this.defaultInputProps, p))]
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
    }), _(this, "ref", i.createRef()), _(this, "containerRef", i.createRef()), _(this, "previousHeight", 0), _(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: r,
        onQueryChange: l,
        useKeyboardNavigation: n
      } = this.props;
      null != r && r(e);
      let {
        current: o
      } = this.ref;
      if (null == o || null != t) {
        e.keyCode !== d.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === d.yXg.ESCAPE && null != o.value && "" !== o.value && o.value.length > 0) {
        o.value = "", null != l && l("");
        return
      }
      n && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
_(p, "Sizes", g), _(p, "defaultProps", {
  size: g.SMALL,
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
let h = p