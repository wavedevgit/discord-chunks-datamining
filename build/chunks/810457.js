/** Chunk was on web.js **/
/** chunk id: 810457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./387201.js"), require("./642613.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk709054 = require("./709054.js"),
  Chunk982183 = require("./982183.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l {
  updateChannelIds(e) {
    this._channelIds = new Set(e), this._messages = this._messages.filter(e => e.kind !== o.fL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId))
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
    this._messages = [...this._messages, ...n.filter(e => e.author.id !== r && a.default.age(e.id) < o.ib).map(e => ({
      id: e.id,
      channelId: e.channel_id,
      guildId: null == t ? true : t.guild_id,
      kind: e.mentioned ? o.fL.MENTION : o.fL.ALL_MESSAGES_CHANNEL,
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
      return 0 !== n ? n : e.kind === o.fL.MENTION && t.kind !== o.fL.MENTION ? false : +(e.kind !== o.fL.MENTION && t.kind === o.fL.MENTION)
    }), "id"), this._isSorted = true)
  }
  maybeTruncate() {
    let e = Chunk982183.AQ * (this._channelIds.size + 1) * 1.5;
    if (this._messages.length <= module) return;
    let t = {};
    for (let e of this._messages) Chunk709054.default.age(module.id) > Chunk982183.ib || (null == exports[module.channelId] && (exports[module.channelId] = {
      mentions: [],
      messages: []
    }), module.kind === Chunk982183.fL.MENTION ? exports[module.channelId].mentions.push(module) : exports[module.channelId].messages.push(module));
    let n = [];
    Object.values(exports).forEach(e => {
      let t = [...e.mentions, ...e.messages].sort((e, t) => a.default.compare(e.id, t.id)).slice(-o.AQ),
        r = new Set,
        i = [];
      for (let e of t) r.add(e.id), i.push(e);
      for (let t of e.mentions) r.has(t.id) || i.push(t);
      n.push(...i)
    }), this._messages = require, this._isSorted = false
  }
  constructor() {
    s(this, "_messages", []), s(this, "_isSorted", true), s(this, "_channelIds", new Set)
  }
}
let c = l