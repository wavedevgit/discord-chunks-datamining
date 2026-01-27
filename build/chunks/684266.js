/** Chunk was on web.js **/
/** chunk id: 684266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./65821.js");
var Chunk743445 = require("./743445.js"),
  Chunk565150 = require("./565150.js"),
  Chunk515718 = require("./515718.js"),
  Chunk583954 = require("./583954.js");
class s {
  toDataUrl(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "png",
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1;
    return e.toDataURL(t, n)
  }
  async exportCanvas(e, t) {
    let {
      format: n,
      fileType: s = "png",
      quality: l = 1,
      fileName: c
    } = t;
    if (n === o.z5.Base64) return this.toDataUrl(e, s, l);
    if (n === o.z5.Blob) {
      let t = this.toDataUrl(e, s, l);
      return (0, a.aU)(t)
    }
    if (n === o.z5.File) {
      let t = this.toDataUrl(e, s, l);
      return await (0, a.bX)(t, c, "image/png")
    }
    if (n === o.z5.CloudUpload) {
      let {
        channelId: n
      } = t, o = this.toDataUrl(e, s, l), u = await (0, a.bX)(o, c, "image/png");
      return new r.bK({
        file: u,
        platform: i.xz.WEB,
        isThumbnail: false,
        origin: "unknown:canvas_export"
      }, n)
    }
    throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
  }
}
let l = s