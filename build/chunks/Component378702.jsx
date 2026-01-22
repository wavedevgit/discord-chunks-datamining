/** Chunk was on 71447 **/
/** chunk id: 378702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function O(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: O,
    onSend: E
  } = e, v = (0, f.A)(), {
    placeholder: b,
    accessibilityLabel: S
  } = (0, c.A)({
    channel: O
  }), [x, j] = r.useState(() => (0, d.N3)()), {
    textValue: I,
    richValue: N
  } = x, [w, T] = r.useState(false), C = r.useCallback(() => T(true), []), _ = r.useCallback(() => T(false), []);
  (0, s.Ay)(() => {
    (0, o.ack)(O.id, {
      section: g.JJy.OVERLAY,
      object: g.ZSU.ACK_INLINE_REPLY,
      objectType: g.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }, true, true, n)
  });
  let P = r.useCallback((e, t, n) => {
      j({
        textValue: t,
        richValue: n
      })
    }, []),
    D = r.useCallback(e => {
      "Escape" === e.key && a.A.updateNotificationStatus(t, g.yFH.ACTIVE)
    }, [t]),
    R = r.useCallback(() => (I.length > v || (l.A.sendMessage(O.id, h.Ay.parse(O, I), false, {
      location: y.Hx.OVERLAY
    }), a.A.setInputLocked(true, m.A.getTargetPID()), a.A.updateNotificationStatus(t, g.yFH.DISMISSED), null == E || E(I)), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), [I, v, O, t, E]);
  return (0, i.jsx)("div", {
    className: A.k,
    children: (0, i.jsx)(p.Ay, {
      innerClassName: A.T,
      onChange: P,
      placeholder: b,
      accessibilityLabel: S,
      channel: O,
      textValue: I,
      richValue: N,
      type: u.oU.OVERLAY_INLINE_REPLY,
      allowNewLines: false,
      onBlur: _,
      onFocus: C,
      focused: w,
      onSubmit: R,
      onKeyDown: D,
      autoCompletePosition: "bottom",
      disableThemedBackground: true
    })
  })
}