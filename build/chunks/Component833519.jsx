/** Chunk was on 69813 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K,
  _: () => z
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
  k = (require("./351483.jsx"), require("./979425.jsx")),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858329 = require("./858329.js");
let H = new Chunk710845.Z("StreamTile");

function z(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: i,
    width: a,
    premiumIndicator: c
  } = e, s = (0, o.e7)([T.Z], () => T.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || l ? null : (0, r.jsx)(L.Z, {
      participant: t
    }), l || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED ? null : (0, r.jsx)(O.Z, {
      size: b.ZP.Sizes.SMALL,
      className: G.liveIndicator,
      participant: t,
      showQuality: !u && !i,
      isUpsellEnabled: false,
      premiumIndicator: c
    })]
  })
}

function K(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: i,
    fit: b,
    popoutType: m,
    width: O,
    focused: L,
    wrapperClassName: U,
    paused: z = false,
    idle: K = false,
    controlsBottom: Y
  } = e, q = Z.Z.getVideoComponent(), Q = (0, o.e7)([x.default], () => x.default.getId()), X = (0, E.Z)(), {
    stream: J,
    user: $,
    streamId: ee
  } = t, et = (0, o.e7)([P.Z], () => P.Z.getChannel(J.channelId)), en = (0, o.e7)([T.Z], () => T.Z.getActiveStreamForUser($.id, J.guildId), [$.id, J.guildId]), {
    defaultWatchMultipleStreams: er
  } = (0, v.P)({
    location: "StreamTile"
  }), el = (0, o.e7)([T.Z], () => T.Z.getAllActiveStreams().length > 0), ei = (0, o.e7)([j.Z], () => j.Z.isFocused()), ea = (null == en ? true : en.ownerId) === Q, eo = ea && !ei && m === g.P.NO_POPOUT, ec = null != en ? (0, _.Z)(en, $, $.id === Q, eo) : null, es = O < 195;
  (0, f.ZP)(() => {
    !el && (null == et ? true : et.isGuildStageVoice()) && !ea && ((0, d.rn)(J), u.Z.updateStageStreamSize(J.channelId, false))
  });
  let eu = (0, h.c)(W.Yn.STREAM, t.user.id);
  l.useEffect(() => {
    H.info("Stream Tile State - activeStream: ".concat(null != en, " | selected: ").concat(n, " | Video: ").concat(null != q, " | MediaEngine: ").concat(Z.Z.supports(W.AN.VIDEO)))
  }, [q, en, n]);
  let {
    allowGoLiveZoomPan: ed
  } = (0, S.H)({
    location: "StreamTile"
  });
  if (X) return (0, r.jsx)(k.Z, {
    stream: t.stream,
    isSmall: es,
    selected: n,
    isSelfStream: $.id === Q
  });
  if ((null == en ? true : en.state) === F.jm8.ENDED) return (0, r.jsx)(R.Z, {
    selected: n,
    stream: en,
    width: O
  });
  if (null != eu || (null == en ? true : en.state) === F.jm8.FAILED) return (0, r.jsx)(D.Z, {
    avError: null == eu ? true : eu.type,
    avErrorContext: eu,
    selected: n,
    stream: t.stream,
    width: O
  });
  if (t.type === V.fO.HIDDEN_STREAM) return (0, r.jsx)(M.Z, {
    selected: n,
    participant: t,
    width: O
  });
  if (!(null != en && !n && null != q && Z.Z.supports(W.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(G.content, G.streamPreview, {
      [G.small]: es
    }),
    children: [(0, r.jsx)(y.Z, {
      noImage: true,
      noText: true,
      className: a()(G.absoluteFill, {
        [G.streamPreviewOpacity]: null == en
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: G.cta,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: es ? "sm" : "md",
          text: O < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"])
        })
      }), el && !er ? (0, r.jsx)("div", {
        className: a()(G.cta, G.addCta),
        children: (0, r.jsx)(c.u, {
          text: B.intl.string(B.t.wCrzut),
          children: (0, r.jsx)(s.hU, {
            variant: "secondary",
            size: es ? "sm" : "md",
            icon: s.OgY,
            "aria-label": B.intl.string(B.t.wCrzut),
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
    children: [null != et ? (0, r.jsx)(I.Z, {
      focused: L,
      channelId: et.id,
      guildId: et.guild_id,
      streamerId: $.id,
      hasScreenMessage: null != ec,
      stream: J
    }) : null, (0, r.jsx)(C.Z, {
      enableZoom: ed && L,
      onResize: i,
      wrapperClassName: a()(m !== g.P.CALL_TILE ? G.videoWrapper : true, U),
      className: G.content,
      streamId: ee,
      videoComponent: q,
      fit: b,
      paused: z || (null == en ? true : en.state) === F.jm8.PAUSED || eo,
      videoSpinnerContext: ea ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
      userId: $.id,
      streamKey: t.id,
      controlsBottom: Y,
      idle: K
    }, ee), null != ec ? (0, r.jsx)(N.Z, function(e) {
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
    }, ec)) : null, (0, r.jsx)(A.Z, {
      stream: J,
      popoutType: m
    })]
  })
}