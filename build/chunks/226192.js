/** Chunk was on 61697 **/
n.d(e, {
  UV: () => _,
  _s: () => u,
  kW: () => d,
  km: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(273504),
  o = n(388032);

function a(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r
    })
  }
  return t
}

function s(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function c(t) {
  return {
    [l.jj.BLOCK_MESSAGE]: (t, e) => new Promise(t => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n.e("94005").then(n.bind(n, 144462));
        return n => {
          var l;
          return (0, r.jsx)(i, s(a({
            initialCustomMessage: null !== (l = e.metadata.customMessage) && void 0 !== l ? l : "",
            onSubmit: r => {
              e.metadata.customMessage = r, t(e), n.onClose()
            }
          }, n), {
            onClose: () => (t(null), n.onClose())
          }))
        }
      })
    }),
    [l.jj.FLAG_TO_CHANNEL]: (e, o) => new Promise(c => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n.e("74543").then(n.bind(n, 643611)), u = e.actions.find(t => t.type === l.jj.FLAG_TO_CHANNEL);
        return n => (0, r.jsx)(i, s(a({
          action: o,
          isEdit: null != u,
          triggerType: e.triggerType,
          guildId: t,
          onEditChannel: t => {
            o.metadata.channelId = t, e.exemptChannels.add(t), c(o), n.onClose()
          }
        }, n), {
          onClose: () => (c(null), n.onClose())
        }))
      })
    }),
    [l.jj.USER_COMMUNICATION_DISABLED]: (t, e) => new Promise(o => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n.e("78273").then(n.bind(n, 41767)), c = t.actions.find(t => t.type === l.jj.USER_COMMUNICATION_DISABLED);
        return n => (0, r.jsx)(i, s(a({
          action: e,
          isEdit: null != c,
          triggerType: t.triggerType,
          onUpdateDuration: t => {
            null != t && (e.metadata.durationSeconds = t), o(e), n.onClose()
          }
        }, n), {
          onClose: () => (o(null), n.onClose())
        }))
      })
    })
  }
}

function u(t, e, l, o) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("37483").then(n.bind(n, 241046));
    return n => (0, r.jsx)(i, s(a({}, n), {
      automodDecision: {
        messageId: t,
        messageContent: e,
        decisionId: l,
        channel: o
      }
    }))
  })
}

function d(t, e) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("28382").then(n.bind(n, 537623));
    return n => (0, r.jsx)(i, s(a({}, n), {
      messageId: t,
      guildId: e
    }))
  })
}

function _(t) {
  (0, i.h7j)(e => (0, r.jsx)(i.ConfirmModal, s(a({
    header: o.NW.string(o.t.wLGrjI),
    confirmText: o.NW.string(o.t["cY+Ooa"]),
    onConfirm: t,
    cancelText: o.NW.string(o.t["ETE/oK"])
  }, e), {
    children: (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      children: o.NW.string(o.t.arYQ2d)
    })
  })))
}