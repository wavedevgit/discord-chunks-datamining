/** Chunk was on 79602 **/
n.d(e, {
  default: () => g
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(541822),
  s = n(442837),
  l = n(481060),
  a = n(728345),
  c = n(812206),
  u = n(600164),
  p = n(886176),
  d = n(572004),
  _ = n(504211),
  S = n(283836),
  f = n(507608),
  C = n(533159),
  I = n(981631),
  O = n(979007),
  b = n(388032),
  T = n(677993);

function g(t) {
  let {
    onClose: e,
    transitionState: n,
    appId: g,
    guildId: m
  } = t, P = (0, s.e7)([c.Z], () => c.Z.getApplication(g), [g]), [h, N] = r.useState(() => c.Z.isFetchingApplication(g) ? {
    status: 1
  } : {
    status: 0
  });
  r.useEffect(() => {
    0 === h.status && (N({
      status: 1
    }), a.ZP.fetchApplication(g).then(() => {
      N({
        status: 2
      })
    }).catch(t => {
      N({
        status: 3,
        error: t.message
      })
    }))
  }, [g, h.status]);
  let {
    subscriptions: E,
    otps: y
  } = (0, S.q)(g);
  if (null == P) return null;
  let L = b.NW.formatToPlainString(b.t.XDRjs7, {
    appName: P.name
  });
  return (0, i.jsxs)(l.Y0X, {
    transitionState: n,
    "aria-label": L,
    size: l.CgR.DYNAMIC,
    className: T.modal,
    children: [(0, i.jsxs)(l.xBx, {
      className: T.modalHeader,
      children: [(0, i.jsxs)("div", {
        className: T.modalTitle,
        children: [(0, i.jsx)(p.Z, {}), (0, i.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          children: L
        })]
      }), (0, i.jsxs)("div", {
        className: T.modalHeaderLinks,
        children: [d.wS && (0, i.jsx)(l.zxk, {
          look: l.iLD.BLANK,
          size: l.PhG.ICON,
          color: l.Ttl.TRANSPARENT,
          "aria-label": b.NW.string(b.t.WqhZsr),
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(g, O.GlobalDiscoveryAppsSections.STORE));
            (0, d.JG)(t), (0, l.showToast)((0, l.createToast)(b.NW.string(b.t["L/PwZW"]), l.ToastType.SUCCESS)), (0, _.X)(g, _.B.STORE_MODAL)
          },
          children: (0, i.jsx)(l.xPt, {
            size: "sm"
          })
        }), (0, i.jsx)(l.olH, {
          onClick: e,
          className: T.modalCloseBtn
        })]
      })]
    }), (0, i.jsx)("div", {
      className: T.scrollerWrapper,
      children: (0, i.jsx)(o.Z, {
        className: T.scroller,
        children: (0, i.jsx)(f.AF, {
          app: P,
          guildId: m,
          subscriptions: E,
          otps: y
        })
      })
    }), (0, i.jsx)(l.mzw, {
      justify: u.Z.Justify.END,
      children: (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        children: null != P.termsOfServiceUrl || null != P.privacyPolicyUrl ? (0, i.jsx)(C.Z, {
          termsOfServiceUrl: P.termsOfServiceUrl,
          privacyPolicyUrl: P.privacyPolicyUrl
        }) : b.NW.string(b.t["3ZY+0N"])
      })
    })]
  })
}