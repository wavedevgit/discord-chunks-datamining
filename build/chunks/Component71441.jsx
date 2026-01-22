/** Chunk was on 98363 **/
/** chunk id: 71441, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk154672 = require("./154672.js"),
  Chunk198982 = require("./198982.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let O = e => {
  let {
    email: t,
    guildId: r,
    transitionState: i,
    onClose: O
  } = e, [b, d] = l.useState(""), [g, j] = l.useState(null), m = l.useCallback(async () => {
    if (null != r) try {
      let e = await s.A.verifyCode(b, r, t);
      e.guild && (O(), (0, p.pX)(y.BVt.CHANNEL(e.guild.id)))
    } catch (e) {
      j(new u.LG(e))
    }
  }, [b, t, r, O]), h = o().throttle(() => {
    s.A.sendVerificationEmail(t, true, r)
  }, 1e3), E = async e => {
    null != b && "" !== b && e.charCode === y.Ks6.ENTER && await m()
  };
  return (0, n.jsx)(a.Modal, {
    transitionState: i,
    onClose: O,
    title: f.intl.string(f.t.SJ3Lxc),
    subtitle: f.intl.format(f.t["b+W0oq"], {
      email: t,
      onClick: h
    }),
    actions: [{
      variant: "primary",
      text: f.intl.string(f.t.geKm7t),
      onClick: m
    }],
    children: (0, n.jsx)(c.ksK, {
      label: f.intl.string(f.t.rpWT1s),
      onKeyPress: E,
      onChange: e => {
        null != e && "" !== e && d(e)
      },
      error: null == g ? true : g.getAnyErrorMessage()
    })
  })
}