/** Chunk was on 51724 **/
n.d(t, {
  default: () => S
}), n(47120), n(411104);
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(442837),
  o = n(780384),
  c = n(481060),
  d = n(355467),
  u = n(179360),
  m = n(881052),
  p = n(128069),
  g = n(100527),
  h = n(906732),
  f = n(600164),
  x = n(431369),
  b = n(210887),
  N = n(78839),
  _ = n(74538),
  E = n(388032),
  j = n(241534);
async function C(e, t, n, r) {
  await (0, u.bG)(n), await (0, d.Mg)(e, {
    items: (0, _.MY)(e, t)
  }, r)
}

function O(e) {
  let {
    premiumSubscription: t,
    guildBoostSlotId: n,
    onNext: s,
    onClose: d
  } = e, [u, g] = i.useState(!1), N = (0, l.e7)([b.Z], () => b.Z.theme), {
    analyticsLocations: O
  } = (0, h.ZP)(), [v, S] = i.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.xBx, {
      separator: !1,
      children: [(0, r.jsx)(c.vwX, {
        tag: c.RB0.H4,
        children: E.NW.string(E.t.l52ih4)
      }), (0, r.jsx)(c.olH, {
        onClick: d
      })]
    }), (0, r.jsxs)(c.hzk, {
      className: j.body,
      children: [null !== v && (0, r.jsx)(c.kzN, {
        className: j.error,
        children: v
      }), E.NW.string(E.t.DY2CXl)]
    }), (0, r.jsxs)(c.mzw, {
      justify: f.Z.Justify.START,
      children: [(0, r.jsx)(c.zxk, {
        onClick: async () => {
          try {
            g(!0), S(null);
            let e = (0, x.g)(t, 1);
            a()((0, _.uV)(e) <= (0, _.uV)(t.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await C(t, e, n, O), s()
          } catch (t) {
            let e = t instanceof m.HF ? t : new m.HF(t, t.code);
            S(E.NW.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? E.t.dq4vq6 : E.t["5mlOCQ"])), g(!1)
          }
        },
        submitting: u,
        children: E.NW.string(E.t.etZP4O)
      }), (0, r.jsx)(c.zxk, {
        look: c.zxk.Looks.LINK,
        color: (0, o.ap)(N) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
        onClick: d,
        disabled: u,
        children: E.NW.string(E.t.oEAioK)
      })]
    })]
  })
}

function v(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.xBx, {
      separator: !1,
      children: [(0, r.jsx)(c.vwX, {
        tag: c.RB0.H4,
        children: E.NW.string(E.t.H9QUAA)
      }), (0, r.jsx)(c.olH, {
        onClick: t
      })]
    }), (0, r.jsxs)(c.hzk, {
      className: j.body,
      children: [(0, r.jsx)("div", {
        className: j.uncancelImage
      }), (0, r.jsx)("div", {
        children: E.NW.string(E.t.G27uHR)
      })]
    }), (0, r.jsx)(c.mzw, {
      children: (0, r.jsx)(c.zxk, {
        onClick: t,
        children: E.NW.string(E.t.BddRzc)
      })
    })]
  })
}

function S(e) {
  let t, {
      guildBoostSlotId: n,
      transitionState: s,
      onClose: a
    } = e,
    {
      analyticsLocations: o
    } = (0, h.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  i.useEffect(() => {
    N.ZP.hasFetchedSubscriptions() || (0, d.jg)()
  }, []);
  let u = (0, l.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
    [m, p] = i.useState(1);
  if (null == u) t = (0, r.jsx)(c.hzk, {
    children: (0, r.jsx)(c.$jN, {})
  });
  else switch (m) {
    case 1:
      t = (0, r.jsx)(O, {
        premiumSubscription: u,
        guildBoostSlotId: n,
        onNext: () => p(2),
        onClose: a
      });
      break;
    case 2:
      t = (0, r.jsx)(v, {
        onClose: a
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(m))
  }
  return (0, r.jsx)(h.Gt, {
    value: o,
    children: (0, r.jsx)(c.Y0X, {
      transitionState: s,
      children: t
    })
  })
}