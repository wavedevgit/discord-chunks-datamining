/** Chunk was on web.js **/
/** chunk id: 765305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $I: () => d,
  Fc: () => O,
  Ku: () => c,
  Qk: () => h,
  VF: () => v,
  WX: () => f,
  X_: () => I,
  _U: () => g,
  fL: () => b,
  gG: () => s,
  gv: () => T,
  j8: () => _,
  nz: () => m,
  p: () => a,
  p1: () => u,
  pg: () => E,
  rC: () => y,
  sy: () => p,
  wm: () => o,
  zV: () => S,
  zw: () => l
}), require("./388685.js");
var Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js");
let a = 100,
  o = 1e3,
  s = 100,
  l = "Guild Events Modal",
  c = "-1";
var u = function(e) {
  return e[e.SCHEDULED = 1] = "SCHEDULED", e[e.ACTIVE = 2] = "ACTIVE", e[e.COMPLETED = 3] = "COMPLETED", e[e.CANCELED = 4] = "CANCELED", e
}({});
let d = new Set([3, 4]);
var f = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", e[e.VOICE = 2] = "VOICE", e[e.EXTERNAL = 3] = "EXTERNAL", e[e.PRIME_TIME = 4] = "PRIME_TIME", e
  }({}),
  p = function(e) {
    return e[e.EVENT_START = 1] = "EVENT_START", e
  }({}),
  _ = function(e) {
    return e[e.PUBLIC = 1] = "PUBLIC", e[e.GUILD_ONLY = 2] = "GUILD_ONLY", e
  }({});
let h = new Set([1, 4]),
  m = {
    1: Chunk981631.d4z.GUILD_STAGE_VOICE,
    2: Chunk981631.d4z.GUILD_VOICE
  },
  g = new Set([3]),
  E = new Set([1, 2]);
var b = function(e) {
  return e[e.EVENT_INFO = 0] = "EVENT_INFO", e[e.RSVP_LIST = 1] = "RSVP_LIST", e
}({});
let y = 100,
  O = 2 * Chunk70956.Z.Millis.DAY,
  v = 12 * Chunk70956.Z.Millis.HOUR,
  S = 4;
var I = function(e) {
    return e.NEW_EVENT = "Upcoming Event Notice", e.EVENT_STARTING_SOON = "Event Starting Soon Notice", e
  }({}),
  T = function(e) {
    return e[e.UNINTERESTED = 0] = "UNINTERESTED", e[e.INTERESTED = 1] = "INTERESTED", e
  }({})