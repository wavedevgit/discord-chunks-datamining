/** Chunk was on web.js **/
/** chunk id: 697138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk932433 = require("./932433.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk775602 = require("./775602.js"),
  Chunk264927 = require("./264927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  var t;
  if (e.ctrlKey || e.altKey || e.metaKey || e.key !== p.dh.TAB || null == e.target) return;
  let {
    target: n
  } = e, r = null == (t = (0, o.BF)(e)) ? true : t.activeElement;
  (0, o.vq)(n) && c.default.track(f.HAw.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: "tab_navigation",
    source_class_list: null != r ? Array.from(r.classList) : [],
    location_object: n.tagName
  })
}

function m(e) {
  let {
    children: t
  } = e, n = (0, s.cf)([u.A], () => ({
    enabled: u.A.useReducedMotion,
    rawValue: u.A.rawPrefersReducedMotion
  })), o = (0, s.cf)([u.A], () => ({
    enabled: u.A.useForcedColors,
    rawValue: u.A.systemForcedColors
  })), c = (0, s.bG)([u.A], () => u.A.isHighContrastModeEnabled), f = (0, s.bG)([u.A], () => u.A.alwaysShowLinkDecorations), p = (0, s.bG)([u.A], () => u.A.keyboardModeEnabled), m = (0, s.bG)([u.A], () => u.A.isSwitchIconsEnabled), g = i.useMemo(() => ({
    reducedMotion: n,
    prefersCrossfades: false,
    forcedColors: o,
    alwaysShowLinkDecorations: f,
    highContrastModeEnabled: c,
    keyboardModeEnabled: p,
    switchIconsEnabled: m
  }), [n, o, f, c, p, m]);
  return i.useEffect(() => ((0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.Z7)()), _.intl.onLocaleChange(() => (0, d.Z7)()), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, r.jsx)(l.CZY.Provider, {
    value: g,
    children: t
  })
}