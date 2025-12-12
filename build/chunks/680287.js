/** Chunk was on web.js **/
/** chunk id: 680287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk865275 = require("./865275.js"),
  Chunk237992 = require("./237992.js"),
  Chunk959517 = require("./959517.js");
class a extends Chunk865275.Z {
  async uploadFiles(e) {
    super.upload(e);
    let t = new Promise((e, t) => {
        this.once("error", (e, n, r, i) => {
          t({
            file: e,
            code: n,
            responseBody: r,
            reason: i
          })
        }), this.once("complete", () => {
          this._errored || e(this.files)
        })
      }),
      n = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => n.abort()), !await this.compressAndCheckFileSize())) return t;
      this.setUploadingTextForUI(), await (0, i.Z)(this.files, true, this._recomputeProgress.bind(this))
    } catch (e) {
      throw this._handleException(e), {
        file: this._file,
        reason: {
          type: o.xi.ERROR_SOURCE_UNKNOWN,
          msg: e.toString()
        }
      }
    }
    return this._handleComplete(), this.files
  }
}