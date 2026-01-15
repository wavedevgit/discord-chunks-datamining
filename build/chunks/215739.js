/** Chunk was on web.js **/
/** chunk id: 215739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk704215 = require("./704215.js"),
  Chunk381499 = require("./381499.js"),
  Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk246133 = require("./246133.js"),
  Chunk734934 = require("./734934.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk846519.V7,
  h = new Chunk846519.V7,
  m = new Chunk846519.V7;
class g extends Chunk147913.Z {
  constructor(...e) {
    super(...e), p(this, "previousStatus", null), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      USER_SETTINGS_PROTO_UPDATE: () => this.handleUserSettingsProtoUpdate()
    }), p(this, "handlePostConnectionOpen", () => {
      this.previousStatus = d.Z.getStatus(), this.handleCommonUpdates()
    }), p(this, "handleUserSettingsProtoUpdate", () => {
      this.handleCommonUpdates(), this.manageDoNotDisturbReminderPopover()
    }), p(this, "handleCommonUpdates", () => {
      this.manageExpiringCustomStatus(), this.manageExpiringStatus(), this.lazilyMigrateStatusCreatedAt(), this.manageExpiringFocusMode()
    }), p(this, "manageExpiringCustomStatus", () => {
      let e = c.Ok.getSetting();
      if (null == e) m.stop();
      else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
        let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
        t > 0 ? m.start(t, () => {
          c.Ok.updateSetting(true)
        }, true) : (c.Ok.updateSetting(true), m.stop())
      } else null != m && m.stop()
    }), p(this, "manageExpiringStatus", () => {
      let e = c.Cr.getSetting();
      if (null != e && "0" !== e && d.Z.getStatus() !== f.Skl.ONLINE) {
        let t = new Date(Number(e)).getTime() - new Date().getTime();
        t > 0 ? _.start(t, () => {
          (0, s.Z)({
            nextStatus: f.Skl.ONLINE,
            analyticsContext: {
              location: {
                object: f.qAy.CUSTOM_STATUS_MANAGER
              }
            }
          })
        }, true) : ((0, s.Z)({
          nextStatus: f.Skl.ONLINE,
          analyticsContext: {
            location: {
              object: f.qAy.CUSTOM_STATUS_MANAGER
            }
          }
        }), _.stop())
      } else null != _ && _.stop()
    }), p(this, "lazilyMigrateStatusCreatedAt", () => {
      d.Z.getStatus() !== f.Skl.ONLINE && null == c.P4.getSetting() && u.hW.updateAsync("status", e => {
        e.statusCreatedAtMs = i.wA.create({
          value: "".concat(Date.now())
        })
      }, u.fy.INFREQUENT_USER_ACTION)
    }), p(this, "manageExpiringFocusMode", () => {
      let e = c.fv.getSetting();
      if (null != e && "0" !== e) {
        let t = new Date(Number(e)).getTime() - new Date().getTime();
        t > 0 ? h.start(t, () => {
          (0, l.oW)(false)
        }, true) : ((0, l.oW)(false), h.stop())
      } else null != h && h.stop()
    }), p(this, "manageDoNotDisturbReminderPopover", () => {
      if (null == this.previousStatus) {
        this.previousStatus = d.Z.getStatus();
        return
      }
      let e = d.Z.getStatus();
      this.previousStatus !== f.Skl.DND && e === f.Skl.DND && (0, u.Z1)(r.z.DO_NOT_DISTURB_REMINDER_POPOVER), this.previousStatus = e
    })
  }
}
let E = new g