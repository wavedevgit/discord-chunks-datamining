/** Chunk was on web.js **/
/** chunk id: 7557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./539854.js");
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk87266 = require("./87266.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      className: e
    } = this.props;
    return (0, a.jsx)("input", {
      ref: this.setCodeBlockRef,
      className: l()(u.input, e),
      maxLength: 1,
      value: null != this.props.code ? this.props.code : true,
      autoFocus: this.props.autoFocus,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange
    })
  }
  focus() {
    var e;
    null == (e = this._codeBlockRef) || e.focus()
  }
  blur() {
    var e;
    null == (e = this._codeBlockRef) || e.blur()
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
class p extends(i = Chunk473749.PureComponent) {
  render() {
    let {
      className: e,
      inputClassName: t
    } = this.props, {
      codes: n
    } = this.state, r = [];
    for (let e = 0; e < n.length; e++) e === n.length / 2 && r.push((0, a.jsx)("div", {
      className: u.spacer
    }, "spacer")), r.push((0, a.jsx)(f, {
      ref: t => this.setCodeBlockRef(e, t),
      code: n[e],
      autoFocus: 0 === e,
      onChange: t => this.handleChange(e, t),
      onKeyDown: t => this.handleKeyDown(e, t),
      className: t
    }, e));
    return (0, a.jsx)(c.Z, {
      align: c.Z.Align.CENTER,
      justify: c.Z.Justify.CENTER,
      className: e,
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
    for (let n = 0; n < e.length; n++) {
      if (isNaN(parseInt(e[n]))) return n;
      t += e[n]
    }
    return t
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
d(p, "defaultProps", {
  count: 6
});
let _ = p