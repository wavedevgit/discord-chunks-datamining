/** Chunk was on 94898 **/
n.d(t, {
  i: () => y
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(704215),
  a = n(952265),
  s = n(481060),
  c = n(570140),
  u = n(605236),
  d = n(243778),
  p = n(341907),
  h = n(819640),
  f = n(822857),
  g = n(479766),
  m = n(331663),
  b = n(921944),
  v = n(642145);

function y() {
  let {
    hasLayers: e
  } = (0, l.cj)([h.Z], () => ({
    hasLayers: h.Z.hasLayers()
  })), {
    onboardingModalOpenedPrior: t
  } = (0, l.cj)([g.Z], () => ({
    onboardingModalOpenedPrior: g.Z.onboardingModalOpenedPrior
  })), {
    enabled: y
  } = (0, f.W)({
    location: "virtual_currency_announcement_modal"
  }), [_, O] = (0, d.US)(y ? [o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...m.b.useSelectedDismissibleContent), j = (0, s.s9z)(s.JQI);
  i.useEffect(() => {
    y && !t && _ === o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL && !e && !j && (c.Z.dispatch({
      type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN"
    }), (0, a.ZD)(async () => {
      let {
        AnnouncementModal: e
      } = await n.e("54663").then(n.bind(n, 520156));
      return function(t) {
        let {
          onClose: n,
          transitionState: i
        } = t;
        return (0, r.jsx)(e, {
          transitionState: i,
          onClose: n,
          ctaOnClick: () => {
            O(b.L.USER_DISMISS_ALL), (0, u.EW)(o.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
              dismissAction: b.L.USER_DISMISS_ALL,
              groupName: b.R.VIRTUAL_CURRENCY_ONBOARDING
            }), (0, u.EW)(o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
              dismissAction: b.L.USER_DISMISS_ALL,
              groupName: b.R.VIRTUAL_CURRENCY_ONBOARDING
            }), (0, p.navigateToQuestHome)({
              questId: v.V
            }), n()
          }
        })
      }
    }, {
      onCloseCallback: () => {
        O(b.L.USER_DISMISS)
      }
    }))
  }, [_, y, t, O, e, j])
}