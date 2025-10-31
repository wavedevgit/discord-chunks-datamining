/** Chunk was on web.js **/
/** chunk id: 141507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk392552 = require("./392552.js"),
  Chunk543241 = require("./543241.js"),
  Chunk199257 = require("./199257.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545424 = require("./545424.js");
let R = 250;

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
  D = Chunk647438.memo(function(e) {
    let t, D, x, {
        className: L,
        emojiGrid: M,
        guildId: j,
        pickerIntention: k,
        channel: U
      } = e,
      {
        enabled: G
      } = O.Z.useExperiment({
        location: "EmojiPicker"
      }, {
        autoTrackExposure: false
      }),
      B = _.kJ.useStore(e => e.inspectedExpressionPosition),
      Z = i.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = B;
        return null == (e = M[t]) ? true : e[n]
      }, [M, B]);
    switch (null == Z ? true : Z.type) {
      case S.ld.EMOJI:
        t = null == Z ? true : Z.emoji;
        break;
      case S.ld.EXPAND_OR_COLLAPSE_EMOJIS:
        t = {
          type: "EXPAND_OR_COLLAPSE_EMOJI",
          guildId: null == Z ? true : Z.guildId,
          allNamesString: null == Z ? true : Z.name
        };
        break;
      case S.ld.SOUNDMOJI:
        t = null;
        break;
      case S.ld.CREATE_EMOJI:
      default:
        t = {
          type: "CREATE_EMOJI",
          guildId: null == Z ? true : Z.guildId,
          allNamesString: null == Z ? true : Z.name
        }
    }
    let F = (0, a.e7)([g.Z], () => null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null, [t]),
      V = (0, a.e7)([E.Z], () => E.Z.isFocused()),
      H = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
      Y = m.Yk.useSetting(),
      W = (0, v.C1)(j, P(t) ? t : null),
      K = (0, a.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
      {
        newlyAddedEmojis: z
      } = (0, I.Z)(j, k),
      q = (null == Z ? true : Z.type) === S.ld.EMOJI ? Z.subCategory : A.t0.NONE;
    if (i.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= R && P(t) && q !== A.t0.NONE && (q === A.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === u.B.GUILD && (0, f.Zg)(t.guildId, z[0].id), null != B.source && (0, v.Gn)({
            emoji: t,
            subCategory: q,
            position: Z.columnIndex + 1,
            newlyAddedHighlight: q === A.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(j, t.id)
          }))
        }
      }), null == t) return null;
    let X = h.Z.theme;
    if (P(t)) {
      var Q;
      let e = null != t.id ? b.ZP.getEmojiURL({
        id: t.id,
        animated: Y && t.animated,
        size: 28
      }) : t.url;
      D = "" === e ? (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: N.glyphEmoji,
        children: "surrogates" in t ? t.surrogates : null
      }) : (0, r.jsx)("img", {
        alt: null != (Q = (0, y.nY)(t)) ? Q : "",
        src: e,
        className: N.emoji
      })
    } else if ("CREATE_EMOJI" === t.type) D = (0, r.jsx)(s.oFk, {
      size: "md",
      color: "currentColor",
      className: N.icon,
      colorClass: N.icon
    });
    else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
      let e = n(187119),
        i = n(39874),
        a = n(853871),
        s = n(63149);
      D = K.has(t.guildId) ? (0, r.jsx)("img", {
        className: N.icon,
        src: (0, o.wj)(X) ? a : s,
        alt: ""
      }) : (0, r.jsx)("img", {
        className: N.icon,
        src: (0, o.wj)(X) ? e : i,
        alt: ""
      })
    }
    let J = null != F ? (0, r.jsx)(T.Z, {
      className: N.__invalid_guildIcon,
      guild: F,
      shouldAnimate: !H && V
    }) : null;
    x = G && "CREATE_EMOJI" === t.type ? C.intl.string(C.t.XCmLfG) : "EXPAND_OR_COLLAPSE_EMOJI" === t.type ? K.has(t.guildId) ? C.intl.string(C.t["/K2RDH"]) : C.intl.string(C.t.NZI2Zk) : (0, y.nY)(t);
    let $ = G && "CREATE_EMOJI" === t.type ? C.intl.string(C.t["Z/r7IS"]) : w({
      inspectedEmoji: t,
      channel: U,
      guildId: j,
      intention: k,
      guild: F
    });
    return (0, r.jsx)(p.Z, {
      className: L,
      graphicPrimary: D,
      graphicSecondary: J,
      titlePrimary: x,
      titleSecondary: $,
      isFavorite: W,
      emojiSubCategory: q
    })
  })