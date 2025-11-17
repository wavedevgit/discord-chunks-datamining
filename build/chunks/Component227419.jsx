/** Chunk was on web.js **/
/** chunk id: 227419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  switch (e) {
    case h.nkL.GIF.title:
    case h.nkL.TENOR.title:
      return m.intl.string(m.t["0vrCgJ"]);
    default:
      return ""
  }
}
let v = [...a()(Chunk981631.nkL).values().map(e => ({
  id: e.commandId,
  untranslatedName: e.command,
  displayName: e.command,
  type: c.yU.CHAT,
  inputType: _.iw.BUILT_IN_INTEGRATION,
  applicationId: p.bi.BUILT_IN,
  get untranslatedDescription() {
    return O(e.title)
  },
  get displayDescription() {
    return O(e.title)
  },
  options: e.type === h.q9n.GIF ? [{
    name: "query",
    displayName: "query",
    type: c.jw.STRING,
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
    var n, i;
    let {
      channel: a
    } = t;
    if (null == a) return;
    let c = (0, u.F6)(a, f.default, d.Z),
      _ = m.intl.formatToPlainString(m.t.hJ5Ap4, {
        name: c
      }),
      p = m.intl.format(m.t.SSIVOu, {
        name: c
      }),
      h = null != (i = null == (n = e.find(e => "silent" === e.name)) ? true : n.value) && i;
    async function g() {
      if (null != a) try {
        await s.Z.closePrivateChannel(a.id, true, h)
      } catch (e) {
        l.Z.sendBotMessage(a.id, m.intl.string(m.t["YOsuT/"]))
      }
    }
    a.isManaged() && (_ = m.intl.formatToPlainString(m.t.hVGjEW, {
      name: c
    }), p = m.intl.format(m.t.IK1Qvs, {
      name: c
    })), (0, o.h7j)(e => (0, r.jsx)(o.ConfirmModal, y(E({
      header: _,
      confirmText: m.intl.string(m.t["26C4oi"]),
      cancelText: m.intl.string(m.t["ETE/oC"]),
      onConfirm: g
    }, e), {
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: p
      })
    })))
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