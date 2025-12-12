/** Chunk was on web.js **/
/** chunk id: 227419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk248514 = require("./248514.jsx"),
  Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk933557 = require("./933557.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk895924 = require("./895924.js"),
  Chunk689079 = require("./689079.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  switch (e) {
    case _.nkL.GIF.title:
    case _.nkL.TENOR.title:
      return m.intl.string(m.t["0vrCgJ"]);
    default:
      return ""
  }
}
let g = [...i()(Chunk981631.nkL).values().map(e => ({
  id: e.commandId,
  untranslatedName: e.command,
  displayName: e.command,
  type: l.yU.CHAT,
  inputType: f.iw.BUILT_IN_INTEGRATION,
  applicationId: p.bi.BUILT_IN,
  get untranslatedDescription() {
    return h(e.title)
  },
  get displayDescription() {
    return h(e.title)
  },
  options: e.type === _.q9n.GIF ? [{
    name: "query",
    displayName: "query",
    type: l.jw.STRING,
    get description() {
      return m.intl.string(m.t["+9g3Du"])
    },
    get displayDescription() {
      return m.intl.string(m.t["+9g3Du"])
    },
    required: true
  }] : [],
  integrationType: e.type,
  integrationTitle: e.title
})).value(), {
  id: "-15",
  untranslatedName: "leave",
  displayName: "leave",
  type: Chunk911969.yU.CHAT,
  inputType: Chunk895924.iw.BUILT_IN,
  applicationId: Chunk689079.bi.BUILT_IN,
  get untranslatedDescription() {
    return Chunk388032.intl.string(Chunk388032.t["26C4oi"])
  },
  get displayDescription() {
    return Chunk388032.intl.string(Chunk388032.t["26C4oi"])
  },
  options: [{
    name: "silent",
    displayName: "silent",
    type: Chunk911969.jw.BOOLEAN,
    get description() {
      return Chunk388032.intl.string(Chunk388032.t.YH7PkD)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.bq3JXs)
    },
    required: false
  }],
  predicate: e => {
    let {
      channel: t
    } = e;
    return null != t && t.isGroupDM()
  },
  execute: (e, t) => {
    var n, r;
    let {
      channel: i
    } = t;
    if (null == i) return;
    let l = (0, c.F6)(i, d.default, u.Z),
      f = m.intl.formatToPlainString(m.t.hJ5Ap4, {
        name: l
      }),
      p = m.intl.format(m.t.SSIVOu, {
        name: l
      }),
      _ = null != (r = null == (n = e.find(e => "silent" === e.name)) ? true : n.value) && r;
    async function h() {
      if (null != i) try {
        await a.Z.closePrivateChannel(i.id, true, _)
      } catch (e) {
        s.Z.sendBotMessage(i.id, m.intl.string(m.t["YOsuT/"]))
      }
    }
    i.isManaged() && (f = m.intl.formatToPlainString(m.t.hVGjEW, {
      name: l
    }), p = m.intl.format(m.t.IK1Qvs, {
      name: l
    })), (0, o.Z)({
      title: f,
      subtitle: p,
      confirmText: m.intl.string(m.t["26C4oi"]),
      onConfirm: h
    })
  }
}, {
  id: "-17",
  untranslatedName: "sticker",
  displayName: "sticker",
  type: Chunk911969.yU.CHAT,
  inputType: Chunk895924.iw.BUILT_IN_INTEGRATION,
  applicationId: Chunk689079.bi.BUILT_IN,
  get untranslatedDescription() {
    return Chunk388032.intl.string(Chunk388032.t.GUH9II)
  },
  get displayDescription() {
    return Chunk388032.intl.string(Chunk388032.t.GUH9II)
  },
  options: [{
    name: "query",
    displayName: "query",
    type: Chunk911969.jw.STRING,
    get description() {
      return Chunk388032.intl.string(Chunk388032.t.hIbHm1)
    },
    get displayDescription() {
      return Chunk388032.intl.string(Chunk388032.t.hIbHm1)
    },
    required: true
  }],
  integrationType: Chunk981631.q9n.STICKER,
  integrationTitle: "sticker"
}]