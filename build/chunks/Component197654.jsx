/** Chunk was on 98363 **/
/** chunk id: 197654, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk154672 = require("./154672.js"),
  Chunk198982 = require("./198982.js"),
  Chunk734057 = require("./734057.js"),
  Chunk330936 = require("./330936.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk182992 = require("./182992.js");
let O = e => {
  var t, r;
  let {
    setStep: O,
    setGuildsInfo: b,
    email: d,
    setEmail: g,
    setGuildId: j,
    invite: m
  } = e, h = function(e, t) {
    if (null == e) return {};
    var r, n, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["setStep", "setGuildsInfo", "email", "setEmail", "setGuildId", "invite"]), [E, v] = l.useState(null), [I, S] = l.useState(false), w = async e => {
    e.preventDefault(), v(null), S(true);
    try {
      var t, r, n, l, i;
      let e = null != (t = null != (r = null == m || null == (n = m.guild) ? true : n.id) ? r : null == (l = s.A.getChannel(null == m || null == (i = m.channel) ? true : i.id)) ? true : l.getGuildId()) ? t : true;
      e === u.TA && (e = true);
      let o = await a.A.sendVerificationEmail(d, true, e),
        c = o.guilds_info;
      o.has_matching_guild ? (j(e), O(u.Di.VERIFY_PIN)) : 0 === c.length ? O(u.Di.SUBMIT_SCHOOL) : 1 === c.length ? (j(c[0].id), await a.A.sendVerificationEmail(d, true, c[0].id), O(u.Di.VERIFY_PIN)) : (b(c), O(u.Di.SELECT_SCHOOL))
    } catch (e) {
      v(new c.LG(e))
    } finally {
      S(false)
    }
  }, P = y.intl.string(y.t.H1jCHH);
  if ((null == m ? true : m.guild) != null && m.guild.id !== u.TA && (null == m ? true : m.approximate_member_count) != null) {
    let {
      name: e
    } = m.guild;
    P = y.intl.formatToPlainString(y.t["4T4+p1"], {
      guildName: e,
      count: m.approximate_member_count
    })
  }
  return (0, n.jsx)("form", {
    className: f.o,
    onSubmit: w,
    children: (0, n.jsxs)(i.Modal, (t = function(e) {
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
    }({}, h), r = r = {
      title: P,
      actions: [{
        variant: "primary",
        type: "submit",
        loading: I,
        text: y.intl.string(y.t["8vmKO0"])
      }],
      children: [(0, n.jsx)(o.ksK, {
        label: y.intl.string(y.t.kmCxkf),
        placeholder: y.intl.string(y.t.ImAOh5),
        onChange: e => {
          g(e)
        },
        error: null == E ? true : E.getAnyErrorMessage()
      }), (0, n.jsx)(o.Text, {
        className: f.V,
        color: "text-muted",
        variant: "text-xs/normal",
        children: y.intl.format(y.t.cgT481, {
          termsURL: p.X7G.TERMS,
          privacyURL: p.X7G.PRIVACY
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