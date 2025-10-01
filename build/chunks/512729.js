/** Chunk was on web.js **/
/** chunk id: 512729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./421244.js"), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  Chunk327432 = require("./327432.js"),
  Chunk657871 = require("./657871.js"),
  Chunk724177 = require("./724177.js"),
  Chunk695346 = require("./695346.js"),
  Chunk887490 = require("./887490.js");
let c = "line",
  u = [],
  d = RegExp("(?<prefix>^|\\s+)(?<word>\\w{2,})[".concat((0, Chunk392711.escapeRegExp)(Chunk724177.x), "]*"), "g"),
  f = /\s/;

function* _(e, t, n) {
  for (let i of e.matchAll(d)) {
    var r;
    if (null == i.groups) continue;
    let {
      prefix: e,
      word: a
    } = i.groups, {
      results: s
    } = (0, o.r)(t, a, n);
    if (s.suggestions.length < 1) continue;
    let l = null != (r = null == e ? true : e.length) ? r : 0;
    yield {
      start: i.index + l,
      end: i.index + l + a.length,
      results: s
    }
  }
}

function p(e, t, n, r) {
  var o;
  let {
    enabled: d,
    highlightDesign: p
  } = (0, a.kB)("decorateMentionSuggestion", {
    autoTrackExposure: false
  }), h = e.selection;
  if (!d || l.bN.areStylesDisabled(e) || !(null == (o = e.chatInputType.autocomplete) ? true : o.mentionSuggestions) || !s.HV.getSetting() || null == h || l.M8.isExpanded(h)) return u;
  let [m, g] = t;
  if (!l.LC.isText(m)) return u;
  let [E] = l.bN.node(e, l.C0.parent(g));
  if (!l.aj.isType(E, c) || !i.e6.includes(l.bN.range(e, g), h.anchor)) return u;
  let b = h.anchor.offset;
  for (; b > 0 && !f.test(m.text[b - 1]);) b--;
  let y = h.anchor.offset;
  for (; y < m.text.length && !f.test(m.text[y]);) y++;
  let O = m.text.substring(b, y),
    v = [];
  for (let e of _(O, n, r)) v.push({
    anchor: {
      path: g,
      offset: b + e.start
    },
    focus: {
      path: g,
      offset: b + e.end
    },
    mentionSuggestion: true,
    mentionSuggestionSimpleColorVariant: "simple" === p
  });
  return v
}