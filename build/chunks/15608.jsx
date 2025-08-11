/** Chunk was on 79764 **/
/** chunk id: 15608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk109983 = require("./109983.js"),
  Chunk120298 = require("./120298.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.js"),
  Chunk286784 = require("./286784.js");

function x(e) {
  let {
    guildTemplate: t,
    onClick: n,
    autoFocus: l
  } = e, a = s.useCallback(() => {
    n(t)
  }, [t, n]);
  return <o.Z icon={c.M[t.id]} message={t.label} onClick={a} autoFocus={l} />
}

function C(e) {
  var t, n;
  let {
    onClose: s,
    onBack: o,
    onChooseTemplate: c,
    directoryGuildName: C
  } = e, h = (0, d.Pp)();
  return <i.Fragment>{<a.xBx direction={r.Z.Direction.VERTICAL} className={m.header} separator={false}>{<a.X6q className={m.title} variant={"heading-xl/semibold"}>{u.intl.format(u.t.T7aLYW, {
          guildName: C
        })}</a.X6q>}{<a.Text className={m.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{u.intl.string(u.t["RA+St7"])}</a.Text>}{null != s && <a.olH className={m.closeButton} onClick={s} />}</a.xBx>}{<a.hzk className={m.templatesList} paddingFix={false}>{<x guildTemplate={t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, h[d.sE.CREATE]), n = n = {
          label: u.intl.string(u.t.WqJbLi)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t} onClick={c} />}{<a.Text className={m.optionHeader} color={"header-secondary"} variant={"text-xs/bold"}>{u.intl.string(u.t.JGDkfn)}</a.Text>}{<x guildTemplate={h[d.sE.HUB_STUDY]} onClick={c} />}{<x guildTemplate={h[d.sE.HUB_SCHOOL_CLUB]} onClick={c} />}{<x guildTemplate={h[d.sE.HUB_CLASS]} onClick={c} />}{<x guildTemplate={h[d.sE.HUB_SOCIAL]} onClick={c} />}{<x guildTemplate={h[d.sE.HUB_MAJOR]} onClick={c} />}{<x guildTemplate={h[d.sE.HUB_DORM]} onClick={c} />}</a.hzk>}{<a.mzw className={m.footer}><l.zx className={m.backButton} look={l.zx.Looks.BLANK} size={l.zx.Sizes.MIN} onClick={o}>{u.intl.string(u.t["13/7kZ"])}</l.zx></a.mzw>}</i.Fragment>
}