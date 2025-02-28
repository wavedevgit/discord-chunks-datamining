/** Chunk was on 12416 **/
n.d(t, {
  Z: () => Y,
  _: () => V
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(475179),
  u = n(872810),
  d = n(493773),
  f = n(763520),
  m = n(194082),
  p = n(710845),
  h = n(590293),
  b = n(863908),
  v = n(871118),
  g = n(517525),
  y = n(352978),
  E = n(576645),
  O = n(590076),
  S = n(507675),
  j = n(199902),
  x = n(314897),
  Z = n(592125),
  C = n(131951),
  w = n(451478),
  P = n(685203),
  N = n(112560),
  I = n(442168),
  _ = n(822296),
  R = n(916771),
  T = n(792517),
  A = (n(351483), n(979425)),
  D = n(651183),
  k = n(623825),
  M = n(981631),
  L = n(354459),
  W = n(65154),
  F = n(388032),
  U = n(454698);
let z = new p.Z("StreamTile");

function V(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: o,
    width: s,
    premiumIndicator: c
  } = e, u = (0, a.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), d = (0, k.K)(s), [f, p] = i.useState(!1), h = (0, a.e7)([Z.Z], () => Z.Z.getChannel(null == u ? void 0 : u.channelId));
  return (0, E.J)(h, () => {
    let e = setTimeout(() => {
        p(!0)
      }, 5e3),
      t = setTimeout(() => {
        p(!1)
      }, 15e3);
    return () => {
      p(!1), clearTimeout(e), clearTimeout(t)
    }
  }), (0, r.jsxs)(r.Fragment, {
    children: [n || l ? null : (0, r.jsx)(D.Z, {
      participant: t
    }), l || null == u || u.state === M.jm8.ENDED || u.state === M.jm8.FAILED ? null : (0, r.jsx)(g.Z, {
      size: m.ZP.Sizes.SMALL,
      className: U.liveIndicator,
      participant: t,
      showQuality: !d && !o || f,
      isUpsellEnabled: !1,
      premiumIndicator: c
    })]
  })
}

function Y(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: l,
    paused: m,
    fit: p,
    inPopout: g,
    inOverlayPopout: E = !1,
    width: D,
    focused: k,
    wrapperClassName: V
  } = e, Y = C.Z.getVideoComponent(), H = (0, a.e7)([x.default], () => x.default.getId()), K = (0, h.Z)(), {
    stream: G,
    user: B,
    streamId: q
  } = t, J = (0, a.e7)([Z.Z], () => Z.Z.getChannel(G.channelId)), X = (0, a.e7)([j.Z], () => j.Z.getActiveStreamForUser(B.id, G.guildId), [B.id, G.guildId]), Q = (0, a.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0), $ = (0, a.e7)([w.Z], () => w.Z.isFocused()), ee = (null == X ? void 0 : X.ownerId) === H, et = ee && !$ && !g, en = null != X ? (0, b.Z)(X, B, B.id === H, et) : null, er = D < 195;
  if ((0, d.ZP)(() => {
      !Q && (null == J ? void 0 : J.isGuildStageVoice()) && !ee && ((0, u.rn)(G), c.Z.updateStageStreamSize(G.channelId, !1))
    }), i.useEffect(() => {
      z.info("Stream Tile State - activeStream: ".concat(null != X, " | selected: ").concat(n, " | Video: ").concat(null != Y, " | MediaEngine: ").concat(C.Z.supports(W.AN.VIDEO)))
    }, [Y, X, n]), K) return (0, r.jsx)(A.Z, {
    stream: t.stream,
    isSmall: er,
    selected: n,
    isSelfStream: B.id === H
  });
  if ((null == X ? void 0 : X.state) === M.jm8.ENDED) return (0, r.jsx)(_.Z, {
    selected: n,
    stream: X,
    width: D
  });
  if ((null == X ? void 0 : X.state) === M.jm8.FAILED) return (0, r.jsx)(R.Z, {
    selected: n,
    stream: X,
    width: D
  });
  if (t.type === L.fO.HIDDEN_STREAM) return (0, r.jsx)(T.Z, {
    selected: n,
    participant: t,
    width: D
  });
  if (!(null != X && !n && null != Y && C.Z.supports(W.AN.VIDEO))) return (0, r.jsxs)("div", {
    className: o()(U.content, U.streamPreview, {
      [U.small]: er
    }),
    children: [(0, r.jsx)(v.Z, {
      noImage: !0,
      noText: !0,
      className: o()(U.absoluteFill, {
        [U.streamPreviewOpacity]: null == X
      }),
      stream: t.stream
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.a, {
        isSmall: er,
        children: (0, r.jsx)(s.Text, {
          variant: er ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: D < 175 ? F.NW.string(F.t["I6JG4+"]) : F.NW.string(F.t["7Xq/nZ"])
        })
      }), Q ? (0, r.jsx)(P.a, {
        className: U.addCTA,
        tooltip: F.NW.string(F.t.wCrzur),
        onClick: e => {
          e.stopPropagation(), (0, u.rn)(G, {
            forceMultiple: !0
          })
        },
        isSmall: er,
        children: (0, r.jsx)(s.OgY, {
          size: "xs",
          color: "currentColor",
          className: U.addStreamIcon
        })
      }) : null]
    })]
  });
  else return (0, r.jsxs)(r.Fragment, {
    children: [null != J ? (0, r.jsx)(O.Z, {
      focused: k,
      channelId: J.id,
      guildId: J.guild_id,
      streamerId: B.id,
      hasScreenMessage: null != en,
      stream: G
    }) : null, (0, r.jsx)(y.Z, {
      onResize: l,
      wrapperClassName: o()(U.videoWrapper, V),
      className: U.content,
      streamId: q,
      videoComponent: Y,
      fit: p,
      paused: m || et,
      videoSpinnerContext: ee ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
      userId: B.id
    }, q), null != en ? (0, r.jsx)(S.Z, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      size: (0, N.L)(D)
    }, en)) : null, (0, r.jsx)(I.Z, {
      stream: G,
      inPopout: g
    })]
  })
}