/** Chunk was on 62104 **/
n.d(t, {
  default: () => r
});
var a = n(200651);
n(192379);
var s = n(332664),
  i = n(814249),
  l = n(531578),
  o = n(388032);
let c = [i.R7.OTHER];

function r(e) {
  let {
    transitionState: t,
    startRating: n,
    onClose: r,
    onSubmit: d
  } = e;
  return (0, a.jsx)(s.Z, {
    modalType: "summary",
    header: o.NW.string(o.t.hghcMj),
    body: o.NW.string(o.t["QFU78/"]),
    problemTitle: o.NW.string(o.t.CtiHPj),
    onSubmit: d,
    onClose: r,
    ratingOptions: [l.aZ.GOOD, l.aZ.BAD],
    ratingEmojiKind: "thumb",
    transitionState: t,
    problems: (0, i.iq)(),
    freeformNeededProblems: c,
    otherKey: i.R7.OTHER,
    startRating: n,
    hideDontShowCheckbox: !0
  })
}