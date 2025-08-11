/** Chunk was on web.js **/
/** chunk id: 425886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk403182 = require("./403182.js"),
  Chunk640108 = require("./640108.jsx");
class s extends Chunk73800.PureComponent {
  render() {
    let {
      src: e,
      fileSize: t,
      fileName: n,
      className: i,
      playable: s,
      volume: l,
      renderLinkComponent: c,
      onVolumeChange: u,
      onVolumeShow: d,
      onVolumeHide: f,
      autoMute: _,
      onMute: p,
      mimeType: h,
      onPlay: m
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk640108.ZP, {
      src: module,
      fileName: require,
      fileSize: (0, Chunk403182.Ng)(exports),
      fileSizeBytes: exports,
      type: Chunk640108.ZP.Types.AUDIO,
      className: Chunk73800,
      playable: s,
      volume: l,
      onMute: p,
      autoMute: _,
      onVolumeChange: u,
      onVolumeShow: d,
      onVolumeHide: f,
      renderLinkComponent: c,
      mimeType: h,
      onPlay: m
    })
  }
}