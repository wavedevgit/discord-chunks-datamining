/** Chunk was on web.js **/
/** chunk id: 233577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk285651 = require("./285651.js"),
  Chunk268350 = require("./268350.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = 8,
  y = {
    results: {
      command: null,
      stickers: []
    }
  };

function O(e, t) {
  return (0, r.jsx)(p.Z, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}
let v = {
  stores: [Chunk926491.Z],
  matches(e, t, n, r, i) {
    var o;
    return i.commands !== h.L8.DISABLED && i.commands !== h.L8.OLD_BUILT_INS && (null == (o = a.Z.getActiveCommand(e.id)) ? true : o.integrationType) === g.q9n.STICKER && a.Z.getOptionStates(e.id).query.hasValue
  },
  queryResults(e, t, n, r) {
    var i;
    let o = null == (i = a.Z.getActiveCommand(e.id)) ? true : i.untranslatedName;
    if (null == o) return y;
    let s = [];
    (0, u.$p)();
    let l = _.ZP.queryStickers([n], true, [e, (e, t) => t === c.eb.SENDABLE]),
      d = Math.max(b);
    return {
      results: {
        command: o,
        stickers: s = l.slice(0, d)
      },
      metadata: {
        numStickerResults: s.length
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
      onHover: o,
      onClick: a
    } = e;
    return (0, r.jsx)(r.Fragment, {
      children: (0, m.HI)({
        query: i,
        selectedIndex: n,
        autocompletes: t,
        onHover: o,
        onClick: a,
        titleWithQuery: E.t.uferGG,
        titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
        Component: l.ZP.Sticker,
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
    let _ = a.Z.getActiveCommand(u.id);
    (null == _ ? true : _.inputType) === s.iw.BUILT_IN_INTEGRATION && (i.Z.dispatch({
      type: "APPLICATION_COMMAND_USED",
      context: {
        channel: u,
        guild: d
      },
      command: _,
      commandOrigin: s.bB.CHAT
    }), o.ZP.trackWithMetadata(g.rMx.APPLICATION_COMMAND_USED, {
      command_id: _.id,
      application_id: _.applicationId,
      command_type: _.type,
      source: a.Z.getSource(u.id)
    }));
    let m = r[l];
    return c.sendSticker(m.sticker, f.V0.BUILT_IN_INTEGRATION), m.sticker.type === f.n0.GUILD && (t = m.sticker.guild_id), o.ZP.trackWithMetadata(g.rMx.SEARCH_RESULT_SELECTED, {
      load_id: m.sticker.id,
      search_type: g.aib.STICKER,
      source_object: "/".concat(n),
      total_results: r.length,
      index_num: l,
      expression_guild_id: t,
      sticker_id: m.sticker.id,
      query: p
    }), {
      type: h.z2.STICKER,
      metadata: {
        numStickerResults: r.length,
        stickerId: m.sticker.id
      }
    }
  }
}