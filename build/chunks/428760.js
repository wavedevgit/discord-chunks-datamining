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
  c = n(388032),
  A = n(994357);

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
      className: a()(A.keywordsContainer, s),
      children: [(0, r.jsx)(l.lcI, {
        className: a()(A.keywordsTextArea, d),
        value: m,
        onChange: p,
        placeholder: c.NW.string(c.t.UyaxJy)
      }), (0, r.jsx)(l.Text, {
        className: A.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(f.length, " / ").concat(n)
      })]
    }), null != h ? (0, r.jsx)(l.Text, {
      className: a()(A.paddingTop, A.errorText),
      variant: "text-xs/medium",
      color: "text-danger",
      children: h
    }) : (0, r.jsx)(l.Text, {
      className: A.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != u ? u : c.NW.string(c.t["Gm6G5+"])
    })]
  })
}