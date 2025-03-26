/** Chunk was on 52272 **/
n.d(t, {
  H: () => O
}), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(442837),
  l = n(481060),
  s = n(904245),
  c = n(287734),
  u = n(957730),
  d = n(739566),
  p = n(779125),
  m = n(599706),
  f = n(703656),
  h = n(592125),
  g = n(430824),
  _ = n(594174),
  b = n(938475),
  v = n(5192),
  x = n(981631),
  y = n(388032),
  E = n(971386);

function O(e) {
  var t, n, i, O, N, j, C, I, S, T;
  let {
    message: P,
    channel: A
  } = e, w = null === (i = P.embeds[0]) || void 0 === i ? void 0 : null === (n = i.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, Z = null === (j = P.embeds[0]) || void 0 === j ? void 0 : null === (N = j.fields) || void 0 === N ? void 0 : null === (O = N.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === O ? void 0 : O.rawValue, k = (0, a.e7)([g.Z], () => g.Z.getGuild(w)), R = (0, a.e7)([h.Z], () => h.Z.getChannel(Z)), D = (0, a.e7)([_.default], () => _.default.getCurrentUser()), L = (0, a.e7)([], () => P.author.id === (null == D ? void 0 : D.id)), M = null === (C = A.recipients) || void 0 === C ? void 0 : C.find(e => e !== P.author.id), W = (0, a.e7)([_.default], () => null != M ? _.default.getUser(M) : null), U = (0, d.ZP)(P), F = (0, v._T)(A.getGuildId(), A.id, W), B = (0, a.Wu)([b.ZP], () => null != R ? b.ZP.getVoiceStatesForChannel(R) : [], [R]), G = B.some(e => e.user.id === (null == D ? void 0 : D.id)), H = null === (T = P.embeds[0]) || void 0 === T ? void 0 : null === (S = T.fields) || void 0 === S ? void 0 : null === (I = S.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === I ? void 0 : I.rawValue, V = null != H ? H.split(",") : [], z = (0, a.Wu)([_.default], () => V.map(e => _.default.getUser(e)).filter(Boolean)), K = L && null != W ? y.NW.formatToPlainString(y.t["er/cHx"], {
    username: F
  }) : y.NW.formatToPlainString(y.t.noNjkZ, {
    username: U.nick
  }), Y = null != k && null != R, X = null;
  X = Y ? L || G ? y.NW.format(y.t.CaLQqK, {
    channelHook: (e, t) => (0, r.jsx)(p.Z, {
      channel: null != R ? R : void 0
    }, t)
  }) : y.NW.format(y.t.VugXpK, {
    channelHook: (e, t) => (0, r.jsx)(p.Z, {
      channel: null != R ? R : void 0
    }, t)
  }) : y.NW.string(y.t["tHT/Vl"]), 0 === B.length && (X = L ? y.NW.string(y.t.IE2uZW) : y.NW.string(y.t.QVhmGx));
  let q = L ? y.NW.string(y.t["00XIbm"]) : y.NW.string(y.t["7CrE9/"]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: E.card,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: K
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: X
      }), B.length > 0 ? (0, r.jsx)("div", {
        className: E.participants,
        children: (0, r.jsx)(m.Z, {
          guildId: w,
          partySize: {
            knownSize: B.length,
            unknownSize: 0,
            totalSize: B.length
          },
          members: B.map(e => e.user),
          maxAvatarsShown: 5
        })
      }) : (0, r.jsx)("div", {
        className: o()(E.participants, E.disabled),
        children: (0, r.jsx)(m.Z, {
          guildId: w,
          partySize: {
            knownSize: z.length,
            unknownSize: V.length - z.length,
            totalSize: V.length
          },
          members: z,
          maxAvatarsShown: 5
        })
      })]
    }), (0, r.jsxs)("div", {
      className: E.actions,
      children: [(0, r.jsxs)(l.zxk, {
        color: l.zxk.Colors.BRAND,
        onClick: () => {
          null != Z && null != w && ((0, f.uL)(x.Z5c.CHANNEL(w, Z)), c.default.selectVoiceChannel(Z))
        },
        className: E.button,
        innerClassName: E.buttonInner,
        disabled: G || !Y,
        children: [(0, r.jsx)(l.gj8, {
          size: "md",
          color: "currentColor"
        }), y.NW.string(y.t.zIeJq6)]
      }), (0, r.jsx)(l.zxk, {
        color: l.zxk.Colors.PRIMARY,
        onClick: () => {
          s.Z.sendMessage(A.id, u.ZP.parse(A, "\uD83D\uDC4B"))
        },
        className: E.button,
        children: q
      })]
    })]
  })
}