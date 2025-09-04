/** Chunk was on 93886 **/
/** chunk id: 620481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FB: () => v,
  OC: () => j,
  Sr: () => g,
  lG: () => b,
  mo: () => f
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

function f() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), h.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, a.F6)(e, d.default, c.Z),
      n = (0, a.on)(e, d.default, c.Z);
    h.info("id: ".concat(e.id)), h.info("name: ".concat(t)), h.info("default name: ".concat(n)), h.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = d.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = m.ZP.getGlobalName(t),
        r = c.Z.getNickname(t.id),
        l = o.ZP.getNicknames(t.id);
      h.info("username: ".concat(n)), h.info("global name: ".concat(a)), h.info("nickname: ".concat(r)), h.info("guild nicknames: ".concat(l)), p()
    })
  }), h.info("END Logging Group DM Channels\n"), h.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, a.F6)(e, d.default, c.Z);
    h.info("id: ".concat(e.id)), h.info("name: ".concat(t));
    let n = e.getRecipientId(),
      r = d.default.getUser(n);
    if (null == r) return;
    let l = r.username,
      i = m.ZP.getGlobalName(r),
      s = c.Z.getNickname(r.id);
    h.info("username: ".concat(l)), h.info("global name: ".concat(i)), h.info("nickname: ".concat(s)), p()
  }), h.info("END Logging DM Channels\n")
}

function v() {
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(module).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), h.info("START Logging Group DM Channels"), exports.forEach(e => {
    let t = (0, a.F6)(e, d.default, c.Z),
      n = (0, a.on)(e, d.default, c.Z);
    h.info("id: ".concat(e.id)), h.info("name: ".concat(t)), h.info("default name: ".concat(n)), h.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = d.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = m.ZP.getGlobalName(t),
        r = c.Z.getNickname(t.id),
        l = o.ZP.getNicknames(t.id);
      h.info("username: ".concat(n)), h.info("global name: ".concat(a)), h.info("nickname: ".concat(r)), h.info("guild nicknames: ".concat(l)), p()
    })
  }), h.info("END Logging Group DM Channels\n"), h.info("START Logging DM Channels"), require.forEach(e => {
    let t = (0, a.F6)(e, d.default, c.Z);
    h.info("id: ".concat(e.id)), h.info("name: ".concat(t));
    let n = e.getRecipientId(),
      r = d.default.getUser(n);
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
    let n = t.username,
      a = m.ZP.getGlobalName(t),
      r = c.Z.getNickname(t.id),
      l = o.ZP.getNicknames(t.id);
    h.info("username: ".concat(n)), h.info("global name: ".concat(a)), h.info("nickname: ".concat(r)), h.info("guild nicknames: ".concat(l)), p()
  }), h.info("END Discord Friends\n")
}

function g() {
  let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest(),
    t = [],
    n = [],
    r = [],
    l = [];
  module.forEach(e => {
    (0, u.lM)(e) ? t.push(e): e.isDM() ? r.push(e) : e.isMultiUserDM() ? l.push(e) : n.push(e)
  }), h.info("START Frecency"), h.info("Guilds"), exports.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t))
  }), p(), h.info("DM Channels"), Chunk710845.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), p(), h.info("Group DM Channels"), Chunk823385.forEach(e => {
    let t = s.Z.getScoreWithoutFetchingLatest(e.id);
    h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)), h.info("default name: ".concat((0, a.on)(e, d.default, c.Z))), h.info("name: ".concat((0, a.F6)(e, d.default, c.Z)))
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
      case x.h8.VOICE_CHANNEL:
        h.info("channel type: ".concat(e.record.type)), h.info("channel id: ".concat(e.record.id)), h.info("name: ".concat(e.record.name));
        break;
      case x.h8.DM:
        h.info("channel type: ".concat(e.record.type)), h.info("channel id: ".concat(e.record.id)), e.record.isDM() && (h.info("recipient id: ".concat(e.record.getRecipientId())), e.record.recipients.forEach(e => {
          let t = d.default.getUser(e);
          null != t && (h.info("recipient username: ".concat(t.username)), h.info("recipient global name: ".concat(m.ZP.getGlobalName(t))), h.info("recipient nickname: ".concat(c.Z.getNickname(t.id))))
        }));
        break;
      case x.h8.GROUP_DM:
        h.info("channel type: ".concat(e.record.type)), h.info("channel id: ".concat(e.record.id)), h.info("name: ".concat((0, a.F6)(e.record, d.default, c.Z))), e.record.isGroupDM() && (h.info("default name: ".concat((0, a.on)(e.record, d.default, c.Z))), h.info("recipient id: ".concat(e.record.recipients)), e.record.recipients.forEach(e => {
          let t = d.default.getUser(e);
          null != t && (h.info("recipient username: ".concat(t.username)), h.info("recipient global name: ".concat(m.ZP.getGlobalName(t))), h.info("recipient nickname: ".concat(c.Z.getNickname(t.id))))
        }));
        break;
      case x.h8.USER:
        h.info("user id: ".concat(e.record.id)), h.info("username: ".concat(e.record.username)), h.info("global name: ".concat(m.ZP.getGlobalName(e.record))), h.info("nickname: ".concat(c.Z.getNickname(e.record.id))), h.info("guild nicknames: ".concat(o.ZP.getNicknames(e.record.id)))
    }
    h.info("frecency score: ".concat(s.Z.getScoreWithoutFetchingLatest(e.record.id))), p()
  }), h.info("END Quick Switcher State\n")
}