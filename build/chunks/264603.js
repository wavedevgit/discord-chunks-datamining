/** Chunk was on 93886 **/
n.d(t, {
  Z: () => p
});
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(524437),
  s = n(481060),
  c = n(695346),
  d = n(246992),
  u = n(710662),
  m = n(667532);
let h = [{
  label: "Unset",
  value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
}, {
  label: "All",
  value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
}, {
  label: "Users With Game",
  value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
}, {
  label: "None",
  value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
}];

function p() {
  let e = a.useRef(null),
    t = c.JG.useSetting();
  return (0, r.jsxs)("div", {
    ref: e,
    className: l()(u.panel, m.panel),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: "Receive DMs In Game"
    }), (0, r.jsx)(s.PhF, {
      options: h,
      isSelected: e => e === t,
      select: c.JG.updateSetting,
      popoutLayerContext: d.O$,
      serialize: e => e.toString()
    })]
  })
}