/** Chunk was on 64935 **/
/** chunk id: 789646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mg: () => s,
  RZ: () => c
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk403362 = require("./403362.js");
let a = Chunk64700.createContext(true);

function s() {
  let e = i.useContext(a);
  if (null == e) throw Error("No PollFocusContextProvider found");
  return e
}

function o(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: l,
    manageFocusOnAction: s
  } = e, o = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: l,
    manageFocusOnAction: s
  }), [n, l, s]);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, a] = i.useState(), s = i.useRef(null), c = i.useRef(null);
  return i.useEffect(() => {
    var e, t, r;
    "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()), "ACTION_BUTTON" === n && null != s.current && (null == (r = s.current) || r.focus())
  }, [n]), (0, r.jsx)(o, {
    pollAnswerRef: c,
    actionButtonRef: s,
    manageFocusOnAction: e => {
      switch (e) {
        case "submit":
        case "cancel":
          a("ACTION_BUTTON");
          break;
        case "remove":
        case "showVotes":
          a("POLL_ANSWERS");
          break;
        case "showVoterDetails":
          break;
        default:
          (0, l.xb)(e)
      }
    },
    children: t
  })
}