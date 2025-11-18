/** Chunk was on 7082 **/
/** chunk id: 994640, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk592125 = require("./592125.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162985 = require("./162985.js");
let p = e => {
  var t, r, {
      setStep: p,
      setGuildsInfo: y,
      email: b,
      setEmail: g,
      setGuildId: j,
      invite: m
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["setStep", "setGuildsInfo", "email", "setEmail", "setGuildId", "invite"]);
  let [h, E] = i.useState(null), [S, I] = i.useState(false), P = async e => {
    e.preventDefault(), E(null), I(true);
    try {
      var t, r, n, i, l;
      let e = null != (l = null != (i = null == m || null == (t = m.guild) ? true : t.id) ? i : null == (r = s.Z.getChannel(null == m || null == (n = m.channel) ? true : n.id)) ? true : r.getGuildId()) ? l : true;
      e === u.fQ && (e = true);
      let o = await a.Z.sendVerificationEmail(b, true, e),
        c = o.guilds_info;
      o.has_matching_guild ? (j(e), p(u.tF.VERIFY_PIN)) : 0 === c.length ? p(u.tF.SUBMIT_SCHOOL) : 1 === c.length ? (j(c[0].id), await a.Z.sendVerificationEmail(b, true, c[0].id), p(u.tF.VERIFY_PIN)) : (y(c), p(u.tF.SELECT_SCHOOL))
    } catch (e) {
      E(new c.Hx(e))
    } finally {
      I(false)
    }
  }, _ = f.intl.string(f.t.H1jCHH);
  if ((null == m ? true : m.guild) != null && m.guild.id !== u.fQ && (null == m ? true : m.approximate_member_count) != null) {
    let {
      name: e
    } = m.guild;
    _ = f.intl.formatToPlainString(f.t["4T4+p1"], {
      guildName: e,
      count: m.approximate_member_count
    })
  }
  return (0, n.jsx)("form", {
    className: O.formContent,
    onSubmit: P,
    children: (0, n.jsxs)(l.Modal, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, v), r = r = {
      title: _,
      actions: [{
        variant: "primary",
        type: "submit",
        loading: S,
        text: f.intl.string(f.t["8vmKO0"])
      }],
      children: [(0, n.jsx)(o.oil, {
        label: f.intl.string(f.t.kmCxkf),
        placeholder: f.intl.string(f.t.ImAOh5),
        onChange: e => {
          g(e)
        },
        error: null == h ? true : h.getAnyErrorMessage()
      }), (0, n.jsx)(o.Text, {
        className: O.termsPhrase,
        color: "text-muted",
        variant: "text-xs/normal",
        children: f.intl.format(f.t.cgT481, {
          termsURL: d.EYA.TERMS,
          privacyURL: d.EYA.PRIVACY
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  })
}