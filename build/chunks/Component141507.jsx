/** Chunk was on web.js **/
/** chunk id: 141507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk339085 = require("./339085.js"),
  Chunk906411 = require("./906411.js"),
  Chunk438332 = require("./438332.js"),
  Chunk664437 = require("./664437.js"),
  Chunk806966 = require("./806966.js"),
  Chunk65029 = require("./65029.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk543241 = require("./543241.js"),
  Chunk199257 = require("./199257.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886162 = require("./886162.js");
let N = 250;

function P(e) {
  return null != e && "animated" in e
}
let w = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, r = P(t);
    return null != n && r ? C.intl.format(C.t.KFW2aY, {
      guildName: n.name
    }) : null
  },
  R = Chunk473749.memo(function(e) {
    let t, R, D, {
        className: x,
        emojiGrid: L,
        guildId: j,
        pickerIntention: M,
        channel: k
      } = e,
      U = p.kJ.useStore(e => e.inspectedExpressionPosition),
      G = i.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = U;
        return null == (e = L[t]) ? true : e[n]
      }, [L, U]);
    switch (null == G ? true : G.type) {
      case I.ld.EMOJI:
        t = null == G ? true : G.emoji;
        break;
      case I.ld.EXPAND_OR_COLLAPSE_EMOJIS:
        t = {
          type: "EXPAND_OR_COLLAPSE_EMOJI",
          guildId: null == G ? true : G.guildId,
          allNamesString: null == G ? true : G.name
        };
        break;
      case I.ld.SOUNDMOJI:
      default:
        t = null
    }
    let Z = (0, a.e7)([g.Z], () => null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null, [t]),
      F = (0, a.e7)([E.Z], () => E.Z.isFocused()),
      B = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
      V = m.Yk.useSetting(),
      H = (0, O.C1)(j, P(t) ? t : null),
      Y = (0, a.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
      {
        newlyAddedEmojis: W
      } = (0, v.Z)(j, M),
      K = (null == G ? true : G.type) === I.ld.EMOJI ? G.subCategory : T.t0.NONE;
    if (i.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= N && P(t) && K !== T.t0.NONE && (K === T.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === u.B.GUILD && (0, f.Zg)(t.guildId, W[0].id), null != U.source && (0, O.Gn)({
            emoji: t,
            subCategory: K,
            position: G.columnIndex + 1,
            newlyAddedHighlight: K === T.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(j, t.id)
          }))
        }
      }), null == t) return null;
    let z = h.Z.theme;
    if (P(t)) {
      var q;
      let e = null != t.id ? b.ZP.getEmojiURL({
        id: t.id,
        animated: V && t.animated,
        size: 28
      }) : t.url;
      R = "" === e ? (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: A.glyphEmoji,
        children: "surrogates" in t ? t.surrogates : null
      }) : (0, r.jsx)("img", {
        alt: null != (q = (0, y.nY)(t)) ? q : "",
        src: e,
        className: A.emoji
      })
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
      let e = n(187119),
        i = n(39874),
        a = n(853871),
        s = n(63149);
      R = Y.has(t.guildId) ? (0, r.jsx)("img", {
        className: A.icon,
        src: (0, o.wj)(z) ? a : s,
        alt: ""
      }) : (0, r.jsx)("img", {
        className: A.icon,
        src: (0, o.wj)(z) ? e : i,
        alt: ""
      })
    }
    let Q = null != Z ? (0, r.jsx)(S.Z, {
      className: A.__invalid_guildIcon,
      guild: Z,
      shouldAnimate: !B && F
    }) : null;
    D = "EXPAND_OR_COLLAPSE_EMOJI" === t.type ? Y.has(t.guildId) ? C.intl.string(C.t["/K2RDH"]) : C.intl.string(C.t.NZI2Zk) : (0, y.nY)(t);
    let X = w({
      inspectedEmoji: t,
      channel: k,
      guildId: j,
      intention: M,
      guild: Z
    });
    return (0, r.jsx)(_.Z, {
      className: x,
      graphicPrimary: R,
      graphicSecondary: Q,
      titlePrimary: D,
      titleSecondary: X,
      isFavorite: H,
      emojiSubCategory: K
    })
  })