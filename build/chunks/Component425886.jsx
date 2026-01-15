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
      mimeType: h,
      onPlay: m
    } = this.props;
    return (0, r.jsx)(o.ZP, {
      src: e,
      fileName: n,
      fileSize: (0, a.Ng)(t),
      fileSizeBytes: t,
      type: o.ZP.Types.AUDIO,
      className: i,
      playable: s,
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