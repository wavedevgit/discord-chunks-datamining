/** Chunk was on 49049 **/
/** chunk id: 603617, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  INVITE_OPTIONS_100_TIMES: () => a,
  INVITE_OPTIONS_10_TIMES: () => O,
  INVITE_OPTIONS_12_HOURS: () => P,
  INVITE_OPTIONS_1_DAY: () => f,
  INVITE_OPTIONS_1_HOUR: () => S,
  INVITE_OPTIONS_25_TIMES: () => _,
  INVITE_OPTIONS_30_MINUTES: () => N,
  INVITE_OPTIONS_50_TIMES: () => T,
  INVITE_OPTIONS_5_TIMES: () => u,
  INVITE_OPTIONS_6_HOURS: () => o,
  INVITE_OPTIONS_7_DAYS: () => g,
  INVITE_OPTIONS_8_HOURS: () => E,
  INVITE_OPTIONS_FOREVER: () => m,
  INVITE_OPTIONS_ONCE: () => l,
  INVITE_OPTIONS_UNLIMITED: () => r,
  MAX_AGE_OPTIONS: () => d,
  MAX_USES_OPTIONS: () => s
});
var Chunk388032 = require("./388032.jsx");

function i(t, e) {
  return {
    value: t,
    get label() {
      return e()
    }
  }
}
let r = i(0, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 0
  })),
  l = i(1, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 1
  })),
  u = i(5, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 5
  })),
  O = i(10, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 10
  })),
  _ = i(25, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 25
  })),
  T = i(50, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 50
  })),
  a = i(100, () => Chunk388032.intl.formatToPlainString(Chunk388032.t["r/IcuL"], {
    maxUses: 100
  })),
  s = [r, l, u, O, _, T, a],
  N = i(1800, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.iXLF9f, {
    minutes: 30
  })),
  S = i(3600, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.xCjYxM, {
    hours: 1
  })),
  o = i(21600, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.xCjYxM, {
    hours: 6
  })),
  E = i(28800, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.xCjYxM, {
    hours: 8
  })),
  P = i(43200, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.xCjYxM, {
    hours: 12
  })),
  f = i(86400, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.k2UNz8, {
    days: 1
  })),
  g = i(604800, () => Chunk388032.intl.formatToPlainString(Chunk388032.t.k2UNz8, {
    days: 7
  })),
  m = i(0, () => Chunk388032.intl.string(Chunk388032.t.PqEzn5)),
  d = [N, S, o, P, f, g, m]