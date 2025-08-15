/** Chunk was on web.js **/
/** chunk id: 215739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk246133 = require("./246133.js"),
  Chunk734934 = require("./734934.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk846519.V7,
  f = new Chunk846519.V7,
  _ = new Chunk846519.V7;
class p extends Chunk147913.Z {
  constructor(...e) {
    super(...e), u(this, "actions", {
      USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
      POST_CONNECTION_OPEN: () => this.handleUpdateProto()
    }), u(this, "handleUpdateProto", () => {
      let e = s.Ok.getSetting();
      if (null == e) _.stop();
      else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
        let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
        t > 0 ? _.start(t, () => {
          s.Ok.updateSetting(true)
        }, true) : (s.Ok.updateSetting(true), _.stop())
      } else null != _ && _.stop();
      let t = s.Cr.getSetting();
      if (null != t && "0" !== t && l.Z.getStatus() !== c.Skl.ONLINE) {
        let e = new Date(Number(t)).getTime() - new Date().getTime();
        e > 0 ? d.start(e, () => {
          (0, a.Z)({
            nextStatus: c.Skl.ONLINE,
            prevStatus: l.Z.getStatus(),
            analyticsContext: {
              location: {
                object: c.qAy.CUSTOM_STATUS_MANAGER
              }
            }
          })
        }, true) : ((0, a.Z)({
          nextStatus: c.Skl.ONLINE,
          prevStatus: l.Z.getStatus(),
          analyticsContext: {
            location: {
              object: c.qAy.CUSTOM_STATUS_MANAGER
            }
          }
        }), d.stop())
      } else null != d && d.stop();
      let n = s.fv.getSetting();
      if (null != n && "0" !== n) {
        let e = new Date(Number(n)).getTime() - new Date().getTime();
        e > 0 ? f.start(e, () => {
          (0, o.oW)(false)
        }, true) : ((0, o.oW)(false), f.stop())
      } else null != f && f.stop()
    })
  }
}
let h = new p