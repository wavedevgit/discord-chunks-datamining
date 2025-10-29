/** Chunk was on web.js **/
/** chunk id: 4484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
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
  Chunk981631 = require("./981631.js"),
  Chunk867641 = require("./867641.js");
let k = Chunk647438.forwardRef(function(e, t) {
  let {
    value: n,
    type: a,
    channel: k,
    className: j,
    id: U,
    disabled: G,
    submitting: B,
    placeholder: Z,
    required: F,
    textAreaPaddingClassName: V,
    onChange: H,
    onPaste: Y,
    onResize: W,
    onFocus: K,
    onBlur: z,
    onKeyDown: q,
    onKeyUp: X,
    onTab: Q,
    onEnter: J,
    onSubmit: $,
    maybeShowAutocomplete: ee,
    hideAutocomplete: et,
    moveSelection: en,
    spellcheckEnabled: er,
    canUseCommands: ei,
    canOnlyUseTextCommands: ea,
    disableAutoFocus: eo,
    disableEnterToSubmit: es,
    allowNewLines: el,
    isEditorIdle: ec,
    currentAutocompleteType: eu,
    "aria-owns": ed,
    "aria-expanded": ef,
    "aria-haspopup": e_,
    "aria-activedescendant": ep,
    "aria-controls": eh,
    "aria-invalid": em,
    "aria-describedby": eg,
    "aria-labelledby": eE,
    "aria-autocomplete": eb
  } = e, ey = i.useRef(null), eO = i.useRef(null), ev = i.useRef(true), eI = i.useRef(true), eT = G || B, eS = i.useCallback((e, t, n) => {
    var r;
    let {
      value: i,
      selection: a
    } = n, o = b.bN.richValue(e), s = e.selection, l = false;
    if (true !== i && i !== o) {
      if (e.children = i, "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT) {
        try {
          e.previewMarkdown = true, (0, P.KH)(e, k.guild_id, k.id)
        } finally {
          e.previewMarkdown = false
        }(0, P.KH)(e, k.guild_id, k.id), a = true
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
    if (l && !eo && b.bN.focus(e), null != a && u) {
      e.selection = a;
      let t = h.T.currentEntry(e);
      null != t && (t.selection = a), l = true
    }
    let d = p.cr(e);
    if (null != d && d[0].command.id !== (null == (r = c.Z.getActiveCommand(k.id)) ? true : r.id) && h.T.withMergedEntry(e, () => {
        (0, R.L)(e, k.id, null, true)
      }), l)
      if ("parent" === t) try {
        eI.current = false, e.onChange()
      } finally {
        eI.current = true
      } else e.onChange()
  }, [k.id, k.guild_id, eo]), eA = i.useCallback(() => {
    ev.current = false
  }, []), eC = i.useCallback(() => {
    ev.current = true
  }, []), eN = (0, T.Z)({
    channel: k,
    chatInputType: a,
    canUseCommands: ei,
    canOnlyUseTextCommands: ea,
    onChangeStart: eA,
    onChangeEnd: eC,
    updateState: eS
  }), eR = i.useCallback((e, t) => {
    let n = p.tM(eN, e, k.id),
      r = p.lk(e, k.guild_id, k.id, n, t);
    return {
      values: n,
      results: r
    }
  }, [k.guild_id, k.id, eN]), eP = i.useCallback(() => {
    let e, t = b.bN.getNodesOfType(eN, ["gameMentionInput"]),
      n = null != t ? [...t] : null,
      r = ei ? c.Z.getActiveCommand(k.id) : null,
      i = false;
    if (null != r && null != r.options) {
      let t = eR(r, false);
      e = t.values;
      let n = p.cu(eN).filter(e => !t.results[e].success).map(e => {
        var t;
        return (null != (t = r.options) ? t : []).find(t => t.name === e)
      });
      for (let e of r.options) !e.required || e.name in t.values || (E.Q.insertCommandOption(eN, e), n.push(e));
      if (n.length > 0) {
        var a, o;
        let e = n[0];
        E.Q.selectCommandOption(eN, e.name), i = true, (0, l.yw)(x.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
          application_id: null == r ? true : r.applicationId,
          command_id: null == r || null == (a = r.rootCommand) ? true : a.id,
          argument_type: s.jw[null != (o = null == e ? true : e.type) ? o : 3],
          is_required: null == e ? true : e.required
        })
      }
    }
    if (null != n)
      for (let [e, t] of n) i = true, E.Q.setNodes(eN, {
        error: true
      }, {
        at: t
      });
    if (i) return void f.S.dispatch(x.CkL.SHAKE_APP, {
      duration: 200,
      intensity: 2
    });
    null == $ || $((0, g.sk)(b.bN.richValue(eN), {
      mode: "raw",
      ignoreTrailingEmptyNodes: true
    }), r, e)
  }, [k.id, eN, $, eR, ei]);
  (0, S.Z)(t, eN, k, eP), (0, N.Z)(eN, ey, W);
  let {
    handleKeyDown: eD,
    handleKeyUp: ew
  } = (0, A.Z)({
    editor: eN,
    channel: k,
    disableEnterToSubmit: es,
    onKeyDown: q,
    onKeyUp: X,
    onTab: Q,
    onEnter: J,
    allowNewLines: el,
    submit: eP,
    hideAutocomplete: et,
    moveSelection: en
  }), {
    handlePaste: eL,
    handleGlobalPaste: ex
  } = (0, C.Z)(eN, eT, Y), eM = i.useCallback(e => {
    null == ee || ee()
  }, [ee]), ek = i.useCallback(e => {
    e !== eO.current ? eI.current && (null == H || H(null, (0, g.sk)(e, {
      mode: "raw"
    }), e)) : eI.current && ee()
  }, [ee, H]);
  i.useLayoutEffect(() => {
    ev.current && (eO.current = n, eS(eN, "parent", {
      value: n
    }))
  }, [eN, n, eS]), i.useEffect(() => {
    let e = () => {
      var e;
      let t = null != (e = c.Z.getActiveCommand(k.id)) ? e : null;
      null !== t && null != t.options && eR(t, true)
    };
    return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e)
  }, [k, eN, eR]);
  let ej = i.useCallback(e => [...(0, v.Z)(eN, e, k.guild_id), ...(0, y.Z)(eN, e), ...(0, O.Z)(eN, e), ...(0, I.Z)(eN, e, k, {
      isIdle: ec,
      currentAutocompleteType: eu
    })], [eN, k, ec, eu]),
    eU = i.useCallback(e => {
      let t = (0, D.Z)(eN, e, k.id);
      return null == t && (t = (0, L.Z)(eN, e)), t
    }, [k.id, eN]),
    eG = i.useCallback(e => (0, w.Z)(e), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.d9, {
      event: x.CkL.GLOBAL_CLIPBOARD_PASTE,
      handler: ex
    }), (0, r.jsx)("div", {
      ref: ey,
      className: o()(j, M.slateContainer),
      children: (0, r.jsx)(m.Z, {
        id: U,
        editor: eN,
        channelId: k.id,
        guildId: k.guild_id,
        className: o()(M.slateTextArea, V),
        placeholder: Z,
        readOnly: eT,
        spellCheck: er,
        autoFocus: !eo,
        canFocus: !G,
        onChange: ek,
        onFocus: K,
        onBlur: z,
        onClick: eM,
        onPaste: eL,
        onKeyDown: eD,
        onKeyUp: ew,
        decorate: ej,
        renderExtraElement: eU,
        renderExtraLeaf: eG,
        "aria-owns": ed,
        "aria-haspopup": e_,
        "aria-expanded": ef,
        "aria-activedescendant": ep,
        "aria-controls": eh,
        "aria-labelledby": eE,
        "aria-describedby": eg,
        "aria-invalid": em,
        "aria-autocomplete": eb,
        "aria-required": F
      })
    })]
  })
})