/** Chunk was on 95468 **/
/** chunk id: 994640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162985 = require("./162985.js");
let g = (0, Chunk313201.hQ)(),
  v = e => {
    let {
      setStep: t,
      setGuildsInfo: n,
      email: i,
      setEmail: d,
      setGuildId: v,
      invite: _,
      onClose: x,
      isNUXFlow: N
    } = e, [E, y] = l.useState(null), [S, j] = l.useState(false), I = async e => {
      e.preventDefault(), y(null), j(true);
      try {
        var r, l, a, s, d;
        let e = null != (d = null != (s = null == _ || null == (r = _.guild) ? true : r.id) ? s : null == (l = u.Z.getChannel(null == _ || null == (a = _.channel) ? true : a.id)) ? true : l.getGuildId()) ? d : true;
        e === m.fQ && (e = true);
        let c = await o.Z.sendVerificationEmail(i, true, e),
          f = c.guilds_info;
        c.has_matching_guild ? (v(e), t(m.tF.VERIFY_PIN)) : 0 === f.length ? t(m.tF.SUBMIT_SCHOOL) : 1 === f.length ? (v(f[0].id), await o.Z.sendVerificationEmail(i, true, f[0].id), t(m.tF.VERIFY_PIN)) : (n(f), t(m.tF.SELECT_SCHOOL))
      } catch (e) {
        y(new c.Hx(e))
      } finally {
        j(false)
      }
    }, b = p.intl.string(p.t.H1jCHB), O = p.intl.string(p.t.YfeHRE);
    if (N) b = p.intl.string(p.t.LVyxND), O = p.intl.string(p.t.ECd7Rk);
    else if ((null == _ ? true : _.guild) != null && _.guild.id !== m.fQ && (null == _ ? true : _.approximate_member_count) != null) {
      let {
        name: e
      } = _.guild;
      b = p.intl.formatToPlainString(p.t["4T4+p6"], {
        guildName: e,
        count: _.approximate_member_count
      })
    }
    return (0, r.jsxs)("div", {
      className: h.container,
      children: [(0, r.jsx)("div", {
        className: h.topImage
      }), (0, r.jsx)(s.X6q, {
        className: a()(h.centerText, h.header),
        variant: "heading-xl/semibold",
        children: b
      }), (0, r.jsx)("div", {
        className: h.descriptionWidth,
        children: (0, r.jsx)(s.Text, {
          className: h.centerText,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: O
        })
      }), (0, r.jsxs)("form", {
        className: h.formContent,
        onSubmit: I,
        children: [(0, r.jsxs)(s.xJW, {
          children: [(0, r.jsx)(s.vwX, {
            id: g,
            children: p.intl.string(p.t.kmCxkZ)
          }), (0, r.jsx)(s.oil, {
            placeholder: p.intl.string(p.t.ImAOh4),
            onChange: e => {
              d(e)
            },
            error: null == E ? true : E.getAnyErrorMessage(),
            "aria-labelledby": g
          })]
        }), (0, r.jsx)(s.Text, {
          color: "header-secondary",
          className: h.formDescription,
          variant: "text-sm/normal",
          children: p.intl.string(p.t.Cv7mmJ)
        }), (0, r.jsx)(s.zxk, {
          type: "submit",
          variant: "primary",
          loading: S,
          text: p.intl.string(p.t["8vmKOz"]),
          fullWidth: true
        }), (0, r.jsx)(s.Text, {
          className: h.termsPhrase,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: p.intl.format(p.t.RPT0vr, {
            termsURL: f.EYA.TERMS,
            privacyURL: f.EYA.PRIVACY
          })
        }), N && (0, r.jsx)("div", {
          className: h.cancelButton,
          children: (0, r.jsx)(s.Avr, {
            onClick: x,
            text: p.intl.string(p.t.hO6qJy)
          })
        })]
      })]
    })
  }