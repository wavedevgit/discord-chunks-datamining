/** Chunk was on web.js **/
/** chunk id: 242133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => s
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk626584 = require("./626584.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk158719 = require("./158719.js");

function s() {
  if (i.isPlatformEmbedded) {
    let e;
    if ("json" !== (0, o.oT)()) {
      try {
        e = a.Ay.requireModule("discord_erlpack")
      } catch (t) {
        try {
          e = a.Ay.requireModule("erlpack")
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
            throw new r.A("GatewayEncodingErlpackEncoding").error("Error unpacking", {
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