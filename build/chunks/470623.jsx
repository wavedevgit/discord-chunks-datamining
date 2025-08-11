/** Chunk was on 85664 **/
/** chunk id: 470623, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  AF: () => S,
  oL: () => v,
  xH: () => C
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk362383 = require("./362383.js"),
  Chunk731965 = require("./731965.js"),
  Chunk430742 = require("./430742.js"),
  Chunk752305 = require("./752305.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk883429 = require("./883429.js"),
  Chunk228392 = require("./228392.js");

function f(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class m {
  constructor(t, e, i) {
    var s, n, a;
    f(this, "channelId", true), f(this, "_set", true), f(this, "get", true), f(this, "editorHeight", true), f(this, "editorAdditionRowHeight", true), f(this, "listViewCardHeights", true), f(this, "cardHeightVersion", true), f(this, "nameError", true), f(this, "messageError", true), f(this, "appliedTags", true), f(this, "popoutOpen", true), f(this, "guidelinesOpen", true), f(this, "previewing", true), f(this, "onboardingExpanded", true), f(this, "submitting", true), f(this, "formOpen", true), f(this, "name", true), f(this, "textAreaState", true), f(this, "hasClickedForm", true), f(this, "titleFocused", true), f(this, "bodyFocused", true), f(this, "set", true), f(this, "setEditorHeight", true), f(this, "setEditorAdditionRowHeight", true), f(this, "setCardHeight", true), f(this, "setNameError", true), f(this, "setMessageError", true), f(this, "toggleAppliedTag", true), f(this, "setPopoutOpen", true), f(this, "setGuidelinesOpen", true), f(this, "setPreviewing", true), f(this, "setSubmitting", true), f(this, "setFormOpen", true), f(this, "setOnboardingExpanded", true), f(this, "setTitleFocused", true), f(this, "setBodyFocused", true), f(this, "setName", true), f(this, "setTextAreaState", true), f(this, "setHasClickedForm", true), f(this, "resetFormState", true), f(this, "setFormOpenFromUserAction", true), this.channelId = t, this._set = e, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, d.eK)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = t => {
      (0, l.j)(() => this._set(t))
    }, this.setEditorHeight = t => {
      this.set({
        editorHeight: t
      })
    }, this.setEditorAdditionRowHeight = t => {
      this.set({
        editorAdditionRowHeight: t
      })
    }, this.setCardHeight = (t, e) => {
      let {
        listViewCardHeights: i,
        cardHeightVersion: s
      } = this.get();
      i[t] !== e && (i[t] = e, this.set({
        cardHeightVersion: s + 1
      }))
    }, this.setNameError = t => {
      this.set({
        nameError: t
      })
    }, this.setMessageError = t => {
      this.set({
        messageError: t
      })
    }, this.toggleAppliedTag = t => {
      let {
        appliedTags: e
      } = this.get();
      (e = new Set(e)).has(t) ? e.delete(t) : e.add(t), this.set({
        appliedTags: e
      }), h.Z.changeThreadSettings(this.channelId, {
        appliedTags: e
      })
    }, this.setPopoutOpen = t => {
      this.set({
        popoutOpen: t
      })
    }, this.setGuidelinesOpen = t => {
      this.set({
        guidelinesOpen: t
      })
    }, this.setPreviewing = t => {
      this.set({
        previewing: t
      })
    }, this.setSubmitting = t => {
      this.set({
        submitting: t
      })
    }, this.setFormOpen = t => {
      this.set({
        formOpen: t
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setOnboardingExpanded = t => {
      this.set({
        onboardingExpanded: t
      })
    }, this.setTitleFocused = t => {
      this.set({
        titleFocused: t
      })
    }, this.setBodyFocused = t => {
      this.set({
        bodyFocused: t
      })
    }, this.setName = t => {
      this.set({
        name: t
      }), h.Z.changeThreadSettings(this.channelId, {
        name: t
      })
    }, this.setTextAreaState = t => {
      this.set({
        textAreaState: t
      }), h.Z.saveDraft(this.channelId, t.textValue, c.d.FirstThreadMessage)
    }, this.setHasClickedForm = t => {
      this.set({
        hasClickedForm: t
      })
    }, this.resetFormState = () => {
      let t = u.Z.getChannel(this.channelId),
        e = null == t || null == t.template ? "" : t.template.trim();
      this.set({
        name: "",
        textAreaState: (0, d.eK)(e),
        appliedTags: new Set,
        hasClickedForm: false
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let t = u.Z.getChannel(this.channelId);
      null != t && (0, p.HR)({
        guildId: t.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), g.Z.clearForumSearch(this.channelId)
    };
    let o = u.Z.getChannel(t);
    if (null == o) return;
    let r = null != (s = c.Z.getThreadSettings(o.id)) ? s : {},
      m = null == o.template ? "" : o.template.trim(),
      b = c.Z.getDraft(o.id, c.d.FirstThreadMessage),
      v = (0, d.eK)(null != b && "" !== b.trim() ? b : m);
    this.name = null != (n = r.name) ? n : "", a = new Set(r.appliedTags), this.appliedTags = true !== a ? a : new Set, this.formOpen = this.name.length > 0 && v.textValue.length > 0, this.textAreaState = v
  }
}
let b = Chunk73800.createContext(null);

function v(t) {
  let {
    children: e,
    channel: i
  } = t, a = n.useMemo(() => (0, r.F)((t, e) => new m(i.id, t, e)), [i]);
  return <b.Provider value={a}>{e}</b.Provider>
}

function C(t, e) {
  let i = n.useContext(b);
  return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(t, e)
}

function S() {
  let t = Chunk73800.useContext(b);
  return o()(null != module, "[useForumPostComposerStore] Context should not be null"), module
}