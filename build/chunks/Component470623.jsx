/** Chunk was on 63962 **/
/** chunk id: 470623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AF: () => O,
  oL: () => _,
  xH: () => y
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk430742 = require("./430742.js"),
  Chunk752305 = require("./752305.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk883429 = require("./883429.js"),
  Chunk228392 = require("./228392.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m {
  constructor(e, t, n) {
    var r, i, l;
    g(this, "channelId", true), g(this, "_set", true), g(this, "get", true), g(this, "editorHeight", true), g(this, "editorAdditionRowHeight", true), g(this, "listViewCardHeights", true), g(this, "cardHeightVersion", true), g(this, "nameError", true), g(this, "messageError", true), g(this, "appliedTags", true), g(this, "popoutOpen", true), g(this, "guidelinesOpen", true), g(this, "previewing", true), g(this, "onboardingExpanded", true), g(this, "submitting", true), g(this, "formOpen", true), g(this, "name", true), g(this, "textAreaState", true), g(this, "hasClickedForm", true), g(this, "titleFocused", true), g(this, "bodyFocused", true), g(this, "set", true), g(this, "setEditorHeight", true), g(this, "setEditorAdditionRowHeight", true), g(this, "setCardHeight", true), g(this, "setNameError", true), g(this, "setMessageError", true), g(this, "toggleAppliedTag", true), g(this, "setPopoutOpen", true), g(this, "setGuidelinesOpen", true), g(this, "setPreviewing", true), g(this, "setSubmitting", true), g(this, "setFormOpen", true), g(this, "setOnboardingExpanded", true), g(this, "setTitleFocused", true), g(this, "setBodyFocused", true), g(this, "setName", true), g(this, "setTextAreaState", true), g(this, "setHasClickedForm", true), g(this, "resetFormState", true), g(this, "setFormOpenFromUserAction", true), this.channelId = e, this._set = t, this.get = n, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, d.eK)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = e => {
      (0, o.j)(() => this._set(e))
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
        listViewCardHeights: n,
        cardHeightVersion: r
      } = this.get();
      n[e] !== t && (n[e] = t, this.set({
        cardHeightVersion: r + 1
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
      }), c.Z.changeThreadSettings(this.channelId, {
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
      }), h.Z.clearForumSearch(this.channelId)
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
      }), c.Z.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), c.Z.saveDraft(this.channelId, e.textValue, p.d.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = u.Z.getChannel(this.channelId),
        t = null == e || null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, d.eK)(t),
        appliedTags: new Set,
        hasClickedForm: false
      }), h.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = u.Z.getChannel(this.channelId);
      null != e && (0, f.HR)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), h.Z.clearForumSearch(this.channelId)
    };
    let a = u.Z.getChannel(e);
    if (null == a) return;
    let s = null != (r = p.Z.getThreadSettings(a.id)) ? r : {},
      m = null == a.template ? "" : a.template.trim(),
      b = p.Z.getDraft(a.id, p.d.FirstThreadMessage),
      _ = (0, d.eK)(null != b && "" !== b.trim() ? b : m);
    this.name = null != (i = s.name) ? i : "", l = new Set(s.appliedTags), this.appliedTags = true !== l ? l : new Set, this.formOpen = this.name.length > 0 && _.textValue.length > 0, this.textAreaState = _
  }
}
let b = Chunk473749.createContext(null);

function _(e) {
  let {
    children: t,
    channel: n
  } = e, l = i.useMemo(() => (0, s.F)((e, t) => new m(n.id, e, t)), [n]);
  return (0, r.jsx)(b.Provider, {
    value: l,
    children: t
  })
}

function y(e, t) {
  let n = i.useContext(b);
  return a()(null != n, "[useForumPostComposerStore] Context should not be null"), n(e, t)
}

function O() {
  let e = Chunk473749.useContext(b);
  return a()(null != module, "[useForumPostComposerStore] Context should not be null"), module
}