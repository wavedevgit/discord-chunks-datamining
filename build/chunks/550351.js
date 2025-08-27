/** Chunk was on web.js **/
/** chunk id: 550351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk709054 = require("./709054.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  var t, n;
  if (null != e) {
    let {
      ownerId: t
    } = i.my(e);
    if (t !== o.default.getId()) {
      let e = s.Z.getActivities(t).find(e => e.type === f.IIU.PLAYING);
      return {
        sourceName: null == e ? true : e.name,
        sourceApplicationId: null == e ? true : e.application_id
      }
    }
  }
  let l = a.Z.getStreamerActiveStreamMetadata(),
    c = null == l ? true : l.pid,
    u = null != l ? null != c ? r.ZP.getGameForPID(c) : null : r.ZP.getVisibleGame();
  return {
    sourceName: null != (t = null == l ? true : l.sourceName) ? t : null == u ? true : u.name,
    sourceApplicationId: null != (n = null == l ? true : l.id) ? n : null == u ? true : u.id
  }
}

function h(e) {
  let {
    sourceName: t,
    sourceApplicationId: n
  } = p(e), r = l.Z.getChannelId(), i = [o.default.getId()];
  return null != r && (i = Object.keys(c.Z.getVoiceStatesForChannel(r))), {
    id: u.default.fromTimestamp(Date.now()),
    version: d.Bg,
    applicationName: null != t ? t : _.intl.string(_.t.qtSJxc),
    applicationId: n,
    users: i,
    clipMethod: "manual",
    length: 0,
    thumbnail: ""
  }
}