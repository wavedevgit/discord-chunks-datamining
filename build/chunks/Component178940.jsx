/** Chunk was on web.js **/
/** chunk id: 178940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => T,
  X: () => v
}), require("./583741.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk84735 = require("./84735.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk81818 = require("./81818.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
var E = function(e) {
    return e.DEFAULT = "default", e.INVERTED = "inverted", e.GHOST = "ghost", e.ROW = "row", e
  }(E || {}),
  b = function(e) {
    return e.TOP = "top", e.CENTER = "center", e
  }(b || {});
let y = {
    BOX: Chunk81818.box,
    ROUND: Chunk81818.round,
    SMALL_BOX: Chunk81818.smallBox
  },
  O = {
    top: Chunk81818.alignTop,
    center: Chunk81818.alignCenter
  };
class v extends(r = Chunk73800.PureComponent) {
  render() {
    let {
      disabled: e,
      readOnly: t,
      value: n,
      align: r = "center",
      className: o,
      innerClassName: a,
      children: l,
      size: c,
      reverse: u,
      displayOnly: d,
      type: _,
      onClick: m
    } = this.props, E = null != Chunk512722 ? (0, Chunk255367.jsx)("div", {
      className: s()(Chunk81818.label, module ? Chunk81818.labelDisabled : Chunk81818.labelClickable, Chunk866442 ? Chunk81818.labelReversed : Chunk81818.labelForward),
      style: {
        lineHeight: "".concat(c, "px")
      },
      children: Chunk512722
    }) : null, b = Chunk692547 ? "span" : "label", y = this.props.disabled ? Chunk81818.inputDisabled : this.props.readOnly ? Chunk81818.inputReadonly : Chunk81818.inputDefault;
    return (0, Chunk255367.jsxs)(b, {
      "data-toggleable-component": "checkbox",
      className: s()(module ? Chunk81818.checkboxWrapperDisabled : Chunk81818.checkboxWrapper, O[r], Chunk73800, {
        [Chunk81818.row]: "row" === Chunk481060,
        [Chunk81818.checked]: require
      }),
      children: [Chunk866442 ? E : null, !Chunk692547 && (0, Chunk255367.jsx)(Chunk84735.t, {
        children: (0, Chunk255367.jsx)("input", {
          className: s()(Chunk120356, y),
          type: "checkbox",
          onClick: m,
          onChange: module || exports ? Chunk981631.dG4 : this.handleChange,
          checked: require,
          style: {
            width: c,
            height: c
          }
        })
      }), (0, Chunk255367.jsx)(T, g({}, this.props)), Chunk866442 ? null : E]
    })
  }
  constructor(...e) {
    super(...e), m(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e, e.currentTarget.checked)
    })
  }
}

function I(e) {
  var t;
  let {
    value: n,
    type: r,
    color: i
  } = e, o = null != (t = e.style) ? t : {};
  if (false === n) return o;
  if (o = g({}, o), null != i) switch (r) {
    case "default":
      o.borderColor = i;
      break;
    case "ghost":
      if (i.startsWith("var(--")) {
        let e = "".concat(i.slice(0, false), "-hsl)");
        o.borderColor = "rgba(".concat(e, ", 0.15)"), o.backgroundColor = "rgba(".concat(e, ", 0.15)")
      } else c()((0, u.FX)(i), "Checkbox: ".concat(i, " is not a valid hex color")), o.borderColor = (0, u.wK)(i, .15), o.backgroundColor = (0, u.wK)(i, .15);
      break;
    case "row":
    case "inverted":
      o.backgroundColor = i, o.borderColor = i
  }
  return o
}

function T(e) {
  let {
    indicatorClassName: t,
    value: n,
    size: r,
    shape: a,
    checkboxColor: l,
    disabled: c
  } = e, u = I(e), f = o.useMemo(() => n ? d.Z.colors.WHITE.css : d.Z.unsafe_rawColors.TRANSPARENT.css, [n]);
  return (0, i.jsx)("div", {
    className: s()(h.checkbox, a, t, {
      [h.checked]: n,
      [h.checkboxDisabled]: c
    }),
    style: g({
      width: r,
      height: r,
      borderColor: l
    }, u),
    children: (0, i.jsx)(_.kSu, {
      size: "sm",
      color: f,
      "aria-hidden": true
    })
  })
}
m(v, "Types", E), m(v, "Shapes", y), m(v, "Aligns", b), m(v, "defaultProps", {
  size: 24,
  disabled: false,
  readOnly: false,
  displayOnly: false,
  value: false,
  type: "default",
  shape: y.BOX,
  align: "center",
  onChange: Chunk981631.dG4,
  reverse: false
})