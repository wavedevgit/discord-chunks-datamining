/** Chunk was on 88934 **/
/** chunk id: 797908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk66637 = require("./66637.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk956965 = require("./956965.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk275459 = require("./275459.js");
let m = function(e) {
  var t, n, m;
  let {
    application: h,
    onSelectApplication: g,
    showCategory: f = false
  } = e, _ = a.useRef(null), b = null == (t = h.categories) ? true : t[0], [x, v] = a.useState(false), C = a.useCallback(e => {
    e && v(true)
  }, []), j = (0, s.lf)(h), y = a.useCallback(() => {
    g(h.id)
  }, [g, h.id]), I = a.useMemo(() => x ? c.ZP.getApplicationIconURL({
    id: h.id,
    icon: h.icon,
    size: 48
  }) : true, [x, h]), O = f && null != b;
  return <i.$ innerRef={_} onChange={C} active={!x}><div ref={_} className={p.container}><o.Z className={p.card} onClick={y} onContextMenu={() => {}} aria-label={u.intl.string(u.t.np1Wrq)}>{<div className={p.header}>{<div style={{
              width: "100%",
              display: "block",
              aspectRatio: 16 / 9
            }}>{x ? (0, r.jsx)(d.Z, {
              application: h,
              bannerType: "card",
              iconURL: I
            }) : null}</div>}{<div className={p.avatarContainer} style={{
              height: 28
            }}>{x ? (0, r.jsx)("img", {
              src: I,
              alt: "",
              className: p.avatar,
              height: 48,
              width: 48,
              style: {
                borderWidth: 4,
                marginLeft: 12
              }
            }) : null}</div>}</div>}{<div className={p.appDetails}>{<div className={p.titleContainer}><div className={p.title}><l.X6q variant={"heading-md/semibold"} color={"header-primary"} className={p.appName}>{h.name}</l.X6q></div></div>}{O || j ? <div className={p.infoContainer}>{O ? <l.Text className={p.appCategory} variant={"text-xs/medium"} color={"text-default"}>{b.name}</l.Text> : null}{O && j ? <l.Text variant={"text-xs/medium"} color={"text-secondary"}>{"•"}</l.Text> : null}{j ? <l.Text variant={"text-xs/medium"} color={"text-secondary"}>{u.intl.string(u.t["/eVltr"])}</l.Text> : null}</div> : null}{<l.Text className={p.description} variant={"text-sm/medium"} color={"header-secondary"} lineClamp={O || j ? 2 : 3}>{null != (m = null == (n = h.directory_entry) ? true : n.short_description) ? m : h.description}</l.Text>}</div>}</o.Z></div></i.$>
}