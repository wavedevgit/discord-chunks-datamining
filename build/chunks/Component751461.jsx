/** Chunk was on web.js **/
/** chunk id: 751461, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function A(e) {
  let {
    ingress: t,
    guildId: n
  } = e, E = (0, p.q9)(), A = d.$s.useSetting().includes(n), I = (0, u.K)(), S = (0, f.e)(), T = (0, s.uM)(), C = i.useCallback(e => {
    let r = (0, c.Tb)();
    e ? r.delete(n) : r.add(n), d.$s.updateSetting(Array.from(r)), l.default.track(b.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: g.m.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function N(e, t) {
    l.default.track(b.HAw.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let R = e => {
      w(!e)
    },
    w = e => {
      let t = () => {
          d.n6.updateSetting(e), d.$s.updateSetting(e ? o.A.getGuildIds() : []), N(e, true)
        },
        n = () => {
          d.n6.updateSetting(e), N(e, false)
        };
      (0, m.O)({
        header: O.intl.string(O.t["uUr+GR"]),
        body: O.intl.string(O.t.hjGJBp),
        confirmText: O.intl.string(O.t.gm1Vej),
        cancelText: O.intl.string(O.t.p89ACt),
        confirmButtonColor: a.$n.Colors.BRAND,
        onConfirm: n,
        onCancel: t
      })
    },
    P = S ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN);
  return (0, r.jsx)(_.h, {
    setting: y.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: "0" === n ? (0, r.jsx)(h.Ay, {
      title: P,
      note: S ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT),
      value: !I,
      onChange: R,
      disabled: T,
      tooltipText: T ? O.intl.string(v.default["6Af/cw"]) : true
    }) : (0, r.jsx)(h.Ay, {
      title: P,
      note: E ? O.intl.string(O.t.V0ka0Q) : S ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo),
      value: !A,
      onChange: C
    })
  })
}

function I(e) {
  let {
    ingress: t = E.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, p.Tx)();
  return (0, r.jsx)(A, {
    ingress: t,
    guildId: null != n ? n : i
  })
}