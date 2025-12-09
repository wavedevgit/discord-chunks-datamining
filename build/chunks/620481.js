/** Chunk was on 88282 **/
/** chunk id: 620481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FB: () => _,
  Jt: () => E,
  OC: () => S,
  Sr: () => C,
  V_: () => T,
  lG: () => y,
  mo: () => j,
  tb: () => N
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
let b = new Chunk710845.Z("SearchDebugUtils");

function v() {
  b.info("--------------------------")
}

function j() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), b.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, l.F6)(e, p.default, m.Z),
      n = (0, l.on)(e, p.default, m.Z);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t)), b.info("default name: ".concat(n)), b.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = p.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = f.ZP.getGlobalName(t),
        l = m.Z.getNickname(t.id),
        r = d.ZP.getNicknames(t.id);
      b.info("username: ".concat(n)), b.info("global name: ".concat(a)), b.info("nickname: ".concat(l)), b.info("guild nicknames: ".concat(r)), v()
    })
  }), b.info("END Logging Group DM Channels\n"), b.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, l.F6)(e, p.default, m.Z);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = p.default.getUser(n);
    if (null == a) return;
    let r = a.username,
      i = f.ZP.getGlobalName(a),
      s = m.Z.getNickname(a.id);
    b.info("username: ".concat(r)), b.info("global name: ".concat(i)), b.info("nickname: ".concat(s)), v()
  }), b.info("END Logging DM Channels\n")
}

function _() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), b.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, l.F6)(e, p.default, m.Z),
      n = (0, l.on)(e, p.default, m.Z);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t)), b.info("default name: ".concat(n)), b.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = p.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = f.ZP.getGlobalName(t),
        l = m.Z.getNickname(t.id),
        r = d.ZP.getNicknames(t.id);
      b.info("username: ".concat(n)), b.info("global name: ".concat(a)), b.info("nickname: ".concat(l)), b.info("guild nicknames: ".concat(r)), v()
    })
  }), b.info("END Logging Group DM Channels\n"), b.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, l.F6)(e, p.default, m.Z);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = p.default.getUser(n);
    if (null == a) return;
    let r = a.username,
      i = f.ZP.getGlobalName(a),
      s = m.Z.getNickname(a.id);
    b.info("username: ".concat(r)), b.info("global name: ".concat(i)), b.info("nickname: ".concat(s)), v()
  }), b.info("END Logging DM Channels\n")
}

function y() {
  let e = Chunk699516.Z.getFriendIDs();
  b.info("START Discord Friends"), module.forEach(e => {
    let t = p.default.getUser(e);
    if (null == t) return;
    let n = t.username,
      a = f.ZP.getGlobalName(t),
      l = m.Z.getNickname(t.id),
      r = d.ZP.getNicknames(t.id);
    b.info("username: ".concat(n)), b.info("global name: ".concat(a)), b.info("nickname: ".concat(l)), b.info("guild nicknames: ".concat(r)), v()
  }), b.info("END Discord Friends\n")
}

function C() {
  let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest(),
    t = [],
    n = [],
    a = [],
    r = [];
  module.forEach(e => {
    (0, h.lM)(e) ? t.push(e): e.isDM() ? a.push(e) : e.isMultiUserDM() ? r.push(e) : n.push(e)
  }), b.info("START Frecency"), b.info("Guilds"), exports.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t))
  }), v(), b.info("DM Channels"), Chunk279779.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), v(), b.info("Group DM Channels"), Chunk710845.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)), b.info("default name: ".concat((0, l.on)(e, p.default, m.Z))), b.info("name: ".concat((0, l.F6)(e, p.default, m.Z)))
  }), v(), b.info("Guild Channels"), require.forEach(e => {
    let t = o.Z.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), v(), b.info("END Frecency\n")
}

function S() {
  let e = Chunk823385.Z.getProps();
  b.info("START Quick Switcher State"), b.info("Query: ".concat(module.query)), module.results.forEach(e => {
    switch (b.info("Result Type: ".concat(e.type)), e.type) {
      case g.h8.GUILD:
        b.info("guild id: ".concat(e.record.id));
        break;
      case g.h8.TEXT_CHANNEL:
      case g.h8.VOICE_CHANNEL:
        b.info("channel type: ".concat(e.record.type)), b.info("channel id: ".concat(e.record.id)), b.info("name: ".concat(e.record.name));
        break;
      case g.h8.DM:
        b.info("channel type: ".concat(e.record.type)), b.info("channel id: ".concat(e.record.id)), e.record.isDM() && (b.info("recipient id: ".concat(e.record.getRecipientId())), e.record.recipients.forEach(e => {
          let t = p.default.getUser(e);
          null != t && (b.info("recipient username: ".concat(t.username)), b.info("recipient global name: ".concat(f.ZP.getGlobalName(t))), b.info("recipient nickname: ".concat(m.Z.getNickname(t.id))))
        }));
        break;
      case g.h8.GROUP_DM:
        b.info("channel type: ".concat(e.record.type)), b.info("channel id: ".concat(e.record.id)), b.info("name: ".concat((0, l.F6)(e.record, p.default, m.Z))), e.record.isGroupDM() && (b.info("default name: ".concat((0, l.on)(e.record, p.default, m.Z))), b.info("recipient id: ".concat(e.record.recipients)), e.record.recipients.forEach(e => {
          let t = p.default.getUser(e);
          null != t && (b.info("recipient username: ".concat(t.username)), b.info("recipient global name: ".concat(f.ZP.getGlobalName(t))), b.info("recipient nickname: ".concat(m.Z.getNickname(t.id))))
        }));
        break;
      case g.h8.USER:
        b.info("user id: ".concat(e.record.id)), b.info("username: ".concat(e.record.username)), b.info("global name: ".concat(f.ZP.getGlobalName(e.record))), b.info("nickname: ".concat(m.Z.getNickname(e.record.id))), b.info("guild nicknames: ".concat(d.ZP.getNicknames(e.record.id)))
    }
    b.info("frecency score: ".concat(o.Z.getScoreWithoutFetchingLatest(e.record.id))), v()
  }), b.info("END Quick Switcher State\n")
}
async function E() {
  b.info("START User Search Worker State");
  let e = await Chunk279779.Z.requestDebugState();
  if (null == module) return void b.info("Unable to get debug state from User Search Worker");
  Object.entries(JSON.parse(module.users)).forEach(e => {
    let [t, n] = e;
    b.info("id: ".concat(t)), b.info("username: ".concat(n.username)), b.info("global name: ".concat(n.globalName)), b.info("nickname: ".concat(n.friendNickname)), Object.entries(n.nicknames).forEach(e => {
      let [t, n] = e;
      b.info("guild id: ".concat(t)), b.info("guild nickname: ".concat(n))
    }), v()
  }), b.info("END User Search Worker State\n")
}
async function N() {
  let e = await Chunk279779.Z.requestDebugState();
  if (null == module) throw Error("Unable to get debug state from User Search Worker");
  let t = JSON.parse(module.users),
    n = Chunk594174.default.getUsers(),
    l = new Set(Object.keys(exports)),
    r = Chunk709054.default.keys(require),
    i = [];
  return Chunk710845.forEach(e => {
    l.has(e) || i.push(e)
  }), Chunk823385
}
async function T(e) {
  let t = await a.Z.requestDebugState(),
    n = null != t ? JSON.parse(t.users)[e] : null,
    l = u.Z.getGuildIds(),
    r = [];
  l.forEach(t => {
    let n = d.ZP.getMember(t, e);
    null != n && r.push(n)
  });
  let i = c.Z.getDebugState(e);
  return {
    user: p.default.getUser(e),
    searchWorkerUser: n,
    guildMembers: r,
    guildMemberRequests: i
  }
}