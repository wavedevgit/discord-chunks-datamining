/** Chunk was on web.js **/
/** chunk id: 330516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk424218 = require("./424218.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
  get displayMessage() {
    if (null == this.code) return Chunk388032.intl.string(Chunk388032.t["5NMPSS"]);
    let {
      path: e
    } = this.context;
    switch (this.code) {
      case Chunk186901.ff.DISK_LOW:
        let {
          available: t, required: n
        } = this.context, a = (0, Chunk424218.BU)(exports, {
          useKibibytes: true
        }), s = (0, Chunk424218.BU)(require, {
          useKibibytes: true
        });
        return Chunk388032.intl.formatToPlainString(Chunk388032.t["2DR5dl"], {
          required: s,
          available: a
        });
      case Chunk186901.ff.POST_INSTALL_FAILED:
        let {
          name: l
        } = this.context;
        return Chunk388032.intl.formatToPlainString(Chunk388032.t.hP0B3A, {
          name: l
        });
      case Chunk186901.ff.FILE_NAME_TOO_LONG:
        return Chunk388032.intl.string(Chunk388032.t["FWht5+"]);
      case Chunk186901.ff.POST_INSTALL_CANCELLED:
        return Chunk388032.intl.string(Chunk388032.t["9CNxFJ"]);
      case Chunk186901.ff.IO_PERMISSION_DENIED:
        return Chunk388032.intl.string(Chunk388032.t["PJx5+Z"]);
      case Chunk186901.ff.NO_MANIFESTS:
        return Chunk388032.intl.string(Chunk388032.t.gLM395);
      case Chunk186901.ff.NOT_ENTITLED:
        return Chunk388032.intl.string(Chunk388032.t.TLCR43);
      case Chunk186901.ff.NOT_DIRECTORY:
      case Chunk186901.ff.DISK_PERMISSION_DENIED:
        return Chunk388032.intl.formatToPlainString(Chunk388032.t.EjWbO6, {
          path: module
        });
      case Chunk186901.ff.INVALID_DRIVE:
        return Chunk388032.intl.formatToPlainString(Chunk388032.t["08L2TG"], {
          path: module
        });
      case Chunk186901.ff.APPLICATION_LOCK_FAILED:
        return Chunk388032.intl.string(Chunk388032.t.RDYCUV);
      case Chunk186901.ff.DISK_FULL:
        return Chunk388032.intl.string(Chunk388032.t.mojtDJ);
      case Chunk186901.ff.API_ERROR:
      case Chunk186901.ff.MAX_REQUEST_RETRIES_EXCEEDED:
        return Chunk388032.intl.string(Chunk388032.t.OXD41D);
      default:
        return Chunk388032.intl.formatToPlainString(Chunk388032.t.r477WB, {
          code: "".concat(this.code)
        })
    }
  }
  constructor(e) {
    a(this, "raw", true), a(this, "context", true), a(this, "code", true), a(this, "uuid", true), a(this, "applicationId", true), a(this, "branchId", true), this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {}
  }
}