/** Chunk was on 8818 **/
/** chunk id: 388275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk430742 = require("./430742.js"),
  Chunk541716 = require("./541716.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk849522 = require("./849522.js"),
  Chunk703558 = require("./703558.js"),
  Chunk784384 = require("./784384.js"),
  Chunk822869 = require("./822869.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132358 = require("./132358.js");

function f(e) {
  let {
    message: t,
    canSend: n,
    selectedDestinations: f,
    onSend: _,
    inputValue: p,
    setInputValue: b
  } = e, w = (0, o.Z)(), v = (0, u.nm)(f), x = (0, d.Ad)(), {
    textValue: y,
    richValue: P
  } = p, [C, j] = l.useState(false), O = l.useCallback(() => j(true), []), I = l.useCallback(() => j(false), []), S = l.useCallback((e, n, a) => {
    b({
      textValue: n,
      richValue: a
    }), r.Z.saveDraft(t.channel_id, n, c.d.ForwardContextMessage), x(t.channel_id, t.id)
  }, [x, t, b]), Z = l.useCallback(() => {
    r.Z.clearDraft(t.channel_id, c.d.ForwardContextMessage), _(y)
  }, [t.channel_id, _, y]), R = l.useCallback(() => (!n || y.length > w || Z(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [Z, y, w, n]);
  return (0, a.jsx)(s.ZP, {
    innerClassName: g.messageInput,
    onChange: S,
    placeholder: m.intl.string(m.t.ZroO3N),
    channel: v,
    textValue: y,
    richValue: P,
    type: i.Ie.FORWARD_MESSAGE_INPUT,
    onBlur: I,
    onFocus: O,
    focused: C,
    onSubmit: R,
    parentModalKey: h.so,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}