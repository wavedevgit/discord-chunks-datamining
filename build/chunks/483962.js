/** Chunk was on 48799 **/
n.d(t, {
  Z: () => m
});
var i = n(200651),
  r = n(192379),
  o = n(442837),
  s = n(831218),
  l = n(840780),
  a = n(51596),
  c = n(905423),
  d = n(237997),
  u = n(145597),
  h = n(981631),
  p = n(388032),
  f = n(892426);
let g = () => (0, a.$Z)("DM_SEARCH"),
  m = r.memo(function() {
    let e = (0, o.e7)([d.default], () => d.default.isLocked((0, u.getPID)()) ? "true" : "false"),
      t = (0, c.Z)(e => {
        let {
          channelId: t
        } = e;
        return t
      });
    return (0, i.jsxs)("div", {
      className: f.privateChannels,
      children: [(0, i.jsx)("div", {
        className: f.searchBar,
        children: (0, i.jsx)("button", {
          type: "button",
          className: f.searchBarComponent,
          onClick: g,
          children: p.NW.string(p.t.LzcpeX)
        })
      }), (0, i.jsx)(s.Z, {
        padding: 8,
        theme: h.BRd.DARK,
        version: e,
        selectedChannelId: t
      }), (0, i.jsx)("section", {
        className: f.panels,
        "aria-label": p.NW.string(p.t.StREWF),
        children: (0, i.jsx)(l.Z, {
          guildId: null
        })
      })]
    })
  })