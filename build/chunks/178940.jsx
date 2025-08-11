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
  Chunk883658 = require("./883658.js");

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
    BOX: Chunk883658.box,
    ROUND: Chunk883658.round,
    SMALL_BOX: Chunk883658.smallBox
  },
  O = {
    top: Chunk883658.alignTop,
    center: Chunk883658.alignCenter
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
    } = this.props, E = null != Chunk512722 ? <div className={s()(Chunk883658.label, module ? Chunk883658.labelDisabled : Chunk883658.labelClickable, Chunk866442 ? Chunk883658.labelReversed : Chunk883658.labelForward)} style={{
        lineHeight: "".concat(c, "px")
      }}>{Chunk512722}</div> : null, b = Chunk692547 ? "span" : "label", y = this.props.disabled ? Chunk883658.inputDisabled : this.props.readOnly ? Chunk883658.inputReadonly : Chunk883658.inputDefault;
    return <b data-toggleable-component={"checkbox"} className={s()(module ? Chunk883658.checkboxWrapperDisabled : Chunk883658.checkboxWrapper, O[r], Chunk73800, {
        [Chunk883658.row]: "row" === Chunk481060,
        [Chunk883658.checked]: require
      })}>{Chunk866442 ? E : null}{!Chunk692547 && <Chunk84735.t><input className={s()(Chunk120356, y)} type={"checkbox"} onClick={m} onChange={module || exports ? Chunk981631.dG4 : this.handleChange} checked={require} style={{
            width: c,
            height: c
          }} /></Chunk84735.t>}{<T{...g({}, this.props)} />}{Chunk866442 ? null : E}</b>
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
  return <div className={s()(h.checkbox, a, t, {
      [h.checked]: n,
      [h.checkboxDisabled]: c
    })} style={g({
      width: r,
      height: r,
      borderColor: l
    }, u)}><_.kSu size={"sm"} color={f} aria-hidden={true} /></div>
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