/** Chunk was on 6043 **/
/** chunk id: 620481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FB: () => y,
  Jt: () => E,
  OC: () => S,
  Sr: () => _,
  V_: () => O,
  lG: () => C,
  mo: () => j,
  tb: () => T
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
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
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk727785 = require("./727785.js");
let g = new Chunk710845.Z("SearchDebugUtils");

function v() {
  g.info("--------------------------")
}

function j() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), g.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, r.F6)(e, p.default, m.Z),
      n = (0, r.on)(e, p.default, m.Z);
    g.info("id: ".concat(e.id)), g.info("name: ".concat(t)), g.info("default name: ".concat(n)), g.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = p.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = x.ZP.getGlobalName(t),
        r = m.Z.getNickname(t.id),
        l = d.ZP.getNicknames(t.id);
      g.info("username: ".concat(n)), g.info("global name: ".concat(a)), g.info("nickname: ".concat(r)), g.info("guild nicknames: ".concat(l)), v()
    })
  }), g.info("END Logging Group DM Channels\n"), g.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, r.F6)(e, p.default, m.Z);
    g.info("id: ".concat(e.id)), g.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = p.default.getUser(n);
    if (null == a) return;
    let l = a.username,
      i = x.ZP.getGlobalName(a),
      s = m.Z.getNickname(a.id);
    g.info("username: ".concat(l)), g.info("global name: ".concat(i)), g.info("nickname: ".concat(s)), v()
  }), g.info("END Logging DM Channels\n")
}

function y() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), g.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, r.F6)(e, p.default, m.Z),
      n = (0, r.on)(e, p.default, m.Z);
    g.info("id: ".concat(e.id)), g.info("name: ".concat(t)), g.info("default name: ".concat(n)), g.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = p.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = x.ZP.getGlobalName(t),
        r = m.Z.getNickname(t.id),
        l = d.ZP.getNicknames(t.id);
      g.info("username: ".concat(n)), g.info("global name: ".concat(a)), g.info("nickname: ".concat(r)), g.info("guild nicknames: ".concat(l)), v()
    })
  }), g.info("END Logging Group DM Channels\n"), g.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, r.F6)(e, p.default, m.Z);
    g.info("id: ".concat(e.id)), g.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = p.default.getUser(n);
    if (null == a) return;
    let l = a.username,
      i = x.ZP.getGlobalName(a),
      s = m.Z.getNickname(a.id);
    g.info("username: ".concat(l)), g.info("global name: ".concat(i)), g.info("nickname: ".concat(s)), v()
  }), g.info("END Logging DM Channels\n")
}

function C() {
  let e = Chunk699516.Z.getFriendIDs();
  g.info("START Discord Friends"), module.forEach(e => {
    let t = p.default.getUser(e);
    if (null == t) return;
    let n = t.username,
      a = x.ZP.getGlobalName(t),
      r = m.Z.getNickname(t.id),
      l = d.ZP.getNicknames(t.id);
    g.info("username: ".concat(n)), g.info("global name: ".concat(a)), g.info("nickname: ".concat(r)), g.info("guild nicknames: ".concat(l)), v()
  }), g.info("END Discord Friends\n")
}

function _() {
  let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest(),
    t = [],
    n = [],
    a = [],
    l = [];
  module.forEach(e => {
    (0, h.lM)(e) ? t.push(e): e.isDM() ? a.push(e) : e.isMultiUserDM() ? l.push(e) : n.push(e)
  }), g.info("START Frecency"), g.info("Guilds"), exports.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    g.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t))
  }), v(), g.info("DM Channels"), Chunk279779.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), v(), g.info("Group DM Channels"), Chunk710845.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)), g.info("default name: ".concat((0, r.on)(e, p.default, m.Z))), g.info("name: ".concat((0, r.F6)(e, p.default, m.Z)))
  }), v(), g.info("Guild Channels"), require.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), v(), g.info("END Frecency\n")
}

function S() {
  let e = Chunk823385.Z.getProps();
  g.info("START Quick Switcher State"), g.info("Query: ".concat(module.query)), module.results.forEach(e => {
    switch (g.info("Result Type: ".concat(e.type)), e.type) {
      case b.h8.GUILD:
        g.info("guild id: ".concat(e.record.id));
        break;
      case b.h8.TEXT_CHANNEL:
      case b.h8.VOICE_CHANNEL:
        g.info("channel type: ".concat(e.record.type)), g.info("channel id: ".concat(e.record.id)), g.info("name: ".concat(e.record.name));
        break;
      case b.h8.DM:
        g.info("channel type: ".concat(e.record.type)), g.info("channel id: ".concat(e.record.id)), e.record.isDM() && (g.info("recipient id: ".concat(e.record.getRecipientId())), e.record.recipients.forEach(e => {
          let t = p.default.getUser(e);
          null != t && (g.info("recipient username: ".concat(t.username)), g.info("recipient global name: ".concat(x.ZP.getGlobalName(t))), g.info("recipient nickname: ".concat(m.Z.getNickname(t.id))))
        }));
        break;
      case b.h8.GROUP_DM:
        g.info("channel type: ".concat(e.record.type)), g.info("channel id: ".concat(e.record.id)), g.info("name: ".concat((0, r.F6)(e.record, p.default, m.Z))), e.record.isGroupDM() && (g.info("default name: ".concat((0, r.on)(e.record, p.default, m.Z))), g.info("recipient id: ".concat(e.record.recipients)), e.record.recipients.forEach(e => {
          let t = p.default.getUser(e);
          null != t && (g.info("recipient username: ".concat(t.username)), g.info("recipient global name: ".concat(x.ZP.getGlobalName(t))), g.info("recipient nickname: ".concat(m.Z.getNickname(t.id))))
        }));
        break;
      case b.h8.USER:
        g.info("user id: ".concat(e.record.id)), g.info("username: ".concat(e.record.username)), g.info("global name: ".concat(x.ZP.getGlobalName(e.record))), g.info("nickname: ".concat(m.Z.getNickname(e.record.id))), g.info("guild nicknames: ".concat(d.ZP.getNicknames(e.record.id)))
    }
    g.info("frecency score: ".concat(o.Z.getScoreWithoutFetchingLatest(e.record.id))), v()
  }), g.info("END Quick Switcher State\n")
}
async function E() {
  g.info("START User Search Worker State");
  let e = await Chunk279779.Z.requestDebugState();
  if (null == module) return void g.info("Unable to get debug state from User Search Worker");
  Object.entries(JSON.parse(module.users)).forEach(e => {
    let [t, n] = e;
    g.info("id: ".concat(t)), g.info("username: ".concat(n.username)), g.info("global name: ".concat(n.globalName)), g.info("nickname: ".concat(n.friendNickname)), Object.entries(n.nicknames).forEach(e => {
      let [t, n] = e;
      g.info("guild id: ".concat(t)), g.info("guild nickname: ".concat(n))
    }), v()
  }), g.info("END User Search Worker State\n")
}
async function T() {
  let e = await Chunk279779.Z.requestDebugState();
  if (null == module) throw Error("Unable to get debug state from User Search Worker");
  let t = JSON.parse(module.users),
    n = Chunk594174.default.getUsers(),
    r = new Set(Object.keys(exports)),
    l = Chunk709054.default.keys(require),
    i = [];
  return Chunk710845.forEach(e => {
    r.has(e) || i.push(e)
  }), Chunk823385
}
async function O(e) {
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
    user: p.default.getUser(e),
    searchWorkerUser: n,
    guildMembers: l,
    guildMemberRequests: i
  }
}