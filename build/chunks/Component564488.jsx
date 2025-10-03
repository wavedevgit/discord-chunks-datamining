/** Chunk was on 64982 **/
/** chunk id: 564488, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk236413 = require("./236413.js"),
  Chunk866894 = require("./866894.js"),
  Chunk65912 = require("./65912.js"),
  Chunk572456 = require("./572456.jsx"),
  Chunk59192 = require("./59192.jsx"),
  Chunk11265 = require("./11265.jsx"),
  Chunk495892 = require("./495892.jsx");
let m = Chunk647438.memo(function(e) {
  let {
    rule: t,
    persistEdit: n = false,
    initWithEdit: m = false
  } = e, {
    hasChanges: g,
    editingRule: p,
    createNewEditingRule: f,
    setEditingRule: h
  } = (0, a.V)(), {
    isLoading: x
  } = (0, a.w)(), [b] = i.useState(() => !(0, l.Vb)(t)), j = (null == p ? true : p.id) === t.id || n, _ = (0, s.U)(null == t ? true : t.id), v = j && null != p ? p : t, C = i.useMemo(() => (0, o.af)(t.name), [null == t ? true : t.name]), O = i.useCallback(() => {
    f(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, f]), y = i.useCallback(e => {
    x || h(e, true)
  }, [x, h]);
  i.useEffect(() => {
    m && h(t, true)
  }, [m, t, h]);
  let N = i.useCallback(() => {
    j ? g || h(null) : g ? C(() => {
      h(t)
    }) : h(t)
  }, [j, g, C, t, h]);
  return (0, r.jsx)(d.Z, {
    renderHeader: (0, r.jsx)(u.Z, {
      rule: v,
      forceSetup: b && !j && !_,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: _,
      onChangeRule: y,
      onSetupRule: O
    }),
    isStuck: j && g,
    isExpanded: j,
    onExpand: N,
    children: j && (0, r.jsx)(c.Z, {
      rule: v,
      isLoading: x,
      onChangeRule: y
    })
  })
})