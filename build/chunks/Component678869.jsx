/** Chunk was on web.js **/
/** chunk id: 678869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
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
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk36310 = require("./36310.js"),
  Chunk813849 = require("./813849.js");

function w(e, t) {
  return N.intl.formatToPlainString(N.t.h2yWWX, {
    username: t.username,
    activity: e
  })
}
let D = (e, t, n) => {
  let {
    artist: r,
    media: i
  } = e, a = N.t["6iNxrl"], o = h.ZP.getName(t.guild_id, t.id, n);
  return N.intl.formatToMarkdownString(a, {
    artist: r,
    userName: o,
    media: i
  }).replaceAll("*", "")
};

function x(e) {
  let {
    activity: t
  } = e, n = t.timestamps, {
    now: a
  } = (0, I.tS)(), {
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
    className: P.listeningTimeline,
    children: [(0, r.jsx)(I.x3, {
      entry: n
    }), (0, r.jsx)("div", {
      className: P.seekBarContainer,
      children: (0, r.jsx)("div", {
        className: P.seekBarFill,
        style: s
      })
    }), (0, r.jsx)(l.Text, {
      className: P.timestamp,
      variant: "text-xs/normal",
      tabularNumbers: true,
      color: true,
      children: o
    })]
  })
}

function L(e) {
  var t;
  let n, h, I, {
      channel: P,
      entry: L,
      closePopout: j,
      onReaction: M,
      onVoiceChannelPreview: k
    } = e,
    {
      largeImage: U
    } = (0, g.rv)({
      entry: L
    }),
    {
      activity: G,
      currentEntry: Z,
      artist: B,
      title: F,
      user: V
    } = (0, v.pi)(L),
    {
      primaryColor: H,
      secondaryColor: Y
    } = (0, O.Z)(null == U ? true : U.src),
    W = (0, y.Z)(C.ABu.SPOTIFY),
    K = (0, o.e7)([u.Z, _.default], () => (null == G ? true : G.type) === C.IIU.LISTENING && null != V ? (0, f.Z)(u.Z, _.default, V, G) : true, [G, V], s.Z),
    z = i.useCallback(() => {
      var e;
      if (null == P || null == V) return;
      let t = null == (e = G.timestamps) ? true : e.start,
        n = (0, E.T_)(null != t ? {
          start: t
        } : L, Date.now());
      return (0, b.CR)({
        user: V,
        channel: P,
        mediaImageSrc: null == U ? true : U.src,
        artist: B,
        description: D({
          artist: B,
          media: F
        }, P, V),
        colors: [H, Y],
        badges: (0, b.jE)({
          timestamp: n
        })
      })
    }, [G, B, P, L, null == U ? true : U.src, H, Y, F, V]);
  if (null == G || null == Z) return null;
  let q = B,
    Q = [];
  if (Z.media.provider === a.p.SPOTIFY) {
    h = () => {
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
        artists: B,
        canOpen: null != G.sync_id,
        linkClassName: R.popoutTextSecondary,
        onOpenSpotifyArtist: e
      }), (null == K ? true : K.syncDisabled) === false) {
      let e = () => {
        (0, p.Z)(K, A.kG.USER_ACTIVITY_SYNC), j()
      };
      Q.push((0, r.jsx)(l.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        text: N.intl.string(N.t.eU3inB),
        icon: l.iOO,
        onClick: e
      }, "listen-along"))
    }
  }
  let X = (0, r.jsx)(S.wG, {
    onClickThumbnail: I,
    channel: P,
    entry: L,
    headerIcons: Z.media.provider === a.p.SPOTIFY ? (0, r.jsx)(T.Z, {
      onClick: n,
      "aria-label": N.intl.string(N.t.rRffNz),
      Icon: m.Z
    }) : null,
    userDescription: (0, E.kr)(L) ? N.t.Tzx5D2 : N.t.CcVI1T,
    title: F,
    onClickTitle: h,
    subtitle: q,
    badges: null,
    children: (null == (t = G.timestamps) ? true : t.start) != null && (0, r.jsx)(x, {
      activity: G
    })
  });
  return (0, r.jsxs)(S.yR, {
    children: [X, (0, r.jsx)(S.St, {
      children: (0, r.jsx)(S.WT, {
        onReaction: M,
        onVoiceChannelPreview: k,
        user: V,
        channel: P,
        generateReactionImage: z,
        reactionImageAltText: w(B, V),
        entry: L,
        buttons: Q
      })
    })]
  })
}