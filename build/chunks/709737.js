/** Chunk was on 98650 **/
n.d(t, {
  DC: () => c,
  Js: () => u,
  ZR: () => d
});
var r = n(200651);
n(192379);
var i = n(657707),
  o = n(297781),
  l = n(709054),
  a = n(528567);
n(814059);
var s = n(388032);

function c(e) {
  let {
    value: t,
    statisticId: n
  } = e, i = s.NW.formatToPlainString(s.t.yhdo8v, {
    value: t,
    statisticName: (0, a.C)(n)
  });
  return (0, r.jsx)(d, {
    text: i
  })
}

function u(e) {
  let {
    intervalStart: t,
    intervalEnd: n
  } = e, a = new Date(l.default.extractTimestamp(t)), c = new Date(l.default.extractTimestamp(n)), u = new Intl.DateTimeFormat(s.NW.currentLocale, {
    month: "numeric",
    day: "numeric"
  }).formatRange(a, c);
  return (0, r.jsx)(o.ej, {
    Icon: i.Que,
    text: u
  })
}

function d(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(o.ej, {
    Icon: i.hAD,
    text: t
  })
}