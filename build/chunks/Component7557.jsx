/** Chunk was on 76540 **/
/** chunk id: 7557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./539854.js");
var s, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk713569 = require("./713569.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends(s = Chunk73800.PureComponent) {
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk255367.jsx)("input", {
      ref: this.setCodeBlockRef,
      className: a()(Chunk713569.input, module),
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
    super(...e), u(this, "_codeBlockRef", true), u(this, "setCodeBlockRef", e => {
      this._codeBlockRef = e
    }), u(this, "handleKeyDown", e => {
      let t = 8 === e.which || 37 === e.which || 39 === e.which,
        n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
      t || n || e.preventDefault();
      let {
        onKeyDown: s
      } = this.props;
      null == s || s(e)
    }), u(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    })
  }
}
u(d, "defaultProps", {
  autoFocus: false
});
class E extends(i = Chunk73800.PureComponent) {
  render() {
    let {
      className: e,
      inputClassName: t
    } = this.props, {
      codes: n
    } = this.state, s = [];
    for (let e = 0; module < require.length; module++) module === require.length / 2 && s.push((0, Chunk255367.jsx)("div", {
      className: Chunk713569.spacer
    }, "spacer")), s.push((0, Chunk255367.jsx)(d, {
      ref: t => this.setCodeBlockRef(e, t),
      code: require[module],
      autoFocus: 0 === module,
      onChange: t => this.handleChange(e, t),
      onKeyDown: t => this.handleKeyDown(e, t),
      className: exports
    }, module));
    return (0, Chunk255367.jsx)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      justify: Chunk600164.Z.Justify.CENTER,
      className: module,
      children: s
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
      let s = this._codeBlockRefs[t];
      null == s || s.focus()
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
    super(e), u(this, "_codeBlockRefs", Array(this.props.count)), this.state = {
      codes: Array(e.count)
    }
  }
}
u(E, "defaultProps", {
  count: 6
});
let p = E