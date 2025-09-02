/** Chunk was on web.js **/
/** chunk id: 988043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk88658 = require("./88658.js"),
  Chunk976978 = require("./976978.js"),
  Chunk695346 = require("./695346.js"),
  Chunk87820 = require("./87820.js"),
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

function v(e) {
  let {
    ingress: t,
    guildId: n
  } = e, g = (0, f.c_)(), v = u.h2.useSetting().includes(n), I = (0, c.q)(), S = (0, d.r)(), T = i.useCallback(e => {
    let r = (0, l.YK)();
    e ? r.delete(n) : r.add(n), u.h2.updateSetting(Array.from(r)), s.default.track(y.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: m.Y.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function A(e, t) {
    s.default.track(y.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let C = e => {
      N(!e)
    },
    N = e => {
      let t = () => {
          u.gR.updateSetting(e), u.h2.updateSetting(e ? o.Z.getGuildIds() : []), A(e, true)
        },
        n = () => {
          u.gR.updateSetting(e), A(e, false)
        };
      (0, h.V)({
        header: O.intl.string(O.t["uUr+GR"]),
        body: O.intl.string(O.t.hjGJBg),
        confirmText: O.intl.string(O.t.gm1Ven),
        cancelText: O.intl.string(O.t.p89ACg),
        confirmButtonColor: a.zx.Colors.BRAND,
        onConfirm: n,
        onCancel: t
      })
    },
    R = S ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSE);
  return (0, r.jsx)(_.U, {
    setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: n === b.T ? (0, r.jsx)(p.Z, {
      title: R,
      note: S ? O.intl.string(O.t.XXGmuL) : O.intl.string(O.t.wbYDfX),
      value: !I,
      onChange: C
    }) : (0, r.jsx)(p.Z, {
      title: R,
      note: g ? O.intl.string(O.t.V0ka0d) : S ? O.intl.string(O.t.F9WY3d) : O.intl.string(O.t.G7c3Xl),
      value: !v,
      onChange: T
    })
  })
}

function I(e) {
  let {
    ingress: t = g.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, f.is)();
  return (0, r.jsx)(v, {
    ingress: t,
    guildId: null != n ? n : i
  })
}