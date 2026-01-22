/** Chunk was on web.js **/
/** chunk id: 900686, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk522579 = require("./522579.js"),
  Chunk77729 = require("./77729.js"),
  Chunk723702 = require("./723702.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk64700.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof e && (e = e()), e
  }
  downloadNative(e, t) {
    a.A.fileManager.saveWithDialog(e, t)
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
    super(...e), o(this, "handleFileDownload", e => {
      e.preventDefault();
      let t = this.getFileContents(),
        {
          fileName: n,
          onDownload: r
        } = this.props;
      s.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r()
    })
  }
}