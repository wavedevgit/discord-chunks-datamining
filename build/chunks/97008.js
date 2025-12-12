/** Chunk was on web.js **/
/** chunk id: 97008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./415506.js");
var Chunk141795 = require("./141795.js"),
  Chunk476326 = require("./476326.js"),
  Chunk956664 = require("./956664.js"),
  Chunk693824 = require("./693824.js");
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
    if (n === o.kH.Base64) return this.toDataUrl(e, s, l);
    if (n === o.kH.Blob) {
      let t = this.toDataUrl(e, s, l);
      return (0, a.kD)(t)
    }
    if (n === o.kH.File) {
      let t = this.toDataUrl(e, s, l);
      return await (0, a.Bo)(t, c, "image/png")
    }
    if (n === o.kH.CloudUpload) {
      let {
        channelId: n
      } = t, o = this.toDataUrl(e, s, l), u = await (0, a.Bo)(o, c, "image/png");
      return new r.nH({
        file: u,
        platform: i.ow.WEB,
        isThumbnail: false,
        origin: "unknown:canvas_export"
      }, n)
    }
    throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
  }
}
let l = s