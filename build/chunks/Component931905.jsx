/** Chunk was on 86513 **/
/** chunk id: 931905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => c,
  m: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk17894 = require("./17894.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989646 = require("./989646.js");
let c = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: r,
    subtitle: c,
    confirmCta: u,
    showOpenDiscord: d = true
  } = e;
  return (0, i.jsxs)("div", {
    className: s.confirmationContainer,
    children: [(0, i.jsx)(l.X6q, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: r
    }), null != c ? (0, i.jsx)(l.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: c
    }) : null, (0, i.jsxs)("div", {
      className: s.buttonContainer,
      children: [d && (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: o.intl.string(o.t["8L5bZG"]),
        fullWidth: true,
        onClick: () => (0, a.Z)("application_sub_mweb_success_modal")
      }), (0, i.jsx)(l.zxk, {
        variant: "secondary",
        text: u,
        fullWidth: true,
        onClick: t
      }), null != n && (0, i.jsx)(l.zxk, {
        variant: "secondary",
        text: o.intl.string(o.t.iAfxo6),
        fullWidth: true,
        onClick: n
      })]
    })]
  })
};

function u(e) {
  let {
    onConfirm: t,
    tierName: n,
    subscription: c
  } = e;
  return (0, i.jsxs)("div", {
    className: s.confirmationContainer,
    children: [(0, i.jsx)(l.X6q, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: o.intl.format(o.t["wLFT6+"], {
        tier: n
      })
    }), (0, i.jsx)(l.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o.intl.format(o.t.OsAK9v, {
        timestamp: null == c ? true : c.currentPeriodEnd
      })
    }), (0, i.jsxs)("div", {
      className: s.buttonContainer,
      children: [(0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: s.__invalid_openDiscordButton,
        children: (0, i.jsx)(l.zxk, {
          variant: "primary",
          text: o.intl.string(o.t["8L5bZG"]),
          onClick: () => (0, a.Z)("application_sub_mweb_success_modal")
        })
      }), (0, i.jsx)(r.zx, {
        className: s.__invalid_doneButton,
        look: r.zx.Looks.BLANK,
        onClick: t,
        children: o.intl.string(o.t.nlkyw8)
      })]
    })]
  })
}