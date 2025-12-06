/** Chunk was on 46467 **/
/** chunk id: 174767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Br: () => s,
  MH: () => c,
  Ol: () => u,
  TG: () => f,
  UF: () => h,
  sJ: () => d
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk439849 = require("./439849.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
async function s(e) {
  if (e.platform_type === a.ABu.XBOX) {
    let t = e.parsed_launch_parameters.titleId,
      n = e.parsed_launch_parameters.inviteToken;
    if (!(0, o.isWindows)() || null == t || null == n) return;
    let r = await p(t, false),
      l = await m(n);
    i.Z.dispatch({
      type: "GAME_INVITE_UPDATE_STATUS",
      inviteId: e.invite_id,
      installed: r,
      joinable: l
    })
  } else throw Error("Unsupported invite platform " + e.platform_type)
}
async function c(e) {
  if (e.platform_type === a.ABu.XBOX) {
    let t = e.parsed_launch_parameters.titleId;
    return !!(0, o.isWindows)() && null != t && await g(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}
async function u(e) {
  if (e.platform_type === a.ABu.XBOX) {
    let t = e.parsed_launch_parameters.inviteToken;
    return !!(0, o.isWindows)() && null != t && await b(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}

function d() {
  Chunk570140.Z.dispatch({
    type: "GAME_INVITE_CLEAR_UNSEEN"
  })
}
async function h(e) {
  await r.tn.del({
    url: a.ANM.GAME_INVITE(e.invite_id),
    rejectWithError: false
  })
}
async function f() {
  await Chunk544891.tn.del({
    url: Chunk981631.ANM.GAME_INVITES,
    rejectWithError: false
  })
}
async function p(e, t) {
  if (!(0, o.isWindows)()) returnfalse;
  let n = await (0, l.Z)();
  return new Promise((r, i) => {
    if ((null == n ? true : n.xboxIsApplicationInstalled) == null) return void i(Error("Game utils module not loaded"));
    n.xboxIsApplicationInstalled(e, t, e => {
      r(e)
    })
  })
}
async function g(e) {
  if (!(0, o.isWindows)()) returnfalse;
  let t = await (0, l.Z)();
  return new Promise((n, r) => {
    if ((null == t ? true : t.xboxLaunchGame) == null) return void r(Error("Game utils module not loaded"));
    t.xboxLaunchGame(e, e => {
      n(e)
    })
  })
}
async function m(e) {
  if (!(0, o.isWindows)()) returnfalse;
  let t = await (0, l.Z)();
  return new Promise((n, r) => {
    if ((null == t ? true : t.xboxIsInviteTokenValid) == null) return void r(Error("Game utils module not loaded"));
    t.xboxIsInviteTokenValid(e, e => {
      n(e)
    })
  })
}
async function b(e) {
  if (!(0, o.isWindows)()) returnfalse;
  let t = await (0, l.Z)();
  return new Promise((n, r) => {
    if ((null == t ? true : t.xboxAcceptGameInvite) == null) return void r(Error("Game utils module not loaded"));
    t.xboxAcceptGameInvite(e, e => {
      n(e)
    })
  })
}