/** Chunk was on 22477 **/
/** chunk id: 922532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk652215 = require("./652215.js");

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
  } = e, p = a.useRef(false), h = a.useRef(false), [f, x] = a.useState(false), [b, g] = a.useState(false), v = a.useCallback(() => {
    x(true)
  }, []), j = a.useCallback(() => {
    x(false), h.current || c || s(false)
  }, [c, s]), y = a.useCallback(() => {
    x(false), c || s(false), h.current = false
  }, [c, s]), _ = a.useCallback(() => {
    g(true)
  }, []), A = a.useCallback(() => {
    g(false), s(false)
  }, [s]), C = a.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (n) return;
    let {
      withDelay: t = false
    } = e;
    t ? p.current = window.setTimeout(o, 75) : o()
  }, [o, n]), S = a.useCallback(() => {
    C()
  }, [C]), O = a.useCallback(() => {
    window.clearTimeout(p.current), f || b || h.current || s(false)
  }, [f, b, s]), E = a.useCallback(() => {
    var e;
    (0, l.av)({
      questId: t.id,
      event: r.HAw.QUEST_HOVER,
      properties: {
        content_id: i.uF.QUEST_BAR,
        content_name: (0, l.jO)(i.uF.QUEST_BAR),
        impression_id: null == (e = m.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: i.uF.QUEST_BAR_V2
    }), h.current = true, C({
      withDelay: true
    })
  }, [C, m, t.id]), N = a.useCallback(() => {
    var e;
    (0, l.av)({
      questId: t.id,
      event: r.HAw.QUEST_HOVER_OFF,
      properties: {
        content_id: i.uF.QUEST_BAR,
        content_name: (0, l.jO)(i.uF.QUEST_BAR),
        impression_id: null == (e = m.current) ? true : e.getId()
      },
      sourceQuestContent: i.uF.QUEST_BAR_V2
    }), h.current = false, O()
  }, [O, m, t.id]);
  return a.useEffect(() => {
    b && N()
  }, [b, N]), a.useLayoutEffect(() => {
    d && !u && h.current && o()
  }, [o, d, u]), a.useLayoutEffect(() => {
    c || !d || u || h.current || s(false)
  }, [d, c, u, s]), {
    ctxMenuOpen: f,
    gameSheetOpen: b,
    handleCtxMenuOpened: v,
    handleCtxMenuClosed: j,
    handleCtxMenuSelection: y,
    handleGameSheetOpened: _,
    handleGameSheetClosed: A,
    handleFocus: C,
    handleFocusWithoutDelay: S,
    handleBlur: O,
    handleMouseEnter: E,
    handleMouseLeave: N
  }
}