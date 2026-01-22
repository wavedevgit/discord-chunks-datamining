/** Chunk was on web.js **/
/** chunk id: 970931, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ES: () => _,
  kB: () => p
});
var Chunk406935 = require("./406935.js"),
  Chunk157559 = require("./157559.js"),
  Chunk827827 = require("./827827.js"),
  Chunk253932 = require("./253932.js"),
  Chunk594061 = require("./594061.js"),
  Chunk461213 = require("./461213.js"),
  Chunk954571 = require("./954571.js"),
  Chunk406535 = require("./406535.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p() {
  let e = s.NO.useSetting(),
    t = s.Jr.useSetting();
  return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0)
}

function _(e, t) {
  let n = s.NO.getSetting();
  o.wc.updateAsync("notifications", n => {
    n.quietMode = r._t.create({
      value: e
    }), n.focusModeExpiresAtMs = e && null != t ? "".concat(Date.now() + t) : "0"
  }, o.Sb.INFREQUENT_USER_ACTION), c.default.track(d.HAw.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: u.Y.ACCOUNT,
    quiet_mode_enabled: e,
    quiet_mode_enabled_old: n
  }), l.A.getStatus() === d.clD.DND && e && null == t && i.A.show({
    title: f.intl.string(f.t["B+cbLS"]),
    body: f.intl.string(f.t.CYVgLI),
    cancelText: f.intl.string(f.t.f3Pet9),
    confirmText: f.intl.string(f.t.BddRzS),
    onConfirm: () => {
      (0, a.A)({
        nextStatus: d.clD.ONLINE
      })
    }
  })
}