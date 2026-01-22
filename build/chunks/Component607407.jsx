/** Chunk was on web.js **/
/** chunk id: 607407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk450149 = require("./450149.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk571283 = require("./571283.js");

function h(e) {
  let {
    isLoading: t,
    noText: n,
    noImage: i,
    previewText: a,
    className: o
  } = e;
  return (0, r.jsx)("div", {
    className: s()(_.Hd, o),
    children: t ? (0, r.jsx)(l.y$y, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: s()(_.js, {
          [_.$0]: i
        })
      }), n ? null : (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: _.pY,
        children: null != a ? a : p.intl.string(p.t.uQZTBV)
      })]
    })
  })
}

function m(e) {
  let {
    stream: t,
    className: n,
    noText: a = false,
    noImage: s = false
  } = e, l = (0, o.bG)([c.A], () => c.A.getBasicChannel(t.channelId)), m = (0, o.bG)([u.A], () => null != l && u.A.canBasicChannel(f.hVb.CONNECT, l)), {
    previewUrl: g,
    isLoading: E
  } = (0, d.A)(t.guildId, t.channelId, t.ownerId), b = i.useRef(E ? null : g);
  i.useEffect(() => {
    E || (b.current = g)
  }, [g, E]);
  let y = null == g || E ? b.current : g;
  return null == y ? (0, r.jsx)(h, {
    className: n,
    isLoading: E,
    noText: a,
    noImage: s,
    previewText: m ? true : p.intl.string(p.t.pgUTZC)
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)("img", {
      src: y,
      alt: "",
      className: _.Sl
    })
  })
}