/** Chunk was on 90228 **/
/** chunk id: 922532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk341915 = require("./341915.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    quest: t,
    isExpanded: n,
    setIsExpanded: o,
    expandQuestBar: c,
    isQuestCompleted: d,
    isQuestAccepted: u,
    prevIsQuestAccepted: m,
    impressionRef: p
  } = e, h = a.useRef(false), x = a.useRef(false), [g, f] = a.useState(false), [b, v] = a.useState(false), j = a.useCallback(() => {
    f(true)
  }, []), _ = a.useCallback(() => {
    f(false), x.current || d || o(false)
  }, [d, o]), y = a.useCallback(() => {
    f(false), d || o(false), x.current = false
  }, [d, o]), A = a.useCallback(() => {
    v(true)
  }, []), C = a.useCallback(() => {
    v(false), o(false)
  }, [o]), S = a.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (n) return;
    let {
      withDelay: t = false
    } = e;
    t ? h.current = window.setTimeout(c, 75) : c()
  }, [c, n]), O = a.useCallback(() => {
    S()
  }, [S]), T = a.useCallback(() => {
    window.clearTimeout(h.current), g || b || x.current || o(false)
  }, [g, b, o]), E = a.useCallback(() => {
    var e;
    (0, r.av)({
      questId: t.id,
      event: s.HAw.QUEST_HOVER,
      properties: {
        content_id: l.uF.QUEST_BAR,
        content_name: (0, i.jO)(l.uF.QUEST_BAR),
        impression_id: null == (e = p.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: l.uF.QUEST_BAR_V2
    }), x.current = true, S({
      withDelay: true
    })
  }, [S, p, t.id]), N = a.useCallback(() => {
    var e;
    (0, r.av)({
      questId: t.id,
      event: s.HAw.QUEST_HOVER_OFF,
      properties: {
        content_id: l.uF.QUEST_BAR,
        content_name: (0, i.jO)(l.uF.QUEST_BAR),
        impression_id: null == (e = p.current) ? true : e.getId()
      },
      sourceQuestContent: l.uF.QUEST_BAR_V2
    }), x.current = false, T()
  }, [T, p, t.id]);
  return a.useEffect(() => {
    b && N()
  }, [b, N]), a.useLayoutEffect(() => {
    u && !m && x.current && c()
  }, [c, u, m]), a.useLayoutEffect(() => {
    d || !u || m || x.current || o(false)
  }, [u, d, m, o]), {
    ctxMenuOpen: g,
    gameSheetOpen: b,
    handleCtxMenuOpened: j,
    handleCtxMenuClosed: _,
    handleCtxMenuSelection: y,
    handleGameSheetOpened: A,
    handleGameSheetClosed: C,
    handleFocus: S,
    handleFocusWithoutDelay: O,
    handleBlur: T,
    handleMouseEnter: E,
    handleMouseLeave: N
  }
}