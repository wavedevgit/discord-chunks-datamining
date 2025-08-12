/** Chunk was on web.js **/
/** chunk id: 930282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HR: () => E,
  L5: () => m,
  ZP: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk653603 = require("./653603.js"),
  l = require.n(Chunk653603),
  Chunk902704 = require("./902704.js"),
  Chunk453687 = require("./453687.js"),
  Chunk328966 = require("./328966.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk966661 = require("./966661.js"),
  Chunk692228 = require("./692228.js");

function m(e, t) {
  return e.type === f.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgS0) : t
}

function g(e) {
  var t;
  let {
    className: n,
    message: o,
    children: s,
    content: c,
    onUpdate: _,
    contentRef: g,
    compact: E
  } = e, b = o.state === f.yb.SEND_FAILED, y = o.state === f.yb.SENDING, O = o.isCommandType(), v = null == (t = o.editedTimestamp) ? true : t.toString(), I = i.useRef(false);
  return i.useLayoutEffect(() => {
    I.current ? null != _ && _() : I.current = true
  }, [_, o.content, c, v, s]), (0, r.jsxs)("div", {
    id: (0, u.ut)(o),
    ref: g,
    className: a()(n, h.markup, {
      [p.messageContent]: true,
      [p.isSending]: y && !O,
      [p.markupRtl]: "rtl" === l()(o.content),
      [p.isFailed]: b,
      [p.isUnsupported]: o.isUnsupported
    }),
    children: [null != s ? s : m(o, c), (0, r.jsx)(d.Z, {
      message: o,
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
    message: o
  } = e;
  return (0, c.Z)(e, t, ["message"]) && i.content === o.content && i.state === o.state && (null == (n = i.editedTimestamp) ? true : n.toString()) === (null == (r = o.editedTimestamp) ? true : r.toString())
}
let b = Chunk73800.memo(g, E)