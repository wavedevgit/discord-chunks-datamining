/** Chunk was on web.js **/
/** chunk id: 899663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk125697 = require("./125697.js"),
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
  (0, a.k)(n) && c.default.track(_.rMx.KEYBOARD_SHORTCUT_USED, {
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
  })), a = (0, s.cj)([d.Z], () => ({
    enabled: d.Z.useForcedColors,
    rawValue: d.Z.systemForcedColors
  })), c = (0, s.e7)([d.Z], () => d.Z.alwaysShowLinkDecorations), u = i.useMemo(() => ({
    reducedMotion: n,
    prefersCrossfades: false,
    forcedColors: a,
    alwaysShowLinkDecorations: c
  }), [n, a, c]);
  return i.useEffect(() => ((0, o.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, f.d1)()), p.intl.onLocaleChange(() => (0, f.d1)()), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, r.jsx)(l.Sfi.Provider, {
    value: u,
    children: t
  })
}