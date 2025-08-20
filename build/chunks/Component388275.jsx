/** Chunk was on 33648 **/
/** chunk id: 388275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function x(e) {
  let {
    message: t,
    forwardOptions: n,
    sendLabel: x,
    canSend: y,
    selectedDestinations: w,
    isSending: j,
    onSend: O
  } = e, P = (0, h.Z)(), S = (0, m.nm)(w), E = (0, m.y)(w), C = (0, g.Ad)(), Z = (0, a.e7)([f.Z], () => f.Z.getDraft(t.channel_id, f.d.ForwardContextMessage)), [N, L] = r.useState(() => (0, c.eK)(Z)), {
    textValue: M,
    richValue: T
  } = N, [R, D] = r.useState(false), I = r.useCallback(() => D(true), []), A = r.useCallback(() => D(false), []), k = r.useCallback((e, n, l) => {
    L({
      textValue: n,
      richValue: l
    }), o.Z.saveDraft(t.channel_id, n, f.d.ForwardContextMessage), C(t.channel_id, t.id)
  }, [C, t]), F = r.useCallback(() => {
    o.Z.clearDraft(t.channel_id, f.d.ForwardContextMessage), O(M)
  }, [t.channel_id, O, M]), W = r.useCallback(() => (!y || M.length > P || F(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [F, M, P, y]);
  return (0, l.jsxs)(i.mzw, {
    className: v.footerWithMessage,
    children: [(0, l.jsx)("div", {
      className: v.forwardPreviewWrapper,
      children: (0, l.jsx)(b.O, {
        message: t,
        forwardOptions: n,
        channel: S
      })
    }), (0, l.jsxs)("div", {
      className: v.footerWarningWrapper,
      children: [(0, l.jsxs)("div", {
        className: v.footerButtons,
        children: [(0, l.jsx)(d.ZP, {
          innerClassName: v.messageInput,
          onChange: k,
          placeholder: _.intl.string(_.t.ZroO3N),
          channel: S,
          textValue: M,
          richValue: T,
          type: u.Ie.FORWARD_MESSAGE_INPUT,
          onBlur: A,
          onFocus: I,
          focused: R,
          onSubmit: W,
          parentModalKey: p.so,
          autoCompletePosition: "bottom",
          emojiPickerCloseOnModalOuterClick: true,
          disableThemedBackground: true
        }), (0, l.jsx)(s.zx, {
          className: v.sendWithMessage,
          submitting: j,
          disabled: !y || M.length > P,
          onClick: F,
          children: x
        })]
      }), E.length > 0 && M.length > 0 && (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: _.intl.format(_.t.xJFpio, {
          count: E.length,
          channelNames: E.join(", ")
        })
      })]
    })]
  })
}