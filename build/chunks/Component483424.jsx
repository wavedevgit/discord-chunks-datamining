/** Chunk was on web.js **/
/** chunk id: 483424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk468363 = require("./468363.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk151545 = require("./151545.jsx"),
  Chunk493043 = require("./493043.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk231338 = require("./231338.js");

function p(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: p,
    guildId: h,
    className: m,
    onClose: g
  } = e, {
    live: E,
    stream: b
  } = (0, l.Z)(t.id), [y] = E, {
    voiceChannel: O
  } = (0, c.Z)({
    userId: t.id,
    guildId: h
  }), v = t.id === n.id, I = (0, i.e7)([s.Z, a.Z], () => {
    let e = v ? s.Z.getStatus() : a.Z.getStatus(t.id, h);
    return e === _.Sk.OFFLINE || e === _.Sk.INVISIBLE
  }), {
    voiceActivityStatusEnabled: T
  } = (0, o.U)({
    location: "UserProfileFeaturedActivity"
  });
  return I || null == b ? I || null == y ? T && !I && null != O ? (0, r.jsx)(f.Z, {
    user: t,
    currentUser: n,
    voiceChannel: O,
    className: m,
    onClose: g
  }) : null : (0, r.jsx)(u.Z, {
    user: t,
    currentUser: n,
    activity: y,
    profileGuildId: null == p ? true : p.guildId,
    className: m,
    onClose: g
  }) : (0, r.jsx)(d.Z, {
    location: "UserProfileFeaturedActivity",
    user: t,
    currentUser: n,
    stream: b,
    profileGuildId: null == p ? true : p.guildId,
    className: m,
    onClose: g
  })
}