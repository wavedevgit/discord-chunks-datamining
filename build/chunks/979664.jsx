/** Chunk was on 22988 **/
/** chunk id: 979664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk137991 = require("./137991.js"),
  Chunk381109 = require("./381109.js");

function g(e) {
  let {
    profile: t,
    handleIconChange: l,
    canManageGuild: o
  } = e, m = i.useCallback(() => {
    l(null)
  }, [l]), g = i.useCallback((e, t) => {
    (0, a.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("77942")]).then(n.bind(n, 712451));
      return n => <i{...function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        uploadType: c.pC.GUILD_ICON,
        imageUri: e,
        file: t,
        onCrop: e => {
          let {
            imageUri: t
          } = e;
          return l(t)
        }
      }, n)} />
    }, {})
  }, [l]);
  return <div className={u.buttons}>{<a.tEY within={true}><div className={u.iconInput}>{<a.zxk tabIndex={false} size={"sm"} variant={"primary"} disabled={!o} text={d.intl.string(d.t.r3Jdsb)} />}{<s.ZP tabIndex={0} onChange={g} disabled={!o} />}</div></a.tEY>}{null != t.icon ? <a.zxk variant={"critical-secondary"} size={"sm"} text={d.intl.string(d.t.x8AlTk)} onClick={m} disabled={!o} /> : null}</div>
}

function p(e) {
  let {
    profile: t,
    canManageGuild: n,
    onIconChange: i
  } = e, s = (0, l.e7)([o.Z], () => o.Z.getError("icon"));
  return <section className={u.container}>{<a.hjN className={m.section}>{<div className={m.sectionHeader}>{<a.vwX>{d.intl.string(d.t.FkQnxM)}</a.vwX>}{<a.R94 type={"description"}>{d.intl.string(d.t.KjkA0d)}</a.R94>}</div>}{<g profile={t} canManageGuild={n} handleIconChange={i} />}</a.hjN>}{null != s ? <div className={u.iconError}>{s}</div> : null}</section>
}