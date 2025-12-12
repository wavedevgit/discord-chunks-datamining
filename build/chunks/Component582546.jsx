/** Chunk was on web.js **/
/** chunk id: 582546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26033 = require("./26033.js"),
  Chunk740605 = require("./740605.js"),
  Chunk180335 = require("./180335.js"),
  Chunk768419 = require("./768419.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  var t;
  let {
    user: n,
    entry: h,
    display: g,
    onAction: E,
    onClose: b
  } = e, y = (0, i.e7)([f.default], () => {
    var e;
    return (null == (e = f.default.getCurrentUser()) ? true : e.id) === n.id
  }), O = (0, i.e7)([c.Z], () => c.Z.hasConnectedAccount());
  if ("recent" !== g || !(0, l.AZ)(h)) return null;
  if (!O) return (0, r.jsx)(o.sNh, {
    id: "connect-spotify",
    label: m.intl.formatToPlainString(m.t.XWSHTb, {
      platform: _.ai
    }),
    action: () => {
      null == E || E({
        action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM"
      }), (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, {
        section: p.oAB.CONNECTIONS
      }), null == b || b()
    }
  });
  if (y) return null;
  let v = (0, a.dU)(h) ? null == (t = h.extra.entries[0]) ? true : t.media : h.extra.media;
  return null == v ? null : (0, r.jsx)(o.sNh, {
    id: "play-on-spotify",
    label: m.intl.string(m.t.rRffNz),
    action: () => {
      null == E || E({
        action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM"
      }), (0, s.o)(_.Hw.TRACK, v.external_id)
    }
  })
}