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
  Chunk152906 = require("./152906.js");
let o = "shop-assets-preview-instructions-modal",
  c = "shop-pfx-preview-instructions-modal",
  d = e => {
    let {
      transitionState: t,
      onClose: a
    } = e;
    return <r.Modal transitionState={t} title={"Upload Instructions"} actions={[{
        variant: "primary",
        text: "Okay",
        onClick: a
      }]} onClose={a}><div className={s.modalContent}>{<l.Text variant={"text-md/bold"}>{"Upload Shop assets for preview in the app!"}</l.Text>}{<l.Text variant={"text-md/normal"}>{'Toggle "Enable Preview" to switch between viewing the live and preview assets.'}</l.Text>}{<l.Text variant={"text-md/normal"}>{"These are only visible to you. Reloading the app will reset the state."}</l.Text>}{<l.X6q variant={"heading-md/bold"}>{"Valid Upload Types"}</l.X6q>}{<ul className={s.instructionsList}>{<li>{"One or more image or video files (jpg, png, webm)"}</li>}{<li>{"A folder containing image or video files"}</li>}</ul>}{<l.X6q variant={"heading-md/bold"}>{"Valid File Names"}</l.X6q>}{<ul className={s.instructionsList}>{Object.keys(i.Kj).map(e => (0, n.jsx)("li", {
            children: e
          }, e))}</ul>}</div></r.Modal>
  },
  u = e => {
    let {
      transitionState: t,
      onClose: a
    } = e;
    return <r.Modal transitionState={t} title={"PFX Preview Instructions"} actions={[{
        variant: "primary",
        text: "Okay",
        onClick: a
      }]} onClose={a}><div className={s.modalContent}>{<l.Text variant={"text-md/normal"}>{"1. Draft your PFX in the PFX Editor (in User Settings)"}</l.Text>}{<l.Text variant={"text-md/normal"}>{"2. In this devtools dropdown, select one of your PFX drafts"}</l.Text>}{<l.Text variant={"text-md/normal"}>{"The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied)."}</l.Text>}{<l.Text variant={"text-md/normal"}>{'Toggle "Enable Preview" to switch between viewing the live and preview PFX.'}</l.Text>}</div></r.Modal>
  }