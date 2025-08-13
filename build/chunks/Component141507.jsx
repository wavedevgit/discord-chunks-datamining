/** Chunk was on web.js **/
/** chunk id: 141507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk392552 = require("./392552.js"),
  Chunk543241 = require("./543241.js"),
  Chunk199257 = require("./199257.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356094 = require("./356094.js");
let C = 250;

function R(e) {
  return null != e && "animated" in e
}
let P = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, r = R(t);
    return null != n && r ? A.intl.format(A.t.KFW2aW, {
      guildName: n.name
    }) : null
  },
  w = Chunk73800.memo(function(e) {
    let t, w, D, {
        className: L,
        emojiGrid: x,
        guildId: M,
        pickerIntention: j,
        channel: k
      } = e,
      {
        enabled: U
      } = y.Z.useExperiment({
        location: "EmojiPicker"
      }, {
        autoTrackExposure: false
      }),
      G = _.kJ.useStore(e => e.inspectedExpressionPosition),
      B = i.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = G;
        return null == (e = x[t]) ? true : e[n]
      }, [x, G]);
    switch (null == B ? true : B.type) {
      case T.ld.EMOJI:
        t = null == B ? true : B.emoji;
        break;
      case T.ld.EXPAND_OR_COLLAPSE_EMOJIS:
        t = {
          type: "EXPAND_OR_COLLAPSE_EMOJI",
          guildId: null == B ? true : B.guildId,
          allNamesString: null == B ? true : B.name
        };
        break;
      case T.ld.SOUNDMOJI:
        t = null;
        break;
      case T.ld.CREATE_EMOJI:
      default:
        t = {
          type: "CREATE_EMOJI",
          guildId: null == B ? true : B.guildId,
          allNamesString: null == B ? true : B.name
        }
    }
    let Z = (0, o.e7)([g.Z], () => null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null, [t]),
      F = (0, o.e7)([E.Z], () => E.Z.isFocused()),
      V = (0, o.e7)([l.Z], () => l.Z.useReducedMotion, []),
      H = m.Yk.useSetting(),
      Y = (0, O.C1)(M, R(t) ? t : null),
      W = (0, o.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
      {
        newlyAddedEmojis: K
      } = (0, v.Z)(M, j),
      z = (null == B ? true : B.type) === T.ld.EMOJI ? B.subCategory : S.t0.NONE;
    if (i.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= C && R(t) && z !== S.t0.NONE && (z === S.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === u.B.GUILD && (0, f.Zg)(t.guildId, K[0].id), null != G.source && (0, O.Gn)({
            emoji: t,
            subCategory: z,
            position: B.columnIndex + 1,
            newlyAddedHighlight: z === S.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(M, t.id)
          }))
        }
      }), null == t) return null;
    let q = h.Z.theme;
    if (R(t)) {
      var X;
      let e = null != t.id ? b.ZP.getEmojiURL({
        id: t.id,
        animated: H && t.animated,
        size: 28
      }) : t.url;
      w = "" === e ? (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: N.glyphEmoji,
        children: "surrogates" in t ? t.surrogates : null
      }) : (0, r.jsx)("img", {
        alt: null != (X = t.allNamesString) ? X : "",
        src: e,
        className: N.emoji
      })
    } else if ("CREATE_EMOJI" === t.type) w = (0, r.jsx)(s.oFk, {
      size: "md",
      color: "currentColor",
      className: N.icon,
      colorClass: N.icon
    });
    else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
      let e = n(187119),
        i = n(39874),
        o = n(853871),
        s = n(63149);
      w = W.has(t.guildId) ? (0, r.jsx)("img", {
        className: N.icon,
        src: (0, a.wj)(q) ? o : s,
        alt: ""
      }) : (0, r.jsx)("img", {
        className: N.icon,
        src: (0, a.wj)(q) ? e : i,
        alt: ""
      })
    }
    let Q = null != Z ? (0, r.jsx)(I.Z, {
      className: N.__invalid_guildIcon,
      guild: Z,
      shouldAnimate: !V && F
    }) : null;
    D = U && "CREATE_EMOJI" === t.type ? A.intl.string(A.t.XCmLfH) : "EXPAND_OR_COLLAPSE_EMOJI" === t.type ? W.has(t.guildId) ? A.intl.string(A.t["/K2RDA"]) : A.intl.string(A.t.NZI2Zm) : t.allNamesString;
    let J = U && "CREATE_EMOJI" === t.type ? A.intl.string(A.t["Z/r7IS"]) : P({
      inspectedEmoji: t,
      channel: k,
      guildId: M,
      intention: j,
      guild: Z
    });
    return (0, r.jsx)(p.Z, {
      className: L,
      graphicPrimary: w,
      graphicSecondary: Q,
      titlePrimary: D,
      titleSecondary: J,
      isFavorite: Y,
      emojiSubCategory: z
    })
  })