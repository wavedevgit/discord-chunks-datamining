/** Chunk was on web.js **/
/** chunk id: 988794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BV: () => l,
  C1: () => b,
  GW: () => E,
  IJ: () => s,
  Oz: () => v,
  Ps: () => f,
  Qi: () => S,
  Tn: () => h,
  XG: () => u,
  aj: () => O,
  al: () => y,
  b8: () => p,
  dD: () => _,
  lV: () => d,
  nN: () => A,
  o_: () => g,
  om: () => m,
  t_: () => a,
  tq: () => c,
  vj: () => o,
  w0: () => I
}), require("./896048.js");
var Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");
let a = 100,
  s = 1e3,
  o = 100,
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
    1: Chunk652215.rbe.GUILD_STAGE_VOICE,
    2: Chunk652215.rbe.GUILD_VOICE
  },
  g = new Set([3]),
  E = new Set([1, 2]);
var y = function(e) {
  return e[e.EVENT_INFO = 0] = "EVENT_INFO", e[e.RSVP_LIST = 1] = "RSVP_LIST", e
}({});
let b = 100,
  O = 2 * Chunk927813.A.Millis.DAY,
  v = 12 * Chunk927813.A.Millis.HOUR,
  A = 4;
var I = function(e) {
    return e.NEW_EVENT = "Upcoming Event Notice", e.EVENT_STARTING_SOON = "Event Starting Soon Notice", e
  }({}),
  S = function(e) {
    return e[e.UNINTERESTED = 0] = "UNINTERESTED", e[e.INTERESTED = 1] = "INTERESTED", e
  }({})