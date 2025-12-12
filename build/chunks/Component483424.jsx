/** Chunk was on web.js **/
/** chunk id: 483424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk468363 = require("./468363.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk151545 = require("./151545.jsx"),
  Chunk769140 = require("./769140.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk231338 = require("./231338.js");

function _(e) {
  let {
    user: t,
    currentUser: n,
    guildId: _,
    className: m,
    onClose: h
  } = e, {
    live: g,
    stream: E
  } = (0, l.Z)(t.id), [b] = g, {
    voiceChannel: y
  } = (0, c.Z)({
    userId: t.id,
    guildId: _
  }), O = t.id === n.id, v = (0, i.e7)([s.Z, o.Z], () => {
    let e = O ? s.Z.getStatus() : o.Z.getStatus(t.id, _);
    return e === p.Sk.OFFLINE || e === p.Sk.INVISIBLE
  }), {
    voiceActivityStatusEnabled: S
  } = (0, a.U)({
    location: "UserProfileFeaturedActivity"
  });
  return v || null == E ? v || null == b ? S && !v && null != y ? (0, r.jsx)(f.Z, {
    user: t,
    currentUser: n,
    voiceChannel: y,
    className: m,
    onClose: h
  }) : null : (0, r.jsx)(u.Z, {
    user: t,
    currentUser: n,
    activity: b,
    className: m,
    onClose: h
  }) : (0, r.jsx)(d.Z, {
    user: t,
    currentUser: n,
    stream: E,
    className: m,
    onClose: h
  })
}