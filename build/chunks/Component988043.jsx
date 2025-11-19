/** Chunk was on web.js **/
/** chunk id: 988043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk915009 = require("./915009.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk744038 = require("./744038.js");

function T(e) {
  let {
    ingress: t,
    guildId: n
  } = e, E = (0, _.c_)(), T = d.h2.useSetting().includes(n), S = (0, u.q)(), A = (0, f.r)(), C = (0, o.LN)(), N = i.useCallback(e => {
    let r = (0, c.YK)();
    e ? r.delete(n) : r.add(n), d.h2.updateSetting(Array.from(r)), l.default.track(O.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: g.Y.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function R(e, t) {
    l.default.track(O.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let P = e => {
      D(!e)
    },
    D = e => {
      let t = () => {
          d.gR.updateSetting(e), d.h2.updateSetting(e ? s.Z.getGuildIds() : []), R(e, true)
        },
        n = () => {
          d.gR.updateSetting(e), R(e, false)
        };
      (0, m.V)({
        header: v.intl.string(v.t["uUr+GR"]),
        body: v.intl.string(v.t.hjGJBp),
        confirmText: v.intl.string(v.t.gm1Vej),
        cancelText: v.intl.string(v.t.p89ACt),
        confirmButtonColor: a.zx.Colors.BRAND,
        onConfirm: n,
        onCancel: t
      })
    },
    w = A ? v.intl.string(v.t.PMsfcH) : v.intl.string(v.t.RAQUSN);
  return (0, r.jsx)(p.U, {
    setting: b.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: n === y.T ? (0, r.jsx)(h.ZP, {
      title: w,
      note: A ? v.intl.string(v.t.XXGmuB) : v.intl.string(v.t.wbYDfT),
      value: !S,
      onChange: P,
      disabled: C,
      tooltipText: C ? v.intl.string(I.default["6Af/cw"]) : true
    }) : (0, r.jsx)(h.ZP, {
      title: w,
      note: E ? v.intl.string(v.t.V0ka0Q) : A ? v.intl.string(v.t.F9WY3f) : v.intl.string(v.t.G7c3Xo),
      value: !T,
      onChange: N
    })
  })
}

function S(e) {
  let {
    ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, _.is)();
  return (0, r.jsx)(T, {
    ingress: t,
    guildId: null != n ? n : i
  })
}