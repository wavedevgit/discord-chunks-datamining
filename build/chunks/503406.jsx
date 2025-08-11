/** Chunk was on 95468 **/
/** chunk id: 503406, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk768680 = require("./768680.js");
let _ = (0, Chunk313201.hQ)(),
  v = e => {
    let {
      email: t,
      guildId: n,
      onClose: i
    } = e, [s, h] = l.useState(""), [v, N] = l.useState(null), E = l.useCallback(async () => {
      if (null != n) try {
        let e = await u.Z.verifyCode(s, n, t);
        e.guild && (null == i || i(), (0, f.uL)(x.Z5c.CHANNEL(e.guild.id)))
      } catch (e) {
        N(new m.Hx(e))
      }
    }, [s, t, n, i]), S = o().throttle(() => {
      u.Z.sendVerificationEmail(t, true, n)
    }, 1e3), y = async e => {
      null != s && "" !== s && e.charCode === x.yXg.ENTER && await E()
    };
    return <div className={g.container}>{<div className={g.topImage} />}{<d.X6q className={a()(g.centerText, g.header)} variant={"heading-xl/semibold"}>{p.intl.string(p.t.SJ3Lxc)}</d.X6q>}{<div className={g.descriptionWidth}><d.Text className={g.centerText} variant={"text-sm/normal"} color={"header-secondary"}>{p.intl.format(p.t["b+W0oq"], {
            email: t,
            onClick: S
          })}</d.Text></div>}{<d.xJW className={g.formItem}>{<d.vwX id={_}>{p.intl.string(p.t.rpWT1t)}</d.vwX>}{<d.oil onKeyPress={y} onChange={e => {
            null != e && "" !== e && h(e)
          }} error={null == v ? true : v.getAnyErrorMessage()} aria-labelledby={_} />}</d.xJW>}{<c.zx fullWidth={true} onClick={E} size={c.zx.Sizes.LARGE} color={c.zx.Colors.BRAND}><d.Text className={g.submitText} variant={"text-sm/normal"}>{p.intl.string(p.t.geKm7u)}</d.Text></c.zx>}</div>
  }