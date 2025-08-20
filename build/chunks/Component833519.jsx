/** Chunk was on 24255 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y,
  _: () => W
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk493773 = require("./493773.js"),
  Chunk763520 = require("./763520.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk965048 = require("./965048.js"),
  Chunk590293 = require("./590293.js"),
  Chunk863908 = require("./863908.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk517525 = require("./517525.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk590076 = require("./590076.jsx"),
  Chunk507675 = require("./507675.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk451478 = require("./451478.js"),
  Chunk685203 = require("./685203.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk442168 = require("./442168.jsx"),
  Chunk822296 = require("./822296.jsx"),
  Chunk916771 = require("./916771.jsx"),
  Chunk792517 = require("./792517.jsx"),
  T = (require("./351483.jsx"), require("./979425.jsx")),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let H = new Chunk710845.Z("StreamTile");

function W(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: i,
    width: a,
    premiumIndicator: u
  } = e, s = (0, o.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), c = (0, M.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || l ? null : (0, r.jsx)(D.Z, {
      participant: t
    }), l || null == s || s.state === L.jm8.ENDED || s.state === L.jm8.FAILED ? null : (0, r.jsx)(h.Z, {
      size: p.ZP.Sizes.SMALL,
      className: U.liveIndicator,
      participant: t,
      showQuality: !c && !i,
      isUpsellEnabled: false,
      premiumIndicator: u
    })]
  })
}

function Y(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: i,
    fit: p,
    inPopout: m,
    inOverlayPopout: h = false,
    width: D,
    focused: M,
    wrapperClassName: W,
    paused: Y = false
  } = e, z = I.Z.getVideoComponent(), G = (0, o.e7)([Z.default], () => Z.default.getId()), B = (0, g.Z)(), {
    stream: K,
    user: q,
    streamId: J
  } = t, X = (0, o.e7)([j.Z], () => j.Z.getChannel(K.channelId)), Q = (0, o.e7)([_.Z], () => _.Z.getActiveStreamForUser(q.id, K.guildId), [q.id, K.guildId]), $ = (0, o.e7)([_.Z], () => _.Z.getAllActiveStreams().length > 0), ee = (0, o.e7)([w.Z], () => w.Z.isFocused()), et = (null == Q ? true : Q.ownerId) === G, en = et && !ee && !m, er = null != Q ? (0, v.Z)(Q, q, q.id === G, en) : null, el = D < 195;
  (0, d.ZP)(() => {
    !$ && (null == X ? true : X.isGuildStageVoice()) && !et && ((0, c.rn)(K), s.Z.updateStageStreamSize(K.channelId, false))
  });
  let ei = (0, E.c)(k.Yn.STREAM, t.user.id);
  if (l.useEffect(() => {
      H.info("Stream Tile State - activeStream: ".concat(null != Q, " | selected: ").concat(n, " | Video: ").concat(null != z, " | MediaEngine: ").concat(I.Z.supports(k.AN.VIDEO)))
    }, [z, Q, n]), B) return (0, r.jsx)(T.Z, {
    stream: t.stream,
    isSmall: el,
    selected: n,
    isSelfStream: q.id === G
  });
  if ((null == Q ? true : Q.state) === L.jm8.ENDED) return (0, r.jsx)(x.Z, {
    selected: n,
    stream: Q,
    width: D
  });
  if (null != ei || (null == Q ? true : Q.state) === L.jm8.FAILED) return (0, r.jsx)(R.Z, {
    avError: null == ei ? true : ei.type,
    avErrorContext: ei,
    selected: n,
    stream: t.stream,
    width: D
  });
  if (t.type === F.fO.HIDDEN_STREAM) return (0, r.jsx)(N.Z, {
    selected: n,
    participant: t,
    width: D
  });
  if (!(null != Q && !n && null != z && I.Z.supports(k.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(U.content, U.streamPreview, {
      [U.small]: el
    }),
    children: [(0, r.jsx)(S.Z, {
      noImage: true,
      noText: true,
      className: a()(U.absoluteFill, {
        [U.streamPreviewOpacity]: null == Q
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.a, {
        isSmall: el,
        children: (0, r.jsx)(u.Text, {
          variant: el ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: D < 175 ? V.intl.string(V.t["I6JG4+"]) : V.intl.string(V.t["7Xq/nZ"])
        })
      }), $ ? (0, r.jsx)(P.a, {
        className: U.addCTA,
        tooltip: V.intl.string(V.t.wCrzur),
        onClick: e => {
          e.stopPropagation(), (0, c.rn)(K, {
            forceMultiple: true
          })
        },
        isSmall: el,
        children: (0, r.jsx)(u.OgY, {
          size: "xs",
          color: "currentColor",
          className: U.addStreamIcon
        })
      }) : null]
    })]
  });
  else return (0, r.jsxs)(r.Fragment, {
    children: [null != X ? (0, r.jsx)(O.Z, {
      focused: M,
      channelId: X.id,
      guildId: X.guild_id,
      streamerId: q.id,
      hasScreenMessage: null != er,
      stream: K
    }) : null, (0, r.jsx)(b.Z, {
      onResize: i,
      wrapperClassName: a()(U.videoWrapper, W),
      className: U.content,
      streamId: J,
      videoComponent: z,
      fit: p,
      paused: Y || (null == Q ? true : Q.state) === L.jm8.PAUSED || en,
      videoSpinnerContext: et ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
      userId: q.id,
      streamKey: t.id
    }, J), null != er ? (0, r.jsx)(y.Z, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      size: (0, A.L)(D)
    }, er)) : null, (0, r.jsx)(C.Z, {
      stream: K,
      inPopout: m
    })]
  })
}