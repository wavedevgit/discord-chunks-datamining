/** Chunk was on web.js **/
/** chunk id: 939075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v,
  y: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk541806 = require("./541806.js"),
  Chunk765379 = require("./765379.js"),
  Chunk672979 = require("./672979.js"),
  Chunk90644 = require("./90644.js"),
  Chunk717306 = require("./717306.js"),
  Chunk20805 = require("./20805.js"),
  Chunk474397 = require("./474397.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk301736 = require("./301736.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let b = () => (0, _.openUserSettings)(p.X.CONNECTIONS_PANEL, {
  section: g.nc_.CONNECTIONS
});

function y(e) {
  let {
    activity: t,
    onOpenGameSettings: n
  } = e;
  return (0, u.A)(t) || (0, c.A)(t) || (0, s.A)(t) ? b : (0, l.A)(t) && !(0, o.A)(t) ? n : null
}

function O(e) {
  let {
    entry: t,
    onOpenGameSettings: n
  } = e;
  return (0, d.aj)(t) || (0, d.Lf)(t) || (0, d.Tq)(t) ? b : (0, d.zD)(t) ? n : null
}

function A(e) {
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

function v(e) {
  let {
    user: t,
    activity: n,
    entry: s,
    onAction: o,
    onClose: l,
    appContext: c
  } = e, u = (0, m.A)();
  if (!(0, i.bG)([h.default], () => {
      var e;
      return (null == (e = h.default.getCurrentUser()) ? true : e.id) === t.id
    })) return null;
  let d = A({
    activity: n,
    entry: s,
    onOpenGameSettings: u
  });
  return null == d ? null : (0, r.jsx)(a.Drp, {
    id: "manage-privacy",
    label: E.intl.string(E.t.anfNPV),
    action: () => {
      null == o || o({
        action: "PRESS_MANAGE_PRIVACY_MENU_ITEM"
      }), d(), (0, f.A)(c), null == l || l()
    }
  })
}