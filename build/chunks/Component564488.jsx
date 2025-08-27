/** Chunk was on 88479 **/
/** chunk id: 564488, original params: e,t,n (module,exports,require) **/
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
    createNewEditingRule: h,
    setEditingRule: f
  } = (0, s.V)(), {
    isLoading: b
  } = (0, s.w)(), [x] = i.useState(() => !(0, l.Vb)(t)), j = (null == p ? true : p.id) === t.id || n, _ = (0, a.U)(null == t ? true : t.id), v = j && null != p ? p : t, O = i.useMemo(() => (0, o.af)(t.name), [null == t ? true : t.name]), y = i.useCallback(() => {
    h(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, h]), C = i.useCallback(e => {
    b || f(e, true)
  }, [b, f]);
  i.useEffect(() => {
    m && f(t, true)
  }, [m, t, f]);
  let N = i.useCallback(() => {
    j ? g || f(null) : g ? O(() => {
      f(t)
    }) : f(t)
  }, [j, g, O, t, f]);
  return (0, r.jsx)(d.Z, {
    renderHeader: (0, r.jsx)(u.Z, {
      rule: v,
      forceSetup: x && !j && !_,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: _,
      onChangeRule: C,
      onSetupRule: y
    }),
    isStuck: j && g,
    isExpanded: j,
    onExpand: N,
    children: j && (0, r.jsx)(c.Z, {
      rule: v,
      isLoading: b,
      onChangeRule: C
    })
  })
})