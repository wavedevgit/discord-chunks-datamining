/** Chunk was on 50751 **/
/** chunk id: 516542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk572985 = require("./572985.js");

function v(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: v,
    onSend: E
  } = e, b = (0, f.Z)(), {
    placeholder: _,
    accessibilityLabel: S
  } = (0, c.Z)({
    channel: v
  }), [x, I] = r.useState(() => (0, d.H2)()), {
    textValue: C,
    richValue: j
  } = x, [N, Z] = r.useState(false), w = r.useCallback(() => Z(true), []), T = r.useCallback(() => Z(false), []);
  (0, s.ZP)(() => {
    (0, a.ack)(v.id, {
      section: g.jXE.OVERLAY,
      object: g.qAy.ACK_INLINE_REPLY,
      objectType: g.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }, true, true, n)
  });
  let P = r.useCallback((e, t, n) => {
      I({
        textValue: t,
        richValue: n
      })
    }, []),
    A = r.useCallback(e => {
      "Escape" === e.key && o.Z.updateNotificationStatus(t, g._1z.ACTIVE)
    }, [t]),
    k = r.useCallback(() => (C.length > b || (l.Z.sendMessage(v.id, p.ZP.parse(v, C), false, {
      location: y.dy.OVERLAY
    }), o.Z.setInputLocked(true, m.Z.getTargetPID()), o.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == E || E(C)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [C, b, v, t, E]);
  return (0, i.jsx)("div", {
    className: O.container,
    children: (0, i.jsx)(h.ZP, {
      innerClassName: O.textArea,
      onChange: P,
      placeholder: _,
      accessibilityLabel: S,
      channel: v,
      textValue: C,
      richValue: j,
      type: u.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: T,
      onFocus: w,
      focused: N,
      onSubmit: k,
      onKeyDown: A,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}