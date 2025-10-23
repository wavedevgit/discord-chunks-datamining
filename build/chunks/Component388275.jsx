/** Chunk was on 9797 **/
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
  Chunk773921 = require("./773921.js");

function f(e) {
  let {
    message: t,
    canSend: n,
    selectedDestinations: f,
    onSend: _,
    inputValue: w,
    setInputValue: p
  } = e, b = (0, o.Z)(), v = (0, u.nm)(f), x = (0, d.Ad)(), {
    textValue: y,
    richValue: C
  } = w, [O, P] = l.useState(false), S = l.useCallback(() => P(true), []), j = l.useCallback(() => P(false), []), E = l.useCallback((e, n, a) => {
    p({
      textValue: n,
      richValue: a
    }), r.Z.saveDraft(t.channel_id, n, c.d.ForwardContextMessage), x(t.channel_id, t.id)
  }, [x, t, p]), T = l.useCallback(() => {
    r.Z.clearDraft(t.channel_id, c.d.ForwardContextMessage), _(y)
  }, [t.channel_id, _, y]), I = l.useCallback(() => (!n || y.length > b || T(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [T, y, b, n]);
  return (0, a.jsx)(s.ZP, {
    innerClassName: g.messageInput,
    onChange: E,
    placeholder: m.intl.string(m.t.ZroO3G),
    channel: v,
    textValue: y,
    richValue: C,
    type: i.Ie.FORWARD_MESSAGE_INPUT,
    onBlur: j,
    onFocus: S,
    focused: O,
    onSubmit: I,
    parentModalKey: h.so,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}