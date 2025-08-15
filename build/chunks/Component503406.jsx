/** Chunk was on 95468 **/
/** chunk id: 503406, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk85890 = require("./85890.js");
let _ = (0, Chunk313201.hQ)(),
  v = e => {
    let {
      email: t,
      guildId: n,
      onClose: i
    } = e, [s, h] = l.useState(""), [v, N] = l.useState(null), E = l.useCallback(async () => {
      if (null != n) try {
        let e = await u.Z.verifyCode(s, n, t);
        e.guild && (null == i || i(), (0, x.uL)(p.Z5c.CHANNEL(e.guild.id)))
      } catch (e) {
        N(new m.Hx(e))
      }
    }, [s, t, n, i]), S = o().throttle(() => {
      u.Z.sendVerificationEmail(t, true, n)
    }, 1e3), y = async e => {
      null != s && "" !== s && e.charCode === p.yXg.ENTER && await E()
    };
    return (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)("div", {
        className: g.topImage
      }), (0, r.jsx)(d.X6q, {
        className: a()(g.centerText, g.header),
        variant: "heading-xl/semibold",
        children: f.intl.string(f.t.SJ3Lxc)
      }), (0, r.jsx)("div", {
        className: g.descriptionWidth,
        children: (0, r.jsx)(d.Text, {
          className: g.centerText,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: f.intl.format(f.t["b+W0oq"], {
            email: t,
            onClick: S
          })
        })
      }), (0, r.jsxs)(d.xJW, {
        className: g.formItem,
        children: [(0, r.jsx)(d.vwX, {
          id: _,
          children: f.intl.string(f.t.rpWT1t)
        }), (0, r.jsx)(d.oil, {
          onKeyPress: y,
          onChange: e => {
            null != e && "" !== e && h(e)
          },
          error: null == v ? true : v.getAnyErrorMessage(),
          "aria-labelledby": _
        })]
      }), (0, r.jsx)(c.zx, {
        fullWidth: true,
        onClick: E,
        size: c.zx.Sizes.LARGE,
        color: c.zx.Colors.BRAND,
        children: (0, r.jsx)(d.Text, {
          className: g.submitText,
          variant: "text-sm/normal",
          children: f.intl.string(f.t.geKm7u)
        })
      })]
    })
  }