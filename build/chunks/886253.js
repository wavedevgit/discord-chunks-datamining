/** Chunk was on 86282 **/
n.d(l, {
  A: () => j
});
var t = n(200651);
n(192379);
var r = n(442837),
  i = n(481060),
  s = n(812206),
  a = n(370210),
  o = n(757746),
  c = n(572004),
  d = n(601911),
  u = n(504211),
  m = n(533159),
  x = n(981631),
  h = n(388032),
  v = n(795364),
  p = n(414561);

function j(e) {
  let {
    appId: l,
    skuId: n,
    transitionState: j,
    onClose: f,
    onHeaderTitleClick: N,
    children: b,
    footer: g
  } = e, S = (0, r.e7)([s.Z, a.Z], () => {
    var e;
    return null !== (e = s.Z.getApplication(l)) && void 0 !== e ? e : a.Z.getApplicationRecord(l)
  }, [l]), {
    data: k
  } = (0, o.Z)(n);
  if (null == S) return null;
  let O = (0, d.y)(S, 25),
    {
      termsOfServiceUrl: y,
      privacyPolicyUrl: I
    } = S;
  return (null == k ? void 0 : k.applicationId) !== l ? (0, t.jsxs)(i.Y0X, {
    transitionState: j,
    size: i.CgR.SMALL,
    children: [(0, t.jsxs)(i.hzk, {
      className: p.content,
      children: [(0, t.jsx)(i.olH, {
        onClick: f,
        className: v.modalCloseBtn
      }), (0, t.jsx)(i.Text, {
        variant: "text-lg/semibold",
        color: "header-primary",
        className: p.unavailableTitle,
        children: h.NW.string(h.t["0Bf80N"])
      }), (0, t.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: p.unavailableBody,
        children: h.NW.string(h.t.omH3bm)
      })]
    }), (0, t.jsx)(i.mzw, {
      children: (0, t.jsx)(i.zxk, {
        className: p.button,
        color: i.zxk.Colors.BRAND,
        onClick: f,
        size: i.zxk.Sizes.LARGE,
        children: h.NW.string(h.t.BddRzc)
      })
    })]
  }) : (0, t.jsxs)(i.Y0X, {
    transitionState: j,
    size: i.CgR.DYNAMIC,
    className: p.modal,
    children: [(0, t.jsxs)(i.xBx, {
      className: v.modalHeader,
      children: [(0, t.jsxs)(i.P3F, {
        className: v.modalTitle,
        onClick: N,
        children: [null != O && (0, t.jsx)("img", {
          src: O.href,
          alt: "",
          className: p.appIcon
        }), (0, t.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: S.name
        })]
      }), (0, t.jsx)(i.olH, {
        onClick: f,
        className: v.modalCloseBtn
      })]
    }), b, (0, t.jsxs)(i.mzw, {
      className: p.footer,
      children: [null != y || null != I ? (0, t.jsx)(i.Text, {
        color: "header-primary",
        variant: "text-sm/normal",
        children: (0, t.jsx)(m.Z, {
          termsOfServiceUrl: y,
          privacyPolicyUrl: I
        })
      }) : (0, t.jsx)(i.Text, {
        color: "header-primary",
        variant: "text-xs/normal",
        children: h.NW.string(h.t["3ZY+0N"])
      }), (0, t.jsxs)("div", {
        className: p.footerButtons,
        children: [c.wS && (0, t.jsx)(i.zxk, {
          look: i.zxk.Looks.FILLED,
          size: i.zxk.Sizes.ICON,
          color: i.zxk.Colors.PRIMARY,
          "aria-label": h.NW.string(h.t.WqhZsr),
          className: p.linkButton,
          innerClassName: p.innerLinkButton,
          onClick: () => {
            let e = "".concat(location.protocol, "//").concat(location.host).concat(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(l, n));
            (0, c.JG)(e), (0, i.showToast)((0, i.createToast)(h.NW.string(h.t["L/PwZW"]), i.ToastType.SUCCESS)), (0, u.X)(l, u.B.DETAILS_MODAL, n)
          },
          children: (0, t.jsx)(i.xPt, {
            size: "xs",
            color: "currentColor"
          })
        }), g]
      })]
    })]
  })
}