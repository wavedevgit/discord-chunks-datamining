/** Chunk was on 22979 **/
/** chunk id: 940419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    quest: t,
    isExpanded: n,
    setIsExpanded: s,
    expandQuestBar: o,
    isQuestCompleted: c,
    isQuestAccepted: d,
    prevIsQuestAccepted: u,
    impressionRef: m
  } = e, p = a.useRef(false), h = a.useRef(false), [f, b] = a.useState(false), [x, g] = a.useState(false), v = a.useCallback(() => {
    b(true)
  }, []), j = a.useCallback(() => {
    b(false), h.current || c || s(false)
  }, [c, s]), y = a.useCallback(() => {
    b(false), c || s(false), h.current = false
  }, [c, s]), C = a.useCallback(() => {
    g(true)
  }, []), _ = a.useCallback(() => {
    g(false), s(false)
  }, [s]), S = a.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (n) return;
    let {
      withDelay: t = false
    } = e;
    t ? p.current = window.setTimeout(o, 75) : o()
  }, [o, n]), E = a.useCallback(() => {
    S()
  }, [S]), T = a.useCallback(() => {
    window.clearTimeout(p.current), f || x || h.current || s(false)
  }, [f, x, s]), O = a.useCallback(() => {
    var e;
    (0, r.dA)({
      questId: t.id,
      event: l.rMx.QUEST_HOVER,
      properties: {
        content_id: i.jn.QUEST_BAR,
        content_name: (0, r._b)(i.jn.QUEST_BAR),
        impression_id: null == (e = m.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: i.jn.QUEST_BAR_V2
    }), h.current = true, S({
      withDelay: true
    })
  }, [S, m, t.id]), N = a.useCallback(() => {
    var e;
    (0, r.dA)({
      questId: t.id,
      event: l.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: i.jn.QUEST_BAR,
        content_name: (0, r._b)(i.jn.QUEST_BAR),
        impression_id: null == (e = m.current) ? true : e.getId()
      },
      sourceQuestContent: i.jn.QUEST_BAR_V2
    }), h.current = false, T()
  }, [T, m, t.id]);
  return a.useEffect(() => {
    x && N()
  }, [x, N]), a.useLayoutEffect(() => {
    d && !u && h.current && o()
  }, [o, d, u]), a.useLayoutEffect(() => {
    c || !d || u || h.current || s(false)
  }, [d, c, u, s]), {
    ctxMenuOpen: f,
    gameSheetOpen: x,
    handleCtxMenuOpened: v,
    handleCtxMenuClosed: j,
    handleCtxMenuSelection: y,
    handleGameSheetOpened: C,
    handleGameSheetClosed: _,
    handleFocus: S,
    handleFocusWithoutDelay: E,
    handleBlur: T,
    handleMouseEnter: O,
    handleMouseLeave: N
  }
}