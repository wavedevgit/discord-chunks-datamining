/** Chunk was on 16864 **/
/** chunk id: 628103, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  n: () => f
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
  var n, a, c, u;
  let f = (0, d.i)(e);
  if (null == f) throw await p(r, 1, "authorize"), Error("Unsupported client_id for two way link");
  let h = null;
  try {
    let {
      body: e
    } = await l.A.authorize(f, {
      twoWayLinkType: i.I.DEVICE_CODE,
      userCode: r
    });
    h = e.url
  } catch (e) {
    throw await p(r, null != (n = null == e || null == (a = e.body) ? true : a.code) ? n : 0, "authorize"), Error("error during two way authorize")
  }
  let x = null;
  try {
    s()(null != h, "No URL in authorize response");
    let {
      state: e
    } = (0, o.vA)(h);
    s()(null != e, "Authorize URL state query parameter must be present"), x = e
  } catch (e) {
    throw await p(r, 2, "authorize"), Error("error parsing callback params")
  }
  try {
    await l.A.callback(f, {
      code: t,
      state: x
    })
  } catch (e) {
    throw await p(r, null != (c = null == e || null == (u = e.body) ? true : u.code) ? c : 0, "callback"), Error("error during two way callback")
  }
}
async function p(e, t, r) {
  try {
    await (0, c.zf)(e, t, r)
  } catch (e) {}
}

function f(e, t, r) {
  return n.useCallback(async (n, a) => {
    if (!a) {
      try {
        await (0, c.IN)(n.userCode, "denied")
      } catch (e) {}
      e();
      return
    }
    if (null == n.twoWayLinkCode) try {
      await (0, c.IN)(n.userCode, "granted"), r(n)
    } catch (e) {
      t(n)
    } else try {
      await u(n.clientId, n.twoWayLinkCode, n.userCode), r(n)
    } catch (e) {
      t(n)
    }
  }, [e, t, r])
}