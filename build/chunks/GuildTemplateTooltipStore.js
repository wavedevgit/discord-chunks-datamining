/** Chunk was on 21738 **/
/** chunk id: 225437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js");

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
  p = true === Chunk506774.w.get(u);

function h(e) {
  let {
    guildId: t
  } = e;
  d = c(o({}, d), {
    [t]: false
  })
}
class g extends(r = Chunk311907.Ay.Store) {
  shouldShowGuildTemplateDirtyTooltip(e) {
    var t;
    return null != (t = d[e]) && t
  }
  shouldShowGuildTemplatePromotionTooltip() {
    return !p
  }
}
s(g, "displayName", "GuildTemplateTooltipStore");
let f = new g(Chunk73153.h, {
  GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
    let {
      guildTemplate: t
    } = e;
    d = c(o({}, d), {
      [t.source_guild_id]: t.is_dirty || false
    })
  },
  GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
    l.w.set(u, true), p = true
  },
  GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
    d = c(o({}, d), {
      [e.guildTemplate.source_guild_id]: false
    })
  },
  GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: h,
  GUILD_TEMPLATE_DELETE_SUCCESS: h
})