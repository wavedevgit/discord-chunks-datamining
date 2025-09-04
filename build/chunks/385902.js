/** Chunk was on 11160 **/
/** chunk id: 385902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => O,
  _: () => b
});
var Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk834209 = require("./834209.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t) {
  let n = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    r = null == n ? true : n.allPowerups[i.A$],
    o = (0, d.ZP)(e, r),
    a = (0, c.q8)(e, t),
    u = null == r ? true : r.storeRemovalDate,
    f = a && null != u && o.type !== h.A3.INACTIVE,
    b = f ? {
      title: m.intl.formatToPlainString(g.default.mgoPkZ, {
        perkName: null == r ? true : r.title
      }),
      description: m.intl.formatToPlainString(g.default.UT9pkJ, {
        dateString: (0, p.Z)(u)
      })
    } : null;
  return {
    shouldShow: f,
    notificationConfig: b
  }
}

function O(e, t) {
  var n, d, h, b;
  let O = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    y = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
    _ = null != (b = (0, u.Z)(e)) && b,
    v = (0, c.q8)(e, t),
    j = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    x = (null == j || null == (n = j.unlockedPowerups) ? true : n[i.A$]) != null,
    C = null == j || null == (d = j.allPowerups) ? true : d[i.A$],
    E = null == C ? true : C.storeRemovalDate,
    S = null == j || null == (h = j.allPowerups) ? true : h[i.XW],
    {
      onActivate: P
    } = (0, f._C)(e, S),
    I = !y && _ && v && x && null != C && null != E && null != S && null != O,
    N = r.useCallback(e => {
      P(e)
    }, [P]),
    Z = r.useMemo(() => {
      if (!I) return null;
      let e = (0, p.Z)(E);
      return {
        firstHeader: C.title,
        secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], {
          dateString: e
        }),
        firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], {
          serverName: O.name
        }),
        secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
          dateString: e,
          boostCount: C.cost
        }),
        thirdBody: m.intl.string(g.default["+zvKPj"]),
        primaryButtonText: m.intl.string(g.default["0uo/LC"]),
        onPrimaryClick: N
      }
    }, [I, C, E, O, N]);
  return {
    shouldShow: I,
    modalConfig: Z
  }
}