/** Chunk was on 86513 **/
/** chunk id: 931905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => c,
  m: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk17894 = require("./17894.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989646 = require("./989646.js");
let c = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: c,
    subtitle: u,
    confirmCta: d,
    showOpenDiscord: m = true
  } = e;
  return (0, i.jsxs)("div", {
    className: s.confirmationContainer,
    children: [(0, i.jsx)(l.Heading, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: c
    }), null != u ? (0, i.jsx)(l.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "text-default",
      children: u
    }) : null, (0, i.jsxs)("div", {
      className: s.buttonContainer,
      children: [m && (0, i.jsx)(r.zxk, {
        variant: "primary",
        text: o.intl.string(o.t["8L5bZG"]),
        fullWidth: true,
        onClick: () => (0, a.Z)("application_sub_mweb_success_modal")
      }), (0, i.jsx)(r.zxk, {
        variant: "secondary",
        text: d,
        fullWidth: true,
        onClick: t
      }), null != n && (0, i.jsx)(r.zxk, {
        variant: "secondary",
        text: o.intl.string(o.t.iAfxo3),
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
    children: [(0, i.jsx)(l.Heading, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: o.intl.format(o.t.wLFT6z, {
        tier: n
      })
    }), (0, i.jsx)(l.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "text-default",
      children: o.intl.format(o.t.OsAK9h, {
        timestamp: null == c ? true : c.currentPeriodEnd
      })
    }), (0, i.jsxs)("div", {
      className: s.buttonContainer,
      children: [(0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: s.__invalid_openDiscordButton,
        children: (0, i.jsx)(r.zxk, {
          variant: "primary",
          text: o.intl.string(o.t["8L5bZG"]),
          onClick: () => (0, a.Z)("application_sub_mweb_success_modal")
        })
      }), (0, i.jsx)(r.zxk, {
        variant: "secondary",
        text: o.intl.string(o.t.nlkywz),
        onClick: t
      })]
    })]
  })
}