/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(86693), n(536091);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(727072),
  l = n(85960),
  o = n(676317),
  A = n(823379),
  c = n(84613),
  d = n(740903),
  u = n(598622),
  g = n(388032),
  f = n(356604);

function m(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    page: a
  } = e;
  return (0, r.jsxs)("div", {
    className: f.safetyStepRow,
    children: [(0, r.jsxs)("div", {
      className: f.safetyStepContent,
      children: [(0, r.jsx)(s.qEK, {
        src: i,
        size: s.EFr.SIZE_40,
        "aria-label": t
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: n
        })]
      })]
    }), (0, r.jsx)(s.zxk, {
      className: f.__invalid_editButton,
      size: s.zxk.Sizes.SMALL,
      color: s.zxk.Colors.PRIMARY,
      look: s.zxk.Looks.OUTLINED,
      onClick: () => (0, c.K)(a),
      children: g.NW.string(g.t.bt75u7)
    })]
  })
}

function p(e) {
  let {
    guild: t
  } = e;
  (0, a.RD)(t.id);
  let c = (0, l.Z6)(t.id),
    {
      rulesByTriggerType: p
    } = (0, a.pH)(t.id),
    {
      numEnabledRules: h,
      numRules: C
    } = i.useMemo(() => {
      let e = 0,
        t = 0;
      return null == p || Object.values(c).flat().forEach(n => {
        var r;
        let i = null === (r = p[n]) || void 0 === r ? void 0 : r.filter(A.lm);
        if (null == i || 0 === i.length) {
          t++;
          return
        }
        i.forEach(n => {
          n.enabled && e++, t++
        })
      }), {
        numEnabledRules: e,
        numRules: t
      }
    }, [c, p]),
    b = (0, u.Q)(t),
    v = b[d.u.CAPTCHA_AND_RAID_PROTECTION],
    x = b[d.u.DM_AND_SPAM_PROTECTION],
    N = b[d.u.PERMISSIONS],
    j = (0, o.pr)(t.id);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: f.header,
      children: g.NW.string(g.t["0A+VSE"])
    }), (0, r.jsxs)("div", {
      className: f.safetyChecklist,
      children: [(0, r.jsx)(m, {
        icon: n(14215),
        title: g.NW.string(g.t["53eF5u"]),
        subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
          enabled: v.filter(e => e.enabled).length,
          total: v.length
        }),
        page: d.u.CAPTCHA_AND_RAID_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.divider
      }), (0, r.jsx)(m, {
        icon: n(128724),
        title: g.NW.string(g.t.O0SfFx),
        subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
          enabled: x.filter(e => e.enabled).length,
          total: x.length
        }),
        page: d.u.DM_AND_SPAM_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.divider
      }), j && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m, {
          icon: n(145136),
          title: g.NW.string(g.t.uRelg4),
          subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
            enabled: h,
            total: C
          }),
          page: d.u.AUTOMOD
        }), (0, r.jsx)("div", {
          className: f.divider
        })]
      }), (0, r.jsx)(m, {
        icon: n(913414),
        title: g.NW.string(g.t.xrmhRU),
        subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
          enabled: N.filter(e => e.enabled).length,
          total: N.length
        }),
        page: d.u.PERMISSIONS
      })]
    })]
  })
}