/** Chunk was on 95468 **/
/** chunk id: 994640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk592125 = require("./592125.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162985 = require("./162985.js");
let p = e => {
  let {
    setStep: t,
    setGuildsInfo: n,
    email: i,
    setEmail: p,
    setGuildId: h,
    invite: _,
    onClose: v,
    isNUXFlow: x
  } = e, [N, E] = l.useState(null), [y, S] = l.useState(false), j = async e => {
    e.preventDefault(), E(null), S(true);
    try {
      var r, l, a, s, m;
      let e = null != (m = null != (s = null == _ || null == (r = _.guild) ? true : r.id) ? s : null == (l = d.Z.getChannel(null == _ || null == (a = _.channel) ? true : a.id)) ? true : l.getGuildId()) ? m : true;
      e === u.fQ && (e = true);
      let c = await o.Z.sendVerificationEmail(i, true, e),
        f = c.guilds_info;
      c.has_matching_guild ? (h(e), t(u.tF.VERIFY_PIN)) : 0 === f.length ? t(u.tF.SUBMIT_SCHOOL) : 1 === f.length ? (h(f[0].id), await o.Z.sendVerificationEmail(i, true, f[0].id), t(u.tF.VERIFY_PIN)) : (n(f), t(u.tF.SELECT_SCHOOL))
    } catch (e) {
      E(new c.Hx(e))
    } finally {
      S(false)
    }
  }, I = f.intl.string(f.t.H1jCHH), O = f.intl.string(f.t.YfeHRA);
  if (x) I = f.intl.string(f.t.LVyxNH), O = f.intl.string(f.t.ECd7Rt);
  else if ((null == _ ? true : _.guild) != null && _.guild.id !== u.fQ && (null == _ ? true : _.approximate_member_count) != null) {
    let {
      name: e
    } = _.guild;
    I = f.intl.formatToPlainString(f.t["4T4+p1"], {
      guildName: e,
      count: _.approximate_member_count
    })
  }
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)("div", {
      className: g.topImage
    }), (0, r.jsx)(s.Heading, {
      className: a()(g.centerText, g.header),
      variant: "heading-xl/semibold",
      children: I
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
      onSubmit: j,
      children: [(0, r.jsx)(s.oil, {
        label: f.intl.string(f.t.kmCxkf),
        placeholder: f.intl.string(f.t.ImAOh5),
        onChange: e => {
          p(e)
        },
        error: null == N ? true : N.getAnyErrorMessage()
      }), (0, r.jsx)(s.Text, {
        color: "header-secondary",
        className: g.formDescription,
        variant: "text-sm/normal",
        children: f.intl.string(f.t.Cv7mmI)
      }), (0, r.jsx)(s.Button, {
        type: "submit",
        variant: "primary",
        loading: y,
        text: f.intl.string(f.t["8vmKO0"]),
        fullWidth: true
      }), (0, r.jsx)(s.Text, {
        className: g.termsPhrase,
        color: "header-secondary",
        variant: "text-xs/normal",
        children: f.intl.format(f.t.RPT0vj, {
          termsURL: m.EYA.TERMS,
          privacyURL: m.EYA.PRIVACY
        })
      }), x && (0, r.jsx)("div", {
        className: g.cancelButton,
        children: (0, r.jsx)(s.Avr, {
          onClick: v,
          text: f.intl.string(f.t.hO6qJ3)
        })
      })]
    })]
  })
}