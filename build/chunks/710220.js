/** Chunk was on 10451 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(518950),
  a = n(182294),
  o = n(388032),
  l = n(994507),
  c = n(144343);

function d(e) {
  let {
    referrer: t,
    isMarketingPageV2Enabled: n
  } = e, d = e => null != e.globalName ? e.globalName : e.username, {
    avatarSrc: u,
    eventHandlers: m
  } = (0, s.Z)({
    user: t,
    size: a.EF.SIZE_32,
    animateOnHover: !0
  });
  return (0, r.jsx)("div", {
    className: l.attributionBannerContainer,
    children: (0, r.jsxs)("div", {
      className: n ? l.attributionBannerContentV2 : l.attributionBannerContent,
      children: [(0, r.jsx)("div", {
        className: n ? l.iconContainerV2 : l.iconContainer,
        children: (0, r.jsx)(i.qEK, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({
          className: l.icon,
          src: u,
          "aria-label": t.username,
          size: a.EF.SIZE_32
        }, m))
      }), n ? (0, r.jsx)(i.X6q, {
        variant: "heading-lg/medium",
        className: l.textContainer,
        children: o.NW.format(o.t.IqxblZ, {
          username: d(t)
        })
      }) : (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: l.textContainer,
        children: o.NW.format(o.t.IqxblZ, {
          username: d(t)
        })
      }), !n && (0, r.jsx)("img", {
        src: c,
        alt: "",
        className: l.attributionIcon
      })]
    })
  })
}