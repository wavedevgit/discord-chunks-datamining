/** Chunk was on 86142 **/
/** chunk id: 13008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./321073.js");
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk235986 = require("./235986.jsx"),
  Chunk267950 = require("./267950.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      className: e
    } = this.props;
    return (0, s.jsx)("input", {
      ref: this.setCodeBlockRef,
      className: o()(d.h, e),
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
    super(...e), u(this, "_codeBlockRef", true), u(this, "setCodeBlockRef", e => {
      this._codeBlockRef = e
    }), u(this, "handleKeyDown", e => {
      let t = 8 === e.which || 37 === e.which || 39 === e.which,
        n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
      t || n || e.preventDefault();
      let {
        onKeyDown: r
      } = this.props;
      null == r || r(e)
    }), u(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    })
  }
}
u(h, "defaultProps", {
  autoFocus: false
});
class p extends(i = Chunk64700.PureComponent) {
  render() {
    let {
      className: e,
      inputClassName: t
    } = this.props, {
      codes: n
    } = this.state, r = [];
    for (let e = 0; e < n.length; e++) e === n.length / 2 && r.push((0, s.jsx)("div", {
      className: d.j
    }, "spacer")), r.push((0, s.jsx)(h, {
      ref: t => this.setCodeBlockRef(e, t),
      code: n[e],
      autoFocus: 0 === e,
      onChange: t => this.handleChange(e, t),
      onKeyDown: t => this.handleKeyDown(e, t),
      className: t
    }, e));
    return (0, s.jsx)(c.A, {
      align: c.A.Align.CENTER,
      justify: c.A.Justify.CENTER,
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
    super(e), u(this, "_codeBlockRefs", Array(this.props.count)), this.state = {
      codes: Array(e.count)
    }
  }
}
u(p, "defaultProps", {
  count: 6
});
let g = p