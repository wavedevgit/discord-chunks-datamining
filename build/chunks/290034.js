/** Chunk was on 81288 **/
n.d(t, {
  Z: () => _
});
var o = n(200651);
n(192379);
var i = n(120356),
  r = n.n(i),
  a = n(297700),
  l = n(471885),
  c = n(981631),
  s = n(483566);
let d = {
    [c.Eu4.NONE]: s.iconBackgroundTierNone,
    [c.Eu4.TIER_1]: s.iconBackgroundTierOne,
    [c.Eu4.TIER_2]: s.iconBackgroundTierTwo,
    [c.Eu4.TIER_3]: s.iconBackgroundTierThree
  },
  u = {
    [c.Eu4.NONE]: s.iconTierNone,
    [c.Eu4.TIER_1]: s.iconTierOne,
    [c.Eu4.TIER_2]: s.iconTierTwo,
    [c.Eu4.TIER_3]: s.iconTierThree
  };

function _(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: i,
    size: c
  } = e;
  return (0, o.jsx)(a.Z, {
    className: r()(n, d[t]),
    size: c,
    children: (0, o.jsx)(l.Z, {
      tier: t,
      className: r()(i, s.boostedGuildIconGem, u[t])
    })
  })
}