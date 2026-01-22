/** Chunk was on 31748 **/
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
let Y = new Chunk626584.A("StreamTile");

function W(e) {
  let {
    participant: t,
    selected: n,
    focused: r,
    idle: i,
    width: a,
    premiumIndicator: o
  } = e, c = (0, s.bG)([N.A], () => N.A.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.V)(a);
  return (0, l.jsxs)(l.Fragment, {
    children: [n || r ? null : (0, l.jsx)(M.A, {
      participant: t
    }), r || null == c || c.state === V.XYD.ENDED || c.state === V.XYD.FAILED ? null : (0, l.jsx)(v.A, {
      size: g.Ay.Sizes.SMALL,
      className: B.Ok,
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
    fit: g,
    popoutType: m,
    width: v,
    focused: M,
    wrapperClassName: U,
    paused: W = false,
    idle: z = false,
    controlsBottom: K
  } = e, X = T.A.getVideoComponent(), Z = (0, s.bG)([C.default], () => C.default.getId()), J = (0, A.A)(), {
    stream: q,
    user: Q,
    streamId: $
  } = t, ee = (0, s.bG)([j.A], () => j.A.getChannel(q.channelId)), et = (0, s.bG)([N.A], () => N.A.getActiveStreamForUser(Q.id, q.guildId), [Q.id, q.guildId]), {
    defaultWatchMultipleStreams: en
  } = (0, y.W)({
    location: "StreamTile"
  }), el = (0, s.bG)([N.A], () => N.A.getAllActiveStreams().length > 0), er = (0, s.bG)([I.A], () => I.A.isFocused()), ei = (null == et ? true : et.ownerId) === Z, ea = ei && !er && m === b.N.NO_POPOUT, es = null != et ? (0, _.A)(et, Q, Q.id === Z, ea) : null, eo = v < 195;
  (0, f.Ay)(() => {
    !el && (null == ee ? true : ee.isGuildStageVoice()) && !ei && ((0, d.A9)(q), u.A.updateStageStreamSize(q.channelId, false))
  });
  let ec = (0, h.u)(G.x.STREAM, t.user.id);
  if (r.useEffect(() => {
      Y.info("Stream Tile State - activeStream: ".concat(null != et, " | selected: ").concat(n, " | Video: ").concat(null != X, " | MediaEngine: ").concat(T.A.supports(G.O5.VIDEO)))
    }, [X, et, n]), J) return (0, l.jsx)(L.A, {
    stream: t.stream,
    isSmall: eo,
    selected: n,
    isSelfStream: Q.id === Z
  });
  if ((null == et ? true : et.state) === V.XYD.ENDED) return (0, l.jsx)(P.A, {
    selected: n,
    stream: et,
    width: v
  });
  if (null != ec || (null == et ? true : et.state) === V.XYD.FAILED) return (0, l.jsx)(D.A, {
    avError: null == ec ? true : ec.type,
    avErrorContext: ec,
    selected: n,
    stream: t.stream,
    width: v
  });
  if (t.type === F.lp.HIDDEN_STREAM) return (0, l.jsx)(k.A, {
    selected: n,
    participant: t,
    width: v
  });
  if (!(null != et && !n && null != X && T.A.supports(G.O5.VIDEO))) return (0, l.jsxs)("div", {
    className: a()(B.Qs, B.Rh, {
      [B.EX]: eo
    }),
    children: [(0, l.jsx)(E.A, {
      noImage: true,
      noText: true,
      className: a()(B.HL, {
        [B.gH]: null == et
      }),
      stream: t.stream
    }), n ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: B.lO,
        children: (0, l.jsx)(c.Button, {
          variant: "secondary",
          size: eo ? "sm" : "md",
          text: v < 175 ? H.intl.string(H.t.I6JG46) : H.intl.string(H.t["7Xq/nV"])
        })
      }), el && !en ? (0, l.jsx)("div", {
        className: a()(B.lO, B.EU),
        children: (0, l.jsx)(o.m_, {
          text: H.intl.string(H.t.wCrzut),
          children: (0, l.jsx)(c.K0, {
            variant: "secondary",
            size: eo ? "sm" : "md",
            icon: c.vAm,
            "aria-label": H.intl.string(H.t.wCrzut),
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
    children: [null != ee ? (0, l.jsx)(x.A, {
      focused: M,
      channelId: ee.id,
      guildId: ee.guild_id,
      streamerId: Q.id,
      hasScreenMessage: null != es,
      stream: q
    }) : null, (0, l.jsx)(O.A, {
      enableZoom: M,
      onResize: i,
      wrapperClassName: a()(m !== b.N.CALL_TILE ? B.tN : true, U),
      className: B.Qs,
      streamId: $,
      videoComponent: X,
      fit: g,
      paused: W || (null == et ? true : et.state) === V.XYD.PAUSED || ea,
      videoSpinnerContext: ei ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
      userId: Q.id,
      streamKey: t.id,
      controlsBottom: K,
      idle: z
    }, $), null != es ? (0, l.jsx)(S.A, function(e) {
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
      size: (0, w.J)(v)
    }, es)) : null, (0, l.jsx)(R.A, {
      stream: q,
      popoutType: m
    })]
  })
}