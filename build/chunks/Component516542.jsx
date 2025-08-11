/** Chunk was on 89298 **/
/** chunk id: 516542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk904245 = require("./904245.js"),
  Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js"),
  Chunk655687 = require("./655687.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk849522 = require("./849522.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk842304 = require("./842304.js");

function O(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: O,
    onSend: b
  } = e, v = (0, h.Z)(), {
    placeholder: E,
    accessibilityLabel: _
  } = (0, c.Z)({
    channel: O
  }), [x, S] = r.useState(() => (0, d.H2)()), {
    textValue: I,
    richValue: j
  } = x, [C, N] = r.useState(false), w = r.useCallback(() => N(true), []), Z = r.useCallback(() => N(false), []);
  (0, s.ZP)(() => {
    (0, a.In)(O.id, {
      section: g.jXE.OVERLAY,
      object: g.qAy.ACK_INLINE_REPLY,
      objectType: g.Qqv.ACK_SEMI_AUTOMATIC
    }, true, true, n)
  });
  let P = r.useCallback((e, t, n) => {
      S({
        textValue: t,
        richValue: n
      })
    }, []),
    T = r.useCallback(e => {
      "Escape" === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE)
    }, [t]),
    A = r.useCallback(() => (I.length > v || (o.Z.sendMessage(O.id, f.ZP.parse(O, I), false), l.Z.setInputLocked(true, (0, m.getPID)()), l.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == b || b(I)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [I, v, O, t, b]);
  return (0, i.jsx)("div", {
    className: y.container,
    children: (0, i.jsx)(p.ZP, {
      innerClassName: y.textArea,
      onChange: P,
      placeholder: E,
      accessibilityLabel: _,
      channel: O,
      textValue: I,
      richValue: j,
      type: u.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: Z,
      onFocus: w,
      focused: C,
      onSubmit: A,
      onKeyDown: T,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}