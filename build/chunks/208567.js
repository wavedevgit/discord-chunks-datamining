/** Chunk was on 58023 **/
n.d(t, {
  S: () => j,
  Z: () => b
}), n(301563), n(47120);
var r, l = n(200651),
  i = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(512722),
  c = n.n(o),
  d = n(481060),
  u = n(624138),
  m = n(813197),
  x = n(981631),
  g = n(388032),
  h = n(758013);

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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
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
  return (0, l.jsx)(d.f6W, {
    theme: x.BRd.LIGHT,
    children: e => (0, l.jsx)("div", {
      className: s()(h.imageUploaderIcon, t, e),
      children: n
    })
  })
}
class N extends(r = i.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, r, i;
    let {
      image: a,
      hint: o,
      name: c,
      makeURL: v,
      disabled: N,
      onChange: b,
      showIcon: y,
      showIconDisabled: O,
      className: E,
      imageClassName: C,
      iconClassName: I,
      iconWrapperClassName: S,
      icon: T,
      hideSize: P,
      imageStyle: W,
      showRemoveButton: w,
      maxFileSizeBytes: Z,
      onFileSizeError: k,
      onOpenImageSelectModal: _,
      "aria-label": D
    } = this.props;
    if (null != (t = null != a && /^data:/.test(a) ? a : v(a)) ? n = 'url("'.concat(t, '")') : null != c && (r = (0, l.jsx)(d.X6q, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: h.imageUploaderAcronym,
        children: (0, u.Zg)(c)
      })), N) return (0, l.jsx)("div", {
      className: s()(h.imageUploader, h.disabled, E),
      children: (0, l.jsxs)("div", {
        className: s()(h.imageUploaderInner, C),
        style: p(f({}, W), {
          backgroundImage: n
        }),
        children: [r, O && (0, l.jsx)("div", {
          className: s()(h.imageUploaderIcon, h.imageUploaderIconDisabled, I),
          children: T
        })]
      })
    });
    null != a ? i = (0, l.jsx)(d.eee, {
      className: h.removeButton,
      onClick: this.handleRemove,
      children: g.NW.string(g.t.N86XcH)
    }) : P || (i = (0, l.jsx)("small", {
      className: h.sizeInfo,
      children: g.NW.format(g.t.AH4c7e, {
        size: x.IXf
      })
    }));
    let R = null !== (e = null != D ? D : o) && void 0 !== e ? e : g.NW.string(g.t["Ge+94+"]);
    return (0, l.jsxs)("div", {
      className: s()(h.imageUploader, E),
      children: [(0, l.jsx)(d.tEY, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: y ? s()(h.imageUploaderIconWrapper, S) : void 0,
          children: [(0, l.jsxs)("div", {
            className: s()(h.imageUploaderInner, C),
            style: p(f({}, W), {
              backgroundImage: n
            }),
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: r
            }), null != _ ? (0, l.jsx)(d.P3F, {
              className: h.imageUploaderFileInput,
              "aria-label": R,
              onClick: _
            }) : (0, l.jsx)(m.ZP, {
              ref: this.inputRef,
              onChange: b,
              className: h.imageUploaderFileInput,
              "aria-label": R,
              tabIndex: 0,
              maxFileSizeBytes: Z,
              onFileSizeError: k
            })]
          }), null != o && (0, l.jsx)("div", {
            className: h.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), y && (0, l.jsx)(j, {
            className: I,
            icon: T
          })]
        })
      }), w ? i : null]
    })
  }
  constructor(...e) {
    super(...e), v(this, "inputRef", i.createRef()), v(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
v(N, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
});
let b = N