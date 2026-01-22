/** Chunk was on 1636 **/
/** chunk id: 840088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk822123 = require("./822123.js"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk203982 = require("./203982.js"),
  Chunk690521 = require("./690521.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx");

function y(e, t) {
  let n = (0, s.Id)(t),
    y = (0, l.bG)([u.A], () => (t.isPrivate() || u.A.can(p.xBc.ADD_REACTIONS, t)) && n, [t, n]),
    O = (0, o.D6)(t.getGuildId());
  if (!d.jW.getSetting() || !y) return null;
  let A = O.filter(e => !g.Ay.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: b.b_.REACTION
  })).slice(0, 12).map((n, l) => {
    var o, s, d;
    return (0, r.jsx)(i.Drp, {
      color: "default",
      id: null != (o = null != (s = n.id) ? s : n.optionallyDiverseSequence) ? o : n.name,
      label: ":".concat(n.name, ":"),
      leadingAccessory: {
        type: "emoji",
        emojiId: n.id,
        src: null == n.id ? g.Ay.getURL(null != (d = n.optionallyDiverseSequence) ? d : "") : true,
        animated: n.animated
      },
      action: () => {
        (0, a.BB)(t.id, e.id, (0, c.jq)(n), a.qN.MESSAGE_CONTEXT_MENU)
      },
      dontCloseOnActionIfHoldingShiftKey: true
    }, l)
  });
  return (0, r.jsx)(i.Drp, {
    id: "add-reaction",
    label: m.intl.string(m.t.lfIHs4),
    action: () => {
      f._.dispatchKeyed(p.zOV.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: true
      })
    },
    color: "default",
    children: (0, r.jsxs)(r.Fragment, {
      children: [A, (0, r.jsx)(i.bXX, {}), (0, r.jsx)(i.Drp, {
        color: "default",
        id: "other-reactions",
        label: m.intl.string(m.t["OBCR+p"]),
        icon: i.nm2,
        action: () => {
          f._.dispatchKeyed(p.zOV.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: true
          })
        }
      })]
    })
  })
}