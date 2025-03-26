/** Chunk was on 27978 **/
n.d(t, {
  Z: () => x
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
  p = n(185625),
  h = n(551549),
  f = n(108427),
  g = n(314897),
  _ = n(981631),
  m = n(388032),
  b = n(802138);
o.ZP.initialize();
let x = e => {
  let {
    location: t
  } = e, n = (0, o.e7)([g.default], () => g.default.isAuthenticated()), x = (0, o.e7)([d.Z], () => d.Z.hasLoadedExperiments), N = (0, h.oK)("RSL - Landing Page"), [v, I] = i.useState(!1), [E, S] = i.useState(m.NW.string(m.t["9exy+f"])), [O, C] = i.useState(!0), j = e => {
    switch (e) {
      case _.evJ.INVALID_FORM_BODY:
      case _.evJ.DSA_RSL_REPORT_NOT_FOUND:
        S(m.NW.string(m.t.bzXDfX));
        break;
      case _.evJ.DSA_RSL_ALREADY_REQUESTED:
        S(m.NW.string(m.t.rV00ws));
        break;
      case _.evJ.DSA_RSL_LIMITED_TIME:
        S(m.NW.string(m.t["0dI29v"]));
        break;
      case _.evJ.DSA_RSL_REPORT_INELIGIBLE:
        S(m.NW.string(m.t["RGa/GR"]));
        break;
      default:
        S(m.NW.string(m.t["0QLzfn"]))
    }
  };
  return i.useEffect(() => {
    n ? (C(!0), s.k({
      withAnalyticsToken: !0
    }).then(() => C(!1)).catch(() => C(!1))) : C(!1)
  }, [n]), i.useEffect(() => {
    x || N || l.Z.getExperiments()
  }, [x, N]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, p.hs)(e) : void 0;
        null != n ? S(m.NW.string(m.t.e6mZMj)) : j(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        j(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        I(!1)
      }
    };
    I(!0), e((0, c.Z)(t)), (0, f.e)("report_second_look")
  }, [t]), N && !O && (0, r.jsxs)(u.ZP, {
    children: [(0, r.jsx)(u.Dx, {
      className: b.marginBottom8,
      children: E
    }), v && (0, r.jsx)(a.$jN, {})]
  })
}