/** Chunk was on web.js **/
/** chunk id: 680287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./415506.js");
var Chunk141795 = require("./141795.js"),
  Chunk865275 = require("./865275.js"),
  Chunk237992 = require("./237992.js"),
  Chunk959517 = require("./959517.js");
class s extends Chunk865275.Z {
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
      this.setUploadingTextForUI(), await (0, a.Z)(this.files, true, this._recomputeProgress.bind(this))
    } catch (a) {
      let e = this.files.find(e => e.status === r.mw.ERROR),
        t = null == e ? true : e.error,
        n = a instanceof Error ? a.message : String(a),
        i = {
          type: o.xi.ERROR_SOURCE_UNKNOWN,
          msg: n
        };
      throw this._handleError({
        code: t,
        reason: i
      }), {
        file: this._file,
        code: t,
        reason: i
      }
    }
    return this._handleComplete(), this.files
  }
}