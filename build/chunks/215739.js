/** Chunk was on web.js **/
/** chunk id: 215739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk381499 = require("./381499.js"),
  Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk246133 = require("./246133.js"),
  Chunk734934 = require("./734934.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk846519.V7,
  p = new Chunk846519.V7,
  h = new Chunk846519.V7;
class m extends Chunk147913.Z {
  constructor(...e) {
    super(...e), f(this, "actions", {
      USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
      POST_CONNECTION_OPEN: () => this.handleUpdateProto()
    }), f(this, "handleUpdateProto", () => {
      this.manageExpiringCustomStatus(), this.manageExpiringStatus(), this.lazilyMigrateStatusCreatedAt(), this.manageExpiringFocusMode()
    }), f(this, "manageExpiringCustomStatus", () => {
      let e = l.Ok.getSetting();
      if (null == e) h.stop();
      else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
        let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
        t > 0 ? h.start(t, () => {
          l.Ok.updateSetting(true)
        }, true) : (l.Ok.updateSetting(true), h.stop())
      } else null != h && h.stop()
    }), f(this, "manageExpiringStatus", () => {
      let e = l.Cr.getSetting();
      if (null != e && "0" !== e && u.Z.getStatus() !== d.Skl.ONLINE) {
        let t = new Date(Number(e)).getTime() - new Date().getTime();
        t > 0 ? _.start(t, () => {
          (0, o.Z)({
            nextStatus: d.Skl.ONLINE,
            analyticsContext: {
              location: {
                object: d.qAy.CUSTOM_STATUS_MANAGER
              }
            }
          })
        }, true) : ((0, o.Z)({
          nextStatus: d.Skl.ONLINE,
          analyticsContext: {
            location: {
              object: d.qAy.CUSTOM_STATUS_MANAGER
            }
          }
        }), _.stop())
      } else null != _ && _.stop()
    }), f(this, "lazilyMigrateStatusCreatedAt", () => {
      u.Z.getStatus() !== d.Skl.ONLINE && null == l.P4.getSetting() && c.hW.updateAsync("status", e => {
        e.statusCreatedAtMs = r.wA.create({
          value: "".concat(Date.now())
        })
      }, c.fy.INFREQUENT_USER_ACTION)
    }), f(this, "manageExpiringFocusMode", () => {
      let e = l.fv.getSetting();
      if (null != e && "0" !== e) {
        let t = new Date(Number(e)).getTime() - new Date().getTime();
        t > 0 ? p.start(t, () => {
          (0, s.oW)(false)
        }, true) : ((0, s.oW)(false), p.stop())
      } else null != p && p.stop()
    })
  }
}
let g = new m