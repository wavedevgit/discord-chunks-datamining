/** Chunk was on 58023 **/
n.d(t, {
  S: () => j,
  Z: () => y
}), n(35282), n(388685);
var l, r = n(255367),
  i = n(73800),
  a = n(120356),
  s = n.n(a),
  o = n(512722),
  c = n.n(o),
  u = n(481060),
  d = n(624138),
  m = n(813197),
  x = n(981631),
  g = n(388032),
  h = n(348563);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, r.jsx)(u.f6W, {
    theme: x.BRd.LIGHT,
    children: e => (0, r.jsx)("div", {
      className: s()(h.imageUploaderIcon, t, e),
      children: n
    })
  })
}
class b extends(l = i.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, l, i, {
      image: a,
      hint: o,
      name: c,
      makeURL: v,
      disabled: b,
      onChange: y,
      showIcon: O,
      showIconDisabled: N,
      className: E,
      imageClassName: C,
      iconClassName: I,
      iconWrapperClassName: S,
      icon: T,
      hideSize: P,
      imageStyle: w,
      showRemoveButton: Z,
      maxFileSizeBytes: k,
      onFileSizeError: _,
      onOpenImageSelectModal: D,
      "aria-label": R
    } = this.props;
    if (null != (t = null != a && /^data:/.test(a) ? a : v(a)) ? n = 'url("'.concat(t, '")') : null != c && (l = (0, r.jsx)(u.X6q, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: h.imageUploaderAcronym,
        children: (0, d.Zg)(c)
      })), b) return (0, r.jsx)("div", {
      className: s()(h.imageUploader, h.disabled, E),
      children: (0, r.jsxs)("div", {
        className: s()(h.imageUploaderInner, C),
        style: p(f({}, w), {
          backgroundImage: n
        }),
        children: [l, N && (0, r.jsx)("div", {
          className: s()(h.imageUploaderIcon, h.imageUploaderIconDisabled, I),
          children: T
        })]
      })
    });
    null != a ? i = (0, r.jsx)(u.eee, {
      className: h.removeButton,
      onClick: this.handleRemove,
      children: g.intl.string(g.t.N86XcH)
    }) : P || (i = (0, r.jsx)("small", {
      className: h.sizeInfo,
      children: g.intl.format(g.t.AH4c7e, {
        size: x.IXf
      })
    }));
    let A = null != (e = null != R ? R : o) ? e : g.intl.string(g.t["Ge+94+"]);
    return (0, r.jsxs)("div", {
      className: s()(h.imageUploader, E),
      children: [(0, r.jsx)(u.tEY, {
        within: !0,
        children: (0, r.jsxs)("div", {
          className: O ? s()(h.imageUploaderIconWrapper, S) : void 0,
          children: [(0, r.jsxs)("div", {
            className: s()(h.imageUploaderInner, C),
            style: p(f({}, w), {
              backgroundImage: n
            }),
            children: [(0, r.jsx)("span", {
              "aria-hidden": !0,
              children: l
            }), null != D ? (0, r.jsx)(u.P3F, {
              className: h.imageUploaderFileInput,
              "aria-label": A,
              onClick: D
            }) : (0, r.jsx)(m.ZP, {
              ref: this.inputRef,
              onChange: y,
              className: h.imageUploaderFileInput,
              "aria-label": A,
              tabIndex: 0,
              maxFileSizeBytes: k,
              onFileSizeError: _
            })]
          }), null != o && (0, r.jsx)("div", {
            className: h.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), O && (0, r.jsx)(j, {
            className: I,
            icon: T
          })]
        })
      }), Z ? i : null]
    })
  }
  constructor(...e) {
    super(...e), v(this, "inputRef", i.createRef()), v(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
v(b, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
});
let y = b