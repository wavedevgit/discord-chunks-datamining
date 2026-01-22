/** Chunk was on web.js **/
/** chunk id: 106890, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk20805 = require("./20805.js"),
  Chunk261020 = require("./261020.js"),
  Chunk83971 = require("./83971.js"),
  Chunk655116 = require("./655116.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  var t;
  let {
    user: n,
    entry: m,
    display: g,
    onAction: E,
    onClose: b
  } = e, y = (0, i.bG)([f.default], () => {
    var e;
    return (null == (e = f.default.getCurrentUser()) ? true : e.id) === n.id
  }), O = (0, i.bG)([c.A], () => c.A.hasConnectedAccount());
  if ("recent" !== g || !(0, l.F3)(m)) return null;
  if (!O) return (0, r.jsx)(a.Drp, {
    id: "connect-spotify",
    label: h.intl.formatToPlainString(h.t.XWSHTb, {
      platform: _.HD
    }),
    action: () => {
      null == E || E({
        action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM"
      }), (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, {
        section: p.nc_.CONNECTIONS
      }), null == b || b()
    }
  });
  if (y) return null;
  let A = (0, s.Tq)(m) ? null == (t = m.extra.entries[0]) ? true : t.media : m.extra.media;
  return null == A ? null : (0, r.jsx)(a.Drp, {
    id: "play-on-spotify",
    label: h.intl.string(h.t.rRffNz),
    action: () => {
      null == E || E({
        action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM"
      }), (0, o.n)(_.M0.TRACK, A.external_id)
    }
  })
}