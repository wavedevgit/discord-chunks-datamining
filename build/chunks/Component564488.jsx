/** Chunk was on 9536 **/
/** chunk id: 564488, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk236413 = require("./236413.js"),
  Chunk866894 = require("./866894.js"),
  Chunk65912 = require("./65912.js"),
  Chunk572456 = require("./572456.jsx"),
  Chunk59192 = require("./59192.jsx"),
  Chunk11265 = require("./11265.jsx"),
  Chunk495892 = require("./495892.jsx");
let g = Chunk473749.memo(function(e) {
  let {
    rule: t,
    persistEdit: n = false,
    initWithEdit: g = false
  } = e, {
    hasChanges: m,
    editingRule: f,
    createNewEditingRule: b,
    setEditingRule: p
  } = (0, s.V)(), {
    isLoading: h
  } = (0, s.w)(), [x] = i.useState(() => !(0, l.Vb)(t)), j = (null == f ? true : f.id) === t.id || n, v = (0, a.U)(null == t ? true : t.id), O = j && null != f ? f : t, y = i.useMemo(() => (0, o.af)(t.name), [null == t ? true : t.name]), C = i.useCallback(() => {
    b(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, b]), N = i.useCallback(e => {
    h || p(e, true)
  }, [h, p]);
  i.useEffect(() => {
    g && p(t, true)
  }, [g, t, p]);
  let E = i.useCallback(() => {
    j ? m || p(null) : m ? y(() => {
      p(t)
    }) : p(t)
  }, [j, m, y, t, p]);
  return (0, r.jsx)(d.Z, {
    renderHeader: (0, r.jsx)(u.Z, {
      rule: O,
      forceSetup: x && !j && !v,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: v,
      onChangeRule: N,
      onSetupRule: C
    }),
    isStuck: j && m,
    isExpanded: j,
    onExpand: E,
    children: j && (0, r.jsx)(c.Z, {
      rule: O,
      isLoading: h,
      onChangeRule: N
    })
  })
})