/** Chunk was on web.js **/
/** chunk id: 523173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk861382 = require("./861382.js"),
  Chunk392054 = require("./392054.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk361670 = require("./361670.js"),
  Chunk631576 = require("./631576.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk248465 = require("./248465.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let b = 8,
  y = {
    results: {
      command: null,
      stickers: []
    }
  };

function O(e, t) {
  return (0, r.jsx)(p.A, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}
let A = {
  stores: [Chunk679382.A],
  matches(e, t, n, r, i) {
    var a;
    return i.commands !== m.Ze.DISABLED && i.commands !== m.Ze.OLD_BUILT_INS && (null == (a = s.A.getActiveCommand(e.id)) ? true : a.integrationType) === g.p_j.STICKER && s.A.getOptionStates(e.id).query.hasValue
  },
  queryResults(e, t, n, r) {
    var i;
    let a = null == (i = s.A.getActiveCommand(e.id)) ? true : i.untranslatedName;
    if (null == a) return y;
    let o = [];
    (0, u.YB)();
    let l = _.Ay.queryStickers([n], true, [e, (e, t) => t === c.Ux.SENDABLE]),
      d = Math.max(b);
    return {
      results: {
        command: a,
        stickers: o = l.slice(0, d)
      },
      metadata: {
        numStickerResults: o.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        stickers: t
      },
      selectedIndex: n,
      query: i,
      onHover: a,
      onClick: s
    } = e;
    return (0, r.jsx)(r.Fragment, {
      children: (0, h.GM)({
        query: i,
        selectedIndex: n,
        autocompletes: t,
        onHover: a,
        onClick: s,
        titleWithQuery: E.t.uferGG,
        titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
        Component: l.Ay.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: O,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : true,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers"
      })
    })
  },
  onSelect(e) {
    let t, {
      results: {
        command: n,
        stickers: r
      },
      index: l,
      options: c,
      channel: u,
      guild: d,
      queryText: p
    } = e;
    if (null == n || l >= r.length) return {
      type: null
    };
    let _ = s.A.getActiveCommand(u.id);
    (null == _ ? true : _.inputType) === o.y$.BUILT_IN_INTEGRATION && (i.h.dispatch({
      type: "APPLICATION_COMMAND_USED",
      context: {
        channel: u,
        guild: d
      },
      command: _,
      commandOrigin: o.iw.CHAT
    }), a.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
      command_id: _.id,
      application_id: _.applicationId,
      command_type: _.type,
      source: s.A.getSource(u.id)
    }));
    let h = r[l];
    return c.sendSticker(h.sticker, f.D6.BUILT_IN_INTEGRATION), h.sticker.type === f.NL.GUILD && (t = h.sticker.guild_id), a.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
      load_id: h.sticker.id,
      search_type: g.I4_.STICKER,
      source_object: "/".concat(n),
      total_results: r.length,
      index_num: l,
      expression_guild_id: t,
      sticker_id: h.sticker.id,
      query: p
    }), {
      type: m.kc.STICKER,
      metadata: {
        numStickerResults: r.length,
        stickerId: h.sticker.id
      }
    }
  }
}