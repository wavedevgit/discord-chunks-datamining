/** Chunk was on web.js **/
/** chunk id: 678869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk423875 = require("./423875.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk481060 = require("./481060.js"),
  Chunk952164 = require("./952164.js"),
  Chunk768419 = require("./768419.js"),
  Chunk424678 = require("./424678.jsx"),
  Chunk239470 = require("./239470.js"),
  Chunk894344 = require("./894344.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk908841 = require("./908841.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk379357 = require("./379357.js"),
  Chunk561308 = require("./561308.js"),
  Chunk319604 = require("./319604.js"),
  Chunk31074 = require("./31074.js"),
  Chunk206295 = require("./206295.js"),
  Chunk551228 = require("./551228.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk371991 = require("./371991.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119835 = require("./119835.js"),
  Chunk951948 = require("./951948.js");

function D(e, t) {
  return N.intl.formatToPlainString(N.t.h2yWWX, {
    username: t.username,
    activity: e
  })
}
let w = (e, t, n) => {
  let {
    artist: r,
    media: i
  } = e, a = N.t["6iNxrl"], o = m.ZP.getName(t.guild_id, t.id, n);
  return N.intl.formatToMarkdownString(a, {
    artist: r,
    userName: o,
    media: i
  }).replaceAll("*", "")
};

function L(e) {
  let {
    activity: t
  } = e, n = t.timestamps, {
    now: a
  } = (0, T.tS)(), {
    durationTimestamp: o,
    seekBarStyles: s
  } = i.useMemo(() => {
    var e;
    let {
      start: n,
      end: r
    } = null != (e = t.timestamps) ? e : {};
    if (null == n || null == r) return {};
    let i = Math.min(r, a),
      o = r - n,
      s = Math.floor(Math.max(i - n, 0) / o * 100);
    return {
      seekBarStyles: {
        width: "".concat(s, "%")
      },
      durationTimestamp: (0, E.T_)({
        start: 0
      }, o)
    }
  }, [t, a]);
  return null == s ? null : (0, r.jsxs)("div", {
    className: R.listeningTimeline,
    children: [(0, r.jsx)(T.x3, {
      entry: n
    }), (0, r.jsx)("div", {
      className: R.seekBarContainer,
      children: (0, r.jsx)("div", {
        className: R.seekBarFill,
        style: s
      })
    }), (0, r.jsx)(l.Text, {
      className: R.timestamp,
      variant: "text-xs/normal",
      tabularNumbers: true,
      color: true,
      children: o
    })]
  })
}

function x(e) {
  var t;
  let n, m, T, {
      channel: R,
      entry: x,
      closePopout: M,
      onReaction: k,
      onVoiceChannelPreview: j
    } = e,
    {
      largeImage: U
    } = (0, g.rv)({
      entry: x
    }),
    {
      activity: G,
      currentEntry: B,
      artist: Z,
      title: F,
      user: V
    } = (0, v.pi)(x),
    {
      primaryColor: H,
      secondaryColor: Y
    } = (0, O.Z)(null == U ? true : U.src),
    W = (0, y.Z)(A.ABu.SPOTIFY),
    K = (0, o.e7)([u.Z, p.default], () => (null == G ? true : G.type) === A.IIU.LISTENING && null != V ? (0, f.Z)(u.Z, p.default, V, G) : true, [G, V], s.Z),
    z = i.useCallback(() => {
      var e;
      if (null == R || null == V) return;
      let t = null == (e = G.timestamps) ? true : e.start,
        n = (0, E.T_)(null != t ? {
          start: t
        } : x, Date.now());
      return (0, b.CR)({
        user: V,
        channel: R,
        mediaImageSrc: null == U ? true : U.src,
        artist: Z,
        description: w({
          artist: Z,
          media: F
        }, R, V),
        colors: [H, Y],
        badges: (0, b.jE)({
          timestamp: n
        })
      })
    }, [G, Z, R, x, null == U ? true : U.src, H, Y, F, V]);
  if (null == G || null == B) return null;
  let q = Z,
    X = [];
  if (B.media.provider === a.p.SPOTIFY) {
    m = () => {
      (0, c.aG)(G)
    }, T = () => {
      (0, c.Z5)(G, V.id)
    }, n = () => {
      var e;
      null != (e = null == W ? true : W()) || (0, c.aG)(G)
    };
    let e = e => {
      (0, c.d$)(G, V.id, e)
    };
    if (q = (0, r.jsx)(d.Z, {
        artists: Z,
        canOpen: null != G.sync_id,
        linkClassName: P.popoutTextSecondary,
        onOpenSpotifyArtist: e
      }), (null == K ? true : K.syncDisabled) === false) {
      let e = () => {
        (0, _.Z)(K, C.kG.USER_ACTIVITY_SYNC), M()
      };
      X.push((0, r.jsx)(l.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        text: N.intl.string(N.t.eU3inB),
        icon: l.iOO,
        onClick: e
      }, "listen-along"))
    }
  }
  let Q = (0, r.jsx)(I.wG, {
    onClickThumbnail: T,
    channel: R,
    entry: x,
    headerIcons: B.media.provider === a.p.SPOTIFY ? (0, r.jsx)(S.Z, {
      onClick: n,
      "aria-label": N.intl.string(N.t.rRffNz),
      Icon: h.Z
    }) : null,
    userDescription: (0, E.kr)(x) ? N.t.Tzx5D2 : N.t.CcVI1T,
    title: F,
    onClickTitle: m,
    subtitle: q,
    badges: null,
    children: (null == (t = G.timestamps) ? true : t.start) != null && (0, r.jsx)(L, {
      activity: G
    })
  });
  return (0, r.jsxs)(I.yR, {
    children: [Q, (0, r.jsx)(I.St, {
      children: (0, r.jsx)(I.WT, {
        onReaction: k,
        onVoiceChannelPreview: j,
        user: V,
        channel: R,
        generateReactionImage: z,
        reactionImageAltText: D(Z, V),
        entry: x,
        buttons: X
      })
    })]
  })
}