/** Chunk was on web.js **/
/** chunk id: 292352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AG: () => l,
  MY: () => E,
  Mu: () => O,
  Of: () => s,
  QH: () => y,
  TX: () => T,
  Wz: () => C,
  YC: () => S,
  _6: () => v,
  _w: () => f,
  dG: () => b,
  f2: () => _,
  i0: () => c,
  iB: () => p,
  ip: () => d,
  ix: () => h,
  ne: () => g,
  tx: () => I,
  vH: () => m,
  zE: () => u
}), require("./388685.js");
var Chunk860911 = require("./860911.js"),
  Chunk70956 = require("./70956.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx");
let s = 30 * Chunk70956.Z.Millis.SECOND,
  l = 8,
  c = 3,
  u = 26,
  d = 64,
  f = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
  p = 4,
  _ = 5 * Chunk70956.Z.Millis.MINUTE,
  m = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  h = (0, Chunk860911.Ft)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
var g = function(e) {
    return e[e.PENDING = 1] = "PENDING", e[e.ACTIVE = 2] = "ACTIVE", e[e.INACTIVE = 3] = "INACTIVE", e[e.DECLINED = 4] = "DECLINED", e[e.EXPIRED = 5] = "EXPIRED", e
  }({}),
  E = function(e) {
    return e[e.USER_ADD = 1] = "USER_ADD", e[e.GUILD_ADD = 2] = "GUILD_ADD", e[e.USER_INTERACTION = 3] = "USER_INTERACTION", e[e.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", e[e.USER_CALLED = 5] = "USER_CALLED", e[e.TOTAL_VOICE_MINUTES = 6] = "TOTAL_VOICE_MINUTES", e[e.PURCHASES = 7] = "PURCHASES", e
  }({}),
  b = function(e) {
    return e.ACTIVITY = "ACTIVITY", e.REQUESTS = "REQUESTS", e.SETTINGS = "SETTINGS", e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", e
  }({}),
  y = function(e) {
    return e[e.ACTIVITY = 0] = "ACTIVITY", e[e.REQUESTS = 1] = "REQUESTS", e[e.SETTINGS = 2] = "SETTINGS", e[e.CONTENT_AND_SOCIAL = 3] = "CONTENT_AND_SOCIAL", e[e.DATA_AND_PRIVACY = 4] = "DATA_AND_PRIVACY", e
  }({}),
  O = function(e) {
    return e.SIDENAV = "SIDENAV", e.SETTINGS = "SETTINGS", e
  }({}),
  v = function(e) {
    return e[e.SIDENAV = 0] = "SIDENAV", e[e.SETTINGS = 1] = "SETTINGS", e
  }({}),
  S = function(e) {
    return e[e.TabChange = 0] = "TabChange", e[e.ShowQRCodeModal = 1] = "ShowQRCodeModal", e[e.RevealQRCode = 2] = "RevealQRCode", e[e.ScanQRCodeButton = 3] = "ScanQRCodeButton", e[e.ScanQRCode = 4] = "ScanQRCode", e[e.LoadMore = 5] = "LoadMore", e[e.SelectTeen = 6] = "SelectTeen", e[e.HideQRCode = 7] = "HideQRCode", e
  }({});
let I = new Map([
    [3, {
      priority: 100,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.kvTgWP),
      tooltipDescription: e => e ? o.intl.string(a.default.w4wmnb) : o.intl.string(a.default.foTzbd),
      sectionHeader: e => o.intl.formatToPlainString(a.default["4T3zWT"], {
        count: e
      }),
      sectionDescription: e => e ? o.intl.string(a.default.w4wmnb) : o.intl.string(a.default.foTzbd),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk517319.default.fLBUx7),
        yesterday: Chunk388032.intl.string(Chunk517319.default.cHHgxI),
        days: Chunk517319.default.qvKjp8
      })
    }],
    [5, {
      priority: 200,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.D7Sngz),
      tooltipDescription: e => e ? o.intl.string(a.default.aiAhnQ) : o.intl.string(a.default["4ufgdz"]),
      sectionHeader: e => o.intl.formatToPlainString(a.default["0GE4Ni"], {
        count: e
      }),
      sectionDescription: e => e ? o.intl.string(a.default.aiAhnQ) : o.intl.string(a.default["4ufgdz"]),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk517319.default.IHd5cZ),
        yesterday: Chunk388032.intl.string(Chunk517319.default.wOsfxv),
        days: Chunk517319.default.oCk8c4
      })
    }],
    [1, {
      priority: 300,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.kIcKAj),
      tooltipDescription: e => e ? o.intl.string(a.default.BkVb1X) : o.intl.string(a.default.mpHHfa),
      sectionHeader: e => o.intl.formatToPlainString(a.default["TEvo+H"], {
        count: e
      }),
      sectionDescription: e => e ? o.intl.string(a.default.BkVb1X) : o.intl.string(a.default.mpHHfa),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk517319.default.JUHIYZ),
        yesterday: Chunk388032.intl.string(Chunk517319.default.GiswUW),
        days: Chunk517319.default["fwQgE/"]
      })
    }],
    [2, {
      priority: 400,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.uav9Bh),
      tooltipDescription: e => e ? o.intl.string(a.default.LVNgTD) : o.intl.string(a.default.TA8GFt),
      sectionHeader: e => o.intl.formatToPlainString(a.default["7feG7T"], {
        count: e
      }),
      sectionDescription: e => e ? o.intl.string(a.default.LVNgTD) : o.intl.string(a.default.TA8GFt)
    }],
    [4, {
      priority: 500,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.CcrbCw),
      tooltipDescription: e => e ? o.intl.string(a.default.BLgIrk) : o.intl.string(a.default.sSJauZ),
      sectionHeader: e => o.intl.formatToPlainString(a.default.rcPInc, {
        count: e
      }),
      sectionDescription: e => e ? o.intl.string(a.default.BLgIrk) : o.intl.string(a.default.sSJauZ)
    }],
    [6, {
      priority: 175,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.eo4Fxh),
      tooltipDescription: () => Chunk388032.intl.string(Chunk517319.default["O/AElu"]),
      sectionHeader: e => o.intl.formatToPlainString(a.default.eGFWUd, {
        count: e
      }),
      sectionDescription: () => Chunk388032.intl.string(Chunk517319.default["O/AElu"])
    }],
    [7, {
      priority: 150,
      tooltipHeader: () => Chunk388032.intl.string(Chunk517319.default.NMYKsh),
      tooltipDescription: e => e ? o.intl.string(a.default.cqIdqZ) : o.intl.string(a.default["85PtWu"]),
      sectionHeader: e => o.intl.formatToPlainString(a.default.FPViWL, {
        amount: e
      }),
      sectionDescription: e => e ? o.intl.string(a.default.cqIdqZ) : o.intl.string(a.default["85PtWu"])
    }]
  ]),
  T = () => ({
    seconds: Chunk388032.intl.string(Chunk517319.default.CJdoee),
    minutes: Chunk517319.default.InzMn3,
    hours: Chunk517319.default.ErkYCI,
    yesterday: Chunk388032.intl.string(Chunk517319.default.GvfssA),
    days: Chunk517319.default.pWig18,
    date: Chunk517319.default.MP3khg
  }),
  C = () => ({
    seconds: Chunk388032.intl.string(Chunk517319.default.Bqsamd),
    minutes: Chunk517319.default.kX3wJg,
    hours: Chunk517319.default.J18GbG,
    yesterday: Chunk388032.intl.string(Chunk517319.default.Ln9zMn),
    days: Chunk517319.default.WRtySz,
    date: Chunk517319.default.Y3ZYtM
  })