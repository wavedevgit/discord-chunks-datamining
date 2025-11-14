/** Chunk was on web.js **/
/** chunk id: 566078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => d
}), require("./415506.js"), require("./388685.js");
var Chunk754700 = require("./754700.js"),
  Chunk319245 = require("./319245.js"),
  Chunk509212 = require("./509212.js"),
  Chunk502288 = require("./502288.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class d {
  static build(e) {
    if (2 !== e.configVersion) throw Error("Cannot build SharedQuestFields when [configVersion !== 2]");
    return new d(e)
  }
  get features() {
    return new Set(this.quest.features)
  }
  _defaultRewardV2(e) {
    return e.rewardsConfig.rewards[0]
  }
  get defaultReward() {
    return this._defaultRewardV2(this.quest)
  }
  get defaultRewardNameWithArticle() {
    return (0, Chunk509212.Bg)(this.quest) ? (0, Chunk502288.o8)(this.quest) : this.defaultReward.messages.nameWithArticle
  }
  get defaultRewardName() {
    return (0, Chunk509212.Bg)(this.quest) ? (0, Chunk502288.o8)(this.quest) : this.defaultReward.messages.name
  }
  get defaultRewardRedemptionInstructionsByPlatform() {
    return this._defaultRewardV2(this.quest).messages.redemptionInstructionsByPlatform
  }
  get rewardsExpireAt() {
    return this.quest.rewardsConfig.rewardsExpireAt
  }
  get application() {
    return u(l({}, this.quest.application), {
      ids: [this.quest.application.id]
    })
  }
  get ctaLink() {
    var e, t;
    return null != (t = null == (e = this.quest.ctaConfig) ? true : module.link) ? exports : this.application.link
  }
  get rewardPlatforms() {
    return this.quest.rewardsConfig.platforms
  }
  get questType() {
    return (0, Chunk509212.q8)({
      config: this.quest
    }) ? Chunk319245.W.VIDEO : Chunk319245.W.GAMEPLAY
  }
  get defaultInGameTask() {
    var e;
    let t = this.quest.taskConfigV2.tasks,
      n = exports[Chunk754700.X.ACHIEVEMENT_IN_ACTIVITY],
      i = exports[Chunk754700.X.ACHIEVEMENT_IN_GAME];
    return null != (e = null != require ? require : Chunk319245) ? module : null
  }
  get defaultWatchVideoTask() {
    var e;
    let t = this.quest.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO],
      n = this.quest.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO_ON_MOBILE];
    return null != exports && null != require ? exports : null != (e = null != require ? require : exports) ? module : null
  }
  constructor(e) {
    s(this, "quest", true), this.quest = e
  }
}