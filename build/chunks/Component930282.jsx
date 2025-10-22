/** Chunk was on web.js **/
/** chunk id: 930282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HR: () => b,
  L5: () => g,
  ZP: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk653603 = require("./653603.js"),
  l = require.n(Chunk653603),
  Chunk902704 = require("./902704.js"),
  Chunk569504 = require("./569504.js"),
  Chunk453687 = require("./453687.js"),
  Chunk328966 = require("./328966.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk136907 = require("./136907.js"),
  Chunk602009 = require("./602009.js");

function g(e, t) {
  return e.type === _.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(_.iLy.SOURCE_MESSAGE_DELETED) ? p.intl.string(p.t.JOtgSw) : t
}

function E(e) {
  var t;
  let {
    className: n,
    message: a,
    children: s,
    content: c,
    onUpdate: p,
    contentRef: E,
    compact: b
  } = e, y = a.state === _.yb.SEND_FAILED, O = a.state === _.yb.SENDING, v = a.isCommandType(), I = null == (t = a.editedTimestamp) ? true : t.toString(), T = i.useRef(false);
  i.useLayoutEffect(() => {
    T.current ? null != p && p() : T.current = true
  }, [p, a.content, c, I, s]);
  let S = u.Y.useConfig({
    location: "MessageContent"
  }).alignMessagesStart;
  return (0, r.jsxs)("div", {
    id: (0, d.ut)(a),
    ref: E,
    className: o()(n, m.markup, {
      [h.messageContent]: true,
      [h.isSending]: O && !v,
      [h.markupBidi]: S,
      [h.markupRtl]: !S && "rtl" === l()(a.content),
      [h.isFailed]: y,
      [h.isUnsupported]: a.isUnsupported
    }),
    children: [null != s ? s : g(a, c), (0, r.jsx)(f.Z, {
      message: a,
      compact: b,
      location: f.H.WITH_CONTENT
    })]
  })
}

function b(e, t) {
  var n, r;
  let {
    message: i
  } = t, {
    message: a
  } = e;
  return (0, c.Z)(e, t, ["message"]) && i.content === a.content && i.state === a.state && (null == (n = i.editedTimestamp) ? true : n.toString()) === (null == (r = a.editedTimestamp) ? true : r.toString())
}
let y = Chunk647438.memo(E, b)