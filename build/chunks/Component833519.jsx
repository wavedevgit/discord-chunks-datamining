/** Chunk was on 34271 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z,
  _: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk493773 = require("./493773.js"),
  Chunk763520 = require("./763520.js"),
  Chunk598006 = require("./598006.js"),
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
  Chunk112560 = require("./112560.jsx"),
  Chunk442168 = require("./442168.jsx"),
  Chunk822296 = require("./822296.jsx"),
  Chunk916771 = require("./916771.jsx"),
  Chunk792517 = require("./792517.jsx"),
  M = (require("./351483.jsx"), require("./979425.jsx")),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let B = new Chunk710845.Z("StreamTile");

function q(e) {
  let {
    participant: t,
    selected: n,
    focused: i,
    idle: l,
    width: a,
    premiumIndicator: c
  } = e, s = (0, o.e7)([w.Z], () => w.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, L.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || i ? null : (0, r.jsx)(k.Z, {
      participant: t
    }), i || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED ? null : (0, r.jsx)(y.Z, {
      size: m.ZP.Sizes.SMALL,
      className: H.liveIndicator,
      participant: t,
      showQuality: !u && !l,
      isUpsellEnabled: false,
      premiumIndicator: c
    })]
  })
}

function z(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: l,
    fit: m,
    popoutType: g,
    width: y,
    focused: k,
    wrapperClassName: L,
    paused: q = false
  } = e, z = j.Z.getVideoComponent(), Y = (0, o.e7)([P.default], () => P.default.getId()), K = (0, b.Z)(), {
    stream: G,
    user: Q,
    streamId: X
  } = t, J = (0, o.e7)([Z.Z], () => Z.Z.getChannel(G.channelId)), $ = (0, o.e7)([w.Z], () => w.Z.getActiveStreamForUser(Q.id, G.guildId), [Q.id, G.guildId]), {
    defaultWatchMultipleStreams: ee
  } = (0, E.P)({
    location: "StreamTile"
  }), et = (0, o.e7)([w.Z], () => w.Z.getAllActiveStreams().length > 0), en = (0, o.e7)([T.Z], () => T.Z.isFocused()), er = (null == $ ? true : $.ownerId) === Y, ei = er && !en && g === _.P.NO_POPOUT, el = null != $ ? (0, h.Z)($, Q, Q.id === Y, ei) : null, ea = y < 195;
  (0, f.ZP)(() => {
    !et && (null == J ? true : J.isGuildStageVoice()) && !er && ((0, d.rn)(G), u.Z.updateStageStreamSize(G.channelId, false))
  });
  let eo = (0, v.c)(U.Yn.STREAM, t.user.id);
  if (i.useEffect(() => {
      B.info("Stream Tile State - activeStream: ".concat(null != $, " | selected: ").concat(n, " | Video: ").concat(null != z, " | MediaEngine: ").concat(j.Z.supports(U.AN.VIDEO)))
    }, [z, $, n]), K) return (0, r.jsx)(M.Z, {
    stream: t.stream,
    isSmall: ea,
    selected: n,
    isSelfStream: Q.id === Y
  });
  if ((null == $ ? true : $.state) === F.jm8.ENDED) return (0, r.jsx)(x.Z, {
    selected: n,
    stream: $,
    width: y
  });
  if (null != eo || (null == $ ? true : $.state) === F.jm8.FAILED) return (0, r.jsx)(N.Z, {
    avError: null == eo ? true : eo.type,
    avErrorContext: eo,
    selected: n,
    stream: t.stream,
    width: y
  });
  if (t.type === V.fO.HIDDEN_STREAM) return (0, r.jsx)(D.Z, {
    selected: n,
    participant: t,
    width: y
  });
  if (!(null != $ && !n && null != z && j.Z.supports(U.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(H.content, H.streamPreview, {
      [H.small]: ea
    }),
    children: [(0, r.jsx)(S.Z, {
      noImage: true,
      noText: true,
      className: a()(H.absoluteFill, {
        [H.streamPreviewOpacity]: null == $
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: H.cta,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: ea ? "sm" : "md",
          text: y < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"])
        })
      }), et && !ee ? (0, r.jsx)("div", {
        className: a()(H.cta, H.addCta),
        children: (0, r.jsx)(c.u, {
          text: W.intl.string(W.t.wCrzut),
          children: (0, r.jsx)(s.hU, {
            variant: "secondary",
            size: ea ? "sm" : "md",
            icon: s.OgY,
            "aria-label": W.intl.string(W.t.wCrzut),
            onClick: e => {
              e.stopPropagation(), (0, d.rn)(t.stream, {
                forceMultiple: true
              })
            }
          })
        })
      }) : null]
    })]
  });
  else return (0, r.jsxs)(r.Fragment, {
    children: [null != J ? (0, r.jsx)(I.Z, {
      focused: k,
      channelId: J.id,
      guildId: J.guild_id,
      streamerId: Q.id,
      hasScreenMessage: null != el,
      stream: G
    }) : null, (0, r.jsx)(O.Z, {
      onResize: l,
      wrapperClassName: a()(g !== _.P.CALL_TILE ? H.videoWrapper : true, L),
      className: H.content,
      streamId: X,
      videoComponent: z,
      fit: m,
      paused: q || (null == $ ? true : $.state) === F.jm8.PAUSED || ei,
      videoSpinnerContext: er ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
      userId: Q.id,
      streamKey: t.id
    }, X), null != el ? (0, r.jsx)(C.Z, function(e) {
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
      size: (0, A.L)(y)
    }, el)) : null, (0, r.jsx)(R.Z, {
      stream: G,
      popoutType: g
    })]
  })
}