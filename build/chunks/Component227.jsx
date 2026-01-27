/** Chunk was on web.js **/
/** chunk id: 227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk607470 = require("./607470.jsx"),
  Chunk12228 = require("./12228.js"),
  Chunk763673 = require("./763673.js"),
  Chunk967054 = require("./967054.js"),
  Chunk226540 = require("./226540.js"),
  Chunk267987 = require("./267987.js");

function p(e) {
  let {
    nameplate: t,
    hovered: n,
    selected: a,
    content: s,
    placement: c
  } = e, p = (0, u._)(s, t, n, a, c), h = (0, l.i)(n, a), m = i.useRef(null == t);
  return (i.useEffect(() => {
    m.current || null != t || (m.current = true)
  }, [t]), null == t) ? null : (0, r.jsx)("div", {
    className: o()(f.kL, {
      [f.qG]: m.current,
      [f.WB]: c === d.u.ACCOUNT
    }),
    style: {
      background: p.background
    },
    "aria-hidden": true,
    children: (0, r.jsx)(_, {
      nameplate: t,
      className: o()(f._8, {
        [f.PT]: n,
        [f.wH]: a,
        [f.ct]: c === d.u.ACCOUNT,
        [f.VH]: c === d.u.PREVIEW,
        [f.Hh]: c === d.u.MINI_PREVIEW,
        [f.Ix]: c === d.u.CHANNEL
      }),
      style: {
        maskImage: p.maskImage
      },
      animate: h,
      loop: true === h && true === n
    })
  })
}

function _(e) {
  let {
    nameplate: t,
    className: n,
    style: i,
    animate: a,
    loop: o
  } = e, {
    staticAsset: s,
    animatedAsset: l
  } = (0, c.r)(t), u = !(null == l ? true : l.endsWith(".webm"));
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
    className: f.j,
    style: c,
    children: (0, r.jsx)(s.A, {
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