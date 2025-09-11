/** Chunk was on 8818 **/
/** chunk id: 388275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => v
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
  Chunk132358 = require("./132358.js");

function v(e) {
  let {
    message: t,
    forwardOptions: n,
    sendLabel: v,
    canSend: x,
    selectedDestinations: j,
    isSending: y,
    onSend: P
  } = e, C = (0, h.Z)(), O = (0, g.nm)(j), R = (0, g.y)(j), S = (0, f.Ad)(), k = (0, r.e7)([m.Z], () => m.Z.getDraft(t.channel_id, m.d.ForwardContextMessage)), [I, Z] = l.useState(() => (0, u.eK)(k)), {
    textValue: M,
    richValue: N
  } = I, [T, D] = l.useState(false), W = l.useCallback(() => D(true), []), E = l.useCallback(() => D(false), []), F = l.useCallback((e, n, a) => {
    Z({
      textValue: n,
      richValue: a
    }), o.Z.saveDraft(t.channel_id, n, m.d.ForwardContextMessage), S(t.channel_id, t.id)
  }, [S, t]), L = l.useCallback(() => {
    o.Z.clearDraft(t.channel_id, m.d.ForwardContextMessage), P(M)
  }, [t.channel_id, P, M]), A = l.useCallback(() => (!x || M.length > C || L(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [L, M, C, x]);
  return (0, a.jsxs)(i.mzw, {
    className: b.footerWithMessage,
    children: [(0, a.jsx)("div", {
      className: b.forwardPreviewWrapper,
      children: (0, a.jsx)(p.O, {
        message: t,
        forwardOptions: n,
        channel: O
      })
    }), (0, a.jsxs)("div", {
      className: b.footerWarningWrapper,
      children: [(0, a.jsxs)("div", {
        className: b.footerButtons,
        children: [(0, a.jsx)(d.ZP, {
          innerClassName: b.messageInput,
          onChange: F,
          placeholder: w.intl.string(w.t.ZroO3N),
          channel: O,
          textValue: M,
          richValue: N,
          type: c.Ie.FORWARD_MESSAGE_INPUT,
          onBlur: E,
          onFocus: W,
          focused: T,
          onSubmit: A,
          parentModalKey: _.so,
          autoCompletePosition: "bottom",
          emojiPickerCloseOnModalOuterClick: true,
          disableThemedBackground: true
        }), (0, a.jsx)(s.zx, {
          className: b.sendWithMessage,
          submitting: y,
          disabled: !x || M.length > C,
          onClick: L,
          children: v
        })]
      }), R.length > 0 && M.length > 0 && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: w.intl.format(w.t.xJFpio, {
          count: R.length,
          channelNames: R.join(", ")
        })
      })]
    })]
  })
}