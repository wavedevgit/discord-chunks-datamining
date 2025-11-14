/** Chunk was on 16985 **/
/** chunk id: 175993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk28682 = require("./28682.js");

function i(e) {
  let {
    notice: t
  } = e, {
    noticeType: n,
    useText: o
  } = t, i = o();
  return (0, r.jsx)(l.M14, {
    type: n,
    children: i
  })
}

function a(e) {
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
    case o.y1.INLINE_NOTICE:
      return (0, r.jsx)(i, {
        notice: t
      });
    case o.y1.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(a, {
        notice: t
      })
  }
}