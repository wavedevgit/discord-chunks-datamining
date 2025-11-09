/** Chunk was on 99063 **/
/** chunk id: 208567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => j,
  Z: () => O
}), require("./35282.js"), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903975 = require("./903975.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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
    theme: m.BRd.LIGHT,
    children: e => (0, r.jsx)("div", {
      className: o()(g.imageUploaderIcon, t, e),
      children: n
    })
  })
}
class v extends(i = Chunk647438.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, i, l, {
      image: a,
      hint: s,
      name: c,
      makeURL: f,
      disabled: v,
      onChange: O,
      showIcon: y,
      showIconDisabled: _,
      className: C,
      imageClassName: N,
      iconClassName: S,
      iconWrapperClassName: E,
      icon: I,
      hideSize: P,
      imageStyle: w,
      showRemoveButton: T,
      maxFileSizeBytes: Z,
      onFileSizeError: k,
      onOpenImageSelectModal: A,
      "aria-label": D
    } = this.props;
    if (null != (t = null != Chunk120356 && /^data:/.test(Chunk120356) ? Chunk120356 : f(Chunk120356)) ? n = 'url("'.concat(exports, '")') : null != c && (i = (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: Chunk903975.imageUploaderAcronym,
        children: (0, Chunk624138.Zg)(c)
      })), v) return (0, Chunk951288.jsx)("div", {
      className: o()(Chunk903975.imageUploader, Chunk903975.disabled, C),
      children: (0, Chunk951288.jsxs)("div", {
        className: o()(Chunk903975.imageUploaderInner, N),
        style: x(h({}, w), {
          backgroundImage: require
        }),
        children: [i, _ && (0, Chunk951288.jsx)("div", {
          className: o()(Chunk903975.imageUploaderIcon, Chunk903975.imageUploaderIconDisabled, S),
          children: I
        })]
      })
    });
    null != Chunk120356 ? l = (0, Chunk951288.jsx)(Chunk481060.Anchor, {
      className: Chunk903975.removeButton,
      onClick: this.handleRemove,
      children: Chunk388032.intl.string(Chunk388032.t.N86XcP)
    }) : P || (l = (0, Chunk951288.jsx)("small", {
      className: Chunk903975.sizeInfo,
      children: Chunk388032.intl.format(Chunk388032.t.AH4c7Y, {
        size: Chunk981631.IXf
      })
    }));
    let R = null != (e = null != D ? D : Chunk512722) ? module : Chunk388032.intl.string(Chunk388032.t["Ge+941"]);
    return (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk903975.imageUploader, C),
      children: [(0, Chunk951288.jsx)(Chunk481060.tEY, {
        within: true,
        children: (0, Chunk951288.jsxs)("div", {
          className: y ? o()(Chunk903975.imageUploaderIconWrapper, E) : true,
          children: [(0, Chunk951288.jsxs)("div", {
            className: o()(Chunk903975.imageUploaderInner, N),
            style: x(h({}, w), {
              backgroundImage: require
            }),
            children: [(0, Chunk951288.jsx)("span", {
              "aria-hidden": true,
              children: i
            }), null != A ? (0, Chunk951288.jsx)(Chunk481060.P3F, {
              className: Chunk903975.imageUploaderFileInput,
              "aria-label": R,
              onClick: A
            }) : (0, Chunk951288.jsx)(Chunk813197.ZP, {
              ref: this.inputRef,
              onChange: O,
              className: Chunk903975.imageUploaderFileInput,
              "aria-label": R,
              tabIndex: 0,
              maxFileSizeBytes: Z,
              onFileSizeError: k
            })]
          }), null != Chunk512722 && (0, Chunk951288.jsx)("div", {
            className: Chunk903975.imageUploaderHint,
            "aria-hidden": "true",
            children: Chunk512722
          }), y && (0, Chunk951288.jsx)(j, {
            className: S,
            icon: I
          })]
        })
      }), T ? Chunk647438 : null]
    })
  }
  constructor(...e) {
    super(...e), f(this, "inputRef", l.createRef()), f(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
f(v, "defaultProps", {
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