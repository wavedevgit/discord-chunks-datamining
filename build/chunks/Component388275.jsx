/** Chunk was on 33648 **/
/** chunk id: 388275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk849522 = require("./849522.js"),
  Chunk703558 = require("./703558.js"),
  Chunk784384 = require("./784384.js"),
  Chunk822869 = require("./822869.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk646746 = require("./646746.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk790505 = require("./790505.js");

function v(e) {
  let {
    message: t,
    forwardOptions: n,
    sendLabel: v,
    canSend: x,
    selectedDestinations: E,
    isSending: C,
    onSend: S
  } = e, O = (0, h.Z)(), P = (0, m.nm)(E), w = (0, m.y)(E), Z = (0, g.Ad)(), N = (0, a.e7)([f.Z], () => f.Z.getDraft(t.channel_id, f.d.ForwardContextMessage)), [j, I] = r.useState(() => (0, u.eK)(N)), {
    textValue: T,
    richValue: L
  } = j, [R, A] = r.useState(false), D = r.useCallback(() => A(true), []), M = r.useCallback(() => A(false), []), k = r.useCallback((e, n, l) => {
    I({
      textValue: n,
      richValue: l
    }), o.Z.saveDraft(t.channel_id, n, f.d.ForwardContextMessage), Z(t.channel_id, t.id)
  }, [Z, t]), U = r.useCallback(() => {
    o.Z.clearDraft(t.channel_id, f.d.ForwardContextMessage), S(T)
  }, [t.channel_id, S, T]), W = r.useCallback(() => (!x || T.length > O || U(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [U, T, O, x]);
  return (0, l.jsxs)(s.mzw, {
    className: y.footerWithMessage,
    children: [(0, l.jsx)("div", {
      className: y.forwardPreviewWrapper,
      children: (0, l.jsx)(p.O, {
        message: t,
        forwardOptions: n,
        channel: P
      })
    }), (0, l.jsxs)("div", {
      className: y.footerWarningWrapper,
      children: [(0, l.jsxs)("div", {
        className: y.footerButtons,
        children: [(0, l.jsx)(d.ZP, {
          innerClassName: y.messageInput,
          onChange: k,
          placeholder: b.intl.string(b.t.ZroO3N),
          channel: P,
          textValue: T,
          richValue: L,
          type: c.Ie.FORWARD_MESSAGE_INPUT,
          onBlur: M,
          onFocus: D,
          focused: R,
          onSubmit: W,
          parentModalKey: _.so,
          autoCompletePosition: "bottom",
          emojiPickerCloseOnModalOuterClick: true,
          disableThemedBackground: true
        }), (0, l.jsx)(i.zx, {
          className: y.sendWithMessage,
          submitting: C,
          disabled: !x || T.length > O,
          onClick: U,
          children: v
        })]
      }), w.length > 0 && T.length > 0 && (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: b.intl.format(b.t.xJFpio, {
          count: w.length,
          channelNames: w.join(", ")
        })
      })]
    })]
  })
}