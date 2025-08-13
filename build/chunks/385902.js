/** Chunk was on 41753 **/
/** chunk id: 385902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => O,
  _: () => b
});
var Chunk73800 = require("./73800.js"),
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
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t) {
  let n = (0, l.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    r = null == n ? true : n.allPowerups[i.A$],
    o = (0, d.ZP)(e, r),
    s = (0, c.q8)(e, t),
    u = null == r ? true : r.storeRemovalDate,
    p = s && null != u && o.type !== f.A3.INACTIVE,
    b = p ? {
      title: m.intl.formatToPlainString(g.default.mgoPkZ, {
        perkName: null == r ? true : r.title
      }),
      description: m.intl.formatToPlainString(g.default.UT9pkJ, {
        dateString: (0, h.Z)(u)
      })
    } : null;
  return {
    shouldShow: p,
    notificationConfig: b
  }
}

function O(e, t) {
  var n, d, f, b;
  let O = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    _ = (0, l.e7)([s.Z], () => s.Z.hasLayers()),
    y = null != (b = (0, u.Z)(e)) && b,
    C = (0, c.q8)(e, t),
    v = (0, l.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    j = (null == v || null == (n = v.unlockedPowerups) ? true : n[i.A$]) != null,
    E = null == v || null == (d = v.allPowerups) ? true : d[i.A$],
    S = null == E ? true : E.storeRemovalDate,
    x = null == v || null == (f = v.allPowerups) ? true : f[i.XW],
    {
      onActivate: I
    } = (0, p._C)(e, x),
    P = !_ && y && C && j && null != E && null != S && null != x && null != O,
    N = r.useCallback(e => {
      I(e)
    }, [I]),
    w = r.useMemo(() => {
      if (!P) return null;
      let e = (0, h.Z)(S);
      return {
        firstHeader: E.title,
        secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], {
          dateString: e
        }),
        firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], {
          serverName: O.name
        }),
        secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
          dateString: e,
          boostCount: E.cost
        }),
        thirdBody: m.intl.string(g.default["+zvKPj"]),
        primaryButtonText: m.intl.string(g.default["0uo/LC"]),
        onPrimaryClick: N
      }
    }, [P, E, S, O, N]);
  return {
    shouldShow: P,
    modalConfig: w
  }
}