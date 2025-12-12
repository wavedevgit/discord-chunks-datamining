/** Chunk was on web.js **/
/** chunk id: 86724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => R,
  Z: () => A
}), require("./388685.js"), require("./781311.js"), require("./539854.js"), require("./704826.js"), require("./35282.js"), require("./290780.js"), require("./583741.js"), require("./125548.js");
var Chunk373793 = require("./373793.js"),
  Chunk911969 = require("./911969.js"),
  Chunk555573 = require("./555573.js"),
  Chunk456007 = require("./456007.js"),
  Chunk10718 = require("./10718.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk509716 = require("./509716.js"),
  Chunk826298 = require("./826298.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk91313 = require("./91313.js"),
  Chunk53529 = require("./53529.js"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk42530 = require("./42530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk761652 = require("./761652.js");
let I = new Set(["applicationCommandOption"]),
  T = new Set([Chunk911969.jw.ATTACHMENT]),
  C = new Set(["line", "applicationCommand"]);

function A(e, t, n, r) {
  let {
    insertData: i,
    isInline: d,
    isVoid: f,
    onChange: p,
    deleteBackward: _,
    deleteForward: m,
    deleteFragment: h
  } = e;
  e.insertData = n => {
    if (null != t && y.bN.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
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
          name: null != (l = null == (r = f.bot) ? true : r.username) ? l : f.name,
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
    j(e, () => _(t))
  }, e.deleteForward = t => {
    j(e, () => m(t))
  }, e.deleteFragment = t => {
    j(e, () => h(t))
  };
  let E = null,
    b = null,
    O = null,
    v = null,
    S = null;
  return e.onChange = () => {
    if (null != t) {
      let i = l.Z.getState(t.id),
        o = s.Hf({
          channel: t,
          type: "channel"
        });
      if (y.bN.richValue(e) !== E || !y.Ew.equals(e.selection, b) || i.activeCommand !== O || null == S || o.some((e, t) => S[t] !== e)) {
        let a = g.T.withMergedEntry(e, () => {
          var o;
          return N({
            editor: e,
            storeCommandState: i,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: r,
            commandChanged: (null == (o = i.activeCommand) ? true : o.id) !== (null == O ? true : O.id),
            previousOptionValues: v
          })
        });
        if (null != a) {
          let t = g.T.currentEntry(e);
          null != t && (t.commandId = a.commandId), v = a.optionValues
        } else v = null;
        E = y.bN.richValue(e), b = e.selection, O = i.activeCommand, S = o
      }
    }
    p()
  }, e
}

function N(e) {
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
  } = L(i), m = a.activeCommand;
  if (!l && (null == m || null == (t = m.integration_types) ? true : t.includes(r.Y.GUILD_INSTALL)) || u && (null == m ? true : m.inputType) !== c.iw.BUILT_IN_TEXT && (null == m ? true : m.inputType) !== c.iw.BUILT_IN_INTEGRATION) return null != p && R(i, s.id, m, true), null;
  if (null != p) {
    if (y.bN.isEditorEmpty(i) || null == m) return R(i, s.id, m, false), null;
    let e = "".concat(S.GI).concat(p.displayName);
    if (null == _ || !_.startsWith(e) || 0 === h.cu(i).length && (_.length < e.length + 1 || " " !== _[e.length])) return R(i, s.id, m, true), null
  } else {
    if (null != m && d) {
      let e = P(i, s, a),
        t = h.tM(i, m, s.id);
      return x({
        guildId: s.guild_id,
        channelId: s.id,
        command: m,
        activeOption: e,
        currentOptionValues: t,
        previousOptionValues: null,
        validateAll: true,
        allowEmpty: true
      }), {
        commandId: m.id,
        optionValues: t
      }
    }
    if (null != m && !d) return o.Po({
      channelId: s.id,
      command: null,
      section: null
    }), null;
    let e = y.bN.richValue(i)[0],
      t = e.children[0];
    if (C.has(e.type) && y.LC.isText(t)) {
      let e = M(t.text, s);
      if (null != e) return o.Po({
        channelId: s.id,
        command: e.command,
        section: e.section
      }), null
    }
  }
  if (null != m && null != p) {
    w(i, m) || D(i, m);
    let e = h.tM(i, m, s.id),
      t = y.bN.above(i, {
        match: e => y.bN.isInline(i, e) && "applicationCommandOption" === e.type,
        mode: "lowest"
      }),
      r = null != (n = null == t ? true : t[0].optionName) ? n : null;
    return x({
      guildId: s.guild_id,
      channelId: s.id,
      command: m,
      activeOption: r,
      currentOptionValues: e,
      previousOptionValues: f,
      validateAll: false,
      allowEmpty: false
    }), {
      commandId: p.id,
      optionValues: e
    }
  }
  return null
}

function P(e, t, n) {
  var r, i, o, a, s;
  let l, {
    initialValues: c,
    activeCommand: u
  } = n;
  if (null == u) return null;
  let d = (null != (o = null == (r = u.options) ? true : r.length) ? o : 0) > 0 ? h.zb(e, u) : null,
    f = (0, E.sk)(y.bN.richValue(e), {
      mode: "raw",
      range: {
        anchor: y.bN.start(e, []),
        focus: null != (a = null == d || null == (i = d[0]) ? true : i.keyRange.anchor) ? a : y.bN.end(e, [])
      }
    }),
    p = "",
    _ = f.toLocaleLowerCase(),
    m = "".concat(S.GI).concat(u.displayName, " ").toLocaleLowerCase(),
    g = "".concat(S.GI).concat(u.untranslatedName, " ").toLocaleLowerCase();
  _.startsWith(m) ? p = f.substring(m.length).trim() : _.startsWith(g) && (p = f.substring(g.length).trim());
  let v = [],
    I = null,
    C = null;
  if (null != u.options) {
    let e = new Set;
    if (null != d)
      for (let r of d) {
        e.add(r.name);
        let i = null != (s = k(n, t, r.name)) ? s : r.text,
          o = {
            type: "applicationCommandOption",
            optionName: r.name,
            optionDisplayName: r.displayName,
            optionType: r.type,
            children: [{
              text: i
            }]
          };
        v.push(o), 0 === r.text.length && null == I && (I = o)
      }
    for (let r of u.options)
      if (!e.has(r.name) && (r.required || null != c[r.name])) {
        let e, i;
        p.length > 0 && !T.has(r.type) ? (e = p, p = "") : e = null != (i = k(n, t, r.name)) ? i : "";
        let o = {
          type: "applicationCommandOption",
          optionName: r.name,
          optionDisplayName: r.displayName,
          optionType: r.type,
          children: [{
            text: e
          }]
        };
        v.push(o), 0 === e.length && null == I && (I = o), null == i && (C = o)
      }
  }
  l = p.length > 0 ? "".concat(S.GI).concat(u.displayName, " ").concat(p.replace(/\r|\n/g, " ")) : 0 === v.length ? "".concat(S.GI).concat(u.displayName, " ") : "".concat(S.GI).concat(u.displayName), v.unshift({
    text: l
  });
  let A = {
    type: "applicationCommand",
    children: v,
    command: {
      id: u.id,
      name: u.untranslatedName,
      displayName: u.displayName
    }
  };
  y.bN.withoutNormalizing(e, () => {
    for (let [, t] of(b.Q.insertNodes(e, [A], {
        at: O.YD
      }), y.bN.blocks(e).reverse())) y.C0.isAfter(t, O.YD) && b.Q.removeNodes(e, {
      at: t,
      voids: true
    })
  });
  let N = null;
  return null != I ? (b.Q.selectCommandOption(e, I.optionName), N = I.optionName) : null != C ? (b.Q.selectCommandOption(e, C.optionName, false), N = C.optionName) : b.Q.resetSelectionToEditorEnd(e), null == C && D(e, u), N
}

function R(e, t, n, r) {
  let [i] = y.bN.blocks(e)[0], a = (r ? (0, E.sg)(i, {
    mode: "plain"
  }).trimEnd() : "").split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), s = [a.length - 1];
  for (let [, t] of(b.Q.insertNodes(e, a, {
      at: O.YD
    }), y.bN.blocks(e).reverse())) y.C0.isAfter(t, s) && b.Q.removeNodes(e, {
    at: t,
    voids: true
  });
  null != n && o.Po({
    channelId: t,
    command: null,
    section: null
  })
}

function w(e, t) {
  if (null == t.options || 0 === t.options.length) returnfalse;
  let n = h.zb(e, t);
  return 0 !== n.length && (y.bN.withoutNormalizing(e, () => {
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      b.Q.textToInline(e, {
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
    let t = y.bN.getFirstText(e);
    if (null == t) returnfalse;
    let r = t.text.trim();
    t.text !== r && b.Q.textToText(e, r, {
      anchor: {
        path: O.u9,
        offset: 0
      },
      focus: {
        path: O.u9,
        offset: t.text.length
      }
    })
  }), true)
}

function D(e, t) {
  if (null == t.options || 1 !== t.options.length || true === t.options[0].required || T.has(t.options[0].type) || h.cu(e).length > 0 || null == h.cr(e)) returnfalse;
  let n = y.bN.getFirstText(e);
  if (null == n) returnfalse;
  let r = t.options[0],
    i = {
      path: O.u9,
      offset: t.displayName.length + 2
    },
    o = {
      path: O.u9,
      offset: n.text.length
    };
  return !(!n.text.startsWith("".concat(S.GI).concat(t.displayName, " ").toLocaleLowerCase()) || y.Jz.equals(i, o)) && (b.Q.textToInline(e, {
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
  }), true)
}

function x(e) {
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
  if (null == r.options) returnfalse;
  let f = c ? null : l.Z.getActiveOptionName(n),
    p = {},
    _ = l.Z.getOptionStates(n),
    m = false;
  for (let e of r.options) {
    var h, g, E;
    let r = _[e.name],
      o = c || e.name === f && f !== i || (null == r || null == (h = r.lastValidationResult) ? true : h.success) === false && (null == a ? true : a[e.name]) !== (null == s ? true : s[e.name]),
      l = {
        hasValue: null != a && e.name in a,
        isActive: e.name === i,
        lastValidationResult: o ? (0, d.f)({
          option: e,
          content: null != (E = null == a ? true : a[e.name]) ? E : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: u
        }) : null == r ? true : r.lastValidationResult
      };
    (null == r || r.hasValue !== l.hasValue || r.isActive !== l.isActive || o && (null == (g = r.lastValidationResult) ? true : g.success) === false) && (p[e.name] = l, m = true)
  }
  m && o.g7(n, p)
}

function L(e) {
  let t = h.cr(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, r = n.children[0];
  return y.LC.isText(r) ? {
    command: n.command,
    commandText: r.text
  } : {
    command: n.command,
    commandText: null
  }
}

function j(e, t) {
  let n = h.cu(e)[0];
  t();
  let r = y.M8.toPoint(e.selection);
  if (null == r || n === h.cu(e)[0]) return;
  let {
    command: i,
    commandText: o
  } = L(e);
  !(null == i || null == o || o.endsWith(" ")) && y.Jz.equals(r, {
    path: O.u9,
    offset: i.displayName.length + 1
  }) && b.Q.insertText(e, " ")
}

function M(e, t) {
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
        return (null == (n = t.application) ? true : n.id) === e.applicationId
      });
    return {
      command: e,
      section: t
    }
  }
  return null
}

function k(e, t, n) {
  var r, o, a, s;
  let l = null == (o = e.activeCommand) || null == (r = o.options) ? true : r.find(e => e.name === n),
    c = e.initialValues[n];
  if (null == l || null == c) return null;
  if (null != l.choices) return null == (s = l.choices.find(e => e.value === c.value)) ? true : s.displayName;
  let u = null == (a = c.value) ? true : a.toString();
  return l.type === i.jw.CHANNEL || l.type === i.jw.MENTIONABLE && null != p.Z.getChannel(u) ? "<#".concat(u, ">	") : l.type === i.jw.USER || l.type === i.jw.MENTIONABLE && null != m.default.getUser(u) ? "<@".concat(u, ">") : l.type === i.jw.ROLE || l.type === i.jw.MENTIONABLE && null != _.Z.getRole(t.guild_id, null != u ? u : v.lds) ? "<@&".concat(u, ">") : u
}