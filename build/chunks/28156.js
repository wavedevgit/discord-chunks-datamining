/** Chunk was on web.js **/
/** chunk id: 28156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./638769.js"), require("./839272.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk661191 = require("./661191.js"),
  Chunk849077 = require("./849077.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l {
  updateChannelIds(e) {
    this._channelIds = new Set(e), this._messages = this._messages.filter(e => e.kind !== s.yL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId))
  }
  addMessage(e) {
    this._messages = [...this._messages, e], this.maybeTruncate()
  }
  addChannelMessages(e) {
    let {
      channel: t,
      channelMessages: n,
      userId: r
    } = e;
    this._messages = [...this._messages, ...n.filter(e => e.author.id !== r && a.default.age(e.id) < s.V$).map(e => ({
      id: e.id,
      channelId: e.channel_id,
      guildId: null == t ? true : t.guild_id,
      kind: e.mentioned ? s.yL.MENTION : s.yL.ALL_MESSAGES_CHANNEL,
      message: e
    }))], this._isSorted = false, this.maybeTruncate()
  }
  addMessages(e) {
    this._messages = [...this._messages, ...e], this._isSorted = false, this.maybeTruncate()
  }
  deleteMessages(e) {
    return !!this._messages.some(t => e.includes(t.id)) && (this._messages = this._messages.filter(t => !e.includes(t.id)), true)
  }
  getMessages() {
    return this._isSorted || this.sortMessages(), this._messages
  }
  sortMessages() {
    this._isSorted || (this._messages = i().sortedUniqBy(this._messages.toSorted((e, t) => {
      let n = a.default.compare(e.id, t.id);
      return 0 !== n ? n : e.kind === s.yL.MENTION && t.kind !== s.yL.MENTION ? false : +(e.kind !== s.yL.MENTION && t.kind === s.yL.MENTION)
    }), "id"), this._isSorted = true)
  }
  maybeTruncate() {
    let e = s.EM * (this._channelIds.size + 1) * 1.5;
    if (this._messages.length <= e) return;
    let t = {};
    for (let e of this._messages) a.default.age(e.id) > s.V$ || (null == t[e.channelId] && (t[e.channelId] = {
      mentions: [],
      messages: []
    }), e.kind === s.yL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
    let n = [];
    Object.values(t).forEach(e => {
      let t = [...e.mentions, ...e.messages].sort((e, t) => a.default.compare(e.id, t.id)).slice(-s.EM),
        r = new Set,
        i = [];
      for (let e of t) r.add(e.id), i.push(e);
      for (let t of e.mentions) r.has(t.id) || i.push(t);
      n.push(...i)
    }), this._messages = n, this._isSorted = false
  }
  constructor() {
    o(this, "_messages", []), o(this, "_isSorted", true), o(this, "_channelIds", new Set)
  }
}
let c = l