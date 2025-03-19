/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(727843),
  a = n(944537),
  l = n(290348),
  o = n(91354),
  c = n(662961),
  A = n(388032),
  d = n(174032);

function u(e) {
  let {
    "aria-labelledby": t,
    disabled: n = !1
  } = e, {
    editStateId: u,
    guildId: g
  } = (0, s.N)(), [f, m] = l.GP(u, g);
  return (0, r.jsx)(i.FXm, {
    className: d.__invalid_channelAccessSelect,
    radioItemClassName: d.__invalid_channelAccessSelectRadioButton,
    withTransparentBackground: !0,
    size: i.FXm.Sizes.NOT_SET,
    onChange: e => {
      let {
        value: t
      } = e;
      return m(t)
    },
    options: [{
      name: A.NW.string(A.t["vs2T+P"]),
      value: a.I.SOME_CHANNELS_ACCESS,
      icon: (0, i.GSL)(c.Z),
      radioBarClassName: d.__invalid_channelAccessSelectRadioBar
    }, {
      name: A.NW.string(A.t.l4Tr7e),
      value: a.I.ALL_CHANNELS_ACCESS,
      icon: (0, i.GSL)(o.Z),
      radioBarClassName: d.__invalid_channelAccessSelectRadioBar
    }],
    value: f,
    "aria-labelledby": t,
    disabled: n
  })
}