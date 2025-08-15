/** Chunk was on web.js **/
/** chunk id: 365583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => y,
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk549879 = require("./549879.jsx"),
  Chunk394821 = require("./394821.js"),
  Chunk841784 = require("./841784.js"),
  Chunk833664 = require("./833664.js"),
  Chunk503438 = require("./503438.js"),
  Chunk579630 = require("./579630.js"),
  Chunk26033 = require("./26033.js"),
  Chunk594174 = require("./594174.js"),
  Chunk324745 = require("./324745.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = () => Chunk230711.Z.open(Chunk981631.oAB.CONNECTIONS, null);

function b(e) {
  let {
    activity: t,
    onOpenGameSettings: n
  } = e;
  return (0, f.Z)(t) || (0, d.Z)(t) || (0, l.Z)(t) ? E : (0, u.Z)(t) && !(0, c.Z)(t) ? n : null
}

function y(e) {
  let {
    entry: t,
    onOpenGameSettings: n
  } = e;
  return (0, _.aA)(t) || (0, _.y0)(t) || (0, _.dU)(t) ? E : (0, _.dX)(t) ? n : null
}

function O(e) {
  let {
    activity: t,
    entry: n,
    onOpenGameSettings: r
  } = e;
  return null != n ? y({
    entry: n,
    onOpenGameSettings: r
  }) : null != t ? b({
    activity: t,
    onOpenGameSettings: r
  }) : null
}

function v(e) {
  let {
    user: t,
    activity: n,
    entry: o,
    onAction: l,
    onClose: c,
    appContext: u
  } = e, d = (0, h.Z)({
    onClose: c
  });
  if (!(0, i.e7)([p.default], () => {
      var e;
      return (null == (e = p.default.getCurrentUser()) ? true : e.id) === t.id
    })) return null;
  let f = O({
    activity: n,
    entry: o,
    onOpenGameSettings: d
  });
  return null == f ? null : (0, r.jsx)(a.sNh, {
    id: "manage-privacy",
    label: g.intl.string(g.t.anfNPT),
    action: () => {
      null == l || l({
        action: "PRESS_MANAGE_PRIVACY_MENU_ITEM"
      }), f(), (0, s.i)(u), null == c || c()
    }
  })
}