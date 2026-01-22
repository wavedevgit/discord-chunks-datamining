/** Chunk was on 7726 **/
/** chunk id: 225858, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk317097 = require("./317097.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk398590 = require("./398590.js"),
  Chunk803306 = require("./803306.js"),
  Chunk356343 = require("./356343.jsx"),
  Chunk713654 = require("./713654.js"),
  Chunk967144 = require("./967144.js"),
  Chunk95701 = require("./95701.js"),
  Chunk34457 = require("./34457.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk9865 = require("./9865.js"),
  Chunk79680 = require("./79680.js"),
  Chunk651539 = require("./651539.js"),
  Chunk774393 = require("./774393.js"),
  Chunk768397 = require("./768397.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk79048 = require("./79048.js");

function G(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    [r, n] = l.useState(""),
    [i, a] = l.useState(null),
    [d, c] = l.useState(null),
    u = (0, N.A)(e.code);
  l.useEffect(() => {
    !async function() {
      let e = v.default.getCurrentUser();
      if (null == e) try {
        e = await (0, L.rQ)()
      } catch (e) {
        C.A.verifySSOToken("accept_guild_template", null)
      }
      null != e && n(_.intl.formatToPlainString(u.defaultName, {
        username: e.username
      }))
    }()
  }, [u.defaultName]), (0, I.A)(e);
  let x = (0, s.jsxs)(s.Fragment, {
      children: [t ? (0, s.jsx)(b.A, {
        guildTemplate: e
      }) : null, (0, s.jsx)("div", {
        className: M.Kk,
        children: (0, s.jsx)(h.A, {
          icon: i,
          onChange: a
        })
      }), (0, s.jsx)(o.ksK, {
        label: u.nameLabel,
        helperText: _.intl.format(u.terms, {
          guidelinesURL: Z.X7G.GUIDELINES
        }),
        type: "text",
        value: r,
        maxLength: 100,
        onChange: n,
        error: null == d ? true : d.name
      })]
    }),
    g = e.serializedSourceGuild.roles.map(t => E.Wj(e.serializedSourceGuild.id, t)).filter(e => !(0, f.Oy)(e));
  return {
    form: x,
    preview: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.cGx, {}), (0, s.jsx)(o.D0$, {
        label: _.intl.string(_.t.Zxk1OF),
        helperText: _.intl.string(_.t.de7DpI),
        children: (0, s.jsx)(S, {
          channels: e.serializedSourceGuild.channels
        })
      }), g.length > 0 ? (0, s.jsx)(o.D0$, {
        label: _.intl.string(_.t["RJ1e/r"]),
        children: (0, s.jsx)(T, {
          guildId: e.serializedSourceGuild.id,
          roles: g
        })
      }) : null]
    }),
    handleSubmit: () => {
      A.A.acceptGuildTemplate(e.code, r, i).then(() => {
        (0, o.s7G)(), (0, m.bz)()
      }).catch(e => c(e))
    }
  }
}

function S(e) {
  let {
    channels: t
  } = e, r = d()(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
    var t;
    let r = (t = e).type === Z.rbe.GUILD_CATEGORY ? j.A : (0, x.gU)((0, p.UE)(t));
    return (0, s.jsxs)("div", {
      className: i()(M.Ix, {
        [M.L1]: e.type === Z.rbe.GUILD_CATEGORY
      }),
      children: [null != r ? (0, s.jsx)(r, {
        className: M.p
      }) : null, (0, s.jsx)(o.Text, {
        className: M.be,
        variant: "text-sm/normal",
        children: e.name
      })]
    }, e.id)
  }).value();
  return (0, s.jsx)("div", {
    className: M.oD,
    children: r
  })
}

function T(e) {
  let {
    guildId: t,
    roles: r
  } = e, l = r.slice().reverse().map(e => (0, s.jsx)(H, {
    guildId: t,
    role: e
  }, e.id));
  return (0, s.jsx)("ul", {
    className: M.F6,
    children: l
  })
}

function H(e) {
  var t, r;
  let {
    guildId: l,
    role: n
  } = e, i = (0, o.rdh)(u.A.colors.BORDER_SUBTLE).hex(), a = null == n.color ? i : (0, c.Hl)(n.color), d = (0, g.X_)(l, n, n.colorStrings);
  return (0, s.jsxs)("li", {
    className: M.JC,
    style: {
      borderColor: null != (t = (0, c.xp)(a, .6)) ? t : true,
      backgroundColor: null != (r = (0, c.xp)(a, .075)) ? r : true
    },
    children: [(0, s.jsx)(o.RYH, {
      className: M.Ni,
      color: a,
      colors: d
    }), (0, s.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: n.name
    })]
  })
}
require("./979217.js")