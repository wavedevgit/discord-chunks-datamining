/** Chunk was on web.js **/
/** chunk id: 870748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T,
  t: () => w
}), require("./896048.js"), require("./733351.js"), require("./321073.js"), require("./747238.js"), require("./812715.js"), require("./667532.js"), require("./264879.js"), require("./183875.js");
var Chunk485845 = require("./485845.js"),
  Chunk155718 = require("./155718.js"),
  Chunk721768 = require("./721768.js"),
  Chunk258363 = require("./258363.js"),
  Chunk842209 = require("./842209.js"),
  Chunk861382 = require("./861382.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk978561 = require("./978561.js"),
  Chunk664929 = require("./664929.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk287809 = require("./287809.js"),
  Chunk317681 = require("./317681.js"),
  Chunk186306 = require("./186306.js"),
  Chunk323350 = require("./323350.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk551483 = require("./551483.js"),
  Chunk652215 = require("./652215.js");
require("./827669.js");
let A = new Set(["applicationCommandOption"]),
  I = new Set([Chunk155718.n4.ATTACHMENT]),
  S = new Set(["line", "applicationCommand"]);

function T(e, t, n, r) {
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
    if (null != t && b.VW.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: i,
          interactionOptions: d
        } = (0, u.Ez)(e),
        {
          application: f,
          command: p
        } = s.EW({
          channel: t,
          type: "channel"
        }, i);
      if (null != p) {
        var r, l;
        let e = null != f ? {
          type: c.Hf.APPLICATION,
          id: f.id,
          icon: f.icon,
          name: null != (r = null == (l = f.bot) ? true : l.username) ? r : f.name,
          application: f
        } : null;
        return a.Gf({
          channelId: t.id,
          command: p,
          section: e,
          location: c.Oh.PASTE,
          initialValues: (0, o.DB)(p, null != d ? d : [])
        }), null
      }
    }
    return i(n)
  }, e.isInline = e => !!A.has(e.type) || d(e), e.isVoid = e => !!("applicationCommandOption" === e.type && I.has(e.optionType)) || f(e), e.deleteBackward = t => {
    x(e, () => _(t))
  }, e.deleteForward = t => {
    x(e, () => h(t))
  }, e.deleteFragment = t => {
    x(e, () => m(t))
  };
  let E = null,
    y = null,
    O = null,
    v = null,
    S = null;
  return e.onChange = () => {
    if (null != t) {
      let i = l.A.getState(t.id),
        a = s.j8({
          channel: t,
          type: "channel"
        });
      if (b.VW.richValue(e) !== E || !b.Ot.equals(e.selection, y) || i.activeCommand !== O || null == S || a.some((e, t) => S[t] !== e)) {
        let o = g.o.withMergedEntry(e, () => {
          var a;
          return C({
            editor: e,
            storeCommandState: i,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: r,
            commandChanged: (null == (a = i.activeCommand) ? true : a.id) !== (null == O ? true : O.id),
            previousOptionValues: v
          })
        });
        if (null != o) {
          let t = g.o.currentEntry(e);
          null != t && (t.commandId = o.commandId), v = o.optionValues
        } else v = null;
        E = b.VW.richValue(e), y = e.selection, O = i.activeCommand, S = a
      }
    }
    p()
  }, e
}

function C(e) {
  var t, n;
  let {
    editor: i,
    storeCommandState: o,
    channel: s,
    canUseCommands: l,
    canOnlyUseTextCommands: u,
    commandChanged: d,
    previousOptionValues: f
  } = e, {
    command: p,
    commandText: _
  } = L(i), h = o.activeCommand;
  if (!l && (null == h || null == (t = h.integration_types) ? true : t.includes(r.b.GUILD_INSTALL)) || u && (null == h ? true : h.inputType) !== c.y$.BUILT_IN_TEXT && (null == h ? true : h.inputType) !== c.y$.BUILT_IN_INTEGRATION) return null != p && w(i, s.id, h, true), null;
  if (null != p) {
    if (b.VW.isEditorEmpty(i) || null == h) return w(i, s.id, h, false), null;
    let e = "".concat("/").concat(p.displayName);
    if (null == _ || !_.startsWith(e) || 0 === m.O7(i).length && (_.length < e.length + 1 || " " !== _[e.length])) return w(i, s.id, h, true), null
  } else {
    if (null != h && d) {
      let e = N(i, s, o),
        t = m.SQ(i, h, s.id);
      return D({
        guildId: s.guild_id,
        channelId: s.id,
        command: h,
        activeOption: e,
        currentOptionValues: t,
        previousOptionValues: null,
        validateAll: true,
        allowEmpty: true
      }), {
        commandId: h.id,
        optionValues: t
      }
    }
    if (null != h && !d) return a.Gf({
      channelId: s.id,
      command: null,
      section: null
    }), null;
    let e = b.VW.richValue(i)[0],
      t = e.children[0];
    if (S.has(e.type) && b.l5.isText(t)) {
      let e = M(t.text, s);
      if (null != e) return a.Gf({
        channelId: s.id,
        command: e.command,
        section: e.section
      }), null
    }
  }
  if (null != h && null != p) {
    R(i, h) || P(i, h);
    let e = m.SQ(i, h, s.id),
      t = b.VW.above(i, {
        match: e => b.VW.isInline(i, e) && "applicationCommandOption" === e.type,
        mode: "lowest"
      }),
      r = null != (n = null == t ? true : t[0].optionName) ? n : null;
    return D({
      guildId: s.guild_id,
      channelId: s.id,
      command: h,
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

function N(e, t, n) {
  var r, i, a, o, s;
  let l, {
    initialValues: c,
    activeCommand: u
  } = n;
  if (null == u) return null;
  let d = (null != (r = null == (a = u.options) ? true : a.length) ? r : 0) > 0 ? m.pY(e, u) : null,
    f = (0, E.WO)(b.VW.richValue(e), {
      mode: "raw",
      range: {
        anchor: b.VW.start(e, []),
        focus: null != (i = null == d || null == (o = d[0]) ? true : o.keyRange.anchor) ? i : b.VW.end(e, [])
      }
    }),
    p = "",
    _ = f.toLocaleLowerCase(),
    h = "".concat("/").concat(u.displayName, " ").toLocaleLowerCase(),
    g = "".concat("/").concat(u.untranslatedName, " ").toLocaleLowerCase();
  _.startsWith(h) ? p = f.substring(h.length).trim() : _.startsWith(g) && (p = f.substring(g.length).trim());
  let v = [],
    A = null,
    S = null;
  if (null != u.options) {
    let e = new Set;
    if (null != d)
      for (let r of d) {
        e.add(r.name);
        let i = null != (s = j(n, t, r.name)) ? s : r.text,
          a = {
            type: "applicationCommandOption",
            optionName: r.name,
            optionDisplayName: r.displayName,
            optionType: r.type,
            children: [{
              text: i
            }]
          };
        v.push(a), 0 === r.text.length && null == A && (A = a)
      }
    for (let r of u.options)
      if (!e.has(r.name) && (r.required || null != c[r.name])) {
        let e, i;
        p.length > 0 && !I.has(r.type) ? (e = p, p = "") : e = null != (i = j(n, t, r.name)) ? i : "";
        let a = {
          type: "applicationCommandOption",
          optionName: r.name,
          optionDisplayName: r.displayName,
          optionType: r.type,
          children: [{
            text: e
          }]
        };
        v.push(a), 0 === e.length && null == A && (A = a), null == i && (S = a)
      }
  }
  l = p.length > 0 ? "".concat("/").concat(u.displayName, " ").concat(p.replace(/\r|\n/g, " ")) : 0 === v.length ? "".concat("/").concat(u.displayName, " ") : "".concat("/").concat(u.displayName), v.unshift({
    text: l
  });
  let T = {
    type: "applicationCommand",
    children: v,
    command: {
      id: u.id,
      name: u.untranslatedName,
      displayName: u.displayName
    }
  };
  b.VW.withoutNormalizing(e, () => {
    for (let [, t] of(y.b.insertNodes(e, [T], {
        at: O.Xg
      }), b.VW.blocks(e).reverse())) b.PW.isAfter(t, O.Xg) && y.b.removeNodes(e, {
      at: t,
      voids: true
    })
  });
  let C = null;
  return null != A ? (y.b.selectCommandOption(e, A.optionName), C = A.optionName) : null != S ? (y.b.selectCommandOption(e, S.optionName, false), C = S.optionName) : y.b.resetSelectionToEditorEnd(e), null == S && P(e, u), C
}

function w(e, t, n, r) {
  let [i] = b.VW.blocks(e)[0], o = (r ? (0, E.IQ)(i, {
    mode: "plain"
  }).trimEnd() : "").split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), s = [o.length - 1];
  for (let [, t] of(y.b.insertNodes(e, o, {
      at: O.Xg
    }), b.VW.blocks(e).reverse())) b.PW.isAfter(t, s) && y.b.removeNodes(e, {
    at: t,
    voids: true
  });
  null != n && a.Gf({
    channelId: t,
    command: null,
    section: null
  })
}

function R(e, t) {
  if (null == t.options || 0 === t.options.length) returnfalse;
  let n = m.pY(e, t);
  return 0 !== n.length && (b.VW.withoutNormalizing(e, () => {
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      y.b.textToInline(e, {
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
    let t = b.VW.getFirstText(e);
    if (null == t) returnfalse;
    let r = t.text.trim();
    t.text !== r && y.b.textToText(e, r, {
      anchor: {
        path: O.fP,
        offset: 0
      },
      focus: {
        path: O.fP,
        offset: t.text.length
      }
    })
  }), true)
}

function P(e, t) {
  if (null == t.options || 1 !== t.options.length || true === t.options[0].required || I.has(t.options[0].type) || m.O7(e).length > 0 || null == m.n$(e)) returnfalse;
  let n = b.VW.getFirstText(e);
  if (null == n) returnfalse;
  let r = t.options[0],
    i = {
      path: O.fP,
      offset: t.displayName.length + 2
    },
    a = {
      path: O.fP,
      offset: n.text.length
    };
  return !(!n.text.startsWith("".concat("/").concat(t.displayName, " ").toLocaleLowerCase()) || b.Kh.equals(i, a)) && (y.b.textToInline(e, {
    type: "applicationCommandOption",
    optionName: r.name,
    optionDisplayName: r.displayName,
    optionType: r.type,
    children: [{
      text: n.text.substring(t.displayName.length + 2)
    }]
  }, {
    anchor: i,
    focus: a
  }), true)
}

function D(e) {
  let {
    guildId: t,
    channelId: n,
    command: r,
    activeOption: i,
    currentOptionValues: o,
    previousOptionValues: s,
    validateAll: c,
    allowEmpty: u
  } = e;
  if (null == r.options) returnfalse;
  let f = c ? null : l.A.getActiveOptionName(n),
    p = {},
    _ = l.A.getOptionStates(n),
    h = false;
  for (let e of r.options) {
    var m, g, E;
    let r = _[e.name],
      a = c || e.name === f && f !== i || (null == r || null == (g = r.lastValidationResult) ? true : g.success) === false && (null == o ? true : o[e.name]) !== (null == s ? true : s[e.name]),
      l = {
        hasValue: null != o && e.name in o,
        isActive: e.name === i,
        lastValidationResult: a ? (0, d.J)({
          option: e,
          content: null != (m = null == o ? true : o[e.name]) ? m : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: u
        }) : null == r ? true : r.lastValidationResult
      };
    (null == r || r.hasValue !== l.hasValue || r.isActive !== l.isActive || a && (null == (E = r.lastValidationResult) ? true : E.success) === false) && (p[e.name] = l, h = true)
  }
  h && a.H2(n, p)
}

function L(e) {
  let t = m.n$(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, r = n.children[0];
  return b.l5.isText(r) ? {
    command: n.command,
    commandText: r.text
  } : {
    command: n.command,
    commandText: null
  }
}

function x(e, t) {
  let n = m.O7(e)[0];
  t();
  let r = b.ZF.toPoint(e.selection);
  if (null == r || n === m.O7(e)[0]) return;
  let {
    command: i,
    commandText: a
  } = L(e);
  !(null == i || null == a || a.endsWith(" ")) && b.Kh.equals(r, {
    path: O.fP,
    offset: i.displayName.length + 1
  }) && y.b.insertText(e, " ")
}

function M(e, t) {
  if (!e.startsWith("/")) return null;
  let n = (0, f.Yn)(t, e.substring(1));
  if (!n.hasSpaceTerminator) return null;
  let {
    commands: r,
    sections: a
  } = s.v7({
    channel: t,
    type: "channel"
  }, i.kc.CHAT, n.text);
  if (0 === r.length) return null;
  let o = n.text.trim(),
    l = o + " ",
    u = r.filter(e => e.inputType !== c.y$.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(l)));
  if (1 === u.length && u[0].displayName === o) {
    let e = u[0],
      t = a.find(t => {
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

function j(e, t, n) {
  var r, a, o, s;
  let l = null == (a = e.activeCommand) || null == (r = a.options) ? true : r.find(e => e.name === n),
    c = e.initialValues[n];
  if (null == l || null == c) return null;
  if (null != l.choices) return null == (s = l.choices.find(e => e.value === c.value)) ? true : s.displayName;
  let u = null == (o = c.value) ? true : o.toString();
  return l.type === i.n4.CHANNEL || l.type === i.n4.MENTIONABLE && null != p.A.getChannel(u) ? "<#".concat(u, ">	") : l.type === i.n4.USER || l.type === i.n4.MENTIONABLE && null != h.default.getUser(u) ? "<@".concat(u, ">") : l.type === i.n4.ROLE || l.type === i.n4.MENTIONABLE && null != _.A.getRole(t.guild_id, null != u ? u : v.dJq) ? "<@&".concat(u, ">") : u
}