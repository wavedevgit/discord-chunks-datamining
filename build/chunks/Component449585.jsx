/** Chunk was on 73734 **/
/** chunk id: 449585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bx: () => u,
  is: () => d,
  rI: () => _,
  w2: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  return {
    [a.AH.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
      (0, l.mMO)(async () => {
        let {
          default: i
        } = await n.e("35023").then(n.bind(n, 148210));
        return n => {
          var l;
          return (0, r.jsx)(i, c(s({
            initialCustomMessage: null != (l = t.metadata.customMessage) ? l : "",
            onSubmit: r => {
              t.metadata.customMessage = r, e(t), n.onClose()
            }
          }, n), {
            onClose: () => (e(null), n.onClose())
          }))
        }
      })
    }),
    [a.AH.FLAG_TO_CHANNEL]: (t, i) => new Promise(o => {
      (0, l.mMO)(async () => {
        let {
          default: l
        } = await n.e("65341").then(n.bind(n, 158956)), u = t.actions.find(e => e.type === a.AH.FLAG_TO_CHANNEL);
        return n => (0, r.jsx)(l, c(s({
          action: i,
          isEdit: null != u,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            i.metadata.channelId = e, t.exemptChannels.add(e), o(i), n.onClose()
          }
        }, n), {
          onClose: () => (o(null), n.onClose())
        }))
      })
    }),
    [a.AH.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(i => {
      (0, l.mMO)(async () => {
        let {
          default: l
        } = await n.e("21932").then(n.bind(n, 16039)), o = e.actions.find(e => e.type === a.AH.USER_COMMUNICATION_DISABLED);
        return n => (0, r.jsx)(l, c(s({
          action: t,
          isEdit: null != o,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), i(t), n.onClose()
          }
        }, n), {
          onClose: () => (i(null), n.onClose())
        }))
      })
    })
  }
}

function E(e, t, i, a) {
  (0, l.mMO)(async () => {
    let {
      default: l
    } = await n.e("15112").then(n.bind(n, 794267));
    return n => (0, r.jsx)(l, c(s({}, n), {
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: i,
        channel: a
      }
    }))
  })
}

function d(e, t) {
  (0, l.mMO)(async () => {
    let {
      default: i
    } = await n.e("7133").then(n.bind(n, 580812));
    return n => (0, r.jsx)(i, c(s({}, n), {
      messageId: e,
      guildId: t
    }))
  })
}

function _(e) {
  (0, i.A)({
    title: o.intl.string(o.t.wLGrjB),
    subtitle: o.intl.string(o.t.arYQ2X),
    confirmText: o.intl.string(o.t["cY+Oob"]),
    onConfirm: e
  })
}