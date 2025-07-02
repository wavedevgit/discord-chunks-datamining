/** Chunk was on 85831 **/
t.d(n, {
  H: () => o,
  a: () => l
});
var r = t(255367);

function l(e) {
  let {
    type: n,
    children: t,
    value: l,
    items: o
  } = e;
  switch (n) {
    case "ordered":
      let i = (l + o.length - 1).toString().length;
      return (0, r.jsx)("ol", {
        start: l,
        style: {
          "--totalCharacters": i
        },
        children: t
      });
    case "unordered":
      return (0, r.jsx)("ul", {
        children: t
      })
  }
}

function o(e) {
  let {
    children: n
  } = e;
  return (0, r.jsx)("li", {
    children: n
  })
}
t(73800)