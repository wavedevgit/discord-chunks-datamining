/** Chunk was on 93886 **/
/** chunk id: 637443, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  ShopAssetsPreviewInstructionModal: () => d,
  ShopPFXPreviewInstructionModal: () => u,
  c: () => c,
  g: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk281598 = require("./281598.js"),
  Chunk117910 = require("./117910.js");
let o = "shop-assets-preview-instructions-modal",
  c = "shop-pfx-preview-instructions-modal",
  d = e => {
    let {
      transitionState: t,
      onClose: a
    } = e;
    return (0, n.jsx)(r.Modal, {
      transitionState: t,
      title: "Upload Instructions",
      actions: [{
        variant: "primary",
        text: "Okay",
        onClick: a
      }],
      onClose: a,
      children: (0, n.jsxs)("div", {
        className: s.modalContent,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/bold",
          children: "Upload Shop assets for preview in the app!"
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.'
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: "These are only visible to you. Reloading the app will reset the state."
        }), (0, n.jsx)(l.X6q, {
          variant: "heading-md/bold",
          children: "Valid Upload Types"
        }), (0, n.jsxs)("ul", {
          className: s.instructionsList,
          children: [(0, n.jsx)("li", {
            children: "One or more image or video files (jpg, png, webm)"
          }), (0, n.jsx)("li", {
            children: "A folder containing image or video files"
          })]
        }), (0, n.jsx)(l.X6q, {
          variant: "heading-md/bold",
          children: "Valid File Names"
        }), (0, n.jsx)("ul", {
          className: s.instructionsList,
          children: Object.keys(i.Kj).map(e => (0, n.jsx)("li", {
            children: e
          }, e))
        })]
      })
    })
  },
  u = e => {
    let {
      transitionState: t,
      onClose: a
    } = e;
    return (0, n.jsx)(r.Modal, {
      transitionState: t,
      title: "PFX Preview Instructions",
      actions: [{
        variant: "primary",
        text: "Okay",
        onClick: a
      }],
      onClose: a,
      children: (0, n.jsxs)("div", {
        className: s.modalContent,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: "1. Draft your PFX in the PFX Editor (in User Settings)"
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: "2. In this devtools dropdown, select one of your PFX drafts"
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: "The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied)."
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.'
        })]
      })
    })
  }