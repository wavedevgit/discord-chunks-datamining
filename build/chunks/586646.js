/** Chunk was on 58173 **/
n.d(t, {
  Z: () => y
});
var r = n(200651),
  l = n(192379),
  o = n(442837),
  i = n(481060),
  s = n(19780),
  a = n(571826),
  c = n(630759),
  u = n(301107),
  d = n(785792),
  h = n(190054),
  f = n(760373),
  p = n(388032),
  g = n(469149);

function y(e) {
  let {
    channelId: t
  } = e, n = (0, o.e7)([s.Z], () => {
    var e;
    return null === (e = s.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator
  }), y = (0, u.W)({
    fingerprintBase64: n,
    chunkSize: f.y6,
    desiredLength: f.YP
  }), v = l.useCallback(() => {
    (0, a.PM)({
      channelId: t
    })
  }, [t]);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsxs)("div", {
      className: g.tag,
      children: [(0, r.jsx)(i.mBM, {
        size: "xxs",
        color: i.TVs.colors.TEXT_POSITIVE
      }), (0, r.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "text-positive",
        children: p.NW.string(p.t["3BogKS"])
      })]
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: p.NW.string(p.t.B9JNsr)
    }), (0, r.jsxs)("div", {
      className: g.header,
      children: [(0, r.jsx)(i.X6q, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: p.NW.string(p.t.cTQI5u)
      }), null != y && (0, r.jsx)(h.H, {
        chunks: y,
        color: i.TVs.colors.INTERACTIVE_NORMAL.css,
        onCopy: v
      })]
    }), (0, r.jsx)(d.b, {
      className: g.code,
      chunks: y,
      columns: f.WK
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: p.NW.format(p.t.wKxADQ, {
        helpArticle: (0, c.uV)()
      })
    })]
  })
}