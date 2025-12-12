/** Chunk was on web.js **/
/** chunk id: 192079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ER: () => d,
  kk: () => f,
  s$: () => p
}), require("./388685.js"), require("./392711.js");
var Chunk19780 = require("./19780.js"),
  Chunk5192 = require("./5192.js"),
  Chunk700785 = require("./700785.js"),
  Chunk427679 = require("./427679.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n, r) {
  let o = t[0],
    a = i.ZP.getName(e, n, o),
    s = null != r ? r : t.length;
  return 1 === s && null != o ? a : null == o ? u.intl.formatToPlainString(u.t.chmM9N, {
    count: s
  }) : u.intl.formatToPlainString(u.t.GhkJ21, {
    name: a,
    count: s - 1
  })
}

function f(e, t) {
  switch (e) {
    case c.aC.OWNER:
      return u.intl.string(u.t.icuNBM);
    case c.aC.ADMINISTRATOR:
      return u.intl.string(u.t.eTmN5a);
    case c.aC.MEMBER:
    case c.aC.ROLE:
      return t ? u.intl.string(u.t.Hw3XWx) : u.intl.string(u.t.YieyPi);
    case c.aC.EMPTY_STATE:
  }
  return null
}

function p(e) {
  let t = a.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? true : t.topic,
    media_session_id: r.Z.getMediaSessionId(),
    request_to_speak_state: o.Uu(l.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
    stage_instance_id: null == t ? true : t.id
  }
}