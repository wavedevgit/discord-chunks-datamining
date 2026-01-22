/** Chunk was on web.js **/
/** chunk id: 340137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk554146 = require("./554146.js"),
  Chunk406935 = require("./406935.js"),
  Chunk451988 = require("./451988.js"),
  Chunk439372 = require("./439372.js"),
  Chunk827827 = require("./827827.js"),
  Chunk970931 = require("./970931.js"),
  Chunk253932 = require("./253932.js"),
  Chunk594061 = require("./594061.js"),
  Chunk461213 = require("./461213.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk451988.Ep,
  h = new Chunk451988.Ep,
  m = new Chunk451988.Ep;
class g extends Chunk439372.A {
  constructor(...e) {
    super(...e), p(this, "previousStatus", null), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      USER_SETTINGS_PROTO_UPDATE: () => this.handleUserSettingsProtoUpdate()
    }), p(this, "handlePostConnectionOpen", () => {
      this.previousStatus = d.A.getStatus(), this.handleCommonUpdates()
    }), p(this, "handleUserSettingsProtoUpdate", () => {
      this.handleCommonUpdates(), this.manageDoNotDisturbReminderPopover()
    }), p(this, "handleCommonUpdates", () => {
      this.manageExpiringCustomStatus(), this.manageExpiringStatus(), this.lazilyMigrateStatusCreatedAt(), this.manageExpiringFocusMode()
    }), p(this, "manageExpiringCustomStatus", () => {
      let e = c.G2.getSetting();
      if (null == e) m.stop();
      else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
        let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
        t > 0 ? m.start(t, () => {
          c.G2.updateSetting(true)
        }, true) : (c.G2.updateSetting(true), m.stop())
      } else null != m && m.stop()
    }), p(this, "manageExpiringStatus", () => {
      let e = c.CY.getSetting();
      if (null != e && "0" !== e && d.A.getStatus() !== f.clD.ONLINE) {
        let t = new Date(Number(e)).getTime() - new Date().getTime();
        t > 0 ? _.start(t, () => {
          (0, o.A)({
            nextStatus: f.clD.ONLINE,
            analyticsContext: {
              location: {
                object: f.ZSU.CUSTOM_STATUS_MANAGER
              }
            }
          })
        }, true) : ((0, o.A)({
          nextStatus: f.clD.ONLINE,
          analyticsContext: {
            location: {
              object: f.ZSU.CUSTOM_STATUS_MANAGER
            }
          }
        }), _.stop())
      } else null != _ && _.stop()
    }), p(this, "lazilyMigrateStatusCreatedAt", () => {
      d.A.getStatus() !== f.clD.ONLINE && null == c._6.getSetting() && u.wc.updateAsync("status", e => {
        e.statusCreatedAtMs = i.ol.create({
          value: "".concat(Date.now())
        })
      }, u.Sb.INFREQUENT_USER_ACTION)
    }), p(this, "manageExpiringFocusMode", () => {
      let e = c.Jr.getSetting();
      if (null != e && "0" !== e) {
        let t = new Date(Number(e)).getTime() - new Date().getTime();
        t > 0 ? h.start(t, () => {
          (0, l.ES)(false)
        }, true) : ((0, l.ES)(false), h.stop())
      } else null != h && h.stop()
    }), p(this, "manageDoNotDisturbReminderPopover", () => {
      if (null == this.previousStatus) {
        this.previousStatus = d.A.getStatus();
        return
      }
      let e = d.A.getStatus();
      this.previousStatus !== f.clD.DND && e === f.clD.DND && (0, u._N)(r.M.DO_NOT_DISTURB_REMINDER_POPOVER), this.previousStatus = e
    })
  }
}
let E = new g