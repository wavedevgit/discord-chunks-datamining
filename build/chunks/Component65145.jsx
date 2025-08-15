/** Chunk was on 66866 **/
/** chunk id: 65145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pk: () => c,
  dv: () => o
}), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk823379 = require("./823379.js");
let a = Chunk73800.createContext(true);

function o() {
  let e = Chunk73800.useContext(a);
  if (null == module) throw Error("No PollFocusContextProvider found");
  return module
}

function s(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: l,
    manageFocusOnAction: o
  } = e, s = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: l,
    manageFocusOnAction: o
  }), [n, l, o]);
  return (0, r.jsx)(a.Provider, {
    value: s,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, a] = i.useState(), o = i.useRef(null), c = i.useRef(null);
  return i.useEffect(() => {
    var e, t, r;
    "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()), "ACTION_BUTTON" === n && null != o.current && (null == (r = o.current) || r.focus())
  }, [n]), (0, r.jsx)(s, {
    pollAnswerRef: c,
    actionButtonRef: o,
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
          (0, l.vE)(e)
      }
    },
    children: t
  })
}