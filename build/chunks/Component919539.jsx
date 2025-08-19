/** Chunk was on 66181 **/
/** chunk id: 919539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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
  } = e, S = (0, h.c_)(), T = (0, p.q)(), N = g.h2.useSetting().includes(n), I = g.mX.useSetting(), y = g.zA.useSetting().includes(n), A = r.useCallback(e => {
    let i = (0, u.gl)();
    e ? i.delete(n) : i.add(n), g.zA.updateSetting(Array.from(i)), c.default.track(O.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: _.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);

  function P(e, t) {
    c.default.track(O.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }

  function R(e, t) {
    var n;
    if ((0, m.SI)()) return void a.Z.showAgeVerificationGetStartedModal(l.cU.MESSAGE_REQUESTS_SETTINGS);
    t ? A(e) : (n = !e, (0, x.V)({
      header: v.intl.string(v.t.yAfu1t),
      body: v.intl.string(v.t["Ry2z7+"]),
      confirmText: v.intl.string(v.t.gm1Ven),
      cancelText: v.intl.string(v.t.p89ACg),
      confirmButtonColor: s.zx.Colors.BRAND,
      onConfirm: () => {
        g.mX.updateSetting(n), P(n, false)
      },
      onCancel: () => {
        g.mX.updateSetting(n), g.zA.updateSetting(n ? o.Z.getGuildIds() : []), P(n, true)
      }
    }))
  }
  return (0, i.jsx)(f.U, {
    setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
    scrollPosition: j.FY.MESSAGE_REQUESTS_V2,
    children: n === C.T ? (0, i.jsx)(b.Z, {
      title: v.intl.string(v.t["3o2ojo"]),
      value: !T && !I,
      onChange: e => R(e, false),
      disabled: T,
      note: v.intl.format(v.t.wkm9a2, {
        helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS)
      })
    }) : (0, i.jsx)(b.Z, {
      title: v.intl.string(v.t["3o2ojo"]),
      value: !y,
      onChange: e => R(e, true),
      disabled: N,
      note: S ? v.intl.format(v.t.WpnWLS, {
        helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS)
      }) : v.intl.format(v.t.wkm9a2, {
        helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS)
      })
    })
  })
}

function T(e) {
  let {
    ingress: t = j.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, r = (0, h.is)();
  return (0, i.jsx)(S, {
    ingress: t,
    guildId: null != n ? n : r
  })
}