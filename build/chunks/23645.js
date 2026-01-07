/** Chunk was on web.js **/
/** chunk id: 23645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk817080 = require("./817080.js"),
  Chunk579806 = require("./579806.js"),
  Chunk358085 = require("./358085.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk473749.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof e && (e = e()), e
  }
  downloadNative(e, t) {
    a.Z.fileManager.saveWithDialog(e, t)
  }
  downloadHtml5(e, t) {
    let n = new Blob([e], {
      type: this.props.contentType
    });
    (0, i.saveAs)(n, t)
  }
  render() {
    let {
      children: e
    } = this.props, t = r.Children.only(e);
    return r.cloneElement(t, {
      onClick: this.handleFileDownload
    })
  }
  constructor(...e) {
    super(...e), s(this, "handleFileDownload", e => {
      e.preventDefault();
      let t = this.getFileContents(),
        {
          fileName: n,
          onDownload: r
        } = this.props;
      o.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r()
    })
  }
}