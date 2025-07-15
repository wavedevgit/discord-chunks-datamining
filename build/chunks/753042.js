/** Chunk was on 46989 **/
n.d(t, {
  Z: () => T
});
var r = n(255367),
  l = n(73800),
  i = n(399606),
  s = n(481060),
  a = n(388905),
  o = n(527379),
  u = n(376923),
  c = n(16829),
  d = n(430824),
  E = n(944486),
  _ = n(189432),
  m = n(776767),
  A = n(981631),
  g = n(388032),
  f = n(12740);

function T(e) {
  let {
    member: t
  } = e, n = (0, i.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), T = (0, u.mh)(t.userId, t.guildId), I = (0, u.mV)(t.userId, t.guildId), h = (0, u.LD)(t.userId), O = (0, u.wi)(t.userId, t.guildId);
  return (l.useEffect(() => {
    (0, o.zO)(t.guildId)
  }, [t.guildId]), null == n) ? null : (0, r.jsx)(s.xJW, {
    title: g.intl.string(g.t["ldCE/v"]),
    titleClassName: f.infoTitle,
    children: (0, r.jsxs)(m.WM, {
      children: [(0, r.jsx)(m._2, {
        icon: (0, r.jsx)(s.lZ8, {
          size: "custom",
          width: m.Mn,
          height: m.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t.nzGai4)
        }),
        description: T ? (0, r.jsx)(s.sV5, {
          size: "custom",
          width: m.Mn,
          height: m.Mn,
          color: s.TVs.colors.STATUS_POSITIVE
        }) : (0, r.jsx)(s.CTb, {
          size: "custom",
          width: m.Mn,
          height: m.Mn,
          color: s.TVs.colors.STATUS_DANGER
        })
      }), I !== u.qc.NO_GATE && (0, r.jsx)(m._2, {
        icon: (0, r.jsx)(s.snC, {
          size: "custom",
          width: m.Mn,
          height: m.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t["93hqlp"])
        }),
        description: I === u.qc.AGREED ? (0, r.jsx)(s.sV5, {
          size: "custom",
          width: m.Mn,
          height: m.Mn,
          color: s.TVs.colors.STATUS_POSITIVE
        }) : (0, r.jsx)(s.CTb, {
          size: "custom",
          width: m.Mn,
          height: m.Mn,
          color: s.TVs.colors.STATUS_DANGER
        })
      }), (0, r.jsx)(m._2, {
        icon: (0, r.jsx)(s.gw7, {
          size: "custom",
          color: "currentColor",
          width: m.Mn,
          height: m.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t.SaDIpK)
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: h
        })
      }), (0, r.jsx)(m._2, {
        icon: (0, r.jsx)(a.Vj, {
          guild: n,
          size: a.Vj.Sizes.SMOL,
          animate: !1,
          className: f.guildIcon
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t["NQJ+WF"])
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: O
        })
      }), (0, r.jsx)(m._2, {
        icon: (0, r.jsx)(s.ejJ, {
          size: "custom",
          width: m.Mn,
          height: m.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t["eJOq+f"])
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: (0, r.jsx)(c.ZP, {
            userId: t.userId,
            guildId: t.guildId,
            showInviterAsFooter: !0,
            onClickInviter: e => {
              let n = E.Z.getChannelId();
              (0, _.r)(t.guildId, e.id, null != n ? n : A.lds)
            }
          })
        })
      })]
    })
  })
}