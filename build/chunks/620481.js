/** Chunk was on 93886 **/
/** chunk id: 620481, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  OC: () => j,
  Sr: () => f,
  du: () => v,
  lG: () => b
}), require("./539854.js");
var Chunk933557 = require("./933557.js"),
  Chunk710845 = require("./710845.js"),
  Chunk823385 = require("./823385.js"),
  Chunk592125 = require("./592125.js"),
  Chunk580005 = require("./580005.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk51144 = require("./51144.js"),
  Chunk727785 = require("./727785.js");
let h = new Chunk710845.Z("SearchDebugUtils");

function p() {
  h.info("--------------------------")
}

function v() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    a = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && a.push(e)
  }), h.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, n.F6)(e, d.default, c.Z),
      a = (0, n.on)(e, d.default, c.Z);
    h.info("id: ".concat(e.id)), h.info("name: ".concat(t)), h.info("default name: ".concat(a)), h.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = d.default.getUser(e);
      if (null == t) return;
      let a = t.username,
        n = m.ZP.getGlobalName(t),
        r = c.Z.getNickname(t.id),
        l = o.ZP.getNicknames(t.id);
      h.info("username: ".concat(a)), h.info("global name: ".concat(n)), h.info("nickname: ".concat(r)), h.info("guild nicknames: ".concat(l)), p()
    })
  }), h.info("END Logging Group DM Channels\n"), h.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, n.F6)(e, d.default, c.Z);
    h.info("id: ".concat(e.id)), h.info("name: ".concat(t));
    let a = e.getRecipientId(),
      r = d.default.getUser(a);
    if (null == r) return;
    let l = r.username,
      i = m.ZP.getGlobalName(r),
      s = c.Z.getNickname(r.id);
    h.info("username: ".concat(l)), h.info("global name: ".concat(i)), h.info("nickname: ".concat(s)), p()
  }), h.info("END Logging DM Channels\n")
}

function b() {
  let e = Chunk699516.Z.getFriendIDs();
  h.info("START Discord Friends"), module.forEach(e => {
    let t = d.default.getUser(e);
    if (null == t) return;
    let a = t.username,
      n = m.ZP.getGlobalName(t),
      r = c.Z.getNickname(t.id),
      l = o.ZP.getNicknames(t.id);
    h.info("username: ".concat(a)), h.info("global name: ".concat(n)), h.info("nickname: ".concat(r)), h.info("guild nicknames: ".concat(l)), p()
  }), h.info("END Discord Friends\n")
}

function f() {
  let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest(),
    t = [],
    a = [],
    r = [],
    l = [];
  module.forEach(e => {
    (0, u.lM)(e) ? t.push(e): e.isDM() ? r.push(e) : e.isMultiUserDM() ? l.push(e) : a.push(e)
  }), h.info("START Frecency"), h.info("Guilds"), exports.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t))
  }), p(), h.info("DM Channels"), Chunk710845.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), p(), h.info("Group DM Channels"), Chunk823385.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)), h.info("default name: ".concat((0, n.on)(e, d.default, c.Z))), h.info("name: ".concat((0, n.F6)(e, d.default, c.Z)))
  }), p(), h.info("Guild Channels"), require.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), p(), h.info("END Frecency\n")
}

function j() {
  let e = Chunk823385.Z.getProps();
  h.info("START Quick Switcher State"), h.info("Query: ".concat(module.query)), module.results.forEach(e => {
    switch (h.info("Result Type: ".concat(e.type)), e.type) {
      case x.h8.GUILD:
        h.info("guild id: ".concat(e.record.id));
        break;
      case x.h8.TEXT_CHANNEL:
      case x.h8.DM:
      case x.h8.GROUP_DM:
      case x.h8.VOICE_CHANNEL:
        h.info("channel type: ".concat(e.record.type)), h.info("channel id: ".concat(e.record.id));
        break;
      case x.h8.USER:
        h.info("user id: ".concat(e.record.id)), h.info("username: ".concat(e.record.username)), h.info("global name: ".concat(m.ZP.getGlobalName(e.record))), h.info("nickname: ".concat(c.Z.getNickname(e.record.id))), h.info("guild nicknames: ".concat(o.ZP.getNicknames(e.record.id)))
    }
    h.info("frecency score: ".concat(s.Z.getScoreWithoutFetchingLatest(e.record.id))), p()
  }), h.info("END Quick Switcher State\n")
}