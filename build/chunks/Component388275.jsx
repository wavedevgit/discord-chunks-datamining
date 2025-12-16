/** Chunk was on 33648 **/
/** chunk id: 388275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk430742 = require("./430742.js"),
  Chunk541716 = require("./541716.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk849522 = require("./849522.js"),
  Chunk703558 = require("./703558.js"),
  Chunk784384 = require("./784384.js"),
  Chunk822869 = require("./822869.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk614934 = require("./614934.js");

function f(e) {
  let {
    message: t,
    canSend: n,
    selectedDestinations: f,
    onSend: p,
    inputValue: v,
    setInputValue: x
  } = e, b = (0, o.Z)(), w = (0, c.nm)(f), j = (0, d.Ad)(), {
    textValue: C,
    richValue: y
  } = v, [P, O] = a.useState(false), S = a.useCallback(() => O(true), []), T = a.useCallback(() => O(false), []), k = a.useCallback((e, n, l) => {
    x({
      textValue: n,
      richValue: l
    }), null != t && (r.Z.saveDraft(t.channel_id, n, u.d.ForwardContextMessage), j(t.channel_id, t.id))
  }, [j, t, x]), Z = a.useCallback(() => {
    null != t && (r.Z.clearDraft(t.channel_id, u.d.ForwardContextMessage), p(C))
  }, [t, p, C]), D = a.useCallback(() => (!n || C.length > b || Z(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [Z, C, b, n]);
  return (0, l.jsx)(s.ZP, {
    innerClassName: g.messageInput,
    onChange: k,
    placeholder: m.intl.string(m.t.ZroO3G),
    channel: w,
    textValue: C,
    richValue: y,
    type: i.Ie.FORWARD_MESSAGE_INPUT,
    onBlur: T,
    onFocus: S,
    focused: P,
    onSubmit: D,
    parentModalKey: h.so,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}