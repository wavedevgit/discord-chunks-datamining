/** Chunk was on 94458 **/
n.d(t, {
  Z: () => _
}), n(627494), n(757143), n(301563), n(653041);
var r = n(200651),
  a = n(192379),
  l = n(423875),
  i = n(442837),
  o = n(902704),
  s = n(481060),
  c = n(952164),
  u = n(768419),
  d = n(424678),
  m = n(239470),
  p = n(894344),
  h = n(314897),
  x = n(908841),
  g = n(5192),
  v = n(379357),
  f = n(561308),
  y = n(319604),
  j = n(31074),
  P = n(206295),
  O = n(551228),
  b = n(591853),
  C = n(371991),
  N = n(410441),
  I = n(981631),
  w = n(616922),
  E = n(388032),
  T = n(762635),
  Z = n(742595);
let S = (e, t, n) => {
  let {
    artist: r,
    media: a
  } = e, l = E.t["6iNxrq"], i = g.ZP.getName(t.guild_id, t.id, n);
  return E.NW.formatToMarkdownString(l, {
    artist: r,
    userName: i,
    media: a
  }).replaceAll("*", "")
};

function A(e) {
  let {
    activity: t
  } = e, n = t.timestamps, {
    now: l
  } = (0, C.tS)(), {
    durationTimestamp: i,
    seekBarStyles: o
  } = a.useMemo(() => {
    var e;
    let {
      start: n,
      end: r
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == r) return {};
    let a = Math.min(r, l),
      i = r - n,
      o = Math.floor(Math.max(a - n, 0) / i * 100);
    return {
      seekBarStyles: {
        width: "".concat(o, "%")
      },
      durationTimestamp: (0, f.T_)({
        start: 0
      }, i)
    }
  }, [t, l]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: T.listeningTimeline,
    children: [(0, r.jsx)(C.x3, {
      entry: n
    }), (0, r.jsx)("div", {
      className: T.seekBarContainer,
      children: (0, r.jsx)("div", {
        className: T.seekBarFill,
        style: o
      })
    }), (0, r.jsx)(s.Text, {
      className: T.timestamp,
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: i
    })]
  })
}

function _(e) {
  var t;
  let n, g, C, {
      channel: T,
      entry: _,
      closePopout: k,
      onReaction: R,
      onVoiceChannelPreview: M
    } = e,
    {
      largeImage: W
    } = (0, v.rv)({
      entry: _
    }),
    {
      activity: L,
      currentEntry: D,
      artist: z,
      title: U,
      user: B
    } = (0, O.pi)(_),
    {
      primaryColor: H,
      secondaryColor: G
    } = (0, P.Z)(null == W ? void 0 : W.src),
    F = (0, j.Z)(I.ABu.SPOTIFY),
    V = (0, i.e7)([u.Z, h.default], () => (null == L ? void 0 : L.type) === I.IIU.LISTENING && null != B ? (0, m.Z)(u.Z, h.default, B, L) : void 0, [L, B], o.Z),
    Y = a.useCallback(() => {
      var e;
      if (null == T || null == B) return;
      let t = null === (e = L.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, f.T_)(null != t ? {
          start: t
        } : _, Date.now());
      return (0, y.CR)({
        user: B,
        channel: T,
        mediaImageSrc: null == W ? void 0 : W.src,
        artist: z,
        description: S({
          artist: z,
          media: U
        }, T, B),
        colors: [H, G],
        badges: (0, y.jE)({
          timestamp: n
        })
      })
    }, [L, z, T, _, null == W ? void 0 : W.src, H, G, U, B]);
  if (null == L || null == D) return null;
  let q = z,
    J = [];
  D.media.provider === l.p.SPOTIFY && (g = () => {
    (0, c.aG)(L)
  }, C = () => {
    (0, c.Z5)(L, B.id)
  }, n = () => {
    var e;
    null !== (e = null == F ? void 0 : F()) && void 0 !== e || (0, c.aG)(L)
  }, q = (0, r.jsx)(d.Z, {
    artists: z,
    canOpen: null != L.sync_id,
    linkClassName: Z.popoutTextSecondary,
    onOpenSpotifyArtist: e => {
      (0, c.d$)(L, B.id, e)
    }
  }), (null == V ? void 0 : V.syncDisabled) === !1 && J.push((0, r.jsx)(b.Ll, {
    onClick: () => {
      (0, p.Z)(V, w.kG.USER_ACTIVITY_SYNC), k()
    },
    IconComponent: s.iOO,
    children: E.NW.string(E.t.eU3inJ)
  }, "listen-along")));
  let X = (0, r.jsx)(b.wG, {
    onClickThumbnail: C,
    channel: T,
    entry: _,
    headerIcons: D.media.provider === l.p.SPOTIFY ? (0, r.jsx)(N.Z, {
      onClick: n,
      "aria-label": E.NW.string(E.t.rRffNz),
      Icon: x.Z
    }) : null,
    userDescription: (0, f.kr)(_) ? E.t.Tzx5Dw : E.t.CcVI1d,
    title: U,
    onClickTitle: g,
    subtitle: q,
    badges: null,
    children: (null === (t = L.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, r.jsx)(A, {
      activity: L
    })
  });
  return (0, r.jsxs)(b.yR, {
    children: [X, (0, r.jsx)(b.St, {
      children: (0, r.jsx)(b.WT, {
        onReaction: R,
        onVoiceChannelPreview: M,
        user: B,
        channel: T,
        generateReactionImage: Y,
        reactionImageAltText: E.NW.formatToPlainString(E.t.h2yWWV, {
          username: B.username,
          activity: z
        }),
        entry: _,
        buttons: J
      })
    })]
  })
}