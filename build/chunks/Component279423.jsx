/** Chunk was on web.js **/
/** chunk id: 279423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk964486 = require("./964486.js"),
  Chunk933297 = require("./933297.js"),
  Chunk471675 = require("./471675.js");

function l(e) {
  let {
    notice: t
  } = e, {
    noticeType: n,
    useText: s
  } = t, o = s();
  return (0, a.Ay)(() => {
    var e;
    null == (e = t.trackView) || e.call(t)
  }), (0, r.jsx)(i.wx6, {
    type: n,
    children: o
  })
}

function c(e) {
  let {
    notice: t
  } = e, {
    notice: n
  } = t;
  return (0, r.jsx)(n, {})
}

function u(e) {
  let {
    notice: t
  } = e;
  switch (t.type) {
    case s.W.INLINE_NOTICE:
      return (0, r.jsx)(l, {
        notice: t
      });
    case s.W.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(c, {
        notice: t
      })
  }
}

function d(e) {
  let {
    notice: t
  } = e;
  return (0, r.jsx)("div", {
    className: o.l,
    children: (0, r.jsx)(u, {
      notice: t
    })
  })
}