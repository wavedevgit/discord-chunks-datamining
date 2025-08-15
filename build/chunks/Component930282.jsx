/** Chunk was on 31978 **/
/** chunk id: 930282, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  HR: () => h,
  L5: () => b,
  ZP: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk653603 = require("./653603.js"),
  s = require.n(Chunk653603),
  Chunk902704 = require("./902704.js"),
  Chunk453687 = require("./453687.js"),
  Chunk328966 = require("./328966.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js"),
  Chunk430864 = require("./430864.js");

function b(e, t) {
  return e.type === p.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? m.intl.string(m.t.JOtgS0) : t
}

function h(e, t) {
  var n, r;
  let {
    message: l
  } = t, {
    message: o
  } = e;
  return (0, c.Z)(e, t, ["message"]) && l.content === o.content && l.state === o.state && (null == (n = l.editedTimestamp) ? true : n.toString()) === (null == (r = o.editedTimestamp) ? true : r.toString())
}
let y = Chunk73800.memo(function(e) {
  var t;
  let {
    className: n,
    message: o,
    children: a,
    content: c,
    onUpdate: m,
    contentRef: h,
    compact: y
  } = e, O = o.state === p.yb.SEND_FAILED, v = o.state === p.yb.SENDING, j = o.isCommandType(), P = null == (t = o.editedTimestamp) ? true : t.toString(), x = l.useRef(false);
  return l.useLayoutEffect(() => {
    x.current ? null != m && m() : x.current = true
  }, [m, o.content, c, P, a]), (0, r.jsxs)("div", {
    id: (0, u.ut)(o),
    ref: h,
    className: i()(n, f.markup, {
      [g.messageContent]: true,
      [g.isSending]: v && !j,
      [g.markupRtl]: "rtl" === s()(o.content),
      [g.isFailed]: O,
      [g.isUnsupported]: o.isUnsupported
    }),
    children: [null != a ? a : b(o, c), (0, r.jsx)(d.Z, {
      message: o,
      compact: y,
      location: d.H.WITH_CONTENT
    })]
  })
}, h)