/** Chunk was on web.js **/
/** chunk id: 772162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk815706 = require("./815706.js"),
  Chunk592598 = require("./592598.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null,
  u = new Map,
  d = null;
class f extends Chunk439372.A {
  _initialize() {
    c = null, u.clear(), d = null
  }
  _terminate() {
    c = null, u.clear(), d = null
  }
  constructor(...e) {
    super(...e), l(this, "handleOverlayMounted", e => {
      c = Date.now()
    }), l(this, "handleNotificationEvent", e => {
      if (e.action !== o.uj.Viewed) return;
      let t = Date.now(),
        n = e.notificationType;
      d = {
        timestamp: t,
        notificationType: n
      }, u.set(n, t)
    }), l(this, "handleSetNotificationDisabledSetting", e => {
      let {
        shouldTrack: t,
        setting: n,
        disabled: r
      } = e;
      if (!t) return;
      let o = Date.now(),
        l = null != c ? o - c : null,
        f = null,
        p = null;
      for (let [e, t] of u.entries()) {
        let r = a.A.getDisabledSettingByNotificationType(e);
        if (null != r && r === n) {
          let n = o - t;
          (null == f || n < f) && (f = n, p = {
            notificationType: e,
            timestamp: t
          })
        }
      }
      let _ = null != d && null != p && d.notificationType === p.notificationType && d.timestamp === p.timestamp;
      (0, i.z)(s.HAw.OVERLAY_NOTIFICATION_SETTING_UPDATED, {
        setting: n,
        disabled: r,
        time_since_last_seen_overlay: l,
        time_since_last_seen_notification: f,
        is_most_recent_notification: _,
        most_recent_notification_type: null == p ? true : p.notificationType
      })
    }), l(this, "actions", {
      OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
      OVERLAY_MOUNTED: this.handleOverlayMounted,
      OVERLAY_NOTIFICATION_EVENT: this.handleNotificationEvent
    })
  }
}
let p = new f