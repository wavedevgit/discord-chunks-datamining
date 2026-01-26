/** Chunk was on 39048 **/
/** chunk id: 508595, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d,
  q: () => c
}), require("./896048.js"), require("./321073.js"), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk148719 = require("./148719.js"),
  Chunk808728 = require("./808728.js"),
  Chunk64749 = require("./64749.jsx"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return (0, i.yK)([s.Ay], () => {
    let i = s.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY],
      c = [...s.Ay.getChannels(e)[s.I6], ...s.Ay.getChannels(e)[s.vM]],
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
      i.isThread() || t.has(i.id) || i.isGuildStageVoice() && !r || !n && (0, l.A)(i) || (null == i.parent_id ? d.push({
        channel: i,
        comparator: s
      }) : (null == u[i.parent_id] && (u[i.parent_id] = []), u[i.parent_id].push({
        channel: i,
        comparator: s
      })))
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
      e.push((0, a.eW)(r).row);
      let i = u[r.id];
      return null != i && i.length > 0 && i.forEach(t => {
        let {
          channel: n
        } = t;
        e.push((0, a.eW)(n).row)
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
  } = e, g = c(t, n, s, o);
  return (0, r.jsx)(a.Ay, {
    channelRows: g,
    guildId: t,
    selectedChannelIds: n,
    onChange: (e, t) => i(e),
    placeholder: l,
    helperText: d,
    className: u
  })
}