/** Chunk was on web.js **/
/** chunk id: 743361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk314116 = require("./314116.jsx"),
  Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk47167 = require("./47167.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk392054 = require("./392054.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  switch (e) {
    case _.Z86.GIF.title:
    case _.Z86.TENOR.title:
      return h.intl.string(h.t["0vrCgJ"]);
    default:
      return ""
  }
}
let g = [...i()(Chunk652215.Z86).values().map(e => ({
  id: e.commandId,
  untranslatedName: e.command,
  displayName: e.command,
  type: l.kc.CHAT,
  inputType: f.y$.BUILT_IN_INTEGRATION,
  applicationId: p.Ik.BUILT_IN,
  get untranslatedDescription() {
    return m(e.title)
  },
  get displayDescription() {
    return m(e.title)
  },
  options: e.type === _.p_j.GIF ? [{
    name: "query",
    displayName: "query",
    type: l.n4.STRING,
    get description() {
      return h.intl.string(h.t["+9g3Du"])
    },
    get displayDescription() {
      return h.intl.string(h.t["+9g3Du"])
    },
    required: true
  }] : [],
  integrationType: e.type,
  integrationTitle: e.title
})).value(), {
  id: "-15",
  untranslatedName: "leave",
  displayName: "leave",
  type: Chunk155718.kc.CHAT,
  inputType: Chunk392054.y$.BUILT_IN,
  applicationId: Chunk73510.Ik.BUILT_IN,
  get untranslatedDescription() {
    return h.intl.string(h.t["26C4oi"])
  },
  get displayDescription() {
    return h.intl.string(h.t["26C4oi"])
  },
  options: [{
    name: "silent",
    displayName: "silent",
    type: Chunk155718.n4.BOOLEAN,
    get description() {
      return h.intl.string(h.t.YH7PkD)
    },
    get displayDescription() {
      return h.intl.string(h.t.bq3JXs)
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
    let l = (0, c.m1)(i, d.default, u.A),
      f = h.intl.formatToPlainString(h.t.hJ5Ap4, {
        name: l
      }),
      p = h.intl.format(h.t.SSIVOu, {
        name: l
      }),
      _ = null != (n = null == (r = e.find(e => "silent" === e.name)) ? true : r.value) && n;
    async function m() {
      if (null != i) try {
        await o.A.closePrivateChannel(i.id, true, _)
      } catch (e) {
        s.A.sendBotMessage(i.id, h.intl.string(h.t["YOsuT/"]))
      }
    }
    i.isManaged() && (f = h.intl.formatToPlainString(h.t.hVGjEW, {
      name: l
    }), p = h.intl.format(h.t.IK1Qvs, {
      name: l
    })), (0, a.A)({
      title: f,
      subtitle: p,
      confirmText: h.intl.string(h.t["26C4oi"]),
      onConfirm: m
    })
  }
}, {
  id: "-17",
  untranslatedName: "sticker",
  displayName: "sticker",
  type: Chunk155718.kc.CHAT,
  inputType: Chunk392054.y$.BUILT_IN_INTEGRATION,
  applicationId: Chunk73510.Ik.BUILT_IN,
  get untranslatedDescription() {
    return h.intl.string(h.t.GUH9II)
  },
  get displayDescription() {
    return h.intl.string(h.t.GUH9II)
  },
  options: [{
    name: "query",
    displayName: "query",
    type: Chunk155718.n4.STRING,
    get description() {
      return h.intl.string(h.t.hIbHm1)
    },
    get displayDescription() {
      return h.intl.string(h.t.hIbHm1)
    },
    required: true
  }],
  integrationType: Chunk652215.p_j.STICKER,
  integrationTitle: "sticker"
}]