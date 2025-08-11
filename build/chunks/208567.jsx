/** Chunk was on 58023 **/
/** chunk id: 208567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => j,
  Z: () => y
}), require("./35282.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk813197 = require("./813197.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk348563 = require("./348563.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
  return <u.f6W theme={x.BRd.LIGHT}>{e => (0, l.jsx)("div", {
      className: s()(h.imageUploaderIcon, t, e),
      children: n
    })}</u.f6W>
}
class b extends(r = Chunk73800.PureComponent) {
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
    if (null != (t = null != Chunk120356 && /^data:/.test(Chunk120356) ? Chunk120356 : v(Chunk120356)) ? n = 'url("'.concat(exports, '")') : null != c && (r = <Chunk481060.X6q variant={"heading-xxl/normal"} color={"always-white"} className={Chunk348563.imageUploaderAcronym}>{(0, Chunk624138.Zg)(c)}</Chunk481060.X6q>), b) return <div className={s()(Chunk348563.imageUploader, Chunk348563.disabled, N)}><div className={s()(Chunk348563.imageUploaderInner, C)} style={f(p({}, w), {
          backgroundImage: require
        })}>{r}{E && <div className={s()(Chunk348563.imageUploaderIcon, Chunk348563.imageUploaderIconDisabled, I)}>{T}</div>}</div></div>;
    null != Chunk120356 ? i = <Chunk481060.eee className={Chunk348563.removeButton} onClick={this.handleRemove}>{Chunk388032.intl.string(Chunk388032.t.N86XcH)}</Chunk481060.eee> : P || (i = <small className={Chunk348563.sizeInfo}>{Chunk388032.intl.format(Chunk388032.t.AH4c7e, {
        size: Chunk981631.IXf
      })}</small>);
    let A = null != (e = null != k ? k : Chunk512722) ? module : Chunk388032.intl.string(Chunk388032.t["Ge+94+"]);
    return <div className={s()(Chunk348563.imageUploader, N)}>{<Chunk481060.tEY within={true}><div className={O ? s()(Chunk348563.imageUploaderIconWrapper, S) : true}>{<div className={s()(Chunk348563.imageUploaderInner, C)} style={f(p({}, w), {
              backgroundImage: require
            })}>{<span aria-hidden={true}>{r}</span>}{null != R ? <Chunk481060.P3F className={Chunk348563.imageUploaderFileInput} aria-label={A} onClick={R} /> : <Chunk813197.ZP ref={this.inputRef} onChange={y} className={Chunk348563.imageUploaderFileInput} aria-label={A} tabIndex={0} maxFileSizeBytes={D} onFileSizeError={_} />}</div>}{null != Chunk512722 && <div className={Chunk348563.imageUploaderHint} aria-hidden={"true"}>{Chunk512722}</div>}{O && <j className={I} icon={T} />}</div></Chunk481060.tEY>}{Z ? Chunk73800 : null}</div>
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
  disabled: false,
  showIcon: false,
  hideSize: false,
  showRemoveButton: true,
  maxFileSizeBytes: 1 / 0,
  icon: null
});
let y = b