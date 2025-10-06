/** Chunk was on web.js **/
/** chunk id: 516817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk70097 = require("./70097.jsx"),
  Chunk881474 = require("./881474.js"),
  Chunk168352 = require("./168352.js"),
  Chunk379839 = require("./379839.js"),
  Chunk359135 = require("./359135.js"),
  Chunk447304 = require("./447304.js");

function _(e) {
  let {
    nameplate: t,
    hovered: n,
    selected: a,
    content: s,
    placement: c
  } = e, _ = (0, u.p)(s, t, n, a, c), h = (0, l.C)(n, a), m = i.useRef(null == t);
  return (i.useEffect(() => {
    m.current || null != t || (m.current = true)
  }, [t]), null == t) ? null : (0, r.jsx)("div", {
    className: o()(f.container, {
      [f.fadeIn]: m.current,
      [f.fitInAccount]: c === d.i.ACCOUNT
    }),
    style: {
      background: _.background
    },
    "aria-hidden": true,
    children: (0, r.jsx)(p, {
      nameplate: t,
      className: o()(f.img, {
        [f.hover]: n,
        [f.selected]: a,
        [f.account]: c === d.i.ACCOUNT,
        [f.preview]: c === d.i.PREVIEW,
        [f.mini_preview]: c === d.i.MINI_PREVIEW,
        [f.channel]: c === d.i.CHANNEL
      }),
      style: {
        maskImage: _.maskImage
      },
      animate: h,
      loop: true === h && true === n
    })
  })
}

function p(e) {
  let {
    nameplate: t,
    className: n,
    style: i,
    animate: a,
    loop: o
  } = e, {
    staticAsset: s,
    animatedAsset: l
  } = (0, c._)(t), u = !(null == l ? true : l.endsWith(".webm"));
  return null == s || null == l ? null : u ? (0, r.jsx)(m, {
    asset: a ? l : s,
    className: n,
    style: i
  }) : (0, r.jsx)(h, {
    animatedAsset: l,
    staticAsset: s,
    animate: a,
    loop: o,
    style: i,
    className: n
  })
}

function h(e) {
  let {
    staticAsset: t,
    animatedAsset: n,
    animate: a,
    loop: o,
    className: l,
    style: c
  } = e, u = i.useRef(null);
  return i.useEffect(() => {
    null != u.current && (a || o ? u.current.play() : u.current.pause())
  }, [a, o]), (0, r.jsx)("div", {
    className: f.videoContainer,
    style: c,
    children: (0, r.jsx)(s.Z, {
      src: n,
      poster: t,
      ref: u,
      playsInline: true,
      loop: o,
      controls: false,
      className: l,
      tabIndex: false
    })
  })
}

function m(e) {
  let {
    asset: t,
    className: n,
    style: i
  } = e;
  return (0, r.jsx)("img", {
    src: t,
    className: n,
    style: i,
    alt: ""
  })
}