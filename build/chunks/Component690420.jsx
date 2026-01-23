/** Chunk was on 47841 **/
/** chunk id: 690420, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk627794 = require("./627794.js"),
  Chunk904813 = require("./904813.js"),
  Chunk268749 = require("./268749.js"),
  Chunk264349 = require("./264349.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk419707 = require("./419707.jsx"),
  Chunk645105 = require("./645105.jsx");
let g = Chunk64700.memo(function(e) {
  let {
    rule: t,
    persistEdit: n = false,
    initWithEdit: g = false
  } = e, {
    hasChanges: m,
    editingRule: p,
    createNewEditingRule: f,
    setEditingRule: b
  } = (0, a.U)(), {
    isLoading: h
  } = (0, a.S)(), [x] = i.useState(() => !(0, l.wC)(t)), j = (null == p ? true : p.id) === t.id || n, _ = (0, s.R)(null == t ? true : t.id), O = j && null != p ? p : t, v = i.useMemo(() => (0, o.cT)(t.name), [null == t ? true : t.name]), y = i.useCallback(() => {
    f(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, f]), A = i.useCallback(e => {
    h || b(e, true)
  }, [h, b]);
  i.useEffect(() => {
    g && b(t, true)
  }, [g, t, b]);
  let E = i.useCallback(() => {
    j ? m || b(null) : m ? v(() => {
      b(t)
    }) : b(t)
  }, [j, m, v, t, b]);
  return (0, r.jsx)(d.A, {
    renderHeader: (0, r.jsx)(u.A, {
      rule: O,
      forceSetup: x && !j && !_,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: _,
      onChangeRule: A,
      onSetupRule: y
    }),
    isStuck: j && m,
    isExpanded: j,
    onExpand: E,
    children: j && (0, r.jsx)(c.A, {
      rule: O,
      isLoading: h,
      onChangeRule: A
    })
  })
})