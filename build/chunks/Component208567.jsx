/** Chunk was on 86915 **/
/** chunk id: 208567, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => b,
  Z: () => y
}), require("./35282.js"), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270956 = require("./270956.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
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

function j(e, t) {
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

function b(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, l.jsx)(d.f6W, {
    theme: g.BRd.LIGHT,
    children: e => (0, l.jsx)("div", {
      className: a()(p.imageUploaderIcon, t, e),
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
    let t, n, i, r, {
      image: s,
      hint: o,
      name: c,
      makeURL: f,
      disabled: v,
      onChange: y,
      showIcon: C,
      showIconDisabled: N,
      className: S,
      imageClassName: O,
      iconClassName: E,
      iconWrapperClassName: w,
      icon: T,
      hideSize: Z,
      imageStyle: R,
      showRemoveButton: I,
      maxFileSizeBytes: _,
      onFileSizeError: P,
      onOpenImageSelectModal: A,
      "aria-label": L
    } = this.props;
    if (null != (t = null != Chunk120356 && /^data:/.test(Chunk120356) ? Chunk120356 : f(Chunk120356)) ? n = 'url("'.concat(exports, '")') : null != c && (i = (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: Chunk270956.imageUploaderAcronym,
        children: (0, Chunk624138.Zg)(c)
      })), v) return (0, Chunk951288.jsx)("div", {
      className: a()(Chunk270956.imageUploader, Chunk270956.disabled, S),
      children: (0, Chunk951288.jsxs)("div", {
        className: a()(Chunk270956.imageUploaderInner, O),
        style: j(x({}, R), {
          backgroundImage: require
        }),
        children: [i, N && (0, Chunk951288.jsx)("div", {
          className: a()(Chunk270956.imageUploaderIcon, Chunk270956.imageUploaderIconDisabled, E),
          children: T
        })]
      })
    });
    null != Chunk120356 ? r = (0, Chunk951288.jsx)(Chunk481060.eee, {
      className: Chunk270956.removeButton,
      onClick: this.handleRemove,
      children: Chunk388032.intl.string(Chunk388032.t.N86XcH)
    }) : Z || (r = (0, Chunk951288.jsx)("small", {
      className: Chunk270956.sizeInfo,
      children: Chunk388032.intl.format(Chunk388032.t.AH4c7e, {
        size: Chunk981631.IXf
      })
    }));
    let D = null != (e = null != L ? L : Chunk512722) ? module : Chunk388032.intl.string(Chunk388032.t["Ge+94+"]);
    return (0, Chunk951288.jsxs)("div", {
      className: a()(Chunk270956.imageUploader, S),
      children: [(0, Chunk951288.jsx)(Chunk481060.tEY, {
        within: true,
        children: (0, Chunk951288.jsxs)("div", {
          className: C ? a()(Chunk270956.imageUploaderIconWrapper, w) : true,
          children: [(0, Chunk951288.jsxs)("div", {
            className: a()(Chunk270956.imageUploaderInner, O),
            style: j(x({}, R), {
              backgroundImage: require
            }),
            children: [(0, Chunk951288.jsx)("span", {
              "aria-hidden": true,
              children: i
            }), null != A ? (0, Chunk951288.jsx)(Chunk481060.P3F, {
              className: Chunk270956.imageUploaderFileInput,
              "aria-label": D,
              onClick: A
            }) : (0, Chunk951288.jsx)(Chunk813197.ZP, {
              ref: this.inputRef,
              onChange: y,
              className: Chunk270956.imageUploaderFileInput,
              "aria-label": D,
              tabIndex: 0,
              maxFileSizeBytes: _,
              onFileSizeError: P
            })]
          }), null != Chunk512722 && (0, Chunk951288.jsx)("div", {
            className: Chunk270956.imageUploaderHint,
            "aria-hidden": "true",
            children: Chunk512722
          }), C && (0, Chunk951288.jsx)(b, {
            className: E,
            icon: T
          })]
        })
      }), I ? Chunk647438 : null]
    })
  }
  constructor(...e) {
    super(...e), f(this, "inputRef", r.createRef()), f(this, "handleRemove", () => {
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
let y = v