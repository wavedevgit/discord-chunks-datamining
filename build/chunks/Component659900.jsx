/** Chunk was on 10778 **/
/** chunk id: 659900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk37234 = require("./37234.js"),
  Chunk232567 = require("./232567.js"),
  Chunk820160 = require("./820160.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk884902 = require("./884902.js"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk594174 = require("./594174.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk539600 = require("./539600.js"),
  Chunk355996 = require("./355996.js"),
  Chunk837748 = require("./837748.js"),
  Chunk971401 = require("./971401.js"),
  Chunk306453 = require("./306453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk868568 = require("./868568.js");

function S(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    [n, l] = i.useState(""),
    [s, a] = i.useState(null),
    [c, d] = i.useState(null),
    u = (0, E.Z)(e.code);
  i.useEffect(() => {
    !async function() {
      let e = v.default.getCurrentUser();
      if (null == e) try {
        e = await (0, L.k)()
      } catch (e) {
        C.Z.verifySSOToken("accept_guild_template", null)
      }
      null != e && l(M.intl.formatToPlainString(u.defaultName, {
        username: e.username
      }))
    }()
  }, [u.defaultName]), (0, Z.Z)(e);
  let f = (0, r.jsxs)(r.Fragment, {
      children: [t ? (0, r.jsx)(_.Z, {
        guildTemplate: e
      }) : null, (0, r.jsx)("div", {
        className: T.icon,
        children: (0, r.jsx)(h.Z, {
          icon: s,
          onChange: a
        })
      }), (0, r.jsx)(o.oil, {
        label: u.nameLabel,
        helperText: M.intl.format(u.terms, {
          guidelinesURL: b.EYA.GUIDELINES
        }),
        type: "text",
        value: n,
        maxLength: 100,
        onChange: l,
        error: null == c ? true : c.name
      })]
    }),
    g = e.serializedSourceGuild.roles.map(t => H.wD(e.serializedSourceGuild.id, t)).filter(e => !(0, p.fI)(e));
  return {
    form: f,
    preview: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.izJ, {}), (0, r.jsx)(o.gNt, {
        label: M.intl.string(M.t.Zxk1OD),
        helperText: M.intl.string(M.t.de7DpK),
        children: (0, r.jsx)(G, {
          channels: e.serializedSourceGuild.channels
        })
      }), g.length > 0 ? (0, r.jsx)(o.gNt, {
        label: M.intl.string(M.t["RJ1e/v"]),
        children: (0, r.jsx)(R, {
          guildId: e.serializedSourceGuild.id,
          roles: g
        })
      }) : null]
    }),
    handleSubmit: () => {
      N.Z.acceptGuildTemplate(e.code, n, s).then(() => {
        (0, o.pTH)(), (0, m.Ou)()
      }).catch(e => d(e))
    }
  }
}

function G(e) {
  let {
    channels: t
  } = e, n = c()(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
    var t;
    let n = (t = e).type === b.d4z.GUILD_CATEGORY ? j.Z : (0, f.KS)((0, x.q_)(t));
    return (0, r.jsxs)("div", {
      className: s()(T.channel, {
        [T.category]: e.type === b.d4z.GUILD_CATEGORY
      }),
      children: [null != n ? (0, r.jsx)(n, {
        className: T.channelIcon
      }) : null, (0, r.jsx)(o.Text, {
        className: T.channelText,
        variant: "text-sm/normal",
        children: e.name
      })]
    }, e.id)
  }).value();
  return (0, r.jsx)("div", {
    className: T.channelsWrapper,
    children: n
  })
}

function R(e) {
  let {
    guildId: t,
    roles: n
  } = e, i = n.slice().reverse().map(e => (0, r.jsx)(I, {
    guildId: t,
    role: e
  }, e.id));
  return (0, r.jsx)("ul", {
    className: T.rolesWrapper,
    children: i
  })
}

function I(e) {
  var t, n;
  let {
    guildId: i,
    role: l
  } = e, s = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(), a = null == l.color ? s : (0, d.Rf)(l.color), c = (0, g._f)(i, l, l.colorStrings);
  return (0, r.jsxs)("li", {
    className: T.role,
    style: {
      borderColor: null != (t = (0, d.wK)(a, .6)) ? t : true,
      backgroundColor: null != (n = (0, d.wK)(a, .075)) ? n : true
    },
    children: [(0, r.jsx)(o.xko, {
      className: T.roleCircle,
      color: a,
      colors: c
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: l.name
    })]
  })
}
require("./418757.js")