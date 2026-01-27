/** Chunk was on 60667 **/
/** chunk id: 751461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk171316 = require("./171316.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk762183 = require("./762183.js"),
  Chunk253932 = require("./253932.js"),
  Chunk445176 = require("./445176.js"),
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

function C(e) {
  let {
    ingress: t,
    guildId: n
  } = e, h = (0, p.q9)(), C = u.$s.useSetting().includes(n), I = (0, d.K)(), T = (0, _.e)(), S = (0, s.uM)(), j = i.useCallback(e => {
    let r = (0, c.Tb)();
    e ? r.delete(n) : r.add(n), u.$s.updateSetting(Array.from(r)), o.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: f.m.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function v(e, t) {
    o.default.track(E.HAw.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let N = T ? x.intl.string(x.t.PMsfcH) : x.intl.string(x.t.RAQUSN);
  return (0, r.jsx)(m.h, {
    setting: b.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: "0" === n ? (0, r.jsx)(g.Ay, {
      title: N,
      note: T ? x.intl.string(x.t.XXGmuB) : x.intl.string(x.t.wbYDfT),
      value: !I,
      onChange: e => {
        var t;
        t = !e, (0, A.O)({
          header: x.intl.string(x.t["uUr+GR"]),
          body: x.intl.string(x.t.hjGJBp),
          confirmText: x.intl.string(x.t.gm1Vej),
          cancelText: x.intl.string(x.t.p89ACt),
          confirmButtonColor: l.$n.Colors.BRAND,
          onConfirm: () => {
            u.n6.updateSetting(t), v(t, false)
          },
          onCancel: () => {
            u.n6.updateSetting(t), u.$s.updateSetting(t ? a.A.getGuildIds() : []), v(t, true)
          }
        })
      },
      disabled: S,
      tooltipText: S ? x.intl.string(O.default["6Af/cw"]) : true
    }) : (0, r.jsx)(g.Ay, {
      title: N,
      note: h ? x.intl.string(x.t.V0ka0Q) : T ? x.intl.string(x.t.F9WY3f) : x.intl.string(x.t.G7c3Xo),
      value: !C,
      onChange: j
    })
  })
}

function I(e) {
  let {
    ingress: t = h.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, p.Tx)();
  return (0, r.jsx)(C, {
    ingress: t,
    guildId: null != n ? n : i
  })
}