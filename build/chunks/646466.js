/** Chunk was on 93886 **/
n.d(t, {
  O: () => u
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(481060),
  l = n(246992),
  o = n(619899),
  s = n(18868),
  c = n(281598),
  d = n(631541);
let u = () => {
  var e, t;
  let [n, u] = a.useState(c.Fr.HERO_BANNER_STATIC), {
    assets: m,
    upsertAsset: h,
    previewEnabled: p,
    setPreviewEnabled: f,
    deleteAsset: x
  } = (0, o.N)(), b = a.useCallback((e, t) => {
    let n = c.Kj[e.name];
    null != n && (e.type.startsWith("image/") || e.type.startsWith("video/")) && h(n, e)
  }, [h]), _ = a.useCallback(async e => {
    (await (0, c.RF)(e)).forEach(e => (0, c.ZK)(e, b, c.Eo)), f(!0)
  }, [b, f]), g = a.useCallback(e => {
    x(e)
  }, [x]), v = a.useMemo(() => Object.values(c.Fr).filter(e => null != m[e]).map(e => ({
    label: e,
    value: e
  })), [m]);
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(s.L, {
      onDrop: _
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      children: "Drop a file in this panel to upload."
    }), (0, r.jsxs)("div", {
      className: d.previewToggleContainer,
      children: [(0, r.jsx)(i.rsf, {
        checked: p,
        onChange: e => f(e)
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Enable Preview"
      })]
    }), v.length > 0 && (0, r.jsxs)("div", {
      className: d.assetSelectorContainer,
      children: [(0, r.jsx)(i.PhF, {
        className: d.assetSelector,
        options: v,
        isSelected: e => e === n,
        select: u,
        serialize: e => e,
        popoutLayerContext: l.O$
      }), (0, r.jsx)(i.zxk, {
        className: d.removeAssetButton,
        onClick: () => g(n),
        children: "Remove"
      })]
    }), (0, r.jsx)(i.LZC, {
      size: 24
    }), (0, r.jsx)(i.X6q, {
      variant: "heading-lg/bold",
      children: "DEBUG ZONE - IGNORE"
    }), (0, r.jsx)("img", {
      src: null !== (t = null === (e = m[n]) || void 0 === e ? void 0 : e.src) && void 0 !== t ? t : "",
      alt: ""
    })]
  })
}