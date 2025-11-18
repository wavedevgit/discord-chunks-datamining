/** Chunk was on web.js **/
/** chunk id: 221292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Er: () => M,
  NE: () => P,
  Of: () => L,
  QN: () => A,
  Qf: () => D,
  RV: () => N,
  TY: () => w,
  V1: () => x,
  pQ: () => C,
  te: () => T,
  z7: () => R
}), require("./539854.js"), require("./388685.js");
var Chunk367907 = require("./367907.js"),
  Chunk752048 = require("./752048.js"),
  Chunk199902 = require("./199902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk621853 = require("./621853.js"),
  Chunk468462 = require("./468462.js"),
  Chunk687158 = require("./687158.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = e => {
    let {
      user: t,
      userProfile: n,
      guildMember: r,
      guildMemberProfile: i
    } = e, a = null != n ? n : i, o = [];
    if ((null == r ? true : r.nick) && o.push(h.cm.NICKNAME), (null == a ? true : a.pronouns) && o.push(h.cm.PRONOUNS), null == t ? true : t.avatar) {
      let e = (0, d.xR)(null == t ? true : t.avatar);
      o.push(e ? h.cm.ANIMATED_AVATAR : h.cm.AVATAR)
    }
    if (null == a ? true : a.banner) {
      let e = (0, d.xR)(null == a ? true : a.banner);
      o.push(e ? h.cm.ANIMATED_BANNER : h.cm.BANNER)
    }
    return (null == a ? true : a.bio) && o.push(h.cm.BIO), (null == a ? true : a.themeColors) != null && true !== a.themeColors.find(e => null !== e) && o.push(h.cm.THEME), (null == t ? true : t.avatarDecoration) != null && o.push(h.cm.AVATAR_DECORATION), (null == a ? true : a.profileEffect) != null && o.push(h.cm.PROFILE_EFFECT), o
  },
  I = e => {
    let t = s.Z.getStatus(e),
      n = s.Z.isMobileOnline(e);
    return t === g.Sk.ONLINE && n ? "".concat(t, "-mobile") : t === g.Sk.ONLINE ? "".concat(t, "-desktop") : t
  },
  T = e => null == e ? e : "VOICE" === e ? "VOICE" : Object.keys(m.IIU)[Object.values(m.IIU).indexOf(e)],
  S = e => {
    var t, n, r;
    let {
      layout: i,
      userId: a,
      guildId: l,
      sessionId: u,
      sourceSessionId: d,
      showGuildProfile: f = true
    } = e, _ = c.default.getUser(a);
    if (null == _) return {};
    let h = (0, p.Of)(null == _ ? true : _.id, f ? l : true),
      m = f && null != l ? o.ZP.getMember(l, null == _ ? true : _.id) : null;
    return {
      profile_layout: i,
      profile_session_id: u,
      source_profile_session_id: d,
      profile_properties: v({
        user: _,
        userProfile: null == h ? true : h._userProfile
      }),
      guild_profile_properties: v({
        guildMember: m,
        guildMemberProfile: null == h ? true : h._guildMemberProfile
      }),
      profile_activity_types: s.Z.getActivities(_.id).map(e => {
        let {
          type: t
        } = e;
        return t
      }).filter(e => true !== e),
      profile_badges: null == h || null == (t = h.getBadges()) ? true : t.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      avatar_decoration_sku_id: null == (n = _.avatarDecoration) ? true : n.skuId,
      profile_effect_sku_id: null == h || null == (r = h.profileEffect) ? true : r.skuId,
      user_status: I(_.id),
      is_guild_profile: (null == h ? true : h.guildId) != null,
      is_bot_profile: _.bot
    }
  },
  A = e => {
    var t;
    let {
      userId: n
    } = e;
    if (null == n) return {};
    let r = i.Z.getUserAffinity(n);
    return {
      related_user_id: n,
      relationship_type: l.Z.getRelationshipType(n),
      related_since: l.Z.getSince(n),
      num_mutual_friends: f.Z.getMutualFriendsCount(n),
      num_mutual_guilds: null == (t = f.Z.getMutualGuilds(n)) ? true : t.length,
      communication_probability: null == r ? true : r.communicationProbability,
      communication_rank: null == r ? true : r.communicationRank
    }
  },
  C = e => {
    let {
      guildId: t,
      channelId: n,
      messageId: i,
      roleId: a,
      widgetType: o,
      analyticsLocations: s,
      action: l,
      section: c,
      applicationId: d
    } = e;
    u.default.track(m.rMx.USER_PROFILE_ACTION, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
      location_stack: s,
      profile_action: l,
      profile_section: c,
      source_message_id: i,
      source_role_id: a,
      widget_type: o,
      application_id: d
    }))
  },
  N = e => {
    if (!(0, _.E)({
        location: "UserProfileAnalyticsUtils"
      })) return;
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      profileUi: a,
      viewStartedAt: o,
      fetchStartedAt: s,
      timeToInteractiveMs: l,
      timeToLoadMs: c,
      timeToFetchMs: d
    } = e;
    (null != l ? l : 0) <= 0 || (null != c ? c : 0) <= 0 || (null != d ? d : 0) <= 0 || u.default.track(m.rMx.USER_PROFILE_UI_VIEWED, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
      location_stack: i,
      profile_ui: a,
      view_started_at: o,
      fetch_started_at: s,
      time_to_interactive_ms: l,
      time_to_load_ms: c,
      time_to_fetch_ms: d
    }))
  },
  R = e => {
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      action: a,
      display: o,
      activity: s,
      stream: l,
      entry: c,
      outbox: d,
      voiceChannelId: f
    } = e;
    u.default.track(m.rMx.USER_PROFILE_ACTIVITY_ACTION, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
      location_stack: i,
      activity_action: a,
      activity_display: o,
      activity_type: T(null != l ? m.IIU.STREAMING : null == s ? true : s.type),
      activity_name: null == s ? true : s.name,
      activity_platform: null == s ? true : s.platform,
      activity_session_id: null == s ? true : s.session_id,
      activity_application_id: null == s ? true : s.application_id,
      item_id: null == c ? true : c.id,
      author_id_v2: null == c ? true : c.author_id,
      item_ids: null == d ? true : d.entries.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      author_ids_v2: null == d ? true : d.entries.map(e => {
        let {
          author_id: t
        } = e;
        return t
      }),
      voice_channel_id: f
    }))
  },
  P = e => {
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      badge: a
    } = e;
    u.default.track(m.rMx.USER_PROFILE_BADGE_PRESSED, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
      location_stack: i,
      badge: a
    }))
  },
  D = e => {
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      badge: a
    } = e;
    u.default.track(m.rMx.USER_PROFILE_BADGE_HOVERED, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
      location_stack: i,
      badge: a
    }))
  },
  w = e => {
    var t, n, r;
    let {
      displayProfile: i,
      isProfileOpen: o
    } = e, c = null == i ? true : i.userId, d = null != c ? s.Z.findActivity(c, e => {
      let {
        type: t
      } = e;
      return null != a.Z.getAnyStreamForUser(c) ? t === m.IIU.PLAYING : t !== m.IIU.CUSTOM_STATUS
    }) : null;
    u.default.track(m.rMx.DM_PROFILE_TOGGLED, {
      is_profile_open: o,
      has_images: !!(null != (r = null == d || null == (t = d.assets) ? true : t.large_image) ? r : null == d || null == (n = d.assets) ? true : n.small_image),
      is_friend: l.Z.isFriend(c),
      viewed_profile_user_id: c,
      profile_has_nitro_customization: null == i ? true : i.hasPremiumCustomization(),
      profile_has_theme_color_customized: null == i ? true : i.hasThemeColors(),
      profile_has_theme_animation: (null == i ? true : i.popoutAnimationParticleType) != null
    })
  },
  L = e => {
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      action: a,
      widgetEdited: o,
      gameId: s,
      numResults: l,
      numCharacters: c,
      applicationId: d
    } = e;
    C(O(b({}, e), {
      action: a
    })), u.default.track(m.rMx.USER_PROFILE_EDIT_ACTION, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e)), {
      location_stack: i,
      edit_action: a,
      widget_edited: o,
      game_id: s,
      num_results: l,
      num_characters: c,
      application_id: d
    }))
  },
  x = e => {
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      widgetEdited: a,
      gameIds: o,
      tags: s,
      numCharactersCommentary: l,
      isWidgetRemoved: c
    } = e;
    C(O(b({}, e), {
      action: "EDIT_SAVED"
    })), u.default.track(m.rMx.USER_PROFILE_EDIT_SAVED, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e)), {
      location_stack: i,
      widget_edited: a,
      game_ids: o,
      tags: s,
      num_characters_commentary: l,
      is_widget_removed: c
    }))
  },
  M = e => {
    let {
      guildId: t,
      channelId: n,
      analyticsLocations: i,
      action: a,
      wishlistId: o,
      skuId: s,
      hasThirdPartySku: l
    } = e;
    C(O(b({}, e), {
      action: a
    })), u.default.track(m.rMx.USER_PROFILE_WISHLIST_ACTION, O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e)), {
      location_stack: i,
      action_type: a,
      wishlist_id: o,
      sku_id: s,
      has_3p_sku: l
    }))
  }