/** Chunk was on web.js **/
"use strict";
n.d(t, {
  L: () => P,
  Z: () => A
}), n(47120), n(566702), n(653041), n(757143), n(301563), n(733860), n(978209), n(878331);
var r = n(373793),
  i = n(911969),
  o = n(555573),
  a = n(456007),
  s = n(10718),
  l = n(998698),
  c = n(895924),
  u = n(581364),
  d = n(509716),
  f = n(826298),
  p = n(592125),
  _ = n(430824),
  h = n(594174),
  m = n(91313),
  g = n(53529),
  E = n(925994),
  v = n(436660),
  b = n(887490),
  y = n(42530),
  O = n(981631),
  S = n(665692);
let I = new Set(["applicationCommandOption"]),
  T = new Set([i.jw.ATTACHMENT]),
  N = new Set(["line", "applicationCommand"]);

function A(e, t, n, r) {
  let {
    insertData: i,
    isInline: d,
    isVoid: f,
    onChange: p,
    deleteBackward: _,
    deleteForward: h,
    deleteFragment: m
  } = e;
  e.insertData = n => {
    if (null != t && b.bN.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: i,
          interactionOptions: d
        } = (0, u.XA)(e),
        {
          application: f,
          command: p
        } = s.Xq({
          channel: t,
          type: "channel"
        }, i);
      if (null != p) {
        var r, l;
        let e = null != f ? {
          type: c.Qi.APPLICATION,
          id: f.id,
          icon: f.icon,
          name: null !== (l = null === (r = f.bot) || void 0 === r ? void 0 : r.username) && void 0 !== l ? l : f.name,
          application: f
        } : null;
        return o.Po({
          channelId: t.id,
          command: p,
          section: e,
          location: c.Vh.PASTE,
          initialValues: (0, a.Dw)(p, null != d ? d : [])
        }), null
      }
    }
    return i(n)
  }, e.isInline = e => !!I.has(e.type) || d(e), e.isVoid = e => !!("applicationCommandOption" === e.type && T.has(e.optionType)) || f(e), e.deleteBackward = t => {
    M(e, () => _(t))
  }, e.deleteForward = t => {
    M(e, () => h(t))
  }, e.deleteFragment = t => {
    M(e, () => m(t))
  };
  let E = null,
    v = null,
    y = null,
    O = null,
    S = null;
  return e.onChange = () => {
    if (null != t) {
      let i = l.Z.getState(t.id),
        o = s.Hf({
          channel: t,
          type: "channel"
        });
      if (b.bN.richValue(e) !== E || !b.Ew.equals(e.selection, v) || i.activeCommand !== y || null == S || o.some((e, t) => S[t] !== e)) {
        let a = g.T.withMergedEntry(e, () => {
          var o;
          return C({
            editor: e,
            storeCommandState: i,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: r,
            commandChanged: (null === (o = i.activeCommand) || void 0 === o ? void 0 : o.id) !== (null == y ? void 0 : y.id),
            previousOptionValues: O
          })
        });
        if (null != a) {
          let t = g.T.currentEntry(e);
          null != t && (t.commandId = a.commandId), O = a.optionValues
        } else O = null;
        E = b.bN.richValue(e), v = e.selection, y = i.activeCommand, S = o
      }
    }
    p()
  }, e
}

function C(e) {
  var t, n;
  let {
    editor: i,
    storeCommandState: a,
    channel: s,
    canUseCommands: l,
    canOnlyUseTextCommands: u,
    commandChanged: d,
    previousOptionValues: f
  } = e, {
    command: p,
    commandText: _
  } = x(i), h = a.activeCommand;
  if (!l && (null == h ? void 0 : null === (t = h.integration_types) || void 0 === t ? void 0 : t.includes(r.Y.GUILD_INSTALL)) || u && (null == h ? void 0 : h.inputType) !== c.iw.BUILT_IN_TEXT && (null == h ? void 0 : h.inputType) !== c.iw.BUILT_IN_INTEGRATION) return null != p && P(i, s.id, h, !0), null;
  if (null != p) {
    if (b.bN.isEditorEmpty(i) || null == h) return P(i, s.id, h, !1), null;
    let e = "".concat(S.GI).concat(p.displayName);
    if (null == _ || !_.startsWith(e) || 0 === m.cu(i).length && (_.length < e.length + 1 || " " !== _[e.length])) return P(i, s.id, h, !0), null
  } else {
    if (null != h && d) {
      let e = R(i, s, a),
        t = m.tM(i, h, s.id);
      return L({
        guildId: s.guild_id,
        channelId: s.id,
        command: h,
        activeOption: e,
        currentOptionValues: t,
        previousOptionValues: null,
        validateAll: !0,
        allowEmpty: !0
      }), {
        commandId: h.id,
        optionValues: t
      }
    }
    if (null != h && !d) return o.Po({
      channelId: s.id,
      command: null,
      section: null
    }), null;
    let e = b.bN.richValue(i)[0],
      t = e.children[0];
    if (N.has(e.type) && b.LC.isText(t)) {
      let e = k(t.text, s);
      if (null != e) return o.Po({
        channelId: s.id,
        command: e.command,
        section: e.section
      }), null
    }
  }
  if (null != h && null != p) {
    w(i, h) || D(i, h);
    let e = m.tM(i, h, s.id),
      t = b.bN.above(i, {
        match: e => b.bN.isInline(i, e) && "applicationCommandOption" === e.type,
        mode: "lowest"
      }),
      r = null !== (n = null == t ? void 0 : t[0].optionName) && void 0 !== n ? n : null;
    return L({
      guildId: s.guild_id,
      channelId: s.id,
      command: h,
      activeOption: r,
      currentOptionValues: e,
      previousOptionValues: f,
      validateAll: !1,
      allowEmpty: !1
    }), {
      commandId: p.id,
      optionValues: e
    }
  }
  return null
}

