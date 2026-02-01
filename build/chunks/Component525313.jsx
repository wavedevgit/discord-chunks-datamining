/** Chunk was on web.js **/
/** chunk id: 525313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./747238.js"), require("./812715.js"), require("./866193.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk205327 = require("./205327.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk397927 = require("./397927.js"),
  Chunk172710 = require("./172710.js"),
  Chunk655116 = require("./655116.js"),
  Chunk763758 = require("./763758.jsx"),
  Chunk286617 = require("./286617.js"),
  Chunk533207 = require("./533207.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk121090 = require("./121090.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk939341 = require("./939341.js"),
  Chunk583846 = require("./583846.js"),
  Chunk405310 = require("./405310.js"),
  Chunk434200 = require("./434200.js"),
  Chunk176563 = require("./176563.js"),
  Chunk363670 = require("./363670.jsx"),
  Chunk910692 = require("./910692.jsx"),
  Chunk693879 = require("./693879.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk809854 = require("./809854.js"),
  Chunk652215 = require("./652215.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk388277 = require("./388277.js"),
  Chunk187866 = require("./187866.js");

function D(e, t) {
  return w.intl.formatToPlainString(w.t.h2yWWX, {
    username: t.username,
    activity: e
  })
}
let L = (e, t, n) => {
  let {
    artist: r,
    media: i
  } = e, a = w.t["6iNxrl"], o = m.Ay.getName(t.guild_id, t.id, n);
  return w.intl.formatToMarkdownString(a, {
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
  } = (0, T.e)(), {
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
      durationTimestamp: (0, E.W6)({
        start: 0
      }, o)
    }
  }, [t, a]);
  return null == s ? null : (0, r.jsxs)("div", {
    className: R.lu,
    children: [(0, r.jsx)(I.z, {
      entry: n
    }), (0, r.jsx)("div", {
      className: R.Lt,
      children: (0, r.jsx)("div", {
        className: R.Vp,
        style: s
      })
    }), (0, r.jsx)(l.Text, {
      className: R.vE,
      variant: "text-xs/normal",
      tabularNumbers: true,
      color: true,
      children: o
    })]
  })
}

function M(e) {
  var t;
  let n, m, I, {
      channel: T,
      entry: R,
      closePopout: M,
      onReaction: j,
      onVoiceChannelPreview: k
    } = e,
    {
      largeImage: U
    } = (0, g.nO)({
      entry: R
    }),
    {
      activity: G,
      currentEntry: V,
      artist: F,
      title: B,
      user: H
    } = (0, v.u7)(R),
    {
      primaryColor: Y,
      secondaryColor: W
    } = (0, O.A)(null == U ? true : U.src),
    K = (0, b.A)(C.fg2.SPOTIFY),
    z = (0, o.bG)([u.A, _.default], () => (null == G ? true : G.type) === C.$pd.LISTENING && null != H ? (0, f.A)(u.A, _.default, H, G) : true, [G, H], s.A),
    q = i.useCallback(() => {
      var e;
      if (null == T || null == H) return;
      let t = null == (e = G.timestamps) ? true : e.start,
        n = (0, E.W6)(null != t ? {
          start: t
        } : R, Date.now());
      return (0, y.Lu)({
        user: H,
        channel: T,
        mediaImageSrc: null == U ? true : U.src,
        artist: F,
        description: L({
          artist: F,
          media: B
        }, T, H),
        colors: [Y, W],
        badges: (0, y.N)({
          timestamp: n
        })
      })
    }, [G, F, T, R, null == U ? true : U.src, Y, W, B, H]);
  if (null == G || null == V) return null;
  let Z = F,
    Q = [];
  if (V.media.provider === a.X.SPOTIFY) {
    m = () => {
      (0, c.Mp)(G)
    }, I = () => {
      (0, c.QX)(G, H.id)
    }, n = () => {
      var e;
      null != (e = null == K ? true : K()) || (0, c.Mp)(G)
    };
    let e = e => {
      (0, c.mN)(G, H.id, e)
    };
    if (Z = (0, r.jsx)(d.A, {
        artists: F,
        canOpen: null != G.sync_id,
        linkClassName: P.zA,
        onOpenSpotifyArtist: e
      }), (null == z ? true : z.syncDisabled) === false) {
      let e = () => {
        (0, p.A)(z, N.Qp.USER_ACTIVITY_SYNC), M()
      };
      Q.push((0, r.jsx)(l.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        text: w.intl.string(w.t.eU3inB),
        icon: l.J2m,
        onClick: e
      }, "listen-along"))
    }
  }
  let X = (0, r.jsx)(A.BC, {
    onClickThumbnail: I,
    channel: T,
    entry: R,
    headerIcons: V.media.provider === a.X.SPOTIFY ? (0, r.jsx)(S.A, {
      onClick: n,
      "aria-label": w.intl.string(w.t.rRffNz),
      Icon: h.A
    }) : null,
    userDescription: (0, E.JM)(R) ? w.t.Tzx5D2 : w.t.CcVI1T,
    title: B,
    onClickTitle: m,
    subtitle: Z,
    badges: null,
    children: (null == (t = G.timestamps) ? true : t.start) != null && (0, r.jsx)(x, {
      activity: G
    })
  });
  return (0, r.jsxs)(A.YN, {
    children: [X, (0, r.jsx)(A.Eh, {
      children: (0, r.jsx)(A.fD, {
        onReaction: j,
        onVoiceChannelPreview: k,
        user: H,
        channel: T,
        generateReactionImage: q,
        reactionImageAltText: D(F, H),
        entry: R,
        buttons: Q
      })
    })]
  })
}