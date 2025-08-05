/** Chunk was on 58023 **/
n.d(t, {
  S: () => j,
  Z: () => y
}), n(35282), n(388685);
var r, l = n(255367),
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

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
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
  return (0, l.jsx)(u.f6W, {
    theme: x.BRd.LIGHT,
    children: e => (0, l.jsx)("div", {
      className: s()(h.imageUploaderIcon, t, e),
      children: n
    })
  })
}
class b extends(r = i.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, r, i, {
      image: a,
      hint: o,
      name: c,
      makeURL: v,
      disabled: b,
      onChange: y,
      showIcon: O,
      showIconDisabled: E,
      className: N,
      imageClassName: C,
      iconClassName: I,
      iconWrapperClassName: S,
      icon: T,
      hideSize: P,
      imageStyle: w,
      showRemoveButton: Z,
      maxFileSizeBytes: D,
      onFileSizeError: _,
      onOpenImageSelectModal: R,
      "aria-label": k
    } = this.props;
    if (null != (t = null != a && /^data:/.test(a) ? a : v(a)) ? n = 'url("'.concat(t, '")') : null != c && (r = (0, l.jsx)(u.X6q, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: h.imageUploaderAcronym,
        children: (0, d.Zg)(c)
      })), b) return (0, l.jsx)("div", {
      className: s()(h.imageUploader, h.disabled, N),
      children: (0, l.jsxs)("div", {
        className: s()(h.imageUploaderInner, C),
        style: f(p({}, w), {
          backgroundImage: n
        }),
        children: [r, E && (0, l.jsx)("div", {
          className: s()(h.imageUploaderIcon, h.imageUploaderIconDisabled, I),
          children: T
        })]
      })
    });
    null != a ? i = (0, l.jsx)(u.eee, {
      className: h.removeButton,
      onClick: this.handleRemove,
      children: g.intl.string(g.t.N86XcH)
    }) : P || (i = (0, l.jsx)("small", {
      className: h.sizeInfo,
      children: g.intl.format(g.t.AH4c7e, {
        size: x.IXf
      })
    }));
    let A = null != (e = null != k ? k : o) ? e : g.intl.string(g.t["Ge+94+"]);
    return (0, l.jsxs)("div", {
      className: s()(h.imageUploader, N),
      children: [(0, l.jsx)(u.tEY, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: O ? s()(h.imageUploaderIconWrapper, S) : void 0,
          children: [(0, l.jsxs)("div", {
            className: s()(h.imageUploaderInner, C),
            style: f(p({}, w), {
              backgroundImage: n
            }),
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: r
            }), null != R ? (0, l.jsx)(u.P3F, {
              className: h.imageUploaderFileInput,
              "aria-label": A,
              onClick: R
            }) : (0, l.jsx)(m.ZP, {
              ref: this.inputRef,
              onChange: y,
              className: h.imageUploaderFileInput,
              "aria-label": A,
              tabIndex: 0,
              maxFileSizeBytes: D,
              onFileSizeError: _
            })]
          }), null != o && (0, l.jsx)("div", {
            className: h.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), O && (0, l.jsx)(j, {
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