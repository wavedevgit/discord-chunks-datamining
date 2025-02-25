/** Chunk was on 72891 **/
i.d(n, {
  Z: () => g
});
var t = i(200651);
i(192379);
var o = i(120356),
  r = i.n(o),
  a = i(297700),
  l = i(471885),
  c = i(981631),
  s = i(721945);
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

function g(e) {
  let {
    premiumTier: n,
    iconBackgroundClassName: i,
    iconClassName: o,
    size: c
  } = e;
  return (0, t.jsx)(a.Z, {
    className: r()(i, d[n]),
    size: c,
    children: (0, t.jsx)(l.Z, {
      tier: n,
      className: r()(o, s.boostedGuildIconGem, u[n])
    })
  })
}