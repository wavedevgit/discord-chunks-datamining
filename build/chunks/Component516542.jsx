/** Chunk was on 50751 **/
/** chunk id: 516542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: E,
    onSend: v
  } = e, b = (0, f.Z)(), {
    placeholder: S,
    accessibilityLabel: x
  } = (0, u.Z)({
    channel: E
  }), [j, I] = r.useState(() => (0, d.H2)()), {
    textValue: C,
    richValue: Z
  } = j, [N, w] = r.useState(false), T = r.useCallback(() => w(true), []), _ = r.useCallback(() => w(false), []);
  (0, s.ZP)(() => {
    (0, a.ack)(E.id, {
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
    D = r.useCallback(() => (C.length > b || (l.Z.sendMessage(E.id, p.ZP.parse(E, C), false, {
      location: O.dy.OVERLAY
    }), o.Z.setInputLocked(true, m.Z.getTargetPID()), o.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == v || v(C)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [C, b, E, t, v]);
  return (0, i.jsx)("div", {
    className: y.container,
    children: (0, i.jsx)(h.ZP, {
      innerClassName: y.textArea,
      onChange: P,
      placeholder: S,
      accessibilityLabel: x,
      channel: E,
      textValue: C,
      richValue: Z,
      type: c.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: _,
      onFocus: T,
      focused: N,
      onSubmit: D,
      onKeyDown: A,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}