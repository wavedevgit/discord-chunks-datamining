/** Chunk was on web.js **/
/** chunk id: 215050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk930125 = require("./930125.js"),
  Chunk282108 = require("./282108.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk644447 = require("./644447.js"),
  Chunk608214 = require("./608214.jsx"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk142724 = require("./142724.js");
let g = 40;

function E(e) {
  return "media-view-scroll-thumbnail-".concat(e)
}

function y(e) {
  return "IMAGE" === e.type ? (0, f.E)({
    proxyURL: e.proxyUrl,
    url: e.url
  }) : "VIDEO" === e.type && null != e.proxyUrl ? (0, p.VZ)(e.proxyUrl) : null
}

function b(e) {
  var t, n;
  let {
    item: i,
    enabledContentHarmTypeFlags: a = 0
  } = e, o = y(i);
  return null == o ? null : (0, u.qo)({
    type: c.D.GenericMedia,
    media: i
  }, a) ? (0, r.jsx)(s.BJc, {
    align: "center",
    justify: "center",
    className: m.cd,
    style: {
      width: g,
      height: g
    },
    children: (0, r.jsx)(s.DAq, {
      size: "sm",
      color: "white"
    })
  }) : (0, r.jsx)(d.Ay, {
    width: null != (t = i.width) ? t : g,
    height: null != (n = i.height) ? n : g,
    maxWidth: g,
    maxHeight: g,
    useFullWidth: true,
    src: o,
    shouldAnimate: false,
    shouldRenderAccessory: false,
    srcIsAnimated: i.srcIsAnimated,
    alt: i.alt,
    mediaLayoutType: _.dG.MOSAIC
  })
}
let O = Chunk64700.memo(b);

function v(e) {
  let {
    items: t,
    currentIndex: n,
    onGalleryItemClick: a,
    className: c,
    enabledContentHarmTypeFlags: u
  } = e, d = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = document.getElementById(E(n));
    null != d.current && null != e && d.current.scrollIntoViewNode({
      node: e,
      animate: !l.A.useReducedMotion,
      padding: g / 2
    })
  }, [n]), (0, r.jsx)("div", {
    className: o()(m.IL, c),
    children: (0, r.jsx)(s.ChK, {
      orientation: "horizontal",
      className: o()(m.nV, c),
      ref: d,
      onClick: e => e.stopPropagation(),
      children: t.map((e, i) => {
        let l = i === n,
          c = l ? h.t["qv/U5V"] : h.t.zviMAG;
        return (0, r.jsx)(s.DUT, {
          id: E(i),
          className: o()(m.Qq, {
            [m.AD]: !l,
            [m.$1]: 0 === i,
            [m.HV]: i === t.length - 1
          }),
          "aria-label": h.intl.formatToPlainString(c, {
            pageNumber: i + 1,
            totalPages: t.length
          }),
          onClick: () => a(i),
          children: (0, r.jsx)(O, {
            item: e,
            enabledContentHarmTypeFlags: u
          })
        }, i)
      })
    })
  })
}