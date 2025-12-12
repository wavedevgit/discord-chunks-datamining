/** Chunk was on web.js **/
/** chunk id: 175993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk970013 = require("./970013.js"),
  Chunk465061 = require("./465061.js");

function s(e) {
  let {
    notice: t
  } = e, {
    noticeType: n,
    useText: o
  } = t, a = o();
  return (0, r.jsx)(i.M14, {
    type: n,
    children: a
  })
}

function l(e) {
  let {
    notice: t
  } = e, {
    notice: n
  } = t;
  return (0, r.jsx)(n, {})
}

function c(e) {
  let {
    notice: t
  } = e;
  switch (t.type) {
    case o.v.INLINE_NOTICE:
      return (0, r.jsx)(s, {
        notice: t
      });
    case o.v.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(l, {
        notice: t
      })
  }
}

function u(e) {
  let {
    notice: t
  } = e;
  return (0, r.jsx)("div", {
    className: a.notice,
    children: (0, r.jsx)(c, {
      notice: t
    })
  })
}