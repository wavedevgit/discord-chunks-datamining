/** Chunk was on 50243 **/
/** chunk id: 594508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => c,
  v: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk701273 = require("./701273.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690990 = require("./690990.js");
let c = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: c,
    subtitle: u,
    confirmCta: d,
    showOpenDiscord: p = true
  } = e;
  return (0, r.jsxs)("div", {
    className: o.RP,
    children: [(0, r.jsx)(l.Heading, {
      className: o.RS,
      variant: "heading-lg/extrabold",
      children: c
    }), null != u ? (0, r.jsx)(l.Text, {
      className: o.sT,
      variant: "text-sm/normal",
      color: "text-default",
      children: u
    }) : null, (0, r.jsxs)("div", {
      className: o.UD,
      children: [p && (0, r.jsx)(i.$nd, {
        variant: "primary",
        text: s.intl.string(s.t["8L5bZG"]),
        fullWidth: true,
        onClick: () => (0, a.A)("application_sub_mweb_success_modal")
      }), (0, r.jsx)(i.$nd, {
        variant: "secondary",
        text: d,
        fullWidth: true,
        onClick: t
      }), null != n && (0, r.jsx)(i.$nd, {
        variant: "secondary",
        text: s.intl.string(s.t.iAfxo3),
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
  return (0, r.jsxs)("div", {
    className: o.RP,
    children: [(0, r.jsx)(l.Heading, {
      className: o.RS,
      variant: "heading-lg/extrabold",
      children: s.intl.format(s.t.wLFT6z, {
        tier: n
      })
    }), (0, r.jsx)(l.Text, {
      className: o.sT,
      variant: "text-sm/normal",
      color: "text-default",
      children: s.intl.format(s.t.OsAK9h, {
        timestamp: null == c ? true : c.currentPeriodEnd
      })
    }), (0, r.jsxs)("div", {
      className: o.UD,
      children: [(0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.__invalid_openDiscordButton,
        children: (0, r.jsx)(i.$nd, {
          variant: "primary",
          text: s.intl.string(s.t["8L5bZG"]),
          onClick: () => (0, a.A)("application_sub_mweb_success_modal")
        })
      }), (0, r.jsx)(i.$nd, {
        variant: "secondary",
        text: s.intl.string(s.t.nlkywz),
        onClick: t
      })]
    })]
  })
}