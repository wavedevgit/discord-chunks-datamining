/** Chunk was on 87557 **/
/** chunk id: 137365, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D7: () => S,
  Md: () => j,
  _S: () => C,
  a1: () => A,
  g_: () => O,
  h2: () => T,
  it: () => y,
  pD: () => _
}), require("./321073.js"), require("./896048.js"), require("./65821.js");
var Chunk450827 = require("./450827.js"),
  Chunk47167 = require("./47167.js"),
  Chunk626584 = require("./626584.js"),
  Chunk174768 = require("./174768.js"),
  Chunk734057 = require("./734057.js"),
  Chunk205761 = require("./205761.js"),
  Chunk256587 = require("./256587.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk926140 = require("./926140.js");
let b = new Chunk626584.A("SearchDebugUtils");

function v() {
  b.info("--------------------------")
}

function j() {
  let e = s.A.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(e).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), b.info("START Logging Group DM Channels"), t.forEach(e => {
    let t = (0, l.m1)(e, p.default, m.A),
      n = (0, l.ks)(e, p.default, m.A);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t)), b.info("default name: ".concat(n)), b.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = p.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = g.Ay.getGlobalName(t),
        l = m.A.getNickname(t.id),
        r = d.Ay.getNicknames(t.id);
      b.info("username: ".concat(n)), b.info("global name: ".concat(a)), b.info("nickname: ".concat(l)), b.info("guild nicknames: ".concat(r)), v()
    })
  }), b.info("END Logging Group DM Channels\n"), b.info("START Logging DM Channels"), n.forEach(e => {
    let t = (0, l.m1)(e, p.default, m.A);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = p.default.getUser(n);
    if (null == a) return;
    let r = a.username,
      i = g.Ay.getGlobalName(a),
      s = m.A.getNickname(a.id);
    b.info("username: ".concat(r)), b.info("global name: ".concat(i)), b.info("nickname: ".concat(s)), v()
  }), b.info("END Logging DM Channels\n")
}

function _() {
  let e = s.A.getMutablePrivateChannels(),
    t = [],
    n = [];
  Object.values(e).forEach(e => {
    e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
  }), b.info("START Logging Group DM Channels"), t.forEach(e => {
    let t = (0, l.m1)(e, p.default, m.A),
      n = (0, l.ks)(e, p.default, m.A);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t)), b.info("default name: ".concat(n)), b.info("recipients ids: ".concat(e.recipients)), e.recipients.forEach(e => {
      let t = p.default.getUser(e);
      if (null == t) return;
      let n = t.username,
        a = g.Ay.getGlobalName(t),
        l = m.A.getNickname(t.id),
        r = d.Ay.getNicknames(t.id);
      b.info("username: ".concat(n)), b.info("global name: ".concat(a)), b.info("nickname: ".concat(l)), b.info("guild nicknames: ".concat(r)), v()
    })
  }), b.info("END Logging Group DM Channels\n"), b.info("START Logging DM Channels"), n.forEach(e => {
    let t = (0, l.m1)(e, p.default, m.A);
    b.info("id: ".concat(e.id)), b.info("name: ".concat(t));
    let n = e.getRecipientId(),
      a = p.default.getUser(n);
    if (null == a) return;
    let r = a.username,
      i = g.Ay.getGlobalName(a),
      s = m.A.getNickname(a.id);
    b.info("username: ".concat(r)), b.info("global name: ".concat(i)), b.info("nickname: ".concat(s)), v()
  }), b.info("END Logging DM Channels\n")
}

function y() {
  let e = m.A.getFriendIDs();
  b.info("START Discord Friends"), e.forEach(e => {
    let t = p.default.getUser(e);
    if (null == t) return;
    let n = t.username,
      a = g.Ay.getGlobalName(t),
      l = m.A.getNickname(t.id),
      r = d.Ay.getNicknames(t.id);
    b.info("username: ".concat(n)), b.info("global name: ".concat(a)), b.info("nickname: ".concat(l)), b.info("guild nicknames: ".concat(r)), v()
  }), b.info("END Discord Friends\n")
}

function A() {
  let e = o.A.getFrequentlyWithoutFetchingLatest(),
    t = [],
    n = [],
    a = [],
    r = [];
  e.forEach(e => {
    (0, h.fh)(e) ? t.push(e): e.isDM() ? a.push(e) : e.isMultiUserDM() ? r.push(e) : n.push(e)
  }), b.info("START Frecency"), b.info("Guilds"), t.forEach(e => {
    let t = o.A.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t))
  }), v(), b.info("DM Channels"), a.forEach(e => {
    let t = o.A.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), v(), b.info("Group DM Channels"), r.forEach(e => {
    let t = o.A.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)), b.info("default name: ".concat((0, l.ks)(e, p.default, m.A))), b.info("name: ".concat((0, l.m1)(e, p.default, m.A)))
  }), v(), b.info("Guild Channels"), n.forEach(e => {
    let t = o.A.getScoreWithoutFetchingLatest(e.id);
    b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t))
  }), v(), b.info("END Frecency\n")
}

function C() {
  let e = i.A.getProps();
  b.info("START Quick Switcher State"), b.info("Query: ".concat(e.query)), e.results.forEach(e => {
    switch (b.info("Result Type: ".concat(e.type)), e.type) {
      case f.rD.GUILD:
        b.info("guild id: ".concat(e.record.id));
        break;
      case f.rD.TEXT_CHANNEL:
      case f.rD.VOICE_CHANNEL:
        b.info("channel type: ".concat(e.record.type)), b.info("channel id: ".concat(e.record.id)), b.info("name: ".concat(e.record.name));
        break;
      case f.rD.DM:
        b.info("channel type: ".concat(e.record.type)), b.info("channel id: ".concat(e.record.id)), e.record.isDM() && (b.info("recipient id: ".concat(e.record.getRecipientId())), e.record.recipients.forEach(e => {
          let t = p.default.getUser(e);
          null != t && (b.info("recipient username: ".concat(t.username)), b.info("recipient global name: ".concat(g.Ay.getGlobalName(t))), b.info("recipient nickname: ".concat(m.A.getNickname(t.id))))
        }));
        break;
      case f.rD.GROUP_DM:
        b.info("channel type: ".concat(e.record.type)), b.info("channel id: ".concat(e.record.id)), b.info("name: ".concat((0, l.m1)(e.record, p.default, m.A))), e.record.isGroupDM() && (b.info("default name: ".concat((0, l.ks)(e.record, p.default, m.A))), b.info("recipient id: ".concat(e.record.recipients)), e.record.recipients.forEach(e => {
          let t = p.default.getUser(e);
          null != t && (b.info("recipient username: ".concat(t.username)), b.info("recipient global name: ".concat(g.Ay.getGlobalName(t))), b.info("recipient nickname: ".concat(m.A.getNickname(t.id))))
        }));
        break;
      case f.rD.USER:
        b.info("user id: ".concat(e.record.id)), b.info("username: ".concat(e.record.username)), b.info("global name: ".concat(g.Ay.getGlobalName(e.record))), b.info("nickname: ".concat(m.A.getNickname(e.record.id))), b.info("guild nicknames: ".concat(d.Ay.getNicknames(e.record.id)))
    }
    b.info("frecency score: ".concat(o.A.getScoreWithoutFetchingLatest(e.record.id))), v()
  }), b.info("END Quick Switcher State\n")
}
async function S() {
  b.info("START User Search Worker State");
  let e = await a.A.requestDebugState();
  null == e ? b.info("Unable to get debug state from User Search Worker") : (Object.entries(JSON.parse(e.users)).forEach(e => {
    let [t, n] = e;
    b.info("id: ".concat(t)), b.info("username: ".concat(n.username)), b.info("global name: ".concat(n.globalName)), b.info("nickname: ".concat(n.friendNickname)), Object.entries(n.nicknames).forEach(e => {
      let [t, n] = e;
      b.info("guild id: ".concat(t)), b.info("guild nickname: ".concat(n))
    }), v()
  }), b.info("END User Search Worker State\n"))
}
async function O() {
  let e = await a.A.requestDebugState();
  if (null == e) throw Error("Unable to get debug state from User Search Worker");
  let t = JSON.parse(e.users),
    n = p.default.getUsers(),
    l = new Set(Object.keys(t)),
    r = x.default.keys(n),
    i = [];
  return r.forEach(e => {
    l.has(e) || i.push(e)
  }), i
}
async function T(e) {
  let t = await a.A.requestDebugState(),
    n = null != t ? JSON.parse(t.users)[e] : null,
    l = u.A.getGuildIds(),
    r = [];
  l.forEach(t => {
    let n = d.Ay.getMember(t, e);
    null != n && r.push(n)
  });
  let i = c.A.getDebugState(e);
  return {
    user: p.default.getUser(e),
    searchWorkerUser: n,
    guildMembers: r,
    guildMemberRequests: i
  }
}