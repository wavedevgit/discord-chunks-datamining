/** Chunk was on 46653 **/
/** chunk id: 470623, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  AF: () => y,
  oL: () => O,
  xH: () => b
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk131193 = require("./131193.js"),
  Chunk731965 = require("./731965.js"),
  Chunk430742 = require("./430742.js"),
  Chunk752305 = require("./752305.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk883429 = require("./883429.js"),
  Chunk228392 = require("./228392.js");

function m(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class f {
  constructor(t, e, i) {
    var n, r, s;
    m(this, "channelId", true), m(this, "_set", true), m(this, "get", true), m(this, "editorHeight", true), m(this, "editorAdditionRowHeight", true), m(this, "listViewCardHeights", true), m(this, "cardHeightVersion", true), m(this, "nameError", true), m(this, "messageError", true), m(this, "appliedTags", true), m(this, "popoutOpen", true), m(this, "guidelinesOpen", true), m(this, "previewing", true), m(this, "onboardingExpanded", true), m(this, "submitting", true), m(this, "formOpen", true), m(this, "name", true), m(this, "textAreaState", true), m(this, "hasClickedForm", true), m(this, "titleFocused", true), m(this, "bodyFocused", true), m(this, "set", true), m(this, "setEditorHeight", true), m(this, "setEditorAdditionRowHeight", true), m(this, "setCardHeight", true), m(this, "setNameError", true), m(this, "setMessageError", true), m(this, "toggleAppliedTag", true), m(this, "setPopoutOpen", true), m(this, "setGuidelinesOpen", true), m(this, "setPreviewing", true), m(this, "setSubmitting", true), m(this, "setFormOpen", true), m(this, "setOnboardingExpanded", true), m(this, "setTitleFocused", true), m(this, "setBodyFocused", true), m(this, "setName", true), m(this, "setTextAreaState", true), m(this, "setHasClickedForm", true), m(this, "resetFormState", true), m(this, "setFormOpenFromUserAction", true), this.channelId = t, this._set = e, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, c.eK)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = t => {
      (0, a.j)(() => this._set(t))
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
        cardHeightVersion: n
      } = this.get();
      i[t] !== e && (i[t] = e, this.set({
        cardHeightVersion: n + 1
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
      }), d.Z.changeThreadSettings(this.channelId, {
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
      }), p.Z.clearForumSearch(this.channelId)
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
      }), d.Z.changeThreadSettings(this.channelId, {
        name: t
      })
    }, this.setTextAreaState = t => {
      this.set({
        textAreaState: t
      }), d.Z.saveDraft(this.channelId, t.textValue, h.d.FirstThreadMessage)
    }, this.setHasClickedForm = t => {
      this.set({
        hasClickedForm: t
      })
    }, this.resetFormState = () => {
      let t = u.Z.getChannel(this.channelId),
        e = null == t || null == t.template ? "" : t.template.trim();
      this.set({
        name: "",
        textAreaState: (0, c.eK)(e),
        appliedTags: new Set,
        hasClickedForm: false
      }), p.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let t = u.Z.getChannel(this.channelId);
      null != t && (0, g.HR)({
        guildId: t.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), p.Z.clearForumSearch(this.channelId)
    };
    let o = u.Z.getChannel(t);
    if (null == o) return;
    let l = null != (n = h.Z.getThreadSettings(o.id)) ? n : {},
      f = null == o.template ? "" : o.template.trim(),
      v = h.Z.getDraft(o.id, h.d.FirstThreadMessage),
      O = (0, c.eK)(null != v && "" !== v.trim() ? v : f);
    this.name = null != (r = l.name) ? r : "", s = new Set(l.appliedTags), this.appliedTags = true !== s ? s : new Set, this.formOpen = this.name.length > 0 && O.textValue.length > 0, this.textAreaState = O
  }
}
let v = Chunk647438.createContext(null);

function O(t) {
  let {
    children: e,
    channel: i
  } = t, s = r.useMemo(() => (0, l.F)((t, e) => new f(i.id, t, e)), [i]);
  return (0, n.jsx)(v.Provider, {
    value: s,
    children: e
  })
}

function b(t, e) {
  let i = r.useContext(v);
  return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(t, e)
}

function y() {
  let t = Chunk647438.useContext(v);
  return o()(null != module, "[useForumPostComposerStore] Context should not be null"), module
}