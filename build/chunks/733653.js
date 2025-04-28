/** Chunk was on 85831 **/
t.d(n, {
  r: () => o
}), t(49124);
var r = t(200651);
t(192379);
var l = t(481060),
  i = t(312539);

function o(e) {
  let {
    type: n,
    value: t,
    children: o
  } = e;
  switch (n) {
    case "normal":
      return (0, r.jsx)(l.eee, {
        href: t.url,
        title: t.title,
        children: o
      });
    case "mention":
      if ("Channel" in t) return (0, r.jsx)(i.m, {
        id: t.channel_id
      });
      return JSON.stringify(t)
  }
}