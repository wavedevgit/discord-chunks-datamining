/** Chunk was on 16985 **/
/** chunk id: 175993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk28682 = require("./28682.js");

function o(e) {
  let {
    notice: t
  } = e, {
    noticeType: n,
    useText: i
  } = t, o = i();
  return (0, r.jsx)(l.M14, {
    type: n,
    children: o
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
    case i.y1.INLINE_NOTICE:
      return (0, r.jsx)(o, {
        notice: t
      });
    case i.y1.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(a, {
        notice: t
      })
  }
}