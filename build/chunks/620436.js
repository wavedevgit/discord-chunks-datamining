/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  Z: () => o
});
var r, i = n(200651);
n(192379);
var s = n(481060),
  a = n(331298),
  l = ((r = {}).ARROW_DOWN = "arrow_down", r.CROSS = "cross", r);

function o(e) {
  let {
    type: t
  } = e;
  return (0, i.jsx)("div", {
    className: a.dividerContainer,
    children: (0, i.jsx)("div", {
      className: a.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, i.jsx)(s.cQm, {
              size: "md",
              color: "currentColor",
              className: a.dividierIcon
            });
          case "cross":
            return (0, i.jsx)(s.Dio, {
              size: "md",
              color: "currentColor",
              className: a.dividierIcon
            });
          default:
            return null
        }
      }(t)
    })
  })
}
o.Type = l