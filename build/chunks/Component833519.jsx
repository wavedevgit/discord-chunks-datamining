/** Chunk was on 73726 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q,
  _: () => z
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
  Chunk102793 = require("./102793.js"),
  Chunk347147 = require("./347147.jsx"),
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
  L = (require("./351483.jsx"), require("./979425.jsx")),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let W = new Chunk710845.Z("StreamTile");

function z(e) {
  let {
    participant: t,
    selected: n,
    focused: i,
    idle: l,
    width: a,
    premiumIndicator: s
  } = e, c = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || i ? null : (0, r.jsx)(k.Z, {
      participant: t
    }), i || null == c || c.state === B.jm8.ENDED || c.state === B.jm8.FAILED ? null : (0, r.jsx)(x.Z, {
      size: m.ZP.Sizes.SMALL,
      className: G.liveIndicator,
      participant: t,
      showQuality: !u && !l,
      isUpsellEnabled: false,
      premiumIndicator: s
    })]
  })
}

function q(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: l,
    fit: m,
    popoutType: g,
    width: x,
    focused: k,
    wrapperClassName: U,
    paused: z = false
  } = e, q = T.Z.getVideoComponent(), Y = (0, o.e7)([I.default], () => I.default.getId()), K = (0, _.Z)(), {
    stream: X,
    user: J,
    streamId: Q
  } = t, $ = (0, o.e7)([Z.Z], () => Z.Z.getChannel(X.channelId)), ee = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(J.id, X.guildId), [J.id, X.guildId]), {
    defaultWatchMultipleStreams: et
  } = (0, y.P)({
    location: "StreamTile"
  }), en = (0, o.e7)([P.Z], () => P.Z.getAllActiveStreams().length > 0), er = (0, o.e7)([N.Z], () => N.Z.isFocused()), ei = (null == ee ? true : ee.ownerId) === Y, el = ei && !er && g === h.P.NO_POPOUT, ea = null != ee ? (0, C.Z)(ee, J, J.id === Y, el) : null, eo = x < 195;
  (0, p.ZP)(() => {
    !en && (null == $ ? true : $.isGuildStageVoice()) && !ei && ((0, d.rn)(X), u.Z.updateStageStreamSize(X.channelId, false))
  });
  let es = (0, b.c)(V.Yn.STREAM, t.user.id);
  i.useEffect(() => {
    W.info("Stream Tile State - activeStream: ".concat(null != ee, " | selected: ").concat(n, " | Video: ").concat(null != q, " | MediaEngine: ").concat(T.Z.supports(V.AN.VIDEO)))
  }, [q, ee, n]);
  let {
    allowGoLiveZoomPan: ec
  } = (0, O.H)({
    location: "StreamTile"
  });
  if (K) return (0, r.jsx)(L.Z, {
    stream: t.stream,
    isSmall: eo,
    selected: n,
    isSelfStream: J.id === Y
  });
  if ((null == ee ? true : ee.state) === B.jm8.ENDED) return (0, r.jsx)(M.Z, {
    selected: n,
    stream: ee,
    width: x
  });
  if (null != es || (null == ee ? true : ee.state) === B.jm8.FAILED) return (0, r.jsx)(R.Z, {
    avError: null == es ? true : es.type,
    avErrorContext: es,
    selected: n,
    stream: t.stream,
    width: x
  });
  if (t.type === F.fO.HIDDEN_STREAM) return (0, r.jsx)(D.Z, {
    selected: n,
    participant: t,
    width: x
  });
  if (!(null != ee && !n && null != q && T.Z.supports(V.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(G.content, G.streamPreview, {
      [G.small]: eo
    }),
    children: [(0, r.jsx)(v.Z, {
      noImage: true,
      noText: true,
      className: a()(G.absoluteFill, {
        [G.streamPreviewOpacity]: null == ee
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: G.cta,
        children: (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: eo ? "sm" : "md",
          text: x < 175 ? H.intl.string(H.t.I6JG46) : H.intl.string(H.t["7Xq/nV"])
        })
      }), en && !et ? (0, r.jsx)("div", {
        className: a()(G.cta, G.addCta),
        children: (0, r.jsx)(s.u, {
          text: H.intl.string(H.t.wCrzut),
          children: (0, r.jsx)(c.hU, {
            variant: "secondary",
            size: eo ? "sm" : "md",
            icon: c.OgY,
            "aria-label": H.intl.string(H.t.wCrzut),
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
    children: [null != $ ? (0, r.jsx)(j.Z, {
      focused: k,
      channelId: $.id,
      guildId: $.guild_id,
      streamerId: J.id,
      hasScreenMessage: null != ea,
      stream: X
    }) : null, (0, r.jsx)(E.Z, {
      enableZoom: ec && k,
      onResize: l,
      wrapperClassName: a()(g !== h.P.CALL_TILE ? G.videoWrapper : true, U),
      className: G.content,
      streamId: Q,
      videoComponent: q,
      fit: m,
      paused: z || (null == ee ? true : ee.state) === B.jm8.PAUSED || el,
      videoSpinnerContext: ei ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
      userId: J.id,
      streamKey: t.id
    }, Q), null != ea ? (0, r.jsx)(S.Z, function(e) {
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
      size: (0, A.L)(x)
    }, ea)) : null, (0, r.jsx)(w.Z, {
      stream: X,
      popoutType: g
    })]
  })
}