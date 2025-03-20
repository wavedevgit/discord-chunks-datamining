/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(471445),
  l = n(8426),
  o = n(388032),
  A = n(668813);
let c = function(e) {
  var t;
  let {
    channel: n,
    end: c
  } = e, d = i.useCallback(() => {
    (0, l.r2)({
      channelId: n.id,
      title: n.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [n]), u = null !== (t = (0, a.KS)(n)) && void 0 !== t ? t : s.VL1;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: A.suggestedChannel,
      children: [(0, r.jsx)(u, {
        className: A.suggestedChannelIcon
      }), (0, r.jsx)(s.Text, {
        className: A.suggestedChannelText,
        variant: "text-sm/normal",
        children: n.name
      }), (0, r.jsx)(s.zxk, {
        className: A.suggestedChannelButton,
        size: s.zxk.Sizes.MIN,
        onClick: d,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: o.NW.string(o.t.OYkgVl)
        })
      })]
    }), c && (0, r.jsx)("div", {
      className: A.suggestedSeparator
    })]
  })
}