/** Chunk was on web.js **/
/** chunk id: 582546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk26033 = require("./26033.js"),
  Chunk740605 = require("./740605.js"),
  Chunk180335 = require("./180335.js"),
  Chunk768419 = require("./768419.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  var t;
  let {
    user: n,
    entry: h,
    display: m,
    onAction: g,
    onClose: E
  } = e, b = (0, i.e7)([d.default], () => {
    var e;
    return (null == (e = d.default.getCurrentUser()) ? true : e.id) === n.id
  }), y = (0, i.e7)([u.Z], () => u.Z.hasConnectedAccount());
  if ("recent" !== m || !(0, c.AZ)(h)) return null;
  if (!y) return (0, r.jsx)(o.sNh, {
    id: "connect-spotify",
    label: p.intl.formatToPlainString(p.t.XWSHTU, {
      platform: _.ai
    }),
    action: () => {
      null == g || g({
        action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM"
      }), a.Z.open(f.oAB.CONNECTIONS), null == E || E()
    }
  });
  if (b) return null;
  let O = (0, s.dU)(h) ? null == (t = h.extra.entries[0]) ? true : t.media : h.extra.media;
  return null == O ? null : (0, r.jsx)(o.sNh, {
    id: "play-on-spotify",
    label: p.intl.string(p.t.rRffNz),
    action: () => {
      null == g || g({
        action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM"
      }), (0, l.o)(_.Hw.TRACK, O.external_id)
    }
  })
}