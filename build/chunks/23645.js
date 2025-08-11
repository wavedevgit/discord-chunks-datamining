/** Chunk was on 75708 **/
/** chunk id: 23645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk817080 = require("./817080.js"),
  Chunk579806 = require("./579806.js"),
  Chunk358085 = require("./358085.js");
class l extends Chunk73800.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof module && (e = module()), module
  }
  downloadNative(e, t) {
    s.Z.fileManager.saveWithDialog(e, t)
  }
  downloadHtml5(e, t) {
    let n = new Blob([e], {
      type: this.props.contentType
    });
    (0, r.saveAs)(n, t)
  }
  render() {
    let {
      children: e
    } = this.props, t = Chunk73800.Children.only(module);
    return Chunk73800.cloneElement(exports, {
      onClick: this.handleFileDownload
    })
  }
  constructor(...e) {
    var t, n;
    super(...e), t = "handleFileDownload", n = e => {
      e.preventDefault();
      let t = this.getFileContents(),
        {
          fileName: n,
          onDownload: i
        } = this.props;
      a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == i || i()
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = n
  }
}