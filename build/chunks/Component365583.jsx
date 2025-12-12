/** Chunk was on web.js **/
/** chunk id: 365583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => O,
  Z: () => S
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk394821 = require("./394821.js"),
  Chunk841784 = require("./841784.js"),
  Chunk833664 = require("./833664.js"),
  Chunk503438 = require("./503438.js"),
  Chunk579630 = require("./579630.js"),
  Chunk26033 = require("./26033.js"),
  Chunk887413 = require("./887413.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk324745 = require("./324745.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = () => (0, Chunk518596.openUserSettings)(Chunk313789.n.CONNECTIONS_PANEL, {
  section: Chunk981631.oAB.CONNECTIONS
});

function y(e) {
  let {
    activity: t,
    onOpenGameSettings: n
  } = e;
  return (0, u.Z)(t) || (0, c.Z)(t) || (0, a.Z)(t) ? b : (0, l.Z)(t) && !(0, s.Z)(t) ? n : null
}

function O(e) {
  let {
    entry: t,
    onOpenGameSettings: n
  } = e;
  return (0, d.aA)(t) || (0, d.y0)(t) || (0, d.dU)(t) ? b : (0, d.dX)(t) ? n : null
}

function v(e) {
  let {
    activity: t,
    entry: n,
    onOpenGameSettings: r
  } = e;
  return null != n ? O({
    entry: n,
    onOpenGameSettings: r
  }) : null != t ? y({
    activity: t,
    onOpenGameSettings: r
  }) : null
}

function S(e) {
  let {
    user: t,
    activity: n,
    entry: a,
    onAction: s,
    onClose: l,
    appContext: c
  } = e, u = (0, h.Z)();
  if (!(0, i.e7)([m.default], () => {
      var e;
      return (null == (e = m.default.getCurrentUser()) ? true : e.id) === t.id
    })) return null;
  let d = v({
    activity: n,
    entry: a,
    onOpenGameSettings: u
  });
  return null == d ? null : (0, r.jsx)(o.sNh, {
    id: "manage-privacy",
    label: E.intl.string(E.t.anfNPV),
    action: () => {
      null == s || s({
        action: "PRESS_MANAGE_PRIVACY_MENU_ITEM"
      }), d(), (0, f.i)(c), null == l || l()
    }
  })
}