/** Chunk was on 84018 **/
/** chunk id: 102037, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk684013 = require("./684013.js"),
  Chunk471024 = require("./471024.jsx"),
  Chunk833551 = require("./833551.js"),
  Chunk256415 = require("./256415.js"),
  Chunk9302 = require("./9302.js"),
  Chunk684748 = require("./684748.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");
let h = e => (0, s.sI)(e, (0, c.J)(), u.t["z8/sgJ"]);

function p(e) {
  let {
    type: t
  } = e, {
    icon: s,
    title: p,
    body: f,
    hint: b,
    notifType: g
  } = function(e, t) {
    if (t.type === d.Jr.NEWS) {
      var n, i, r, s, l, o, a, c;
      return {
        icon: null != (n = null == (l = t.news) ? true : l.icon) ? n : e.icon,
        title: null != (i = null == (o = t.news) ? true : o.title) ? i : e.title,
        body: null != (r = null == (a = t.news) ? true : a.body) ? r : e.body,
        hint: null != (s = null == (c = t.news) ? true : c.hint) ? s : e.hint,
        notifType: null != t.news ? d.KS.NewsNudge : e.notifType
      }
    }
    return e
  }({
    icon: n(513653),
    title: u.intl.string(u.t.pkXAeG),
    body: null,
    hint: h,
    notifType: d.KS.WelcomeNudge
  }, e), {
    trackView: y,
    trackClick: A
  } = (0, c.Y)(g, {
    notif_type: g
  });
  return {
    icon: s,
    title: p,
    body: f,
    hint: b,
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
      A("unlock"), t === d.Jr.NEWS && r.A.updateNotificationStatus(n), l.default.isOverlayOOPEnabledForPid((0, a.getPID)()) ? r.A.setInputLocked(false, (0, a.getPID)()) : o.default.isInstanceLocked() && r.A.setInstanceLocked(false)
    },
    onDismissClick: () => {
      A("dismiss")
    }
  }
}