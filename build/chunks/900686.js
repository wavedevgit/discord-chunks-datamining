/** Chunk was on 28429 **/
/** chunk id: 900686, original params: t,e,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk522579 = require("./522579.js"),
  Chunk77729 = require("./77729.js"),
  Chunk723702 = require("./723702.js");
class s extends Chunk64700.Component {
  getFileContents() {
    let {
      fileContents: t
    } = this.props;
    return "function" == typeof t && (t = t()), t
  }
  downloadNative(t, e) {
    i.A.fileManager.saveWithDialog(t, e)
  }
  downloadHtml5(t, e) {
    let n = new Blob([t], {
      type: this.props.contentType
    });
    (0, o.saveAs)(n, e)
  }
  render() {
    let {
      children: t
    } = this.props, e = r.Children.only(t);
    return r.cloneElement(e, {
      onClick: this.handleFileDownload
    })
  }
  constructor(...t) {
    super(...t),
      function(t, e, n) {
        e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      }(this, "handleFileDownload", t => {
        t.preventDefault();
        let e = this.getFileContents(),
          {
            fileName: n,
            onDownload: r
          } = this.props;
        a.isPlatformEmbedded ? this.downloadNative(e, n) : this.downloadHtml5(e, n), null == r || r()
      })
  }
}