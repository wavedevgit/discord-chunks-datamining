/** Chunk was on 78376 **/
/** chunk id: 751461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
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

function x(e) {
  let {
    ingress: t,
    guildId: n
  } = e, b = (0, p.q9)(), x = u.$s.useSetting().includes(n), S = (0, d.K)(), T = (0, _.e)(), I = (0, s.uM)(), y = i.useCallback(e => {
    let r = (0, c.Tb)();
    e ? r.delete(n) : r.add(n), u.$s.updateSetting(Array.from(r)), o.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: f.m.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function N(e, t) {
    o.default.track(E.HAw.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let j = T ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN);
  return (0, r.jsx)(m.h, {
    setting: h.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: "0" === n ? (0, r.jsx)(g.Ay, {
      title: j,
      note: T ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT),
      value: !S,
      onChange: e => {
        var t;
        t = !e, (0, A.O)({
          header: O.intl.string(O.t["uUr+GR"]),
          body: O.intl.string(O.t.hjGJBp),
          confirmText: O.intl.string(O.t.gm1Vej),
          cancelText: O.intl.string(O.t.p89ACt),
          confirmButtonColor: l.$n.Colors.BRAND,
          onConfirm: () => {
            u.n6.updateSetting(t), N(t, false)
          },
          onCancel: () => {
            u.n6.updateSetting(t), u.$s.updateSetting(t ? a.A.getGuildIds() : []), N(t, true)
          }
        })
      },
      disabled: I,
      tooltipText: I ? O.intl.string(C.default["6Af/cw"]) : true
    }) : (0, r.jsx)(g.Ay, {
      title: j,
      note: b ? O.intl.string(O.t.V0ka0Q) : T ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo),
      value: !x,
      onChange: y
    })
  })
}

function S(e) {
  let {
    ingress: t = b.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, p.Tx)();
  return (0, r.jsx)(x, {
    ingress: t,
    guildId: null != n ? n : i
  })
}