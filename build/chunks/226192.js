/** Chunk was on 76346 **/
r.d(t, {
  UV: () => p,
  _s: () => u,
  kW: () => d,
  km: () => c
});
var n = r(200651);
r(192379);
var i = r(481060),
  s = r(273504),
  l = r(388032);

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function c(e) {
  return {
    [s.jj.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await r.e("94005").then(r.bind(r, 144462));
        return r => {
          var s;
          return (0, n.jsx)(i, a(o({
            initialCustomMessage: null != (s = t.metadata.customMessage) ? s : "",
            onSubmit: n => {
              t.metadata.customMessage = n, e(t), r.onClose()
            }
          }, r), {
            onClose: () => (e(null), r.onClose())
          }))
        }
      })
    }),
    [s.jj.FLAG_TO_CHANNEL]: (t, l) => new Promise(c => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await r.e("74543").then(r.bind(r, 643611)), u = t.actions.find(e => e.type === s.jj.FLAG_TO_CHANNEL);
        return r => (0, n.jsx)(i, a(o({
          action: l,
          isEdit: null != u,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            l.metadata.channelId = e, t.exemptChannels.add(e), c(l), r.onClose()
          }
        }, r), {
          onClose: () => (c(null), r.onClose())
        }))
      })
    }),
    [s.jj.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(l => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await r.e("78273").then(r.bind(r, 41767)), c = e.actions.find(e => e.type === s.jj.USER_COMMUNICATION_DISABLED);
        return r => (0, n.jsx)(i, a(o({
          action: t,
          isEdit: null != c,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), l(t), r.onClose()
          }
        }, r), {
          onClose: () => (l(null), r.onClose())
        }))
      })
    })
  }
}

function u(e, t, s, l) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await r.e("37483").then(r.bind(r, 241046));
    return r => (0, n.jsx)(i, a(o({}, r), {
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: s,
        channel: l
      }
    }))
  })
}

function d(e, t) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await r.e("28382").then(r.bind(r, 537623));
    return r => (0, n.jsx)(i, a(o({}, r), {
      messageId: e,
      guildId: t
    }))
  })
}

function p(e) {
  (0, i.h7j)(t => (0, n.jsx)(i.ConfirmModal, a(o({
    header: l.intl.string(l.t.wLGrjI),
    confirmText: l.intl.string(l.t["cY+Ooa"]),
    onConfirm: e,
    cancelText: l.intl.string(l.t["ETE/oK"])
  }, t), {
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: l.intl.string(l.t.arYQ2d)
    })
  })))
}