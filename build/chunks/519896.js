/** Chunk was on 86282 **/
n.r(l), n.d(l, {
  SubscriptionDetailsModal: () => j
}), n(266796);
var t = n(200651),
  r = n(192379),
  i = n(269210),
  s = n(752843),
  a = n(481060),
  o = n(757746),
  c = n(930155),
  d = n(889989),
  u = n(263519),
  m = n(73346),
  x = n(591759),
  h = n(886253),
  v = n(680005),
  p = n(938337);

function j(e) {
  var l, n;
  let {
    appId: j,
    subscriptionType: f,
    onClose: N,
    skuId: b,
    guildId: g,
    transitionState: S,
    onHeaderTitleClick: k
  } = e, {
    data: O
  } = (0, c.H)(b), y = O[0], {
    data: I
  } = (0, o.Z)(b), C = r.useMemo(() => {
    var e;
    return (null == I ? void 0 : I.thumbnail) != null && null !== (e = x.Z.toURLSafe((0, m._W)(j, I.thumbnail, 256))) && void 0 !== e ? e : void 0
  }, [j, null == I ? void 0 : I.thumbnail]), R = r.useMemo(() => {
    let e = null == I ? void 0 : I.benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, d.n)(j, e.icon)
    }))
  }, [j, null == I ? void 0 : I.benefits]), {
    openModal: T,
    subscriptionPurchaseButtonState: E
  } = (0, u.Z)({
    skuId: b,
    initialSubscribeForGuild: null != g ? g : void 0
  });
  return null == I ? null : (0, t.jsx)(h.A, {
    appId: j,
    skuId: b,
    transitionState: S,
    onHeaderTitleClick: null != k ? k : N,
    onClose: N,
    footer: (0, t.jsx)(v.pV, {
      onClick: T,
      appId: j,
      subscriptionType: f,
      skuId: b,
      subscriptionPlan: y,
      state: E
    }),
    children: (0, t.jsx)(p.i, {
      appId: j,
      skuId: b,
      benefits: null != R ? R.map(e => (0, t.jsx)(i.Gm, {
        header: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : void 0,
      description: null !== (l = I.description) && void 0 !== l ? l : void 0,
      imgSrc: C,
      title: null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : I.summary,
      tag: (0, t.jsx)(s.Z, {
        type: f
      }),
      FallbackIcon: a.Vh5
    })
  })
}