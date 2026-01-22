/** Chunk was on 8798 **/
/** chunk id: 661037, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk272613 = require("./272613.js"),
  Chunk544199 = require("./544199.js"),
  Chunk448564 = require("./448564.js"),
  Chunk997509 = require("./997509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk751394 = require("./751394.js"),
  Chunk720619 = require("./720619.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk857161 = require("./857161.js");

function m(e) {
  let {
    className: t,
    guildId: i,
    onChange: l,
    isGuildIncluded: r
  } = e, {
    options: a
  } = (0, S.A)({
    isGuildIncluded: r
  });
  return (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsx)(d.ZiE, {
      onSelectionChange: l,
      value: i,
      options: a,
      placeholder: A.intl.string(A.t.etZ9tX),
      selectionMode: "single"
    })
  })
}

function C(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: r,
    section: S,
    subsection: A
  } = e, C = (0, o.GV)(), {
    canCreateGuild: v,
    createGuildCta: f,
    createGuildDescription: E,
    selectGuildCta: O,
    title: x,
    description: M,
    isGuildSupported: j
  } = (0, g.q)(r), [I, y] = l.useState(), [F, N] = l.useState(false), w = async () => {
    N(true);
    let e = await new Promise(e => {
      u.A.openCreateGuildModal({
        onSuccess: e
      })
    });
    await new Promise(t => {
      G.A.addChangeListener(function i() {
        null != G.A.getGuild(e) && (G.A.removeChangeListener(i), t())
      })
    }), p.A.open(e, S, true, A), null == i || i()
  };
  return (0, n.jsxs)(d.EOs, {
    transitionState: t,
    "aria-labelledby": C,
    parentComponent: "GuildSettingsPickerModal",
    children: [(0, n.jsxs)(d.rQ0, {
      className: h.Hc,
      separator: false,
      children: [(0, n.jsx)(d.Heading, {
        id: C,
        variant: "heading-lg/medium",
        children: x
      }), (0, n.jsx)(d.s_y, {
        onClick: i
      })]
    }), (0, n.jsxs)(d.$mQ, {
      className: h.jE,
      children: [(0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          children: M
        }), (0, n.jsxs)("div", {
          className: h.ce,
          children: [(0, n.jsx)("div", {
            className: h.oN,
            children: (0, n.jsx)(m, {
              guildId: I,
              onChange: y,
              isGuildIncluded: j
            })
          }), (0, n.jsx)(d.Button, {
            variant: "primary",
            text: O,
            onClick: () => {
              a()(null != I, "Guild ID must not be null on click"), b.A.hasSeenCreatorOnboardingForGuild(I) || (0, c.G)(I), p.A.open(I, S, true, A), null == i || i()
            },
            disabled: null == I
          })]
        })]
      }), v && (0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          children: E
        }), (0, n.jsx)(s.$n, {
          onClick: w,
          submitting: F,
          className: h.qo,
          children: f
        })]
      })]
    })]
  })
}