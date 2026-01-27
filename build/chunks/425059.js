/** Chunk was on web.js **/
/** chunk id: 425059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./65821.js");
var Chunk743445 = require("./743445.js"),
  Chunk407876 = require("./407876.js"),
  Chunk358579 = require("./358579.js"),
  Chunk381941 = require("./381941.js");
class s extends Chunk407876.A {
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
      this.setUploadingTextForUI(), await (0, a.A)(this.files, true, this._recomputeProgress.bind(this))
    } catch (a) {
      let e = this.files.find(e => e.status === r.jP.ERROR),
        t = null == e ? true : e.error,
        n = a instanceof Error ? a.message : String(a),
        i = {
          type: o.ty.ERROR_SOURCE_UNKNOWN,
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