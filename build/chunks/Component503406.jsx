/** Chunk was on 95468 **/
/** chunk id: 503406, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk85890 = require("./85890.js");
let h = e => {
  let {
    email: t,
    guildId: n,
    onClose: i
  } = e, [s, h] = l.useState(""), [_, v] = l.useState(null), x = l.useCallback(async () => {
    if (null != n) try {
      let e = await d.Z.verifyCode(s, n, t);
      e.guild && (null == i || i(), (0, m.uL)(f.Z5c.CHANNEL(e.guild.id)))
    } catch (e) {
      v(new u.Hx(e))
    }
  }, [s, t, n, i]), N = o().throttle(() => {
    d.Z.sendVerificationEmail(t, true, n)
  }, 1e3), E = async e => {
    null != s && "" !== s && e.charCode === f.yXg.ENTER && await x()
  };
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)("div", {
      className: g.topImage
    }), (0, r.jsx)(c.X6q, {
      className: a()(g.centerText, g.header),
      variant: "heading-xl/semibold",
      children: p.intl.string(p.t.SJ3Lxc)
    }), (0, r.jsx)("div", {
      className: g.descriptionWidth,
      children: (0, r.jsx)(c.Text, {
        className: g.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: p.intl.format(p.t["b+W0oq"], {
          email: t,
          onClick: N
        })
      })
    }), (0, r.jsx)("div", {
      className: g.formItem,
      children: (0, r.jsx)(c.oil, {
        label: p.intl.string(p.t.rpWT1t),
        onKeyPress: E,
        onChange: e => {
          null != e && "" !== e && h(e)
        },
        error: null == _ ? true : _.getAnyErrorMessage()
      })
    }), (0, r.jsx)(c.zxk, {
      fullWidth: true,
      onClick: x,
      variant: "primary",
      text: p.intl.string(p.t.geKm7u)
    })]
  })
}