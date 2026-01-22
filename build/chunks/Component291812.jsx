/** Chunk was on web.js **/
/** chunk id: 291812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => y,
  _A: () => g,
  sP: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk877413 = require("./877413.js"),
  l = require.n(Chunk877413),
  Chunk52133 = require("./52133.js"),
  Chunk693198 = require("./693198.js"),
  Chunk860227 = require("./860227.js"),
  Chunk861986 = require("./861986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk679740 = require("./679740.js"),
  Chunk206314 = require("./206314.js");

function g(e, t) {
  return e.type === p.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(p.pr7.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgSw) : t
}

function E(e) {
  var t;
  let {
    className: n,
    message: a,
    children: o,
    content: c,
    onUpdate: _,
    contentRef: E,
    compact: b
  } = e, y = a.state === p.cmJ.SEND_FAILED, O = a.state === p.cmJ.SENDING, A = a.isCommandType(), v = null == (t = a.editedTimestamp) ? true : t.toString(), S = i.useRef(false);
  i.useLayoutEffect(() => {
    S.current ? null != _ && _() : S.current = true
  }, [_, a.content, c, v, o]);
  let I = u._.useConfig({
    location: "MessageContent"
  }).alignMessagesStart;
  return (0, r.jsxs)("div", {
    id: (0, d.CJ)(a),
    ref: E,
    className: s()(n, m.PT, {
      [h.BK]: true,
      [h.Tn]: O && !A,
      [h.Dk]: I,
      [h.nB]: !I && "rtl" === l()(a.content),
      [h.Ix]: y,
      [h.w3]: a.isUnsupported
    }),
    children: [null != o ? o : g(a, c), (0, r.jsx)(f.A, {
      message: a,
      compact: b,
      location: f.O.WITH_CONTENT
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
  return (0, c.A)(e, t, ["message"]) && i.content === a.content && i.state === a.state && (null == (n = i.editedTimestamp) ? true : n.toString()) === (null == (r = a.editedTimestamp) ? true : r.toString())
}
let y = Chunk64700.memo(E, b)