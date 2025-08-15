/** Chunk was on 19157 **/
/** chunk id: 388275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => y
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
  Chunk773921 = require("./773921.js");

function y(e) {
  let {
    message: t,
    forwardOptions: n,
    sendLabel: y,
    canSend: I,
    selectedDestinations: S,
    isSending: A,
    onSend: O
  } = e, v = (0, f.Z)(), C = (0, _.nm)(S), x = (0, _.y)(S), P = (0, g.Ad)(), N = (0, i.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)), [T, L] = r.useState(() => (0, u.eK)(N)), {
    textValue: j,
    richValue: Z
  } = T, [w, D] = r.useState(false), R = r.useCallback(() => D(true), []), F = r.useCallback(() => D(false), []), k = r.useCallback((e, n, l) => {
    L({
      textValue: n,
      richValue: l
    }), o.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage), P(t.channel_id, t.id)
  }, [P, t]), G = r.useCallback(() => {
    o.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), O(j)
  }, [t.channel_id, O, j]), M = r.useCallback(() => (!I || j.length > v || G(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [G, j, v, I]);
  return (0, l.jsxs)(s.mzw, {
    className: b.footerWithMessage,
    children: [(0, l.jsx)("div", {
      className: b.forwardPreviewWrapper,
      children: (0, l.jsx)(p.O, {
        message: t,
        forwardOptions: n,
        channel: C
      })
    }), (0, l.jsxs)("div", {
      className: b.footerWarningWrapper,
      children: [(0, l.jsxs)("div", {
        className: b.footerButtons,
        children: [(0, l.jsx)(d.ZP, {
          innerClassName: b.messageInput,
          onChange: k,
          placeholder: E.intl.string(E.t.ZroO3N),
          channel: C,
          textValue: j,
          richValue: Z,
          type: c.Ie.FORWARD_MESSAGE_INPUT,
          onBlur: F,
          onFocus: R,
          focused: w,
          onSubmit: M,
          parentModalKey: m.so,
          autoCompletePosition: "bottom",
          emojiPickerCloseOnModalOuterClick: true,
          disableThemedBackground: true
        }), (0, l.jsx)(a.zx, {
          className: b.sendWithMessage,
          submitting: A,
          disabled: !I || j.length > v,
          onClick: G,
          children: y
        })]
      }), x.length > 0 && j.length > 0 && (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: E.intl.format(E.t.xJFpio, {
          count: x.length,
          channelNames: x.join(", ")
        })
      })]
    })]
  })
}