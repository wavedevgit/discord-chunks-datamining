/** Chunk was on 22988 **/
/** chunk id: 564488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk236413 = require("./236413.js"),
  Chunk866894 = require("./866894.js"),
  Chunk65912 = require("./65912.js"),
  Chunk572456 = require("./572456.js"),
  Chunk59192 = require("./59192.jsx"),
  Chunk11265 = require("./11265.jsx"),
  Chunk495892 = require("./495892.jsx");
let m = Chunk73800.memo(function(e) {
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
  } = (0, s.w)(), [x] = i.useState(() => !(0, l.Vb)(t)), j = (null == p ? true : p.id) === t.id || n, v = (0, a.U)(null == t ? true : t.id), _ = j && null != p ? p : t, O = i.useMemo(() => (0, o.af)(t.name), [null == t ? true : t.name]), y = i.useCallback(() => {
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
  return <d.Z renderHeader={(0, r.jsx)(u.Z, {
      rule: _,
      forceSetup: x && !j && !v,
      triggerType: t.triggerType,
      isEditMode: j,
      isDefaultRule: v,
      onChangeRule: C,
      onSetupRule: y
    })} isStuck={j && g} isExpanded={j} onExpand={N}>{j && (0, r.jsx)(c.Z, {
      rule: _,
      isLoading: b,
      onChangeRule: C
    })}</d.Z>
})