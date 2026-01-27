/** Chunk was on web.js **/
/** chunk id: 891090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dt: () => u,
  Fg: () => d,
  HA: () => f,
  Qz: () => h,
  nQ: () => p,
  p4: () => c,
  ry: () => _
});
var Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk842086 = require("./842086.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk788868 = require("./788868.js");
let c = e => {
    let {
      containerWidth: t,
      favoriteStickers: n,
      frequentlyUsedStickers: i,
      guildStickers: l,
      stickersTotal: c
    } = e;
    r.Ay.trackWithMetadata(o.HAw.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: s.kx.STICKER,
      badged: false,
      num_expressions_favorites: n.length,
      num_animated_expressions_favorites: n.filter(e => (0, a.Tw)(e.format_type)).length,
      num_custom_expressions_favorites: n.filter(e => (0, a.zN)(e.type)).length,
      num_standard_expressions_favorites: n.filter(e => !(0, a.zN)(e.type)).length,
      num_expressions_frecent: i.length,
      num_custom_expressions_frecent: i.filter(e => (0, a.zN)(e.type)).length,
      num_animated_expressions_frecent: i.filter(e => (0, a.Tw)(e.format_type)).length,
      num_standard_expressions_frecent: i.filter(e => !(0, a.zN)(e.type)).length,
      num_current_guild_expressions: l.length,
      num_custom_expressions_total: c
    })
  },
  u = e => {
    let t, {
      sticker: n,
      location: i
    } = e;
    n.type === a.NL.GUILD && (t = n.guild_id), r.Ay.trackWithMetadata(o.HAw.EXPRESSION_FAVORITED, {
      location: i,
      expression_type: s.kx.STICKER,
      expression_id: n.id,
      expression_name: n.name,
      expression_guild_id: t,
      is_animated: (0, a.Tw)(n.format_type),
      is_custom: (0, a.zN)(n.type)
    })
  },
  d = () => {
    i.default.track(o.HAw.SEARCH_STARTED, {
      search_type: o.I4_.STICKER
    })
  },
  f = (e, t, n) => {
    r.Ay.trackWithMetadata(o.HAw.SEARCH_RESULT_VIEWED, {
      search_type: o.I4_.STICKER,
      total_results: t,
      query: e,
      is_suggestion: n
    })
  },
  p = (e, t, n) => {
    let i, {
      sticker: s
    } = e;
    s.type === a.NL.GUILD && (i = s.guild_id), r.Ay.trackWithMetadata(o.HAw.SEARCH_RESULT_SELECTED, {
      load_id: s.id,
      search_type: o.I4_.STICKER,
      source_object: "Sticker Picker",
      total_results: n,
      expression_guild_id: i,
      sticker_id: s.id,
      query: t
    })
  },
  _ = e => {
    let t, {
      sticker: n,
      category: i
    } = e;
    n.type === a.NL.GUILD && (t = n.guild_id), r.Ay.trackWithMetadata(o.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: l.e.EMOJI_PICKER_STICKER_CLICKED,
      expression_id: n.id,
      expression_name: n.name,
      expression_picker_section: i,
      expression_guild_id: t,
      is_animated: (0, a.Tw)(n.format_type),
      is_custom: (0, a.zN)(n.type)
    })
  },
  h = e => {
    null != e && "" !== e && r.Ay.trackWithMetadata(o.HAw.SEARCH_RESULT_EMPTY, {
      query: e,
      search_type: o.I4_.STICKER,
      source_object: "Sticker Picker"
    })
  }