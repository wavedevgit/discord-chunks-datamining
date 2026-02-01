/** Chunk was on 30485 **/
/** chunk id: 419117, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk199966 = require("./199966.js"),
  Chunk963935 = require("./963935.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  let {
    title: e
  } = t;
  return e
}

function T(t) {
  let {
    useTitle: e,
    settingKey: i,
    formatter: n,
    index: l
  } = t, s = e();
  return "string" == typeof s ? n({
    title: s,
    index: l,
    key: i
  }) : s
}

function A(t) {
  let {
    setting: e,
    formatter: i,
    index: l
  } = t;
  return () => (0, n.jsx)(T, {
    useTitle: e.useTitle,
    settingKey: e.key,
    formatter: i,
    index: l
  }, e.key)
}

function S(t) {
  return t.type === a.Z6.LIST
}

function c(t, e) {
  var i, n;
  let {
    limit: s = 2,
    formatter: T = d
  } = null != e ? e : {};
  r()(s > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
  let {
    visibleDirectory: c,
    accessibleDirectory: E
  } = (0, u._)(), g = null != (i = c.get(t)) ? i : E.get(t);
  r()(null != g && (g.type === a.Z6.ACCORDION || S(g)), "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node");
  let _ = S(g) && null != (n = g.collapseAfter) ? n : 0,
    I = g.layout;
  return l.useMemo(() => {
    let t = _,
      e = [];
    for (let i of I)
      if ("useTitle" in i && null != i.useTitle) {
        if (t > 0) {
          t--;
          continue
        }
        e.push({
          key: i.key,
          useTitle: i.useTitle
        })
      } if (0 === e.length) return "";
    let i = Math.min(s, 3);
    if (e.length <= i)
      if (1 === e.length) return o.intl.format(o.t["3H9tCW"], {
        settingOneHook: A({
          setting: e[0],
          formatter: T,
          index: 0
        })
      });
      else if (2 === e.length) return o.intl.format(o.t.MWryo6, {
      settingOneHook: A({
        setting: e[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: A({
        setting: e[1],
        formatter: T,
        index: 1
      })
    });
    else return o.intl.format(o.t.a00b5G, {
      settingOneHook: A({
        setting: e[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: A({
        setting: e[1],
        formatter: T,
        index: 1
      }),
      settingThreeHook: A({
        setting: e[2],
        formatter: T,
        index: 2
      })
    });
    return 1 === i ? o.intl.format(o.t.O8vNbS, {
      settingOneHook: A({
        setting: e[0],
        formatter: T,
        index: 0
      })
    }) : 2 === i ? o.intl.format(o.t["acXG/W"], {
      settingOneHook: A({
        setting: e[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: A({
        setting: e[1],
        formatter: T,
        index: 1
      })
    }) : o.intl.format(o.t["5+ldWc"], {
      settingOneHook: A({
        setting: e[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: A({
        setting: e[1],
        formatter: T,
        index: 1
      }),
      settingThreeHook: A({
        setting: e[2],
        formatter: T,
        index: 2
      })
    })
  }, [s, _, I, T])
}