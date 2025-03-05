/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Bg: () => u,
  ZP: () => c
}), n(47120), n(266796);
var r = n(81825),
  i = n(768581),
  o = n(709054),
  a = n(624138),
  s = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends r.Z {
  merge(e) {
    let {
      features: t
    } = e;
    if (null != t) {
      let n = new Set(t);
      if (n.size === this.features.size) {
        let t = !1;
        for (let e of n)
          if (!this.features.has(e)) {
            t = !0;
            break
          } t || (e.features = this.features)
      }
    }
    return super.merge.call(this, e)
  }
  getSafetyAlertsChannelId() {
    var e;
    return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId
  }
  getIconURL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.ZP.getGuildIconURL({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t,
      lossless: n
    })
  }
  getIconSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return i.ZP.getAnimatableSourceWithFallback(t, t => i.ZP.getGuildIconSource({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    }))
  }
  getApplicationId() {
    return this.application_id
  }
  toString() {
    var e;
    return null !== (e = this.name) && void 0 !== e ? e : ""
  }
  get acronym() {
    return (0, a.Zg)(this.name)
  }
  isOwner(e) {
    let t = "string" == typeof e ? e : null != e ? e.id : null;
    return this.ownerId === t
  }
  isOwnerWithRequiredMfaLevel(e) {
    return (!!e.mfaEnabled || this.mfaLevel !== s.BpS.ELEVATED) && this.isOwner(e)
  }
  isNew() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
      t = o.default.extractTimestamp(this.id);
    return Date.now() - t < 864e5 * e
  }
  isLurker() {
    return null == this.joinedAt
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  getEveryoneRoleId() {
    return o.default.castGuildIdAsEveryoneGuildRoleId(this.id)
  }
  getMaxRoleSubscriptionEmojiSlots() {
    return 25
  }
  isCommunity() {
    return this.hasFeature(s.oNc.COMMUNITY)
  }
  hasVerificationGate() {
    return this.hasFeature(s.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(s.oNc.COMMUNITY) || this.hasFeature(s.oNc.CLAN))
  }
  hasCommunityInfoSubheader() {
    return this.hasFeature(s.oNc.COMMUNITY) && this.hasFeature(s.oNc.DISCOVERABLE)
  }
  canHaveRaidActivityAlerts() {
    return !this.hasFeature(s.oNc.COMMUNITY) && this.hasFeature(s.oNc.NON_COMMUNITY_RAID_ALERTS) || this.hasFeature(s.oNc.COMMUNITY) && !this.hasFeature(s.oNc.RAID_ALERTS_DISABLED)
  }
  updateJoinedAt(e) {
    return this.set("joinedAt", "string" == typeof e ? new Date(e) : e)
  }
  constructor(e) {
    var t, n, r, i;
    super(), l(this, "id", void 0), l(this, "name", void 0), l(this, "description", void 0), l(this, "ownerId", void 0), l(this, "icon", void 0), l(this, "splash", void 0), l(this, "banner", void 0), l(this, "homeHeader", void 0), l(this, "preferredLocale", void 0), l(this, "features", void 0), l(this, "afkChannelId", void 0), l(this, "afkTimeout", void 0), l(this, "systemChannelId", void 0), l(this, "verificationLevel", void 0), l(this, "joinedAt", void 0), l(this, "defaultMessageNotifications", void 0), l(this, "mfaLevel", void 0), l(this, "application_id", void 0), l(this, "explicitContentFilter", void 0), l(this, "vanityURLCode", void 0), l(this, "premiumTier", void 0), l(this, "premiumSubscriberCount", void 0), l(this, "premiumProgressBarEnabled", void 0), l(this, "systemChannelFlags", void 0), l(this, "rulesChannelId", void 0), l(this, "safetyAlertsChannelId", void 0), l(this, "discoverySplash", void 0), l(this, "publicUpdatesChannelId", void 0), l(this, "maxStageVideoChannelUsers", void 0), l(this, "maxVideoChannelUsers", void 0), l(this, "maxMembers", void 0), l(this, "nsfwLevel", void 0), l(this, "hubType", void 0), l(this, "latestOnboardingQuestionId", void 0), l(this, "profile", void 0), l(this, "premiumFeatures", void 0);
    let o = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
    this.id = e.id, this.name = e.name || "", this.description = e.description || null, this.ownerId = e.ownerId || null, this.icon = e.icon || null, this.splash = e.splash || null, this.banner = e.banner || null, this.homeHeader = e.homeHeader || null, this.features = o, this.preferredLocale = e.preferredLocale || "en-US", this.afkChannelId = e.afkChannelId || null, this.afkTimeout = e.afkTimeout, this.systemChannelId = e.systemChannelId || null, this.verificationLevel = e.verificationLevel || s.sFg.NONE, this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt), this.defaultMessageNotifications = e.defaultMessageNotifications || s.bL.ALL_MESSAGES, this.mfaLevel = e.mfaLevel || s.BpS.NONE, this.application_id = e.application_id || null, this.explicitContentFilter = e.explicitContentFilter || s.lxg.DISABLED, this.vanityURLCode = e.vanityURLCode || void 0, this.premiumTier = e.premiumTier || s.Eu4.NONE, this.premiumSubscriberCount = e.premiumSubscriberCount || 0, this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1, this.systemChannelFlags = e.systemChannelFlags, this.discoverySplash = e.discoverySplash || null, this.rulesChannelId = e.rulesChannelId || null, this.safetyAlertsChannelId = e.safetyAlertsChannelId || null, this.publicUpdatesChannelId = e.publicUpdatesChannelId || null, this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1, this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1, this.maxMembers = e.maxMembers || -1, this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : s.V_K.DEFAULT, this.hubType = e.hubType, this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null, this.profile = null !== (r = e.profile) && void 0 !== r ? r : null, this.premiumFeatures = null !== (i = e.premiumFeatures) && void 0 !== i ? i : null
  }
}
class u extends c {
  constructor(e) {
    var t;
    super(e), l(this, "roles", void 0), l(this, "member", void 0), this.roles = null !== (t = e.roles) && void 0 !== t ? t : {}, e.member && e.member.userId && e.member.roles ? this.member = {
      roles: e.member.roles,
      userId: e.member.userId
    } : this.member = null
  }
}