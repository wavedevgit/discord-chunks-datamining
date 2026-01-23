/** Chunk was on 8798 **/
/** chunk id: 661037, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function C(e) {
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

function h(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: r,
    section: S,
    subsection: A
  } = e, h = (0, o.GV)(), {
    canCreateGuild: v,
    createGuildCta: E,
    createGuildDescription: O,
    selectGuildCta: f,
    title: x,
    description: M,
    isGuildSupported: j
  } = (0, b.q)(r), [_, I] = l.useState(), [y, F] = l.useState(false), N = async () => {
    F(true);
    let e = await new Promise(e => {
      u.A.openCreateGuildModal({
        onSuccess: e
      })
    });
    await new Promise(t => {
      g.A.addChangeListener(function i() {
        null != g.A.getGuild(e) && (g.A.removeChangeListener(i), t())
      })
    }), G.A.open(e, S, true, A), null == i || i()
  };
  return (0, n.jsxs)(d.EOs, {
    transitionState: t,
    "aria-labelledby": h,
    parentComponent: "GuildSettingsPickerModal",
    children: [(0, n.jsxs)(d.rQ0, {
      className: m.Hc,
      separator: false,
      children: [(0, n.jsx)(d.Heading, {
        id: h,
        variant: "heading-lg/medium",
        children: x
      }), (0, n.jsx)(d.s_y, {
        onClick: i
      })]
    }), (0, n.jsxs)(d.$mQ, {
      className: m.jE,
      children: [(0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          children: M
        }), (0, n.jsxs)("div", {
          className: m.ce,
          children: [(0, n.jsx)("div", {
            className: m.oN,
            children: (0, n.jsx)(C, {
              guildId: _,
              onChange: I,
              isGuildIncluded: j
            })
          }), (0, n.jsx)(d.Button, {
            variant: "primary",
            text: f,
            onClick: () => {
              a()(null != _, "Guild ID must not be null on click"), p.A.hasSeenCreatorOnboardingForGuild(_) || (0, c.G)(_), G.A.open(_, S, true, A), null == i || i()
            },
            disabled: null == _
          })]
        })]
      }), v && (0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          children: O
        }), (0, n.jsx)(s.$n, {
          onClick: N,
          submitting: y,
          className: m.qo,
          children: E
        })]
      })]
    })]
  })
}