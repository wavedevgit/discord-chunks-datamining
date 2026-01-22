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
class o {
  toDataUrl(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "png",
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1;
    return e.toDataURL(t, n)
  }
  async exportCanvas(e, t) {
    let {
      format: n,
      fileType: o = "png",
      quality: l = 1,
      fileName: c
    } = t;
    if (n === s.z5.Base64) return this.toDataUrl(e, o, l);
    if (n === s.z5.Blob) {
      let t = this.toDataUrl(e, o, l);
      return (0, a.aU)(t)
    }
    if (n === s.z5.File) {
      let t = this.toDataUrl(e, o, l);
      return await (0, a.bX)(t, c, "image/png")
    }
    if (n === s.z5.CloudUpload) {
      let {
        channelId: n
      } = t, s = this.toDataUrl(e, o, l), u = await (0, a.bX)(s, c, "image/png");
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
let l = o