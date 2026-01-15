/** Chunk was on web.js **/
/** chunk id: 678869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk288469 = require("./288469.js"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk36310 = require("./36310.js"),
  Chunk813849 = require("./813849.js");

function D(e, t) {
  return P.intl.formatToPlainString(P.t.h2yWWX, {
    username: t.username,
    activity: e
  })
}
let x = (e, t, n) => {
  let {
    artist: r,
    media: i
  } = e, a = P.t["6iNxrl"], o = m.ZP.getName(t.guild_id, t.id, n);
  return P.intl.formatToMarkdownString(a, {
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
  } = (0, C.g)(), {
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
    className: w.listeningTimeline,
    children: [(0, r.jsx)(I.x, {
      entry: n
    }), (0, r.jsx)("div", {
      className: w.seekBarContainer,
      children: (0, r.jsx)("div", {
        className: w.seekBarFill,
        style: s
      })
    }), (0, r.jsx)(l.Text, {
      className: w.timestamp,
      variant: "text-xs/normal",
      tabularNumbers: true,
      color: true,
      children: o
    })]
  })
}

function j(e) {
  var t;
  let n, m, I, {
      channel: C,
      entry: w,
      closePopout: j,
      onReaction: M,
      onVoiceChannelPreview: k
    } = e,
    {
      largeImage: U
    } = (0, g.rv)({
      entry: w
    }),
    {
      activity: G,
      currentEntry: Z,
      artist: F,
      title: B,
      user: V
    } = (0, v.pi)(w),
    {
      primaryColor: H,
      secondaryColor: Y
    } = (0, O.Z)(null == U ? true : U.src),
    W = (0, y.Z)(A.ABu.SPOTIFY),
    K = (0, o.e7)([u.Z, _.default], () => (null == G ? true : G.type) === A.IIU.LISTENING && null != V ? (0, f.Z)(u.Z, _.default, V, G) : true, [G, V], s.Z),
    z = i.useCallback(() => {
      var e;
      if (null == C || null == V) return;
      let t = null == (e = G.timestamps) ? true : e.start,
        n = (0, E.T_)(null != t ? {
          start: t
        } : w, Date.now());
      return (0, b.CR)({
        user: V,
        channel: C,
        mediaImageSrc: null == U ? true : U.src,
        artist: F,
        description: x({
          artist: F,
          media: B
        }, C, V),
        colors: [H, Y],
        badges: (0, b.jE)({
          timestamp: n
        })
      })
    }, [G, F, C, w, null == U ? true : U.src, H, Y, B, V]);
  if (null == G || null == Z) return null;
  let q = F,
    Q = [];
  if (Z.media.provider === a.p.SPOTIFY) {
    m = () => {
      (0, c.aG)(G)
    }, I = () => {
      (0, c.Z5)(G, V.id)
    }, n = () => {
      var e;
      null != (e = null == W ? true : W()) || (0, c.aG)(G)
    };
    let e = e => {
      (0, c.d$)(G, V.id, e)
    };
    if (q = (0, r.jsx)(d.Z, {
        artists: F,
        canOpen: null != G.sync_id,
        linkClassName: R.popoutTextSecondary,
        onOpenSpotifyArtist: e
      }), (null == K ? true : K.syncDisabled) === false) {
      let e = () => {
        (0, p.Z)(K, N.kG.USER_ACTIVITY_SYNC), j()
      };
      Q.push((0, r.jsx)(l.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        text: P.intl.string(P.t.eU3inB),
        icon: l.iOO,
        onClick: e
      }, "listen-along"))
    }
  }
  let X = (0, r.jsx)(S.wG, {
    onClickThumbnail: I,
    channel: C,
    entry: w,
    headerIcons: Z.media.provider === a.p.SPOTIFY ? (0, r.jsx)(T.Z, {
      onClick: n,
      "aria-label": P.intl.string(P.t.rRffNz),
      Icon: h.Z
    }) : null,
    userDescription: (0, E.kr)(w) ? P.t.Tzx5D2 : P.t.CcVI1T,
    title: B,
    onClickTitle: m,
    subtitle: q,
    badges: null,
    children: (null == (t = G.timestamps) ? true : t.start) != null && (0, r.jsx)(L, {
      activity: G
    })
  });
  return (0, r.jsxs)(S.yR, {
    children: [X, (0, r.jsx)(S.St, {
      children: (0, r.jsx)(S.WT, {
        onReaction: M,
        onVoiceChannelPreview: k,
        user: V,
        channel: C,
        generateReactionImage: z,
        reactionImageAltText: D(F, V),
        entry: w,
        buttons: Q
      })
    })]
  })
}