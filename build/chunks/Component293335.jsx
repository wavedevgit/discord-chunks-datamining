/** Chunk was on 37220 **/
/** chunk id: 293335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk543241 = require("./543241.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk585483 = require("./585483.js"),
  Chunk176354 = require("./176354.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t) {
  let n = (0, c.$R)(t),
    y = (0, i.e7)([d.Z], () => (t.isPrivate() || d.Z.can(p.Plq.ADD_REACTIONS, t)) && n, [t, n]),
    O = (0, o.MZ)(t.getGuildId());
  if (!u.nc.getSetting() || !y) return null;
  let h = O.filter(e => !g.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: b.Hz.REACTION
  })).slice(0, 12).map((n, i) => {
    var o, c, u;
    return (0, r.jsx)(l.sNh, {
      color: "default",
      id: null != (c = null != (o = n.id) ? o : n.optionallyDiverseSequence) ? c : n.name,
      label: ":".concat(n.name, ":"),
      leadingAccessory: {
        type: "emoji",
        emojiId: n.id,
        src: null == n.id ? g.ZP.getURL(null != (u = n.optionallyDiverseSequence) ? u : "") : true,
        animated: n.animated
      },
      action: () => {
        (0, a.rU)(t.id, e.id, (0, s.g1)(n), a.TW.MESSAGE_CONTEXT_MENU)
      },
      dontCloseOnActionIfHoldingShiftKey: true
    }, i)
  });
  return (0, r.jsx)(l.sNh, {
    id: "add-reaction",
    label: m.intl.string(m.t.lfIHs4),
    action: () => {
      f.S.dispatchKeyed(p.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: true
      })
    },
    color: "default",
    children: (0, r.jsxs)(r.Fragment, {
      children: [h, (0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.sNh, {
        color: "default",
        id: "other-reactions",
        label: m.intl.string(m.t["OBCR+p"]),
        icon: l.EO4,
        action: () => {
          f.S.dispatchKeyed(p.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: true
          })
        }
      })]
    })
  })
}