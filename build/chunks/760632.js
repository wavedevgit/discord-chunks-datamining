/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  M: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(434404),
  l = n(388032);
let o = "".concat(60),
  A = "".concat(300),
  c = "".concat(900),
  d = "".concat(1800),
  u = "".concat(3600);

function g(e) {
  let {
    canManageGuild: t,
    afkTimeout: n,
    afkChannelId: g
  } = e, f = i.useMemo(() => [{
    value: o,
    label: l.NW.formatToPlainString(l.t.iXLF9f, {
      minutes: 1
    })
  }, {
    value: A,
    label: l.NW.formatToPlainString(l.t.iXLF9f, {
      minutes: 5
    })
  }, {
    value: c,
    label: l.NW.formatToPlainString(l.t.iXLF9f, {
      minutes: 15
    })
  }, {
    value: d,
    label: l.NW.formatToPlainString(l.t.iXLF9f, {
      minutes: 30
    })
  }, {
    value: u,
    label: l.NW.formatToPlainString(l.t.xCjYxM, {
      hours: 1
    })
  }], []), m = i.useCallback(e => {
    a.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(s.q4e, {
    value: null == n ? null : "".concat(n),
    options: f,
    isDisabled: null == g || !t,
    onChange: m
  })
}