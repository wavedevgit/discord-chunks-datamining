/** Chunk was on 82411 **/
/** chunk id: 23645, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk817080 = require("./817080.js"),
  Chunk579806 = require("./579806.js"),
  Chunk358085 = require("./358085.js");
class s extends Chunk73800.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof module && (e = module()), module
  }
  downloadNative(e, t) {
    i.Z.fileManager.saveWithDialog(e, t)
  }
  downloadHtml5(e, t) {
    let n = new Blob([e], {
      type: this.props.contentType
    });
    (0, o.saveAs)(n, t)
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
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "handleFileDownload", e => {
        e.preventDefault();
        let t = this.getFileContents(),
          {
            fileName: n,
            onDownload: r
          } = this.props;
        a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r()
      })
  }
}