/** Chunk was on 1636 **/
/** chunk id: 982308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./733351.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk822123 = require("./822123.js"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk852620 = require("./852620.js");
let h = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function j(e) {
  let {
    emoji: t,
    isFocused: n
  } = e, {
    animated: i,
    src: a,
    surrogates: c
  } = t;
  return null == a && null != t.id ? a = y.Ay.getEmojiURL({
    id: t.id,
    animated: !!i,
    size: 20
  }) : null == a && (a = b.Ay.getURL(c)), (0, r.jsx)(o.m, {
    text: (0, b.N)(t),
    hideOnClick: true,
    spacing: 16,
    forceOpen: n,
    children: (0, r.jsx)("div", {
      "aria-label": O.intl.formatToPlainString(O.t["/iYSo6"], {
        emojiName: t.name
      }),
      className: l()(v.x6, {
        [v.in]: n
      }),
      children: null == a || "" === a.trim() ? (0, r.jsx)("span", {
        className: l()("emoji", "emoji-text", v.Kk),
        children: c
      }) : (0, r.jsx)("img", {
        className: v.Kk,
        src: a,
        alt: ""
      })
    })
  })
}

function E(e, t) {
  let n = (0, s.D6)(t.guild_id).filter(e => {
    var n;
    return !(e.useSpriteSheet && h.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) && !b.Ay.isEmojiPremiumLocked({
      emoji: e,
      channel: t,
      intention: m.b_.REACTION
    })
  });
  n.length > 4 && (n.length = 4);
  let i = p.jW.useSetting(),
    l = (0, g.Id)(t);
  return (0, a.bG)([f.A], () => i && l && (t.isPrivate() || f.A.can(A.xBc.ADD_REACTIONS, t)), [t, l, i]) && n.length > 0 ? (0, r.jsx)(c.rXV, {
    className: v.iE,
    children: n.map((n, i) => {
      var l;
      return (0, r.jsx)(c.Drp, {
        id: "quickreact-".concat(null != (l = n.id) ? l : i),
        render: e => {
          let {
            isFocused: t
          } = e;
          return (0, r.jsx)(j, {
            emoji: n,
            isFocused: t
          })
        },
        action: () => {
          (0, d.BB)(t.id, e.id, (0, u.jq)(n), d.qN.MESSAGE_CONTEXT_MENU)
        },
        dontCloseOnActionIfHoldingShiftKey: true
      }, i)
    })
  }) : null
}