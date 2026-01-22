/** Chunk was on 43622 **/
/** chunk id: 190338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk465532 = require("./465532.js"),
  Chunk355622 = require("./355622.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk135621 = require("./135621.js"),
  Chunk31717 = require("./31717.js"),
  Chunk513480 = require("./513480.js"),
  Chunk530912 = require("./530912.js"),
  Chunk294454 = require("./294454.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk967789 = require("./967789.js");

function g(e) {
  let {
    message: t,
    canSend: n,
    selectedDestinations: g,
    onSend: p,
    inputValue: b,
    setInputValue: x
  } = e, y = (0, o.A)(), v = (0, c.QK)(g), C = (0, d.VF)(), {
    textValue: j,
    richValue: w
  } = b, [O, A] = r.useState(false), S = r.useCallback(() => A(true), []), T = r.useCallback(() => A(false), []), P = r.useCallback((e, n, l) => {
    x({
      textValue: n,
      richValue: l
    }), null != t && (a.A.saveDraft(t.channel_id, n, u.C.ForwardContextMessage), C(t.channel_id, t.id))
  }, [C, t, x]), k = r.useCallback(() => {
    null != t && (a.A.clearDraft(t.channel_id, u.C.ForwardContextMessage), p(j))
  }, [t, p, j]), R = r.useCallback(() => (!n || j.length > y || k(), Promise.resolve({
    shouldClear: false,
    shouldRefocus: true
  })), [k, j, y, n]);
  return (0, l.jsx)(s.Ay, {
    innerClassName: f.OG,
    onChange: P,
    placeholder: m.intl.string(m.t.ZroO3G),
    channel: v,
    textValue: j,
    richValue: w,
    type: i.oU.FORWARD_MESSAGE_INPUT,
    onBlur: T,
    onFocus: S,
    focused: O,
    onSubmit: R,
    parentModalKey: h.aU,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}