/** Chunk was on web.js **/
/** chunk id: 292352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AG: () => c,
  MY: () => b,
  Mu: () => v,
  Of: () => l,
  QH: () => O,
  TX: () => A,
  U: () => C,
  Wz: () => N,
  YC: () => I,
  _6: () => S,
  _w: () => p,
  dG: () => y,
  f2: () => m,
  i0: () => u,
  iB: () => _,
  ip: () => f,
  ix: () => g,
  ne: () => E,
  tx: () => T,
  vH: () => h,
  zE: () => d
}), require("./388685.js");
var Chunk860911 = require("./860911.js"),
  Chunk70956 = require("./70956.js"),
  Chunk546791 = require("./546791.js"),
  Chunk435757 = require("./435757.js"),
  Chunk388032 = require("./388032.jsx");
let l = 30 * Chunk70956.Z.Millis.SECOND,
  c = 8,
  u = 3,
  d = 26,
  f = 64,
  p = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
  _ = 4,
  m = 5 * Chunk70956.Z.Millis.MINUTE,
  h = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  g = (0, Chunk860911.Ft)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
var E = function(e) {
    return e[e.PENDING = 1] = "PENDING", e[e.ACTIVE = 2] = "ACTIVE", e[e.INACTIVE = 3] = "INACTIVE", e[e.DECLINED = 4] = "DECLINED", e[e.EXPIRED = 5] = "EXPIRED", e
  }({}),
  b = function(e) {
    return e[e.USER_ADD = 1] = "USER_ADD", e[e.GUILD_ADD = 2] = "GUILD_ADD", e[e.USER_INTERACTION = 3] = "USER_INTERACTION", e[e.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", e[e.USER_CALLED = 5] = "USER_CALLED", e[e.TOTAL_VOICE_MINUTES = 6] = "TOTAL_VOICE_MINUTES", e[e.PURCHASES = 7] = "PURCHASES", e
  }({}),
  y = function(e) {
    return e.ACTIVITY = "ACTIVITY", e.REQUESTS = "REQUESTS", e.SETTINGS = "SETTINGS", e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", e
  }({}),
  O = function(e) {
    return e[e.ACTIVITY = 0] = "ACTIVITY", e[e.REQUESTS = 1] = "REQUESTS", e[e.SETTINGS = 2] = "SETTINGS", e[e.CONTENT_AND_SOCIAL = 3] = "CONTENT_AND_SOCIAL", e[e.DATA_AND_PRIVACY = 4] = "DATA_AND_PRIVACY", e
  }({}),
  v = function(e) {
    return e.SIDENAV = "SIDENAV", e.SETTINGS = "SETTINGS", e
  }({}),
  S = function(e) {
    return e[e.SIDENAV = 0] = "SIDENAV", e[e.SETTINGS = 1] = "SETTINGS", e
  }({}),
  I = function(e) {
    return e[e.TabChange = 0] = "TabChange", e[e.ShowQRCodeModal = 1] = "ShowQRCodeModal", e[e.RevealQRCode = 2] = "RevealQRCode", e[e.ScanQRCodeButton = 3] = "ScanQRCodeButton", e[e.ScanQRCode = 4] = "ScanQRCode", e[e.LoadMore = 5] = "LoadMore", e[e.SelectTeen = 6] = "SelectTeen", e[e.HideQRCode = 7] = "HideQRCode", e
  }({});
let T = new Map([
    [3, {
      priority: 100,
      tooltipHeader: () => Chunk388032.intl.string(Chunk435757.default.kvTgWP),
      tooltipDescription: e => e ? (0, a.lW)(s.intl.string(o.default.cY19uR), s.intl.string(o.default.w4wmnb)) : (0, a.lW)(s.intl.string(o.default["K5r+sN"]), s.intl.string(o.default.foTzbd)),
      sectionHeader: e => s.intl.formatToPlainString(o.default["4T3zWT"], {
        count: e
      }),
      sectionDescription: e => e ? (0, a.lW)(s.intl.string(o.default.cY19uR), s.intl.string(o.default.w4wmnb)) : (0, a.lW)(s.intl.string(o.default["K5r+sN"]), s.intl.string(o.default.foTzbd)),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk435757.default.fLBUx7),
        yesterday: Chunk388032.intl.string(Chunk435757.default.cHHgxI),
        days: Chunk435757.default.qvKjp8
      })
    }],
    [5, {
      priority: 200,
      tooltipHeader: () => Chunk388032.intl.string(Chunk435757.default.D7Sngz),
      tooltipDescription: e => e ? (0, a.lW)(s.intl.string(o.default["w7j/Lt"]), s.intl.string(o.default.aiAhnQ)) : (0, a.lW)(s.intl.string(o.default.SCIaWK), s.intl.string(o.default["4ufgdz"])),
      sectionHeader: e => s.intl.formatToPlainString(o.default["0GE4Ni"], {
        count: e
      }),
      sectionDescription: e => e ? (0, a.lW)(s.intl.string(o.default["w7j/Lt"]), s.intl.string(o.default.aiAhnQ)) : (0, a.lW)(s.intl.string(o.default.SCIaWK), s.intl.string(o.default["4ufgdz"])),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk435757.default.IHd5cZ),
        yesterday: Chunk388032.intl.string(Chunk435757.default.wOsfxv),
        days: Chunk435757.default.oCk8c4
      })
    }],
    [1, {
      priority: 300,
      tooltipHeader: () => Chunk388032.intl.string(Chunk435757.default.kIcKAj),
      tooltipDescription: e => e ? (0, a.lW)(s.intl.string(o.default.HvsFJf), s.intl.string(o.default.BkVb1X)) : (0, a.lW)(s.intl.string(o.default["1/QpPy"]), s.intl.string(o.default.mpHHfa)),
      sectionHeader: e => s.intl.formatToPlainString(o.default["TEvo+H"], {
        count: e
      }),
      sectionDescription: e => e ? (0, a.lW)(s.intl.string(o.default.HvsFJf), s.intl.string(o.default.BkVb1X)) : (0, a.lW)(s.intl.string(o.default["1/QpPy"]), s.intl.string(o.default.mpHHfa)),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk435757.default.JUHIYZ),
        yesterday: Chunk388032.intl.string(Chunk435757.default.GiswUW),
        days: Chunk435757.default["fwQgE/"]
      })
    }],
    [2, {
      priority: 400,
      tooltipHeader: () => (0, Chunk546791.lW)(Chunk388032.intl.string(Chunk435757.default["NulX9+"]), Chunk388032.intl.string(Chunk435757.default.uav9Bh)),
      tooltipDescription: e => e ? (0, a.lW)(s.intl.string(o.default.Lmz9Vh), s.intl.string(o.default.LVNgTD)) : (0, a.lW)(s.intl.string(o.default.MTFxYc), s.intl.string(o.default.TA8GFt)),
      sectionHeader: e => s.intl.formatToPlainString(o.default["7feG7T"], {
        count: e
      }),
      sectionDescription: e => e ? (0, a.lW)(s.intl.string(o.default.Lmz9Vh), s.intl.string(o.default.LVNgTD)) : (0, a.lW)(s.intl.string(o.default.MTFxYc), s.intl.string(o.default.TA8GFt))
    }],
    [4, {
      priority: 500,
      tooltipHeader: () => Chunk388032.intl.string(Chunk435757.default.CcrbCw),
      tooltipDescription: e => e ? (0, a.lW)(s.intl.string(o.default.c0NgBX), s.intl.string(o.default.BLgIrk)) : (0, a.lW)(s.intl.string(o.default.DLVyFw), s.intl.string(o.default.sSJauZ)),
      sectionHeader: e => s.intl.formatToPlainString(o.default.rcPInc, {
        count: e
      }),
      sectionDescription: e => e ? (0, a.lW)(s.intl.string(o.default.c0NgBX), s.intl.string(o.default.BLgIrk)) : (0, a.lW)(s.intl.string(o.default.DLVyFw), s.intl.string(o.default.sSJauZ))
    }]
  ]),
  C = new Map([
    [6, {
      priority: 175,
      tooltipHeader: () => Chunk388032.intl.string(Chunk435757.default.eo4Fxh),
      tooltipDescription: () => Chunk388032.intl.string(Chunk435757.default["O/AElu"]),
      sectionHeader: e => s.intl.formatToPlainString(o.default.eGFWUd, {
        count: e
      }),
      sectionDescription: () => Chunk388032.intl.string(Chunk435757.default["O/AElu"])
    }],
    [7, {
      priority: 150,
      tooltipHeader: () => Chunk388032.intl.string(Chunk435757.default.NMYKsh),
      tooltipDescription: e => e ? s.intl.string(o.default.cqIdqZ) : s.intl.string(o.default["85PtWu"]),
      sectionHeader: e => s.intl.formatToPlainString(o.default.FPViWL, {
        amount: e
      }),
      sectionDescription: e => e ? s.intl.string(o.default.cqIdqZ) : s.intl.string(o.default["85PtWu"])
    }]
  ]),
  A = () => ({
    seconds: Chunk388032.intl.string(Chunk435757.default.CJdoee),
    minutes: Chunk435757.default.InzMn3,
    hours: Chunk435757.default.ErkYCI,
    yesterday: Chunk388032.intl.string(Chunk435757.default.GvfssA),
    days: Chunk435757.default.pWig18,
    date: Chunk435757.default.MP3khg
  }),
  N = () => ({
    seconds: Chunk388032.intl.string(Chunk435757.default.Bqsamd),
    minutes: Chunk435757.default.kX3wJg,
    hours: Chunk435757.default.J18GbG,
    yesterday: Chunk388032.intl.string(Chunk435757.default.Ln9zMn),
    days: Chunk435757.default.WRtySz,
    date: Chunk435757.default.Y3ZYtM
  })