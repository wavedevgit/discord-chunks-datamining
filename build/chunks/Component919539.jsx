/** Chunk was on web.js **/
/** chunk id: 919539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk915009 = require("./915009.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk88658 = require("./88658.js"),
  Chunk750832 = require("./750832.js"),
  Chunk976978 = require("./976978.js"),
  Chunk695346 = require("./695346.js"),
  Chunk639814 = require("./639814.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk922628 = require("./922628.jsx"),
  Chunk703115 = require("./703115.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk736530 = require("./736530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744038 = require("./744038.js");

function C(e) {
  let {
    ingress: t,
    guildId: n
  } = e, C = (0, h.c_)(), N = (0, _.q)(), P = m.h2.useSetting().includes(n), R = (0, l.LN)(), w = m.mX.useSetting(), D = m.zA.useSetting().includes(n), x = i.useCallback(e => {
    let r = (0, f.gl)();
    e ? r.delete(n) : r.add(n), m.zA.updateSetting(Array.from(r)), u.default.track(I.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: y.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);

  function L(e, t) {
    u.default.track(I.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }

  function j(e, t) {
    if (!e && (0, p.S)()) return void o.Z.showAgeVerificationGetStartedModal({
      entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS
    });
    t ? x(e) : M(!e)
  }

  function M(e) {
    let t = () => {
        m.mX.updateSetting(e), m.zA.updateSetting(e ? c.Z.getGuildIds() : []), L(e, true)
      },
      n = () => {
        m.mX.updateSetting(e), L(e, false)
      };
    (0, b.V)({
      header: T.intl.string(T.t.yAfu1p),
      body: T.intl.string(T.t.Ry2z74),
      confirmText: T.intl.string(T.t.gm1Vej),
      cancelText: T.intl.string(T.t.p89ACt),
      confirmButtonColor: a.zx.Colors.BRAND,
      onConfirm: n,
      onCancel: t
    })
  }
  return (0, r.jsx)(g.U, {
    setting: v.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
    scrollPosition: O.FY.MESSAGE_REQUESTS_V2,
    children: n === S.T ? (0, r.jsx)(E.ZP, {
      title: T.intl.string(T.t["3o2ojh"]),
      value: !N && !w,
      onChange: e => j(e, false),
      disabled: N || R,
      tooltipText: R ? T.intl.string(A.default["6Af/cw"]) : true,
      note: T.intl.format(T.t.wkm9a3, {
        helpdeskArticle: d.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS)
      })
    }) : (0, r.jsx)(E.ZP, {
      title: T.intl.string(T.t["3o2ojh"]),
      value: !P && !D,
      onChange: e => j(e, true),
      disabled: P,
      note: C ? T.intl.format(T.t.WpnWLc, {
        helpdeskArticle: d.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS)
      }) : T.intl.format(T.t.wkm9a3, {
        helpdeskArticle: d.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS)
      })
    })
  })
}

function N(e) {
  let {
    ingress: t = O.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, h.is)();
  return (0, r.jsx)(C, {
    ingress: t,
    guildId: null != n ? n : i
  })
}