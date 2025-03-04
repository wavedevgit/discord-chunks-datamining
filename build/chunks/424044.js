/** Chunk was on 27978 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  l = n(893776),
  s = n(232567),
  c = n(129293),
  u = n(388905),
  d = n(353926),
  h = n(185625),
  g = n(551549),
  p = n(108427),
  f = n(314897),
  m = n(981631),
  _ = n(388032),
  b = n(802138);
o.ZP.initialize();
let N = e => {
  let {
    location: t
  } = e, n = (0, o.e7)([f.default], () => f.default.isAuthenticated()), N = (0, o.e7)([d.Z], () => d.Z.hasLoadedExperiments), x = (0, g.oK)("RSL - Landing Page"), [v, I] = i.useState(!1), [E, j] = i.useState(_.NW.string(_.t["9exy+f"])), [O, C] = i.useState(!0), S = e => {
    switch (e) {
      case m.evJ.INVALID_FORM_BODY:
      case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
        j(_.NW.string(_.t.bzXDfX));
        break;
      case m.evJ.DSA_RSL_ALREADY_REQUESTED:
        j(_.NW.string(_.t.rV00ws));
        break;
      case m.evJ.DSA_RSL_LIMITED_TIME:
        j(_.NW.string(_.t["0dI29v"]));
        break;
      case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
        j(_.NW.string(_.t["RGa/GR"]));
        break;
      default:
        j(_.NW.string(_.t["0QLzfn"]))
    }
  };
  return i.useEffect(() => {
    n ? (C(!0), s.k({
      withAnalyticsToken: !0
    }).then(() => C(!1)).catch(() => C(!1))) : C(!1)
  }, [n]), i.useEffect(() => {
    N || x || l.Z.getExperiments()
  }, [N, x]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.hs)(e) : void 0;
        null != n ? j(_.NW.string(_.t.e6mZMj)) : S(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        S(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        I(!1)
      }
    };
    I(!0), e((0, c.Z)(t)), (0, p.e)("report_second_look")
  }, [t]), x && !O && (0, r.jsxs)(u.ZP, {
    children: [(0, r.jsx)(u.Dx, {
      className: b.marginBottom8,
      children: E
    }), v && (0, r.jsx)(a.$jN, {})]
  })
}