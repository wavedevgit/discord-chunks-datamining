/** Chunk was on 77069 **/
/** chunk id: 323472, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  u: () => T
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    title: e
  } = t;
  return e
}

function d(t) {
  let {
    useTitle: e,
    settingKey: n,
    formatter: i,
    index: l
  } = t, s = e();
  return "string" == typeof s ? i({
    title: s,
    index: l,
    key: n
  }) : s
}

function S(t) {
  let {
    setting: e,
    formatter: n,
    index: l
  } = t;
  return () => (0, i.jsx)(d, {
    useTitle: e.useTitle,
    settingKey: e.key,
    formatter: n,
    index: l
  }, e.key)
}

function g(t) {
  return t.type === a.Jq.LIST
}

function T(t, e) {
  var n, i;
  let {
    limit: s = 2,
    formatter: d = c
  } = null != e ? e : {};
  r()(s > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
  let {
    visibleDirectory: T,
    accessibleDirectory: E
  } = (0, u.t)(), I = null != (n = T.get(t)) ? n : E.get(t);
  r()(null != I && (I.type === a.Jq.ACCORDION || g(I)), "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node");
  let _ = g(I) && null != (i = I.collapseAfter) ? i : 0,
    O = I.layout;
  return l.useMemo(() => {
    let t = _,
      e = [];
    for (let n of O)
      if ("useTitle" in n && null != n.useTitle) {
        if (t > 0) {
          t--;
          continue
        }
        e.push({
          key: n.key,
          useTitle: n.useTitle
        })
      } if (0 === e.length) return "";
    let n = Math.min(s, 3);
    if (e.length <= n)
      if (1 === e.length) return o.intl.format(o.t["3H9tCW"], {
        settingOneHook: S({
          setting: e[0],
          formatter: d,
          index: 0
        })
      });
      else if (2 === e.length) return o.intl.format(o.t.MWryo6, {
      settingOneHook: S({
        setting: e[0],
        formatter: d,
        index: 0
      }),
      settingTwoHook: S({
        setting: e[1],
        formatter: d,
        index: 1
      })
    });
    else return o.intl.format(o.t.a00b5G, {
      settingOneHook: S({
        setting: e[0],
        formatter: d,
        index: 0
      }),
      settingTwoHook: S({
        setting: e[1],
        formatter: d,
        index: 1
      }),
      settingThreeHook: S({
        setting: e[2],
        formatter: d,
        index: 2
      })
    });
    return 1 === n ? o.intl.format(o.t.O8vNbS, {
      settingOneHook: S({
        setting: e[0],
        formatter: d,
        index: 0
      })
    }) : 2 === n ? o.intl.format(o.t["acXG/W"], {
      settingOneHook: S({
        setting: e[0],
        formatter: d,
        index: 0
      }),
      settingTwoHook: S({
        setting: e[1],
        formatter: d,
        index: 1
      })
    }) : o.intl.format(o.t["5+ldWc"], {
      settingOneHook: S({
        setting: e[0],
        formatter: d,
        index: 0
      }),
      settingTwoHook: S({
        setting: e[1],
        formatter: d,
        index: 1
      }),
      settingThreeHook: S({
        setting: e[2],
        formatter: d,
        index: 2
      })
    })
  }, [s, _, O, d])
}