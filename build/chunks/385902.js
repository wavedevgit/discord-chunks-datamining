/** Chunk was on 85362 **/
/** chunk id: 385902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => _,
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

function _(e, t) {
  var n, d, h, b;
  let _ = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    O = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
    y = null != (b = (0, u.Z)(e)) && b,
    v = (0, c.q8)(e, t),
    j = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
    C = (null == j || null == (n = j.unlockedPowerups) ? true : n[i.A$]) != null,
    E = null == j || null == (d = j.allPowerups) ? true : d[i.A$],
    x = null == E ? true : E.storeRemovalDate,
    S = null == j || null == (h = j.allPowerups) ? true : h[i.XW],
    {
      onActivate: I
    } = (0, f._C)(e, S),
    P = !O && y && v && C && null != E && null != x && null != S && null != _,
    N = r.useCallback(e => {
      I(e)
    }, [I]),
    w = r.useMemo(() => {
      if (!P) return null;
      let e = (0, p.Z)(x);
      return {
        firstHeader: E.title,
        secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], {
          dateString: e
        }),
        firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], {
          serverName: _.name
        }),
        secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
          dateString: e,
          boostCount: E.cost
        }),
        thirdBody: m.intl.string(g.default["+zvKPj"]),
        primaryButtonText: m.intl.string(g.default["0uo/LC"]),
        onPrimaryClick: N
      }
    }, [P, E, x, _, N]);
  return {
    shouldShow: P,
    modalConfig: w
  }
}