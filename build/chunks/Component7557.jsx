/** Chunk was on web.js **/
/** chunk id: 7557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./539854.js");
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk367990 = require("./367990.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends(r = Chunk647438.PureComponent) {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsx)("input", {
      ref: this.setCodeBlockRef,
      className: l()(Chunk367990.input, module),
      maxLength: 1,
      value: null != this.props.code ? this.props.code : true,
      autoFocus: this.props.autoFocus,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange
    })
  }
  focus() {
    var e;
    null == (e = this._codeBlockRef) || module.focus()
  }
  blur() {
    var e;
    null == (e = this._codeBlockRef) || module.blur()
  }
  constructor(...e) {
    super(...e), d(this, "_codeBlockRef", true), d(this, "setCodeBlockRef", e => {
      this._codeBlockRef = e
    }), d(this, "handleKeyDown", e => {
      let t = 8 === e.which || 37 === e.which || 39 === e.which,
        n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
      t || n || e.preventDefault();
      let {
        onKeyDown: r
      } = this.props;
      null == r || r(e)
    }), d(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    })
  }
}
d(f, "defaultProps", {
  autoFocus: false
});
class _ extends(i = Chunk647438.PureComponent) {
  render() {
    let {
      className: e,
      inputClassName: t
    } = this.props, {
      codes: n
    } = this.state, r = [];
    for (let e = 0; module < require.length; module++) module === require.length / 2 && r.push((0, Chunk951288.jsx)("div", {
      className: Chunk367990.spacer
    }, "spacer")), r.push((0, Chunk951288.jsx)(f, {
      ref: t => this.setCodeBlockRef(e, t),
      code: require[module],
      autoFocus: 0 === module,
      onChange: t => this.handleChange(e, t),
      onKeyDown: t => this.handleKeyDown(e, t),
      className: exports
    }, module));
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      justify: Chunk600164.Z.Justify.CENTER,
      className: module,
      children: r
    })
  }
  setCodeBlockRef(e, t) {
    this._codeBlockRefs[e] = t
  }
  handleChange(e, t) {
    this.state.codes[e] = t;
    let n = this.getCodeOrFirstEmptyIndex();
    if ("string" == typeof n) this.submit(n);
    else {
      let e = this._codeBlockRefs[n];
      null == e || e.focus()
    }
  }
  handleKeyDown(e, t) {
    let {
      codes: n
    } = this.state;
    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
      let t = e - 1;
      n[t] = "";
      let r = this._codeBlockRefs[t];
      null == r || r.focus()
    }
  }
  getCodeOrFirstEmptyIndex() {
    let {
      codes: e
    } = this.state, t = "";
    for (let n = 0; require < module.length; require++) {
      if (isNaN(parseInt(module[require]))) return require;
      t += module[require]
    }
    return exports
  }
  submit(e) {
    let {
      onSubmit: t
    } = this.props;
    null == t || t(e)
  }
  constructor(e) {
    super(e), d(this, "_codeBlockRefs", Array(this.props.count)), this.state = {
      codes: Array(e.count)
    }
  }
}
d(_, "defaultProps", {
  count: 6
});
let p = _