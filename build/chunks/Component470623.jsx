/** Chunk was on 46653 **/
/** chunk id: 470623, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  AF: () => S,
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

function m(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
class f {
  constructor(e, t, i) {
    var n, r, s;
    m(this, "channelId", true), m(this, "_set", true), m(this, "get", true), m(this, "editorHeight", true), m(this, "editorAdditionRowHeight", true), m(this, "listViewCardHeights", true), m(this, "cardHeightVersion", true), m(this, "nameError", true), m(this, "messageError", true), m(this, "appliedTags", true), m(this, "popoutOpen", true), m(this, "guidelinesOpen", true), m(this, "previewing", true), m(this, "onboardingExpanded", true), m(this, "submitting", true), m(this, "formOpen", true), m(this, "name", true), m(this, "textAreaState", true), m(this, "hasClickedForm", true), m(this, "titleFocused", true), m(this, "bodyFocused", true), m(this, "set", true), m(this, "setEditorHeight", true), m(this, "setEditorAdditionRowHeight", true), m(this, "setCardHeight", true), m(this, "setNameError", true), m(this, "setMessageError", true), m(this, "toggleAppliedTag", true), m(this, "setPopoutOpen", true), m(this, "setGuidelinesOpen", true), m(this, "setPreviewing", true), m(this, "setSubmitting", true), m(this, "setFormOpen", true), m(this, "setOnboardingExpanded", true), m(this, "setTitleFocused", true), m(this, "setBodyFocused", true), m(this, "setName", true), m(this, "setTextAreaState", true), m(this, "setHasClickedForm", true), m(this, "resetFormState", true), m(this, "setFormOpenFromUserAction", true), this.channelId = e, this._set = t, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, c.eK)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = e => {
      (0, a.j)(() => this._set(e))
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
      }), p.Z.clearForumSearch(this.channelId)
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
      }), d.Z.saveDraft(this.channelId, e.textValue, h.d.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = u.Z.getChannel(this.channelId),
        t = null == e || null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, c.eK)(t),
        appliedTags: new Set,
        hasClickedForm: false
      }), p.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = u.Z.getChannel(this.channelId);
      null != e && (0, g.HR)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), p.Z.clearForumSearch(this.channelId)
    };
    let o = u.Z.getChannel(e);
    if (null == o) return;
    let l = null != (n = h.Z.getThreadSettings(o.id)) ? n : {},
      f = null == o.template ? "" : o.template.trim(),
      v = h.Z.getDraft(o.id, h.d.FirstThreadMessage),
      O = (0, c.eK)(null != v && "" !== v.trim() ? v : f);
    this.name = null != (r = l.name) ? r : "", s = new Set(l.appliedTags), this.appliedTags = true !== s ? s : new Set, this.formOpen = this.name.length > 0 && O.textValue.length > 0, this.textAreaState = O
  }
}
let v = Chunk647438.createContext(null);

function O(e) {
  let {
    children: t,
    channel: i
  } = e, s = r.useMemo(() => (0, l.F)((e, t) => new f(i.id, e, t)), [i]);
  return (0, n.jsx)(v.Provider, {
    value: s,
    children: t
  })
}

function b(e, t) {
  let i = r.useContext(v);
  return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(e, t)
}

function S() {
  let e = Chunk647438.useContext(v);
  return o()(null != module, "[useForumPostComposerStore] Context should not be null"), module
}