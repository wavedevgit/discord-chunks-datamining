/** Chunk was on 16864 **/
/** chunk id: 628103, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  n: () => p
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk13202 = require("./13202.js"),
  Chunk77468 = require("./77468.js"),
  Chunk370480 = require("./370480.js"),
  Chunk716965 = require("./716965.js"),
  Chunk21251 = require("./21251.js");
async function u(e, t, r) {
  var a, n, o, u;
  let p = (0, d.i)(e);
  if (null == p) throw await f(r, 1, "authorize"), Error("Unsupported client_id for two way link");
  let h = null;
  try {
    let {
      body: e
    } = await l.A.authorize(p, {
      twoWayLinkType: i.I.DEVICE_CODE,
      userCode: r
    });
    h = e.url
  } catch (e) {
    throw await f(r, null != (a = null == e || null == (n = e.body) ? true : n.code) ? a : 0, "authorize"), Error("error during two way authorize")
  }
  let x = null;
  try {
    s()(null != h, "No URL in authorize response");
    let {
      state: e
    } = (0, c.vA)(h);
    s()(null != e, "Authorize URL state query parameter must be present"), x = e
  } catch (e) {
    throw await f(r, 2, "authorize"), Error("error parsing callback params")
  }
  try {
    await l.A.callback(p, {
      code: t,
      state: x
    })
  } catch (e) {
    throw await f(r, null != (o = null == e || null == (u = e.body) ? true : u.code) ? o : 0, "callback"), Error("error during two way callback")
  }
}
async function f(e, t, r) {
  try {
    await (0, o.zf)(e, t, r)
  } catch (e) {}
}

function p(e, t, r) {
  return a.useCallback(async (a, n) => {
    if (!n) {
      try {
        await (0, o.IN)(a.userCode, "denied")
      } catch (e) {}
      e();
      return
    }
    if (null == a.twoWayLinkCode) try {
      await (0, o.IN)(a.userCode, "granted"), r(a)
    } catch (e) {
      t(a)
    } else try {
      await u(a.clientId, a.twoWayLinkCode, a.userCode), r(a)
    } catch (e) {
      t(a)
    }
  }, [e, t, r])
}