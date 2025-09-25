/** Chunk was on 27087 **/
/** chunk id: 706371, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d,
  r: () => c
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk447003 = require("./447003.js"),
  Chunk984933 = require("./984933.js"),
  Chunk512508 = require("./512508.jsx"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return (0, i.Wu)([s.ZP], () => {
    let i = s.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
      c = [...s.ZP.getChannels(e)[s.sH], ...s.ZP.getChannels(e)[s.Zb]],
      d = [],
      u = {};
    return i.forEach(e => {
      let {
        channel: t,
        comparator: n
      } = e;
      "null" !== t.id && (u[t.id] = [], d.push({
        channel: t,
        comparator: n
      }))
    }), c.forEach(e => {
      let {
        channel: i,
        comparator: s
      } = e;
      !(i.isThread() || t.has(i.id) || i.isGuildStageVoice() && !r) && (!n && (0, l.Z)(i) || (null == i.parent_id ? d.push({
        channel: i,
        comparator: s
      }) : (null == u[i.parent_id] && (u[i.parent_id] = []), u[i.parent_id].push({
        channel: i,
        comparator: s
      }))))
    }), d.sort((e, t) => {
      let {
        comparator: n,
        channel: r
      } = e, {
        comparator: i,
        channel: l
      } = t;
      return r.isCategory() && !l.isCategory() ? 1 : !r.isCategory() && l.isCategory() ? false : i - n
    }).reduce((e, n) => {
      let {
        channel: r
      } = n;
      if (r.isGuildStageVoice() || r.isThread() || t.has(r.id)) return e;
      e.push((0, a.PM)(r).row);
      let i = u[r.id];
      return null != i && i.length > 0 && i.forEach(t => {
        let {
          channel: n
        } = t;
        e.push((0, a.PM)(n).row)
      }), e
    }, [])
  }, [e, n, r, t])
}

function d(e) {
  let {
    guildId: t,
    selectedChannelIds: n,
    onChange: i,
    placeholder: l,
    includeRoleRestrictedPrivateChannels: s = false,
    includeStageVoiceChannels: o = false,
    helperText: d,
    className: u
  } = e, m = c(t, n, s, o);
  return (0, r.jsx)(a.ZP, {
    channelRows: m,
    guildId: t,
    selectedChannelIds: n,
    onChange: (e, t) => i(e),
    placeholder: l,
    helperText: d,
    className: u
  })
}