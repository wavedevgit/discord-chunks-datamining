/** Chunk was on web.js **/
/** chunk id: 175993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk493773 = require("./493773.js"),
  Chunk970013 = require("./970013.js"),
  Chunk992406 = require("./992406.js");

function l(e) {
  let {
    notice: t
  } = e, {
    noticeType: n,
    useText: o
  } = t, s = o();
  return (0, a.ZP)(() => {
    var e;
    null == (e = t.trackView) || e.call(t)
  }), (0, r.jsx)(i.M14, {
    type: n,
    children: s
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
    case o.v.INLINE_NOTICE:
      return (0, r.jsx)(l, {
        notice: t
      });
    case o.v.STRONGLY_DISCOURAGED_CUSTOM:
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
    className: s.notice,
    children: (0, r.jsx)(u, {
      notice: t
    })
  })
}