/** Chunk was on web.js **/
/** chunk id: 649724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => m,
  u: () => h
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk153066 = require("./153066.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk159485 = require("./159485.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class m extends(r = Chunk73800.PureComponent) {
  select() {
    var e;
    null == (e = this.inputRef.current) || module.select()
  }
  renderInput(e) {
    var t;
    let {
      value: n,
      mode: r,
      autoFocus: o,
      spellCheck: a,
      inputClassName: l,
      placeholder: c
    } = this.props, u = null == (t = this.context) ? true : t.titleId;
    return <input className={s()((0, d.l)(_, "input", r), l, {
        [_.inputHidden]: e
      })} ref={this.inputRef} type={"text"} value={n} onClick={this.handleInputClick} readOnly={true} aria-labelledby={u} autoFocus={o} spellCheck={a} placeholder={c} />
  }
  render() {
    let e, {
        text: t = Chunk388032.intl.string(Chunk388032.t.OpuAlJ),
        mode: n,
        hideMessage: r,
        className: o,
        buttonLook: a,
        supportsCopy: p,
        disabled: m
      } = this.props,
      g = null != r;
    switch (require) {
      case h.SUCCESS:
        e = Chunk755721.Tt.GREEN;
        break;
      case h.ERROR:
        e = Chunk755721.Tt.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return <Chunk481060.tEY focusTarget={this.inputRef} ringTarget={this.containerRef}><div className={s()((0, Chunk153066.l)(Chunk159485, "copyInput", require), Chunk73800)} ref={this.containerRef}><Chunk600164.Z className={Chunk159485.layout}>{<Chunk600164.Z className={Chunk159485.inputWrapper}>{this.renderInput(g)}{g ? <div className={Chunk159485.hiddenMessage}>{r}</div> : null}</Chunk600164.Z>}{p ? <Chunk600164.Z shrink={1} grow={0} style={{
              margin: 0
            }}><Chunk755721.zx className={Chunk159485.button} onClick={this.handleButtonClick} size={Chunk755721.Ph.MIN} color={module} look={Chunk120356} disabled={m}>{exports}</Chunk755721.zx></Chunk600164.Z> : null}</Chunk600164.Z></div></Chunk481060.tEY>
  }
  constructor(...e) {
    super(...e), p(this, "inputRef", o.createRef()), p(this, "containerRef", o.createRef()), p(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), p(this, "handleInputClick", () => {
      this.select()
    })
  }
}
p(m, "contextType", Chunk481060.q3N), p(m, "defaultProps", {
  supportsCopy: true,
  buttonColor: Chunk755721.Tt.PRIMARY,
  buttonLook: Chunk755721.iL.FILLED,
  mode: h.DEFAULT
}), p(m, "Modes", h), p(m, "ButtonColors", Chunk755721.Tt), p(m, "ButtonLooks", Chunk755721.iL)