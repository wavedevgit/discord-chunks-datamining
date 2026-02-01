/** Chunk was on 61344 **/
/** chunk id: 203355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => z,
  D: () => W
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk401843 = require("./401843.js"),
  Chunk964486 = require("./964486.js"),
  Chunk684339 = require("./684339.js"),
  Chunk164617 = require("./164617.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk525505 = require("./525505.js"),
  Chunk753727 = require("./753727.js"),
  Chunk315606 = require("./315606.js"),
  Chunk638480 = require("./638480.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk872363 = require("./872363.jsx"),
  Chunk901690 = require("./901690.jsx"),
  Chunk351073 = require("./351073.jsx"),
  Chunk919706 = require("./919706.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk531685 = require("./531685.js"),
  Chunk200749 = require("./200749.jsx"),
  Chunk70171 = require("./70171.jsx"),
  Chunk566331 = require("./566331.jsx"),
  Chunk768088 = require("./768088.jsx"),
  Chunk256195 = require("./256195.jsx"),
  L = (require("./729365.jsx"), require("./399849.jsx")),
  Chunk275731 = require("./275731.jsx"),
  Chunk345812 = require("./345812.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk707511 = require("./707511.js");
let K = new Chunk626584.A("StreamTile");

function W(e) {
  let {
    participant: t,
    selected: n,
    focused: r,
    idle: i,
    width: a,
    premiumIndicator: o
  } = e, c = (0, s.bG)([S.A], () => S.A.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.V)(a);
  return (0, l.jsxs)(l.Fragment, {
    children: [n || r ? null : (0, l.jsx)(k.A, {
      participant: t
    }), r || null == c || c.state === G.XYD.ENDED || c.state === G.XYD.FAILED ? null : (0, l.jsx)(E.A, {
      size: m.Ay.Sizes.SMALL,
      className: V.Ok,
      participant: t,
      showQuality: !u && !i,
      isUpsellEnabled: false,
      premiumIndicator: o
    })]
  })
}

function z(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: i,
    fit: m,
    popoutType: g,
    width: E,
    focused: k,
    wrapperClassName: U,
    paused: W = false,
    idle: z = false,
    controlsBottom: q
  } = e, Y = T.A.getVideoComponent(), J = (0, s.bG)([j.default], () => j.default.getId()), Z = (0, b.A)(), {
    stream: X,
    user: Q,
    streamId: $
  } = t, ee = (0, s.bG)([I.A], () => I.A.getChannel(X.channelId)), et = (0, s.bG)([S.A], () => S.A.getActiveStreamForUser(Q.id, X.guildId), [Q.id, X.guildId]), {
    defaultWatchMultipleStreams: en
  } = (0, _.W)({
    location: "StreamTile"
  }), el = (0, s.bG)([S.A], () => S.A.getAllActiveStreams().length > 0), er = (0, s.bG)([N.A], () => N.A.isFocused()), ei = (null == et ? true : et.ownerId) === J, ea = ei && !er && g === f.N.NO_POPOUT, es = null != et ? (0, y.A)(et, Q, Q.id === J, ea) : null, eo = E < 195;
  (0, h.Ay)(() => {
    !el && (null == ee ? true : ee.isGuildStageVoice()) && !ei && ((0, d.A9)(X), u.A.updateStageStreamSize(X.channelId, false))
  });
  let ec = (0, A.u)(H.x.STREAM, t.user.id);
  if (r.useEffect(() => {
      K.info("Stream Tile State - activeStream: ".concat(null != et, " | selected: ").concat(n, " | Video: ").concat(null != Y, " | MediaEngine: ").concat(T.A.supports(H.O5.VIDEO)))
    }, [Y, et, n]), Z) return (0, l.jsx)(L.A, {
    stream: t.stream,
    isSmall: eo,
    selected: n,
    isSelfStream: Q.id === J
  });
  if ((null == et ? true : et.state) === G.XYD.ENDED) return (0, l.jsx)(R.A, {
    selected: n,
    stream: et,
    width: E
  });
  if (null != ec || (null == et ? true : et.state) === G.XYD.FAILED) return (0, l.jsx)(D.A, {
    avError: null == ec ? true : ec.type,
    avErrorContext: ec,
    selected: n,
    stream: t.stream,
    width: E
  });
  if (t.type === F.lp.HIDDEN_STREAM) return (0, l.jsx)(M.A, {
    selected: n,
    participant: t,
    width: E
  });
  if (!(null != et && !n && null != Y && T.A.supports(H.O5.VIDEO))) return (0, l.jsxs)("div", {
    className: a()(V.Qs, V.Rh, {
      [V.EX]: eo
    }),
    children: [(0, l.jsx)(v.A, {
      noImage: true,
      noText: true,
      className: a()(V.HL, {
        [V.gH]: null == et
      }),
      stream: t.stream
    }), n ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: V.lO,
        children: (0, l.jsx)(c.Button, {
          variant: "secondary",
          size: eo ? "sm" : "md",
          text: E < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"])
        })
      }), el && !en ? (0, l.jsx)("div", {
        className: a()(V.lO, V.EU),
        children: (0, l.jsx)(o.m_, {
          text: B.intl.string(B.t.wCrzut),
          children: (0, l.jsx)(c.K0, {
            variant: "secondary",
            size: eo ? "sm" : "md",
            icon: c.vAm,
            "aria-label": B.intl.string(B.t.wCrzut),
            onClick: e => {
              e.stopPropagation(), (0, d.A9)(t.stream, {
                forceMultiple: true
              })
            }
          })
        })
      }) : null]
    })]
  });
  else return (0, l.jsxs)(l.Fragment, {
    children: [null != ee ? (0, l.jsx)(C.A, {
      focused: k,
      channelId: ee.id,
      guildId: ee.guild_id,
      streamerId: Q.id,
      hasScreenMessage: null != es,
      stream: X
    }) : null, (0, l.jsx)(O.A, {
      enableZoom: k,
      onResize: i,
      wrapperClassName: a()(g !== f.N.CALL_TILE ? V.tN : true, U),
      className: V.Qs,
      streamId: $,
      videoComponent: Y,
      fit: m,
      paused: W || (null == et ? true : et.state) === G.XYD.PAUSED || ea,
      videoSpinnerContext: ei ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
      userId: Q.id,
      streamKey: t.id,
      controlsBottom: q,
      idle: z
    }, $), null != es ? (0, l.jsx)(x.A, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      size: (0, P.J)(E)
    }, es)) : null, (0, l.jsx)(w.A, {
      stream: X,
      popoutType: g
    })]
  })
}