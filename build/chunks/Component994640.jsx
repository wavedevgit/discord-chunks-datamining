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
let p = (0, Chunk313201.hQ)(),
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
    } = e, [y, E] = l.useState(null), [S, j] = l.useState(false), I = async e => {
      e.preventDefault(), E(null), j(true);
      try {
        var r, l, a, s, d;
        let e = null != (d = null != (s = null == _ || null == (r = _.guild) ? true : r.id) ? s : null == (l = u.Z.getChannel(null == _ || null == (a = _.channel) ? true : a.id)) ? true : l.getGuildId()) ? d : true;
        e === m.fQ && (e = true);
        let c = await o.Z.sendVerificationEmail(i, true, e),
          f = c.guilds_info;
        c.has_matching_guild ? (v(e), t(m.tF.VERIFY_PIN)) : 0 === f.length ? t(m.tF.SUBMIT_SCHOOL) : 1 === f.length ? (v(f[0].id), await o.Z.sendVerificationEmail(i, true, f[0].id), t(m.tF.VERIFY_PIN)) : (n(f), t(m.tF.SELECT_SCHOOL))
      } catch (e) {
        E(new c.Hx(e))
      } finally {
        j(false)
      }
    }, b = h.intl.string(h.t.H1jCHB), O = h.intl.string(h.t.YfeHRE);
    if (N) b = h.intl.string(h.t.LVyxND), O = h.intl.string(h.t.ECd7Rk);
    else if ((null == _ ? true : _.guild) != null && _.guild.id !== m.fQ && (null == _ ? true : _.approximate_member_count) != null) {
      let {
        name: e
      } = _.guild;
      b = h.intl.formatToPlainString(h.t["4T4+p6"], {
        guildName: e,
        count: _.approximate_member_count
      })
    }
    return (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)("div", {
        className: g.topImage
      }), (0, r.jsx)(s.X6q, {
        className: a()(g.centerText, g.header),
        variant: "heading-xl/semibold",
        children: b
      }), (0, r.jsx)("div", {
        className: g.descriptionWidth,
        children: (0, r.jsx)(s.Text, {
          className: g.centerText,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: O
        })
      }), (0, r.jsxs)("form", {
        className: g.formContent,
        onSubmit: I,
        children: [(0, r.jsxs)(s.xJW, {
          children: [(0, r.jsx)(s.vwX, {
            id: p,
            children: h.intl.string(h.t.kmCxkZ)
          }), (0, r.jsx)(s.oil, {
            placeholder: h.intl.string(h.t.ImAOh4),
            onChange: e => {
              d(e)
            },
            error: null == y ? true : y.getAnyErrorMessage(),
            "aria-labelledby": p
          })]
        }), (0, r.jsx)(s.Text, {
          color: "header-secondary",
          className: g.formDescription,
          variant: "text-sm/normal",
          children: h.intl.string(h.t.Cv7mmJ)
        }), (0, r.jsx)(s.zxk, {
          type: "submit",
          variant: "primary",
          loading: S,
          text: h.intl.string(h.t["8vmKOz"]),
          fullWidth: true
        }), (0, r.jsx)(s.Text, {
          className: g.termsPhrase,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: h.intl.format(h.t.RPT0vr, {
            termsURL: f.EYA.TERMS,
            privacyURL: f.EYA.PRIVACY
          })
        }), N && (0, r.jsx)("div", {
          className: g.cancelButton,
          children: (0, r.jsx)(s.Avr, {
            onClick: x,
            text: h.intl.string(h.t.hO6qJy)
          })
        })]
      })]
    })
  }