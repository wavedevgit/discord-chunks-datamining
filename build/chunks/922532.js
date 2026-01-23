/** Chunk was on 36054 **/
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
  } = e, p = a.useRef(false), h = a.useRef(false), [x, g] = a.useState(false), [f, b] = a.useState(false), v = a.useCallback(() => {
    g(true)
  }, []), j = a.useCallback(() => {
    g(false), h.current || c || s(false)
  }, [c, s]), _ = a.useCallback(() => {
    g(false), c || s(false), h.current = false
  }, [c, s]), y = a.useCallback(() => {
    b(true)
  }, []), A = a.useCallback(() => {
    b(false), s(false)
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
    window.clearTimeout(p.current), x || f || h.current || s(false)
  }, [x, f, s]), T = a.useCallback(() => {
    var e;
    (0, l.av)({
      questId: t.id,
      event: i.HAw.QUEST_HOVER,
      properties: {
        content_id: r.uF.QUEST_BAR,
        content_name: (0, l.jO)(r.uF.QUEST_BAR),
        impression_id: null == (e = m.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: r.uF.QUEST_BAR_V2
    }), h.current = true, C({
      withDelay: true
    })
  }, [C, m, t.id]), E = a.useCallback(() => {
    var e;
    (0, l.av)({
      questId: t.id,
      event: i.HAw.QUEST_HOVER_OFF,
      properties: {
        content_id: r.uF.QUEST_BAR,
        content_name: (0, l.jO)(r.uF.QUEST_BAR),
        impression_id: null == (e = m.current) ? true : e.getId()
      },
      sourceQuestContent: r.uF.QUEST_BAR_V2
    }), h.current = false, O()
  }, [O, m, t.id]);
  return a.useEffect(() => {
    f && E()
  }, [f, E]), a.useLayoutEffect(() => {
    d && !u && h.current && o()
  }, [o, d, u]), a.useLayoutEffect(() => {
    c || !d || u || h.current || s(false)
  }, [d, c, u, s]), {
    ctxMenuOpen: x,
    gameSheetOpen: f,
    handleCtxMenuOpened: v,
    handleCtxMenuClosed: j,
    handleCtxMenuSelection: _,
    handleGameSheetOpened: y,
    handleGameSheetClosed: A,
    handleFocus: C,
    handleFocusWithoutDelay: S,
    handleBlur: O,
    handleMouseEnter: T,
    handleMouseLeave: E
  }
}