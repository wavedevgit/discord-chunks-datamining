/** Chunk was on 49508 **/
/** chunk id: 292352, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  AG: () => f,
  MY: () => h,
  Mu: () => b,
  Of: () => T,
  QH: () => M,
  TX: () => m,
  Wz: () => v,
  YC: () => U,
  _6: () => D,
  _w: () => A,
  dG: () => R,
  f2: () => y,
  i0: () => S,
  iB: () => g,
  ip: () => C,
  ix: () => N,
  ne: () => L,
  tx: () => Y,
  vH: () => p,
  zE: () => I
}), require("./388685.js");
var i, r, l, a, d, u, s, Chunk860911 = require("./860911.js"),
  Chunk70956 = require("./70956.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.js");
let T = 30 * Chunk70956.Z.Millis.SECOND,
  f = 8,
  S = 3,
  I = 26,
  C = 64,
  A = (t, e) => "https://discord.com/feature/family-center/my-family/".concat(t, "/").concat(e),
  g = 4,
  y = 5 * Chunk70956.Z.Millis.MINUTE,
  p = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  N = (0, Chunk860911.Ft)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
var L = ((i = {})[i.PENDING = 1] = "PENDING", i[i.ACTIVE = 2] = "ACTIVE", i[i.INACTIVE = 3] = "INACTIVE", i[i.DECLINED = 4] = "DECLINED", i[i.EXPIRED = 5] = "EXPIRED", i),
  h = ((r = {})[r.USER_ADD = 1] = "USER_ADD", r[r.GUILD_ADD = 2] = "GUILD_ADD", r[r.USER_INTERACTION = 3] = "USER_INTERACTION", r[r.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", r[r.USER_CALLED = 5] = "USER_CALLED", r),
  R = ((l = {}).ACTIVITY = "ACTIVITY", l.REQUESTS = "REQUESTS", l.SETTINGS = "SETTINGS", l),
  M = ((a = {})[a.ACTIVITY = 0] = "ACTIVITY", a[a.REQUESTS = 1] = "REQUESTS", a[a.SETTINGS = 2] = "SETTINGS", a),
  b = ((d = {}).SIDENAV = "SIDENAV", d.SETTINGS = "SETTINGS", d),
  D = ((u = {})[u.SIDENAV = 0] = "SIDENAV", u[u.SETTINGS = 1] = "SETTINGS", u),
  U = ((s = {})[s.TabChange = 0] = "TabChange", s[s.ShowQRCodeModal = 1] = "ShowQRCodeModal", s[s.RevealQRCode = 2] = "RevealQRCode", s[s.ScanQRCodeButton = 3] = "ScanQRCodeButton", s[s.ScanQRCode = 4] = "ScanQRCode", s[s.LoadMore = 5] = "LoadMore", s[s.SelectTeen = 6] = "SelectTeen", s[s.HideQRCode = 7] = "HideQRCode", s);
let Y = new Map([
  [3, {
    tooltipHeader: () => Chunk388032.intl.string(Chunk916723.default.kvTgWF),
    tooltipDescription: t => t ? _.intl.string(c.default.cY19ub) : _.intl.string(c.default["K5r+sL"]),
    sectionHeader: t => _.intl.formatToPlainString(c.default["4T3zWV"], {
      count: t
    }),
    sectionDescription: t => t ? _.intl.string(c.default.cY19ub) : _.intl.string(c.default["K5r+sL"]),
    timestampFormatter: () => ({
      today: Chunk388032.intl.string(Chunk916723.default.fLBUx8),
      yesterday: Chunk388032.intl.string(Chunk916723.default.cHHgxM),
      days: Chunk916723.default.qvKjp6
    })
  }],
  [5, {
    tooltipHeader: () => Chunk388032.intl.string(Chunk916723.default.D7Sng4),
    tooltipDescription: t => t ? _.intl.string(c.default["w7j/Li"]) : _.intl.string(c.default.SCIaWF),
    sectionHeader: t => _.intl.formatToPlainString(c.default["0GE4Nj"], {
      count: t
    }),
    sectionDescription: t => t ? _.intl.string(c.default["w7j/Li"]) : _.intl.string(c.default.SCIaWF),
    timestampFormatter: () => ({
      today: Chunk388032.intl.string(Chunk916723.default.IHd5cX),
      yesterday: Chunk388032.intl.string(Chunk916723.default.wOsfxs),
      days: Chunk916723.default.oCk8c3
    })
  }],
  [1, {
    tooltipHeader: () => Chunk388032.intl.string(Chunk916723.default.kIcKAg),
    tooltipDescription: t => t ? _.intl.string(c.default.HvsFJS) : _.intl.string(c.default["1/QpPz"]),
    sectionHeader: t => _.intl.formatToPlainString(c.default["TEvo+P"], {
      count: t
    }),
    sectionDescription: t => t ? _.intl.string(c.default.HvsFJS) : _.intl.string(c.default["1/QpPz"]),
    timestampFormatter: () => ({
      today: Chunk388032.intl.string(Chunk916723.default.JUHIYW),
      yesterday: Chunk388032.intl.string(Chunk916723.default.GiswUV),
      days: Chunk916723.default.fwQgEx
    })
  }],
  [2, {
    tooltipHeader: () => Chunk388032.intl.string(Chunk916723.default["NulX9/"]),
    tooltipDescription: t => t ? _.intl.string(c.default.Lmz9Vl) : _.intl.string(c.default.MTFxYW),
    sectionHeader: t => _.intl.formatToPlainString(c.default["7feG7e"], {
      count: t
    }),
    sectionDescription: t => t ? _.intl.string(c.default.Lmz9Vl) : _.intl.string(c.default.MTFxYW)
  }],
  [4, {
    tooltipHeader: () => Chunk388032.intl.string(Chunk916723.default.CcrbCw),
    tooltipDescription: O,
    sectionHeader: t => _.intl.formatToPlainString(c.default.rcPInZ, {
      count: t
    }),
    sectionDescription: O
  }]
]);

function O(t, e) {
  return t ? e ? _.intl.string(c.default.c0NgBQ) : _.intl.string(c.default.dcvNX1) : e ? _.intl.string(c.default.DLVyFx) : _.intl.string(c.default["823ugY"])
}
let m = () => ({
    seconds: Chunk388032.intl.string(Chunk916723.default.CJdoeX),
    minutes: Chunk916723.default.InzMn5,
    hours: Chunk916723.default.ErkYCA,
    yesterday: Chunk388032.intl.string(Chunk916723.default.GvfssL),
    days: Chunk916723.default.pWig19,
    date: Chunk916723.default.MP3kho
  }),
  v = () => ({
    seconds: Chunk388032.intl.string(Chunk916723.default.BqsamZ),
    minutes: Chunk916723.default.kX3wJi,
    hours: Chunk916723.default.J18GbG,
    yesterday: Chunk388032.intl.string(Chunk916723.default.Ln9zMj),
    days: Chunk916723.default.WRtyS0,
    date: Chunk916723.default.Y3ZYtL
  })