/** Chunk was on web.js **/
/** chunk id: 930282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HR: () => E,
  L5: () => m,
  ZP: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk653603 = require("./653603.js"),
  l = require.n(Chunk653603),
  Chunk902704 = require("./902704.js"),
  Chunk453687 = require("./453687.js"),
  Chunk328966 = require("./328966.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk136907 = require("./136907.js"),
  Chunk602009 = require("./602009.js");

function m(e, t) {
  return e.type === f.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgS0) : t
}

function g(e) {
  var t;
  let {
    className: n,
    message: a,
    children: s,
    content: c,
    onUpdate: _,
    contentRef: g,
    compact: E
  } = e, b = a.state === f.yb.SEND_FAILED, y = a.state === f.yb.SENDING, O = a.isCommandType(), v = null == (t = a.editedTimestamp) ? true : t.toString(), I = i.useRef(false);
  return i.useLayoutEffect(() => {
    I.current ? null != _ && _() : I.current = true
  }, [_, a.content, c, v, s]), (0, r.jsxs)("div", {
    id: (0, u.ut)(a),
    ref: g,
    className: o()(n, h.markup, {
      [p.messageContent]: true,
      [p.isSending]: y && !O,
      [p.markupRtl]: "rtl" === l()(a.content),
      [p.isFailed]: b,
      [p.isUnsupported]: a.isUnsupported
    }),
    children: [null != s ? s : m(a, c), (0, r.jsx)(d.Z, {
      message: a,
      compact: E,
      location: d.H.WITH_CONTENT
    })]
  })
}

function E(e, t) {
  var n, r;
  let {
    message: i
  } = t, {
    message: a
  } = e;
  return (0, c.Z)(e, t, ["message"]) && i.content === a.content && i.state === a.state && (null == (n = i.editedTimestamp) ? true : n.toString()) === (null == (r = a.editedTimestamp) ? true : r.toString())
}
let b = Chunk647438.memo(g, E)