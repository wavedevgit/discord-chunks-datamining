/** Chunk was on 27978 **/
n.d(t, {
  Z: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(893776),
  l = n(232567),
  c = n(129293),
  u = n(388905),
  d = n(353926),
  h = n(185625),
  p = n(551549),
  g = n(108427),
  m = n(314897),
  _ = n(981631),
  f = n(388032),
  b = n(467025);
o.ZP.initialize();
let x = e => {
  let {
    location: t
  } = e, n = (0, o.e7)([m.default], () => m.default.isAuthenticated()), x = (0, o.e7)([d.Z], () => d.Z.hasLoadedExperiments), N = (0, p.oK)("RSL - Landing Page"), [v, E] = i.useState(!1), [I, j] = i.useState(f.NW.string(f.t["9exy+f"])), [C, S] = i.useState(!0), O = e => {
    switch (e) {
      case _.evJ.INVALID_FORM_BODY:
      case _.evJ.DSA_RSL_REPORT_NOT_FOUND:
        j(f.NW.string(f.t.bzXDfX));
        break;
      case _.evJ.DSA_RSL_ALREADY_REQUESTED:
        j(f.NW.string(f.t.rV00ws));
        break;
      case _.evJ.DSA_RSL_LIMITED_TIME:
        j(f.NW.string(f.t["0dI29v"]));
        break;
      case _.evJ.DSA_RSL_REPORT_INELIGIBLE:
        j(f.NW.string(f.t["RGa/GR"]));
        break;
      default:
        j(f.NW.string(f.t["0QLzfn"]))
    }
  };
  return i.useEffect(() => {
    n ? (S(!0), l.k({
      withAnalyticsToken: !0
    }).then(() => S(!1)).catch(() => S(!1))) : S(!1)
  }, [n]), i.useEffect(() => {
    x || N || s.Z.getExperiments()
  }, [x, N]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.hs)(e) : void 0;
        null != n ? j(f.NW.string(f.t.e6mZMj)) : O(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        O(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        E(!1)
      }
    };
    E(!0), e((0, c.Z)(t)), (0, g.e)("report_second_look")
  }, [t]), N && !C && (0, r.jsxs)(u.ZP, {
    children: [(0, r.jsx)(u.Dx, {
      className: b.marginBottom8,
      children: I
    }), v && (0, r.jsx)(a.$jN, {})]
  })
}