/** Chunk was on 62423 **/
n.d(t, {
  N: () => C
}), n(388685);
var r = n(255367),
  i = n(442837),
  l = n(704215),
  a = n(481060),
  o = n(782568),
  s = n(243778),
  c = n(970731),
  u = n(594174),
  d = n(63063),
  p = n(69589),
  h = n(981631),
  f = n(921944),
  m = n(388032),
  g = n(201838);
let b = e => {
    let {
      user: t,
      markAsDismissed: n
    } = e;
    return (0, r.jsxs)("div", {
      className: g.assetContainer,
      children: [(0, r.jsx)(p.Z, {
        user: t,
        rank: 1,
        avatarSize: a.EFr.SIZE_56
      }), (0, r.jsx)(a.P3F, {
        className: g.closeIcon,
        onClick: () => {
          n(f.L.USER_DISMISS)
        },
        children: (0, r.jsx)(a.Dio, {
          color: "currentColor",
          size: "sm"
        })
      })]
    })
  },
  _ = e => {
    let {
      user: t,
      markAsDismissed: n
    } = e;
    return (0, r.jsx)(c.ZP, {
      asset: (0, r.jsx)(b, {
        user: t,
        markAsDismissed: n
      }),
      header: m.intl.string(m.t.wAtFS0),
      content: m.intl.string(m.t.qIZICA),
      buttonCTA: m.intl.string(m.t.hvVgAQ),
      onClick: () => {
        (0, o.Z)(d.Z.getArticleURL(h.BhN.GUILD_LEADERBOARD)), n(f.L.USER_DISMISS)
      },
      markAsDismissed: n,
      caretPosition: c.DF.RIGHT_TOP,
      buttonProps: {
        color: a.zxk.Colors.WHITE,
        look: a.zxk.Looks.LINK,
        size: a.zxk.Sizes.MIN
      }
    })
  };

function C(e) {
  let {
    children: t
  } = e, n = [l.z.LEADERBOARD_NUX_COACHMARK], [o, c] = (0, s.US)(n, void 0), d = (0, i.e7)([u.default], () => u.default.getCurrentUser());
  return o !== l.z.LEADERBOARD_NUX_COACHMARK || null == d ? t : (0, r.jsx)(a.yRy, {
    renderPopout: () => _({
      user: d,
      markAsDismissed: c
    }),
    position: "left",
    animation: a.yRy.Animation.TRANSLATE,
    shouldShow: !0,
    children: () => t
  })
}