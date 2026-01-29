/** Chunk was on web.js **/
/** chunk id: 291812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => y,
  _A: () => m,
  sP: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk877413 = require("./877413.js"),
  l = require.n(Chunk877413),
  Chunk52133 = require("./52133.js"),
  Chunk860227 = require("./860227.js"),
  Chunk861986 = require("./861986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk679740 = require("./679740.js"),
  Chunk206314 = require("./206314.js");

function m(e, t) {
  return e.type === f.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(f.pr7.SOURCE_MESSAGE_DELETED) ? p.intl.string(p.t.JOtgSw) : t
}

function g(e) {
  var t;
  let {
    className: n,
    message: a,
    children: s,
    content: c,
    onUpdate: p,
    contentRef: g,
    compact: E
  } = e, y = a.state === f.cmJ.SEND_FAILED, b = a.state === f.cmJ.SENDING, O = a.isCommandType(), v = null == (t = a.editedTimestamp) ? true : t.toString(), A = i.useRef(false);
  return i.useLayoutEffect(() => {
    A.current ? null != p && p() : A.current = true
  }, [p, a.content, c, v, s]), (0, r.jsxs)("div", {
    id: (0, u.CJ)(a),
    ref: g,
    className: o()(n, h.PT, {
      [_.BK]: true,
      [_.Tn]: b && !O,
      [_.nB]: "rtl" === l()(a.content),
      [_.Ix]: y,
      [_.w3]: a.isUnsupported
    }),
    children: [null != s ? s : m(a, c), (0, r.jsx)(d.A, {
      message: a,
      compact: E,
      location: d.O.WITH_CONTENT
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
  return (0, c.A)(e, t, ["message"]) && i.content === a.content && i.state === a.state && (null == (n = i.editedTimestamp) ? true : n.toString()) === (null == (r = a.editedTimestamp) ? true : r.toString())
}
let y = Chunk64700.memo(g, E)