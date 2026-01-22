/** Chunk was on web.js **/
/** chunk id: 638324, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
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

function T(e) {
  let {
    ingress: t,
    guildId: n
  } = e, T = (0, m.q9)(), C = (0, _.K)(), N = h.$s.useSetting().includes(n), R = (0, l.uM)(), w = h.YX.useSetting(), P = h.Zr.useSetting().includes(n), D = i.useCallback(e => {
    let r = (0, f.xo)();
    e ? r.delete(n) : r.add(n), h.Zr.updateSetting(Array.from(r)), u.default.track(v.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: y.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);

  function x(e, t) {
    u.default.track(v.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }

  function L(e, t) {
    !e && (0, p.w)() ? s.A.showAgeVerificationGetStartedModal({
      entryPoint: o.q1.MESSAGE_REQUESTS_SETTINGS
    }) : t ? D(e) : j(!e)
  }

  function j(e) {
    let t = () => {
        h.YX.updateSetting(e), h.Zr.updateSetting(e ? c.A.getGuildIds() : []), x(e, true)
      },
      n = () => {
        h.YX.updateSetting(e), x(e, false)
      };
    (0, b.O)({
      header: S.intl.string(S.t.yAfu1p),
      body: S.intl.string(S.t.Ry2z74),
      confirmText: S.intl.string(S.t.gm1Vej),
      cancelText: S.intl.string(S.t.p89ACt),
      confirmButtonColor: a.$n.Colors.BRAND,
      onConfirm: n,
      onCancel: t
    })
  }
  return (0, r.jsx)(g.h, {
    setting: A.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
    scrollPosition: O.d1.MESSAGE_REQUESTS_V2,
    children: "0" === n ? (0, r.jsx)(E.Ay, {
      title: S.intl.string(S.t["3o2ojh"]),
      value: !C && !w,
      onChange: e => L(e, false),
      disabled: C || R,
      tooltipText: R ? S.intl.string(I.default["6Af/cw"]) : true,
      note: S.intl.format(S.t.wkm9a3, {
        helpdeskArticle: d.A.getArticleURL(v.MVz.MESSAGE_REQUESTS)
      })
    }) : (0, r.jsx)(E.Ay, {
      title: S.intl.string(S.t["3o2ojh"]),
      value: !N && !P,
      onChange: e => L(e, true),
      disabled: N,
      note: T ? S.intl.format(S.t.WpnWLc, {
        helpdeskArticle: d.A.getArticleURL(v.MVz.MESSAGE_REQUESTS)
      }) : S.intl.format(S.t.wkm9a3, {
        helpdeskArticle: d.A.getArticleURL(v.MVz.MESSAGE_REQUESTS)
      })
    })
  })
}

function C(e) {
  let {
    ingress: t = O.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, m.Tx)();
  return (0, r.jsx)(T, {
    ingress: t,
    guildId: null != n ? n : i
  })
}