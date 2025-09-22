/** Chunk was on 69634 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z,
  _: () => Y
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
  Chunk595816 = require("./595816.js"),
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
  D = (require("./351483.jsx"), require("./979425.jsx")),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let W = new Chunk710845.Z("StreamTile");

function Y(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: i,
    width: a,
    premiumIndicator: u
  } = e, s = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), c = (0, L.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || l ? null : (0, r.jsx)(M.Z, {
      participant: t
    }), l || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED ? null : (0, r.jsx)(h.Z, {
      size: p.ZP.Sizes.SMALL,
      className: H.liveIndicator,
      participant: t,
      showQuality: !c && !i,
      isUpsellEnabled: false,
      premiumIndicator: u
    })]
  })
}

function z(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: i,
    fit: p,
    inPopout: m,
    inOverlayPopout: h = false,
    width: M,
    focused: L,
    wrapperClassName: Y,
    paused: z = false
  } = e, G = w.Z.getVideoComponent(), K = (0, o.e7)([Z.default], () => Z.default.getId()), q = (0, g.Z)(), {
    stream: B,
    user: J,
    streamId: X
  } = t, Q = (0, o.e7)([I.Z], () => I.Z.getChannel(B.channelId)), $ = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(J.id, B.guildId), [J.id, B.guildId]), {
    defaultWatchMultipleStreams: ee
  } = (0, b.P)({
    location: "StreamTile"
  }), et = (0, o.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0), en = (0, o.e7)([P.Z], () => P.Z.isFocused()), er = (null == $ ? true : $.ownerId) === K, el = er && !en && !m, ei = null != $ ? (0, S.Z)($, J, J.id === K, el) : null, ea = M < 195;
  (0, d.ZP)(() => {
    !et && (null == Q ? true : Q.isGuildStageVoice()) && !er && ((0, c.rn)(B), s.Z.updateStageStreamSize(B.channelId, false))
  });
  let eo = (0, E.c)(k.Yn.STREAM, t.user.id);
  if (l.useEffect(() => {
      W.info("Stream Tile State - activeStream: ".concat(null != $, " | selected: ").concat(n, " | Video: ").concat(null != G, " | MediaEngine: ").concat(w.Z.supports(k.AN.VIDEO)))
    }, [G, $, n]), q) return (0, r.jsx)(D.Z, {
    stream: t.stream,
    isSmall: ea,
    selected: n,
    isSelfStream: J.id === K
  });
  if ((null == $ ? true : $.state) === F.jm8.ENDED) return (0, r.jsx)(x.Z, {
    selected: n,
    stream: $,
    width: M
  });
  if (null != eo || (null == $ ? true : $.state) === F.jm8.FAILED) return (0, r.jsx)(N.Z, {
    avError: null == eo ? true : eo.type,
    avErrorContext: eo,
    selected: n,
    stream: t.stream,
    width: M
  });
  if (t.type === V.fO.HIDDEN_STREAM) return (0, r.jsx)(T.Z, {
    selected: n,
    participant: t,
    width: M
  });
  if (!(null != $ && !n && null != G && w.Z.supports(k.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(H.content, H.streamPreview, {
      [H.small]: ea
    }),
    children: [(0, r.jsx)(v.Z, {
      noImage: true,
      noText: true,
      className: a()(H.absoluteFill, {
        [H.streamPreviewOpacity]: null == $
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.a, {
        isSmall: ea,
        children: (0, r.jsx)(u.Text, {
          variant: ea ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: M < 175 ? U.intl.string(U.t["I6JG4+"]) : U.intl.string(U.t["7Xq/nZ"])
        })
      }), et && !ee ? (0, r.jsx)(A.a, {
        className: H.addCTA,
        tooltip: U.intl.string(U.t.wCrzur),
        onClick: e => {
          e.stopPropagation(), (0, c.rn)(B, {
            forceMultiple: true
          })
        },
        isSmall: ea,
        children: (0, r.jsx)(u.OgY, {
          size: "xs",
          color: "currentColor",
          className: H.addStreamIcon
        })
      }) : null]
    })]
  });
  else return (0, r.jsxs)(r.Fragment, {
    children: [null != Q ? (0, r.jsx)(y.Z, {
      focused: L,
      channelId: Q.id,
      guildId: Q.guild_id,
      streamerId: J.id,
      hasScreenMessage: null != ei,
      stream: B
    }) : null, (0, r.jsx)(O.Z, {
      onResize: i,
      wrapperClassName: a()(H.videoWrapper, Y),
      className: H.content,
      streamId: X,
      videoComponent: G,
      fit: p,
      paused: z || (null == $ ? true : $.state) === F.jm8.PAUSED || el,
      videoSpinnerContext: er ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
      userId: J.id,
      streamKey: t.id
    }, X), null != ei ? (0, r.jsx)(_.Z, function(e) {
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
      size: (0, C.L)(M)
    }, ei)) : null, (0, r.jsx)(R.Z, {
      stream: B,
      inPopout: m
    })]
  })
}