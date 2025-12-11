/** Chunk was on 63141 **/
/** chunk id: 181364, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk13245 = require("./13245.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");
let f = e => (0, a.QR)(e, (0, c.P)(), u.t["z8/sgJ"]);

function h(e) {
  let {
    type: t
  } = e, {
    icon: a,
    title: h,
    body: p,
    hint: g,
    notifType: b
  } = function(e, t) {
    if (t.type === d.nc.NEWS) {
      var n, i, r, a, s, o, l, c;
      return {
        icon: null != (s = null == (n = t.news) ? true : n.icon) ? s : e.icon,
        title: null != (o = null == (i = t.news) ? true : i.title) ? o : e.title,
        body: null != (l = null == (r = t.news) ? true : r.body) ? l : e.body,
        hint: null != (c = null == (a = t.news) ? true : a.hint) ? c : e.hint,
        notifType: null != t.news ? d.n0.NewsNudge : e.notifType
      }
    }
    return e
  }({
    icon: n(328756),
    title: u.intl.string(u.t.pkXAeG),
    body: null,
    hint: f,
    notifType: d.n0.WelcomeNudge
  }, e), {
    trackView: m,
    trackClick: y
  } = (0, c.R)(b, {
    notif_type: b
  });
  return {
    icon: a,
    title: h,
    body: p,
    hint: g,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: u.intl.string(u.t["9MyuT0"])
    }),
    onNotificationShow: () => {
      m()
    },
    onNotificationClick: (e, n) => {
      y("unlock"), t === d.nc.NEWS && r.Z.updateNotificationStatus(n), s.default.isOverlayOOPEnabledForPid((0, l.getPID)()) ? r.Z.setInputLocked(false, (0, l.getPID)()) : o.default.isInstanceLocked() && r.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}