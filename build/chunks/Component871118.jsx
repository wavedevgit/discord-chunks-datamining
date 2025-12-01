/** Chunk was on web.js **/
/** chunk id: 871118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk449605 = require("./449605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999770 = require("./999770.js");

function m(e) {
  let {
    isLoading: t,
    noText: n,
    noImage: i,
    previewText: a,
    className: s
  } = e;
  return (0, r.jsx)("div", {
    className: o()(_.emptyPreviewContainer, s),
    children: t ? (0, r.jsx)(l.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: o()(_.emptyPreviewImage, {
          [_.noImage]: i
        })
      }), n ? null : (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: _.emptyPreviewText,
        children: null != a ? a : p.intl.string(p.t.uQZTBV)
      })]
    })
  })
}

function h(e) {
  let {
    stream: t,
    className: n,
    noText: a = false,
    noImage: o = false
  } = e, l = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)), h = (0, s.e7)([u.Z], () => null != l && u.Z.canBasicChannel(f.S7T.CONNECT, l)), {
    previewUrl: g,
    isLoading: E
  } = (0, d.Z)(t.guildId, t.channelId, t.ownerId), b = i.useRef(E ? null : g);
  i.useEffect(() => {
    E || (b.current = g)
  }, [g, E]);
  let y = null == g || E ? b.current : g;
  return null == y ? (0, r.jsx)(m, {
    className: n,
    isLoading: E,
    noText: a,
    noImage: o,
    previewText: h ? true : p.intl.string(p.t.pgUTZC)
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)("img", {
      src: y,
      alt: "",
      className: _.image
    })
  })
}