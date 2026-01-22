/** Chunk was on web.js **/
/** chunk id: 274593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk255438 = require("./255438.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  get displayMessage() {
    if (null == this.code) return a.intl.string(a.t["5NMPSS"]);
    let {
      path: e
    } = this.context;
    switch (this.code) {
      case i.Hi.DISK_LOW:
        let {
          available: t, required: n
        } = this.context, s = (0, r.Xq)(t, {
          useKibibytes: true
        }), o = (0, r.Xq)(n, {
          useKibibytes: true
        });
        return a.intl.formatToPlainString(a.t["2DR5dl"], {
          required: o,
          available: s
        });
      case i.Hi.POST_INSTALL_FAILED:
        let {
          name: l
        } = this.context;
        return a.intl.formatToPlainString(a.t.hP0B3A, {
          name: l
        });
      case i.Hi.FILE_NAME_TOO_LONG:
        return a.intl.string(a.t["FWht5+"]);
      case i.Hi.POST_INSTALL_CANCELLED:
        return a.intl.string(a.t["9CNxFJ"]);
      case i.Hi.IO_PERMISSION_DENIED:
        return a.intl.string(a.t["PJx5+Z"]);
      case i.Hi.NO_MANIFESTS:
        return a.intl.string(a.t.gLM395);
      case i.Hi.NOT_ENTITLED:
        return a.intl.string(a.t.TLCR43);
      case i.Hi.NOT_DIRECTORY:
      case i.Hi.DISK_PERMISSION_DENIED:
        return a.intl.formatToPlainString(a.t.EjWbO6, {
          path: e
        });
      case i.Hi.INVALID_DRIVE:
        return a.intl.formatToPlainString(a.t["08L2TG"], {
          path: e
        });
      case i.Hi.APPLICATION_LOCK_FAILED:
        return a.intl.string(a.t.RDYCUV);
      case i.Hi.DISK_FULL:
        return a.intl.string(a.t.mojtDJ);
      case i.Hi.API_ERROR:
      case i.Hi.MAX_REQUEST_RETRIES_EXCEEDED:
        return a.intl.string(a.t.OXD41D);
      default:
        return a.intl.formatToPlainString(a.t.r477WB, {
          code: "".concat(this.code)
        })
    }
  }
  constructor(e) {
    s(this, "raw", true), s(this, "context", true), s(this, "code", true), s(this, "uuid", true), s(this, "applicationId", true), s(this, "branchId", true), this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {}
  }
}