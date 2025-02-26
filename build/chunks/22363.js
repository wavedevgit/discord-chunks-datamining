/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(646574),
  s = n(543241),
  l = n(747613),
  c = n(533432),
  u = n(149203),
  d = n(185923),
  f = n(82845);
let _ = e => {
  let {
    accessory: t,
    pickerIntention: n,
    headerClassName: i,
    emojiListRef: _,
    onKeyDown: p,
    onFocus: h,
    autoFocus: g,
    searchBarRef: m,
    hasTabWrapper: E,
    diversitySurrogate: v,
    isBurstReaction: b,
    onBurstReactionToggle: y,
    renderHeader: O
  } = e, S = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      emojiListRef: _,
      gridNavigatorId: u.Vr,
      onKeyDown: p,
      className: f.searchBar,
      ref: m,
      isFullRow: !1,
      onFocus: h,
      autoFocus: g,
      defaultSearchPlaceholder: (0, s.nV)(n, b)
    }), n === d.Hz.REACTION ? (0, r.jsx)("div", {
      className: f.burstToggle,
      children: (0, r.jsx)(a.Z, {
        checked: b,
        onClick: y
      })
    }) : null, null != t ? t : (0, r.jsx)(l.Z, {
      searchBarRef: m,
      className: f.diversitySelector,
      hasTabWrapper: E,
      selectedSurrogate: v
    })]
  });
  return (0, r.jsx)("div", {
    className: o()(f.header, i),
    children: null != O ? O(S) : S
  })
}