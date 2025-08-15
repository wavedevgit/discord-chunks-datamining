/** Chunk was on 10778 **/
/** chunk id: 659900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function b(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    [n, s] = r.useState(""),
    [l, a] = r.useState(null),
    [c, d] = r.useState(null),
    u = (0, E.Z)(e.code);
  r.useEffect(() => {
    !async function() {
      let e = v.default.getCurrentUser();
      if (null == e) try {
        e = await (0, L.k)()
      } catch (e) {
        C.Z.verifySSOToken("accept_guild_template", null)
      }
      null != e && s(M.intl.formatToPlainString(u.defaultName, {
        username: e.username
      }))
    }()
  }, [u.defaultName]), (0, Z.Z)(e);
  let x = (0, i.jsxs)(i.Fragment, {
      children: [t ? (0, i.jsx)(T.Z, {
        guildTemplate: e
      }) : null, (0, i.jsx)("div", {
        className: S.icon,
        children: (0, i.jsx)(h.Z, {
          icon: l,
          onChange: a
        })
      }), (0, i.jsx)(o.xJW, {
        title: u.nameLabel,
        children: (0, i.jsx)(o.oil, {
          type: "text",
          value: n,
          maxLength: 100,
          onChange: s,
          error: null == c ? true : c.name
        })
      }), (0, i.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: S.guidelines,
        children: M.intl.format(u.terms, {
          guidelinesURL: _.EYA.GUIDELINES
        })
      })]
    }),
    f = e.serializedSourceGuild.roles.map(t => N.wD(e.serializedSourceGuild.id, t)).filter(e => !(0, p.fI)(e));
  return {
    form: x,
    preview: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: S.divider
      }), (0, i.jsxs)(o.xJW, {
        className: S.previewSection,
        title: M.intl.string(M.t.Zxk1OD),
        children: [(0, i.jsx)(G, {
          channels: e.serializedSourceGuild.channels
        }), (0, i.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: S.protip,
          children: [(0, i.jsxs)("span", {
            className: S.protipText,
            children: [M.intl.string(M.t["8tvIiI"]), ":"]
          }), " ", M.intl.string(M.t.de7DpK)]
        })]
      }), f.length > 0 ? (0, i.jsx)(o.xJW, {
        className: S.previewSection,
        title: M.intl.string(M.t["RJ1e/v"]),
        children: (0, i.jsx)(I, {
          guildId: e.serializedSourceGuild.id,
          roles: f
        })
      }) : null]
    }),
    handleSubmit: () => {
      H.Z.acceptGuildTemplate(e.code, n, l).then(() => {
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
    let n = (t = e).type === _.d4z.GUILD_CATEGORY ? j.Z : (0, x.KS)((0, g.q_)(t));
    return (0, i.jsxs)("div", {
      className: l()(S.channel, {
        [S.category]: e.type === _.d4z.GUILD_CATEGORY
      }),
      children: [null != n ? (0, i.jsx)(n, {
        className: S.channelIcon
      }) : null, (0, i.jsx)(o.Text, {
        className: S.channelText,
        variant: "text-sm/normal",
        children: e.name
      })]
    }, e.id)
  }).value();
  return (0, i.jsx)("div", {
    className: S.channelsWrapper,
    children: n
  })
}

function I(e) {
  let {
    guildId: t,
    roles: n
  } = e, r = n.slice().reverse().map(e => (0, i.jsx)(R, {
    guildId: t,
    role: e
  }, e.id));
  return (0, i.jsx)("ul", {
    className: S.rolesWrapper,
    children: r
  })
}

function R(e) {
  var t, n;
  let {
    guildId: r,
    role: s
  } = e, l = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(), a = null == s.color ? l : (0, d.Rf)(s.color), c = (0, f._f)(r, s, s.colorStrings);
  return (0, i.jsxs)("li", {
    className: S.role,
    style: {
      borderColor: null != (t = (0, d.wK)(a, .6)) ? t : true,
      backgroundColor: null != (n = (0, d.wK)(a, .075)) ? n : true
    },
    children: [(0, i.jsx)(o.xko, {
      className: S.roleCircle,
      color: a,
      colors: c
    }), (0, i.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: s.name
    })]
  })
}
require("./418757.js")