/** Chunk was on 52272 **/
n.d(t, {
  Pk: () => c,
  dv: () => l
}), n(411104), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(823379);
let a = i.createContext(void 0);

function l() {
  let e = i.useContext(a);
  if (null == e) throw Error("No PollFocusContextProvider found");
  return e
}

function s(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: o,
    manageFocusOnAction: l
  } = e, s = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: o,
    manageFocusOnAction: l
  }), [n, o, l]);
  return (0, r.jsx)(a.Provider, {
    value: s,
    children: t
  })
}

function c(e) {
  let {
    children: t
  } = e, [n, a] = i.useState(), l = i.useRef(null), c = i.useRef(null);
  return i.useEffect(() => {
    var e, t, r;
    "POLL_ANSWERS" === n && null != c.current && (null === (t = c.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), "ACTION_BUTTON" === n && null != l.current && (null === (r = l.current) || void 0 === r || r.focus())
  }, [n]), (0, r.jsx)(s, {
    pollAnswerRef: c,
    actionButtonRef: l,
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
          (0, o.vE)(e)
      }
    },
    children: t
  })
}