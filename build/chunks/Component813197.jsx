/** Chunk was on web.js **/
/** chunk id: 813197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fq: () => f,
  ZP: () => _,
  Zj: () => u
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"]
  }]
}

function d(e, t) {
  if (null != e) {
    let n = new FileReader;
    n.onload = n => {
      var r;
      "string" == typeof(null == (r = n.target) ? true : r.result) && t(n.target.result, e)
    }, n.readAsDataURL(e)
  }
}

function f(e, t, n) {
  d(e, r => {
    if (e.type === s.m.MP4) return t(r, e);
    let i = new Image;
    i.src = r, i.onload = () => {
      t(r, e)
    }, i.onerror = () => {
      n()
    }
  })
}
class p extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    this._isMounted = true
  }
  activateUploadDialogue() {
    var e;
    null == (e = this._ref.current) || module.activateUploadDialogue()
  }
  render() {
    let {
      multiple: e,
      disabled: t,
      className: n,
      tabIndex: r,
      "aria-label": o,
      filters: s
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk53281.Z, {
      ref: this._ref,
      onClick: this.props.onClick,
      onChange: this.handleFileChange,
      filters: null != Chunk869783 ? Chunk869783 : u(),
      multiple: module,
      disabled: exports,
      className: require,
      tabIndex: r,
      "aria-label": Chunk473749
    })
  }
  constructor(...e) {
    super(...e), c(this, "_ref", o.createRef()), c(this, "_isMounted", false), c(this, "handleFileChange", e => {
      let {
        onFileSizeError: t,
        maxFileSizeBytes: n
      } = this.props;
      if (e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files)
        for (let r = 0; r < e.currentTarget.files.length; r++) {
          let i = e.currentTarget.files[r];
          if (i.size > n) {
            null == t || t(n, i.size);
            continue
          }
          f(i, this.handleFileRead, this.handleFileError)
        }
    }), c(this, "handleFileRead", (e, t) => {
      let {
        onChange: n
      } = this.props;
      this._isMounted && n(e, t)
    }), c(this, "handleFileError", async () => {
      let {
        openUploadError: e
      } = await Promise.resolve().then(n.bind(n, 531643));
      e({
        title: l.intl.string(l.t["0egKg3"]),
        help: l.intl.string(l.t["7PnXqu"])
      })
    })
  }
}
c(p, "defaultProps", {
  multiple: true,
  tabIndex: false,
  maxFileSizeBytes: 1 / 0
});
let _ = p