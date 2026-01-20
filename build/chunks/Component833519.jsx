/** Chunk was on 11010 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z,
  _: () => H
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  M = (require("./351483.jsx"), require("./979425.jsx")),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858329 = require("./858329.js");
let G = new Chunk710845.Z("StreamTile");

function H(e) {
  let {
    participant: t,
    selected: n,
    focused: i,
    idle: l,
    width: a,
    premiumIndicator: c
  } = e, s = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, L.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || i ? null : (0, r.jsx)(k.Z, {
      participant: t
    }), i || null == s || s.state === U.jm8.ENDED || s.state === U.jm8.FAILED ? null : (0, r.jsx)(O.Z, {
      size: m.ZP.Sizes.SMALL,
      className: B.liveIndicator,
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
    popoutType: b,
    width: O,
    focused: k,
    wrapperClassName: L,
    paused: H = false,
    idle: z = false,
    controlsBottom: Y
  } = e, K = j.Z.getVideoComponent(), q = (0, o.e7)([N.default], () => N.default.getId()), Q = (0, v.Z)(), {
    stream: X,
    user: J,
    streamId: $
  } = t, ee = (0, o.e7)([T.Z], () => T.Z.getChannel(X.channelId)), et = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(J.id, X.guildId), [J.id, X.guildId]), {
    defaultWatchMultipleStreams: en
  } = (0, E.P)({
    location: "StreamTile"
  }), er = (0, o.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0), ei = (0, o.e7)([P.Z], () => P.Z.isFocused()), el = (null == et ? true : et.ownerId) === q, ea = el && !ei && b === g.P.NO_POPOUT, eo = null != et ? (0, y.Z)(et, J, J.id === q, ea) : null, ec = O < 195;
  (0, f.ZP)(() => {
    !er && (null == ee ? true : ee.isGuildStageVoice()) && !el && ((0, d.rn)(X), u.Z.updateStageStreamSize(X.channelId, false))
  });
  let es = (0, h.c)(V.Yn.STREAM, t.user.id);
  if (i.useEffect(() => {
      G.info("Stream Tile State - activeStream: ".concat(null != et, " | selected: ").concat(n, " | Video: ").concat(null != K, " | MediaEngine: ").concat(j.Z.supports(V.AN.VIDEO)))
    }, [K, et, n]), Q) return (0, r.jsx)(M.Z, {
    stream: t.stream,
    isSmall: ec,
    selected: n,
    isSelfStream: J.id === q
  });
  if ((null == et ? true : et.state) === U.jm8.ENDED) return (0, r.jsx)(A.Z, {
    selected: n,
    stream: et,
    width: O
  });
  if (null != es || (null == et ? true : et.state) === U.jm8.FAILED) return (0, r.jsx)(R.Z, {
    avError: null == es ? true : es.type,
    avErrorContext: es,
    selected: n,
    stream: t.stream,
    width: O
  });
  if (t.type === F.fO.HIDDEN_STREAM) return (0, r.jsx)(D.Z, {
    selected: n,
    participant: t,
    width: O
  });
  if (!(null != et && !n && null != K && j.Z.supports(V.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(B.content, B.streamPreview, {
      [B.small]: ec
    }),
    children: [(0, r.jsx)(_.Z, {
      noImage: true,
      noText: true,
      className: a()(B.absoluteFill, {
        [B.streamPreviewOpacity]: null == et
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: B.cta,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: ec ? "sm" : "md",
          text: O < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"])
        })
      }), er && !en ? (0, r.jsx)("div", {
        className: a()(B.cta, B.addCta),
        children: (0, r.jsx)(c.u, {
          text: W.intl.string(W.t.wCrzut),
          children: (0, r.jsx)(s.hU, {
            variant: "secondary",
            size: ec ? "sm" : "md",
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
    children: [null != ee ? (0, r.jsx)(S.Z, {
      focused: k,
      channelId: ee.id,
      guildId: ee.guild_id,
      streamerId: J.id,
      hasScreenMessage: null != eo,
      stream: X
    }) : null, (0, r.jsx)(C.Z, {
      enableZoom: k,
      onResize: l,
      wrapperClassName: a()(b !== g.P.CALL_TILE ? B.videoWrapper : true, L),
      className: B.content,
      streamId: $,
      videoComponent: K,
      fit: m,
      paused: H || (null == et ? true : et.state) === U.jm8.PAUSED || ea,
      videoSpinnerContext: el ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
      userId: J.id,
      streamKey: t.id,
      controlsBottom: Y,
      idle: z
    }, $), null != eo ? (0, r.jsx)(x.Z, function(e) {
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
      size: (0, w.L)(O)
    }, eo)) : null, (0, r.jsx)(Z.Z, {
      stream: X,
      popoutType: b
    })]
  })
}