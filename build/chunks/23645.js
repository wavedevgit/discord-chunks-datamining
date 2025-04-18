/** Chunk was on 69422 **/
"use strict";
r.d(t, {
  Z: () => s
}), r(388685);
var n = r(192379),
  o = r(817080),
  i = r(579806),
  a = r(358085);
class s extends n.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof e && (e = e()), e
  }
  downloadNative(e, t) {
    i.Z.fileManager.saveWithDialog(e, t)
  }
  downloadHtml5(e, t) {
    let r = new Blob([e], {
      type: this.props.contentType
    });
    (0, o.saveAs)(r, t)
  }
  render() {
    let {
      children: e
    } = this.props, t = n.Children.only(e);
    return n.cloneElement(t, {
      onClick: this.handleFileDownload
    })
  }
  constructor(...e) {
    var t, r;
    super(...e), t = "handleFileDownload", r = e => {
      e.preventDefault();
      let t = this.getFileContents(),
        {
          fileName: r,
          onDownload: n
        } = this.props;
      a.isPlatformEmbedded ? this.downloadNative(t, r) : this.downloadHtml5(t, r), null == n || n()
    }, t in this ? Object.defineProperty(this, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[t] = r
  }
}