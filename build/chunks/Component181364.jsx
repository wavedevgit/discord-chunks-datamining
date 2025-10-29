/** Chunk was on 63141 **/
/** chunk id: 181364, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk13245 = require("./13245.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => (0, s.QR)(e, (0, c.P)(), u.t["z8/sgJ"]);

function h(e) {
  let {
    type: t
  } = e, {
    icon: s,
    title: h,
    body: f,
    hint: g,
    notifType: m
  } = function(e, t) {
    if (t.type === d.nc.NEWS) {
      var n, i, r, s, o, l, a, c;
      return {
        icon: null != (o = null == (n = t.news) ? true : n.icon) ? o : e.icon,
        title: null != (l = null == (i = t.news) ? true : i.title) ? l : e.title,
        body: null != (a = null == (r = t.news) ? true : r.body) ? a : e.body,
        hint: null != (c = null == (s = t.news) ? true : s.hint) ? c : e.hint,
        notifType: null != t.news ? d.n0.NewsNudge : e.notifType
      }
    }
    return e
  }({
    icon: n(328756),
    title: u.intl.string(u.t.pkXAeG),
    body: null,
    hint: p,
    notifType: d.n0.WelcomeNudge
  }, e), {
    trackView: y,
    trackClick: _
  } = (0, c.R)(m, {
    notif_type: m
  });
  return {
    icon: s,
    title: h,
    body: f,
    hint: g,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: u.intl.string(u.t["9MyuT0"])
    }),
    onNotificationShow: () => {
      y()
    },
    onNotificationClick: (e, n) => {
      _("unlock"), t === d.nc.NEWS && r.Z.updateNotificationStatus(n), o.default.isOverlayOOPEnabledForPid((0, a.getPID)()) ? r.Z.setInputLocked(false, (0, a.getPID)()) : l.default.isInstanceLocked() && r.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      _("dismiss")
    }
  }
}