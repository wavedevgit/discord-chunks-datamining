/** Chunk was on 7755 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  l = n(192379),
  i = n(442837),
  o = n(481060),
  a = n(19780),
  s = n(571826),
  c = n(630759),
  u = n(301107),
  d = n(785792),
  h = n(190054),
  f = n(760373),
  p = n(388032),
  g = n(263773);

function v(e) {
  let {
    channelId: t
  } = e, n = (0, i.e7)([a.Z], () => {
    var e;
    return null === (e = a.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator
  }), v = (0, u.W)({
    fingerprintBase64: n,
    chunkSize: f.y6,
    desiredLength: f.YP
  }), N = l.useCallback(() => {
    (0, s.PM)({
      channelId: t
    })
  }, [t]);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsxs)("div", {
      className: g.tag,
      children: [(0, r.jsx)(o.mBM, {
        size: "xxs",
        color: o.TVs.colors.TEXT_POSITIVE
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-positive",
        children: p.NW.string(p.t["3BogKS"])
      })]
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: p.NW.string(p.t.B9JNsr)
    }), (0, r.jsxs)("div", {
      className: g.header,
      children: [(0, r.jsx)(o.X6q, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: p.NW.string(p.t.cTQI5u)
      }), null != v && (0, r.jsx)(h.H, {
        chunks: v,
        color: o.TVs.colors.INTERACTIVE_NORMAL.css,
        onCopy: N
      })]
    }), (0, r.jsx)(d.b, {
      className: g.code,
      chunks: v,
      columns: f.WK
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: p.NW.format(p.t.wKxADQ, {
        helpArticle: (0, c.uV)()
      })
    })]
  })
}