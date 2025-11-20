/** Chunk was on 46931 **/
/** chunk id: 833519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y,
  _: () => q
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
  } = e, s = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, F.K)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || i ? null : (0, r.jsx)(L.Z, {
      participant: t
    }), i || null == s || s.state === V.jm8.ENDED || s.state === V.jm8.FAILED ? null : (0, r.jsx)(S.Z, {
      size: _.ZP.Sizes.SMALL,
      className: H.liveIndicator,
      participant: t,
      showQuality: !u && !l,
      isUpsellEnabled: false,
      premiumIndicator: c
    })]
  })
}

function Y(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: l,
    fit: _,
    popoutType: g,
    width: S,
    focused: L,
    wrapperClassName: F,
    paused: q = false,
    idle: Y = false,
    controlsBottom: K
  } = e, G = Z.Z.getVideoComponent(), Q = (0, o.e7)([j.default], () => j.default.getId()), X = (0, v.Z)(), {
    stream: J,
    user: $,
    streamId: ee
  } = t, et = (0, o.e7)([x.Z], () => x.Z.getChannel(J.channelId)), en = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser($.id, J.guildId), [$.id, J.guildId]), {
    defaultWatchMultipleStreams: er
  } = (0, h.P)({
    location: "StreamTile"
  }), ei = (0, o.e7)([P.Z], () => P.Z.getAllActiveStreams().length > 0), el = (0, o.e7)([R.Z], () => R.Z.isFocused()), ea = (null == en ? true : en.ownerId) === Q, eo = ea && !el && g === m.P.NO_POPOUT, ec = null != en ? (0, E.Z)(en, $, $.id === Q, eo) : null, es = S < 195;
  (0, f.ZP)(() => {
    !ei && (null == et ? true : et.isGuildStageVoice()) && !ea && ((0, d.rn)(J), u.Z.updateStageStreamSize(J.channelId, false))
  });
  let eu = (0, b.c)(z.Yn.STREAM, t.user.id);
  i.useEffect(() => {
    B.info("Stream Tile State - activeStream: ".concat(null != en, " | selected: ").concat(n, " | Video: ").concat(null != G, " | MediaEngine: ").concat(Z.Z.supports(z.AN.VIDEO)))
  }, [G, en, n]);
  let {
    allowGoLiveZoomPan: ed
  } = (0, O.H)({
    location: "StreamTile"
  });
  if (X) return (0, r.jsx)(k.Z, {
    stream: t.stream,
    isSmall: es,
    selected: n,
    isSelfStream: $.id === Q
  });
  if ((null == en ? true : en.state) === V.jm8.ENDED) return (0, r.jsx)(N.Z, {
    selected: n,
    stream: en,
    width: S
  });
  if (null != eu || (null == en ? true : en.state) === V.jm8.FAILED) return (0, r.jsx)(D.Z, {
    avError: null == eu ? true : eu.type,
    avErrorContext: eu,
    selected: n,
    stream: t.stream,
    width: S
  });
  if (t.type === U.fO.HIDDEN_STREAM) return (0, r.jsx)(M.Z, {
    selected: n,
    participant: t,
    width: S
  });
  if (!(null != en && !n && null != G && Z.Z.supports(z.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(H.content, H.streamPreview, {
      [H.small]: es
    }),
    children: [(0, r.jsx)(y.Z, {
      noImage: true,
      noText: true,
      className: a()(H.absoluteFill, {
        [H.streamPreviewOpacity]: null == en
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: H.cta,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: es ? "sm" : "md",
          text: S < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"])
        })
      }), ei && !er ? (0, r.jsx)("div", {
        className: a()(H.cta, H.addCta),
        children: (0, r.jsx)(c.u, {
          text: W.intl.string(W.t.wCrzut),
          children: (0, r.jsx)(s.hU, {
            variant: "secondary",
            size: es ? "sm" : "md",
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
    children: [null != et ? (0, r.jsx)(w.Z, {
      focused: L,
      channelId: et.id,
      guildId: et.guild_id,
      streamerId: $.id,
      hasScreenMessage: null != ec,
      stream: J
    }) : null, (0, r.jsx)(C.Z, {
      enableZoom: ed && L,
      onResize: l,
      wrapperClassName: a()(g !== m.P.CALL_TILE ? H.videoWrapper : true, F),
      className: H.content,
      streamId: ee,
      videoComponent: G,
      fit: _,
      paused: q || (null == en ? true : en.state) === V.jm8.PAUSED || eo,
      videoSpinnerContext: ea ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
      userId: $.id,
      streamKey: t.id,
      controlsBottom: K,
      idle: Y
    }, ee), null != ec ? (0, r.jsx)(I.Z, function(e) {
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
      size: (0, T.L)(S)
    }, ec)) : null, (0, r.jsx)(A.Z, {
      stream: J,
      popoutType: g
    })]
  })
}