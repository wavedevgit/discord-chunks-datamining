/** Chunk was on 58023 **/
n.d(t, {
  S: () => b,
  Z: () => y
}), n(35282), n(388685);
var r, l = n(200651),
  i = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(512722),
  c = n.n(o),
  u = n(481060),
  d = n(624138),
  m = n(813197),
  h = n(981631),
  g = n(388032),
  x = n(348563);

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
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

function b(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, l.jsx)(u.f6W, {
    theme: h.BRd.LIGHT,
    children: e => (0, l.jsx)("div", {
      className: s()(x.imageUploaderIcon, t, e),
      children: n
    })
  })
}
class j extends(r = i.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, r, i, {
      image: a,
      hint: o,
      name: c,
      makeURL: p,
      disabled: j,
      onChange: y,
      showIcon: N,
      showIconDisabled: O,
      className: E,
      imageClassName: S,
      iconClassName: C,
      iconWrapperClassName: P,
      icon: I,
      hideSize: T,
      imageStyle: w,
      showRemoveButton: W,
      maxFileSizeBytes: Z,
      onFileSizeError: k,
      onOpenImageSelectModal: D,
      "aria-label": R
    } = this.props;
    if (null != (t = null != a && /^data:/.test(a) ? a : p(a)) ? n = 'url("'.concat(t, '")') : null != c && (r = (0, l.jsx)(u.X6q, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: x.imageUploaderAcronym,
        children: (0, d.Zg)(c)
      })), j) return (0, l.jsx)("div", {
      className: s()(x.imageUploader, x.disabled, E),
      children: (0, l.jsxs)("div", {
        className: s()(x.imageUploaderInner, S),
        style: v(f({}, w), {
          backgroundImage: n
        }),
        children: [r, O && (0, l.jsx)("div", {
          className: s()(x.imageUploaderIcon, x.imageUploaderIconDisabled, C),
          children: I
        })]
      })
    });
    null != a ? i = (0, l.jsx)(u.eee, {
      className: x.removeButton,
      onClick: this.handleRemove,
      children: g.NW.string(g.t.N86XcH)
    }) : T || (i = (0, l.jsx)("small", {
      className: x.sizeInfo,
      children: g.NW.format(g.t.AH4c7e, {
        size: h.IXf
      })
    }));
    let _ = null != (e = null != R ? R : o) ? e : g.NW.string(g.t["Ge+94+"]);
    return (0, l.jsxs)("div", {
      className: s()(x.imageUploader, E),
      children: [(0, l.jsx)(u.tEY, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: N ? s()(x.imageUploaderIconWrapper, P) : void 0,
          children: [(0, l.jsxs)("div", {
            className: s()(x.imageUploaderInner, S),
            style: v(f({}, w), {
              backgroundImage: n
            }),
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: r
            }), null != D ? (0, l.jsx)(u.P3F, {
              className: x.imageUploaderFileInput,
              "aria-label": _,
              onClick: D
            }) : (0, l.jsx)(m.ZP, {
              ref: this.inputRef,
              onChange: y,
              className: x.imageUploaderFileInput,
              "aria-label": _,
              tabIndex: 0,
              maxFileSizeBytes: Z,
              onFileSizeError: k
            })]
          }), null != o && (0, l.jsx)("div", {
            className: x.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), N && (0, l.jsx)(b, {
            className: C,
            icon: I
          })]
        })
      }), W ? i : null]
    })
  }
  constructor(...e) {
    super(...e), p(this, "inputRef", i.createRef()), p(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
p(j, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
});
let y = j