/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(388032),
  l = n(487230);

function c(e) {
  let {
    className: t,
    src: n,
    unicodeEmoji: i,
    name: c,
    size: u = 20,
    enableTooltip: d = !0,
    enableHeight: f = !0,
    onClick: _
  } = e;
  if (null == n && null == i) return null;
  let p = () => {
    let e = (0, r.jsx)("img", {
      alt: "",
      "aria-label": s.NW.formatToPlainString(s.t["9+YWrK"], {
        name: c
      }),
      className: o()(l.roleIcon, t, {
        [l.clickable]: null != _
      }),
      height: f ? u : void 0,
      src: n,
      width: u
    });
    return (null != i && (e = (0, r.jsx)("img", {
      alt: "",
      "aria-label": i.allNamesString,
      className: o()(l.roleIcon, t, {
        [l.clickable]: null != _
      }),
      height: f ? u : void 0,
      src: i.url,
      width: u
    })), null == _) ? (0, r.jsx)(a.tEY, {
      offset: {
        left: 5
      },
      children: e
    }) : (0, r.jsx)(a.P3F, {
      onClick: _,
      tag: "span",
      focusProps: {
        offset: {
          left: 5
        }
      },
      children: e
    })
  };
  return (0, r.jsx)(a.DY3, {
    text: c,
    "aria-label": !1,
    shouldShow: d,
    element: "span",
    children: p()
  })
}