/** Chunk was on web.js **/
/** chunk id: 292352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AG: () => l,
  MY: () => E,
  Mu: () => O,
  Of: () => s,
  QH: () => y,
  TX: () => C,
  U: () => S,
  Wz: () => N,
  YC: () => I,
  _6: () => v,
  _w: () => f,
  dG: () => b,
  f2: () => p,
  i0: () => c,
  iB: () => _,
  ip: () => d,
  ix: () => m,
  ne: () => g,
  tx: () => T,
  vH: () => h,
  zE: () => u
}), require("./388685.js");
var Chunk860911 = require("./860911.js"),
  Chunk70956 = require("./70956.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx");
let s = 30 * Chunk70956.Z.Millis.SECOND,
  l = 8,
  c = 3,
  u = 26,
  d = 64,
  f = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
  _ = 4,
  p = 5 * Chunk70956.Z.Millis.MINUTE,
  h = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  m = (0, Chunk860911.Ft)(Object.freeze({
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
  I = function(e) {
    return e[e.TabChange = 0] = "TabChange", e[e.ShowQRCodeModal = 1] = "ShowQRCodeModal", e[e.RevealQRCode = 2] = "RevealQRCode", e[e.ScanQRCodeButton = 3] = "ScanQRCodeButton", e[e.ScanQRCode = 4] = "ScanQRCode", e[e.LoadMore = 5] = "LoadMore", e[e.SelectTeen = 6] = "SelectTeen", e[e.HideQRCode = 7] = "HideQRCode", e
  }({});
let T = new Map([
    [3, {
      priority: 100,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default.kvTgWF),
      tooltipDescription: e => e ? a.intl.string(o.default.cY19ub) : a.intl.string(o.default["K5r+sL"]),
      sectionHeader: e => a.intl.formatToPlainString(o.default["4T3zWV"], {
        count: e
      }),
      sectionDescription: e => e ? a.intl.string(o.default.cY19ub) : a.intl.string(o.default["K5r+sL"]),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk345909.default.fLBUx8),
        yesterday: Chunk388032.intl.string(Chunk345909.default.cHHgxM),
        days: Chunk345909.default.qvKjp6
      })
    }],
    [5, {
      priority: 200,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default.D7Sng4),
      tooltipDescription: e => e ? a.intl.string(o.default["w7j/Li"]) : a.intl.string(o.default.SCIaWF),
      sectionHeader: e => a.intl.formatToPlainString(o.default["0GE4Nj"], {
        count: e
      }),
      sectionDescription: e => e ? a.intl.string(o.default["w7j/Li"]) : a.intl.string(o.default.SCIaWF),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk345909.default.IHd5cX),
        yesterday: Chunk388032.intl.string(Chunk345909.default.wOsfxs),
        days: Chunk345909.default.oCk8c3
      })
    }],
    [1, {
      priority: 300,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default.kIcKAg),
      tooltipDescription: e => e ? a.intl.string(o.default.HvsFJS) : a.intl.string(o.default["1/QpPz"]),
      sectionHeader: e => a.intl.formatToPlainString(o.default["TEvo+P"], {
        count: e
      }),
      sectionDescription: e => e ? a.intl.string(o.default.HvsFJS) : a.intl.string(o.default["1/QpPz"]),
      timestampFormatter: () => ({
        today: Chunk388032.intl.string(Chunk345909.default.JUHIYW),
        yesterday: Chunk388032.intl.string(Chunk345909.default.GiswUV),
        days: Chunk345909.default.fwQgEx
      })
    }],
    [2, {
      priority: 400,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default["NulX9/"]),
      tooltipDescription: e => e ? a.intl.string(o.default.Lmz9Vl) : a.intl.string(o.default.MTFxYW),
      sectionHeader: e => a.intl.formatToPlainString(o.default["7feG7e"], {
        count: e
      }),
      sectionDescription: e => e ? a.intl.string(o.default.Lmz9Vl) : a.intl.string(o.default.MTFxYW)
    }],
    [4, {
      priority: 500,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default.CcrbCw),
      tooltipDescription: A,
      sectionHeader: e => a.intl.formatToPlainString(o.default.rcPInZ, {
        count: e
      }),
      sectionDescription: A
    }]
  ]),
  S = new Map([
    [6, {
      priority: 175,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default.eo4Fxs),
      tooltipDescription: e => e ? a.intl.string(o.default["Mx+/eX"]) : a.intl.string(o.default.n3otj4),
      sectionHeader: e => a.intl.formatToPlainString(o.default.eGFWUV, {
        count: e
      }),
      sectionDescription: e => e ? a.intl.string(o.default["Mx+/eX"]) : a.intl.string(o.default.n3otj4)
    }],
    [7, {
      priority: 150,
      tooltipHeader: () => Chunk388032.intl.string(Chunk345909.default.aOLJDw),
      tooltipDescription: e => e ? a.intl.string(o.default.c9BHsr) : a.intl.string(o.default["85PtWl"]),
      sectionHeader: e => a.intl.formatToPlainString(o.default.SIgpS0, {
        count: e
      }),
      sectionDescription: e => e ? a.intl.string(o.default.c9BHsr) : a.intl.string(o.default["85PtWl"])
    }]
  ]);

function A(e, t) {
  return e ? t ? a.intl.string(o.default.c0NgBQ) : a.intl.string(o.default.dcvNX1) : t ? a.intl.string(o.default.DLVyFx) : a.intl.string(o.default["823ugY"])
}
let C = () => ({
    seconds: Chunk388032.intl.string(Chunk345909.default.CJdoeX),
    minutes: Chunk345909.default.InzMn5,
    hours: Chunk345909.default.ErkYCA,
    yesterday: Chunk388032.intl.string(Chunk345909.default.GvfssL),
    days: Chunk345909.default.pWig19,
    date: Chunk345909.default.MP3kho
  }),
  N = () => ({
    seconds: Chunk388032.intl.string(Chunk345909.default.BqsamZ),
    minutes: Chunk345909.default.kX3wJi,
    hours: Chunk345909.default.J18GbG,
    yesterday: Chunk388032.intl.string(Chunk345909.default.Ln9zMj),
    days: Chunk345909.default.WRtyS0,
    date: Chunk345909.default.Y3ZYtL
  })