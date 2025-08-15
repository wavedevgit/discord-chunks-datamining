/** Chunk was on 8102 **/
/** chunk id: 674189, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk560067 = require("./560067.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk313741 = require("./313741.js"),
  Chunk526079 = require("./526079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk939964 = require("./939964.js");

function b(e) {
  let {
    className: t,
    guildId: i,
    onChange: l,
    isGuildIncluded: r
  } = e, {
    options: a
  } = (0, G.Z)({
    isGuildIncluded: r
  });
  return (0, n.jsx)(u.VcW, {
    className: t,
    onChange: l,
    value: i,
    options: a,
    placeholder: C.intl.string(C.t.etZ9tb)
  })
}

function h(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: r,
    section: G,
    subsection: C
  } = e, h = (0, d.Dt)(), {
    canCreateGuild: v,
    createGuildCta: S,
    createGuildDescription: f,
    selectGuildCta: Z,
    title: x,
    description: j,
    isGuildSupported: I
  } = (0, g.K)(r), [O, _] = l.useState(), [k, y] = l.useState(false), E = async () => {
    y(true);
    let e = await new Promise(e => {
      o.Z.openCreateGuildModal({
        onSuccess: e
      })
    });
    await new Promise(t => {
      p.Z.addChangeListener(function i() {
        null != p.Z.getGuild(e) && (p.Z.removeChangeListener(i), t())
      })
    }), c.Z.open(e, G, true, C), null == i || i()
  };
  return (0, n.jsxs)(u.Y0X, {
    transitionState: t,
    "aria-labelledby": h,
    parentComponent: "GuildSettingsPickerModal",
    children: [(0, n.jsxs)(u.xBx, {
      className: m.modalHeader,
      separator: false,
      children: [(0, n.jsx)(u.X6q, {
        id: h,
        variant: "heading-lg/medium",
        children: x
      }), (0, n.jsx)(u.olH, {
        onClick: i
      })]
    }), (0, n.jsxs)(u.hzk, {
      className: m.modalContent,
      children: [(0, n.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/medium",
          children: j
        }), (0, n.jsxs)("div", {
          className: m.guildSelection,
          children: [(0, n.jsx)("div", {
            className: m.guildSelectorContainer,
            children: (0, n.jsx)(b, {
              guildId: O,
              onChange: _,
              isGuildIncluded: I
            })
          }), (0, n.jsx)(u.zxk, {
            variant: "primary",
            text: Z,
            onClick: () => {
              a()(null != O, "Guild ID must not be null on click"), c.Z.open(O, G, true, C), null == i || i()
            },
            disabled: null == O
          })]
        })]
      }), v && (0, n.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/medium",
          children: f
        }), (0, n.jsx)(s.zx, {
          onClick: E,
          submitting: k,
          className: m.createGuildButton,
          children: S
        })]
      })]
    })]
  })
}