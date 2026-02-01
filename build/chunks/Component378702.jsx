/** Chunk was on 71447 **/
/** chunk id: 378702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk843472 = require("./843472.js"),
  Chunk684013 = require("./684013.js"),
  Chunk334738 = require("./334738.js"),
  Chunk964486 = require("./964486.js"),
  Chunk480870 = require("./480870.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk135621 = require("./135621.js"),
  Chunk395011 = require("./395011.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk433788 = require("./433788.js");

function v(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: v,
    onSend: b
  } = e, E = (0, f.A)(), {
    placeholder: O,
    accessibilityLabel: x
  } = (0, u.A)({
    channel: v
  }), [_, S] = r.useState(() => (0, d.N3)()), {
    textValue: I,
    richValue: j
  } = _, [T, C] = r.useState(false), N = r.useCallback(() => C(true), []), w = r.useCallback(() => C(false), []);
  (0, o.Ay)(() => {
    (0, s.ack)(v.id, {
      section: m.JJy.OVERLAY,
      object: m.ZSU.ACK_INLINE_REPLY,
      objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }, true, true, n)
  });
  let P = r.useCallback((e, t, n) => {
      S({
        textValue: t,
        richValue: n
      })
    }, []),
    D = r.useCallback(e => {
      "Escape" === e.key && a.A.updateNotificationStatus(t, m.yFH.ACTIVE)
    }, [t]),
    R = r.useCallback(() => (I.length > E || (l.A.sendMessage(v.id, p.Ay.parse(v, I), false, {
      location: y.Hx.OVERLAY
    }), a.A.setInputLocked(true, g.A.getTargetPID()), a.A.updateNotificationStatus(t, m.yFH.DISMISSED), null == b || b(I)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [I, E, v, t, b]);
  return (0, i.jsx)("div", {
    className: A.k,
    children: (0, i.jsx)(h.Ay, {
      innerClassName: A.T,
      onChange: P,
      placeholder: O,
      accessibilityLabel: x,
      channel: v,
      textValue: I,
      richValue: j,
      type: c.oU.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: w,
      onFocus: N,
      focused: T,
      onSubmit: R,
      onKeyDown: D,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}