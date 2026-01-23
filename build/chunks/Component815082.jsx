/** Chunk was on web.js **/
/** chunk id: 815082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk508675 = require("./508675.js"),
  Chunk770335 = require("./770335.js"),
  Chunk598770 = require("./598770.js"),
  Chunk451731 = require("./451731.js"),
  Chunk850992 = require("./850992.js"),
  Chunk338464 = require("./338464.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk71393 = require("./71393.js"),
  Chunk531685 = require("./531685.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk822123 = require("./822123.js"),
  Chunk316884 = require("./316884.js"),
  Chunk724511 = require("./724511.jsx"),
  Chunk484333 = require("./484333.js"),
  Chunk732139 = require("./732139.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk702888 = require("./702888.js");
let N = 250;

function R(e) {
  return null != e && "animated" in e
}
let w = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, r = R(t);
    return null != n && r ? T.intl.format(T.t.KFW2aY, {
      guildName: n.name
    }) : null
  },
  P = Chunk64700.memo(function(e) {
    let t, P, D, {
        className: x,
        emojiGrid: L,
        guildId: j,
        pickerIntention: M,
        channel: k
      } = e,
      U = p.Om.useStore(e => e.inspectedExpressionPosition),
      G = i.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = U;
        return null == (e = L[t]) ? true : e[n]
      }, [L, U]);
    switch (null == G ? true : G.type) {
      case I.bm.EMOJI:
        t = null == G ? true : G.emoji;
        break;
      case I.bm.EXPAND_OR_COLLAPSE_EMOJIS:
        t = {
          type: "EXPAND_OR_COLLAPSE_EMOJI",
          guildId: null == G ? true : G.guildId,
          allNamesString: null == G ? true : G.name
        };
        break;
      case I.bm.SOUNDMOJI:
      default:
        t = null
    }
    let V = (0, a.bG)([g.A], () => null !== t && t.type === u.i.GUILD ? g.A.getGuild(t.guildId) : null, [t]),
      F = (0, a.bG)([E.A], () => E.A.isFocused()),
      B = (0, a.bG)([l.A], () => l.A.useReducedMotion, []),
      H = m.Sf.useSetting(),
      Y = (0, O.O7)(j, R(t) ? t : null),
      W = (0, a.bG)([c.Ay], () => c.Ay.expandedSectionsByGuildIds),
      {
        newlyAddedEmojis: K
      } = (0, v.A)(j, M),
      z = (null == G ? true : G.type) === I.bm.EMOJI ? G.subCategory : S.tm.NONE;
    if (i.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= N && R(t) && z !== S.tm.NONE && (z === S.tm.NEWLY_ADDED_EMOJI && null !== t && t.type === u.i.GUILD && (0, f.mz)(t.guildId, K[0].id), null != U.source && (0, O.yB)({
            emoji: t,
            subCategory: z,
            position: G.columnIndex + 1,
            newlyAddedHighlight: z === S.tm.NEWLY_ADDED_EMOJI && d.A.isNewerThanLastSeen(j, t.id)
          }))
        }
      }), null == t) return null;
    let q = h.A.theme;
    if (R(t)) {
      var X;
      let e = null != t.id ? y.Ay.getEmojiURL({
        id: t.id,
        animated: H && t.animated,
        size: 28
      }) : t.url;
      P = "" === e ? (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: C.J_,
        children: "surrogates" in t ? t.surrogates : null
      }) : (0, r.jsx)("img", {
        alt: null != (X = (0, b.N)(t)) ? X : "",
        src: e,
        className: C.Zg
      })
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
      let e = n(619508),
        i = n(404828),
        a = n(600003),
        o = n(318121);
      P = W.has(t.guildId) ? (0, r.jsx)("img", {
        className: C.Kk,
        src: (0, s.Mw)(q) ? a : o,
        alt: ""
      }) : (0, r.jsx)("img", {
        className: C.Kk,
        src: (0, s.Mw)(q) ? e : i,
        alt: ""
      })
    }
    let Z = null != V ? (0, r.jsx)(A.A, {
      className: C.__invalid_guildIcon,
      guild: V,
      shouldAnimate: !B && F
    }) : null;
    D = "EXPAND_OR_COLLAPSE_EMOJI" === t.type ? W.has(t.guildId) ? T.intl.string(T.t["/K2RDH"]) : T.intl.string(T.t.NZI2Zk) : (0, b.N)(t);
    let Q = w({
      inspectedEmoji: t,
      channel: k,
      guildId: j,
      intention: M,
      guild: V
    });
    return (0, r.jsx)(_.A, {
      className: x,
      graphicPrimary: P,
      graphicSecondary: Z,
      titlePrimary: D,
      titleSecondary: Q,
      isFavorite: Y,
      emojiSubCategory: z
    })
  })