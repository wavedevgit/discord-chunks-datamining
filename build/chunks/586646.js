/** Chunk was on 61195 **/
n.d(t, {
  Z: () => g
});
var i = n(200651),
  o = n(192379),
  r = n(442837),
  a = n(481060),
  l = n(19780),
  c = n(571826),
  s = n(630759),
  u = n(301107),
  d = n(785792),
  _ = n(190054),
  h = n(760373),
  f = n(388032),
  p = n(173753);

function g(e) {
  let {
    channelId: t
  } = e, n = (0, r.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator
  }), g = (0, u.W)({
    fingerprintBase64: n,
    chunkSize: h.y6,
    desiredLength: h.YP
  }), v = o.useCallback(() => {
    (0, c.PM)({
      channelId: t
    })
  }, [t]);
  return (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsxs)("div", {
      className: p.tag,
      children: [(0, i.jsx)(a.mBM, {
        size: "xxs",
        color: a.TVs.colors.TEXT_POSITIVE
      }), (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-positive",
        children: f.NW.string(f.t["3BogKS"])
      })]
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: f.NW.string(f.t.B9JNsr)
    }), (0, i.jsxs)("div", {
      className: p.header,
      children: [(0, i.jsx)(a.X6q, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: f.NW.string(f.t.cTQI5u)
      }), null != g && (0, i.jsx)(_.H, {
        chunks: g,
        color: a.TVs.colors.INTERACTIVE_NORMAL.css,
        onCopy: v
      })]
    }), (0, i.jsx)(d.b, {
      className: p.code,
      chunks: g,
      columns: h.WK
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: f.NW.format(f.t.wKxADQ, {
        helpArticle: (0, s.uV)()
      })
    })]
  })
}