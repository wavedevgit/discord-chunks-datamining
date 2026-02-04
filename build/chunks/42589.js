/** Chunk was on 7685 **/
/** chunk id: 42589, original params: e,t,n (module,exports,require) **/
function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function i(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require.d(exports, {
  EB: () => I,
  G: () => a,
  Qb: () => m,
  aU: () => p,
  o5: () => g
}), require("./896048.js"), require("./321073.js");
var s, a = ((s = {}).GuildText = "GUILD_TEXT", s.GuildVoice = "GUILD_VOICE", s.DirectMessage = "DIRECT_MESSAGE", s.GroupDM = "GROUP_DM", s);

function o(e, t, n, l) {
  let r = 0;
  for (let [i, s] of e.entries()) {
    let e = l(i);
    if (e <= 0) continue;
    let a = e * d(s, t, n);
    a > r && (r = a)
  }
  return r
}
class u {
  _computeMentionScore(e) {
    if (this.signals.mentionCount <= 0) return 0;
    let t = d(this.signals.lastDirectMentionAtMs, e, 6e5);
    this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
    let n = d(this.signals.lastRoleMentionAtMs, e, 6e5);
    return this.scoreInfo.rawSignalsScore.lastRoleMentionAtMs = n, 2 * Math.min(this.signals.mentionCount, 3) * Math.max(t, n)
  }
  _computeMessageScore(e) {
    let t;
    if (t = 0 + function(e, t) {
        if (null == e) return 0;
        let n = t - e;
        return n <= 0 || n <= 18e4 ? .8 : n >= 6e5 ? 0 : .8 * (1 - (n - 18e4) / 42e4)
      }(this.signals.lastMessageAtMs, e), this.signals.unread) {
      let n = d(this.signals.lastUnreadAtMs, e, 18e5);
      t += .8 * n, this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n
    }
    let n = o(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
    return this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n, t += 1.2 * n
  }
  _computeActivityScore(e) {
    if (!this.signals.isTyping) return 0;
    let t = o(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
    return this.scoreInfo.rawSignalsScore.typingUserIdsWithTimestampMs = t, 1.5 * t
  }
  getScoreWithoutPenalty(e) {
    let t = this._computeActivityScore(e),
      n = this._computeMentionScore(e),
      l = this._computeMessageScore(e);
    return this.scoreInfo.activityScore = t, this.scoreInfo.mentionScore = n, this.scoreInfo.messageScore = l, t + n + l
  }
  computeScore(e) {
    let t = f(e, this.lastActivityAtMs);
    return this.scoreInfo.penalty = t, this.getScoreWithoutPenalty(e) * (1 - t)
  }
  pruneSignals(e) {
    if (this.signals.typingUserIdsWithTimestampMs.size > 0) {
      let t = new Map;
      for (let [n, l] of this.signals.typingUserIdsWithTimestampMs.entries()) e - l <= 15e3 && t.set(n, l);
      let n = Array.from(t.keys());
      this.signals = i(r({}, this.signals), {
        typingUserIdsWithTimestampMs: t,
        typingUserIds: n,
        isTyping: n.length > 0
      })
    }
    if (this.signals.recentMessageAuthorIds.size > 0) {
      let t = new Map;
      for (let [n, l] of this.signals.recentMessageAuthorIds.entries()) e - l <= 6e5 && t.set(n, l);
      let n = null != this.signals.recentMessageAuthorId && t.has(this.signals.recentMessageAuthorId) ? this.signals.recentMessageAuthorId : null;
      this.signals = i(r({}, this.signals), {
        recentMessageAuthorIds: t,
        recentMessageAuthorId: n
      })
    }
  }
  updateSignals(e, t) {
    this.lastActivityAtMs = t, this.signals = e
  }
  constructor(e, t) {
    l(this, "signals", true), l(this, "providers", true), l(this, "lastActivityAtMs", true), l(this, "scoreInfo", {
      rawSignalsScore: {}
    }), this.signals = e, this.providers = t, this.lastActivityAtMs = Date.now()
  }
}
class c {
  _computeTextualScore(e) {
    let t = this._textualScore.getScoreWithoutPenalty(e);
    return this.scoreInfo = i(r({}, this.scoreInfo, this._textualScore.scoreInfo), {
      rawSignalsScore: r({}, this.scoreInfo.rawSignalsScore, this._textualScore.scoreInfo.rawSignalsScore)
    }), h(t, 2)
  }
  _computeVoiceUsersScore(e) {
    if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
    let t = o(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
    return this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t, 1.25 * t
  }
  _computeVoiceActivityScore(e) {
    let t = 0;
    null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, d(this.signals.lastVoiceJoinAtMs, e, 12e4))), this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t;
    let n = o(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
    return this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n, n = Math.max(n, o(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity)), this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n, 1.25 * (n + t)
  }
  _computeStreamUsersScore(e) {
    let t = o(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
    this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
    let n = o(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
    return this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n, 2 * (t + n)
  }
  computeScore(e) {
    let t = this._computeTextualScore(e),
      n = this._computeVoiceUsersScore(e),
      l = this._computeVoiceActivityScore(e),
      r = this._computeStreamUsersScore(e),
      i = f(e, this.lastActivityAtMs);
    return this.scoreInfo.penalty = i, this.scoreInfo.voiceUsersScore = n, this.scoreInfo.voiceActivityScore = l, this.scoreInfo.streamUsersScore = r, (t + n + l + r) * (1 - i)
  }
  pruneSignals(e) {
    this._textualScore.pruneSignals(e);
    let t = t => {
      if (0 === t.size) return t;
      let n = new Map;
      for (let [l, r] of t.entries()) e - r <= 12e4 && n.set(l, r);
      return n
    };
    this.signals = i(r({}, this.signals), {
      lastUnmuteActivityAtMs: t(this.signals.lastUnmuteActivityAtMs),
      lastUndeafenActivityAtMs: t(this.signals.lastUndeafenActivityAtMs)
    })
  }
  updateSignals(e, t) {
    this._textualScore.updateSignals(e, t), this.signals = e, this.lastActivityAtMs = t
  }
  constructor(e, t) {
    l(this, "signals", true), l(this, "providers", true), l(this, "lastActivityAtMs", true), l(this, "scoreInfo", {
      rawSignalsScore: {}
    }), l(this, "_textualScore", true), this.signals = e, this.providers = t, this._textualScore = new u(e, t), this.lastActivityAtMs = Date.now()
  }
}

function d(e, t, n) {
  if (null == e) return 0;
  let l = t - e;
  return l <= 0 ? 1 : l >= n ? 0 : 1 - l / n
}

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
  return e <= 0 ? 0 : e >= t ? t : e
}

function g(e) {
  var t, n, l, r, i, s, a, o, u;
  let c = null != (t = null == (n = e.getGuildId) ? true : n.call(e)) ? t : null;
  if (null == (l = e.isDM) ? true : l.call(e)) {
    let t = null != (s = null == (a = e.getRecipientId) ? true : a.call(e)) ? s : null;
    return {
      channelId: e.id,
      kind: "DIRECT_MESSAGE",
      guildId: null,
      recipientIds: null != t ? [t] : []
    }
  }
  return (null == (r = e.isGroupDM) ? true : r.call(e)) || (null == (i = e.isMultiUserDM) ? true : i.call(e)) ? {
    channelId: e.id,
    kind: "GROUP_DM",
    guildId: null,
    recipientIds: null != (o = e.recipients) ? o : []
  } : null != c ? {
    channelId: e.id,
    kind: (null == (u = e.isVocal) ? true : u.call(e)) ? "GUILD_VOICE" : "GUILD_TEXT",
    guildId: c,
    recipientIds: []
  } : null
}

function f(e, t) {
  let n = e - t;
  return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5
}

function p(e, t) {
  let n = e.guildId;
  if (null == n) return 0;
  let l = 0;
  return null != t.voiceGuildId && n === t.voiceGuildId && (l += 1), null != t.mostRecentGuildId && n === t.mostRecentGuildId && (l += .4), l
}

function I(e, t) {
  return .8 * (null != e.guildId ? h(t.getNormalizedGuildAffinity(e.guildId)) : 0)
}
class m {
  get score() {
    return this._score
  }
  get lastScoreInfo() {
    return this._activeNowScoreSource.scoreInfo
  }
  get prunable() {
    return this._score <= 0
  }
  recomputeScore(e) {
    return this._score = this._activeNowScoreSource.computeScore(e), this._score
  }
  prepareForUpdate(e) {
    return this.candidate.kind, this._activeNowScoreSource.pruneSignals(e), this.signals = this._activeNowScoreSource.signals, this.signals
  }
  updateSignalsAndRescore(e, t) {
    return this.prepareForUpdate(t), this.signals = r({}, this.signals, e), this.candidate.kind, this._activeNowScoreSource.updateSignals(this.signals, t), this.recomputeScore(t)
  }
  constructor(e, t, n) {
    l(this, "candidate", true), l(this, "signals", true), l(this, "_activeNowScoreSource", true), l(this, "_score", 0), this.candidate = e, this.signals = t, "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind ? this._activeNowScoreSource = new c(t, n) : this._activeNowScoreSource = new u(t, n), this.recomputeScore(Date.now())
  }
}