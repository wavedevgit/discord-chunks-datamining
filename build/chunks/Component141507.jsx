/** Chunk was on web.js **/
/** chunk id: 141507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => w
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
  Chunk392552 = require("./392552.js"),
  Chunk543241 = require("./543241.js"),
  Chunk199257 = require("./199257.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545424 = require("./545424.js");
let P = 250;

function R(e) {
  return null != e && "animated" in e
}
let D = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, r = R(t);
    return null != n && r ? A.intl.format(A.t.KFW2aY, {
      guildName: n.name
    }) : null
  },
  w = Chunk473749.memo(function(e) {
    let t, w, x, {
        className: L,
        emojiGrid: j,
        guildId: M,
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
      Z = p.kJ.useStore(e => e.inspectedExpressionPosition),
      B = i.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = Z;
        return null == (e = j[t]) ? true : e[n]
      }, [j, Z]);
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
    let F = (0, a.e7)([g.Z], () => null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null, [t]),
      V = (0, a.e7)([E.Z], () => E.Z.isFocused()),
      H = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
      Y = h.Yk.useSetting(),
      W = (0, v.C1)(M, R(t) ? t : null),
      K = (0, a.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
      {
        newlyAddedEmojis: z
      } = (0, S.Z)(M, k),
      q = (null == B ? true : B.type) === T.ld.EMOJI ? B.subCategory : C.t0.NONE;
    if (i.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= P && R(t) && q !== C.t0.NONE && (q === C.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === u.B.GUILD && (0, f.Zg)(t.guildId, z[0].id), null != Z.source && (0, v.Gn)({
            emoji: t,
            subCategory: q,
            position: B.columnIndex + 1,
            newlyAddedHighlight: q === C.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(M, t.id)
          }))
        }
      }), null == t) return null;
    let Q = m.Z.theme;
    if (R(t)) {
      var X;
      let e = null != t.id ? b.ZP.getEmojiURL({
        id: t.id,
        animated: Y && t.animated,
        size: 28
      }) : t.url;
      w = "" === e ? (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: N.glyphEmoji,
        children: "surrogates" in t ? t.surrogates : null
      }) : (0, r.jsx)("img", {
        alt: null != (X = (0, y.nY)(t)) ? X : "",
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
        a = n(853871),
        s = n(63149);
      w = K.has(t.guildId) ? (0, r.jsx)("img", {
        className: N.icon,
        src: (0, o.wj)(Q) ? a : s,
        alt: ""
      }) : (0, r.jsx)("img", {
        className: N.icon,
        src: (0, o.wj)(Q) ? e : i,
        alt: ""
      })
    }
    let J = null != F ? (0, r.jsx)(I.Z, {
      className: N.__invalid_guildIcon,
      guild: F,
      shouldAnimate: !H && V
    }) : null;
    x = G && "CREATE_EMOJI" === t.type ? A.intl.string(A.t.XCmLfG) : "EXPAND_OR_COLLAPSE_EMOJI" === t.type ? K.has(t.guildId) ? A.intl.string(A.t["/K2RDH"]) : A.intl.string(A.t.NZI2Zk) : (0, y.nY)(t);
    let $ = G && "CREATE_EMOJI" === t.type ? A.intl.string(A.t["Z/r7IS"]) : D({
      inspectedEmoji: t,
      channel: U,
      guildId: M,
      intention: k,
      guild: F
    });
    return (0, r.jsx)(_.Z, {
      className: L,
      graphicPrimary: w,
      graphicSecondary: J,
      titlePrimary: x,
      titleSecondary: $,
      isFavorite: W,
      emojiSubCategory: q
    })
  })