/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(313201),
  o = n(345861),
  c = n(208567),
  d = n(937615),
  u = n(289393),
  m = n(723047),
  p = n(727843),
  g = n(290348),
  h = n(927954),
  f = n(783454),
  b = n(981631),
  x = n(388032),
  j = n(255180),
  N = n(118108);

function v(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, p.N)(), v = (0, s.e7)([u.Z], () => {
    var e;
    return null === (e = u.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset
  }), [_, O] = g._T(n), [y, C] = g.mR(n), [I, E] = g.PK(n), [S, T] = g.d9(n, 1024), {
    imageCTA: P,
    imageAriaLabel: w,
    setFilename: R
  } = (0, h.Z)(v), D = i.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.map(e => ({
      value: e,
      label: (0, d.T4)(e, b.pKx.USD)
    }))) && void 0 !== e ? e : []
  }, [t]);

  function Z(e, t) {
    null != t && R(t.name), T(e)
  }
  let A = (0, m.mY)(),
    k = (0, l.Dt)(),
    W = (0, l.Dt)(),
    L = (0, l.Dt)();
  return (0, r.jsxs)(f.Z, {
    title: x.NW.string(x.t.iHU439),
    intiallyExpanded: !0,
    children: [(0, r.jsxs)("div", {
      className: N.formSplit,
      children: [(0, r.jsx)("div", {
        className: N.formSplitHalf,
        children: (0, r.jsx)(a.hjN, {
          title: x.NW.string(x.t.grbGJy),
          titleId: k,
          disabled: A,
          children: (0, r.jsx)(a.oil, {
            placeholder: x.NW.string(x.t["So2/xM"]),
            value: _,
            inputClassName: j.formInput,
            onChange: O,
            "aria-labelledby": k,
            disabled: A
          })
        })
      }), (0, r.jsx)("div", {
        className: N.formSplitHalf,
        children: (0, r.jsx)(a.hjN, {
          title: x.NW.string(x.t.Ibl4BQ),
          titleId: W,
          disabled: A,
          children: (0, r.jsx)(a.q4e, {
            options: D,
            className: j.formInput,
            isDisabled: A || null == t,
            placeholder: x.NW.string(x.t["88XZDg"]),
            value: y,
            onChange: C,
            maxVisibleItems: 5,
            look: a.qQH.CUSTOM,
            "aria-labelledby": W
          })
        })
      })]
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsx)(a.hjN, {
      title: x.NW.string(x.t["1w2WcX"]),
      titleId: L,
      disabled: A,
      children: (0, r.jsx)(a.Kx8, {
        placeholder: x.NW.string(x.t.p7Jr4O),
        value: I,
        rows: 2,
        autosize: !0,
        className: j.formInput,
        onChange: E,
        "aria-labelledby": L,
        disabled: A
      })
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: N.iconSection,
      children: [(0, r.jsxs)(a.hjN, {
        title: x.NW.string(x.t.RUBM2t),
        className: N.iconSectionDescription,
        disabled: A,
        children: [(0, r.jsx)(a.R94, {
          type: a.R94.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: A,
          children: x.NW.string(x.t["0iUofH"])
        }), (0, r.jsx)(o.Z, {
          onChange: Z,
          buttonCTA: P,
          "aria-label": w,
          disabled: A,
          look: a.zxk.Looks.OUTLINED,
          color: a.zxk.Colors.PRIMARY
        })]
      }), (0, r.jsx)(c.Z, {
        image: S,
        hint: P,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: N.iconUploader,
        imageClassName: N.tierSymbolUploaderInner,
        onChange: Z,
        "aria-label": w,
        disabled: A
      })]
    })]
  })
}