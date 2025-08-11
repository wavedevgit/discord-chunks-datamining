/** Chunk was on 89298 **/
/** chunk id: 516542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk959517 = require("./959517.js"),
  Chunk842304 = require("./842304.js");

function b(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: b,
    onSend: v
  } = e, E = (0, h.Z)(), {
    placeholder: _,
    accessibilityLabel: x
  } = (0, c.Z)({
    channel: b
  }), [S, I] = r.useState(() => (0, d.H2)()), {
    textValue: j,
    richValue: C
  } = S, [N, w] = r.useState(false), Z = r.useCallback(() => w(true), []), P = r.useCallback(() => w(false), []);
  (0, s.ZP)(() => {
    (0, a.In)(b.id, {
      section: g.jXE.OVERLAY,
      object: g.qAy.ACK_INLINE_REPLY,
      objectType: g.Qqv.ACK_SEMI_AUTOMATIC
    }, true, true, n)
  });
  let T = r.useCallback((e, t, n) => {
      I({
        textValue: t,
        richValue: n
      })
    }, []),
    A = r.useCallback(e => {
      "Escape" === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE)
    }, [t]),
    k = r.useCallback(() => (j.length > E || (o.Z.sendMessage(b.id, f.ZP.parse(b, j), false, {
      location: y.dy.OVERLAY
    }), l.Z.setInputLocked(true, (0, m.getPID)()), l.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == v || v(j)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [j, E, b, t, v]);
  return (0, i.jsx)("div", {
    className: O.container,
    children: (0, i.jsx)(p.ZP, {
      innerClassName: O.textArea,
      onChange: T,
      placeholder: _,
      accessibilityLabel: x,
      channel: b,
      textValue: j,
      richValue: C,
      type: u.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: P,
      onFocus: Z,
      focused: N,
      onSubmit: k,
      onKeyDown: A,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}