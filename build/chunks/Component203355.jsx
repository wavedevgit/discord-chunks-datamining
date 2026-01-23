/** Chunk was on 31748 **/
/** chunk id: 203355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Y,
  D: () => z
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
let W = new Chunk626584.A("StreamTile");

function z(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: i,
    width: a,
    premiumIndicator: s
  } = e, c = (0, o.bG)([C.A], () => C.A.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.V)(a);
  return (0, r.jsxs)(r.Fragment, {
    children: [n || l ? null : (0, r.jsx)(M.A, {
      participant: t
    }), l || null == c || c.state === V.XYD.ENDED || c.state === V.XYD.FAILED ? null : (0, r.jsx)(v.A, {
      size: m.Ay.Sizes.SMALL,
      className: H.Ok,
      participant: t,
      showQuality: !u && !i,
      isUpsellEnabled: false,
      premiumIndicator: s
    })]
  })
}

function Y(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: i,
    fit: m,
    popoutType: _,
    width: v,
    focused: M,
    wrapperClassName: U,
    paused: z = false,
    idle: Y = false,
    controlsBottom: K
  } = e, Z = j.A.getVideoComponent(), q = (0, o.bG)([N.default], () => N.default.getId()), X = (0, y.A)(), {
    stream: J,
    user: Q,
    streamId: $
  } = t, ee = (0, o.bG)([I.A], () => I.A.getChannel(J.channelId)), et = (0, o.bG)([C.A], () => C.A.getActiveStreamForUser(Q.id, J.guildId), [Q.id, J.guildId]), {
    defaultWatchMultipleStreams: en
  } = (0, A.W)({
    location: "StreamTile"
  }), er = (0, o.bG)([C.A], () => C.A.getAllActiveStreams().length > 0), el = (0, o.bG)([T.A], () => T.A.isFocused()), ei = (null == et ? true : et.ownerId) === q, ea = ei && !el && _ === g.N.NO_POPOUT, eo = null != et ? (0, b.A)(et, Q, Q.id === q, ea) : null, es = v < 195;
  (0, f.Ay)(() => {
    !er && (null == ee ? true : ee.isGuildStageVoice()) && !ei && ((0, d.A9)(J), u.A.updateStageStreamSize(J.channelId, false))
  });
  let ec = (0, h.u)(G.x.STREAM, t.user.id);
  if (l.useEffect(() => {
      W.info("Stream Tile State - activeStream: ".concat(null != et, " | selected: ").concat(n, " | Video: ").concat(null != Z, " | MediaEngine: ").concat(j.A.supports(G.O5.VIDEO)))
    }, [Z, et, n]), X) return (0, r.jsx)(L.A, {
    stream: t.stream,
    isSmall: es,
    selected: n,
    isSelfStream: Q.id === q
  });
  if ((null == et ? true : et.state) === V.XYD.ENDED) return (0, r.jsx)(R.A, {
    selected: n,
    stream: et,
    width: v
  });
  if (null != ec || (null == et ? true : et.state) === V.XYD.FAILED) return (0, r.jsx)(D.A, {
    avError: null == ec ? true : ec.type,
    avErrorContext: ec,
    selected: n,
    stream: t.stream,
    width: v
  });
  if (t.type === F.lp.HIDDEN_STREAM) return (0, r.jsx)(k.A, {
    selected: n,
    participant: t,
    width: v
  });
  if (!(null != et && !n && null != Z && j.A.supports(G.O5.VIDEO))) return (0, r.jsxs)("div", {
    className: a()(H.Qs, H.Rh, {
      [H.EX]: es
    }),
    children: [(0, r.jsx)(E.A, {
      noImage: true,
      noText: true,
      className: a()(H.HL, {
        [H.gH]: null == et
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: H.lO,
        children: (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: es ? "sm" : "md",
          text: v < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"])
        })
      }), er && !en ? (0, r.jsx)("div", {
        className: a()(H.lO, H.EU),
        children: (0, r.jsx)(s.m_, {
          text: B.intl.string(B.t.wCrzut),
          children: (0, r.jsx)(c.K0, {
            variant: "secondary",
            size: es ? "sm" : "md",
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
  else return (0, r.jsxs)(r.Fragment, {
    children: [null != ee ? (0, r.jsx)(x.A, {
      focused: M,
      channelId: ee.id,
      guildId: ee.guild_id,
      streamerId: Q.id,
      hasScreenMessage: null != eo,
      stream: J
    }) : null, (0, r.jsx)(O.A, {
      enableZoom: M,
      onResize: i,
      wrapperClassName: a()(_ !== g.N.CALL_TILE ? H.tN : true, U),
      className: H.Qs,
      streamId: $,
      videoComponent: Z,
      fit: m,
      paused: z || (null == et ? true : et.state) === V.XYD.PAUSED || ea,
      videoSpinnerContext: ei ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
      userId: Q.id,
      streamKey: t.id,
      controlsBottom: K,
      idle: Y
    }, $), null != eo ? (0, r.jsx)(S.A, function(e) {
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
      size: (0, w.J)(v)
    }, eo)) : null, (0, r.jsx)(P.A, {
      stream: J,
      popoutType: _
    })]
  })
}