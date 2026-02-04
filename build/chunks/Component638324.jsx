/** Chunk was on 9207 **/
/** chunk id: 638324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk171316 = require("./171316.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk152076 = require("./152076.js"),
  Chunk762183 = require("./762183.js"),
  Chunk253932 = require("./253932.js"),
  Chunk112469 = require("./112469.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk997913 = require("./997913.jsx"),
  Chunk542457 = require("./542457.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js");
require("./820575.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

function I(e) {
  let {
    ingress: t,
    guildId: n
  } = e, I = (0, A.q9)(), N = (0, m.K)(), y = g.$s.useSetting().includes(n), j = (0, o.uM)(), v = g.YX.useSetting(), P = g.Zr.useSetting().includes(n), R = i.useCallback(e => {
    let r = (0, _.xo)();
    e ? r.delete(n) : r.add(n), g.Zr.updateSetting(Array.from(r)), d.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);

  function D(e, t) {
    d.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }

  function L(e, t) {
    var n;
    !e && (0, p.w)() ? s.A.showAgeVerificationGetStartedModal({
      entryPoint: a.q1.MESSAGE_REQUESTS_SETTINGS
    }) : t ? R(e) : (n = !e, (0, h.O)({
      header: S.intl.string(S.t.yAfu1p),
      body: S.intl.string(S.t.Ry2z74),
      confirmText: S.intl.string(S.t.gm1Vej),
      cancelText: S.intl.string(S.t.p89ACt),
      confirmButtonColor: l.$n.Colors.BRAND,
      onConfirm: () => {
        g.YX.updateSetting(n), D(n, false)
      },
      onCancel: () => {
        g.YX.updateSetting(n), g.Zr.updateSetting(n ? c.A.getGuildIds() : []), D(n, true)
      }
    }))
  }
  return (0, r.jsx)(f.h, {
    setting: x.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
    scrollPosition: O.d1.MESSAGE_REQUESTS_V2,
    children: "0" === n ? (0, r.jsx)(b.Ay, {
      title: S.intl.string(S.t["3o2ojh"]),
      value: !N && !v,
      onChange: e => L(e, false),
      disabled: N || j,
      tooltipText: j ? S.intl.string(T.default["6Af/cw"]) : true,
      note: S.intl.format(S.t.wkm9a3, {
        helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
      })
    }) : (0, r.jsx)(b.Ay, {
      title: S.intl.string(S.t["3o2ojh"]),
      value: !y && !P,
      onChange: e => L(e, true),
      disabled: y,
      note: I ? S.intl.format(S.t.WpnWLc, {
        helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
      }) : S.intl.format(S.t.wkm9a3, {
        helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
      })
    })
  })
}

function N(e) {
  let {
    ingress: t = O.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, A.Tx)();
  return (0, r.jsx)(I, {
    ingress: t,
    guildId: null != n ? n : i
  })
}