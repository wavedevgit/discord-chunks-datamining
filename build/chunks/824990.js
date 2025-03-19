/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(471445),
  l = n(8426),
  o = n(388032),
  c = n(668813);
let A = function(e) {
  var t;
  let {
    channel: n,
    end: A
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
      className: c.suggestedChannel,
      children: [(0, r.jsx)(u, {
        className: c.suggestedChannelIcon
      }), (0, r.jsx)(s.Text, {
        className: c.suggestedChannelText,
        variant: "text-sm/normal",
        children: n.name
      }), (0, r.jsx)(s.zxk, {
        className: c.suggestedChannelButton,
        size: s.zxk.Sizes.MIN,
        onClick: d,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: o.NW.string(o.t.OYkgVl)
        })
      })]
    }), A && (0, r.jsx)("div", {
      className: c.suggestedSeparator
    })]
  })
}