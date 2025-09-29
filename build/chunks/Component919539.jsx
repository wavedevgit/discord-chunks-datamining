/** Chunk was on web.js **/
/** chunk id: 919539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
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
  Chunk388032 = require("./388032.jsx");

function S(e) {
  let {
    ingress: t,
    guildId: n
  } = e, S = (0, h.c_)(), A = (0, _.q)(), C = p.h2.useSetting().includes(n), N = p.mX.useSetting(), R = p.zA.useSetting().includes(n), P = i.useCallback(e => {
    let r = (0, d.gl)();
    e ? r.delete(n) : r.add(n), p.zA.updateSetting(Array.from(r)), c.default.track(I.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: b.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);

  function w(e, t) {
    c.default.track(I.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }

  function D(e, t) {
    if ((0, f.S)()) return void o.Z.showAgeVerificationGetStartedModal({
      entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS
    });
    t ? P(e) : L(!e)
  }

  function L(e) {
    let t = () => {
        p.mX.updateSetting(e), p.zA.updateSetting(e ? l.Z.getGuildIds() : []), w(e, true)
      },
      n = () => {
        p.mX.updateSetting(e), w(e, false)
      };
    (0, E.V)({
      header: T.intl.string(T.t.yAfu1t),
      body: T.intl.string(T.t["Ry2z7+"]),
      confirmText: T.intl.string(T.t.gm1Ven),
      cancelText: T.intl.string(T.t.p89ACg),
      confirmButtonColor: a.zx.Colors.BRAND,
      onConfirm: n,
      onCancel: t
    })
  }
  return (0, r.jsx)(m.U, {
    setting: O.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
    scrollPosition: y.FY.MESSAGE_REQUESTS_V2,
    children: n === v.T ? (0, r.jsx)(g.Z, {
      title: T.intl.string(T.t["3o2ojo"]),
      value: !A && !N,
      onChange: e => D(e, false),
      disabled: A,
      note: T.intl.format(T.t.wkm9a2, {
        helpdeskArticle: u.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS)
      })
    }) : (0, r.jsx)(g.Z, {
      title: T.intl.string(T.t["3o2ojo"]),
      value: !R,
      onChange: e => D(e, true),
      disabled: C,
      note: S ? T.intl.format(T.t.WpnWLS, {
        helpdeskArticle: u.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS)
      }) : T.intl.format(T.t.wkm9a2, {
        helpdeskArticle: u.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS)
      })
    })
  })
}

function A(e) {
  let {
    ingress: t = y.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, h.is)();
  return (0, r.jsx)(S, {
    ingress: t,
    guildId: null != n ? n : i
  })
}