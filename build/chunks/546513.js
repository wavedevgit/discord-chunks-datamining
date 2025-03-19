/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(85960),
  s = n(489776),
  a = n(252121),
  l = n(564488);

function o(e) {
  let {
    guildId: t,
    rules: n,
    triggerType: o,
    initWithEdit: c
  } = e, {
    perGuildMaxCount: A
  } = i.I6[o], d = 0 === n.length, u = A > n.length && !d;
  return (0, r.jsxs)(r.Fragment, {
    children: [d && (0, r.jsx)(a.Z, {
      guildId: t,
      triggerType: o
    }), n.map(e => (0, r.jsx)(l.Z, {
      rule: e,
      initWithEdit: c
    }, e.id)), u && (0, r.jsx)(s.Z, {
      guildId: t,
      triggerType: o
    })]
  })
}