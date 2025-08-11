/** Chunk was on web.js **/
/** chunk id: 871118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk449605 = require("./449605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk269363 = require("./269363.js");

function h(e) {
  let {
    isLoading: t,
    noText: n,
    noImage: i,
    previewText: o,
    className: s
  } = e;
  return (0, r.jsx)("div", {
    className: a()(p.emptyPreviewContainer, s),
    children: t ? (0, r.jsx)(l.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: a()(p.emptyPreviewImage, {
          [p.noImage]: i
        })
      }), n ? null : (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: p.emptyPreviewText,
        children: null != o ? o : _.intl.string(_.t.uQZTBQ)
      })]
    })
  })
}

function m(e) {
  let {
    stream: t,
    className: n,
    noText: o = false,
    noImage: a = false
  } = e, l = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)), m = (0, s.e7)([u.Z], () => null != l && u.Z.canBasicChannel(f.S7T.CONNECT, l)), {
    previewUrl: g,
    isLoading: E
  } = (0, d.Z)(t.guildId, t.channelId, t.ownerId), b = i.useRef(E ? null : g);
  i.useEffect(() => {
    E || (b.current = g)
  }, [g, E]);
  let y = null == g || E ? b.current : g;
  return null == y ? (0, r.jsx)(h, {
    className: n,
    isLoading: E,
    noText: o,
    noImage: a,
    previewText: m ? true : _.intl.string(_.t.pgUTZG)
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)("img", {
      src: y,
      alt: "",
      className: p.image
    })
  })
}