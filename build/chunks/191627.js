/** Chunk was on 43549 **/
/** chunk id: 191627, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  EC: () => y,
  Ef: () => L,
  Gg: () => I,
  MH: () => U,
  NV: () => v,
  PH: () => p,
  QM: () => R,
  Y7: () => f,
  dI: () => Y,
  fD: () => S,
  h4: () => C,
  he: () => h,
  iN: () => b,
  jZ: () => N,
  kp: () => A,
  lu: () => F,
  ly: () => M,
  nz: () => g,
  qb: () => O,
  u9: () => D,
  zu: () => m
}), require("./896048.js");
var i, l, r, a, o, u, s, d, Chunk323125 = require("./323125.js"),
  Chunk927813 = require("./927813.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");
let S = 30 * Chunk927813.A.Millis.SECOND,
  f = 8,
  A = 3,
  C = 26,
  I = 64,
  N = (t, e) => "https://discord.com/feature/family-center/my-family/".concat(t, "/").concat(e),
  p = 4,
  g = 5 * Chunk927813.A.Millis.MINUTE,
  y = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  h = (0, Chunk323125.dN)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
var R = ((i = {})[i.PARENT = 1] = "PARENT", i[i.CHILD = 2] = "CHILD", i),
  L = ((l = {})[l.PENDING = 1] = "PENDING", l[l.ACTIVE = 2] = "ACTIVE", l[l.INACTIVE = 3] = "INACTIVE", l[l.DECLINED = 4] = "DECLINED", l[l.EXPIRED = 5] = "EXPIRED", l),
  v = ((r = {})[r.USER_ADD = 1] = "USER_ADD", r[r.GUILD_ADD = 2] = "GUILD_ADD", r[r.USER_INTERACTION = 3] = "USER_INTERACTION", r[r.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", r[r.USER_CALLED = 5] = "USER_CALLED", r[r.TOTAL_VOICE_MINUTES = 6] = "TOTAL_VOICE_MINUTES", r[r.PURCHASES = 7] = "PURCHASES", r),
  D = ((a = {}).ACTIVITY = "ACTIVITY", a.REQUESTS = "REQUESTS", a.SETTINGS = "SETTINGS", a.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", a.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", a),
  m = ((o = {})[o.ACTIVITY = 0] = "ACTIVITY", o[o.REQUESTS = 1] = "REQUESTS", o[o.SETTINGS = 2] = "SETTINGS", o[o.CONTENT_AND_SOCIAL = 3] = "CONTENT_AND_SOCIAL", o[o.DATA_AND_PRIVACY = 4] = "DATA_AND_PRIVACY", o),
  U = ((u = {}).SIDENAV = "SIDENAV", u.SETTINGS = "SETTINGS", u),
  b = ((s = {})[s.SIDENAV = 0] = "SIDENAV", s[s.SETTINGS = 1] = "SETTINGS", s),
  O = ((d = {})[d.TabChange = 0] = "TabChange", d[d.ShowQRCodeModal = 1] = "ShowQRCodeModal", d[d.RevealQRCode = 2] = "RevealQRCode", d[d.ScanQRCodeButton = 3] = "ScanQRCodeButton", d[d.ScanQRCode = 4] = "ScanQRCode", d[d.LoadMore = 5] = "LoadMore", d[d.SelectTeen = 6] = "SelectTeen", d[d.HideQRCode = 7] = "HideQRCode", d);
let M = new Map([
    [3, {
      priority: 100,
      tooltipHeader: () => T.intl.string(_.default.kvTgWP),
      tooltipDescription: t => t ? T.intl.string(_.default.w4wmnb) : T.intl.string(_.default.foTzbd),
      sectionHeader: t => T.intl.formatToPlainString(_.default["4T3zWT"], {
        count: t
      }),
      sectionDescription: t => t ? T.intl.string(_.default.w4wmnb) : T.intl.string(_.default.foTzbd),
      timestampFormatter: () => ({
        today: T.intl.string(_.default.fLBUx7),
        yesterday: T.intl.string(_.default.cHHgxI),
        days: _.default.qvKjp8
      })
    }],
    [5, {
      priority: 200,
      tooltipHeader: () => T.intl.string(_.default.D7Sngz),
      tooltipDescription: t => t ? T.intl.string(_.default.aiAhnQ) : T.intl.string(_.default["4ufgdz"]),
      sectionHeader: t => T.intl.formatToPlainString(_.default["0GE4Ni"], {
        count: t
      }),
      sectionDescription: t => t ? T.intl.string(_.default.aiAhnQ) : T.intl.string(_.default["4ufgdz"]),
      timestampFormatter: () => ({
        today: T.intl.string(_.default.IHd5cZ),
        yesterday: T.intl.string(_.default.wOsfxv),
        days: _.default.oCk8c4
      })
    }],
    [1, {
      priority: 300,
      tooltipHeader: () => T.intl.string(_.default.kIcKAj),
      tooltipDescription: t => t ? T.intl.string(_.default.BkVb1X) : T.intl.string(_.default.mpHHfa),
      sectionHeader: t => T.intl.formatToPlainString(_.default["TEvo+H"], {
        count: t
      }),
      sectionDescription: t => t ? T.intl.string(_.default.BkVb1X) : T.intl.string(_.default.mpHHfa),
      timestampFormatter: () => ({
        today: T.intl.string(_.default.JUHIYZ),
        yesterday: T.intl.string(_.default.GiswUW),
        days: _.default["fwQgE/"]
      })
    }],
    [2, {
      priority: 400,
      tooltipHeader: () => T.intl.string(_.default.uav9Bh),
      tooltipDescription: t => t ? T.intl.string(_.default.LVNgTD) : T.intl.string(_.default.TA8GFt),
      sectionHeader: t => T.intl.formatToPlainString(_.default["7feG7T"], {
        count: t
      }),
      sectionDescription: t => t ? T.intl.string(_.default.LVNgTD) : T.intl.string(_.default.TA8GFt)
    }],
    [4, {
      priority: 500,
      tooltipHeader: () => T.intl.string(_.default.CcrbCw),
      tooltipDescription: t => t ? T.intl.string(_.default.BLgIrk) : T.intl.string(_.default.sSJauZ),
      sectionHeader: t => T.intl.formatToPlainString(_.default.rcPInc, {
        count: t
      }),
      sectionDescription: t => t ? T.intl.string(_.default.BLgIrk) : T.intl.string(_.default.sSJauZ)
    }],
    [6, {
      priority: 175,
      tooltipHeader: () => T.intl.string(_.default.eo4Fxh),
      tooltipDescription: () => T.intl.string(_.default["O/AElu"]),
      sectionHeader: t => T.intl.formatToPlainString(_.default.eGFWUd, {
        count: t
      }),
      sectionDescription: () => T.intl.string(_.default["O/AElu"])
    }],
    [7, {
      priority: 150,
      tooltipHeader: () => T.intl.string(_.default.NMYKsh),
      tooltipDescription: t => t ? T.intl.string(_.default.cqIdqZ) : T.intl.string(_.default["85PtWu"]),
      sectionHeader: t => T.intl.formatToPlainString(_.default.FPViWL, {
        amount: t
      }),
      sectionDescription: t => t ? T.intl.string(_.default.cqIdqZ) : T.intl.string(_.default["85PtWu"])
    }]
  ]),
  F = () => ({
    seconds: T.intl.string(_.default.CJdoee),
    minutes: _.default.InzMn3,
    hours: _.default.ErkYCI,
    yesterday: T.intl.string(_.default.GvfssA),
    days: _.default.pWig18,
    date: _.default.MP3khg
  }),
  Y = () => ({
    seconds: T.intl.string(_.default.Bqsamd),
    minutes: _.default.kX3wJg,
    hours: _.default.J18GbG,
    yesterday: T.intl.string(_.default.Ln9zMn),
    days: _.default.WRtySz,
    date: _.default.Y3ZYtM
  })