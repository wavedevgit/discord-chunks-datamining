/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(730671),
  A = n(388032),
  c = n(994357);

function d(e) {
  let {
    onChangeText: t,
    maxWordCount: n,
    className: s,
    textAreaClassName: d,
    subtitleText: u,
    initialValue: g
  } = e, f = i.useMemo(() => null != g ? g : [], [g]), {
    value: m,
    onChange: p,
    errorMessage: h
  } = (0, o.Z)(t, g, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(c.keywordsContainer, s),
      children: [(0, r.jsx)(l.lcI, {
        className: a()(c.keywordsTextArea, d),
        value: m,
        onChange: p,
        placeholder: A.NW.string(A.t.UyaxJy)
      }), (0, r.jsx)(l.Text, {
        className: c.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(f.length, " / ").concat(n)
      })]
    }), null != h ? (0, r.jsx)(l.Text, {
      className: a()(c.paddingTop, c.errorText),
      variant: "text-xs/medium",
      color: "text-danger",
      children: h
    }) : (0, r.jsx)(l.Text, {
      className: c.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != u ? u : A.NW.string(A.t["Gm6G5+"])
    })]
  })
}