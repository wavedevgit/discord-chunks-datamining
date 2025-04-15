/** Chunk was on 5207 **/
n.d(t, {
  i: () => O
}), n(388685);
var r = n(200651),
  i = n(192379),
  l = n(636977),
  o = n(442837),
  s = n(704215),
  a = n(952265),
  c = n(481060),
  u = n(570140),
  d = n(605236),
  h = n(243778),
  p = n(341907),
  f = n(819640),
  g = n(822857),
  m = n(479766),
  b = n(331663),
  y = n(921944),
  _ = n(46140);
let v = "orb-announcement-modal-key";

function O() {
  let {
    hasLayers: e
  } = (0, o.cj)([f.Z], () => ({
    hasLayers: f.Z.hasLayers()
  })), {
    onboardingModalOpenedPrior: t
  } = (0, o.cj)([m.Z], () => ({
    onboardingModalOpenedPrior: m.Z.onboardingModalOpenedPrior
  })), {
    enabled: O
  } = (0, g.W)({
    location: "virtual_currency_announcement_modal"
  }), [C, S] = (0, h.US)(O ? [s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...b.b.useSelectedDismissibleContent), j = (0, c.s9z)(c.JQI);
  i.useEffect(() => {
    O && !t && C === s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL && (e || j || (u.Z.dispatch({
      type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN"
    }), (0, a.ZD)(async () => {
      let {
        AnnouncementModal: e
      } = await n.e("86653").then(n.bind(n, 993318));
      return function(t) {
        let {
          onClose: n,
          transitionState: i
        } = t, o = async () => {
          await n(), S(y.L.USER_DISMISS)
        };
        return (0, r.jsx)(e, {
          transitionState: i,
          onClose: o,
          ctaOnClick: () => {
            S(y.L.TAKE_ACTION), (0, d.EW)(s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
              dismissAction: y.L.INDIRECT_ACTION,
              groupName: y.R.VIRTUAL_CURRENCY_ONBOARDING
            }), (0, d.EW)(s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
              dismissAction: y.L.INDIRECT_ACTION,
              groupName: y.R.VIRTUAL_CURRENCY_ONBOARDING
            }), (0, p.navigateToQuestHome)({
              questId: _.V6,
              fromContent: l.j.ORBS_ANNOUNCEMENT_MODAL
            }), n()
          }
        })
      }
    }, {
      modalKey: v,
      onCloseRequest: () => {
        S(y.L.USER_DISMISS), (0, c.Mr3)(v)
      }
    })))
  }, [C, O, t, S, e, j])
}