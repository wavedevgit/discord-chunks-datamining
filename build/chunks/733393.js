/** Chunk was on web.js **/
/** chunk id: 733393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
}), require("./644351.js"), require("./146733.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js");
var Chunk710845 = require("./710845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk690833 = require("./690833.js");

function s() {
  if (i.isPlatformEmbedded) {
    let e;
    if ("json" !== (0, o.CH)()) {
      try {
        e = a.ZP.requireModule("discord_erlpack")
      } catch (t) {
        try {
          e = a.ZP.requireModule("erlpack")
        } catch (e) {}
      }
      if (null != e) return class {
        static canUse() {
          return null != e
        }
        pack(t) {
          return e.pack(t).buffer
        }
        unpack(t) {
          t instanceof ArrayBuffer && (t = new Uint8Array(t));
          try {
            return e.unpack(t)
          } catch (e) {
            throw new r.Z("GatewayEncodingErlpackEncoding").error("Error unpacking", {
              erlpackUnpackError: e,
              erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
              erlpackDataLength: null != t ? t.length : null
            }), e
          }
        }
        getName() {
          return "etf"
        }
        wantsString() {
          returnfalse
        }
      }
    }
  }
}