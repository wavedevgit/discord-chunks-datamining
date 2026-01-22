/** Chunk was on 21968 **/
/** chunk id: 342298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  L: () => j
}), require("./747238.js"), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk240248 = require("./240248.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk315628 = require("./315628.js");

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
  return (0, r.jsx)(d.NPJ, {
    theme: f.NJ8.LIGHT,
    children: e => (0, r.jsx)("div", {
      className: s()(m.XD, t, e),
      children: n
    })
  })
}
class O extends(i = Chunk64700.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, i, l, {
      image: a,
      hint: o,
      name: c,
      makeURL: g,
      disabled: O,
      onChange: y,
      showIcon: A,
      showIconDisabled: v,
      className: N,
      imageClassName: E,
      iconClassName: T,
      iconWrapperClassName: w,
      icon: C,
      hideSize: S,
      imageStyle: _,
      showRemoveButton: I,
      maxFileSizeBytes: P,
      onFileSizeError: k,
      onOpenImageSelectModal: R,
      "aria-label": L
    } = this.props;
    if (null != (t = null != a && /^data:/.test(a) ? a : g(a)) ? n = 'url("'.concat(t, '")') : null != c && (i = (0, r.jsx)(d.Heading, {
        variant: "heading-xxl/normal",
        color: "always-white",
        className: m.nX,
        children: (0, u.oN)(c)
      })), O) return (0, r.jsx)("div", {
      className: s()(m.WY, m.r9, N),
      children: (0, r.jsxs)("div", {
        className: s()(m.Yp, E),
        style: x(h({}, _), {
          backgroundImage: n
        }),
        children: [i, v && (0, r.jsx)("div", {
          className: s()(m.XD, m.$N, T),
          children: C
        })]
      })
    });
    null != a ? l = (0, r.jsx)(d.MzZ, {
      className: m.DT,
      onClick: this.handleRemove,
      children: p.intl.string(p.t.N86XcP)
    }) : S || (l = (0, r.jsx)("small", {
      className: m.UZ,
      children: p.intl.format(p.t.AH4c7Y, {
        size: f.eQT
      })
    }));
    let M = null != (e = null != L ? L : o) ? e : p.intl.string(p.t["Ge+941"]);
    return (0, r.jsxs)("div", {
      className: s()(m.WY, N),
      children: [(0, r.jsx)(d.vN3, {
        within: true,
        children: (0, r.jsxs)("div", {
          className: A ? s()(m.U1, w) : true,
          children: [(0, r.jsxs)("div", {
            className: s()(m.Yp, E),
            style: x(h({}, _), {
              backgroundImage: n
            }),
            children: [(0, r.jsx)("span", {
              "aria-hidden": true,
              children: i
            }), null != R ? (0, r.jsx)(d.DUT, {
              className: m.c4,
              "aria-label": M,
              onClick: R
            }) : (0, r.jsx)(b.Ay, {
              ref: this.inputRef,
              onChange: y,
              className: m.c4,
              "aria-label": M,
              tabIndex: 0,
              maxFileSizeBytes: P,
              onFileSizeError: k
            })]
          }), null != o && (0, r.jsx)("div", {
            className: m.$J,
            "aria-hidden": "true",
            children: o
          }), A && (0, r.jsx)(j, {
            className: T,
            icon: C
          })]
        })
      }), I ? l : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "inputRef", l.createRef()), g(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
g(O, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: false,
  showIcon: false,
  hideSize: false,
  showRemoveButton: true,
  maxFileSizeBytes: 1 / 0,
  icon: null
});
let y = O