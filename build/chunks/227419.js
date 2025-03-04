/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
  o = n.n(i),
  a = n(481060),
  s = n(493683),
  l = n(904245),
  c = n(911969),
  u = n(933557),
  d = n(699516),
  f = n(594174),
  _ = n(895924),
  p = n(689079),
  h = n(981631),
  g = n(388032);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  switch (e) {
    case h.nkL.GIF.title:
    case h.nkL.TENOR.title:
      return g.NW.string(g.t["0vrCgI"]);
    default:
      return ""
  }
}
let O = [...o()(h.nkL).values().map(e => ({
  id: e.commandId,
  untranslatedName: e.command,
  displayName: e.command,
  type: c.yU.CHAT,
  inputType: _.iw.BUILT_IN_INTEGRATION,
  applicationId: p.bi.BUILT_IN,
  get untranslatedDescription() {
    return y(e.title)
  },
  get displayDescription() {
    return y(e.title)
  },
  options: e.type === h.q9n.GIF ? [{
    name: "query",
    displayName: "query",
    type: c.jw.STRING,
    get description() {
      return g.NW.string(g.t["+9g3Dg"])
    },
    get displayDescription() {
      return g.NW.string(g.t["+9g3Dg"])
    },
    required: !0
  }] : [],
  integrationType: e.type,
  integrationTitle: e.title
})).value(), {
  id: "-15",
  untranslatedName: "leave",
  displayName: "leave",
  type: c.yU.CHAT,
  inputType: _.iw.BUILT_IN,
  applicationId: p.bi.BUILT_IN,
  get untranslatedDescription() {
    return g.NW.string(g.t["26C4oq"])
  },
  get displayDescription() {
    return g.NW.string(g.t["26C4oq"])
  },
  options: [{
    name: "silent",
    displayName: "silent",
    type: c.jw.BOOLEAN,
    get description() {
      return g.NW.string(g.t.YH7PkJ)
    },
    get displayDescription() {
      return g.NW.string(g.t.bq3JXl)
    },
    required: !1
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
      channel: o
    } = t;
    if (null == o) return;
    let c = (0, u.F6)(o, f.default, d.Z),
      _ = g.NW.formatToPlainString(g.t.hJ5Ap6, {
        name: c
      }),
      p = g.NW.format(g.t.SSIVOj, {
        name: c
      }),
      h = null !== (i = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== i && i;
    async function m() {
      if (null != o) try {
        await s.Z.closePrivateChannel(o.id, void 0, h)
      } catch (e) {
        l.Z.sendBotMessage(o.id, g.NW.string(g.t.YOsuT0))
      }
    }
    o.isManaged() && (_ = g.NW.formatToPlainString(g.t.hVGjER, {
      name: c
    }), p = g.NW.format(g.t.IK1Qvr, {
      name: c
    })), (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, b(E({
      header: _,
      confirmText: g.NW.string(g.t["26C4oq"]),
      cancelText: g.NW.string(g.t["ETE/oK"]),
      onConfirm: m
    }, e), {
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: p
      })
    })))
  }
}, {
  id: "-17",
  untranslatedName: "sticker",
  displayName: "sticker",
  type: c.yU.CHAT,
  inputType: _.iw.BUILT_IN_INTEGRATION,
  applicationId: p.bi.BUILT_IN,
  get untranslatedDescription() {
    return g.NW.string(g.t.GUH9IC)
  },
  get displayDescription() {
    return g.NW.string(g.t.GUH9IC)
  },
  options: [{
    name: "query",
    displayName: "query",
    type: c.jw.STRING,
    get description() {
      return g.NW.string(g.t.hIbHm5)
    },
    get displayDescription() {
      return g.NW.string(g.t.hIbHm5)
    },
    required: !0
  }],
  integrationType: h.q9n.STICKER,
  integrationTitle: "sticker"
}]