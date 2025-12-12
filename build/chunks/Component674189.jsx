/** Chunk was on 8102 **/
/** chunk id: 674189, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk10805 = require("./10805.js");

function h(e) {
  let {
    className: t,
    guildId: i,
    onChange: l,
    isGuildIncluded: r
  } = e, {
    options: a
  } = (0, C.Z)({
    isGuildIncluded: r
  });
  return (0, n.jsx)(o.d, {
    className: t,
    onChange: l,
    value: i,
    options: a,
    placeholder: m.intl.string(m.t.etZ9tX)
  })
}

function v(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: r,
    section: o,
    subsection: C
  } = e, m = (0, d.Dt)(), {
    canCreateGuild: v,
    createGuildCta: Z,
    createGuildDescription: x,
    selectGuildCta: E,
    title: O,
    description: F,
    isGuildSupported: I
  } = (0, b.K)(r), [M, j] = l.useState(), [_, w] = l.useState(false), y = async () => {
    w(true);
    let e = await new Promise(e => {
      c.Z.openCreateGuildModal({
        onSuccess: e
      })
    });
    await new Promise(t => {
      S.Z.addChangeListener(function i() {
        null != S.Z.getGuild(e) && (S.Z.removeChangeListener(i), t())
      })
    }), G.Z.open(e, o, true, C), null == i || i()
  };
  return (0, n.jsxs)(u.Y0X, {
    transitionState: t,
    "aria-labelledby": m,
    parentComponent: "GuildSettingsPickerModal",
    children: [(0, n.jsxs)(u.xBx, {
      className: f.modalHeader,
      separator: false,
      children: [(0, n.jsx)(u.Heading, {
        id: m,
        variant: "heading-lg/medium",
        children: O
      }), (0, n.jsx)(u.olH, {
        onClick: i
      })]
    }), (0, n.jsxs)(u.hzk, {
      className: f.modalContent,
      children: [(0, n.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/medium",
          children: F
        }), (0, n.jsxs)("div", {
          className: f.guildSelection,
          children: [(0, n.jsx)("div", {
            className: f.guildSelectorContainer,
            children: (0, n.jsx)(h, {
              guildId: M,
              onChange: j,
              isGuildIncluded: I
            })
          }), (0, n.jsx)(u.Button, {
            variant: "primary",
            text: E,
            onClick: () => {
              a()(null != M, "Guild ID must not be null on click"), g.Z.hasSeenCreatorOnboardingForGuild(M) || (0, p.k)(M), G.Z.open(M, o, true, C), null == i || i()
            },
            disabled: null == M
          })]
        })]
      }), v && (0, n.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/medium",
          children: x
        }), (0, n.jsx)(s.zx, {
          onClick: y,
          submitting: _,
          className: f.createGuildButton,
          children: Z
        })]
      })]
    })]
  })
}