/** Chunk was on 9414 **/
/** chunk id: 208567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => j,
  Z: () => O
}), require("./35282.js"), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475140 = require("./475140.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
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
  return (0, r.jsx)(d.f6W, {
    theme: p.BRd.LIGHT,
    children: e => (0, r.jsx)("div", {
      className: o()(f.imageUploaderIcon, t, e),
      children: n
    })
  })
}
class v extends(i = Chunk473749.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, i, l, {
      image: a,
      hint: s,
      name: c,
      makeURL: g,
      disabled: v,
      onChange: O,
      showIcon: y,
      showIconDisabled: C,
      className: N,
      imageClassName: S,
      iconClassName: I,
      iconWrapperClassName: w,
      icon: E,
      hideSize: P,
      imageStyle: T,
      showRemoveButton: Z,
      maxFileSizeBytes: _,
      onFileSizeError: k,
      onOpenImageSelectModal: A,
      "aria-label": D
    } = this.props;
    if (null != (t = null != Chunk120356 && /^data:/.test(Chunk120356) ? Chunk120356 : g(Chunk120356)) ? n = 'url("'.concat(exports, '")') : null != c && (i = (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: Chunk475140.imageUploaderAcronym,
        children: (0, Chunk624138.Zg)(c)
      })), v) return (0, Chunk54381.jsx)("div", {
      className: o()(Chunk475140.imageUploader, Chunk475140.disabled, N),
      children: (0, Chunk54381.jsxs)("div", {
        className: o()(Chunk475140.imageUploaderInner, S),
        style: x(h({}, T), {
          backgroundImage: require
        }),
        children: [i, C && (0, Chunk54381.jsx)("div", {
          className: o()(Chunk475140.imageUploaderIcon, Chunk475140.imageUploaderIconDisabled, I),
          children: E
        })]
      })
    });
    null != Chunk120356 ? l = (0, Chunk54381.jsx)(Chunk481060.Anchor, {
      className: Chunk475140.removeButton,
      onClick: this.handleRemove,
      children: Chunk388032.intl.string(Chunk388032.t.N86XcP)
    }) : P || (l = (0, Chunk54381.jsx)("small", {
      className: Chunk475140.sizeInfo,
      children: Chunk388032.intl.format(Chunk388032.t.AH4c7Y, {
        size: Chunk981631.IXf
      })
    }));
    let R = null != (e = null != D ? D : Chunk512722) ? module : Chunk388032.intl.string(Chunk388032.t["Ge+941"]);
    return (0, Chunk54381.jsxs)("div", {
      className: o()(Chunk475140.imageUploader, N),
      children: [(0, Chunk54381.jsx)(Chunk481060.tEY, {
        within: true,
        children: (0, Chunk54381.jsxs)("div", {
          className: y ? o()(Chunk475140.imageUploaderIconWrapper, w) : true,
          children: [(0, Chunk54381.jsxs)("div", {
            className: o()(Chunk475140.imageUploaderInner, S),
            style: x(h({}, T), {
              backgroundImage: require
            }),
            children: [(0, Chunk54381.jsx)("span", {
              "aria-hidden": true,
              children: i
            }), null != A ? (0, Chunk54381.jsx)(Chunk481060.P3F, {
              className: Chunk475140.imageUploaderFileInput,
              "aria-label": R,
              onClick: A
            }) : (0, Chunk54381.jsx)(Chunk813197.ZP, {
              ref: this.inputRef,
              onChange: O,
              className: Chunk475140.imageUploaderFileInput,
              "aria-label": R,
              tabIndex: 0,
              maxFileSizeBytes: _,
              onFileSizeError: k
            })]
          }), null != Chunk512722 && (0, Chunk54381.jsx)("div", {
            className: Chunk475140.imageUploaderHint,
            "aria-hidden": "true",
            children: Chunk512722
          }), y && (0, Chunk54381.jsx)(j, {
            className: I,
            icon: E
          })]
        })
      }), Z ? Chunk473749 : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "inputRef", l.createRef()), g(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
g(v, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: false,
  showIcon: false,
  hideSize: false,
  showRemoveButton: true,
  maxFileSizeBytes: 1 / 0,
  icon: null
});
let O = v