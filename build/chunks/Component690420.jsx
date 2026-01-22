/** Chunk was on 47841 **/
/** chunk id: 690420, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
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
let f = Chunk64700.memo(function(e) {
  let {
    rule: t,
    persistEdit: n = false,
    initWithEdit: f = false
  } = e, {
    hasChanges: g,
    editingRule: b,
    createNewEditingRule: m,
    setEditingRule: p
  } = (0, a.U)(), {
    isLoading: x
  } = (0, a.S)(), [h] = i.useState(() => !(0, l.wC)(t)), j = (null == b ? true : b.id) === t.id || n, O = (0, s.R)(null == t ? true : t.id), y = j && null != b ? b : t, v = i.useMemo(() => (0, c.cT)(t.name), [null == t ? true : t.name]), A = i.useCallback(() => {
    m(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, m]), E = i.useCallback(e => {
    x || p(e, true)
  }, [x, p]);
  i.useEffect(() => {
    f && p(t, true)
  }, [f, t, p]);
  let N = i.useCallback(() => {
    j ? g || p(null) : g ? v(() => {
      p(t)
    }) : p(t)
  }, [j, g, v, t, p]);
  return (0, r.jsx)(d.A, {
    renderHeader: (0, r.jsx)(u.A, {
      rule: y,
      forceSetup: h && !j && !O,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: O,
      onChangeRule: E,
      onSetupRule: A
    }),
    isStuck: j && g,
    isExpanded: j,
    onExpand: N,
    children: j && (0, r.jsx)(o.A, {
      rule: y,
      isLoading: x,
      onChangeRule: E
    })
  })
})