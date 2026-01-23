/** Chunk was on 65599 **/
/** chunk id: 600239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ShopAssetsPreviewInstructionModal: () => d,
  ShopPFXPreviewInstructionModal: () => u,
  g: () => c,
  k: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk559474 = require("./559474.js"),
  Chunk273351 = require("./273351.js");
let o = "shop-assets-preview-instructions-modal",
  c = "shop-pfx-preview-instructions-modal",
  d = e => {
    let {
      transitionState: t,
      onClose: n
    } = e;
    return (0, a.jsx)(l.Modal, {
      transitionState: t,
      title: "Upload Instructions",
      actions: [{
        variant: "primary",
        text: "Okay",
        onClick: n
      }],
      onClose: n,
      children: (0, a.jsxs)("div", {
        className: s.j,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/bold",
          children: "Upload Shop assets for preview in the app!"
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.'
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "These are only visible to you. Reloading the app will reset the state."
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/bold",
          children: "Valid Upload Types"
        }), (0, a.jsxs)("ul", {
          className: s.S,
          children: [(0, a.jsx)("li", {
            children: "One or more image or video files (jpg, png, webm)"
          }), (0, a.jsx)("li", {
            children: "A folder containing image or video files"
          })]
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/bold",
          children: "Valid File Names"
        }), (0, a.jsx)("ul", {
          className: s.S,
          children: Array.from(i.Li).map(e => (0, a.jsx)("li", {
            children: e
          }, e))
        })]
      })
    })
  },
  u = e => {
    let {
      transitionState: t,
      onClose: n
    } = e;
    return (0, a.jsx)(l.Modal, {
      transitionState: t,
      title: "PFX Preview Instructions",
      actions: [{
        variant: "primary",
        text: "Okay",
        onClick: n
      }],
      onClose: n,
      children: (0, a.jsxs)("div", {
        className: s.j,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "1. Draft your PFX in the PFX Editor (in User Settings)"
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "2. In this devtools dropdown, select one of your PFX drafts"
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied)."
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.'
        })]
      })
    })
  }