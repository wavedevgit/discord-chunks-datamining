/** Chunk was on web.js **/
/** chunk id: 74068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk453771 = require("./453771.js"),
  Chunk922667 = require("./922667.jsx");
class o extends Chunk64700.PureComponent {
  render() {
    let {
      src: e,
      fileSize: t,
      fileName: n,
      className: i,
      playable: o,
      volume: l,
      renderLinkComponent: c,
      onVolumeChange: u,
      onVolumeShow: d,
      onVolumeHide: f,
      autoMute: p,
      onMute: _,
      mimeType: h,
      onPlay: m
    } = this.props;
    return (0, r.jsx)(s.Ay, {
      src: e,
      fileName: n,
      fileSize: (0, a.Hb)(t),
      fileSizeBytes: t,
      type: s.Ay.Types.AUDIO,
      className: i,
      playable: o,
      volume: l,
      onMute: _,
      autoMute: p,
      onVolumeChange: u,
      onVolumeShow: d,
      onVolumeHide: f,
      renderLinkComponent: c,
      mimeType: h,
      onPlay: m
    })
  }
}