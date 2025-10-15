/** Chunk was on web.js **/
/** chunk id: 471445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KS: () => _,
  Th: () => p,
  bT: () => f
});
var Chunk481060 = require("./481060.js"),
  Chunk281956 = require("./281956.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk447003 = require("./447003.js"),
  Chunk176505 = require("./176505.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n, r) {
  if (null == e) return null;
  if (e.id === (null == t ? true : t.rulesChannelId)) return d.intl.string(d.t["/7EhaW"]);
  let i = e.isNSFW();
  switch (e.type) {
    case u.d4z.GUILD_TEXT:
      if (null != e.linkedLobby) return d.intl.string(d.t.Lt3PAA);
      if (r) return d.intl.string(d.t.LKpYbm);
      if (i) return d.intl.string(d.t.vvASTU);
      if ((0, l.Z)(e)) return d.intl.string(d.t.jQ1plp);
      return d.intl.string(d.t.t1yj0N);
    case u.d4z.GUILD_FORUM:
      let a = e.isMediaChannel();
      if (i) return a ? d.intl.string(d.t["pZ/fYW"]) : d.intl.string(d.t.ibmpPj);
      if ((0, l.Z)(e)) return a ? d.intl.string(d.t.gfVCfH) : d.intl.string(d.t.UbLM3N);
      return a ? d.intl.string(d.t.seKITE) : d.intl.string(d.t["0sDXdn"]);
    case u.d4z.GUILD_MEDIA:
      if (i) return d.intl.string(d.t["pZ/fYW"]);
      if ((0, l.Z)(e)) return d.intl.string(d.t.gfVCfH);
      return d.intl.string(d.t.seKITE);
    case u.d4z.GUILD_STAGE_VOICE:
      if (n) return d.intl.string(d.t.ZjZB3t);
      if ((0, l.Z)(e)) return d.intl.string(d.t["7pRuCQ"]);
      return d.intl.string(d.t.eJFSiI);
    case u.d4z.GUILD_VOICE:
      if (n) return d.intl.string(d.t.xY8Wtr);
      if ((0, l.Z)(e)) return d.intl.string(d.t.qaY8Dg);
      return d.intl.string(d.t["0kBmo6"]);
    case u.d4z.GUILD_ANNOUNCEMENT:
      if (i) return d.intl.string(d.t.eRc6o6);
      if ((0, l.Z)(e)) return d.intl.string(d.t.EHLQws);
      return d.intl.string(d.t.GtDRi4);
    case u.d4z.GUILD_STORE:
      return d.intl.string(d.t.Ea4NDA);
    case u.d4z.DM:
      return d.intl.string(d.t.jN2DfX);
    case u.d4z.GROUP_DM:
      return d.intl.string(d.t["e5y+go"]);
    case u.d4z.GUILD_DIRECTORY:
      return d.intl.string(d.t.IzZTIS);
    case u.d4z.PUBLIC_THREAD:
      return d.intl.string(d.t["7Xm5QE"]);
    case u.d4z.PRIVATE_THREAD:
      return d.intl.string(d.t.F1zyvb);
    default:
      return null
  }
}

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      locked: d = false,
      video: f = false,
      stream: _ = false,
      hasActiveThreads: p = false,
      textFocused: h = false
    } = n;
  if (null == e) return null;
  null == t && (t = o.Z.getGuild(e.getGuildId()));
  let m = (0, i.n)(null == t ? true : t.id, [o.Z, s.default, a.ZP]);
  if (e.isModeratorReportChannel()) return r.U65;
  if ((null == e ? true : e.id) === (null == t ? true : t.rulesChannelId)) return r.snC;
  let g = e.isNSFW();
  switch (e.type) {
    case u.d4z.GUILD_ANNOUNCEMENT:
      if (p)
        if (g) return r.ToS;
        else if ((0, l.Z)(e)) return r.Fv2;
      else return r.MqZ;
      if (g) return r.ToS;
      if ((0, l.Z)(e)) return r.Fv2;
      return r.MqZ;
    case u.d4z.GUILD_STORE:
      return r.lO_;
    case u.d4z.DM:
    case u.d4z.GROUP_DM:
      return r.lOy;
    case u.d4z.PRIVATE_THREAD:
      return r.qtY;
    case u.d4z.ANNOUNCEMENT_THREAD:
    case u.d4z.PUBLIC_THREAD:
      if (g) return r.Xn;
      if (e.isForumPost()) return r.kBi;
      return r.or_;
    case u.d4z.GUILD_TEXT:
      if (null != e.linkedLobby) return r.rbH;
      if (g) return r.z0B;
      if ((0, l.Z)(e)) return r.W4G;
      return r.VL1;
    case u.d4z.GUILD_FORUM:
      let E = e.isMediaChannel();
      if (g) return E ? r.fFY : r.Mec;
      if ((0, l.Z)(e)) return E ? r.D7T : r.BUe;
      return E ? r.XBm : r.Mmi;
    case u.d4z.GUILD_MEDIA:
      if (g) return r.fFY;
      if ((0, l.Z)(e)) return r.D7T;
      return r.XBm;
    case u.d4z.GUILD_STAGE_VOICE:
      if (m) return (0, l.Z)(e) ? r.mBM : r.pki;
      if (d) return r.mBM;
      if ((0, l.Z)(e)) return r.pki;
      else return r.ewx;
    case u.d4z.GUILD_VOICE:
      if (h) return r.kBi;
      if (g) return r.BVY;
      if (_) return r.hGI;
      if (m)
        if ((0, l.Z)(e)) return r.mBM;
        else return f ? r.TLW : r.gjC;
      if (d) return r.mBM;
      if ((0, l.Z)(e)) return f ? r.TLW : r.gjC;
      else return f ? r.Odl : r.gj8;
    case u.d4z.GUILD_DIRECTORY:
      return r.aVH;
    case u.d4z.GUILD_CATEGORY:
      return r.ROc;
    default:
      if (c.EC.has(e.id)) {
        if (e.id === c.HY.GUILD_HOME || e.id === c.HY.SERVER_GUIDE) return r.Vy8;
        else if (e.id === c.HY.CHANNEL_BROWSER || e.id === c.HY.CUSTOMIZE_COMMUNITY) return r.H$4
      }
      return null
  }
}

function p(e) {
  switch (e) {
    case u.d4z.GUILD_ANNOUNCEMENT:
      return r.MqZ;
    case u.d4z.GUILD_STORE:
      return r.lO_;
    case u.d4z.DM:
    case u.d4z.GROUP_DM:
      return r.lOy;
    case u.d4z.PRIVATE_THREAD:
      return r.qtY;
    case u.d4z.ANNOUNCEMENT_THREAD:
    case u.d4z.PUBLIC_THREAD:
      return r.or_;
    case u.d4z.GUILD_TEXT:
    case u.d4z.GUILD_FORUM:
    case u.d4z.GUILD_MEDIA:
      return r.VL1;
    case u.d4z.GUILD_STAGE_VOICE:
      return r.ewx;
    case u.d4z.GUILD_VOICE:
      return r.gj8;
    case u.d4z.GUILD_CATEGORY:
      return r.ROc;
    default:
      return null
  }
}