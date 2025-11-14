/** Chunk was on web.js **/
/** chunk id: 4484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
let j = Chunk647438.forwardRef(function(e, t) {
  let {
    value: n,
    type: a,
    channel: j,
    className: U,
    id: G,
    disabled: B,
    submitting: Z,
    placeholder: F,
    required: V,
    textAreaPaddingClassName: H,
    onChange: Y,
    onPaste: W,
    onResize: K,
    onFocus: z,
    onBlur: q,
    onKeyDown: X,
    onKeyUp: Q,
    onTab: J,
    onEnter: $,
    onSubmit: ee,
    maybeShowAutocomplete: et,
    hideAutocomplete: en,
    moveSelection: er,
    spellcheckEnabled: ei,
    canUseCommands: ea,
    canOnlyUseTextCommands: eo,
    disableAutoFocus: es,
    disableEnterToSubmit: el,
    allowNewLines: ec,
    isEditorIdle: eu,
    currentAutocompleteType: ed,
    "aria-owns": ef,
    "aria-expanded": e_,
    "aria-haspopup": ep,
    "aria-activedescendant": eh,
    "aria-controls": em,
    "aria-invalid": eg,
    "aria-describedby": eE,
    "aria-labelledby": eb,
    "aria-autocomplete": ey
  } = e, eO = i.useRef(null), ev = i.useRef(null), eI = i.useRef(true), eT = i.useRef(true), eS = B || Z, eA = i.useCallback((e, t, n) => {
    var r;
    let {
      value: i,
      selection: a
    } = n, o = b.bN.richValue(e), s = e.selection, l = false;
    if (true !== i && i !== o) {
      if (e.children = i, "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT) {
        try {
          e.previewMarkdown = true, (0, P.KH)(e, j.guild_id, j.id)
        } finally {
          e.previewMarkdown = false
        }(0, P.KH)(e, j.guild_id, j.id), a = true
      }
      "undo" !== t && true !== i && i !== o && h.T.insertEntry(e, "other", false, o, s), l = true
    }
    if (null == a || b.Ew.isValid(e, a) || (a = true), (l || !b.Ew.isValid(e, s)) && true === a) {
      let t = b.bN.end(e, []);
      a = {
        anchor: t,
        focus: t
      }
    }
    let u = null != a && !b.Ew.equals(a, s);
    if (l && !es && b.bN.focus(e), null != a && u) {
      e.selection = a;
      let t = h.T.currentEntry(e);
      null != t && (t.selection = a), l = true
    }
    let d = p.cr(e);
    if (null != d && d[0].command.id !== (null == (r = c.Z.getActiveCommand(j.id)) ? true : r.id) && h.T.withMergedEntry(e, () => {
        (0, R.L)(e, j.id, null, true)
      }), l)
      if ("parent" === t) try {
        eT.current = false, e.onChange()
      } finally {
        eT.current = true
      } else e.onChange()
  }, [j.id, j.guild_id, es]), eC = i.useCallback(() => {
    eI.current = false
  }, []), eN = i.useCallback(() => {
    eI.current = true
  }, []), eR = (0, T.Z)({
    channel: j,
    chatInputType: a,
    canUseCommands: ea,
    canOnlyUseTextCommands: eo,
    onChangeStart: eC,
    onChangeEnd: eN,
    updateState: eA
  }), eP = i.useCallback((e, t) => {
    let n = p.tM(eR, e, j.id),
      r = p.lk(e, j.guild_id, j.id, n, t);
    return {
      values: n,
      results: r
    }
  }, [j.guild_id, j.id, eR]), eD = i.useCallback(() => {
    let e, t = b.bN.getNodesOfType(eR, ["gameMentionInput", "timestampMentionInput"]),
      n = null != t ? [...t] : null,
      r = ea ? c.Z.getActiveCommand(j.id) : null,
      i = false;
    if (null != r && null != r.options) {
      let t = eP(r, false);
      e = t.values;
      let n = p.cu(eR).filter(e => !t.results[e].success).map(e => {
        var t;
        return (null != (t = r.options) ? t : []).find(t => t.name === e)
      });
      for (let e of r.options) !e.required || e.name in t.values || (E.Q.insertCommandOption(eR, e), n.push(e));
      if (n.length > 0) {
        var a, o;
        let e = n[0];
        E.Q.selectCommandOption(eR, e.name), i = true, (0, l.yw)(M.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
          application_id: null == r ? true : r.applicationId,
          command_id: null == r || null == (a = r.rootCommand) ? true : a.id,
          argument_type: s.jw[null != (o = null == e ? true : e.type) ? o : 3],
          is_required: null == e ? true : e.required
        })
      }
    }
    if (null != n)
      for (let [e, t] of n) i = true, E.Q.setNodes(eR, {
        error: true
      }, {
        at: t
      });
    if (i) return void f.S.dispatch(M.CkL.SHAKE_APP, {
      duration: 200,
      intensity: 2
    });
    null == ee || ee((0, g.sk)(b.bN.richValue(eR), {
      mode: "raw",
      ignoreTrailingEmptyNodes: true
    }), r, e)
  }, [j.id, eR, ee, eP, ea]);
  (0, S.Z)(t, eR, j, eD), (0, N.Z)(eR, eO, K);
  let {
    handleKeyDown: ew,
    handleKeyUp: ex
  } = (0, A.Z)({
    editor: eR,
    channel: j,
    disableEnterToSubmit: el,
    onKeyDown: X,
    onKeyUp: Q,
    onTab: J,
    onEnter: $,
    allowNewLines: ec,
    submit: eD,
    hideAutocomplete: en,
    moveSelection: er
  }), {
    handlePaste: eL,
    handleGlobalPaste: eM
  } = (0, C.Z)(eR, eS, W), ek = i.useCallback(e => {
    null == et || et()
  }, [et]), ej = i.useCallback(e => {
    e !== ev.current ? eT.current && (null == Y || Y(null, (0, g.sk)(e, {
      mode: "raw"
    }), e)) : eT.current && et()
  }, [et, Y]);
  i.useLayoutEffect(() => {
    eI.current && (ev.current = n, eA(eR, "parent", {
      value: n
    }))
  }, [eR, n, eA]), i.useEffect(() => {
    let e = () => {
      var e;
      let t = null != (e = c.Z.getActiveCommand(j.id)) ? e : null;
      null !== t && null != t.options && eP(t, true)
    };
    return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e)
  }, [j, eR, eP]);
  let eU = i.useCallback(e => [...(0, v.Z)(eR, e, j.guild_id), ...(0, y.Z)(eR, e), ...(0, O.Z)(eR, e), ...(0, I.Z)(eR, e, j, {
      isIdle: eu,
      currentAutocompleteType: ed
    })], [eR, j, eu, ed]),
    eG = i.useCallback(e => {
      let t = (0, D.Z)(eR, e, j.id);
      return null == t && (t = (0, x.Z)(eR, e)), null == t && (t = (0, L.Z)(eR, e)), t
    }, [j.id, eR]),
    eB = i.useCallback(e => (0, w.Z)(e), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.d9, {
      event: M.CkL.GLOBAL_CLIPBOARD_PASTE,
      handler: eM
    }), (0, r.jsx)("div", {
      ref: eO,
      className: o()(U, k.slateContainer),
      children: (0, r.jsx)(m.Z, {
        id: G,
        editor: eR,
        channelId: j.id,
        guildId: j.guild_id,
        className: o()(k.slateTextArea, H),
        placeholder: F,
        readOnly: eS,
        spellCheck: ei,
        autoFocus: !es,
        canFocus: !B,
        onChange: ej,
        onFocus: z,
        onBlur: q,
        onClick: ek,
        onPaste: eL,
        onKeyDown: ew,
        onKeyUp: ex,
        decorate: eU,
        renderExtraElement: eG,
        renderExtraLeaf: eB,
        "aria-owns": ef,
        "aria-haspopup": ep,
        "aria-expanded": e_,
        "aria-activedescendant": eh,
        "aria-controls": em,
        "aria-labelledby": eb,
        "aria-describedby": eE,
        "aria-invalid": eg,
        "aria-autocomplete": ey,
        "aria-required": V
      })
    })]
  })
})