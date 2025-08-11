/** Chunk was on 75708 **/
/** chunk id: 988043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function C(e) {
  let {
    ingress: t,
    guildId: n
  } = e, b = (0, m.c_)(), C = d.h2.useSetting().includes(n), O = (0, c.q)(), v = (0, u.r)(), S = r.useCallback(e => {
    let i = (0, o.YK)();
    e ? i.delete(n) : i.add(n), d.h2.updateSetting(Array.from(i)), l.default.track(j.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: f.Y.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function T(e, t) {
    l.default.track(j.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let I = e => {
      (0, h.V)({
        header: E.intl.string(E.t["uUr+GR"]),
        body: E.intl.string(E.t.hjGJBg),
        confirmText: E.intl.string(E.t.gm1Ven),
        cancelText: E.intl.string(E.t.p89ACg),
        confirmButtonColor: s.zx.Colors.BRAND,
        onConfirm: () => {
          d.gR.updateSetting(e), T(e, false)
        },
        onCancel: () => {
          d.gR.updateSetting(e), d.h2.updateSetting(e ? a.Z.getGuildIds() : []), T(e, true)
        }
      })
    },
    N = v ? E.intl.string(E.t.PMsfcH) : E.intl.string(E.t.RAQUSE);
  return (0, i.jsx)(p.U, {
    setting: x.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: n === _.T ? (0, i.jsx)(g.Z, {
      title: N,
      note: v ? E.intl.string(E.t.XXGmuL) : E.intl.string(E.t.wbYDfX),
      value: !O,
      onChange: e => {
        I(!e)
      }
    }) : (0, i.jsx)(g.Z, {
      title: N,
      note: b ? E.intl.string(E.t.V0ka0d) : v ? E.intl.string(E.t.F9WY3d) : E.intl.string(E.t.G7c3Xl),
      value: !C,
      onChange: S
    })
  })
}

function O(e) {
  let {
    ingress: t = b.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, r = (0, m.is)();
  return (0, i.jsx)(C, {
    ingress: t,
    guildId: null != n ? n : r
  })
}