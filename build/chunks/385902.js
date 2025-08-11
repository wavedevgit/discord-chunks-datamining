/** Chunk was on 34779 **/
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
  Chunk388032 = require("./388032.js");

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
  var n, d, b, O;
  let _ = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
    y = (0, l.e7)([s.Z], () => s.Z.hasLayers()),
    C = null != (O = (0, u.Z)(e)) && O,
    v = (0, c.q8)(e, t),
    j = (0, l.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    E = (null == j || null == (n = j.unlockedPowerups) ? true : n[i.A$]) != null,
    S = null == j || null == (d = j.allPowerups) ? true : d[i.A$],
    x = null == S ? true : S.storeRemovalDate,
    I = null == j || null == (b = j.allPowerups) ? true : b[f.XW],
    {
      onActivate: P
    } = (0, p._C)(e, I),
    N = !y && C && v && E && null != S && null != x && null != I && null != _,
    w = r.useCallback(e => {
      P(e)
    }, [P]),
    Z = r.useMemo(() => {
      if (!N) return null;
      let e = (0, h.Z)(x);
      return {
        firstHeader: S.title,
        secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], {
          dateString: e
        }),
        firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], {
          serverName: _.name
        }),
        secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
          dateString: e,
          boostCount: S.cost
        }),
        thirdBody: m.intl.string(g.default["+zvKPj"]),
        primaryButtonText: m.intl.string(g.default["0uo/LC"]),
        onPrimaryClick: w
      }
    }, [N, S, x, _, w]);
  return {
    shouldShow: N,
    modalConfig: Z
  }
}