/** Chunk was on 384 **/
/** chunk id: 564488, original params: e,t,n (module,exports,require) **/
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
    editingRule: p,
    createNewEditingRule: f,
    setEditingRule: h
  } = (0, s.V)(), {
    isLoading: b
  } = (0, s.w)(), [x] = i.useState(() => !(0, l.Vb)(t)), j = (null == p ? true : p.id) === t.id || n, _ = (0, a.U)(null == t ? true : t.id), v = j && null != p ? p : t, O = i.useMemo(() => (0, o.af)(t.name), [null == t ? true : t.name]), C = i.useCallback(() => {
    f(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, f]), y = i.useCallback(e => {
    b || h(e, true)
  }, [b, h]);
  i.useEffect(() => {
    g && h(t, true)
  }, [g, t, h]);
  let N = i.useCallback(() => {
    j ? m || h(null) : m ? O(() => {
      h(t)
    }) : h(t)
  }, [j, m, O, t, h]);
  return (0, r.jsx)(d.Z, {
    renderHeader: (0, r.jsx)(u.Z, {
      rule: v,
      forceSetup: x && !j && !_,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: _,
      onChangeRule: y,
      onSetupRule: C
    }),
    isStuck: j && m,
    isExpanded: j,
    onExpand: N,
    children: j && (0, r.jsx)(c.Z, {
      rule: v,
      isLoading: b,
      onChangeRule: y
    })
  })
})