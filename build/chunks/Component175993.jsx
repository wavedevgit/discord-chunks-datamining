/** Chunk was on web.js **/
/** chunk id: 175993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk28682 = require("./28682.js"),
  Chunk465061 = require("./465061.js");

function s(e) {
  let {
    notice: t
  } = e, {
    noticeType: n,
    useText: a
  } = t, o = a();
  return (0, r.jsx)(i.M14, {
    type: n,
    children: o
  })
}

function l(e) {
  let {
    notice: t
  } = e, {
    render: n
  } = t;
  return n()
}

function c(e) {
  let {
    notice: t
  } = e;
  switch (t.type) {
    case a.y1.INLINE_NOTICE:
      return (0, r.jsx)(s, {
        notice: t
      });
    case a.y1.STRONGLY_DISCOURAGED_CUSTOM:
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
    className: o.notice,
    children: (0, r.jsx)(c, {
      notice: t
    })
  })
}