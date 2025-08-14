/** Chunk was on 58227 **/
/** chunk id: 570961, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $y: () => O,
  Kk: () => f,
  NB: () => S,
  en: () => j,
  fi: () => p,
  n_: () => x,
  rS: () => T,
  tS: () => E
}), require("./415506.js"), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk881052 = require("./881052.js"),
  Chunk339085 = require("./339085.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk823379 = require("./823379.js"),
  Chunk208665 = require("./208665.js"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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

function S() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
  })
}

function f(e, t, n) {
  E(e, u.Z.editedOnboardingPrompts.map(e => e.id === t ? g({}, e, n) : e))
}

function p(e, t) {
  E(e, u.Z.editedOnboardingPrompts.filter(e => e.id !== t))
}

function E(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  if (i.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
      prompts: t
    }), n) {
    let n = t.map(n => _(e, t, n));
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
      errors: n
    })
  }
}
async function T(e, t) {
  if (!u.Z.hasChanges()) return;
  let n = u.Z.editedOnboardingPrompts;
  null != t && t.ignoreDefaultPrompt && 1 === n.length && (0, h.RF)(n[0]) && (n = []);
  let l = n.map(t => {
      let n = t.options.map(t => {
        let n = null == t.roleIds ? t.roleIds : t.roleIds.filter(t => null != c.Z.getRole(e.id, t)),
          l = null == t.channelIds ? t.channelIds : t.channelIds.filter(e => null != o.Z.getChannel(e));
        return N(g({}, t), {
          roleIds: n,
          channelIds: l,
          emoji: function(e) {
            var t;
            if (null != e && ((null == (t = e.emoji) ? true : t.id) == null || null != a.ZP.getCustomEmojiById(e.emoji.id))) return e.emoji
          }(t)
        })
      });
      return N(g({}, t), {
        options: n,
        type: n.length >= h.fY ? h.FN.DROPDOWN : h.FN.MULTIPLE_CHOICE
      })
    }),
    m = l.filter(e => e.inOnboarding),
    S = l.filter(e => true !== e.inOnboarding),
    f = l.map(t => _(e, l, t));
  if (f.filter(d.lm).length > 0) throw i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
    errors: f
  }), Error("failed to locally validate prompts");
  if (m.length > h.b3) throw r.Z.show({
    title: I.intl.string(I.t.iLdiqa),
    body: I.intl.formatToPlainString(I.t["cTb/rq"], {
      numQuestions: h.b3
    })
  }), i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
    errors: f
  }), Error("too many prompts in onboarding");
  let p = [...m, ...S];
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT"
  });
  try {
    await x(e.id, {
      prompts: p.map(h.dr)
    }), i.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
      guildId: e.id,
      updates: {
        prompts: p
      }
    })
  } catch (n) {
    var E;
    let {
      fieldName: e,
      error: t
    } = null != (E = new s.Hx(n).getAnyErrorMessageAndField()) ? E : {};
    throw r.Z.show({
      title: I.intl.string(I.t.iLdiqa),
      body: [e, t].filter(d.lm).join(": ")
    }), i.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
    }), Error("failed to save prompts")
  }
}
async function O(e, t) {
  i.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
    guildId: e,
    updates: {
      enabled: t
    }
  });
  try {
    await x(e, {
      enabled: t
    })
  } catch (l) {
    var n;
    let {
      fieldName: e,
      error: t
    } = null != (n = new s.Hx(l).getAnyErrorMessageAndField()) ? n : {};
    r.Z.show({
      title: I.intl.string(I.t.iLdiqa),
      body: [e, t].filter(d.lm).join(": ")
    })
  }
}
async function x(e, t) {
  await l.tn.put({
    url: m.ANM.GUILD_ONBOARDING(e),
    body: t,
    rejectWithError: false
  })
}

function _(e, t, n) {
  let l = {
      optionErrors: []
    },
    i = false;
  return n.title.length <= 0 && (l.title = I.intl.string(I.t.h8Hg1d), i = true), n.options.length <= 0 && (l.options = I.intl.string(I.t["64tF+f"]), i = true), n.inOnboarding && t.filter(e => e.inOnboarding).length > h.b3 && (l.config = I.intl.formatToPlainString(I.t["cTb/rq"], {
    numQuestions: h.b3
  }), i = true), l.optionErrors = n.options.map(l => j(e, t, n, l)), (i = i || l.optionErrors.some(e => null != e)) ? l : null
}

function j(e, t, n, l) {
  var i, r, s;
  if (n.singleSelect) {
    let e = new Set(null != (i = l.roleIds) ? i : []);
    for (let l of t)
      if (l.id !== n.id) {
        for (let t of l.options)
          if (null != t.roleIds && t.roleIds.some(t => e.has(t))) return I.intl.string(I.t.rKxyvb)
      }
  }
  let a = (null != (r = l.roleIds) ? r : []).filter(t => null != c.Z.getRole(e.id, t)),
    d = (null != (s = l.channelIds) ? s : []).filter(e => null != o.Z.getChannel(e));
  return 0 === a.length && 0 === d.length ? I.intl.string(I.t.F6SUWF) : null
}