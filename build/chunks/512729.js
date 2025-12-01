/** Chunk was on web.js **/
/** chunk id: 512729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk327432 = require("./327432.js"),
  Chunk590921 = require("./590921.js"),
  Chunk657871 = require("./657871.js"),
  Chunk724177 = require("./724177.js"),
  Chunk695346 = require("./695346.js"),
  Chunk887490 = require("./887490.js");
let c = "line",
  u = [];

function d(e, t, n, d) {
  var f;
  let {
    enabled: p,
    highlightDesign: _
  } = (0, a.kB)("decorateMentionSuggestion", {
    autoTrackExposure: false
  }), m = e.selection, {
    currentAutocompleteType: h
  } = d, g = null !== h && h !== i.eq.MENTION_SUGGESTIONS;
  if (!p || n.isDM() || g || l.bN.areStylesDisabled(e) || !(null == (f = e.chatInputType.autocomplete) ? true : f.mentionSuggestions) || !s.HV.getSetting() || null == m || l.M8.isExpanded(m)) return u;
  let [E, b] = t;
  if (!l.LC.isText(E)) return u;
  let [y] = l.bN.node(e, l.C0.parent(b));
  if (!l.aj.isType(y, c) || !r.e6.includes(l.bN.range(e, b), m.anchor)) return u;
  let O = m.anchor.offset,
    {
      results: {
        suggestions: v,
        queryInfo: S
      }
    } = (0, o.r)(n, E.text, O, d);
  return 0 === v.length ? u : [{
    anchor: {
      path: b,
      offset: S.startIndex
    },
    focus: {
      path: b,
      offset: S.startIndex + S.query.length
    },
    mentionSuggestion: true,
    mentionSuggestionSimpleColorVariant: "simple" === _
  }]
}