function R(e, t, n) {
  var r, i, o, a, s;
  let l;
  let {
    initialValues: c,
    activeCommand: u
  } = n;
  if (null == u) return null;
  let d = (null !== (o = null === (r = u.options) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0 ? m.zb(e, u) : null,
    f = (0, E.sk)(b.bN.richValue(e), {
      mode: "raw",
      range: {
        anchor: b.bN.start(e, []),
        focus: null !== (a = null == d ? void 0 : null === (i = d[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== a ? a : b.bN.end(e, [])
      }
    }),
    p = "",
    _ = f.toLocaleLowerCase(),
    h = "".concat(S.GI).concat(u.displayName, " ").toLocaleLowerCase(),
    g = "".concat(S.GI).concat(u.untranslatedName, " ").toLocaleLowerCase();
  _.startsWith(h) ? p = f.substring(h.length).trim() : _.startsWith(g) && (p = f.substring(g.length).trim());
  let O = [],
    I = null,
    N = null;
  if (null != u.options) {
    let e = new Set;
    if (null != d)
      for (let r of d) {
        e.add(r.name);
        let i = null !== (s = j(n, t, r.name)) && void 0 !== s ? s : r.text,
          o = {
            type: "applicationCommandOption",
            optionName: r.name,
            optionDisplayName: r.displayName,
            optionType: r.type,
            children: [{
              text: i
            }]
          };
        O.push(o), 0 === r.text.length && null == I && (I = o)
      }
    for (let r of u.options)
      if (!e.has(r.name) && (r.required || null != c[r.name])) {
        let e, i;
        p.length > 0 && !T.has(r.type) ? (e = p, p = "") : e = null != (i = j(n, t, r.name)) ? i : "";
        let o = {
          type: "applicationCommandOption",
          optionName: r.name,
          optionDisplayName: r.displayName,
          optionType: r.type,
          children: [{
            text: e
          }]
        };
        O.push(o), 0 === e.length && null == I && (I = o), null == i && (N = o)
      }
  }
  l = p.length > 0 ? "".concat(S.GI).concat(u.displayName, " ").concat(p.replace(/\r|\n/g, " ")) : 0 === O.length ? "".concat(S.GI).concat(u.displayName, " ") : "".concat(S.GI).concat(u.displayName), O.unshift({
    text: l
  });
  let A = {
    type: "applicationCommand",
    children: O,
    command: {
      id: u.id,
      name: u.untranslatedName,
      displayName: u.displayName
    }
  };
  b.bN.withoutNormalizing(e, () => {
    for (let [, t] of(v.Q.insertNodes(e, [A], {
        at: y.YD
      }), b.bN.blocks(e).reverse())) b.C0.isAfter(t, y.YD) && v.Q.removeNodes(e, {
      at: t,
      voids: !0
    })
  });
  let C = null;
  return null != I ? (v.Q.selectCommandOption(e, I.optionName), C = I.optionName) : null != N ? (v.Q.selectCommandOption(e, N.optionName, !1), C = N.optionName) : v.Q.resetSelectionToEnd(e), null == N && D(e, u), C
}

function P(e, t, n, r) {
  let [i] = b.bN.blocks(e)[0], a = (r ? (0, E.sg)(i, {
    mode: "plain"
  }).trimEnd() : "").split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), s = [a.length - 1];
  for (let [, t] of(v.Q.insertNodes(e, a, {
      at: y.YD
    }), b.bN.blocks(e).reverse())) b.C0.isAfter(t, s) && v.Q.removeNodes(e, {
    at: t,
    voids: !0
  });
  null != n && o.Po({
    channelId: t,
    command: null,
    section: null
  })
}

function w(e, t) {
  if (null == t.options || 0 === t.options.length) return !1;
  let n = m.zb(e, t);
  return 0 !== n.length && (b.bN.withoutNormalizing(e, () => {
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      v.Q.textToInline(e, {
        type: "applicationCommandOption",
        optionName: r.name,
        optionDisplayName: r.displayName,
        optionType: r.type,
        children: [{
          text: r.text
        }]
      }, {
        anchor: r.keyRange.anchor,
        focus: r.valueRange.focus
      })
    }
    let t = b.bN.getFirstText(e);
    if (null == t) return !1;
    let r = t.text.trim();
    t.text !== r && v.Q.textToText(e, r, {
      anchor: {
        path: y.u9,
        offset: 0
      },
      focus: {
        path: y.u9,
        offset: t.text.length
      }
    })
  }), !0)
}

function D(e, t) {
  if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || T.has(t.options[0].type) || m.cu(e).length > 0 || null == m.cr(e)) return !1;
  let n = b.bN.getFirstText(e);
  if (null == n) return !1;
  let r = t.options[0],
    i = {
      path: y.u9,
      offset: t.displayName.length + 2
    },
    o = {
      path: y.u9,
      offset: n.text.length
    };
  return !(!n.text.startsWith("".concat(S.GI).concat(t.displayName, " ").toLocaleLowerCase()) || b.Jz.equals(i, o)) && (v.Q.textToInline(e, {
    type: "applicationCommandOption",
    optionName: r.name,
    optionDisplayName: r.displayName,
    optionType: r.type,
    children: [{
      text: n.text.substring(t.displayName.length + 2)
    }]
  }, {
    anchor: i,
    focus: o
  }), !0)
}

function L(e) {
  let {
    guildId: t,
    channelId: n,
    command: r,
    activeOption: i,
    currentOptionValues: a,
    previousOptionValues: s,
    validateAll: c,
    allowEmpty: u
  } = e;
  if (null == r.options) return !1;
  let f = c ? null : l.Z.getActiveOptionName(n),
    p = {},
    _ = l.Z.getOptionStates(n),
    h = !1;
  for (let e of r.options) {
    var m, g, E;
    let r = _[e.name],
      o = c || e.name === f && f !== i || (null == r ? void 0 : null === (m = r.lastValidationResult) || void 0 === m ? void 0 : m.success) === !1 && (null == a ? void 0 : a[e.name]) !== (null == s ? void 0 : s[e.name]),
      l = {
        hasValue: null != a && e.name in a,
        isActive: e.name === i,
        lastValidationResult: o ? (0, d.f)({
          option: e,
          content: null !== (E = null == a ? void 0 : a[e.name]) && void 0 !== E ? E : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: u
        }) : null == r ? void 0 : r.lastValidationResult
      };
    (null == r || r.hasValue !== l.hasValue || r.isActive !== l.isActive || o && (null === (g = r.lastValidationResult) || void 0 === g ? void 0 : g.success) === !1) && (p[e.name] = l, h = !0)
  }
  h && o.g7(n, p)
}

function x(e) {
  let t = m.cr(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, r = n.children[0];
  return b.LC.isText(r) ? {
    command: n.command,
    commandText: r.text
  } : {
    command: n.command,
    commandText: null
  }
}

function M(e, t) {
  let n = m.cu(e)[0];
  t();
  let r = b.M8.toPoint(e.selection);
  if (null == r || n === m.cu(e)[0]) return;
  let {
    command: i,
    commandText: o
  } = x(e);
  !(null == i || null == o || o.endsWith(" ")) && b.Jz.equals(r, {
    path: y.u9,
    offset: i.displayName.length + 1
  }) && v.Q.insertText(e, " ")
}

function k(e, t) {
  if (!e.startsWith("/")) return null;
  let n = (0, f.hV)(t, e.substring(1));
  if (!n.hasSpaceTerminator) return null;
  let {
    commands: r,
    sections: o
  } = s.VB({
    channel: t,
    type: "channel"
  }, i.yU.CHAT, n.text);
  if (0 === r.length) return null;
  let a = n.text.trim(),
    l = a + " ",
    u = r.filter(e => e.inputType !== c.iw.PLACEHOLDER && (e.displayName === a || e.displayName.startsWith(l)));
  if (1 === u.length && u[0].displayName === a) {
    let e = u[0],
      t = o.find(t => {
        var n;
        return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
      });
    return {
      command: e,
      section: t
    }
  }
  return null
}

function j(e, t, n) {
  var r, o, a, s;
  let l = null === (o = e.activeCommand) || void 0 === o ? void 0 : null === (r = o.options) || void 0 === r ? void 0 : r.find(e => e.name === n),
    c = e.initialValues[n];
  if (null == l || null == c) return null;
  if (null != l.choices) return null === (s = l.choices.find(e => e.value === c.value)) || void 0 === s ? void 0 : s.displayName;
  let u = null === (a = c.value) || void 0 === a ? void 0 : a.toString();
  return l.type === i.jw.CHANNEL || l.type === i.jw.MENTIONABLE && null != p.Z.getChannel(u) ? "<#".concat(u, ">	") : l.type === i.jw.USER || l.type === i.jw.MENTIONABLE && null != h.default.getUser(u) ? "<@".concat(u, ">") : l.type === i.jw.ROLE || l.type === i.jw.MENTIONABLE && null != _.Z.getRole(t.guild_id, null != u ? u : O.lds) ? "<@&".concat(u, ">") : u
}