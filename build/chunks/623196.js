/** Chunk was on 51724 **/
n.d(t, {
  Z: () => E
}), n(47120), n(773603);
var r = n(200651),
  i = n(192379),
  s = n(913527),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(668781),
  d = n(594174),
  u = n(63063),
  m = n(88658),
  p = n(398826),
  g = n(575356),
  h = n(838436),
  f = n(726985),
  x = n(981631),
  b = n(388032),
  N = n(94674);
let _ = e => {
  (0, o.ZDy)(async () => {
    let {
      default: t
    } = await n.e("25120").then(n.bind(n, 926281));
    return n => (0, r.jsx)(t, {
      modalProps: n,
      settings: e
    })
  })
};

function E() {
  let e = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    {
      currentHarvestType: t,
      awaitingInitialRequest: n
    } = (0, l.cj)([g.Z], () => ({
      currentHarvestType: g.Z.harvestType,
      awaitingInitialRequest: g.Z.requestingHarvest
    })),
    [s, E] = i.useState(!1);
  if (null == e) return null;
  let j = (0, m.$6)(t, e) || n,
    C = null != t && a()().diff(a()(t.created_at), "days") < x.eBq,
    O = j && C,
    v = () => {
      _({
        header: b.NW.string(b.t.jxXMEx),
        body: b.NW.format(b.t.fSv59f, {
          helpdeskArticle: u.Z.getArticleURL(x.BhN.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: b.NW.string(b.t.NYgNg4),
        cancelText: b.NW.string(b.t.jpVjsr),
        confirmButtonColor: o.zxk.Colors.BRAND,
        onConfirm: e => {
          E(!0), (0, p.h)(e).then(e => {
            null != e && null != e.body ? c.Z.show({
              body: b.NW.string(b.t["6Nmv4u"])
            }) : c.Z.show({
              title: b.NW.string(b.t.OjbtDg),
              body: b.NW.string(b.t["0F5Jys"])
            })
          }, () => c.Z.show({
            title: b.NW.string(b.t.OjbtDg),
            body: b.NW.string(b.t["0F5Jys"])
          })).finally(() => E(!1))
        }
      })
    };
  return (0, r.jsxs)(h.U, {
    setting: f.s6.PRIVACY_DATA_REQUEST_V2,
    children: [(0, r.jsx)(h.H, {
      header: b.NW.string(b.t.XAHCgI),
      description: b.NW.format(b.t.P3kNfn, {
        helpdeskArticle: u.Z.getArticleURL(x.BhN.GDPR_REQUEST_DATA)
      })
    }), O ? (0, r.jsx)(o.Zbd, {
      className: N.card,
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: b.NW.format(b.t.RNDlV1, {
          date: a()(t.created_at).add(x.eBq, "days").format("MMMM Do YYYY")
        })
      })
    }) : (0, r.jsx)("div", {
      className: N.button,
      children: (0, r.jsx)(o.ua7, {
        text: e.isStaff() ? b.NW.string(b.t.ZPQLHx) : e.verified ? null : b.NW.string(b.t["c1f88/"]),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: i
          } = e;
          return (0, r.jsx)(o.zxk, {
            disabled: j,
            onClick: v,
            onMouseEnter: t,
            onMouseLeave: i,
            look: o.zxk.Looks.FILLED,
            color: o.zxk.Colors.BRAND,
            submitting: s || n,
            children: b.NW.string(b.t.dmBSKi)
          })
        }
      })
    })]
  })
}