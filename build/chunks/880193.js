/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(313201),
  o = n(345861),
  A = n(208567),
  c = n(937615),
  d = n(289393),
  u = n(723047),
  g = n(727843),
  f = n(290348),
  m = n(927954),
  p = n(783454),
  h = n(981631),
  C = n(388032),
  b = n(174032),
  v = n(868195);

function x(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, g.N)(), x = (0, s.e7)([d.Z], () => {
    var e;
    return null === (e = d.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset
  }), [N, j] = f._T(n), [E, I] = f.mR(n), [O, y] = f.PK(n), [w, P] = f.d9(n, 1024), {
    imageCTA: B,
    imageAriaLabel: D,
    setFilename: T
  } = (0, m.Z)(x), S = i.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.map(e => ({
      value: e,
      label: (0, c.T4)(e, h.pKx.USD)
    }))) && void 0 !== e ? e : []
  }, [t]);

  function L(e, t) {
    null != t && T(t.name), P(e)
  }
  let R = (0, u.mY)(),
    Q = (0, l.Dt)(),
    W = (0, l.Dt)(),
    Z = (0, l.Dt)();
  return (0, r.jsxs)(p.Z, {
    title: C.NW.string(C.t.iHU439),
    intiallyExpanded: !0,
    children: [(0, r.jsxs)("div", {
      className: v.formSplit,
      children: [(0, r.jsx)("div", {
        className: v.formSplitHalf,
        children: (0, r.jsx)(a.hjN, {
          title: C.NW.string(C.t.grbGJy),
          titleId: Q,
          disabled: R,
          children: (0, r.jsx)(a.oil, {
            placeholder: C.NW.string(C.t["So2/xM"]),
            value: N,
            inputClassName: b.formInput,
            onChange: j,
            "aria-labelledby": Q,
            disabled: R
          })
        })
      }), (0, r.jsx)("div", {
        className: v.formSplitHalf,
        children: (0, r.jsx)(a.hjN, {
          title: C.NW.string(C.t.Ibl4BQ),
          titleId: W,
          disabled: R,
          children: (0, r.jsx)(a.q4e, {
            options: S,
            className: b.formInput,
            isDisabled: R || null == t,
            placeholder: C.NW.string(C.t["88XZDg"]),
            value: E,
            onChange: I,
            maxVisibleItems: 5,
            look: a.qQH.CUSTOM,
            "aria-labelledby": W
          })
        })
      })]
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsx)(a.hjN, {
      title: C.NW.string(C.t["1w2WcX"]),
      titleId: Z,
      disabled: R,
      children: (0, r.jsx)(a.Kx8, {
        placeholder: C.NW.string(C.t.p7Jr4O),
        value: O,
        rows: 2,
        autosize: !0,
        className: b.formInput,
        onChange: y,
        "aria-labelledby": Z,
        disabled: R
      })
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: v.iconSection,
      children: [(0, r.jsxs)(a.hjN, {
        title: C.NW.string(C.t.RUBM2t),
        className: v.iconSectionDescription,
        disabled: R,
        children: [(0, r.jsx)(a.R94, {
          type: a.R94.Types.DESCRIPTION,
          className: b.formDescription,
          disabled: R,
          children: C.NW.string(C.t["0iUofH"])
        }), (0, r.jsx)(o.Z, {
          onChange: L,
          buttonCTA: B,
          "aria-label": D,
          disabled: R,
          look: a.zxk.Looks.OUTLINED,
          color: a.zxk.Colors.PRIMARY
        })]
      }), (0, r.jsx)(A.Z, {
        image: w,
        hint: B,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: v.iconUploader,
        imageClassName: v.tierSymbolUploaderInner,
        onChange: L,
        "aria-label": D,
        disabled: R
      })]
    })]
  })
}