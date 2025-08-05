/** Chunk was on 57932 **/
i.d(e, {
  AF: () => S,
  oL: () => v,
  xH: () => C
}), i(388685), i(781311);
var s = i(255367),
  a = i(73800),
  n = i(512722),
  o = i.n(n),
  r = i(362383),
  l = i(731965),
  d = i(430742),
  h = i(752305),
  u = i(592125),
  g = i(703558),
  c = i(883429),
  p = i(228392);

function b(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t
}
class m {
  constructor(t, e, i) {
    var s, a, n;
    b(this, "channelId", void 0), b(this, "_set", void 0), b(this, "get", void 0), b(this, "editorHeight", void 0), b(this, "editorAdditionRowHeight", void 0), b(this, "listViewCardHeights", void 0), b(this, "cardHeightVersion", void 0), b(this, "nameError", void 0), b(this, "messageError", void 0), b(this, "appliedTags", void 0), b(this, "popoutOpen", void 0), b(this, "guidelinesOpen", void 0), b(this, "previewing", void 0), b(this, "onboardingExpanded", void 0), b(this, "submitting", void 0), b(this, "formOpen", void 0), b(this, "name", void 0), b(this, "textAreaState", void 0), b(this, "hasClickedForm", void 0), b(this, "titleFocused", void 0), b(this, "bodyFocused", void 0), b(this, "set", void 0), b(this, "setEditorHeight", void 0), b(this, "setEditorAdditionRowHeight", void 0), b(this, "setCardHeight", void 0), b(this, "setNameError", void 0), b(this, "setMessageError", void 0), b(this, "toggleAppliedTag", void 0), b(this, "setPopoutOpen", void 0), b(this, "setGuidelinesOpen", void 0), b(this, "setPreviewing", void 0), b(this, "setSubmitting", void 0), b(this, "setFormOpen", void 0), b(this, "setOnboardingExpanded", void 0), b(this, "setTitleFocused", void 0), b(this, "setBodyFocused", void 0), b(this, "setName", void 0), b(this, "setTextAreaState", void 0), b(this, "setHasClickedForm", void 0), b(this, "resetFormState", void 0), b(this, "setFormOpenFromUserAction", void 0), this.channelId = t, this._set = e, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, h.eK)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.set = t => {
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
      }), c.Z.clearForumSearch(this.channelId)
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
      }), d.Z.saveDraft(this.channelId, t.textValue, g.d.FirstThreadMessage)
    }, this.setHasClickedForm = t => {
      this.set({
        hasClickedForm: t
      })
    }, this.resetFormState = () => {
      let t = u.Z.getChannel(this.channelId),
        e = null == t || null == t.template ? "" : t.template.trim();
      this.set({
        name: "",
        textAreaState: (0, h.eK)(e),
        appliedTags: new Set,
        hasClickedForm: !1
      }), c.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let t = u.Z.getChannel(this.channelId);
      null != t && (0, p.HR)({
        guildId: t.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: !0,
        formOpen: !0
      }), c.Z.clearForumSearch(this.channelId)
    };
    let o = u.Z.getChannel(t);
    if (null == o) return;
    let r = null != (s = g.Z.getThreadSettings(o.id)) ? s : {},
      m = null == o.template ? "" : o.template.trim(),
      f = g.Z.getDraft(o.id, g.d.FirstThreadMessage),
      v = (0, h.eK)(null != f && "" !== f.trim() ? f : m);
    this.name = null != (a = r.name) ? a : "", n = new Set(r.appliedTags), this.appliedTags = void 0 !== n ? n : new Set, this.formOpen = this.name.length > 0 && v.textValue.length > 0, this.textAreaState = v
  }
}
let f = a.createContext(null);

function v(t) {
  let {
    children: e,
    channel: i
  } = t, n = a.useMemo(() => (0, r.F)((t, e) => new m(i.id, t, e)), [i]);
  return (0, s.jsx)(f.Provider, {
    value: n,
    children: e
  })
}

function C(t, e) {
  let i = a.useContext(f);
  return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(t, e)
}

function S() {
  let t = a.useContext(f);
  return o()(null != t, "[useForumPostComposerStore] Context should not be null"), t
}