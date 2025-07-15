/** Chunk was on 46989 **/
n.d(t, {
  Z: () => m
});
var r = n(255367),
  l = n(73800),
  i = n(442837),
  s = n(481060),
  a = n(433355),
  o = n(189432),
  u = n(356778),
  c = n(776767),
  d = n(50493),
  E = n(388032),
  _ = n(12740);

function m(e) {
  let {
    userId: t,
    guildId: n
  } = e, m = (0, i.e7)([a.ZP], () => a.ZP.getGuildSidebarState(n), [n]), {
    messagesCount: A,
    linksCount: g,
    mediaCount: f
  } = (0, u.P2)(t, n), T = new Intl.NumberFormat(E.intl.currentLocale).format(A), I = new Intl.NumberFormat(E.intl.currentLocale).format(g), h = new Intl.NumberFormat(E.intl.currentLocale).format(f), O = l.useCallback(async e => {
    if (null == m) return;
    let r = (0, u.Ow)(t, e, {
      include_nsfw: !0
    });
    await (0, o.r)(n, t, m.baseChannelId, {
      modViewPanel: d.k.MESSAGE_HISTORY,
      additionalSearchQuery: r
    })
  }, [n, m, t]);
  return (0, r.jsx)(s.xJW, {
    title: E.intl.string(E.t.vCn2Tk),
    titleClassName: _.infoTitle,
    children: (0, r.jsxs)(c.WM, {
      children: [(0, r.jsx)(c._2, {
        icon: (0, r.jsx)(s.kBi, {
          size: "custom",
          color: "currentColor",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.OIgYlZ)
        }),
        description: A === u.II ? (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: T
        }),
        onNavigate: A > 0 ? () => O(u.mw.MESSAGES) : void 0
      }), (0, r.jsx)(c._2, {
        icon: (0, r.jsx)(s.xPt, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.DFSvTk)
        }),
        description: g === u.II ? (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: I
        }),
        onNavigate: g > 0 ? () => O(u.mw.LINKS) : void 0
      }), (0, r.jsx)(c._2, {
        icon: (0, r.jsx)(s.Ka2, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t["Aw9+/P"])
        }),
        description: f === u.II ? (0, r.jsx)(s.$jN, {
          type: s.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: h
        }),
        onNavigate: f > 0 ? () => O(u.mw.MEDIA) : void 0
      })]
    })
  })
}