/** Chunk was on 88119 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(481060),
  a = n(234478);

function s(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: i
  } = e;
  return (0, r.jsx)(o.Text, {
    className: l()(a.unreadCount, i, {
      [a.mention]: t
    }),
    variant: "text-xs/normal",
    children: n
  })
}