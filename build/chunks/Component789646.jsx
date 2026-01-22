/** Chunk was on web.js **/
/** chunk id: 789646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mg: () => o,
  RZ: () => c
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk403362 = require("./403362.js");
let s = Chunk64700.createContext(true);

function o() {
  let e = i.useContext(s);
  if (null == e) throw Error("No PollFocusContextProvider found");
  return e
}

function l(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: a,
    manageFocusOnAction: o
  } = e, l = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: a,
    manageFocusOnAction: o
  }), [n, a, o]);
  return (0, r.jsx)(s.Provider, {
    value: l,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(), o = i.useRef(null), c = i.useRef(null), u = e => {
    switch (e) {
      case "submit":
      case "cancel":
        s("ACTION_BUTTON");
        break;
      case "remove":
      case "showVotes":
        s("POLL_ANSWERS");
        break;
      case "showVoterDetails":
        break;
      default:
        (0, a.xb)(e)
    }
  };
  return i.useEffect(() => {
    var e, t, r;
    "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()), "ACTION_BUTTON" === n && null != o.current && (null == (r = o.current) || r.focus())
  }, [n]), (0, r.jsx)(l, {
    pollAnswerRef: c,
    actionButtonRef: o,
    manageFocusOnAction: u,
    children: t
  })
}