/** Chunk was on 93886 **/
/** chunk id: 620481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FB: () => j,
  Jt: () => N,
  OC: () => C,
  Sr: () => y,
  V_: () => E,
  lG: () => _,
  mo: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk279779 = require("./279779.js"),
  Chunk933557 = require("./933557.js"),
  Chunk710845 = require("./710845.js"),
  Chunk823385 = require("./823385.js"),
  Chunk592125 = require("./592125.js"),
  Chunk580005 = require("./580005.js"),
  Chunk720202 = require("./720202.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk51144 = require("./51144.js"),
  Chunk727785 = require("./727785.js");
let f = new Chunk710845.Z("SearchDebugUtils");

function g() {
  f.info("--------------------------")
}

function v() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), f.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, r.F6)(e, h.default, m.Z),
      n = (0, r.on)(e, h.default, m.Z);
    f.info("id: ".concat(e.id)), f.info("name: ".concat(t)), f.info("default name: ".concat(n)), f.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = h.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = x.ZP.getGlobalName(t),
        r = m.Z.getNickname(t.id),
        l = d.ZP.getNicknames(t.id);
      f.info("username: ".concat(n)), f.info("global name: ".concat(a)), f.info("nickname: ".concat(r)), f.info("guild nicknames: ".concat(l)), g()
    })
  }), f.info("END Logging Group DM Channels\n"), f.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, r.F6)(e, h.default, m.Z);
    f.info("id: ".concat(e.id)), f.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = h.default.getUser(n);
    if (null == a) return;
    let l = a.username,
      i = x.ZP.getGlobalName(a),
      s = m.Z.getNickname(a.id);
    f.info("username: ".concat(l)), f.info("global name: ".concat(i)), f.info("nickname: ".concat(s)), g()
  }), f.info("END Logging DM Channels\n")
}

function j() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), f.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, r.F6)(e, h.default, m.Z),
      n = (0, r.on)(e, h.default, m.Z);
    f.info("id: ".concat(e.id)), f.info("name: ".concat(t)), f.info("default name: ".concat(n)), f.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = h.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = x.ZP.getGlobalName(t),
        r = m.Z.getNickname(t.id),
        l = d.ZP.getNicknames(t.id);
      f.info("username: ".concat(n)), f.info("global name: ".concat(a)), f.info("nickname: ".concat(r)), f.info("guild nicknames: ".concat(l)), g()
    })
  }), f.info("END Logging Group DM Channels\n"), f.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, r.F6)(e, h.default, m.Z);
    f.info("id: ".concat(e.id)), f.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = h.default.getUser(n);
    if (null == a) return;
    let l = a.username,
      i = x.ZP.getGlobalName(a),
      s = m.Z.getNickname(a.id);
    f.info("username: ".concat(l)), f.info("global name: ".concat(i)), f.info("nickname: ".concat(s)), g()
  }), f.info("END Logging DM Channels\n")
}

function _() {
  let e = Chunk699516.Z.getFriendIDs();
  f.info("START Discord Friends"), module.forEach(e => {
    let t = h.default.getUser(e);
    if (null == t) return;
    let n = t.username,
      a = x.ZP.getGlobalName(t),
      r = m.Z.getNickname(t.id),
      l = d.ZP.getNicknames(t.id);
    f.info("username: ".concat(n)), f.info("global name: ".concat(a)), f.info("nickname: ".concat(r)), f.info("guild nicknames: ".concat(l)), g()
  }), f.info("END Discord Friends\n")
}

function y() {
  let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest(),
    t = [],
    n = [],
    a = [],
    l = [];
  module.forEach(e => {
    (0, p.lM)(e) ? t.push(e): e.isDM() ? a.push(e) : e.isMultiUserDM() ? l.push(e) : n.push(e)
  }), f.info("START Frecency"), f.info("Guilds"), exports.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    f.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t))
  }), g(), f.info("DM Channels"), Chunk279779.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    f.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), g(), f.info("Group DM Channels"), Chunk710845.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    f.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)), f.info("default name: ".concat((0, r.on)(e, h.default, m.Z))), f.info("name: ".concat((0, r.F6)(e, h.default, m.Z)))
  }), g(), f.info("Guild Channels"), require.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    f.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), g(), f.info("END Frecency\n")
}

function C() {
  let e = Chunk823385.Z.getProps();
  f.info("START Quick Switcher State"), f.info("Query: ".concat(module.query)), module.results.forEach(e => {
    switch (f.info("Result Type: ".concat(e.type)), e.type) {
      case b.h8.GUILD:
        f.info("guild id: ".concat(e.record.id));
        break;
      case b.h8.TEXT_CHANNEL:
      case b.h8.VOICE_CHANNEL:
        f.info("channel type: ".concat(e.record.type)), f.info("channel id: ".concat(e.record.id)), f.info("name: ".concat(e.record.name));
        break;
      case b.h8.DM:
        f.info("channel type: ".concat(e.record.type)), f.info("channel id: ".concat(e.record.id)), e.record.isDM() && (f.info("recipient id: ".concat(e.record.getRecipientId())), e.record.recipients.forEach(e => {
          let t = h.default.getUser(e);
          null != t && (f.info("recipient username: ".concat(t.username)), f.info("recipient global name: ".concat(x.ZP.getGlobalName(t))), f.info("recipient nickname: ".concat(m.Z.getNickname(t.id))))
        }));
        break;
      case b.h8.GROUP_DM:
        f.info("channel type: ".concat(e.record.type)), f.info("channel id: ".concat(e.record.id)), f.info("name: ".concat((0, r.F6)(e.record, h.default, m.Z))), e.record.isGroupDM() && (f.info("default name: ".concat((0, r.on)(e.record, h.default, m.Z))), f.info("recipient id: ".concat(e.record.recipients)), e.record.recipients.forEach(e => {
          let t = h.default.getUser(e);
          null != t && (f.info("recipient username: ".concat(t.username)), f.info("recipient global name: ".concat(x.ZP.getGlobalName(t))), f.info("recipient nickname: ".concat(m.Z.getNickname(t.id))))
        }));
        break;
      case b.h8.USER:
        f.info("user id: ".concat(e.record.id)), f.info("username: ".concat(e.record.username)), f.info("global name: ".concat(x.ZP.getGlobalName(e.record))), f.info("nickname: ".concat(m.Z.getNickname(e.record.id))), f.info("guild nicknames: ".concat(d.ZP.getNicknames(e.record.id)))
    }
    f.info("frecency score: ".concat(o.Z.getScoreWithoutFetchingLatest(e.record.id))), g()
  }), f.info("END Quick Switcher State\n")
}
async function N() {
  f.info("START User Search Worker State");
  let e = await Chunk279779.Z.requestDebugState();
  if (null == module) return void f.info("Unable to get debug state from User Search Worker");
  Object.entries(JSON.parse(module.users)).forEach(e => {
    let [t, n] = e;
    f.info("id: ".concat(t)), f.info("username: ".concat(n.username)), f.info("global name: ".concat(n.globalName)), f.info("nickname: ".concat(n.friendNickname)), Object.entries(n.nicknames).forEach(e => {
      let [t, n] = e;
      f.info("guild id: ".concat(t)), f.info("guild nickname: ".concat(n))
    }), g()
  }), f.info("END User Search Worker State\n")
}
async function E(e) {
  let t = await a.Z.requestDebugState(),
    n = null != t ? JSON.parse(t.users)[e] : null,
    r = u.Z.getGuildIds(),
    l = [];
  r.forEach(t => {
    let n = d.ZP.getMember(t, e);
    null != n && l.push(n)
  });
  let i = c.Z.getDebugState(e);
  return {
    user: h.default.getUser(e),
    searchWorkerUser: n,
    guildMembers: l,
    guildMemberRequests: i
  }
}