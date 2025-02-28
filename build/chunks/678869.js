/** Chunk was on 14093 **/
n.d(t, {
  Z: () => _
}), n(627494), n(757143), n(301563), n(653041);
var r = n(200651),
  l = n(192379),
  a = n(423875),
  i = n(442837),
  o = n(902704),
  s = n(481060),
  c = n(952164),
  u = n(768419),
  d = n(424678),
  m = n(239470),
  p = n(894344),
  h = n(314897),
  f = n(908841),
  g = n(5192),
  v = n(379357),
  x = n(561308),
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
  Z = n(188894),
  S = n(361683);
let T = (e, t, n) => {
  let {
    artist: r,
    media: l
  } = e, a = E.t["6iNxrq"], i = g.ZP.getName(t.guild_id, t.id, n);
  return E.NW.formatToMarkdownString(a, {
    artist: r,
    userName: i,
    media: l
  }).replaceAll("*", "")
};

function A(e) {
  let {
    activity: t
  } = e, n = t.timestamps, {
    now: a
  } = (0, C.tS)(), {
    durationTimestamp: i,
    seekBarStyles: o
  } = l.useMemo(() => {
    var e;
    let {
      start: n,
      end: r
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == r) return {};
    let l = Math.min(r, a),
      i = r - n,
      o = Math.floor(Math.max(l - n, 0) / i * 100);
    return {
      seekBarStyles: {
        width: "".concat(o, "%")
      },
      durationTimestamp: (0, x.T_)({
        start: 0
      }, i)
    }
  }, [t, a]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: Z.listeningTimeline,
    children: [(0, r.jsx)(C.x3, {
      entry: n
    }), (0, r.jsx)("div", {
      className: Z.seekBarContainer,
      children: (0, r.jsx)("div", {
        className: Z.seekBarFill,
        style: o
      })
    }), (0, r.jsx)(s.Text, {
      className: Z.timestamp,
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
      channel: Z,
      entry: _,
      closePopout: k,
      onReaction: R,
      onVoiceChannelPreview: D
    } = e,
    {
      largeImage: M
    } = (0, v.rv)({
      entry: _
    }),
    {
      activity: L,
      currentEntry: W,
      artist: U,
      title: z,
      user: B
    } = (0, O.pi)(_),
    {
      primaryColor: H,
      secondaryColor: G
    } = (0, P.Z)(null == M ? void 0 : M.src),
    F = (0, j.Z)(I.ABu.SPOTIFY),
    V = (0, i.e7)([u.Z, h.default], () => (null == L ? void 0 : L.type) === I.IIU.LISTENING && null != B ? (0, m.Z)(u.Z, h.default, B, L) : void 0, [L, B], o.Z),
    Y = l.useCallback(() => {
      var e;
      if (null == Z || null == B) return;
      let t = null === (e = L.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, x.T_)(null != t ? {
          start: t
        } : _, Date.now());
      return (0, y.CR)({
        user: B,
        channel: Z,
        mediaImageSrc: null == M ? void 0 : M.src,
        artist: U,
        description: T({
          artist: U,
          media: z
        }, Z, B),
        colors: [H, G],
        badges: (0, y.jE)({
          timestamp: n
        })
      })
    }, [L, U, Z, _, null == M ? void 0 : M.src, H, G, z, B]);
  if (null == L || null == W) return null;
  let q = U,
    J = [];
  W.media.provider === a.p.SPOTIFY && (g = () => {
    (0, c.aG)(L)
  }, C = () => {
    (0, c.Z5)(L, B.id)
  }, n = () => {
    var e;
    null !== (e = null == F ? void 0 : F()) && void 0 !== e || (0, c.aG)(L)
  }, q = (0, r.jsx)(d.Z, {
    artists: U,
    canOpen: null != L.sync_id,
    linkClassName: S.popoutTextSecondary,
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
    channel: Z,
    entry: _,
    headerIcons: W.media.provider === a.p.SPOTIFY ? (0, r.jsx)(N.Z, {
      onClick: n,
      "aria-label": E.NW.string(E.t.rRffNz),
      Icon: f.Z
    }) : null,
    userDescription: (0, x.kr)(_) ? E.t.Tzx5Dw : E.t.CcVI1d,
    title: z,
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
        onVoiceChannelPreview: D,
        user: B,
        channel: Z,
        generateReactionImage: Y,
        reactionImageAltText: E.NW.formatToPlainString(E.t.h2yWWV, {
          username: B.username,
          activity: U
        }),
        entry: _,
        buttons: J
      })
    })]
  })
}