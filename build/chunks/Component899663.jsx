/** Chunk was on web.js **/
/** chunk id: 899663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk631562 = require("./631562.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5967 = require("./5967.js"),
  Chunk607070 = require("./607070.js"),
  Chunk446108 = require("./446108.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  var t;
  if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== _.yXg.TAB || null == e.target) return;
  let {
    target: n
  } = e, r = null == (t = (0, u.uB)(e)) ? true : t.activeElement;
  (0, o.k)(n) && c.default.track(_.rMx.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: "tab_navigation",
    source_class_list: null != r ? Array.from(r.classList) : [],
    location_object: n.tagName
  })
}

function m(e) {
  let {
    children: t
  } = e, n = (0, s.cj)([d.Z], () => ({
    enabled: d.Z.useReducedMotion,
    rawValue: d.Z.rawPrefersReducedMotion
  })), o = (0, s.cj)([d.Z], () => ({
    enabled: d.Z.useForcedColors,
    rawValue: d.Z.systemForcedColors
  })), c = (0, s.e7)([d.Z], () => d.Z.alwaysShowLinkDecorations), u = i.useMemo(() => ({
    reducedMotion: n,
    prefersCrossfades: false,
    forcedColors: o,
    alwaysShowLinkDecorations: c
  }), [n, o, c]);
  return i.useEffect(() => ((0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, f.d1)()), p.intl.onLocaleChange(() => (0, f.d1)()), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, r.jsx)(l.Sfi.Provider, {
    value: u,
    children: t
  })
}