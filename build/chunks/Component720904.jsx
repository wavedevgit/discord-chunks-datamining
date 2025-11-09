/** Chunk was on 37220 **/
/** chunk id: 720904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./781311.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk543241 = require("./543241.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk174852 = require("./174852.js");
let j = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function S(e) {
  let {
    emoji: t,
    isFocused: n
  } = e, {
    animated: i,
    src: a,
    surrogates: s
  } = t;
  return null == a && null != t.id ? a = p.ZP.getEmojiURL({
    id: t.id,
    animated: !!i,
    size: 20
  }) : null == a && (a = y.ZP.getURL(s)), (0, r.jsx)(o.u, {
    text: (0, y.nY)(t),
    hideOnClick: true,
    spacing: 16,
    forceOpen: n,
    children: (0, r.jsx)("div", {
      "aria-label": m.intl.formatToPlainString(m.t["/iYSo6"], {
        emojiName: t.name
      }),
      className: l()(v.button, {
        [v.focused]: n
      }),
      children: null == a || "" === a.trim() ? (0, r.jsx)("span", {
        className: l()("emoji", "emoji-text", v.icon),
        children: s
      }) : (0, r.jsx)("img", {
        className: v.icon,
        src: a,
        alt: ""
      })
    })
  })
}

function E(e, t) {
  let n = (0, c.MZ)(t.guild_id).filter(e => {
    var n;
    return !(e.useSpriteSheet && j.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) && !y.ZP.isEmojiPremiumLocked({
      emoji: e,
      channel: t,
      intention: h.Hz.REACTION
    })
  });
  n.length > 4 && (n.length = 4);
  let i = g.nc.useSetting(),
    l = (0, f.$R)(t);
  return (0, a.e7)([b.Z], () => i && l && (t.isPrivate() || b.Z.can(O.Plq.ADD_REACTIONS, t)), [t, l, i]) && n.length > 0 ? (0, r.jsx)(s.kSQ, {
    className: v.wrapper,
    children: n.map((n, i) => {
      var l;
      return (0, r.jsx)(s.sNh, {
        id: "quickreact-".concat(null != (l = n.id) ? l : i),
        render: e => {
          let {
            isFocused: t
          } = e;
          return (0, r.jsx)(S, {
            emoji: n,
            isFocused: t
          })
        },
        action: () => {
          (0, u.rU)(t.id, e.id, (0, d.g1)(n), u.TW.MESSAGE_CONTEXT_MENU)
        },
        dontCloseOnActionIfHoldingShiftKey: true
      }, i)
    })
  }) : null
}