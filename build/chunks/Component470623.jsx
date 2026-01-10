/** Chunk was on 87646 **/
/** chunk id: 470623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AF: () => O,
  oL: () => b,
  xH: () => x
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk430742 = require("./430742.js"),
  Chunk752305 = require("./752305.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk883429 = require("./883429.js"),
  Chunk228392 = require("./228392.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p {
  constructor(e, t, n) {
    var i, s, r;
    f(this, "channelId", true), f(this, "_set", true), f(this, "get", true), f(this, "editorHeight", true), f(this, "editorAdditionRowHeight", true), f(this, "listViewCardHeights", true), f(this, "cardHeightVersion", true), f(this, "nameError", true), f(this, "messageError", true), f(this, "appliedTags", true), f(this, "popoutOpen", true), f(this, "guidelinesOpen", true), f(this, "previewing", true), f(this, "onboardingExpanded", true), f(this, "submitting", true), f(this, "formOpen", true), f(this, "name", true), f(this, "textAreaState", true), f(this, "hasClickedForm", true), f(this, "titleFocused", true), f(this, "bodyFocused", true), f(this, "set", true), f(this, "setEditorHeight", true), f(this, "setEditorAdditionRowHeight", true), f(this, "setCardHeight", true), f(this, "setNameError", true), f(this, "setMessageError", true), f(this, "toggleAppliedTag", true), f(this, "setPopoutOpen", true), f(this, "setGuidelinesOpen", true), f(this, "setPreviewing", true), f(this, "setSubmitting", true), f(this, "setFormOpen", true), f(this, "setOnboardingExpanded", true), f(this, "setTitleFocused", true), f(this, "setBodyFocused", true), f(this, "setName", true), f(this, "setTextAreaState", true), f(this, "setHasClickedForm", true), f(this, "resetFormState", true), f(this, "setFormOpenFromUserAction", true), this.channelId = e, this._set = t, this.get = n, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, u.eK)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = e => {
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
        cardHeightVersion: i
      } = this.get();
      n[e] !== t && (n[e] = t, this.set({
        cardHeightVersion: i + 1
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
      }), c.Z.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), c.Z.saveDraft(this.channelId, e.textValue, h.d.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = d.Z.getChannel(this.channelId),
        t = null == e || null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, u.eK)(t),
        appliedTags: new Set,
        hasClickedForm: false
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = d.Z.getChannel(this.channelId);
      null != e && (0, m.HR)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), g.Z.clearForumSearch(this.channelId)
    };
    let l = d.Z.getChannel(e);
    if (null == l) return;
    let a = null != (i = h.Z.getThreadSettings(l.id)) ? i : {},
      p = null == l.template ? "" : l.template.trim(),
      v = h.Z.getDraft(l.id, h.d.FirstThreadMessage),
      b = (0, u.eK)(null != v && "" !== v.trim() ? v : p);
    this.name = null != (s = a.name) ? s : "", r = new Set(a.appliedTags), this.appliedTags = true !== r ? r : new Set, this.textAreaState = b, this.formOpen = b.textValue !== p
  }
}
let v = Chunk473749.createContext(null);

function b(e) {
  let {
    children: t,
    channel: n
  } = e, r = s.useMemo(() => (0, a.F)((e, t) => new p(n.id, e, t)), [n]);
  return (0, i.jsx)(v.Provider, {
    value: r,
    children: t
  })
}

function x(e, t) {
  let n = s.useContext(v);
  return l()(null != n, "[useForumPostComposerStore] Context should not be null"), n(e, t)
}

function O() {
  let e = s.useContext(v);
  return l()(null != e, "[useForumPostComposerStore] Context should not be null"), e
}