/** Chunk was on 48890 **/
/** chunk id: 470623, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  AF: () => y,
  oL: () => v,
  xH: () => _
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk51835 = require("./51835.js"),
  Chunk731965 = require("./731965.js"),
  Chunk430742 = require("./430742.js"),
  Chunk752305 = require("./752305.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk883429 = require("./883429.js"),
  Chunk228392 = require("./228392.js");

function b(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
class f {
  constructor(e, t, i) {
    var n, s, a;
    b(this, "channelId", true), b(this, "_set", true), b(this, "get", true), b(this, "editorHeight", true), b(this, "editorAdditionRowHeight", true), b(this, "listViewCardHeights", true), b(this, "cardHeightVersion", true), b(this, "nameError", true), b(this, "messageError", true), b(this, "appliedTags", true), b(this, "popoutOpen", true), b(this, "guidelinesOpen", true), b(this, "previewing", true), b(this, "onboardingExpanded", true), b(this, "submitting", true), b(this, "formOpen", true), b(this, "name", true), b(this, "textAreaState", true), b(this, "hasClickedForm", true), b(this, "titleFocused", true), b(this, "bodyFocused", true), b(this, "set", true), b(this, "setEditorHeight", true), b(this, "setEditorAdditionRowHeight", true), b(this, "setCardHeight", true), b(this, "setNameError", true), b(this, "setMessageError", true), b(this, "toggleAppliedTag", true), b(this, "setPopoutOpen", true), b(this, "setGuidelinesOpen", true), b(this, "setPreviewing", true), b(this, "setSubmitting", true), b(this, "setFormOpen", true), b(this, "setOnboardingExpanded", true), b(this, "setTitleFocused", true), b(this, "setBodyFocused", true), b(this, "setName", true), b(this, "setTextAreaState", true), b(this, "setHasClickedForm", true), b(this, "resetFormState", true), b(this, "setFormOpenFromUserAction", true), this.channelId = e, this._set = t, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, h.eK)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = e => {
      (0, r.j)(() => this._set(e))
    }, this.setEditorHeight = e => {
      this.set({
        editorHeight: e
      })
    }, this.setEditorAdditionRowHeight = e => {
      this.set({
        editorAdditionRowHeight: e
      })
    }, this.setCardHeight = (e, t) => {
      let {
        listViewCardHeights: i,
        cardHeightVersion: n
      } = this.get();
      i[e] !== t && (i[e] = t, this.set({
        cardHeightVersion: n + 1
      }))
    }, this.setNameError = e => {
      this.set({
        nameError: e
      })
    }, this.setMessageError = e => {
      this.set({
        messageError: e
      })
    }, this.toggleAppliedTag = e => {
      let {
        appliedTags: t
      } = this.get();
      (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
        appliedTags: t
      }), d.Z.changeThreadSettings(this.channelId, {
        appliedTags: t
      })
    }, this.setPopoutOpen = e => {
      this.set({
        popoutOpen: e
      })
    }, this.setGuidelinesOpen = e => {
      this.set({
        guidelinesOpen: e
      })
    }, this.setPreviewing = e => {
      this.set({
        previewing: e
      })
    }, this.setSubmitting = e => {
      this.set({
        submitting: e
      })
    }, this.setFormOpen = e => {
      this.set({
        formOpen: e
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setOnboardingExpanded = e => {
      this.set({
        onboardingExpanded: e
      })
    }, this.setTitleFocused = e => {
      this.set({
        titleFocused: e
      })
    }, this.setBodyFocused = e => {
      this.set({
        bodyFocused: e
      })
    }, this.setName = e => {
      this.set({
        name: e
      }), d.Z.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), d.Z.saveDraft(this.channelId, e.textValue, u.d.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = c.Z.getChannel(this.channelId),
        t = null == e || null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, h.eK)(t),
        appliedTags: new Set,
        hasClickedForm: false
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = c.Z.getChannel(this.channelId);
      null != e && (0, p.HR)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), g.Z.clearForumSearch(this.channelId)
    };
    let o = c.Z.getChannel(e);
    if (null == o) return;
    let l = null != (n = u.Z.getThreadSettings(o.id)) ? n : {},
      f = null == o.template ? "" : o.template.trim(),
      m = u.Z.getDraft(o.id, u.d.FirstThreadMessage),
      v = (0, h.eK)(null != m && "" !== m.trim() ? m : f);
    this.name = null != (s = l.name) ? s : "", a = new Set(l.appliedTags), this.appliedTags = true !== a ? a : new Set, this.formOpen = this.name.length > 0 && v.textValue.length > 0, this.textAreaState = v
  }
}
let m = Chunk647438.createContext(null);

function v(e) {
  let {
    children: t,
    channel: i
  } = e, a = s.useMemo(() => (0, l.F)((e, t) => new f(i.id, e, t)), [i]);
  return (0, n.jsx)(m.Provider, {
    value: a,
    children: t
  })
}

function _(e, t) {
  let i = s.useContext(m);
  return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(e, t)
}

function y() {
  let e = Chunk647438.useContext(m);
  return o()(null != module, "[useForumPostComposerStore] Context should not be null"), module
}