/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(389117),
  a = n(374470),
  s = n(442837),
  l = n(481060),
  c = n(626135),
  u = n(5967),
  d = n(607070),
  f = n(446108),
  p = n(981631),
  _ = n(388032);

function h(e) {
  var t;
  if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== p.yXg.TAB || null == e.target) return;
  let {
    target: n
  } = e, r = null === (t = (0, u.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
  (0, a.k)(n) && c.default.track(p.rMx.KEYBOARD_SHORTCUT_USED, {
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
    prefersCrossfades: !1,
    forcedColors: a,
    alwaysShowLinkDecorations: c
  }), [n, a, c]);
  return i.useEffect(() => ((0, o.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, f.d1)()), _.NW.onLocaleChange(() => (0, f.d1)()), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, r.jsx)(l.Sfi.Provider, {
    value: u,
    children: t
  })
}