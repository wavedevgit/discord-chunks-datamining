/** Chunk was on 8102 **/
/** chunk id: 674189, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk560067 = require("./560067.js"),
  Chunk17079 = require("./17079.js"),
  Chunk709246 = require("./709246.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk313741 = require("./313741.js"),
  Chunk526079 = require("./526079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk939964 = require("./939964.js");

function h(e) {
  let {
    className: t,
    guildId: i,
    onChange: l,
    isGuildIncluded: r
  } = e, {
    options: a
  } = (0, b.Z)({
    isGuildIncluded: r
  });
  return (0, n.jsx)(s.VcW, {
    className: t,
    onChange: l,
    value: i,
    options: a,
    placeholder: C.intl.string(C.t.etZ9tX)
  })
}

function f(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: r,
    section: b,
    subsection: C
  } = e, f = (0, u.Dt)(), {
    canCreateGuild: v,
    createGuildCta: Z,
    createGuildDescription: x,
    selectGuildCta: E,
    title: O,
    description: F,
    isGuildSupported: I
  } = (0, S.K)(r), [_, M] = l.useState(), [j, w] = l.useState(false), y = async () => {
    w(true);
    let e = await new Promise(e => {
      d.Z.openCreateGuildModal({
        onSuccess: e
      })
    });
    await new Promise(t => {
      G.Z.addChangeListener(function i() {
        null != G.Z.getGuild(e) && (G.Z.removeChangeListener(i), t())
      })
    }), g.Z.open(e, b, true, C), null == i || i()
  };
  return (0, n.jsxs)(s.Y0X, {
    transitionState: t,
    "aria-labelledby": f,
    parentComponent: "GuildSettingsPickerModal",
    children: [(0, n.jsxs)(s.xBx, {
      className: m.modalHeader,
      separator: false,
      children: [(0, n.jsx)(s.Heading, {
        id: f,
        variant: "heading-lg/medium",
        children: O
      }), (0, n.jsx)(s.olH, {
        onClick: i
      })]
    }), (0, n.jsxs)(s.hzk, {
      className: m.modalContent,
      children: [(0, n.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/medium",
          children: F
        }), (0, n.jsxs)("div", {
          className: m.guildSelection,
          children: [(0, n.jsx)("div", {
            className: m.guildSelectorContainer,
            children: (0, n.jsx)(h, {
              guildId: _,
              onChange: M,
              isGuildIncluded: I
            })
          }), (0, n.jsx)(s.Button, {
            variant: "primary",
            text: E,
            onClick: () => {
              a()(null != _, "Guild ID must not be null on click"), p.Z.hasSeenCreatorOnboardingForGuild(_) || (0, c.k)(_), g.Z.open(_, b, true, C), null == i || i()
            },
            disabled: null == _
          })]
        })]
      }), v && (0, n.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/medium",
          children: x
        }), (0, n.jsx)(o.zx, {
          onClick: y,
          submitting: j,
          className: m.createGuildButton,
          children: Z
        })]
      })]
    })]
  })
}