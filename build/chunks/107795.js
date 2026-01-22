/** Chunk was on 50796 **/
/** chunk id: 107795, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ME: () => O,
  NF: () => p,
  P3: () => I,
  WC: () => S,
  YN: () => _,
  dm: () => A,
  fO: () => T,
  gr: () => x,
  xR: () => E
}), require("./65821.js"), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk198982 = require("./198982.js"),
  Chunk508675 = require("./508675.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk403362 = require("./403362.js"),
  Chunk655943 = require("./655943.js"),
  Chunk652215 = require("./652215.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I() {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
  })
}

function p(e, t, n) {
  S(e, u.A.editedOnboardingPrompts.map(e => e.id === t ? h({}, e, n) : e))
}

function O(e, t) {
  S(e, u.A.editedOnboardingPrompts.filter(e => e.id !== t))
}

function S(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  if (r.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
      prompts: t
    }), n) {
    let n = t.map(n => j(e, t, n));
    r.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
      errors: n
    })
  }
}

function E(e, t) {
  let n;
  if (!u.A.hasChanges()) return null;
  let l = (n = u.A.getChangedPrompts(), null != t && t.ignoreDefaultPrompt && 1 === n.length && (0, g.Km)(n[0]) && (n = []), n),
    s = u.A.editedOnboardingPrompts,
    m = s.map(t => {
      if (!l.some(e => e.id === t.id)) return t;
      let n = t.options.map(t => {
        let n = null == t.roleIds ? t.roleIds : t.roleIds.filter(t => null != c.A.getRole(e.id, t)),
          l = null == t.channelIds ? t.channelIds : t.channelIds.filter(e => null != o.A.getChannel(e));
        return N(h({}, t), {
          roleIds: n,
          channelIds: l,
          emoji: function(e) {
            var t;
            if (null != e && ((null == (t = e.emoji) ? true : t.id) == null || null != a.Ay.getCustomEmojiById(e.emoji.id))) return e.emoji
          }(t)
        })
      });
      return N(h({}, t), {
        options: n,
        type: n.length >= g.Bu ? g.ME.DROPDOWN : g.ME.MULTIPLE_CHOICE
      })
    });
  if (0 === m.length) return null;
  let I = m.filter(e => e.inOnboarding),
    p = m.filter(e => true !== e.inOnboarding),
    O = m.map(t => l.some(e => e.id === t.id) ? j(e, m, t) : null);
  if (O.filter(d.Vq).length > 0) throw r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
    errors: O
  }), Error("failed to locally validate prompts");
  if (I.length > g.D1) throw i.A.show({
    title: f.intl.string(f.t.iLdiqY),
    body: f.intl.formatToPlainString(f.t["cTb/rg"], {
      numQuestions: g.D1
    })
  }), r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
    errors: O
  }), Error("too many prompts in onboarding");
  return [...I, ...p]
}
async function A(e, t) {
  if (!u.A.hasChanges()) return;
  let n = E(e, t);
  null == n && (n = []), r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT"
  });
  try {
    await _(e.id, {
      prompts: n.map(g.SA)
    }), r.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
      guildId: e.id,
      updates: {
        prompts: n
      }
    })
  } catch (n) {
    var l;
    let {
      fieldName: e,
      error: t
    } = null != (l = new s.LG(n).getAnyErrorMessageAndField()) ? l : {};
    throw i.A.show({
      title: f.intl.string(f.t.iLdiqY),
      body: [e, t].filter(d.Vq).join(": ")
    }), r.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
    }), Error("failed to save prompts")
  }
}
async function x(e, t) {
  r.h.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
    guildId: e,
    updates: {
      enabled: t
    }
  });
  try {
    await _(e, {
      enabled: t
    })
  } catch (l) {
    var n;
    let {
      fieldName: e,
      error: t
    } = null != (n = new s.LG(l).getAnyErrorMessageAndField()) ? n : {};
    i.A.show({
      title: f.intl.string(f.t.iLdiqY),
      body: [e, t].filter(d.Vq).join(": ")
    })
  }
}
async function _(e, t) {
  await l.Bo.put({
    url: m.Rsh.GUILD_ONBOARDING(e),
    body: t,
    rejectWithError: false
  })
}

function j(e, t, n) {
  let l = {
      optionErrors: []
    },
    r = false;
  return n.title.length <= 0 && (l.title = f.intl.string(f.t.h8Hg1T), r = true), n.options.length <= 0 && (l.options = f.intl.string(f.t["64tF+W"]), r = true), n.inOnboarding && t.filter(e => e.inOnboarding).length > g.D1 && (l.config = f.intl.formatToPlainString(f.t["cTb/rg"], {
    numQuestions: g.D1
  }), r = true), l.optionErrors = n.options.map(l => T(e, t, n, l)), (r = r || l.optionErrors.some(e => null != e)) ? l : null
}

function T(e, t, n, l) {
  var r, i, s;
  if (n.singleSelect) {
    let e = new Set(null != (s = l.roleIds) ? s : []);
    for (let l of t)
      if (l.id !== n.id) {
        for (let t of l.options)
          if (null != t.roleIds && t.roleIds.some(t => e.has(t))) return f.intl.string(f.t.rKxyvd)
      }
  }
  let a = (null != (r = l.roleIds) ? r : []).filter(t => null != c.A.getRole(e.id, t)),
    d = (null != (i = l.channelIds) ? i : []).filter(e => null != o.A.getChannel(e));
  return 0 === a.length && 0 === d.length ? f.intl.string(f.t.F6SUWB) : null
}