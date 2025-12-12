/** Chunk was on web.js **/
/** chunk id: 4484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk998698 = require("./998698.js"),
  Chunk117530 = require("./117530.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk541716 = require("./541716.js"),
  Chunk91313 = require("./91313.js"),
  Chunk53529 = require("./53529.js"),
  Chunk288897 = require("./288897.jsx"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk77224 = require("./77224.js"),
  Chunk194625 = require("./194625.js"),
  Chunk135223 = require("./135223.js"),
  Chunk512729 = require("./512729.js"),
  Chunk77188 = require("./77188.js"),
  Chunk230554 = require("./230554.js"),
  Chunk780748 = require("./780748.js"),
  Chunk464581 = require("./464581.js"),
  Chunk732659 = require("./732659.js"),
  Chunk86724 = require("./86724.js"),
  Chunk847302 = require("./847302.js"),
  Chunk657198 = require("./657198.jsx"),
  Chunk321127 = require("./321127.jsx"),
  Chunk645174 = require("./645174.jsx"),
  Chunk120481 = require("./120481.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk867641 = require("./867641.js");
let k = Chunk473749.forwardRef(function(e, t) {
  let {
    value: n,
    type: o,
    channel: k,
    className: U,
    id: G,
    disabled: Z,
    submitting: F,
    placeholder: B,
    required: V,
    textAreaPaddingClassName: H,
    onChange: Y,
    onPaste: W,
    onResize: K,
    onFocus: z,
    onBlur: q,
    onKeyDown: Q,
    onKeyUp: X,
    onTab: J,
    onEnter: $,
    onSubmit: ee,
    onSubmitFailure: et,
    maybeShowAutocomplete: en,
    hideAutocomplete: er,
    moveSelection: ei,
    spellcheckEnabled: eo,
    canUseCommands: ea,
    canOnlyUseTextCommands: es,
    disableAutoFocus: el,
    disableEnterToSubmit: ec,
    allowNewLines: eu,
    isEditorIdle: ed,
    currentAutocompleteType: ef,
    "aria-owns": ep,
    "aria-expanded": e_,
    "aria-haspopup": em,
    "aria-activedescendant": eh,
    "aria-controls": eg,
    "aria-invalid": eE,
    "aria-describedby": eb,
    "aria-labelledby": ey,
    "aria-autocomplete": eO
  } = e, ev = i.useRef(null), eS = i.useRef(null), eI = i.useRef(true), eT = i.useRef(true), eC = Z || F, eA = i.useCallback((e, t, n) => {
    var r;
    let {
      value: i,
      selection: o
    } = n, a = b.bN.richValue(e), s = e.selection, l = false;
    if (true !== i && i !== a) {
      if (e.children = i, "parent" === t && !e.previewMarkdown && e.chatInputType === p.Ie.EDIT) {
        try {
          e.previewMarkdown = true, (0, R.KH)(e, k.guild_id, k.id)
        } finally {
          e.previewMarkdown = false
        }(0, R.KH)(e, k.guild_id, k.id), o = true
      }
      "undo" !== t && true !== i && i !== a && m.T.insertEntry(e, "other", false, a, s), l = true
    }
    if (null == o || b.Ew.isValid(e, o) || (o = true), (l || !b.Ew.isValid(e, s)) && true === o) {
      let t = b.bN.end(e, []);
      o = {
        anchor: t,
        focus: t
      }
    }
    let u = null != o && !b.Ew.equals(o, s);
    if (l && !el && b.bN.focus(e), null != o && u) {
      e.selection = o;
      let t = m.T.currentEntry(e);
      null != t && (t.selection = o), l = true
    }
    let d = _.cr(e);
    if (null != d && d[0].command.id !== (null == (r = c.Z.getActiveCommand(k.id)) ? true : r.id) && m.T.withMergedEntry(e, () => {
        (0, P.L)(e, k.id, null, true)
      }), l)
      if ("parent" === t) try {
        eT.current = false, e.onChange()
      } finally {
        eT.current = true
      } else e.onChange()
  }, [k.id, k.guild_id, el]), eN = i.useCallback(() => {
    eI.current = false
  }, []), eP = i.useCallback(() => {
    eI.current = true
  }, []), eR = (0, I.Z)({
    channel: k,
    chatInputType: o,
    canUseCommands: ea,
    canOnlyUseTextCommands: es,
    onChangeStart: eN,
    onChangeEnd: eP,
    updateState: eA
  }), ew = i.useCallback((e, t) => {
    let n = _.tM(eR, e, k.id),
      r = _.lk(e, k.guild_id, k.id, n, t);
    return {
      values: n,
      results: r
    }
  }, [k.guild_id, k.id, eR]), eD = i.useCallback(() => {
    let e, t = b.bN.getNodesOfType(eR, ["gameMentionInput", "timestampMentionInput"]),
      n = null != t ? [...t] : null,
      r = ea ? c.Z.getActiveCommand(k.id) : null,
      i = false;
    if (null != r && null != r.options) {
      let t = ew(r, false);
      e = t.values;
      let n = _.cu(eR).filter(e => !t.results[e].success).map(e => {
        var t;
        return (null != (t = r.options) ? t : []).find(t => t.name === e)
      });
      for (let e of r.options) !e.required || e.name in t.values || (E.Q.insertCommandOption(eR, e), n.push(e));
      if (n.length > 0) {
        var o, a;
        let e = n[0];
        E.Q.selectCommandOption(eR, e.name), i = true, (0, l.yw)(j.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
          application_id: null == r ? true : r.applicationId,
          command_id: null == r || null == (o = r.rootCommand) ? true : o.id,
          argument_type: s.jw[null != (a = null == e ? true : e.type) ? a : 3],
          is_required: null == e ? true : e.required
        })
      }
    }
    if (null != n)
      for (let [e, t] of n) E.Q.setNodes(eR, {
        error: true
      }, {
        at: t
      }), i || E.Q.select(eR, b.bN.end(eR, t)), i = true;
    if (i) {
      f.S.dispatch(j.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
      }), null == et || et();
      return
    }
    null == ee || ee((0, g.sk)(b.bN.richValue(eR), {
      mode: "raw",
      ignoreTrailingEmptyNodes: true
    }), r, e)
  }, [k.id, eR, ee, et, ew, ea]);
  (0, T.Z)(t, eR, k, eD), (0, N.Z)(eR, ev, K);
  let {
    handleKeyDown: ex,
    handleKeyUp: eL
  } = (0, C.Z)({
    editor: eR,
    channel: k,
    disableEnterToSubmit: ec,
    onKeyDown: Q,
    onKeyUp: X,
    onTab: J,
    onEnter: $,
    allowNewLines: eu,
    submit: eD,
    hideAutocomplete: er,
    moveSelection: ei
  }), {
    handlePaste: ej,
    handleGlobalPaste: eM
  } = (0, A.Z)(eR, eC, W), ek = i.useCallback(e => {
    null == en || en()
  }, [en]), eU = i.useCallback(e => {
    e !== eS.current ? eT.current && (null == Y || Y(null, (0, g.sk)(e, {
      mode: "raw"
    }), e)) : eT.current && en()
  }, [en, Y]);
  i.useLayoutEffect(() => {
    eI.current && (eS.current = n, eA(eR, "parent", {
      value: n
    }))
  }, [eR, n, eA]), i.useEffect(() => {
    let e = () => {
      var e;
      let t = null != (e = c.Z.getActiveCommand(k.id)) ? e : null;
      null !== t && null != t.options && ew(t, true)
    };
    return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e)
  }, [k, eR, ew]);
  let eG = i.useCallback(e => [...(0, v.Z)(eR, e, k.guild_id), ...(0, y.Z)(eR, e), ...(0, O.Z)(eR, e), ...(0, S.Z)(eR, e, k, {
      isIdle: ed,
      currentAutocompleteType: ef
    })], [eR, k, ed, ef]),
    eZ = i.useCallback(e => {
      let t = (0, w.Z)(eR, e, k.id);
      return null == t && (t = (0, x.Z)(eR, e)), null == t && (t = (0, L.Z)(eR, e)), t
    }, [k.id, eR]),
    eF = i.useCallback(e => (0, D.Z)(e), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.d9, {
      event: j.CkL.GLOBAL_CLIPBOARD_PASTE,
      handler: eM
    }), (0, r.jsx)("div", {
      ref: ev,
      className: a()(U, M.slateContainer),
      children: (0, r.jsx)(h.Z, {
        id: G,
        editor: eR,
        channelId: k.id,
        guildId: k.guild_id,
        className: a()(M.slateTextArea, H),
        placeholder: B,
        readOnly: eC,
        spellCheck: eo,
        autoFocus: !el,
        canFocus: !Z,
        onChange: eU,
        onFocus: z,
        onBlur: q,
        onClick: ek,
        onPaste: ej,
        onKeyDown: ex,
        onKeyUp: eL,
        decorate: eG,
        renderExtraElement: eZ,
        renderExtraLeaf: eF,
        "aria-owns": ep,
        "aria-haspopup": em,
        "aria-expanded": e_,
        "aria-activedescendant": eh,
        "aria-controls": eg,
        "aria-labelledby": ey,
        "aria-describedby": eb,
        "aria-invalid": eE,
        "aria-autocomplete": eO,
        "aria-required": V
      })
    })]
  })
})