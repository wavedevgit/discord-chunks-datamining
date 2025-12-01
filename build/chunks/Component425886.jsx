/** Chunk was on web.js **/
/** chunk id: 425886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk403182 = require("./403182.js"),
  Chunk640108 = require("./640108.jsx");
class s extends Chunk473749.PureComponent {
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
      autoMute: p,
      onMute: _,
      mimeType: m,
      onPlay: h
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk640108.ZP, {
      src: module,
      fileName: require,
      fileSize: (0, Chunk403182.Ng)(exports),
      fileSizeBytes: exports,
      type: Chunk640108.ZP.Types.AUDIO,
      className: Chunk473749,
      playable: s,
      volume: l,
      onMute: _,
      autoMute: p,
      onVolumeChange: u,
      onVolumeShow: d,
      onVolumeHide: f,
      renderLinkComponent: c,
      mimeType: m,
      onPlay: h
    })
  }
}