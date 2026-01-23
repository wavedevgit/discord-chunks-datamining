/** Chunk was on web.js **/
/** chunk id: 360469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $J: () => C,
  $W: () => o,
  AM: () => m,
  CS: () => v,
  D4: () => l,
  DY: () => g,
  Gl: () => w,
  H5: () => D,
  I4: () => _,
  Ig: () => a,
  M1: () => L,
  N7: () => S,
  W9: () => A,
  _J: () => T,
  bN: () => N,
  dm: () => j,
  eK: () => h,
  gq: () => p,
  i6: () => x,
  iu: () => E,
  lk: () => P,
  mO: () => O,
  qA: () => c,
  qG: () => y,
  vu: () => I,
  xW: () => b,
  yz: () => s
}), require("./896048.js");
var Chunk155718 = require("./155718.js"),
  Chunk652215 = require("./652215.js");
let a = 160,
  s = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
  o = "438122941302046720",
  l = "1417273808645259344",
  c = "773336526917861400",
  u = "755600276941176913",
  d = "880218832743055411",
  f = "1050941315912835122",
  p = "880218394199220334",
  _ = "755827207812677713",
  h = "1234546995360694434",
  m = "1214629548377768066",
  g = "https://discord.com/blog/server-activities-games-voice-watch-together",
  E = {
    SMALL: 64,
    LARGE: 160
  },
  y = ["in_development", "activities_team", "employee_release"],
  b = ["1037680572660727838", "235088799074484224", "1007373802981822582", "1067803140071620628", "1194351737264406548", "1245041113882955918", "1245040907732910201", "1245040436427489471", "1208090049871351890", "1235205910863806484", "1227719606223765687"],
  O = ["1247266306231898122", "1257458870390099989", "1276239071764680926"];
var v = function(e) {
    return e.ADS = "ADS", e.FAILED_LOAD = "FAILED_LOAD", e.LAGGING = "LAGGING", e.CONFUSING = "CONFUSING", e.NOT_FUN = "NOT_FUN", e.OTHER = "OTHER", e
  }({}),
  A = function(e) {
    return e[e.PLAY = 0] = "PLAY", e[e.SPECTATE = 1] = "SPECTATE", e
  }({}),
  I = function(e) {
    return e.DESKTOP = "desktop", e.MOBILE = "mobile", e
  }({}),
  S = function(e) {
    return e[e.UNLOCKED = 1] = "UNLOCKED", e[e.PORTRAIT = 2] = "PORTRAIT", e[e.LANDSCAPE = 3] = "LANDSCAPE", e
  }({});
let T = new Set([u, d, f, p]),
  C = new Set([d, f, p]);
var N = function(e) {
  return e[e.FOCUSED = 0] = "FOCUSED", e[e.PIP = 1] = "PIP", e[e.GRID = 2] = "GRID", e
}({});
let R = {
    label_type: Chunk155718.Hr.NONE,
    release_phase: "",
    label_from: null,
    label_until: null,
    omit_badge_from_surfaces: []
  },
  w = {
    application_id: "",
    requires_age_gate: false,
    legacy_responsive_aspect_ratio: false,
    default_orientation_lock_state: 1,
    tablet_default_orientation_lock_state: 1,
    supported_platforms: [Chunk155718.Yl.WEB],
    client_platform_config: {
      [Chunk155718.Yl.WEB]: R,
      [Chunk155718.Yl.IOS]: R,
      [Chunk155718.Yl.ANDROID]: R
    },
    has_csp_exception: false,
    displays_advertisements: false,
    blocked_locales: [],
    supported_locales: []
  },
  P = [Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM],
  D = [...P, Chunk652215.rbe.GUILD_VOICE],
  x = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety";
var L = function(e) {
  return e.NORMAL = "normal", e.FULL_SCREEN = "full-screen", e
}({});
let j = 216e5