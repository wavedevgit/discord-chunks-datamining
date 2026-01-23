/** Chunk was on web.js **/
/** chunk id: 904987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk719442 = require("./719442.js"),
  Chunk374803 = require("./374803.js"),
  Chunk968011 = require("./968011.js"),
  Chunk399777 = require("./399777.js"),
  Chunk253932 = require("./253932.js"),
  Chunk711371 = require("./711371.js");
let c = "line",
  u = [];

function d(e, t, n, d) {
  var f;
  let {
    enabled: p,
    highlightDesign: _
  } = (0, a.sA)("decorateMentionSuggestion", {
    autoTrackExposure: false
  }), h = e.selection, {
    currentAutocompleteType: m
  } = d, g = null !== m && m !== i.DB.MENTION_SUGGESTIONS;
  if (!p || n.isDM() || g || l.VW.areStylesDisabled(e) || !(null == (f = e.chatInputType.autocomplete) ? true : f.mentionSuggestions) || !o.ng.getSetting() || null == h || l.ZF.isExpanded(h)) return u;
  let [E, y] = t;
  if (!l.l5.isText(E)) return u;
  let [b] = l.VW.node(e, l.PW.parent(y));
  if (!l.AS.isType(b, c) || !r.Q6.includes(l.VW.range(e, y), h.anchor)) return u;
  let O = h.anchor.offset,
    {
      results: {
        suggestions: v,
        queryInfo: A
      }
    } = (0, s.W)(n, E.text, O, d);
  return 0 === v.length ? u : [{
    anchor: {
      path: y,
      offset: A.startIndex
    },
    focus: {
      path: y,
      offset: A.startIndex + A.query.length
    },
    mentionSuggestion: true,
    mentionSuggestionSimpleColorVariant: "simple" === _
  }]
}