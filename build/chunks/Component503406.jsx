/** Chunk was on 7082 **/
/** chunk id: 503406, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
  let {
    email: t,
    guildId: r,
    transitionState: l,
    onClose: p
  } = e, [y, b] = i.useState(""), [g, j] = i.useState(null), m = i.useCallback(async () => {
    if (null != r) try {
      let e = await s.Z.verifyCode(y, r, t);
      e.guild && (p(), (0, d.uL)(f.Z5c.CHANNEL(e.guild.id)))
    } catch (e) {
      j(new u.Hx(e))
    }
  }, [y, t, r, p]), v = o().throttle(() => {
    s.Z.sendVerificationEmail(t, true, r)
  }, 1e3), h = async e => {
    null != y && "" !== y && e.charCode === f.yXg.ENTER && await m()
  };
  return (0, n.jsx)(a.Modal, {
    transitionState: l,
    onClose: p,
    title: O.intl.string(O.t.SJ3Lxc),
    subtitle: O.intl.format(O.t["b+W0oq"], {
      email: t,
      onClick: v
    }),
    actions: [{
      variant: "primary",
      text: O.intl.string(O.t.geKm7t),
      onClick: m
    }],
    children: (0, n.jsx)(c.oil, {
      label: O.intl.string(O.t.rpWT1s),
      onKeyPress: h,
      onChange: e => {
        null != e && "" !== e && b(e)
      },
      error: null == g ? true : g.getAnyErrorMessage()
    })
  })
}