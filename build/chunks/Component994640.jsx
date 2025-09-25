/** Chunk was on 95468 **/
/** chunk id: 994640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162985 = require("./162985.js");
let x = (0, Chunk313201.hQ)(),
  _ = e => {
    let {
      setStep: t,
      setGuildsInfo: n,
      email: i,
      setEmail: u,
      setGuildId: _,
      invite: v,
      onClose: N,
      isNUXFlow: E
    } = e, [S, y] = l.useState(null), [j, b] = l.useState(false), I = async e => {
      e.preventDefault(), y(null), b(true);
      try {
        var r, l, a, s, o;
        let e = null != (o = null != (s = null == v || null == (r = v.guild) ? true : r.id) ? s : null == (l = m.Z.getChannel(null == v || null == (a = v.channel) ? true : a.id)) ? true : l.getGuildId()) ? o : true;
        e === h.fQ && (e = true);
        let d = await c.Z.sendVerificationEmail(i, true, e),
          u = d.guilds_info;
        d.has_matching_guild ? (_(e), t(h.tF.VERIFY_PIN)) : 0 === u.length ? t(h.tF.SUBMIT_SCHOOL) : 1 === u.length ? (_(u[0].id), await c.Z.sendVerificationEmail(i, true, u[0].id), t(h.tF.VERIFY_PIN)) : (n(u), t(h.tF.SELECT_SCHOOL))
      } catch (e) {
        y(new d.Hx(e))
      } finally {
        b(false)
      }
    }, O = g.intl.string(g.t.H1jCHB), T = g.intl.string(g.t.YfeHRE);
    if (E) O = g.intl.string(g.t.LVyxND), T = g.intl.string(g.t.ECd7Rk);
    else if ((null == v ? true : v.guild) != null && v.guild.id !== h.fQ && (null == v ? true : v.approximate_member_count) != null) {
      let {
        name: e
      } = v.guild;
      O = g.intl.formatToPlainString(g.t["4T4+p6"], {
        guildName: e,
        count: v.approximate_member_count
      })
    }
    return (0, r.jsxs)("div", {
      className: p.container,
      children: [(0, r.jsx)("div", {
        className: p.topImage
      }), (0, r.jsx)(o.X6q, {
        className: a()(p.centerText, p.header),
        variant: "heading-xl/semibold",
        children: O
      }), (0, r.jsx)("div", {
        className: p.descriptionWidth,
        children: (0, r.jsx)(o.Text, {
          className: p.centerText,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: T
        })
      }), (0, r.jsxs)("form", {
        className: p.formContent,
        onSubmit: I,
        children: [(0, r.jsxs)(o.xJW, {
          children: [(0, r.jsx)(o.vwX, {
            id: x,
            children: g.intl.string(g.t.kmCxkZ)
          }), (0, r.jsx)(o.oil, {
            placeholder: g.intl.string(g.t.ImAOh4),
            onChange: e => {
              u(e)
            },
            error: null == S ? true : S.getAnyErrorMessage(),
            "aria-labelledby": x
          })]
        }), (0, r.jsx)(o.Text, {
          color: "header-secondary",
          className: p.formDescription,
          variant: "text-sm/normal",
          children: g.intl.string(g.t.Cv7mmJ)
        }), (0, r.jsx)(s.zx, {
          type: "submit",
          size: s.zx.Sizes.LARGE,
          color: s.zx.Colors.BRAND,
          className: p.submitButton,
          submitting: j,
          children: g.intl.string(g.t["8vmKOz"])
        }), (0, r.jsx)(o.Text, {
          className: p.termsPhrase,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: g.intl.format(g.t.RPT0vr, {
            termsURL: f.EYA.TERMS,
            privacyURL: f.EYA.PRIVACY
          })
        }), E && (0, r.jsx)(s.zx, {
          look: s.zx.Looks.LINK,
          onClick: N,
          className: p.cancelButton,
          children: g.intl.string(g.t.hO6qJy)
        })]
      })]
    })
  }