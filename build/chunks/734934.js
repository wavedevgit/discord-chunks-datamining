/** Chunk was on web.js **/
/** chunk id: 734934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  oW: () => _,
  p: () => p
});
var Chunk381499 = require("./381499.js"),
  Chunk668781 = require("./668781.js"),
  Chunk246133 = require("./246133.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk468788 = require("./468788.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let e = Chunk695346.QZ.useSetting(),
    t = Chunk695346.fv.useSetting();
  return module && ("0" === exports || new Date(Number(exports)).getTime() - new Date().getTime() > 0)
}

function _(e, t) {
  let n = a.QZ.getSetting();
  s.hW.updateAsync("notifications", n => {
    n.quietMode = r.D5.create({
      value: e
    }), n.focusModeExpiresAtMs = e && null != t ? "".concat(Date.now() + t) : "0"
  }, s.fy.INFREQUENT_USER_ACTION), c.default.track(d.rMx.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: u.I.ACCOUNT,
    quiet_mode_enabled: e,
    quiet_mode_enabled_old: n
  }), l.Z.getStatus() === d.Skl.DND && e && null == t && i.Z.show({
    title: f.intl.string(f.t["B+cbLS"]),
    body: f.intl.string(f.t.CYVgLI),
    cancelText: f.intl.string(f.t.f3Pet9),
    confirmText: f.intl.string(f.t.BddRzS),
    onConfirm: () => {
      (0, o.Z)({
        nextStatus: d.Skl.ONLINE
      })
    }
  })
}