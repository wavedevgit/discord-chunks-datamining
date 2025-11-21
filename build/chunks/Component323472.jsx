/** Chunk was on 9452 **/
/** chunk id: 323472, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  u: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
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
  } = t, r = e();
  return "string" == typeof r ? i({
    title: r,
    index: l,
    key: n
  }) : r
}

function E(t) {
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

function T(t) {
  return t.type === a.Jq.LIST
}

function S(t, e) {
  var n;
  let {
    limit: i = 2,
    formatter: r = c
  } = null != e ? e : {};
  u()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
  let {
    directory: d
  } = (0, s.t)(), S = d.get(t);
  u()(null != S && (S.type === a.Jq.ACCORDION || T(S)), "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node");
  let I = T(S) && null != (n = S.collapseAfter) ? n : 0,
    O = S.layout;
  return l.useMemo(() => {
    let t = I,
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
    let n = Math.min(i, 3);
    if (e.length <= n)
      if (1 === e.length) return o.intl.format(o.t["3H9tCW"], {
        settingOneHook: E({
          setting: e[0],
          formatter: r,
          index: 0
        })
      });
      else if (2 === e.length) return o.intl.format(o.t.MWryo6, {
      settingOneHook: E({
        setting: e[0],
        formatter: r,
        index: 0
      }),
      settingTwoHook: E({
        setting: e[1],
        formatter: r,
        index: 1
      })
    });
    else return o.intl.format(o.t.a00b5G, {
      settingOneHook: E({
        setting: e[0],
        formatter: r,
        index: 0
      }),
      settingTwoHook: E({
        setting: e[1],
        formatter: r,
        index: 1
      }),
      settingThreeHook: E({
        setting: e[2],
        formatter: r,
        index: 2
      })
    });
    return 1 === n ? o.intl.format(o.t.O8vNbS, {
      settingOneHook: E({
        setting: e[0],
        formatter: r,
        index: 0
      })
    }) : 2 === n ? o.intl.format(o.t["acXG/W"], {
      settingOneHook: E({
        setting: e[0],
        formatter: r,
        index: 0
      }),
      settingTwoHook: E({
        setting: e[1],
        formatter: r,
        index: 1
      })
    }) : o.intl.format(o.t["5+ldWc"], {
      settingOneHook: E({
        setting: e[0],
        formatter: r,
        index: 0
      }),
      settingTwoHook: E({
        setting: e[1],
        formatter: r,
        index: 1
      }),
      settingThreeHook: E({
        setting: e[2],
        formatter: r,
        index: 2
      })
    })
  }, [i, I, O, r])
}