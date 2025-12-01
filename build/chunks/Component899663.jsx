/** Chunk was on web.js **/
/** chunk id: 899663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk502922 = require("./502922.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk607070 = require("./607070.js"),
  Chunk446108 = require("./446108.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var t;
  if (e.ctrlKey || e.altKey || e.metaKey || e.key !== p.vn.TAB || null == e.target) return;
  let {
    target: n
  } = e, r = null == (t = (0, o.uB)(e)) ? true : t.activeElement;
  (0, o.kK)(n) && c.default.track(f.rMx.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: "tab_navigation",
    source_class_list: null != r ? Array.from(r.classList) : [],
    location_object: n.tagName
  })
}

function h(e) {
  let {
    children: t
  } = e, n = (0, s.cj)([u.Z], () => ({
    enabled: u.Z.useReducedMotion,
    rawValue: u.Z.rawPrefersReducedMotion
  })), o = (0, s.cj)([u.Z], () => ({
    enabled: u.Z.useForcedColors,
    rawValue: u.Z.systemForcedColors
  })), c = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled), f = (0, s.e7)([u.Z], () => u.Z.alwaysShowLinkDecorations), p = (0, s.e7)([u.Z], () => u.Z.keyboardModeEnabled), h = (0, s.e7)([u.Z], () => u.Z.isSwitchIconsEnabled), g = i.useMemo(() => ({
    reducedMotion: n,
    prefersCrossfades: false,
    forcedColors: o,
    alwaysShowLinkDecorations: f,
    highContrastModeEnabled: c,
    keyboardModeEnabled: p,
    switchIconsEnabled: h
  }), [n, o, f, c, p, h]);
  return i.useEffect(() => ((0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.d1)()), _.intl.onLocaleChange(() => (0, d.d1)()), window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m)), []), (0, r.jsx)(l.Sfi.Provider, {
    value: g,
    children: t
  })
}