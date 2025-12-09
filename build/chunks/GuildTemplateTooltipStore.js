/** Chunk was on 1272 **/
/** chunk id: 130734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = "hasSeenGuildTemplatePromotionTooltip",
  d = {},
  p = true === Chunk433517.K.get(u);

function f(e) {
  let {
    guildId: t
  } = e;
  d = c(o({}, d), {
    [t]: false
  })
}
class g extends(r = Chunk442837.ZP.Store) {
  shouldShowGuildTemplateDirtyTooltip(e) {
    var t;
    return null != (t = d[e]) && t
  }
  shouldShowGuildTemplatePromotionTooltip() {
    return !p
  }
}
s(g, "displayName", "GuildTemplateTooltipStore");
let h = new g(Chunk570140.Z, {
  GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
    let {
      guildTemplate: t
    } = e;
    d = c(o({}, d), {
      [t.source_guild_id]: t.is_dirty || false
    })
  },
  GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
    Chunk433517.K.set(u, true), p = true
  },
  GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
    d = c(o({}, d), {
      [e.guildTemplate.source_guild_id]: false
    })
  },
  GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: f,
  GUILD_TEMPLATE_DELETE_SUCCESS: f
})