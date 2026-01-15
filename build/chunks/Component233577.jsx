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
    var a;
    return i.commands !== m.L8.DISABLED && i.commands !== m.L8.OLD_BUILT_INS && (null == (a = o.Z.getActiveCommand(e.id)) ? true : a.integrationType) === g.q9n.STICKER && o.Z.getOptionStates(e.id).query.hasValue
  },
  queryResults(e, t, n, r) {
    var i;
    let a = null == (i = o.Z.getActiveCommand(e.id)) ? true : i.untranslatedName;
    if (null == a) return y;
    let s = [];
    (0, u.$p)();
    let l = _.ZP.queryStickers([n], true, [e, (e, t) => t === c.eb.SENDABLE]),
      d = Math.max(b);
    return {
      results: {
        command: a,
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
      onHover: a,
      onClick: o
    } = e;
    return (0, r.jsx)(r.Fragment, {
      children: (0, h.HI)({
        query: i,
        selectedIndex: n,
        autocompletes: t,
        onHover: a,
        onClick: o,
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
    let _ = o.Z.getActiveCommand(u.id);
    (null == _ ? true : _.inputType) === s.iw.BUILT_IN_INTEGRATION && (i.Z.dispatch({
      type: "APPLICATION_COMMAND_USED",
      context: {
        channel: u,
        guild: d
      },
      command: _,
      commandOrigin: s.bB.CHAT
    }), a.ZP.trackWithMetadata(g.rMx.APPLICATION_COMMAND_USED, {
      command_id: _.id,
      application_id: _.applicationId,
      command_type: _.type,
      source: o.Z.getSource(u.id)
    }));
    let h = r[l];
    return c.sendSticker(h.sticker, f.V0.BUILT_IN_INTEGRATION), h.sticker.type === f.n0.GUILD && (t = h.sticker.guild_id), a.ZP.trackWithMetadata(g.rMx.SEARCH_RESULT_SELECTED, {
      load_id: h.sticker.id,
      search_type: g.aib.STICKER,
      source_object: "/".concat(n),
      total_results: r.length,
      index_num: l,
      expression_guild_id: t,
      sticker_id: h.sticker.id,
      query: p
    }), {
      type: m.z2.STICKER,
      metadata: {
        numStickerResults: r.length,
        stickerId: h.sticker.id
      }
    }
  }
}