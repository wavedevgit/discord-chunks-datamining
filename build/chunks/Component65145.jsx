/** Chunk was on 91173 **/
/** chunk id: 65145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pk: () => c,
  dv: () => a
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk823379 = require("./823379.js");
let o = Chunk647438.createContext(true);

function a() {
  let e = Chunk647438.useContext(o);
  if (null == module) throw Error("No PollFocusContextProvider found");
  return module
}

function s(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: l,
    manageFocusOnAction: a
  } = e, s = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: l,
    manageFocusOnAction: a
  }), [n, l, a]);
  return (0, r.jsx)(o.Provider, {
    value: s,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, o] = i.useState(), a = i.useRef(null), c = i.useRef(null);
  return i.useEffect(() => {
    var e, t, r;
    "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()), "ACTION_BUTTON" === n && null != a.current && (null == (r = a.current) || r.focus())
  }, [n]), (0, r.jsx)(s, {
    pollAnswerRef: c,
    actionButtonRef: a,
    manageFocusOnAction: e => {
      switch (e) {
        case "submit":
        case "cancel":
          o("ACTION_BUTTON");
          break;
        case "remove":
        case "showVotes":
          o("POLL_ANSWERS");
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