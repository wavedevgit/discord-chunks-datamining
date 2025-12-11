/** Chunk was on 50751 **/
/** chunk id: 516542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk610394 = require("./610394.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk198201 = require("./198201.js");

function O(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: O,
    onSend: v
  } = e, E = (0, p.Z)(), {
    placeholder: S,
    accessibilityLabel: x
  } = (0, c.Z)({
    channel: O
  }), [I, C] = r.useState(() => (0, d.H2)()), {
    textValue: j,
    richValue: _
  } = I, [Z, N] = r.useState(false), w = r.useCallback(() => N(true), []), T = r.useCallback(() => N(false), []);
  (0, s.ZP)(() => {
    (0, o.ack)(O.id, {
      section: g.jXE.OVERLAY,
      object: g.qAy.ACK_INLINE_REPLY,
      objectType: g.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }, true, true, n)
  });
  let P = r.useCallback((e, t, n) => {
      C({
        textValue: t,
        richValue: n
      })
    }, []),
    A = r.useCallback(e => {
      "Escape" === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE)
    }, [t]),
    k = r.useCallback(() => (j.length > E || (a.Z.sendMessage(O.id, h.ZP.parse(O, j), false, {
      location: b.dy.OVERLAY
    }), l.Z.setInputLocked(true, m.Z.getTargetPID()), l.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == v || v(j)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [j, E, O, t, v]);
  return (0, i.jsx)("div", {
    className: y.container,
    children: (0, i.jsx)(f.ZP, {
      innerClassName: y.textArea,
      onChange: P,
      placeholder: S,
      accessibilityLabel: x,
      channel: O,
      textValue: j,
      richValue: _,
      type: u.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: T,
      onFocus: w,
      focused: Z,
      onSubmit: k,
      onKeyDown: A,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}